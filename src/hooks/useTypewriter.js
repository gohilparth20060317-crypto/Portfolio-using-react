import { useState, useEffect, useRef } from 'react'

/**
 * useTypewriter — cycles through an array of strings with a typewriter effect.
 * @param {string[]} words   – array of strings to cycle through
 * @param {number}   typeMs  – ms per character when typing   (default 90)
 * @param {number}   deleteMs– ms per character when deleting (default 55)
 * @param {number}   pauseMs – ms to pause at full word       (default 1800)
 */
export default function useTypewriter(
  words,
  typeMs = 90,
  deleteMs = 55,
  pauseMs = 1800
) {
  const [text, setText] = useState('')
  const idx      = useRef(0)
  const charIdx  = useRef(0)
  const deleting = useRef(false)
  const timer    = useRef(null)

  useEffect(() => {
    const tick = () => {
      const word = words[idx.current]

      if (!deleting.current) {
        charIdx.current++
        setText(word.slice(0, charIdx.current))

        if (charIdx.current === word.length) {
          deleting.current = true
          timer.current = setTimeout(tick, pauseMs)
          return
        }
        timer.current = setTimeout(tick, typeMs)
      } else {
        charIdx.current--
        setText(word.slice(0, charIdx.current))

        if (charIdx.current === 0) {
          deleting.current = false
          idx.current = (idx.current + 1) % words.length
        }
        timer.current = setTimeout(tick, deleteMs)
      }
    }

    timer.current = setTimeout(tick, 600)
    return () => clearTimeout(timer.current)
  }, [words, typeMs, deleteMs, pauseMs])

  return text
}
