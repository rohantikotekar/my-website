# Portfolio — The Yosemite Trail

A full-stack personal portfolio. The experience is themed as a hike through
Yosemite: visitors follow a winding trail through each section of the story.

## Monorepo layout

```
my-website/
├─ frontend/        # Next.js app (App Router, Tailwind, Framer Motion) — the UI
│  ├─ app/          # routes, layout, global styles
│  ├─ components/   # sections, UI primitives, trail animation
│  ├─ lib/          # client utils, content data, API client
│  └─ .env.local    # NEXT_PUBLIC_API_URL
│
├─ backend/         # Express + Prisma REST API — the server
│  ├─ src/
│  │  ├─ index.ts        # server bootstrap (CORS, JSON, routes)
│  │  ├─ routes/         # API endpoints (POST /api/contact)
│  │  ├─ lib/            # prisma client, email (Resend), rate limiter
│  │  └─ validations/    # zod schemas (source of truth for validation)
│  ├─ prisma/            # schema.prisma + migrations
│  └─ .env               # DATABASE_URL, RESEND_API_KEY, etc.
│
├─ docs/            # theme + project docs
└─ package.json     # npm workspaces + scripts to run everything
```

The frontend renders the UI and calls the backend over HTTP. The backend owns
the database (Supabase Postgres) and email delivery (Resend).

## Prerequisites

- Node.js 20+ and npm 10+
- A Supabase project (Postgres) and a Resend account (for the contact form)

## Setup

1. **Install all dependencies** (installs both workspaces):
   ```bash
   npm install
   ```

2. **Configure environment variables:**
   - `backend/.env` — copy from `backend/.env.example`, fill in your Supabase
     connection strings and Resend key. (URL-encode special characters in the
     DB password, e.g. `@` → `%40`.)
   - `frontend/.env.local` — copy from `frontend/.env.example` (defaults to
     `http://localhost:4000`).

3. **Create the database tables** (run once, and after schema changes):
   ```bash
   npm run db:migrate
   ```

## Running the full-stack app

Start the backend (port 4000) and frontend (port 3000) together:

```bash
npm run dev
```

- Frontend → http://localhost:3000
- Backend  → http://localhost:4000 (health check at `/health`)

### Useful commands (run from the repo root)

| Command | What it does |
|---|---|
| `npm run dev` | Run frontend + backend together (watch mode) |
| `npm run dev:frontend` | Run only the Next.js frontend |
| `npm run dev:backend` | Run only the Express backend |
| `npm run build` | Production build of both |
| `npm run start` | Run both in production mode |
| `npm run lint` | Lint the frontend |
| `npm run db:migrate` | Apply Prisma migrations (creates/updates tables) |
| `npm run db:studio` | Open Prisma Studio to browse the database |

## Tech stack

- **Frontend:** Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion
- **Backend:** Express, Prisma ORM, Zod
- **Database:** PostgreSQL (Supabase)
- **Email:** Resend
