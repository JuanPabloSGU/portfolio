# portfolio

Personal portfolio site — static HTML/CSS built with Vite, single page, deployed on Cloudflare Pages. No JavaScript framework: the page has no interactivity that needs one, so the entire production build is a few KB.

## Develop

```
npm install
npm run dev
```

## Checks

```
npm run lint
npm run build
```

Or run everything at once (build, lint, and a local Trivy scan if installed):

```
./scripts/check.sh
```

CI (`.github/workflows/ci.yml`) runs lint, build, and a Trivy filesystem/secret/misconfig scan on every push and PR.

## Deploy

Cloudflare Pages: build command `npm run build`, output directory `dist`.
