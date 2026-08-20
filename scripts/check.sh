#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."

echo "== lint =="
npm run lint

echo "== build =="
npm run build

echo "== trivy fs scan =="
if command -v trivy >/dev/null 2>&1; then
  trivy fs --scanners vuln,secret,misconfig --severity CRITICAL,HIGH --exit-code 1 .
else
  echo "trivy not installed locally — skipping (CI still runs it). Install: https://aquasecuritydocs.com/trivy/latest/getting-started/installation/"
fi

echo "== all checks passed =="
