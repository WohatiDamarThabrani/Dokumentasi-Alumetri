---
outline: deep
---

# Inventory Finished Good

Halaman **Inventory Finished Good** menampilkan barang jadi hasil produksi, termasuk jumlah yang telah diproduksi, terkirim, dan stok yang tersedia untuk setiap item.

## Tabel Stok

Setiap baris pada tabel mewakili satu item barang jadi.

| Kolom | Keterangan |
| --- | --- |
| **Proyek** | Proyek yang memiliki barang jadi tersebut. |
| **Kode gambar** | Kode gambar teknis yang menjadi acuan item. |
| **Comp** | Komponen terkait item tersebut. |
| **Item** | Nama barang jadi. |
| **Dimensi** | Ukuran barang jadi (lebar x tinggi). |
| **Diproduksi** | Jumlah yang telah diproduksi. |
| **Terkirim** | Jumlah yang telah dikirim ke tujuan. |
| **Stok** | Jumlah yang tersedia dan belum dikirim. |

Stok dihitung dari jumlah diproduksi dikurangi jumlah terkirim.

## Cara Membaca Tabel

| Jika | Artinya |
| --- | --- |
| Diproduksi sama dengan Terkirim | Seluruh barang jadi sudah dikirim, stok kosong. |
| Terkirim lebih kecil dari Diproduksi | Masih ada barang jadi di gudang yang siap dikirim. |
| Terkirim masih 0 | Belum ada pengiriman untuk item tersebut. |

Management dapat meninjau jumlah produksi, pengiriman, dan stok yang tersedia tanpa melakukan perubahan.
