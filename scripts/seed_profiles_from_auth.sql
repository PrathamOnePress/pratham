-- Seed profiles for existing users in auth.users
insert into profiles (id, email, full_name, role, created_at)
select id, email, null, 'author', now()
from auth.users
on conflict (id) do nothing;
