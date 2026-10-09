---
outline: deep
---

# Unit Type & BOM

Halaman **Unit Type & BOM** pada modul **Master Data** digunakan untuk mengelola tipologi bukaan dan formula set yang menghitung Bill of Materials (BOM) setiap unit. Setiap tipologi memiliki formula set aktifnya masing-masing.

## Menambahkan Tipologi Unit

1. Buka halaman **Unit Type & BOM** dari modul **Master Data**.
2. Klik tombol tambah unit di bagian atas halaman.
3. Isi informasi tipologi berikut:

   | Isian | Keterangan |
   | --- | --- |
   | **Kode Unit** | Kode untuk tipologi unit. |
   | **Nama Unit** | Nama tipologi unit. |
   | **Kategori** | Kategori unit. |
   | **Brand** | Brand unit. |
   | **Lebar Maksimal** | Batas lebar unit; opsional. |
   | **Tinggi Maksimal** | Batas tinggi unit; opsional. |
   | **Biaya Jasa** | Biaya jasa unit; opsional. |

4. Simpan tipologi unit.

## Membuat Formula Set BOM

Formula set dapat disusun langsung dari kolom **Aksi** pada baris tipologi unit, atau BOM dapat diimpor menggunakan file Excel.

### Menambahkan Baris BOM

1. Pada tabel, cari tipologi yang akan dibuatkan formula set, lalu pilih tindakan untuk membuat atau mengelola formula set dari kolom **Aksi**.
2. Tambahkan baris BOM/komponen untuk setiap item yang dibutuhkan oleh unit.
3. Untuk setiap baris, tentukan:

   | Isian | Keterangan |
   | --- | --- |
   | **Grup** | Pilih grup **Aluminium**, **Aksesoris**, **Kaca**, atau **Jasa Pemasangan**. |
   | **Item/Komponen** | Pilih item yang digunakan, misalnya *door window jamb*. |
   | **Part No** | Nomor urut part, misalnya 1, 2, 3, dan seterusnya. |
   | **UOM (Unit of Measure)** | Satuan/jumlah kebutuhan komponen, misalnya berapa pcs yang dibutuhkan. |
   | **Tingkat Pembulatan** | Pilih **Per Unit**, **Per Rumah**, **Per Batch**, atau **Per Proyek**. |

4. Ulangi hingga seluruh komponen yang diperlukan untuk tipologi tersebut tercantum.

### Menyusun Rumus Komponen

Susun rumus untuk setiap komponen BOM menggunakan informasi seperti **Keterangan Penggunaan**, **Lebar Potong**, **Tinggi Potong**, dan **Jumlah**. Setelah semua baris dan rumus selesai, klik **Setujui Versi** untuk menyetujui versi formula set tersebut.

## Mengaktifkan Formula Set

Persetujuan versi tidak otomatis mengaktifkan formula set. Untuk mengaktifkannya:

1. Kembali ke tabel Unit Type & BOM.
2. Klik baris tipologi unit yang formula set-nya akan diaktifkan.
3. Pilih tindakan untuk mengaktifkan formula set.

Setiap tipologi berdiri sendiri dan menggunakan formula set aktifnya masing-masing.

## Mengimpor BOM

Untuk membuat BOM melalui file, siapkan file Excel yang berisi BOM untuk tipologi unit terkait, lalu gunakan tindakan impor yang tersedia pada halaman. Setelah impor, periksa komponen dan rumusnya. Setujui versi, kemudian aktifkan formula set secara terpisah dari baris tipologi unit.

## Mengimpor dan Mengekspor Tipologi

Gunakan tombol **Impor** di bagian atas halaman untuk mengunggah data tipologi dari file yang didukung, lalu periksa hasilnya pada tabel. Gunakan tombol **Export** untuk mengunduh daftar tipologi dalam format Excel.

## Menghapus, Memulihkan, atau Menghapus Permanen Tipologi

Pengelolaan data yang dihapus mengikuti alur pada [halaman Brand](/roles/super-admin/brand):

1. Pada kolom **Aksi**, klik ikon tempat sampah pada baris tipologi yang akan dihapus dan konfirmasikan jika diminta. Tipologi yang dihapus akan masuk ke kotak sampah.
2. Klik **Kotak Sampah** di bagian atas halaman.
3. Pilih tipologi yang akan dikelola, lalu pilih **Pulihkan** untuk mengembalikannya atau **Hapus Permanen** untuk menghapusnya secara permanen. Konfirmasikan tindakan jika diminta.
