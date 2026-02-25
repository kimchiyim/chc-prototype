# Credit Hero Club — Interactive Prototype

CHC homepage prototype built with React + Vite, using MHG Alpha design tokens.

## Quick Start (local preview)

```bash
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

## Deploy to GitHub Pages

This repo includes a GitHub Actions workflow that auto-deploys on every push to `main`.

### One-time setup:

1. Push this repo to GitHub
2. Go to your repo **Settings → Pages**
3. Under **Source**, select **GitHub Actions**
4. That's it — the next push to `main` will trigger a deploy

Your prototype will be live at:
`https://<your-username>.github.io/chc-prototype/`

### ⚠️ Important: Update the repo name

If your GitHub repo is named something other than `chc-prototype`, update the `base` path in `vite.config.js`:

```js
base: '/your-repo-name/',
```
