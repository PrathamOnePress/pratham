-- seed.sql
insert into books (title, subtitle, slug, cover_url, description)
values ('Coder who fears before Ai', 'A HumorTech Memoir', 'coder-who-fears-before-ai', '/branding/book-cover.jpg', 'A short description about the book.')
on conflict (slug) do nothing;

insert into releases (title, slug, book_id, excerpt, content, hero_url, status, published_at)
values (
  'PrathamOne Launches Press Portal',
  'launch-press-portal',
  (select id from books where slug='coder-who-fears-before-ai'),
  'We are excited to launch.',
  '<p>Full release content here.</p>',
  '/branding/book-cover.jpg',
  'published',
  now()
)
on conflict (slug) do nothing;

insert into assets (name, type, url)
values
('PrathamOne Logo (PNG)','logo','/branding/prathamone-logo.png'),
('Author Photo (HighRes)','photo','/branding/author-highres.jpg'),
('Book Cover (Full)','cover','/branding/book-cover.jpg')
on conflict (name) do nothing;
