-- Sample SQL to create 'projects' table in Supabase (run in SQL editor of Supabase)
create table if not exists projects (
  id bigserial primary key,
  title text,
  status text,
  owner_uuid uuid,
  created_at timestamptz default now()
);
