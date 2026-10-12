---
outline: deep
---

# Daftar Project

Halaman **Daftar Project** menampilkan proyek dalam bentuk tabel. Pilih proyek untuk membuka detailnya dan meninjau informasi perencanaan, produksi, material, persediaan, pengiriman, dokumen, serta riwayat aktivitas.

## Daftar Proyek

Tabel daftar proyek memuat informasi berikut:

| Informasi | Keterangan |
| --- | --- |
| **No. quotation** | Nomor quotation yang terkait dengan proyek. |
| **ID proyek** | Identitas proyek. |
| **Brand** | Brand yang digunakan pada proyek. |
| **Nama proyek** | Nama proyek. |
| **Cluster** | Cluster lokasi proyek. |
| **Type** | Tipe rumah atau unit pada proyek. |
| **Qty rumah** | Jumlah rumah dalam proyek. |
| **Nilai proyek** | Nilai total proyek. |
| **Progress produksi** | Persentase progress produksi proyek. |
| **Progress kirim** | Persentase progress pengiriman proyek. |
| **Status** | Status proyek. |
| **Aksi cepat** | Akses untuk melihat quotation, Purchase Order, rencana potong, stok, dan surat jalan terkait proyek. |

Klik baris atau proyek yang ingin ditinjau untuk membuka detail proyek. Detail proyek memiliki 11 menu.

## Menu Detail Proyek

### 1. Overview

Overview merangkum informasi dan progress proyek.

**Informasi proyek:**

| Informasi | Keterangan |
| --- | --- |
| **ID proyek** | Identitas proyek. |
| **No. quotation** | Nomor quotation terkait. |
| **Customer/developer** | Customer atau developer proyek. |
| **Location** | Lokasi proyek. |
| **Cluster** | Cluster proyek. |
| **Type** | Tipe rumah atau unit. |
| **Divisi** | Divisi yang menangani proyek. |
| **Brand/finishing** | Brand dan finishing yang digunakan. |
| **Qty rumah** | Jumlah rumah dalam proyek. |
| **Nilai proyek** | Nilai total proyek. |
| **Tanggal dibuat** | Tanggal proyek dibuat. |
| **Penanggung jawab** | Pengguna yang bertanggung jawab atas proyek. |

Overview juga menampilkan total unit planned, jumlah kode gambar, progress produksi, jumlah barang jadi, jumlah unit terkirim, dan sisa unit yang belum diproduksi.

**Ringkasan progress** menunjukkan persentase unit yang selesai diproduksi dan persentase unit yang sudah dikirim. **Status material per batch** merangkum progress produksi dan pengiriman untuk setiap kategori material.

### 2. Unit Schedule

Menampilkan unit yang direncanakan untuk diproduksi. Komponen untuk setiap unit ditampilkan tepat pada baris setelah unit terkait.

| Informasi unit | Keterangan |
| --- | --- |
| **Kode gambar** | Kode shop drawing/unit. |
| **Lebar** | Lebar unit. |
| **Tinggi** | Tinggi unit. |
| **Qty per rumah** | Jumlah unit tersebut untuk setiap rumah. |
| **Lokasi** | Lokasi pemasangan unit. |
| **Jumlah komponen** | Jumlah komponen pembentuk unit. |
| **BOM (Bill of Materials)** | Daftar material atau komponen yang membentuk unit. |

### 3. Batch Plan

Menampilkan rencana per batch, termasuk jumlah rumah, tipe rumah, serta persentase progress produksi dan pengiriman. Rincian unit yang dibutuhkan pada setiap batch meliputi:

| Informasi unit dalam batch | Keterangan |
| --- | --- |
| **Kode gambar** | Kode gambar unit. |
| **Component** | Komponen unit. |
| **Tipologi** | Tipologi unit. |
| **Jumlah per rumah** | Kebutuhan unit atau komponen untuk setiap rumah. |
| **Jumlah kebutuhan batch** | Total kebutuhan untuk batch tersebut. |
| **Jumlah selesai** | Jumlah yang sudah selesai diproduksi. |
| **Progress (%)** | Persentase progress produksi unit atau komponen. |

### 4. Kebutuhan Material

Kebutuhan material dikelompokkan per batch. Setiap barang menampilkan jumlah yang dibutuhkan, jumlah yang dipesan dan diterima, serta ketersediaan stok.

| Informasi | Keterangan |
| --- | --- |
| **Barang** | Material yang dibutuhkan. |
| **Jumlah dibutuhkan** | Total kebutuhan barang pada batch. |
| **Dipesan/diterima** | Jumlah dipesan dibanding jumlah diterima, misalnya `2/2` berarti 2 dipesan dan 2 diterima. |
| **Proyek: batang/sisa** | Stok batang dan sisa material yang tersedia di proyek. |
| **Gudang: batang/sisa** | Stok batang dan sisa material yang tersedia di gudang. |
| **Kurang** | Menunjukkan kecukupan material; jika kurang, tampilkan jumlah kekurangannya. |

