---
outline: deep
---

# Dashboard Warehouse

Dashboard menampilkan ringkasan informasi terkait proyek, proses produksi, pengiriman barang, dan aktivitas stok gudang. Halaman ini membantu pengguna Warehouse memantau kondisi proyek dan pergerakan barang tanpa membuka setiap modul secara terpisah.

Informasi pada Dashboard terdiri dari:

- Ringkasan informasi proyek dan barang
- Progress keseluruhan
- Proyek aktif
- Gerakan stok terakhir

## 1. Ringkasan Informasi

Bagian ini menampilkan kartu ringkasan kondisi proyek dan barang.

### Proyek Aktif

Menampilkan jumlah proyek yang sedang berjalan dan belum mencapai status Selesai.

### Purchase Order Belum Diterima

Menampilkan jumlah Purchase Order (PO) yang telah dibuat tetapi barang atau material yang dipesan belum diterima. Informasi ini membantu memantau PO yang masih menunggu penerimaan barang.

### Barang Siap Kirim

Menampilkan jumlah barang yang telah selesai diproduksi dan siap dikirim ke tujuan proyek.

## 2. Progress Keseluruhan

Bagian Progress menampilkan persentase perkembangan barang dalam keseluruhan proses proyek.

### Barang Diterima

Menampilkan persentase barang yang telah diterima dibandingkan dengan total barang yang dibutuhkan.

### Produksi Barang

Menampilkan persentase barang yang telah selesai diproduksi dibandingkan dengan total barang yang harus diproduksi.

### Barang Dikirim

Menampilkan persentase barang yang telah dikirim dibandingkan dengan total barang yang harus dikirim.

## 3. Proyek Aktif

Bagian ini menampilkan daftar proyek yang masih berjalan beserta posisi setiap proyek dalam alur pengerjaan.

Setiap proyek memiliki tujuh tahapan status:

| Tahap | Deskripsi |
| --- | --- |
| **Persiapan** | Proyek berada pada tahap awal sebelum pengadaan material dan produksi dimulai. |
| **Material** | Proyek memasuki tahap pengadaan atau persiapan material untuk produksi. |
| **Bahan Datang** | Material yang dibutuhkan telah diterima dan tersedia untuk diproses. |
| **Potong** | Material memasuki proses pemotongan sesuai kebutuhan produksi. |
| **Sebagian Jadi** | Sebagian barang untuk proyek telah selesai diproduksi. |
| **Sebagian Kirim** | Sebagian barang yang selesai diproduksi telah dikirim ke tujuan proyek. |
| **Selesai** | Seluruh proses produksi dan pengiriman barang untuk proyek telah selesai. |

### Progress Produksi dan Pengiriman

Setiap proyek aktif juga menampilkan:

- **Produksi** — Persentase barang yang telah selesai diproduksi.
- **Pengiriman** — Persentase barang yang telah dikirim.

## 4. Gerakan Stok Terakhir

Bagian Gerakan Stok menampilkan 10 aktivitas perpindahan barang terbaru di gudang.

Informasi yang ditampilkan meliputi:

- **Waktu dan tanggal** — Waktu terjadinya aktivitas stok.
- **Barang** — Nama barang yang mengalami pergerakan.
- **Deskripsi** — Keterangan tambahan terkait aktivitas.
- **Jumlah** — Jumlah barang yang mengalami pergerakan.
- **Pencatat** — Pengguna yang melakukan atau mencatat aktivitas.

Jenis pergerakan stok terdiri dari:

- **Barang Masuk** — Barang ditambahkan atau diterima ke dalam stok gudang.
- **Barang Keluar** — Barang dikeluarkan dari stok gudang, misalnya untuk produksi atau pengiriman.

## 5. Ringkasan

Melalui Dashboard, pengguna dapat:

- Melihat jumlah proyek aktif, PO yang belum diterima, dan barang siap kirim.
- Memantau persentase barang diterima, produksi, dan pengiriman.
- Melihat tahapan proyek serta progress produksi dan pengiriman.
- Memantau 10 gerakan stok terakhir beserta detail dan pencatatnya.