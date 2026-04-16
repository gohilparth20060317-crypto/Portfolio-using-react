export default function Footer() {
  return (
    <footer
      style={{
        textAlign:    'center',
        padding:      '2rem',
        color:        'rgba(255,255,255,0.2)',
        fontSize:     '0.78rem',
        fontFamily:   "'Inter', sans-serif",
        borderTop:    '1px solid rgba(255,255,255,0.05)',
        position:     'relative',
        zIndex:       1,
        letterSpacing:'0.02em',
      }}
    >
      © {new Date().getFullYear()} Parth Gohil — Designed &amp; built with obsession.
    </footer>
  )
}
