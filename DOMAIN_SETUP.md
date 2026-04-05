# Domain Setup Guide

Use this checklist when you are ready to launch Kutre Cloth Stores on a real domain.

## 1. Choose the domain

- Examples:
  - `kutreclothstores.com`
  - `kutreclothstore.in`
  - `kutreclothstores.in`

Try to choose a short domain that matches the store name closely.

## 2. Connect the site to hosting

### Vercel

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. In the project settings, add your custom domain.
4. Add the DNS records Vercel asks for.

### Netlify

1. Push the project to GitHub.
2. Import the repository into Netlify.
3. Build command: `npm run build`
4. Publish directory: `out`
5. Add the custom domain in the Netlify dashboard.
6. Add the DNS records Netlify asks for.

## 3. Set the production URL before building

In PowerShell:

```powershell
$env:NEXT_PUBLIC_SITE_URL="https://www.yourdomain.com"
npm run build
```

This makes the SEO metadata, sitemap and canonical URLs point to the real domain.

## 4. DNS basics

- `A record`: usually used for the root domain like `yourdomain.com`
- `CNAME`: usually used for `www.yourdomain.com`

Your hosting provider will tell you the exact values to use.

## 5. Final launch checks

- The site opens on your real domain
- HTTPS certificate is active
- Home page works
- Contact page works
- WhatsApp button opens correctly
- `sitemap.xml` loads
- `robots.txt` loads
- Google Search Console is connected
- Business name, phone and address are correct
