-- PrathamOne full DB schema (run in Supabase SQL editor)

-- Enable uuid extension
create extension if not exists "uuid-ossp";

-- Profiles table (user profiles linked to auth.users via id)
create table if not exists profiles (
  id uuid references auth.users on delete cascade,
  email text,
  full_name text,
  role text default 'user', -- 'user','author','school','admin'
  created_at timestamptz default now(),
  primary key (id)
);

-- Books table
create table if not exists books (
  id uuid default uuid_generate_v4() primary key,
  owner_uuid uuid references profiles(id) on delete set null,
  title text,
  slug text,
  status text default 'draft', -- draft, review, published
  metadata jsonb,
  created_at timestamptz default now(),
  updated_at timestamptz
);

-- Templates table
create table if not exists templates (
  id uuid default uuid_generate_v4() primary key,
  owner_uuid uuid references profiles(id) on delete set null,
  name text,
  content jsonb,
  public boolean default false,
  created_at timestamptz default now()
);

-- Projects / Requests table
create table if not exists projects (
  id uuid default uuid_generate_v4() primary key,
  owner_uuid uuid references profiles(id) on delete set null,
  title text,
  type text, -- book, cover, maintenance, school
  status text default 'pending',
  payload jsonb,
  created_at timestamptz default now()
);

-- Activity logs
create table if not exists activity_logs (
  id uuid default uuid_generate_v4() primary key,
  actor_uuid uuid references profiles(id) on delete set null,
  action text,
  meta jsonb,
  created_at timestamptz default now()
);

-- School clients
create table if not exists school_clients (
  id uuid default uuid_generate_v4() primary key,
  owner_uuid uuid references profiles(id) on delete set null,
  school_name text,
  contact jsonb,
  subscription jsonb,
  created_at timestamptz default now()
);

-- Row-level security: enable per-table
alter table if exists books enable row level security;
alter table if exists templates enable row level security;
alter table if exists projects enable row level security;
alter table if exists school_clients enable row level security;
alter table if exists activity_logs enable row level security;

-- Policies: allow authenticated users to insert their own profile (profiles table closely managed via auth)
create policy if not exists "profiles_insert_for_user" on profiles for insert using (auth.role() is not null) with check (true);

-- Books: users can select their own books; admins can access all
create policy if not exists "select_books_owner_or_admin" on books for select using (
  auth.role() = 'authenticated' and (owner_uuid = auth.uid() or auth.jwt() ->> 'role' = 'admin')
);

create policy if not exists "insert_books_auth" on books for insert with check (auth.uid() = owner_uuid);

create policy if not exists "update_books_owner_or_admin" on books for update using (owner_uuid = auth.uid() or auth.jwt() ->> 'role' = 'admin');

create policy if not exists "delete_books_owner_or_admin" on books for delete using (owner_uuid = auth.uid() or auth.jwt() ->> 'role' = 'admin');

-- Templates: public readable, owner can modify
create policy if not exists "select_templates_public_or_owner" on templates for select using (public = true or owner_uuid = auth.uid());
create policy if not exists "insert_templates_owner" on templates for insert with check (owner_uuid = auth.uid());
create policy if not exists "update_templates_owner" on templates for update using (owner_uuid = auth.uid());
create policy if not exists "delete_templates_owner" on templates for delete using (owner_uuid = auth.uid());

-- Projects: owner or admin
create policy if not exists "projects_owner_select" on projects for select using (owner_uuid = auth.uid() or auth.jwt() ->> 'role' = 'admin');
create policy if not exists "projects_insert" on projects for insert with check (owner_uuid = auth.uid());

-- Activity logs: owner or admin
create policy if not exists "activity_owner_select" on activity_logs for select using (actor_uuid = auth.uid() or auth.jwt() ->> 'role' = 'admin');
create policy if not exists "activity_insert" on activity_logs for insert with check (actor_uuid = auth.uid());

-- School clients: owner or admin
create policy if not exists "school_owner_select" on school_clients for select using (owner_uuid = auth.uid() or auth.jwt() ->> 'role' = 'admin');
create policy if not exists "school_insert" on school_clients for insert with check (owner_uuid = auth.uid());

-- Indexes
create index if not exists idx_books_owner on books(owner_uuid);
create index if not exists idx_templates_owner on templates(owner_uuid);
create index if not exists idx_projects_owner on projects(owner_uuid);

-- Sample seed data (optional)
insert into templates (name, content, public) values ('Basic Book Interior', jsonb_build_object('pages',10,'style','hybrid'), true) on conflict do nothing;
