# Bindu Manohar — Portfolio

A personal portfolio site built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Framer Motion (used only for reveal-on-scroll and hover/focus transitions)

## Getting started

Requires Node.js 18+ and npm.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

The site will be available at the local URL Vite prints (typically `http://localhost:5173`).

```bash
# Production build
npm run build

# Preview the production build locally
npm run preview
```

## Project structure

```
src/
  assets/
    bindu-portrait.jpg     ← your uploaded photo, unedited
  components/
    Navbar.tsx
    Hero.tsx
    About.tsx
    Projects.tsx
    Skills.tsx
    Certifications.tsx
    Participation.tsx
    Contact.tsx
    Footer.tsx
    SectionHeading.tsx
  data/
    content.ts             ← all site copy lives here
  App.tsx
  main.tsx
  index.css
```

## Editing content

All text content (name, bio, projects, skills, certifications, contact details) lives in a single file: `src/data/content.ts`. Update values there rather than in the components.

### Adding project tech stacks

Each project in `src/data/content.ts` has a `techStack` field, currently `undefined`. Once you're ready to list technologies for a project, set it to an array of strings, for example:

```ts
techStack: ['Java', 'MySQL', 'JavaFX']
```

Until it's set, the site displays "Tech stack to be added" automatically.

### Adding GitHub / live demo links

Each project also has `githubUrl` and `demoUrl` fields. Fill these in with real URLs when ready — until then, the site shows "coming soon" placeholders instead of dead links.

## Notes on the hero photo

Your original uploaded photo (`src/assets/bindu-portrait.jpg`) is used unedited. It's cropped responsively in the browser using CSS `object-fit: cover` with an `object-position` tuned to keep your face fully visible — no pixels are altered, regenerated, or re-encoded beyond the browser's normal image rendering.

## Accessibility

- Semantic landmarks (`header`, `main`, `footer`, `nav`)
- Visible focus states on all interactive elements
- Keyboard-operable mobile menu (Escape to close, focus trap via body scroll lock)
- `prefers-reduced-motion` respected — animations are disabled for users who request it
- Descriptive alt text on the portrait image
- Form fields have associated `<label>` elements

## Deploying

This is a static site after `npm run build` (output in `dist/`). It can be deployed as-is to Vercel, Netlify, GitHub Pages, or any static host.