### 5. Purchase Order

Bagian status pemesanan material merangkum kondisi pemesanan untuk setiap kategori material, meliputi keadaan penerimaan (diterima, diterima sebagian, atau dikirim), jumlah dipesan, dan jumlah diterima.

Daftar Purchase Order dalam proyek dikelompokkan menurut batch dan menampilkan:

| Informasi PO | Keterangan |
| --- | --- |
| **No. PO** | Nomor Purchase Order. |
| **Batch** | Batch proyek terkait. |
| **Pemasok** | Pemasok material. |
| **Kategori** | Kategori material yang dipesan. |
| **Tanggal** | Tanggal Purchase Order. |
| **Nilai** | Nilai Purchase Order. |
| **Terima (%)** | Persentase barang yang telah diterima. |
| **Status** | Status Purchase Order, seperti draft, diterima, atau dibatalkan. |

### 6. WO Cutting

Ringkasan WO Cutting menampilkan jumlah batang yang dipakai, jumlah sisa yang menjadi scrap, total panjang sisa (mm), dan persentase waste terhadap panjang batang terpakai.

**Tabel waste per section** diurutkan dari section dengan waste paling besar:

| Informasi | Keterangan |
| --- | --- |
| **Section** | Section profil. |
| **Deskripsi** | Deskripsi profil. |
| **Finishing** | Finishing profil. |
| **Jumlah batang** | Jumlah batang yang digunakan. |
| **Total panjang batang** | Total panjang batang yang digunakan. |
| **Panjang terpakai** | Total panjang profil yang terpakai. |
| **Ukuran kerf** | Ukuran material yang terbuang akibat proses potong. |
| **Panjang sisa** | Total panjang material tersisa. |
| **Jumlah scrap** | Jumlah sisa yang dikategorikan sebagai scrap. |
| **Waste (%)** | Persentase waste pada section. |

**Tabel rencana potong per batang** menampilkan section, nomor batang (Bar No), sumber batang, panjang stok (stock length), pola potong (cutting pattern), ukuran kerf, panjang sisa, dan offcut.

### 7. WO Fabrication

Menampilkan informasi fabrikasi untuk setiap unit, termasuk shop drawing dan daftar material yang diperlukan. Daftar material dipisah menjadi tiga tabel:

| Tabel | Informasi |
| --- | --- |
| **Aluminium** | Section, peran, panjang (mm), dan qty. |
| **Aksesori** | Kode, deskripsi, qty, dan satuan (misalnya pcs, SOSIS, atau BH). |
| **Kaca** | Kode, jenis, ukuran potong, dan qty. |

### 8. Inventory

Menampilkan stok material dan barang jadi di dalam batch.

| Kelompok | Informasi |
| --- | --- |
| **Aluminium** | Section, deskripsi, finishing, panjang (mm), qty, dan jenis stok (full bar atau reusable offcut). |
| **Aksesori** | Kode, deskripsi, qty, dan satuan. |
| **Kaca** | Kode, jenis, ukuran potong, dan qty. |
| **Barang jadi** | Kode gambar, jumlah komponen, item, dimensi, jumlah diproduksi, jumlah terkirim, dan jumlah stok. |

### 9. Delivery

Menampilkan surat jalan yang terkait dengan proyek:

| Informasi | Keterangan |
| --- | --- |
| **No. surat** | Nomor surat jalan. |
| **Tanggal dibuat** | Tanggal surat jalan dibuat. |
| **Batch** | Batch proyek yang dikirim. |
| **Total qty unit yang dikirim** | Jumlah unit pada pengiriman. |
| **Driver** | Pengemudi pengiriman. |
| **Penerima** | Pihak yang menerima barang. |
| **Status** | Status surat jalan, misalnya draft, diterima, atau disetujui. |

### 10. Documents

Menampilkan seluruh dokumen yang terkait dengan proyek:

| Informasi | Keterangan |
| --- | --- |
| **Jenis** | Jenis dokumen. |
| **Sumber** | Sumber dokumen. |
| **No. dokumen** | Nomor dokumen. |
| **Revisi** | Revisi dokumen. |
| **Batch** | Batch terkait, jika ada. |
| **Tanggal dibekukan** | Tanggal dokumen dibekukan; tampil `-` jika belum dibekukan. |
| **Keadaan** | Status dokumen: belum terbit atau terbit. |

### 11. History

Menampilkan catatan log aktivitas proyek, termasuk waktu aktivitas, pengguna yang melakukan perubahan, modul terkait, dan jenis perubahan atau tindakan, seperti create, send, dan receive.
