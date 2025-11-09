# Laporan Implementasi CI/CD dan Container (UTS)

## Ringkasan

Proyek ini terdiri dari dua layanan: frontend (Next.js) dan backend (Express). Keduanya dikontainerkan dengan Docker, dapat dijalankan bersamaan lewat `docker compose`, dan pipeline CI/CD dibuat menggunakan GitHub Actions.

## Komponen yang dipenuhi

- Penggunaan container: Dockerfiles untuk frontend & backend, `docker-compose.yml` untuk orkestrasi lokal. (50 poin)
- Implementasi CI: `/.github/workflows/ci.yml` menjalankan instalasi dan test untuk kedua layanan lalu membangun dan mem-push image ke GHCR. (20 poin)
- Implementasi CD: `/.github/workflows/cd.yml` mem-build & push images; job opsional melakukan deploy via SSH ke server target dengan `docker compose`. (20 poin)

## Cara menjalankan (lokal)

1. Pastikan Docker terpasang.
2. Di root project jalankan: `docker compose up --build`.
3. Akses frontend di `http://localhost:3000`.

## Bukti & Artefak

- File Docker: `/frontend/Dockerfile`, `/backend/Dockerfile`
- Orkestrasi lokal: `docker-compose.yml`
- CI workflow: `/.github/workflows/ci.yml`
- CD workflow: `/.github/workflows/cd.yml`

## Catatan keamanan

- Simpan kunci SSH dan token registry sebagai secrets di GitHub (jangan commit kunci secara langsung).
