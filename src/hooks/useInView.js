import { useState, useEffect, useRef } from 'react'

/**
 * useInView — returns [ref, inView].
 * Triggers once when the element enters the viewport.
 * @param {number} threshold – 0–1 intersection ratio to trigger (default 0.2)
 */
export default function useInView(threshold = 0.2) {
  const ref    = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()   // fire once only
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, inView]
}
