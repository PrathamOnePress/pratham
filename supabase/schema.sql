-- Supabase schema for PrathamOne Press (fresh)
create extension if not exists "pgcrypto";

create table books (
  id uuid primary key default gen_random_uuid(),
  title text,
  subtitle text,
  slug text unique,
  cover_url text,
  description text,
  status text default 'published',
  created_at timestamptz default now()
);

create table releases (
  id uuid primary key default gen_random_uuid(),
  title text,
  slug text unique,
  book_id uuid references books(id),
  excerpt text,
  content text,
  hero_url text,
  status text default 'draft',
  published_at timestamptz,
  created_by uuid,
  created_at timestamptz default now()
);

create table assets (
  id uuid primary key default gen_random_uuid(),
  name text,
  type text,
  url text,
  meta jsonb,
  created_at timestamptz default now()
);
