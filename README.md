# PrathamOne Press — Complete Dev Scaffold

Includes:
- Admin Dashboard (CRUD) with Supabase Auth (basic)
- Press-kit ZIP generator backend
- Database seeds (SQL)
- Books pages with press-kit download
- Branding page with placeholder high-res assets

## Quickstart
1. Copy `.env.local.example` to `.env.local` and fill with Supabase keys.
2. `npm install`
3. `npm run dev`

## Deploy
- Import repo to Vercel.
- Add env vars in Vercel: NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY
- Set domain CNAME to `cname.vercel-dns.com` for press.prathamone.com

Notes:
- Press-kit generator uses server-side zipping (archiver). Ensure Node environment supports streams.
