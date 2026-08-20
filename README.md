# portfolio

Personal portfolio site — React + Vite, single page, deployed on Cloudflare Pages.

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
