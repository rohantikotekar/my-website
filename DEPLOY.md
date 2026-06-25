# Deployment Runbook

Backend → **Render** (Express + Prisma). Frontend → **Vercel** (Next.js).
Database → **Supabase** (already provisioned). This is a monorepo: each platform
points at a subfolder (`backend/` or `frontend/`).

```
Vercel (frontend)  ──HTTPS──>  Render (backend)  ──>  Supabase (Postgres)
  root: frontend/                root: backend/
```

## 0. Prerequisites
- Push the latest code to GitHub (`rohantikotekar/my-website`).
- Secrets live only in platform dashboards — `.env` files are gitignored.

## 1. Backend → Render
Two options — the Blueprint is easiest since `render.yaml` is already in the repo.

**Option A — Blueprint (recommended):**
1. render.com → **New → Blueprint** → connect the repo. Render reads `render.yaml`
   and creates the `portfolio-backend` Web Service (root `backend/`, build/start
   commands, healthcheck `/health` all preconfigured).
2. When prompted, fill the env vars (they're `sync:false`, so Render asks for each):
   - `DATABASE_URL` — Supabase pooled connection (port 6543)
   - `DIRECT_URL` — Supabase direct connection (port 5432, used by migrations)
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL` = `rtiko001@ucr.edu`
   - `CONTACT_FROM_EMAIL` = `Portfolio <onboarding@resend.dev>`
   - `CORS_ORIGIN` = your Vercel URL (set after step 2 below; can be a comma list)
   - **Do NOT set `PORT`** — Render injects it; the server reads `process.env.PORT`.

**Option B — Manual Web Service:**
1. render.com → **New → Web Service** → connect the repo.
2. **Root Directory** = `backend`, **Runtime** = Node.
3. **Build Command** = `npm install && npm run build`
4. **Start Command** = `npx prisma migrate deploy && node dist/index.js`
5. **Health Check Path** = `/health`
6. Add the same env vars as Option A.

Then: note the service URL (`https://portfolio-backend-xxxx.onrender.com`) and
verify `…/health` returns `{"ok":true,...}`.

> Free plan note: the service **spins down after ~15 min idle**, so the first
> request after a lull cold-starts (~30–60s). Fine for a portfolio; upgrade the
> plan if you need it always-on.

## 2. Frontend → Vercel
1. vercel.com → **Add New → Project** → import the repo.
2. **Root Directory** = `frontend` (framework auto-detected: Next.js).
3. **Environment Variables**: `NEXT_PUBLIC_API_URL` = `https://<render-domain>`.
4. **Deploy** → note the `…vercel.app` URL.

## 3. Wire them together (CORS)
1. Back in Render, set `CORS_ORIGIN` = your Vercel URL (e.g. `https://your-site.vercel.app`).
2. Render redeploys automatically.

## 4. Email delivery (Resend)
The contact form saves every message to Supabase, but email notification needs
Resend out of sandbox. **Chosen approach:** make `rtiko001@ucr.edu` the Resend
account email.
1. resend.com → Settings → change account email to `rtiko001@ucr.edu` and confirm.
2. Keep `CONTACT_FROM_EMAIL="Portfolio <onboarding@resend.dev>"` and
   `CONTACT_TO_EMAIL="rtiko001@ucr.edu"`.
   (Sandbox only delivers to the account's own email — which is now the UCR address.)
> For sending to arbitrary recipients later, verify a domain at resend.com/domains
> and switch `CONTACT_FROM_EMAIL` to an address on it.

## 5. Smoke test the live site
1. Open the Vercel URL; click through all sections.
2. Submit the contact form → expect the success message (allow for a backend
   cold start on the first request).
3. Confirm the row in Supabase (`ContactMessage` table) and the email in your inbox.
4. If no email: check Render logs for `[email] Resend error: …`.

## Ongoing
- Pushing to the connected branch auto-deploys both services.
- DB schema changes: add a Prisma migration locally (`npm run db:migrate`), commit,
  and push — Render runs `prisma migrate deploy` on the next deploy.
- The rate limiter is in-memory (fine for Render's single instance). For multiple
  instances, swap `src/lib/rate-limit.ts` for a shared store (e.g. Upstash Redis).

## Local development
- Backend: `cd backend && npm run dev` (http://localhost:4000)
- Frontend: `cd frontend && npm run dev` (http://localhost:3000)
- Tests: `npm test` in either folder.
