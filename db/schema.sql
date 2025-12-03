
-- Supabase / Postgres schema for PrathamOne
CREATE TABLE IF NOT EXISTS books (
  id serial PRIMARY KEY,
  title text NOT NULL,
  author text,
  description text,
  published_date date,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS publishers (
  id serial PRIMARY KEY,
  name text NOT NULL,
  website text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS contacts (
  id serial PRIMARY KEY,
  name text,
  email text,
  message text,
  created_at timestamptz DEFAULT now()
);
