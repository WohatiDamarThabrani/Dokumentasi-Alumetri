---
outline: deep
---

# Dashboard

Dashboard adalah halaman utama aplikasi untuk melihat kondisi proyek dan aktivitas barang secara keseluruhan.

Melalui Dashboard, pengguna dapat melihat progress proyek, proses produksi, pengiriman barang, serta aktivitas stok gudang tanpa harus membuka setiap modul secara terpisah.

Dashboard terdiri dari enam bagian utama:

1. Aktivitas Gudang
2. Input Finished Good
3. Ringkasan Informasi
4. Progress Keseluruhan
5. Proyek Aktif
6. Gerakan Stok Terakhir

## 1. Aktivitas Gudang

Pada Dashboard, pengguna dengan role Production + Warehouse dapat melakukan aktivitas yang berkaitan dengan penerimaan dan pengelolaan barang di gudang.

Pengiriman barang jadi didokumentasikan melalui halaman Surat Jalan.

### Penerimaan Barang

Pengguna Production + Warehouse dapat menerima barang atau material yang datang sesuai kebutuhan aplikasi. Barang yang diterima dapat diperuntukkan bagi:

#### Barang untuk Proyek

Barang atau material yang diterima secara khusus untuk memenuhi kebutuhan proyek yang sedang berjalan. Barang tersebut tercatat sebagai Stok Proyek.

#### Stok Gudang

Barang yang diterima untuk disimpan sebagai Stok Gudang dan dapat digunakan untuk kebutuhan berikutnya.

Penerimaan barang menambah jumlah stok sesuai dengan barang dan jumlah yang diterima.

### Transfer Sisa Stok Proyek

Pengguna Production + Warehouse dapat memindahkan sisa barang dari Stok Proyek ke Stok Gudang.

Fitur ini digunakan ketika masih ada barang tersisa setelah kebutuhan proyek terpenuhi. Barang tersebut dapat dipindahkan menjadi Stok Gudang agar dapat digunakan untuk kebutuhan lainnya.

## 2. Input Finished Good

Pada Dashboard, pengguna dengan role Production + Warehouse dapat mencatat barang yang telah selesai diproduksi (finished good).

Gunakan fitur ini setiap kali ada barang yang selesai diproduksi, agar progress produksi dan stok barang jadi selalu terbarui.

### Langkah Pencatatan

1. Buka fitur Input Finished Good pada Dashboard.
2. Pilih proyek dan batch yang terkait.
3. Pilih barang yang telah selesai diproduksi.
4. Masukkan jumlah barang yang selesai diproduksi.
5. Simpan pencatatan.

### Dampak Pencatatan

Setelah disimpan, pencatatan akan memengaruhi beberapa bagian aplikasi:

| Bagian | Dampak |
| --- | --- |
| Progress produksi (Dashboard) | Bertambah sesuai jumlah yang dicatat. |
| Barang Siap Kirim | Jumlah barang siap kirim bertambah. |
| Daftar Produksi | Pencatatan muncul pada tabel Catatan Produksi, lengkap dengan nama pencatat. |
| Inventory Finished Good | Kolom Diproduksi dan Stok bertambah. |

Barang yang sudah dicatat dapat dipilih saat membuat surat jalan.

## 3. Ringkasan Informasi

Bagian ini berada di bagian atas Dashboard dan menampilkan kartu berisi informasi penting mengenai proyek dan barang.

### Proyek Aktif

Menampilkan jumlah proyek yang masih dalam proses pengerjaan dan belum mencapai status Selesai.

### Purchase Order Belum Diterima

Menampilkan jumlah Purchase Order (PO) yang sudah dibuat, tetapi barang atau material yang dipesan belum diterima.

### Barang Siap Kirim

Menampilkan jumlah barang yang sudah selesai diproduksi dan siap dikirim ke tujuan proyek.

## 4. Progress Keseluruhan

Bagian ini menampilkan progress barang dalam proses proyek melalui tiga indikator:

### Barang Diterima

Menampilkan persentase barang yang sudah diterima dibandingkan dengan total barang yang dibutuhkan.

### Produksi Barang

Menampilkan persentase barang yang sudah selesai diproduksi dibandingkan dengan total barang yang harus diproduksi.

