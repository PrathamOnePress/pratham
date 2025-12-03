-- PrathamOne FULL SCHEMA v3 (run in Supabase SQL editor)
-- Adds manuscripts, assets, certificates, notifications, storage notes, and RLS

-- uuid extension
create extension if not exists "uuid-ossp";

-- Manuscripts table
create table if not exists manuscripts (
  id uuid default uuid_generate_v4() primary key,
  book_id uuid references books(id) on delete cascade,
  owner_uuid uuid references profiles(id) on delete set null,
  filename text,
  size bigint,
  storage_path text,
  status text default 'uploaded',
  created_at timestamptz default now()
);

-- Assets table (covers, images, aplus images)
create table if not exists assets (
  id uuid default uuid_generate_v4() primary key,
  owner_uuid uuid references profiles(id) on delete set null,
  type text, -- cover, aplus, media
  filename text,
  storage_path text,
  public boolean default false,
  created_at timestamptz default now()
);

-- Certificates table
create table if not exists certificates (
  id uuid default uuid_generate_v4() primary key,
  owner_uuid uuid references profiles(id) on delete set null,
  project_id uuid references projects(id) on delete set null,
  issued_at timestamptz default now(),
  data jsonb
);

-- Notifications table
create table if not exists notifications (
  id uuid default uuid_generate_v4() primary key,
  user_uuid uuid references profiles(id) on delete set null,
  type text,
  payload jsonb,
  read boolean default false,
  created_at timestamptz default now()
);

-- Enable RLS on new tables
alter table if exists manuscripts enable row level security;
alter table if exists assets enable row level security;
alter table if exists certificates enable row level security;
alter table if exists notifications enable row level security;

-- Policies: manuscripts owner or admin
create policy if not exists "select_manuscripts_owner_or_admin" on manuscripts for select using (owner_uuid = auth.uid() or auth.jwt() ->> 'role' = 'admin');
create policy if not exists "insert_manuscripts_owner" on manuscripts for insert with check (owner_uuid = auth.uid());
create policy if not exists "update_manuscripts_owner_or_admin" on manuscripts for update using (owner_uuid = auth.uid() or auth.jwt() ->> 'role' = 'admin');

-- Assets policies
create policy if not exists "select_assets_public_or_owner" on assets for select using (public = true or owner_uuid = auth.uid());
create policy if not exists "insert_assets_owner" on assets for insert with check (owner_uuid = auth.uid());
create policy if not exists "update_assets_owner" on assets for update using (owner_uuid = auth.uid());
create policy if not exists "delete_assets_owner" on assets for delete using (owner_uuid = auth.uid());

-- Certificates policies (admin or owner)
create policy if not exists "select_cert_owner_or_admin" on certificates for select using (owner_uuid = auth.uid() or auth.jwt() ->> 'role' = 'admin');
create policy if not exists "insert_cert_owner" on certificates for insert with check (owner_uuid = auth.uid());

-- Notifications policies
create policy if not exists "select_notifications_owner" on notifications for select using (user_uuid = auth.uid());
create policy if not exists "insert_notifications_system" on notifications for insert with check (true);

-- Indexes
create index if not exists idx_manuscripts_owner on manuscripts(owner_uuid);
create index if not exists idx_assets_owner on assets(owner_uuid);
