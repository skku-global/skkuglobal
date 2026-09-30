import { useState, useRef, useEffect, useCallback } from 'react'
import { FaWhatsapp } from 'react-icons/fa6'
import { waLink } from '../seo/siteMeta.js'
import './WhatsAppFloat.css'

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
    // Only primary button
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
        href={waLink('Hello SKKU Global, I want to get a quote to build a website/web application for my business.')}
        target="_blank"
        rel="noreferrer"
        className="wa-floating-capsule"
        onClick={handleClick}
        draggable={false}
        aria-label="Chat on WhatsApp with Founder for Website Quote"
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
          <FaWhatsapp size={21} className="wa-svg-icon" />
          <span className="wa-radar-beacon">
            <span className="wa-radar-wave" />
            <span className="wa-radar-core" />
          </span>
        </span>

        {/* Clear, High-Converting Client-Facing Label */}
        <span className="wa-capsule-copy">
          <span className="wa-copy-eyebrow">NEED A WEBSITE?</span>
          <span className="wa-copy-title">Get a Free Quote</span>
        </span>
      </a>
    </div>
  )
}