### Barang Dikirim

Menampilkan persentase barang yang sudah dikirim dibandingkan dengan total barang yang harus dikirim.

## 5. Proyek Aktif

Bagian ini menampilkan daftar proyek yang masih berjalan. Untuk setiap proyek, pengguna dapat melihat:

- Posisi proyek dalam tahapan pengerjaan.
- Progress produksi barang.
- Progress pengiriman barang.

### Tahapan Proyek

Setiap proyek memiliki tujuh tahapan yang menunjukkan posisinya dalam proses pengerjaan:

Persiapan → Material → Bahan Datang → Potong → Sebagian Jadi → Sebagian Kirim → Selesai

| Tahap | Keterangan |
| --- | --- |
| Persiapan | Tahap awal ketika proyek mulai dipersiapkan sebelum proses pengadaan material dan produksi dilakukan. |
| Material | Kebutuhan material untuk proyek sedang dipersiapkan atau dalam proses pengadaan. |
| Bahan Datang | Material yang dibutuhkan sudah datang dan tersedia untuk diproses. |
| Potong | Material mulai dipotong sesuai kebutuhan produksi. |
| Sebagian Jadi | Sebagian barang yang dibutuhkan untuk proyek sudah selesai diproduksi. |
| Sebagian Kirim | Sebagian barang yang sudah selesai diproduksi telah dikirim ke tujuan proyek. |
| Selesai | Seluruh proses produksi dan pengiriman barang untuk proyek telah selesai. |

### Progress Produksi dan Pengiriman

Dashboard menampilkan progress produksi dan pengiriman untuk setiap proyek:

- **Produksi** — Persentase barang yang sudah selesai diproduksi.
- **Pengiriman** — Persentase barang yang sudah dikirim ke tujuan proyek.

Sebagai contoh, sebuah proyek dapat berada pada tahap Sebagian Jadi dengan progress produksi 70% dan progress pengiriman 30%.

## 6. Gerakan Stok Terakhir

Bagian ini menampilkan 10 aktivitas perpindahan barang terbaru yang terjadi di gudang.

| Informasi | Keterangan |
| --- | --- |
| Waktu dan tanggal | Waktu dan tanggal ketika aktivitas stok dilakukan. |
| Barang | Nama barang yang mengalami pergerakan stok. |
| Deskripsi | Keterangan mengenai aktivitas yang dilakukan terhadap barang. |
| Jumlah | Jumlah barang yang masuk atau keluar dari gudang. |
| Pencatat | Nama pengguna yang mencatat aktivitas pergerakan stok. |

Terdapat dua jenis pergerakan stok:

### Barang Masuk

Menunjukkan barang yang ditambahkan atau diterima ke dalam Stok Gudang.

### Barang Keluar

Menunjukkan barang yang dikeluarkan dari Stok Gudang, misalnya untuk kebutuhan produksi atau pengiriman.

## Istilah Stok

Dalam pengelolaan barang, terdapat dua jenis stok:

### Stok Proyek

Barang yang dialokasikan secara khusus untuk memenuhi kebutuhan proyek tertentu.

### Stok Gudang

Barang yang tersedia sebagai stok umum dan dapat digunakan untuk kebutuhan proyek atau kebutuhan lainnya.

## Ringkasan

Dashboard memberikan gambaran umum mengenai kondisi proyek, progress produksi, pengiriman, dan aktivitas stok dalam satu halaman. Pengguna dapat menggunakannya untuk:

- Melakukan penerimaan barang untuk kebutuhan proyek atau Stok Gudang.
- Memindahkan sisa barang dari Stok Proyek ke Stok Gudang.
- Mencatat barang yang telah selesai diproduksi (finished good).
- Melihat jumlah proyek yang masih aktif.
- Melihat jumlah PO yang belum diterima.
- Mengetahui jumlah barang yang siap dikirim.
- Memantau persentase barang yang sudah diterima.
- Memantau progress produksi dan pengiriman barang.
- Mengetahui posisi setiap proyek dalam tahapan pengerjaan.
- Melihat progress produksi dan pengiriman setiap proyek.
- Memantau 10 aktivitas stok terbaru dan mengetahui siapa pencatatnya.