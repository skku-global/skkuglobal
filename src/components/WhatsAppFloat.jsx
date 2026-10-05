import { useState, useRef, useEffect, useCallback } from 'react'
import { waLink } from '../seo/siteMeta.js'
import './WhatsAppFloat.css'

function WhatsAppNativeIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.28-2.42 5.84a8.19 8.19 0 0 1-5.82 2.41h-.01c-1.46 0-2.89-.39-4.14-1.13l-.3-.18-3.12.82.83-3.04-.2-.31a8.17 8.17 0 0 1-1.25-4.41c0-4.54 3.7-8.24 8.24-8.24m4.53 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06s-1.05-.39-2-1.23c-.74-.66-1.24-1.47-1.39-1.72s-.02-.38.11-.51c.11-.11.25-.29.37-.43.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44s-.56-1.35-.77-1.85c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31s-.88.86-.88 2.1 1.02 2.44 1.16 2.63c.14.19 2.01 3.07 4.88 4.31.68.29 1.22.47 1.63.6.69.22 1.31.19 1.8.12.55-.08 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.18-.47-.3" />
    </svg>
  )
}

export default function WhatsAppFloat() {
  const containerRef = useRef(null)
  const isDraggingRef = useRef(false)
  const dragStartPosRef = useRef({ x: 0, y: 0 })
  const elementStartPosRef = useRef({ x: 0, y: 0 })
  const hasMovedRef = useRef(false)

  // Position state: null means default bottom-right CSS positioning
  const [position, setPosition] = useState(null)
  const [isDragging, setIsDragging] = useState(false)

  // Handle pointer down (mouse or touch)
  const handlePointerDown = (e) => {
    if (e.button !== 0 && e.pointerType === 'mouse') return

    const container = containerRef.current
    if (!container) return

    const rect = container.getBoundingClientRect()
    isDraggingRef.current = true
    hasMovedRef.current = false
    dragStartPosRef.current = { x: e.clientX, y: e.clientY }
    elementStartPosRef.current = { x: rect.left, y: rect.top }

    container.setPointerCapture(e.pointerId)
  }

  // Handle pointer move
  const handlePointerMove = useCallback((e) => {
    if (!isDraggingRef.current) return

    const dx = e.clientX - dragStartPosRef.current.x
    const dy = e.clientY - dragStartPosRef.current.y

    // Threshold to distinguish click vs drag
    if (!hasMovedRef.current && Math.hypot(dx, dy) > 5) {
      hasMovedRef.current = true
      setIsDragging(true)
    }

    if (hasMovedRef.current) {
      const container = containerRef.current
      const width = container ? container.offsetWidth : 210
      const height = container ? container.offsetHeight : 54

      const margin = 12
      const maxX = window.innerWidth - width - margin
      const maxY = window.innerHeight - height - margin

      const newX = Math.max(margin, Math.min(elementStartPosRef.current.x + dx, maxX))
      const newY = Math.max(margin, Math.min(elementStartPosRef.current.y + dy, maxY))

      setPosition({ x: newX, y: newY })
    }
  }, [])

  // Handle pointer up
  const handlePointerUp = useCallback((e) => {
    if (!isDraggingRef.current) return
    isDraggingRef.current = false
    setIsDragging(false)

    try {
      if (containerRef.current?.hasPointerCapture(e.pointerId)) {
        containerRef.current.releasePointerCapture(e.pointerId)
      }
    } catch {
      // Ignored
    }
  }, [])

  // Reposition on window resize if custom position is active
  useEffect(() => {
    const handleResize = () => {
      setPosition((prev) => {
        if (!prev) return null
        const container = containerRef.current
        const width = container ? container.offsetWidth : 210
        const height = container ? container.offsetHeight : 54
        const margin = 12
        return {
          x: Math.max(margin, Math.min(prev.x, window.innerWidth - width - margin)),
          y: Math.max(margin, Math.min(prev.y, window.innerHeight - height - margin)),
        }
      })
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Intercept click if dragging occurred
  const handleClick = (e) => {
    if (hasMovedRef.current) {
      e.preventDefault()
      e.stopPropagation()
      hasMovedRef.current = false
    }
  }

  const containerStyle = position
    ? { left: `${position.x}px`, top: `${position.y}px`, right: 'auto', bottom: 'auto' }
    : undefined

  return (
    <div
      ref={containerRef}
      className={`wa-floating-widget ${isDragging ? 'is-dragging' : ''} ${position ? 'is-repositioned' : ''}`}
      style={containerStyle}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      role="region"
      aria-label="Movable WhatsApp Contact Button"
    >
      <a
        href={waLink('Hello SKKU Global, I want to discuss a project / get a quote.')}
        target="_blank"
        rel="noreferrer"
        className="wa-floating-capsule"
        onClick={handleClick}
        draggable={false}
        aria-label="Chat on WhatsApp: 08057215622"
      >
        {/* Subtle Grip Drag Handle */}
        <span className="wa-drag-grip" title="Drag to move anywhere" aria-hidden="true">
          <span className="grip-dot" />
          <span className="grip-dot" />
          <span className="grip-dot" />
          <span className="grip-dot" />
          <span className="grip-dot" />
          <span className="grip-dot" />
        </span>

        {/* WhatsApp Icon with Glowing Radar Beacon */}
        <span className="wa-bubble-icon" aria-hidden="true">
          <WhatsAppNativeIcon size={20} />
          <span className="wa-radar-beacon">
            <span className="wa-radar-wave" />
            <span className="wa-radar-core" />
          </span>
        </span>

        {/* Clear, High-Converting Client-Facing Label */}
        <span className="wa-capsule-copy">
          <span className="wa-copy-eyebrow">WHATSAPP: 08057215622</span>
          <span className="wa-copy-title">Chat with Founder</span>
        </span>
      </a>
    </div>
  )
}
