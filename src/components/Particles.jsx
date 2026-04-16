import { useEffect, useRef } from 'react'

const PARTICLE_COUNT = 80
const CONNECTION_DIST = 120

export default function Particles() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx    = canvas.getContext('2d')

    let W = (canvas.width  = window.innerWidth)
    let H = (canvas.height = window.innerHeight)

    // initialise particles
    const pts = Array.from({ length: PARTICLE_COUNT }, () => ({
      x:     Math.random() * W,
      y:     Math.random() * H,
      r:     Math.random() * 1.5 + 0.3,
      vx:    (Math.random() - 0.5) * 0.4,
      vy:    (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.5 + 0.1,
    }))

    let raf

    const draw = () => {
      ctx.clearRect(0, 0, W, H)

      // move & draw dots
      pts.forEach(p => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0)  p.x = W
        if (p.x > W)  p.x = 0
        if (p.y < 0)  p.y = H
        if (p.y > H)  p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(180,160,255,${p.alpha})`
        ctx.fill()
      })

      // draw connecting lines
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x
          const dy = pts[i].y - pts[j].y
          const d  = Math.sqrt(dx * dx + dy * dy)
          if (d < CONNECTION_DIST) {
            ctx.beginPath()
            ctx.moveTo(pts[i].x, pts[i].y)
            ctx.lineTo(pts[j].x, pts[j].y)
            ctx.strokeStyle = `rgba(150,120,255,${0.12 * (1 - d / CONNECTION_DIST)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      raf = requestAnimationFrame(draw)
    }

    draw()

    const onResize = () => {
      W = canvas.width  = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position:      'fixed',
        inset:         0,
        zIndex:        0,
        pointerEvents: 'none',
        opacity:       0.7,
      }}
    />
  )
}
