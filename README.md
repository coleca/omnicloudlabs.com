# OmniCloud Labs

Modern one-page company site for `omnicloudlabs.com`, rebuilt as a Vite-based static site for easier maintenance and GitHub Pages deployment.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Deploying to GitHub Pages

This repo includes `.github/workflows/deploy.yml`, which builds the site and deploys `dist/` to GitHub Pages on pushes to `main` or `gh-pages`.

To finish setup in GitHub:

1. Push this repo to the GitHub repository that should own `omnicloudlabs.com`.
2. In GitHub, open `Settings` -> `Pages`.
3. Set the source to `GitHub Actions`.
4. Add `omnicloudlabs.com` as the custom domain in GitHub Pages settings.
5. After DNS propagates, enable `Enforce HTTPS`.

`public/CNAME` is included so the built output stays aligned with the apex domain, but for Actions-based Pages deployments GitHub still expects the custom domain to be configured in repository settings.

## DNS records for `omnicloudlabs.com`

At your DNS provider, configure:

- `A` record for `@` -> `185.199.108.153`
- `A` record for `@` -> `185.199.109.153`
- `A` record for `@` -> `185.199.110.153`
- `A` record for `@` -> `185.199.111.153`
- `CNAME` record for `www` -> your GitHub Pages default domain, such as `USERNAME.github.io`

Optional IPv6 support:

- `AAAA` -> `2606:50c0:8000::153`
- `AAAA` -> `2606:50c0:8001::153`
- `AAAA` -> `2606:50c0:8002::153`
- `AAAA` -> `2606:50c0:8003::153`

Do not use wildcard DNS records.
# omnicloudlabs.com
# omnicloudlabs.com
