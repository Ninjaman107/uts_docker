# UTS Deployment Demo (Frontend + Backend)

This repository contains a minimal Next.js frontend and an Express backend, configured for containerized deployment and CI/CD using GitHub Actions.

Structure

- `/frontend` - Next.js app (port 3000)
- `/backend` - Express API (port 4000)

Local development with Docker

1. Build and run both services:

```powershell
docker compose up --build
```

2. Visit http://localhost:3000

CI/CD

- `/.github/workflows/ci.yml` runs tests and builds/pushes images to GitHub Container Registry (GHCR) on push to `main`.
- `/.github/workflows/cd.yml` builds/pushes and can optionally SSH to a remote host to pull images and run `docker compose up -d` (requires secrets: `SSH_HOST`, `SSH_USER`, `SSH_PRIVATE_KEY`).

Notes

- Configure repository to have GHCR permissions if you want to pull images from a separate account.
- For Podman, the Dockerfiles work with Buildah/Podman build too.
