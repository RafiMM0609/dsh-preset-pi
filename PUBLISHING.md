# Panduan Publikasi `dsh-preset-pi`

Dokumen ini berisi panduan langkah demi langkah untuk mempublikasikan paket `dsh-preset-pi` ke **GitHub** dan **npm registry**.

---

## 1. Push ke GitHub Repository

### A. Buat Repository di GitHub
1. Buka browser dan login ke akun GitHub: [github.com/new](https://github.com/new).
2. Isi **Repository name**: `dsh-preset-pi`.
3. Set visibilitas ke **Public**.
4. **Jangan** centang *"Add a README file"*, *"Add .gitignore"*, atau *"Choose a license"* (karena repo lokal sudah lengkap).
5. Klik **Create repository**.

### B. Hubungkan Remote & Push Branch `main`
Jalankan perintah berikut di terminal:

```bash
cd /home/ubuntu/src/dsh-preset-pi

# Menggunakan HTTPS (kredensial sudah tersimpan di VPS):
git remote add origin https://github.com/RafiMM0609/dsh-preset-pi.git

# Push branch main beserta semua commit
git push -u origin main
```

---

## 2. Verifikasi Paket Sebelum Publish ke npm

Sebelum publish, pastikan semua checklist lulus pengujian lokal:

```bash
cd /home/ubuntu/src/dsh-preset-pi

# 1. Jalankan automated test suite
npm test

# 2. Cek isi tarball yang akan diunggah ke registry
npm pack --dry-run
```

*Pastikan output `npm pack` hanya memuat 8 file penting (`package.json`, `cordis.patch.yml`, `icon.svg`, `README.md`, `CHANGELOG.md`, `LICENSE`, `locale/en.json`, `locale/id.json`).*

---

## 3. Publikasi ke NPM Registry

### A. Login ke Akun npm
```bash
npm login
```
*Masukkan Username, Password, Email, dan One-Time Password (OTP) npm Anda.*

Verifikasi bahwa sesi login aktif:
```bash
npm whoami
```

### B. Publish Paket
Karena paket ini berstatus open-source untuk publik, gunakan flag `--access public`:

```bash
npm publish --access public
```

---

## 4. Verifikasi Hasil Instalasi Global

Setelah berhasil di-publish ke npm, plugin ini bisa diinstall oleh siapa pun di dunia menggunakan DeepSeek Harness:

### Via DSH CLI:
```bash
dsh plugin --profile web add dsh-preset-pi
```

### Via DSH Web UI:
1. Buka UI Web DeepSeek Harness (`http://localhost:3080`).
2. Masuk ke **Settings** → **Plugins**.
3. Di tab pencarian plugin, ketik `dsh-preset-pi` dan klik **Install**.

---

## 5. Rilis Versi Baru di Masa Depan (Bumping Version)

Jika nanti Anda ingin memperbarui preset atau menambahkan fitur:

```bash
# 1. Perbarui catatan rilis di CHANGELOG.md

# 2. Naikkan versi sesuai SemVer (patch/minor/major)
npm version patch   # 1.0.0 -> 1.0.1 (perbaikan bug / tweak kecil)
# atau
npm version minor   # 1.0.0 -> 1.1.0 (fitur / tool baru)

# 3. Push commit dan git tag ke GitHub
git push --follow-tags

# 4. Publish versi baru ke npm
npm publish
```
