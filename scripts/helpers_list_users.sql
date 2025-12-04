-- Optional helper RPC to list users (requires appropriate permissions)
create or replace function public.list_users()
returns setof auth.users as $$
  select * from auth.users order by created_at desc;
$$ language sql stable;
