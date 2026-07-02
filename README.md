# Prakhar Garg — Personal Portfolio

A clean, modern portfolio site built with React, Vite, and Tailwind CSS. Lists skills, experience, projects, and contact info from your CV.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build for production

```bash
npm run build
```

Static files are output to `dist/` — ready to deploy anywhere.

## Deploy (free options)

### Vercel
1. Push this folder to GitHub
2. Go to [vercel.com](https://vercel.com) → Import project
3. Framework preset: **Vite** — deploy

### Netlify
1. Push to GitHub
2. Go to [netlify.com](https://netlify.com) → Add new site → Import
3. Build command: `npm run build` · Publish directory: `dist`

### GitHub Pages
Add to `vite.config.ts`:
```ts
base: '/your-repo-name/',
```
Then use the [gh-pages](https://www.npmjs.com/package/gh-pages) package or GitHub Actions to deploy `dist/`.

## Customize

Edit `src/data/profile.ts` to update your info, projects, and skills.

## Contact form (sends to your inbox)

The form uses [Web3Forms](https://web3forms.com) — visitors submit on your site and you receive the email at **prak.works@gmail.com**. No backend needed.

**One-time setup (~2 min):**

1. Go to [web3forms.com](https://web3forms.com)
2. Enter `prak.works@gmail.com` and click **Create Access Key**
3. Copy the key into a `.env` file in the project root:

```
VITE_WEB3FORMS_ACCESS_KEY=paste_your_key_here
```

4. Restart the dev server (`npm run dev`)

**When deploying** (Vercel / Netlify), add the same env variable in your hosting dashboard under Environment Variables.

Free tier: 250 submissions/month — plenty for a portfolio site.
