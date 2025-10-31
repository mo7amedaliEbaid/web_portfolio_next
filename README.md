## Web Portfolio (Next.js 14 + Tailwind)

Modern, animated developer portfolio built with Next.js 14 App Router, Tailwind CSS, and Framer Motion. It features animated hero sections, a globe visualization, a projects grid, an experience/education timeline, and a skills section with animated progress bars.

### Live Demo
- [View the deployed portfolio](https://mohamedaliportfolio-mohameds-projects-55b46c5d.vercel.app/)

### Features
- **Next.js 14 App Router** with server-first defaults
- **Tailwind CSS** design system and custom utilities
- **Framer Motion** animations and scroll-in effects
- **Three.js** scene elements via `@react-three/fiber` and `@react-three/drei`
- **Animated skills progress bars** with striped fill overlay
- **Responsive** layout and components

### Tech Stack
- **Framework**: Next.js 14, React 18
- **Styling**: Tailwind CSS, `tailwindcss-animate`
- **Animation**: Framer Motion
- **3D/Globe**: three, @react-three/fiber, @react-three/drei, three-globe
- **Icons**: react-icons

## Getting Started

### Prerequisites
- Node.js 18+ (LTS recommended) or Node 20+
- npm 9+

### Install
```bash
npm install
```

### Run in development
```bash
npm run dev
# Open http://localhost:3000
```

### Build for production
```bash
npm run build
```

### Start production server
```bash
npm run start
# Serves the output of `next build`
```

### Lint
```bash
npm run lint
```

## Project Structure
```text
app/                # App Router pages/layouts/providers
  globals.css       # Tailwind layers + custom utilities (progress stripes)
components/         # UI sections and building blocks
  ui/               # Reusable UI primitives/effects
data/               # Static data used across the site
lib/                # Utilities
public/             # Images and static assets
tailwind.config.ts  # Tailwind theme/config
```

## Customization

### Content
- Edit section components in `components/` (e.g., `Hero.tsx`, `RecentProjects.tsx`, `Experience.tsx`, `Education.tsx`, `Skills.tsx`, `Clients.tsx`, `Footer.tsx`).
- Update data in `data/index.ts` and assets in `public/`.

### Theme and Styles
- Global styles and utilities live in `app/globals.css`.
- Tailwind theme (colors, fonts, animations) in `tailwind.config.ts`.

### Skills Progress Bars
The skills bars use a distinct track and a lighter animated fill.
- Track: `bg-white/10 shadow-inner` on the container.
- Fill: Gradient (lighter) with a striped overlay and width animation.

Key classes used in `components/Skills.tsx`:
```tsx
<div className="w-full h-2.5 rounded-full bg-white/10 shadow-inner progress-track">
  <motion.div
    initial={{ width: 0 }}
    whileInView={{ width: `${skill.level}%` }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 1, ease: 'easeOut', delay: 0.15 }}
    className="relative h-2.5 rounded-full bg-gradient-to-r from-purple-300 to-blue-300 opacity-90 progress-fill"
  >
    <div className="progress-stripes rounded-full" />
  </motion.div>
</div>
```

Supporting CSS (already included) is defined in `app/globals.css`:
```css
@keyframes progress-stripes-move { 0% { background-position: 0 0; } 100% { background-position: 1rem 0; } }
.progress-track { position: relative; overflow: hidden; }
.progress-fill { position: relative; }
.progress-stripes { position: absolute; inset: 0; background-image: linear-gradient(45deg, rgba(255,255,255,.18) 25%, transparent 25%, transparent 50%, rgba(255,255,255,.18) 50%, rgba(255,255,255,.18) 75%, transparent 75%, transparent); background-size: 1rem 1rem; animation: progress-stripes-move 1s linear infinite; pointer-events: none; }
```

To make the fill even lighter or darker, adjust the Tailwind gradient shades (e.g., `from-purple-200 to-blue-200`) or tweak opacity.

## Deployment

### Vercel (recommended)
1. Push this repository to GitHub.
2. Import the repo in Vercel and select the Next.js framework preset.
3. Use default build settings (Build Command: `next build`, Output: `.next`).
4. Set any environment variables if you add them later.

### Other Hosts
- Any Node host that runs `npm run build` and `npm run start` on Node 18/20+ works.

## Scripts
- **dev**: Start development server
- **build**: Build production bundle
- **start**: Start production server
- **lint**: Run Next.js ESLint config

