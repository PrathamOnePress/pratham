
# PrathamOne — Full Website (Next.js + Supabase)

This repository is a full Next.js (App Router) website scaffold with Supabase integration.

## What is included
- Next.js 14 app router structure
- TailwindCSS
- Pages: Home, Books, Book (dynamic), Publisher, About Author, Contact
- API route: POST /api/contact → saves to `contacts` table via Supabase Admin (service role)
- `lib/supabaseClient.js` for client usage and `lib/supabaseAdmin.js` for server-side use
- SQL schema and seed files in `/db`

## Setup (Supabase)
1. Create a new Supabase project.
2. Open **SQL Editor** and run the SQL in `db/schema.sql` to create tables.
3. Optionally run `db/seed.sql` to insert sample data.
4. Get **Project URL** and **anon key** and set these Vercel environment variables:
   - NEXT_PUBLIC_SUPABASE_URL
   - NEXT_PUBLIC_SUPABASE_ANON_KEY
   - SUPABASE_SERVICE_ROLE (server-only, for API routes)

## Run locally
```bash
npm install
npm run dev
```

## Deploy
1. Push to GitHub and import the repo into Vercel.
2. Set the environment variables in Vercel as above.
3. Build/Deploy. Make sure Node 18.x is selected if asked.
