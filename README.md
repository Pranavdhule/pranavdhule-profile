# Pranav Anil Dhule — Personal Portfolio

A modern, responsive portfolio website built with TanStack Start, React, TypeScript and Tailwind CSS.

## Install dependencies

```sh
npm install
```

## Run locally

```sh
npm run dev
```

The site is served at the URL printed in the terminal (usually http://localhost:8080).

## Build for production

```sh
npm run build
npm run start   # preview the production build
```

## Replace resume.pdf

The resume is served as a static file.

1. Export your resume as a PDF.
2. Name it `resume.pdf`.
3. Replace `public/resume.pdf` with your file.

Both the navbar and the Resume section link to `/resume.pdf` automatically. To use a
different filename or an external link (e.g. Google Drive), change `resumeUrl` in
`src/data/profile.ts`.

## Update GitHub / LinkedIn / email

Everything personal lives in `src/data/profile.ts`:

```ts
export const profile = {
  email: "your.email@example.com",
  github: "https://github.com/your-username",
  linkedin: "https://linkedin.com/in/your-profile",
  resumeUrl: "/resume.pdf",
};
```

Other editable content:

- `src/data/profile.ts` — name, role, intro, highlights, education, certifications, achievements
- `src/data/skills.ts` — skill categories and items
- `src/data/projects.ts` — projects (title, description, problem, solution, features, tech, approach, results, `github`, `demo`)

Leave a project's `github` or `demo` empty to hide that button.

## Deploy

The easiest option is to publish directly from Lovable (Publish button) — you can also
attach a custom domain there.

To self-host, run `npm run build` and deploy the generated output to any platform that
supports TanStack Start / Node or edge runtimes (Vercel, Netlify, Cloudflare). Set the
build command to `npm run build` and use the platform's Node/edge preset.

## Accessibility & SEO

- Semantic landmarks, single `<h1>`, labelled form fields and aria-live status messages
- Per-page title, description, Open Graph tags, canonical URL and Person JSON-LD in `src/routes/index.tsx`
