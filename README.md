# Kutre Cloth Stores

This is a Next.js storefront for Kutre Cloth Stores with:

- English and Marathi language toggle
- Ladies and kids product catalog
- Cart summary with quantity controls
- WhatsApp checkout flow
- Static export support for easy deployment
- Branded logo, SEO metadata, sitemap, robots and contact page

## Run locally

1. Install dependencies:

```bash
npm install
```

If PowerShell gives npm shell errors, run:

```powershell
$env:ComSpec="C:\Windows\System32\cmd.exe"
```

2. Start development server:

```bash
npm run dev
```

3. Open `http://localhost:3000`

## Build for hosting

```bash
npm run build
```

The static site will be generated in the `out/` folder because `next.config.mjs` uses `output: "export"`.

## Deploy options

- Vercel: import the project and deploy directly.
- Netlify: build command `npm run build`, publish directory `out`.
- Any static host: upload the `out/` folder after building.

## Update store content

- Edit product names, descriptions, prices and sizes in `data/store.ts`.
- Set `NEXT_PUBLIC_SITE_URL` to your real domain before production build.
- Add your logo and real product images later when ready.

## Production checklist

1. Install dependencies:

```bash
npm install
```

2. Set your production domain:

```powershell
$env:NEXT_PUBLIC_SITE_URL="https://www.yourdomain.com"
```

3. Build the project:

```bash
npm run build
```

4. Deploy the generated `out/` directory or connect the repo to Vercel/Netlify.

## Domain setup

- Buy a domain from providers like Namecheap, GoDaddy or Hostinger.
- Preferred setup: use `www.yourdomain.com` as the main domain and redirect the root domain to it, or do the reverse if you prefer apex as primary.
- For Vercel:
  - Add the domain in the Vercel project settings.
  - Point the domain using the DNS records Vercel provides.
- For Netlify:
  - Add the custom domain in Site settings.
  - Update your DNS records using Netlify's instructions.
- Typical DNS records:
  - `A` record for root domain if your host requires it.
  - `CNAME` record for `www` pointing to your hosting provider target.
- After DNS is connected:
  - Enable HTTPS/SSL in your hosting dashboard.
  - Rebuild with `NEXT_PUBLIC_SITE_URL` set to the final domain.
  - Submit your sitemap at `https://www.yourdomain.com/sitemap.xml` in Google Search Console.

## Important note

- `git` is not currently installed on this machine, so terminal-based GitHub upload will not work until Git for Windows is installed, or you upload the folder through the GitHub website/app.

See [DOMAIN_SETUP.md](./DOMAIN_SETUP.md) for a cleaner launch checklist.
