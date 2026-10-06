---
outline: deep
---

# Dashboard

Dashboard adalah halaman utama aplikasi untuk melihat kondisi proyek dan aktivitas barang secara keseluruhan.

Melalui Dashboard, pengguna dapat melihat progress proyek, proses produksi, pengiriman barang, serta aktivitas stok gudang tanpa harus membuka setiap modul secara terpisah.

Dashboard terdiri dari empat bagian utama:

1. Ringkasan Informasi
2. Progress Keseluruhan
3. Proyek Aktif
4. Gerakan Stok Terakhir

## 1. Ringkasan Informasi

Bagian ini berada di bagian atas Dashboard dan menampilkan kartu berisi informasi penting mengenai proyek dan barang.

### Proyek Aktif

Menampilkan jumlah proyek yang masih dalam proses pengerjaan dan belum mencapai status **Selesai**.

### Purchase Order Belum Diterima

Menampilkan jumlah Purchase Order (PO) yang sudah dibuat, tetapi barang atau material yang dipesan belum diterima.

### Barang Siap Kirim

Menampilkan jumlah barang yang sudah selesai diproduksi dan siap dikirim ke tujuan proyek.

## 2. Progress Keseluruhan

Bagian ini menampilkan progress barang dalam proses proyek melalui tiga indikator:

### Barang Diterima

Menampilkan persentase barang yang sudah diterima dibandingkan dengan total barang yang dibutuhkan.

### Produksi Barang

Menampilkan persentase barang yang sudah selesai diproduksi dibandingkan dengan total barang yang harus diproduksi.

### Barang Dikirim

Menampilkan persentase barang yang sudah dikirim dibandingkan dengan total barang yang harus dikirim.

## 3. Proyek Aktif

Bagian ini menampilkan daftar proyek yang masih berjalan. Untuk setiap proyek, pengguna dapat melihat:

1. Posisi proyek dalam tahapan pengerjaan.
2. Progress produksi barang.
3. Progress pengiriman barang.

### Tahapan Proyek

Setiap proyek memiliki tujuh tahapan yang menunjukkan posisinya dalam proses pengerjaan:

**Persiapan → Material → Bahan Datang → Potong → Sebagian Jadi → Sebagian Kirim → Selesai**

| Tahap | Keterangan |
| --- | --- |
| **Persiapan** | Tahap awal ketika proyek mulai dipersiapkan sebelum proses pengadaan material dan produksi dilakukan. |
| **Material** | Kebutuhan material untuk proyek sedang dipersiapkan atau dalam proses pengadaan. |
| **Bahan Datang** | Material yang dibutuhkan sudah datang dan tersedia untuk diproses. |
| **Potong** | Material mulai dipotong sesuai kebutuhan produksi. |
| **Sebagian Jadi** | Sebagian barang yang dibutuhkan untuk proyek sudah selesai diproduksi. |
| **Sebagian Kirim** | Sebagian barang yang sudah selesai diproduksi telah dikirim ke tujuan proyek. |
| **Selesai** | Seluruh proses produksi dan pengiriman barang untuk proyek telah selesai. |

### Progress Produksi dan Pengiriman

Dashboard menampilkan progress produksi dan pengiriman untuk setiap proyek:

- **Produksi** — Persentase barang yang sudah selesai diproduksi.
- **Pengiriman** — Persentase barang yang sudah dikirim ke tujuan proyek.

Sebagai contoh, sebuah proyek dapat berada pada tahap **Sebagian Jadi** dengan progress produksi **70%** dan progress pengiriman **30%**.

## 4. Gerakan Stok Terakhir

Bagian ini menampilkan 10 aktivitas perpindahan barang terbaru yang terjadi di gudang.

| Informasi | Keterangan |
| --- | --- |
| **Waktu dan tanggal** | Waktu dan tanggal ketika aktivitas stok dilakukan. |
| **Barang** | Nama barang yang mengalami pergerakan stok. |
| **Deskripsi** | Keterangan mengenai aktivitas yang dilakukan terhadap barang. |
| **Jumlah** | Jumlah barang yang masuk atau keluar dari gudang. |
| **Pencatat** | Nama pengguna yang mencatat aktivitas pergerakan stok. |

Terdapat dua jenis pergerakan stok:

### Barang Masuk

Menunjukkan barang yang ditambahkan atau diterima ke dalam **Stok Gudang**.

### Barang Keluar

Menunjukkan barang yang dikeluarkan dari **Stok Gudang**, misalnya untuk kebutuhan produksi atau pengiriman.

## Istilah Stok

Dalam pengelolaan barang, terdapat dua jenis stok:

### Stok Proyek

Barang yang dialokasikan secara khusus untuk memenuhi kebutuhan proyek tertentu.

### Stok Gudang

Barang yang tersedia sebagai stok umum dan dapat digunakan untuk kebutuhan proyek atau kebutuhan lainnya.

## Ringkasan

Dashboard memberikan gambaran umum mengenai kondisi proyek, progress produksi, pengiriman, dan aktivitas stok dalam satu halaman. Pengguna dapat menggunakannya untuk:

- Melihat jumlah proyek yang masih aktif.
- Melihat jumlah PO yang belum diterima.
- Mengetahui jumlah barang yang siap dikirim.
- Memantau persentase barang yang sudah diterima.
- Memantau progress produksi dan pengiriman barang.
- Mengetahui posisi setiap proyek dalam tahapan pengerjaan.
- Melihat progress produksi dan pengiriman setiap proyek.
- Memantau 10 aktivitas stok terbaru dan mengetahui siapa pencatatnya.
