import { useRef, useState } from 'react'

/**
 * Card3D — wraps children in a perspective-tracked 3D tilt card.
 *
 * Props:
 *   style      – additional inline styles merged onto the outer div
 *   className  – class name(s) passed to the outer div
 *   maxTilt    – max tilt in degrees (default 10)
 *   children   – card content
 */
export default function Card3D({
  children,
  style     = {},
  className = '',
  maxTilt   = 10,
}) {
  const ref            = useRef(null)
  const [rot, setRot]  = useState({ x: 0, y: 0 })
  const [hover, setHover] = useState(false)

  const onMove = e => {
    const rect = ref.current.getBoundingClientRect()
    const cx   = rect.left + rect.width  / 2
    const cy   = rect.top  + rect.height / 2
    const dx   = (e.clientX - cx) / (rect.width  / 2)
    const dy   = (e.clientY - cy) / (rect.height / 2)
    setRot({ x: -dy * maxTilt, y: dx * maxTilt })
  }

  const onLeave = () => {
    setHover(false)
    setRot({ x: 0, y: 0 })
  }

  const transform = hover
    ? `perspective(800px) rotateX(${rot.x}deg) rotateY(${rot.y}deg) translateZ(10px)`
    : 'perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px)'

  const transition = hover
    ? 'transform 0.1s ease'
    : 'transform 0.5s cubic-bezier(.23,1,.32,1)'

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={onMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={onLeave}
      style={{ ...style, transform, transition, willChange: 'transform' }}
    >
      {children}
    </div>
  )
}
