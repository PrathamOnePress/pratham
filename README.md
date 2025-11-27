PRATHAMONE PRESS — Stable v4 (AUTO DB)

This release includes an auto DB initializer script which will create tables and insert seed data
when run with a Postgres connection string.

STEPS (local):

1) Copy .env.local.example -> .env.local and fill values:
   - NEXT_PUBLIC_SUPABASE_URL
   - NEXT_PUBLIC_SUPABASE_ANON_KEY
   - SUPABASE_SERVICE_ROLE_KEY
   - SUPABASE_DB_URL  <-- This must be your Supabase Postgres connection string (DB URL)

2) Install deps:
   npm install

3) Run auto-init:
   npm run init-db
   This will connect to SUPABASE_DB_URL and run migrations + seed.sql

4) Start dev server:
   npm run dev
   Open http://localhost:3000

DEPLOY (Vercel):

- Set environment variables in Vercel (same as .env.local)
- Deploy the project
- You can run the init-db script on your CI or locally using the SUPABASE_DB_URL from Supabase settings.
