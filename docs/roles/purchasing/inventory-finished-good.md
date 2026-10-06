---
outline: deep
---

# Inventory Finished Good

Halaman **Inventory Finished Good** menampilkan barang jadi hasil produksi dalam bentuk tabel, lengkap dengan jumlah yang telah diproduksi, terkirim, dan stok yang tersedia untuk setiap item.

## Tabel Stok

Setiap baris pada tabel mewakili **satu item barang jadi**. Jika tabel berisi 10 baris, berarti ada 10 item yang berbeda.

| Kolom | Keterangan | Contoh |
| --- | --- | --- |
| Proyek | Proyek yang memiliki barang jadi tersebut. | *(isi dengan contoh nama proyek)* |
| Kode gambar | Kode gambar teknis yang menjadi acuan item. | *(isi dengan contoh)* |
| Comp | Komponen terkait item tersebut. | *(isi dengan contoh)* |
| Item | Nama barang jadi. | Single swing door |
| Dimensi | Ukuran barang jadi (lebar x tinggi). | 1200 x 1500 |
| Diproduksi | Jumlah yang telah diproduksi. | *(isi dengan contoh)* |
| Terkirim | Jumlah yang telah dikirim ke tujuan. | *(isi dengan contoh)* |
| Stok | Jumlah yang tersedia dan belum dikirim. | *(isi dengan contoh)* |

> **Catatan:** Stok dihitung dari jumlah diproduksi dikurangi jumlah terkirim.

## Cara Membaca Tabel

| Jika | Artinya |
| --- | --- |
| Diproduksi sama dengan Terkirim | Seluruh barang jadi sudah dikirim, stok kosong. |
| Terkirim lebih kecil dari Diproduksi | Masih ada barang jadi di gudang yang siap dikirim. |
| Terkirim masih 0 | Belum ada pengiriman untuk item tersebut. |

## Panduan Cepat

1. Cari item yang dibutuhkan berdasarkan proyek, kode gambar, atau nama item.
2. Periksa kolom **Diproduksi**, **Terkirim**, dan **Stok** pada baris yang sesuai.
3. Gunakan item yang stoknya tersedia saat membuat surat jalan. Lihat panduan [Surat Jalan role Warehouse](/roles/warehouse/surat-jalan).
