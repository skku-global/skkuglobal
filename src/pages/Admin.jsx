import { useState, useEffect } from 'react'
import './admin.css'
const CLOUD = import.meta.env.VITE_CLOUD
const PRESET = import.meta.env.VITE_PRESET
const TK = 'admin_token'
const empty = { title: '', result: '', problem: '', solution: '', outcome: '', liveUrl: '', image: '', gallery: [], stack: '', published: true }
async function upload(file) {
  if (!CLOUD || !PRESET) throw new Error('Image upload is not set up. Paste an image link instead.')
  if (file.size > 8 * 1024 * 1024) throw new Error('Image is too large (max 8 MB)')
  const fd = new FormData()
  fd.append('file', file)
  fd.append('upload_preset', PRESET)
  const r = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD}/image/upload`, { method: 'POST', body: fd })
  const d = await r.json()
  if (!r.ok || !d.secure_url) throw new Error('Upload failed. Try again.')
  return d.secure_url.replace('/upload/', '/upload/f_auto,q_auto,w_1200/')
}
export default function Admin() {
  const [token, setToken] = useState(() => sessionStorage.getItem(TK) || '')
  const [pw, setPw] = useState('')
  const [items, setItems] = useState([])
  const [form, setForm] = useState(empty)
  const [editId, setEditId] = useState(null)
  const [busy, setBusy] = useState(false)
  const [msg, setMsg] = useState('')
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))
  useEffect(() => {
    const m = document.createElement('meta')
    m.name = 'robots'; m.content = 'noindex'
    document.head.appendChild(m)
    return () => m.remove()
  }, [])
  function logout(note = '') { sessionStorage.removeItem(TK); setToken(''); setItems([]); setMsg(note) }
  async function call(a, body) {
    const r = await fetch('/api/cms?a=' + a, {
      method: body === undefined ? 'GET' : 'POST',
      headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: 'Bearer ' + token } : {}) },
      body: body === undefined ? undefined : JSON.stringify(body)
    })
    const d = await r.json().catch(() => ({}))
    if (r.status === 401 && token) { logout('Session expired. Log in again.'); throw new Error('Session expired') }
    if (!r.ok) throw new Error(d.error || 'Something went wrong')
    return d
  }
  async function load() { try { setItems((await call('list')).projects) } catch (e) { setMsg(e.message) } }
  useEffect(() => { if (token) load() }, [token])
  async function login(e) {
    e.preventDefault(); setBusy(true); setMsg('')
    try {
      const d = await call('login', { password: pw })
      sessionStorage.setItem(TK, d.token); setToken(d.token); setPw('')
    } catch (e2) { setMsg(e2.message === 'Failed to fetch' ? 'No connection. Try again.' : e2.message) }
    setBusy(false)
  }
  async function save(e) {
    e.preventDefault(); setBusy(true); setMsg('')
    try {
      await call('save', { ...form, id: editId || undefined, stack: form.stack.split(',').map(x => x.trim()).filter(Boolean) })
      setForm(empty); setEditId(null); await load(); setMsg('Saved')
    } catch (e2) { setMsg(e2.message) }
    setBusy(false)
  }
  async function pickCover(e) {
    const f = e.target.files[0]
    if (!f) return
    setBusy(true); setMsg('')
    try { set('image', await upload(f)) } catch (e2) { setMsg(e2.message) }
    setBusy(false); e.target.value = ''
  }
  async function pickGallery(e) {
    const files = [...e.target.files].slice(0, 6 - form.gallery.length)
    if (!files.length) return
    setBusy(true); setMsg('')
    try {
      const urls = []
      for (const f of files) urls.push(await upload(f))
      setForm(x => ({ ...x, gallery: [...x.gallery, ...urls] }))
    } catch (e2) { setMsg(e2.message) }
    setBusy(false); e.target.value = ''
  }
  function edit(p) {
    setEditId(p.id)
    setForm({ title: p.title, result: p.result || '', problem: p.problem || '', solution: p.solution || '', outcome: p.outcome || '', liveUrl: p.liveUrl || '', image: p.image || '', gallery: p.gallery || [], stack: (p.stack || []).join(', '), published: p.published !== false })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  async function del(p) {
    if (!confirm('Delete ' + p.title + '?')) return
    try { await call('remove', { id: p.id }); await load() } catch (e) { setMsg(e.message) }
  }
  async function toggle(p) {
    try { await call('save', { ...p, published: !p.published }); await load() } catch (e) { setMsg(e.message) }
  }
  if (!token) return (
    <div className="adm"><main className="adm-box">
      <p className="adm-eyebrow">Admin</p>
      <h1>Log in</h1>
      <form onSubmit={login}>
        <input type="password" placeholder="Password" value={pw} onChange={e => setPw(e.target.value)} />
        <button className="adm-cta" disabled={busy || pw.length < 6}>{busy ? 'Please wait' : 'Log in'}</button>
      </form>
      {msg && <p className="adm-err">{msg}</p>}
    </main></div>
  )
  return (
    <div className="adm"><main className="adm-box wide">
      <div className="adm-top"><div><p className="adm-eyebrow">Admin</p><h1>Work</h1></div><button className="adm-link" onClick={() => logout()}>Log out</button></div>
      <form onSubmit={save} className="adm-card">
        <h3>{editId ? 'Edit project' : 'Add project'}</h3>
        <input placeholder="Project name" value={form.title} onChange={e => set('title', e.target.value)} />
        <input placeholder="One-line result (e.g. Scam messages → a clear risk verdict)" value={form.result} onChange={e => set('result', e.target.value)} />
        <textarea placeholder="The problem" rows={3} value={form.problem} onChange={e => set('problem', e.target.value)} />
        <textarea placeholder="What you built (solution)" rows={3} value={form.solution} onChange={e => set('solution', e.target.value)} />
        <input placeholder="Outcome" value={form.outcome} onChange={e => set('outcome', e.target.value)} />
        <input placeholder="Live link (https://...)" value={form.liveUrl} onChange={e => set('liveUrl', e.target.value)} />
        <input placeholder="Tech used, separated by commas" value={form.stack} onChange={e => set('stack', e.target.value)} />
        <p className="adm-lbl">Cover image</p>
        {form.image && <img className="adm-prev" src={form.image} alt="" />}
        <input type="file" accept="image/*" onChange={pickCover} />
        <input placeholder="or paste an image link (https)" value={form.image} onChange={e => set('image', e.target.value)} />
        <p className="adm-lbl">Gallery ({form.gallery.length}/6)</p>
        <div className="adm-thumbs">
          {form.gallery.map((u, i) => (
            <div key={u + i}><img src={u} alt="" /><button type="button" onClick={() => set('gallery', form.gallery.filter((_, j) => j !== i))}>×</button></div>
          ))}
        </div>
        {form.gallery.length < 6 && <input type="file" accept="image/*" multiple onChange={pickGallery} />}
        <label className="adm-chk"><input type="checkbox" checked={form.published} onChange={e => set('published', e.target.checked)} /> Published (visible on the site)</label>
        <button className="adm-cta" disabled={busy || !form.title.trim()}>{busy ? 'Please wait' : editId ? 'Save changes' : 'Add project'}</button>
        {editId && <button type="button" className="adm-ghost" onClick={() => { setEditId(null); setForm(empty) }}>Cancel edit</button>}
      </form>
      {msg && <p className={msg === 'Saved' ? 'adm-ok' : 'adm-err'}>{msg}</p>}
      <h3>{items.length} project{items.length === 1 ? '' : 's'}</h3>
      {items.map(p => (
        <div className="adm-row" key={p.id}>
          {p.image ? <img src={p.image} alt="" /> : <div className="adm-ph" />}
          <div className="adm-info"><strong>{p.title}</strong><span>{p.result}</span><span className={p.published ? 'in' : 'out'}>{p.published ? 'Published' : 'Draft'}</span></div>
          <div className="adm-acts"><button onClick={() => edit(p)}>Edit</button><button onClick={() => toggle(p)}>{p.published ? 'Hide' : 'Publish'}</button><button onClick={() => del(p)}>Delete</button></div>
        </div>
      ))}
    </main></div>
  )
}
