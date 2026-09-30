---
outline: deep
---

# Dashboard Warehouse

Dashboard adalah halaman utama untuk melihat kondisi proyek dan aktivitas barang secara keseluruhan. Pengguna dapat memantau perkembangan proyek, proses produksi, pengiriman barang, dan aktivitas stok gudang tanpa membuka setiap modul secara terpisah.

Dashboard terdiri dari empat bagian utama:

1. Ringkasan Informasi
2. Progress Keseluruhan
3. Proyek Aktif
4. Gerakan Stok Terakhir

## 1. Ringkasan Informasi

Bagian ini berada di bagian atas Dashboard. Kartu-kartunya memberikan gambaran singkat mengenai kondisi proyek dan barang.

### Proyek Aktif

Menampilkan jumlah proyek yang masih dikerjakan dan belum mencapai status **Selesai**. Informasi ini membantu pengguna mengetahui jumlah proyek yang masih perlu dipantau.

### Purchase Order Belum Diterima

Menampilkan jumlah Purchase Order (PO) yang sudah dibuat, tetapi barang atau material yang dipesan belum diterima. Informasi ini membantu pengguna memantau PO yang masih menunggu kedatangan barang.

### Barang Siap Kirim

Menampilkan jumlah barang yang sudah selesai diproduksi dan siap dikirim ke tujuan proyek. Informasi ini membantu pengguna mengetahui barang yang dapat masuk ke proses pengiriman.

## 2. Progress Keseluruhan

Bagian ini menunjukkan perkembangan barang dalam proses proyek melalui tiga indikator.

### Barang Diterima

Menampilkan persentase barang yang sudah diterima dibandingkan dengan total barang yang dibutuhkan. Semakin tinggi persentasenya, semakin banyak kebutuhan barang atau material yang tersedia untuk proyek.

### Produksi Barang

Menampilkan persentase barang yang sudah selesai diproduksi dibandingkan dengan total barang yang harus diproduksi. Persentase ini menunjukkan perkembangan proses produksi secara keseluruhan.

### Barang Dikirim

Menampilkan persentase barang yang sudah dikirim dibandingkan dengan total barang yang harus dikirim. Persentase ini menunjukkan perkembangan pengiriman barang ke tujuan proyek.

## 3. Proyek Aktif

Bagian ini menampilkan daftar proyek yang masih berjalan. Untuk setiap proyek, pengguna dapat melihat posisi dalam tahapan pengerjaan serta persentase barang yang sudah diproduksi dan dikirim.

### Tahapan Proyek

Setiap proyek memiliki tujuh tahapan yang menunjukkan posisinya dalam proses pengerjaan:

**Persiapan → Material → Bahan Datang → Potong → Sebagian Jadi → Sebagian Kirim → Selesai**

| Tahap | Keterangan |
| --- | --- |
| **Persiapan** | Proyek mulai dipersiapkan sebelum pengadaan material dan produksi dilakukan. |
| **Material** | Kebutuhan material sedang dipersiapkan atau dalam proses pengadaan. |
| **Bahan Datang** | Material yang dibutuhkan sudah datang dan tersedia untuk diproses. |
| **Potong** | Material mulai diproses atau dipotong sesuai kebutuhan produksi. |
| **Sebagian Jadi** | Sebagian barang yang dibutuhkan sudah selesai diproduksi. |
| **Sebagian Kirim** | Sebagian barang yang selesai diproduksi sudah dikirim ke tujuan proyek. |
| **Selesai** | Seluruh proses produksi dan pengiriman barang untuk proyek telah selesai. |

### Progress Produksi dan Pengiriman

Selain tahapan proyek, Dashboard menampilkan perkembangan barang untuk setiap proyek:

- **Produksi** — Persentase barang yang sudah selesai diproduksi.
- **Pengiriman** — Persentase barang yang sudah dikirim ke tujuan proyek.

Kedua informasi ini membantu pengguna melihat perkembangan proyek secara lebih detail. Contohnya, proyek dapat berada pada tahap **Sebagian Jadi** dengan progress produksi **70%** dan pengiriman **30%**.

## 4. Gerakan Stok Terakhir

Bagian ini menampilkan 10 aktivitas perpindahan barang terbaru di gudang. Pengguna dapat mengetahui aktivitas barang yang baru terjadi tanpa membuka seluruh riwayat stok.

| Informasi | Keterangan |
| --- | --- |
| **Waktu dan tanggal** | Waktu dan tanggal aktivitas stok dilakukan. |
| **Barang** | Nama barang yang mengalami pergerakan stok. |
| **Deskripsi** | Keterangan mengenai aktivitas yang dilakukan terhadap barang. |
| **Jumlah** | Jumlah barang yang mengalami pergerakan. |
| **Pencatat** | Nama pengguna yang mencatat aktivitas pergerakan stok. |

Terdapat dua jenis pergerakan:

- **Barang Masuk** — Barang yang ditambahkan atau diterima ke dalam stok gudang.
- **Barang Keluar** — Barang yang dikeluarkan dari stok gudang, misalnya untuk kebutuhan produksi atau pengiriman.

Informasi pencatat membantu pengguna mengetahui siapa yang mencatat aktivitas stok.

## Ringkasan Dashboard

Dashboard memberikan gambaran umum mengenai kondisi proyek dan aktivitas barang dalam satu halaman. Pengguna dapat:

- Melihat jumlah proyek aktif, PO yang belum diterima, dan barang siap kirim.
- Memantau perkembangan barang yang sudah diterima, diproduksi, dan dikirim.
- Mengetahui tahapan setiap proyek serta progress produksi dan pengirimannya.
- Memantau 10 aktivitas stok terbaru, termasuk detail barang masuk atau keluar dan pengguna yang mencatatnya.