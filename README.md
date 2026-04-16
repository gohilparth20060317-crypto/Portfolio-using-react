# Parth Gohil — 3D Portfolio

A stunning dark-luxury portfolio built with **React + Vite**, featuring real-time 3D card tilt, animated particle networks, typewriter effects, and scroll-triggered animations.

---

## ✦ Features

- **3D Card Tilt** — cursor-tracked perspective transform on every card
- **Particle Network** — canvas-rendered animated background
- **Typewriter Effect** — cycling role titles with custom hook
- **Scroll Animations** — IntersectionObserver-powered skill bar reveals
- **Glassmorphism** — backdrop-blur surfaces throughout
- **Fully Responsive** — mobile-first breakpoints
- **Zero dependencies** beyond React itself

---

## 📁 Project Structure

```
portfolio/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx              ← entry point
    ├── App.jsx               ← root layout
    ├── data/
    │   └── index.js          ← all content (NAV, SKILLS, PROJECTS…)
    ├── hooks/
    │   ├── useTypewriter.js  ← cycling typewriter hook
    │   └── useInView.js      ← IntersectionObserver hook
    ├── styles/
    │   └── global.css        ← reset, keyframes, utilities, responsive
    └── components/
        ├── Particles.jsx     ← canvas particle network
        ├── Card3D.jsx        ← reusable 3D tilt wrapper
        ├── NavBar.jsx        ← sticky frosted-glass nav
        ├── HeroSection.jsx   ← hero + typewriter + stats
        ├── AboutSection.jsx  ← split layout + expertise grid
        ├── SkillsSection.jsx ← animated skill bars
        ├── ProjectCard.jsx   ← individual project card
        ├── ProjectsSection.jsx ← projects grid
        ├── ContactSection.jsx  ← contact form + socials
        └── Footer.jsx
```

---

## 🚀 Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Start dev server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for production

```bash
npm run build
```

Output goes to the `dist/` folder — ready to deploy to Vercel, Netlify, GitHub Pages, etc.

---

## ✏️ Customisation

All content lives in **`src/data/index.js`** — edit your name, titles, stats, skills, and projects there without touching any component files.

```js
// src/data/index.js
export const STATS = [
  { val: '47+', label: 'Projects Shipped' },
  // …
]

export const PROJECTS = [
  {
    title: 'NeuraFlow',
    desc:  'AI-powered workflow automation…',
    tags:  ['React', 'GPT-4', 'WebSockets'],
    color: '#6C63FF',
    accent:'#a29bff',
    year:  '2024',
    link:  'https://your-project-url.com',
  },
  // …
]
```

### Changing colours

The primary accent palette is defined inline using CSS custom properties and hex values. The main purple accent `#7c3aed / #a78bfa` can be replaced globally with a find-and-replace across the `src/` folder.

---

## 🌐 Deploy to Vercel (one command)

```bash
npx vercel --prod
```

---

## 📦 Tech Stack

| Layer      | Choice              |
|------------|---------------------|
| Framework  | React 18            |
| Bundler    | Vite 5              |
| Styling    | Plain CSS + inline  |
| Fonts      | Syne + Inter (Google Fonts) |
| Animation  | CSS keyframes + Canvas API |
| 3D         | CSS `perspective` + `rotateX/Y` |

---

## License

MIT — use it, modify it, ship it.
