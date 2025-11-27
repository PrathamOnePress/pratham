/**
 * init-db.js
 * Script to auto-create DB schema and seed data.
 * Requires SUPABASE_DB_URL in environment (Postgres connection string).
 *
 * Usage:
 *   cp .env.local.example .env.local
 *   fill SUPABASE_DB_URL (and supabase keys)
 *   npm install
 *   npm run init-db
 */

const fs = require('fs');
const { Client } = require('pg');
require('dotenv').config();

const MIGRATION = fs.readFileSync('supabase/migrations/0001_init.sql', 'utf8');
const SEED = fs.readFileSync('supabase/seed.sql', 'utf8');

async function run() {
  const dbUrl = process.env.SUPABASE_DB_URL;
  if(!dbUrl) {
    console.error('ERROR: SUPABASE_DB_URL is not set in environment. Please set it to your Postgres connection string.');
    process.exit(1);
  }

  const client = new Client({ connectionString: dbUrl });
  try {
    await client.connect();
    console.log('Connected to database. Running migrations...');
    await client.query('BEGIN');
    await client.query(MIGRATION);
    await client.query(SEED);
    await client.query('COMMIT');
    console.log('Migrations and seed executed successfully.');
  } catch (err) {
    await client.query('ROLLBACK').catch(()=>{});
    console.error('Error running migrations:', err.message || err);
    process.exit(1);
  } finally {
    await client.end();
  }
}

run();
