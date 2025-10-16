# Portfolio (Monorepo)

[![CI](https://github.com/Amaankaa/Portfolio/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/Amaankaa/Portfolio/actions/workflows/ci.yml)

A high-quality personal portfolio with:
- Frontend: React + TypeScript + Vite + Tailwind (prefixed `tw-`) + Bootstrap components
- Backend: Next.js (App Router) serving as a clean-architecture API
- Blog engine (draft/publish) and a simple AI Assistant that only answers questions about the owner
- Dual theme toggle: Aurora Indigo and Solar Coral, designed with accessibility in mind

## Structure

```
.
├─ frontend/   # React + Vite app (UI, theming, sections, blog, assistant widget)
├─ backend/    # Next.js API (Clean Architecture, Prisma soon, AI + blog endpoints)
└─ README.md
```

## Tech Stack
- Frontend: React 18+, TypeScript, Vite, Tailwind CSS (with `tw-` prefix), react-bootstrap
- Backend: Next.js 15 (TypeScript, App Router)
- Tooling: ESLint, TypeScript strict, GitHub Actions (CI)

## Theming
Two curated themes with color tokens via CSS variables:
- Aurora Indigo: primary Indigo 600 with Electric Lime accents on deep slate surfaces
- Solar Coral: primary Coral 600 with Royal Blue accents on warm off-white surfaces

Toggle is persisted in localStorage and applied via `data-theme` on `<html>`.

## Getting Started (Local)

Prerequisites: Node.js 20+

Frontend (Vite dev server):
```sh
cd frontend
npm install
npm run dev
# http://localhost:5173
```

Backend (Next.js dev server):
```sh
cd backend
npm install
npm run dev
# http://localhost:3000
# Health: http://localhost:3000/api/health
```

## Continuous Integration
- GitHub Actions runs on pushes/PRs to `main`:
  - Frontend: install, lint, typecheck, build
  - Backend: install, lint, typecheck, build

## Roadmap (short)
- Add Prisma with SQLite (dev) and Postgres (prod)
- Implement blog CRUD (admin) + public endpoints
- AI assistant ingestion + `/api/ai/ask` with retrieval + streaming
- Frontend sections: Hero, About, Skills, Experience, Projects, Blog, Contact, Resume
- Tests (Vitest/Jest) and E2E (Playwright)

## License
TBD
