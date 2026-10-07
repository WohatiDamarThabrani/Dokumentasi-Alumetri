---
outline: deep
---

# Daftar Quotation

Halaman Daftar Quotation menampilkan quotation estimator dalam bentuk tabel. Informasi yang tersedia meliputi:

| Kolom | Keterangan |
| --- | --- |
| **No Quotation** | Nomor identifikasi quotation. |
| **Brand** | Brand yang digunakan pada proyek. |
| **Nama Proyek** | Nama proyek terkait quotation. |
| **Cluster** | Cluster proyek. |
| **Type** | Tipe rumah pada quotation. |
| **Qty Rumah** | Jumlah rumah yang dihitung. |
| **Nilai Project** | Nilai proyek pada quotation. |
| **Status** | Status quotation saat ini. |
| **Last Update** | Waktu terakhir quotation diperbarui. |
| **Aksi** | Tindakan yang tersedia untuk quotation. |

## Membuat Draft Quotation

Isi informasi quotation secara berurutan. Draft yang disimpan akan ditinjau terlebih dahulu oleh admin.

### 1. Mengisi Informasi Proyek

Masukkan informasi dasar proyek:

- Nama proyek
- Customer/developer
- Brand
- Finishing/color
- Pricelist
- Divisi
- Cluster
- Location

### 2. Mengisi Tipe dan Jumlah Rumah

Tambahkan tipe rumah yang akan dihitung dan jumlah unit untuk setiap tipe. Contoh tipe rumah: **STD L6X10**.

### 3. Mengisi Commercial Setting

Masukkan pengaturan komersial berikut:

| Pengaturan | Satuan |
| --- | --- |
| Margin aluminium | Persen |
| Margin kaca | Persen |
| Diskon | Persen |
| PPN | Persen |
| Architect fee | Persen |
| Contractor fee | Persen |
| Prelim | Persen |
| Installation | Rupiah |
| Delivery | Rupiah |

Semua nilai diisi dalam persen, kecuali **Installation** dan **Delivery** yang diisi dalam rupiah.

### 4. Mengisi Kode Gambar

Tambahkan rincian untuk setiap kode gambar:

- Tipe rumah
- Kode gambar
- Dimensi
- Quantity per rumah
- Lokasi
- Keterangan

### 5. Menambahkan Komponen pada Kode Gambar

Pilih kode gambar yang akan diberi komponen, lalu lengkapi informasi komponennya:

- **Unit type** — jenis komponen, misalnya *Fixed Window 2T*.
- **Lebar** dan **tinggi** — ukuran dalam milimeter (mm).
- **Qty panel kaca** — jumlah lembar kaca untuk komponen.
- **Kaca** — jenis kaca yang digunakan.
- **Metode pasang kaca** — metode pemasangan kaca.
- **Finishing** — finishing komponen.
- **Kondisi sisi** — kondisi sisi kiri, kanan, atas, dan bawah. Pilihan yang tersedia meliputi **Wall** (tertulis “wll” pada instruksi), **Transome**, dan **Shared transome**.

Setelah informasi komponen lengkap, klik **Add Quotation** untuk menambahkan komponen ke quotation. Ulangi untuk komponen lain yang diperlukan.

### 6. Menyimpan Draft untuk Ditinjau

Setelah seluruh data dan komponen quotation selesai ditambahkan, klik tombol **Simpan** di bagian bawah halaman. Quotation disimpan sebagai draft dan akan ditinjau terlebih dahulu oleh admin.

## Navigasi

- [Dashboard Estimator](/roles/estimator/dashboard)
