PrathamOne UI v2 - Deep-Blue Silver
Generated: 2025-12-03T22:48:10.964957Z

Install:
1. Extract this zip into your project root.
2. Ensure you have these packages installed:
   - framer-motion
   - tailwindcss (if using tailwind)
3. Import globals in your app root (_app or layout):
   import "@/styles/globals.css";

Notes:
- ContactForm uses supabase client; ensure lib/supabaseClient.ts exists.
- Tailwind config provided should be merged if you already have one.
- For production, run `npm run build`.
