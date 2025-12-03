-- Trigger: auto-create profile row when a new auth.user is created
create extension if not exists "uuid-ossp";

create or replace function public.handle_new_auth_user()
returns trigger as $$
declare
  uid uuid := new.id;
begin
  -- insert a profile entry if not exists
  insert into profiles(id, email, full_name, role, created_at)
  values (uid, new.email, null, 'author', now())
  on conflict (id) do nothing;
  return new;
end;
$$ language plpgsql;

drop trigger if exists auth_user_created on auth.users;
create trigger auth_user_created
after insert on auth.users
for each row execute procedure public.handle_new_auth_user();
