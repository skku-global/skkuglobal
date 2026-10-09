import { MongoClient, ObjectId } from 'mongodb'
import jwt from 'jsonwebtoken'
import crypto from 'crypto'
import { z } from 'zod'

let clientP = null
async function db() {
  if (!process.env.MONGO_URI) throw new Error('no db')
  if (!clientP) clientP = new MongoClient(process.env.MONGO_URI, { serverSelectionTimeoutMS: 8000 }).connect()
  try { return (await clientP).db(process.env.DB_NAME || 'skkuglobal') } catch (e) { clientP = null; throw e }
}
const link = z.string().trim().max(500).refine(v => /^https:\/\//i.test(v), 'Links must start with https://')
const optLink = z.union([z.literal(''), link]).default('')
const text = n => z.string().trim().max(n).default('')
const schema = z.object({
  title: z.string().trim().min(1).max(120),
  result: text(160), problem: text(600), solution: text(600), outcome: text(300),
  liveUrl: optLink, image: optLink,
  stack: z.array(z.string().trim().min(1).max(30)).max(12).default([]),
  gallery: z.array(link).max(6).default([]),
  published: z.boolean().default(true)
})
const slugify = t => t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 60) || 'project'
const shape = p => ({ id: String(p._id), slug: p.pslug, title: p.title, result: p.result, problem: p.problem, solution: p.solution, outcome: p.outcome, liveUrl: p.liveUrl, image: p.image, gallery: p.gallery || [], stack: p.stack || [], published: p.published !== false })
const sha = s => crypto.createHash('sha256').update(String(s)).digest()
const safeEqual = (a, b) => b.length >= 10 && crypto.timingSafeEqual(sha(a), sha(b))
function authed(req) {
  try { jwt.verify(String(req.headers.authorization || '').replace(/^Bearer /, ''), process.env.JWT_SECRET); return true } catch { return false }
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store')
  const a = String(req.query.a || '')
  try {
    const d = await db()
    const col = d.collection('work')
    if (req.method === 'GET' && a === 'work') {
      const list = await col.find({ published: { $ne: false } }).sort({ created_at: -1 }).limit(200).toArray()
      res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=300')
      return res.status(200).json({ projects: list.map(shape) })
    }
    if (req.method === 'POST' && a === 'login') {
      if (!process.env.JWT_SECRET) return res.status(500).json({ error: 'Server error' })
      const ip = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim() || 'unknown'
      const att = d.collection('attempts')
      await att.createIndex({ at: 1 }, { expireAfterSeconds: 900 }).catch(() => {})
      const fails = await att.countDocuments({ ip, at: { $gt: new Date(Date.now() - 900000) } })
      if (fails >= 5) return res.status(429).json({ error: 'Too many attempts. Try again in 15 minutes.' })
      if (!safeEqual(String((req.body || {}).password || ''), process.env.ADMIN_PASSWORD || '')) {
        await att.insertOne({ ip, at: new Date() })
        return res.status(401).json({ error: 'Wrong password' })
      }
      return res.status(200).json({ token: jwt.sign({ r: 'admin' }, process.env.JWT_SECRET, { expiresIn: '12h' }) })
    }
    if (!authed(req)) return res.status(401).json({ error: 'Login required' })
    if (req.method === 'GET' && a === 'list') {
      const list = await col.find({}).sort({ created_at: -1 }).limit(200).toArray()
      return res.status(200).json({ projects: list.map(shape) })
    }
    if (req.method === 'POST' && a === 'save') {
      const body = req.body || {}
      const p = schema.safeParse(body)
      if (!p.success) return res.status(400).json({ error: p.error.issues[0].message || 'Invalid project' })
      if (body.id) {
        if (!ObjectId.isValid(body.id)) return res.status(400).json({ error: 'Invalid id' })
        const r = await col.updateOne({ _id: new ObjectId(body.id) }, { $set: p.data })
        if (!r.matchedCount) return res.status(404).json({ error: 'Not found' })
        return res.status(200).json({ ok: true })
      }
      if (await col.countDocuments({}) >= 200) return res.status(400).json({ error: 'Project limit reached' })
      const base = slugify(p.data.title)
      let pslug = base, n = 2
      while (await col.findOne({ pslug })) pslug = base + '-' + (n++)
      await col.insertOne({ ...p.data, pslug, created_at: new Date() })
      return res.status(200).json({ ok: true })
    }
    if (req.method === 'POST' && a === 'remove') {
      const id = (req.body || {}).id
      if (!ObjectId.isValid(id)) return res.status(400).json({ error: 'Invalid id' })
      await col.deleteOne({ _id: new ObjectId(id) })
      return res.status(200).json({ ok: true })
    }
    return res.status(404).json({ error: 'Not found' })
  } catch {
    return res.status(500).json({ error: 'Server error' })
  }
}
