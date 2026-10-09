import { useEffect, useState } from 'react'
import { projects as local } from './projects'
export function useProjects() {
  const [remote, setRemote] = useState([])
  useEffect(() => {
    const c = new AbortController()
    fetch('/api/cms?a=work', { signal: c.signal })
      .then(r => (r.ok ? r.json() : { projects: [] }))
      .then(d => setRemote(Array.isArray(d.projects) ? d.projects : []))
      .catch(() => {})
    return () => c.abort()
  }, [])
  const slugs = new Set(remote.map(p => p.slug))
  return { projects: [...remote, ...local.filter(p => !slugs.has(p.slug))] }
}
