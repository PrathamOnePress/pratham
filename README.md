PRATHAMONE PRESS — Stable v5 (Full Theme Restore)

This is the full, styled, production-ready build with runtime-safe API routes and auto DB support.

1) Copy .env.local.example -> .env.local and fill vars:
   NEXT_PUBLIC_SUPABASE_URL
   NEXT_PUBLIC_SUPABASE_ANON_KEY
   SUPABASE_SERVICE_ROLE_KEY
   SUPABASE_DB_URL (use pooler port 6543 and URL-encode special characters in password)

2) npm install
3) npm run init-db  # runs migrations + seed using SUPABASE_DB_URL
4) npm run dev
5) Visit http://localhost:3000

Deploy notes:
- Add same env vars in Vercel (Production + Preview + Development)
- You may run init-db during CI using SUPABASE_DB_URL (careful with secrets)
