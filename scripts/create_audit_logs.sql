-- Audit logs table for admin actions
create table if not exists audit_logs (
  id uuid default uuid_generate_v4() primary key,
  actor_uuid uuid references profiles(id) on delete set null,
  action text not null,
  target jsonb,
  meta jsonb,
  created_at timestamptz default now()
);

-- row level security: admin-only read
alter table if exists audit_logs enable row level security;

create policy if not exists "select_audit_admin_only" on audit_logs for select using (auth.jwt() ->> 'role' = 'admin');
create policy if not exists "insert_audit_any_server" on audit_logs for insert with check (true);
