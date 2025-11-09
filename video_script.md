# Video penjelasan implementasi (3-6 menit)

1. Opening (15s)

   - Perkenalkan anggota kelompok dan tujuan: demo penggunaan container dan CI/CD untuk deployment cepat.

2. Arsitektur singkat (20s)

   - Dua layanan: frontend (Next.js) dan backend (Express). Keduanya dikontainerkan dan di-orchestrate dengan `docker compose`.

3. Demonstrasi lokal (1:30)

   - Tunjukkan file `Dockerfile` di masing-masing folder.
   - Jalankan `docker compose up --build` (rekam terminal) dan tunjukkan frontend di `http://localhost:3000` yang memanggil backend.

4. CI (1:00)

   - Jelaskan `/.github/workflows/ci.yml`: job test untuk frontend/backend lalu membangun & mendorong image ke ghcr (GitHub Container Registry).
   - Tunjukkan run CI (jika sudah push ke GitHub) atau jelaskan langkah yang akan dijalankan.

5. CD (1:00)

   - Jelaskan `/.github/workflows/cd.yml` yang membangun & push image.
   - Jelaskan opsi deploy via SSH (secrets diperlukan): script menarik image dan menjalankan `docker compose up -d` di server.

6. Penutup (15s)
   - Ringkas manfaat: deployment cepat, konsistensi lingkungan, dan automatisasi.
