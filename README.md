# John Omar Esguerra Portfolio

A modern, responsive personal portfolio website built with React, TypeScript, and Vite.

This site presents my background, projects, research, skills, certifications, and professional experience in a clean, interactive format.

## Highlights

- Responsive single-page portfolio layout
- Dedicated sections for profile, education, experience, projects, research, and certifications
- Interactive detail modal for expanded content
- Contact form section for outreach
- Smooth, modern UI with animation support

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Motion
- Lucide React

## Project Structure

```
.
|- index.html
|- package.json
|- tsconfig.json
|- vite.config.ts
|- src/
|  |- App.tsx
|  |- main.tsx
|  |- index.css
|  |- data.ts
|  |- types.ts
|  |- components/
|     |- ProfileCard.tsx
|     |- ExperienceTimeline.tsx
|     |- ProjectsSection.tsx
|     |- ResearchSection.tsx
|     |- EducationSection.tsx
|     |- CertificationsSection.tsx
|     |- SkillsSection.tsx
|     |- ContactForm.tsx
|     |- DetailModal.tsx
|- img/
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Configure Contact Form (Formspree)

1. Create a form at Formspree and copy your endpoint URL.
2. Create a local env file from the example:

```bash
cp .env.example .env.local
```

3. Set your endpoint in `.env.local`:

```env
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/yourformid
```

For GitHub Pages deployment, add `VITE_FORMSPREE_ENDPOINT` as a repository variable or secret in your GitHub Actions settings so the build can embed it.

### Run Development Server

```bash
npm run dev
```

The app runs on:

`http://localhost:3000`

## Available Scripts

```bash
npm run dev      # Start Vite development server
npm run build    # Build production bundle
npm run preview  # Preview production build locally
npm run lint     # Type-check with TypeScript
npm run clean    # Remove build artifacts
```

## Customization Guide

Update portfolio content in:

- `src/data.ts` for profile details, timeline entries, projects, skills, and research
- `src/types.ts` for shared data structures

Update visual styling in:

- `src/index.css`
- individual section components under `src/components/`

Replace images and assets in:

- `img/`

## Build for Production

```bash
npm run build
```

Production files will be generated in the `dist/` directory.

## Deployment Notes

Because this is a Vite static frontend, it can be deployed on:

- GitHub Pages
- Netlify
- Vercel
- Any static web host

## About

This repository contains the source code for the personal portfolio of **John Omar D. Esguerra**, showcasing work as an educator, data analytics practitioner, and information systems professional.
