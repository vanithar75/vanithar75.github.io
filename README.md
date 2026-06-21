# vanithar75.github.io

Professional personal website for **Vanitha Ramaswami** — passionate technologist, AI practitioner, and strategic technology leader on the path to CTO.

Built with [Astro](https://astro.build) as a static site, deployed to GitHub Pages at [https://vanithar75.github.io](https://vanithar75.github.io).

---

## Local development

**Requirements:** Node.js 18.17+ (Node 20 recommended)

```bash
cd C:\Vanitha\work\Agents\vanithar75.github.io
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

### Other commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build locally |

---

## Project structure

```
vanithar75.github.io/
├── .github/workflows/deploy.yml   # GitHub Actions → Pages
├── public/                        # Static assets (favicon, images)
├── src/
│   ├── components/                # Section components
│   ├── data/site.ts               # Content & copy (edit here)
│   ├── layouts/Layout.astro       # Page shell
│   ├── pages/index.astro          # Home page
│   └── styles/global.css          # Design tokens & utilities
├── astro.config.mjs               # site URL, base `/`, static output
└── package.json
```

---

## Customize content

Edit **`src/data/site.ts`** for:

- Headline, about copy, focus areas
- Experience entries and dates
- Project links
- Contact email (currently a placeholder)

Add your profile photo:

1. Place image at `public/images/profile.jpg`
2. Update `Hero.astro` to use `<img src="/images/profile.jpg" alt="Vanitha Ramaswami" />` instead of the placeholder

---

## Deploy to GitHub Pages

### 1. Create the repository

On GitHub, create a **public** repository named exactly:

```
vanithar75.github.io
```

User/org sites must use this naming convention for root URL hosting.

### 2. Push this project

```bash
cd C:\Vanitha\work\Agents\vanithar75.github.io
git init
git add .
git commit -m "Initial personal site scaffold"
git branch -M main
git remote add origin https://github.com/vanithar75/vanithar75.github.io.git
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to **Settings → Pages**
2. Under **Build and deployment**, set **Source** to **GitHub Actions**
3. The workflow in `.github/workflows/deploy.yml` runs on every push to `main`

After the first successful workflow run, the site is live at **https://vanithar75.github.io**.

### Configuration notes

- `astro.config.mjs` sets `site: 'https://vanithar75.github.io'` and `base: '/'` for user-site root hosting
- No project-site base path (e.g. `/repo-name/`) is needed
- CI uses Node 20 on Ubuntu; local Node 18+ is sufficient for development

---

## Content sources

Copy is synthesized from:

- Public LinkedIn profile: [linkedin.com/in/vanithar75](https://www.linkedin.com/in/vanithar75/)
- Motorola Solutions thought leadership (author page)
- VibeCoding Planner workspace context (AI governance, edge-to-cloud portfolio)

Items marked `[Dates to confirm]` or `[your-email@example.com]` need your input before publishing.

---

## License

Personal site content © Vanitha Ramaswami. Code scaffold provided for personal use.
