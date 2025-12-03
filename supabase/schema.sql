-- Supabase schema for PrathamOne Press (complete)
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

-- Sample seed data (run after creating tables)
insert into books (title, subtitle, slug, cover_url, description) values
('Coder who fears before Ai', 'A HumorTech Memoir', 'coder-who-fears-before-ai', 'https://via.placeholder.com/400x600.png?text=Coder+Book+Cover', 'A short description about the book.');

insert into releases (title, slug, book_id, excerpt, content, hero_url, status, published_at) values
('PrathamOne Launches Press Portal', 'launch-press-portal', (select id from books where slug='coder-who-fears-before-ai'), 'We are excited to launch.', '<p>Full release content here.</p>', 'https://via.placeholder.com/1200x400.png?text=Hero+Image','published', now());

insert into assets (name, type, url) values
('PrathamOne Logo (PNG)','logo','/branding/prathamone-logo.png'),
('Author Photo (HighRes)','photo','/branding/author-highres.jpg'),
('Book Cover (Full)','cover','https://via.placeholder.com/1200x1800.png?text=Cover+Full');
