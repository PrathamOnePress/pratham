const fs = require('fs');
const { Client } = require('pg');
require('dotenv').config();
const MIGRATION = fs.readFileSync('supabase/migrations/0001_init.sql','utf8');
const SEED = fs.readFileSync('supabase/seed.sql','utf8');
async function run(){ const dbUrl = process.env.SUPABASE_DB_URL; if(!dbUrl){ console.error('SUPABASE_DB_URL missing'); process.exit(1);} const client = new Client({ connectionString: dbUrl }); try{ await client.connect(); console.log('connected'); await client.query('BEGIN'); await client.query(MIGRATION); await client.query(SEED); await client.query('COMMIT'); console.log('done'); }catch(e){ await client.query('ROLLBACK').catch(()=>{}); console.error(e); process.exit(1);} finally{ await client.end(); }} run();
