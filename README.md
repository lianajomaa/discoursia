# Discoursia.ai

Learning platform for AI, research and digital communication skills.

## Running it

```
npm install
npm run dev
```

Opens on http://localhost:5173

## Where things live

```
src/data/courses.js        all course content — modules, lessons, quizzes
src/data/plans.js          subscription packages and prices
src/context/               learner progress (localStorage for now)
src/components/academy/    layout, course card, sidebar, quiz engine
src/pages/                 every page
src/assets/                logo mark and wordmark, light and dark
```

## Adding content

Everything a learner sees comes from `src/data/courses.js`. Fill in the empty
fields — `videoUrl`, `intro`, `objectives`, `takeaways`, quiz `questions`,
exercise `scenario`/`task`/`modelAnswer`, and resource `file` paths. Pages hide
blocks whose content is still empty, so partial content looks intentional
rather than broken.

Adding a third course means appending one object to the `courses` array. No
page or component needs to change.

## Still to do

- [ ] Brand the certificate page (`src/pages/CertificatePage.jsx` still shows
      the old mark) and the browser `<title>` in `index.html`
- [ ] Real accounts (Supabase auth) — replaces the browser-only progress store
- [ ] Move course content into the database + admin dashboard
- [ ] Stripe checkout — `src/pages/Checkout.jsx` is a placeholder today
- [ ] Write real Terms and Privacy copy (currently marked as drafts on the page)

## Important

Learner progress currently lives in the visitor's own browser (localStorage).
It is not shared between devices and anyone can edit it. That is fine while
courses are free; it is **not** safe once content is paid for. Paid access must
be checked on the server before lesson content is sent.

## Deploying

Vercel, connected to this repo. `vercel.json` contains the SPA rewrite — without
it, every URL except `/` returns 404 on a hard refresh or direct visit.
