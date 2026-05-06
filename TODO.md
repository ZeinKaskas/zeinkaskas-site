# TODO

- [ ] Fix the thumbnail for Instagram (and other social platforms)
  - Add a 1200×630 OG image to `public/og-image.png`
  - Wire `openGraph.images` and `twitter.images` in `src/app/layout.tsx`
  - After deploy, re-scrape via Facebook Sharing Debugger and LinkedIn Post Inspector to bust caches (Instagram pulls from FB cache)
