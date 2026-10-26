---
outline: deep
---

# Unit Type & BOM

Halaman **Unit Type & BOM** pada modul **Master Data** digunakan Estimator untuk mengelola tipologi bukaan dan formula set yang menghitung Bill of Materials (BOM) setiap unit. Setiap tipologi memiliki formula set aktifnya masing-masing.

## Cara Menambahkan Unit type & BOM

1. Buka menu Unit type & BOM.
   <img src="/images/super-admin/unit/u1.png" alt="" style="display: block; max-width: 100%; height: auto;">
2. Klik tombol <img src="/images/super-admin/unit/u2.png" alt="Buat Surat Jalan" style="display: inline; width: auto; height: 1.5em; vertical-align: middle; margin: 0;"> lalu akan muncul form berikut
   <img src="/images/super-admin/unit/u3.png" alt="Formulir pembuatan surat jalan" style="display: block; max-width: 100%; height: auto;">
3. Isi informasi tipologi berikut:

   | Isian | Keterangan |
   | --- | --- |
   | **Kode** | Kode untuk tipologi. |
   | **Nama** | Nama tipologi. |
   | **Kategori** | Kategori unit. |
   | **Brand** | Brand unit. |
   | **Biaya Jasa** | Biaya jasa unit; opsional. |

4. Pilih apakah unit memakai arah bukaan

5. Klik tombol <img src="/images/super-admin/unit/u4.png" alt="Buat Surat Jalan" style="display: inline; width: auto; height: 1.5em; vertical-align: middle; margin: 0;">

## Membuat Formula Set BOM

1. Buka menu Unit type & BOM.
   <img src="/images/super-admin/unit/u1.png" alt="" style="display: block; max-width: 100%; height: auto;">

2. Klik tipologi yang akan dibuatkan formula set, lalu akan tampil halaman seperti berikut
   <img src="/images/super-admin/unit/u5.png" alt="" style="display: block; max-width: 100%; height: auto;">

3. Klik tombol <img src="/images/super-admin/unit/u6.png" alt="Buat Surat Jalan" style="display: inline; width: auto; height: 1.5em; vertical-align: middle; margin: 0;">

4. Tambahkan baris BOM yang dibutuhkan oleh unit dengan klik tombol <img src="/images/super-admin/unit/u8.png" alt="Buat Surat Jalan" style="display: inline; width: auto; height: 1.5em; vertical-align: middle; margin: 0;">. Lihat gambar berikut
   <img src="/images/super-admin/unit/u7.png" alt="" style="display: block; max-width: 100%; height: auto;">

5. Untuk setiap baris, masukkan:

   | Isian | Keterangan |
   | --- | --- |
   | **Grup** | Pilih grup **Aluminium**, **Aksesoris**, **Kaca**, atau **Jasa Pemasangan**. |
   | **Item katalog** | Pilih item yang digunakan, misalnya *door window jamb*. |
   | **Part No** | Nomor urut part, misalnya 1, 2, 3, dan seterusnya. |
   | **UOM (Unit of Measure)** | Satuan/jumlah kebutuhan komponen, misalnya berapa pcs yang dibutuhkan. |
   | **Tingkat Pembulatan** | Pilih **Per Unit**, **Per Rumah**, **Per Batch**, atau **Per Proyek**. |

6. Klik tombol <img src="/images/super-admin/unit/u9.png" alt="Buat Surat Jalan" style="display: inline; width: auto; height: 1.5em; vertical-align: middle; margin: 0;">

6. Ulangi hingga seluruh komponen yang diperlukan untuk tipologi tersebut tercantum.

7. Susun Rumus untuk setiap komponen BOM yang telah dibuat dengan cara pilih baris BOM terlebih dahulu. Lalu pada form Penyusun Rumus, klik tombol <img src="/images/super-admin/unit/u11.png" alt="Buat Surat Jalan" style="display: inline; width: auto; height: 1.3em; vertical-align: middle; margin: 0;"> untuk memasukkan rumus lebar potong, tinggi potong, dan jumlah

8. Setelah semua rumus disusun, klik tombol <img src="/images/super-admin/unit/u12.png" alt="Buat Surat Jalan" style="display: inline; width: auto; height: 1.3em; vertical-align: middle; margin: 0;"> yang ada di bagian atas form 

9. Klik tombol <img src="/images/super-admin/unit/u14.png" alt="Buat Surat Jalan" style="display: inline; width: auto; height: 1.5em; vertical-align: middle; margin: 0;"> untuk menyetujui versi formula set


## Mengaktifkan Formula Set

Persetujuan versi tidak otomatis mengaktifkan formula set. Untuk mengaktifkannya:

1. Kembali ke tabel Unit Type & BOM.
2. Klik baris tipologi unit yang formula set-nya akan diaktifkan. Lalu akan muncul form seperti berikut
   <img src="/images/super-admin/unit/u15.png" alt="" style="display: block; max-width: 100%; height: auto;">
3. Klik tombol <img src="/images/super-admin/unit/u16.png" alt="Buat Surat Jalan" style="display: inline; width: auto; height: 1.5em; vertical-align: middle; margin: 0;"> untuk mengaktifkan formula set

## Cara Mengimpor BOM

1. Buka menu Unit type & BOM.
   <img src="/images/super-admin/unit/u1.png" alt="" style="display: block; max-width: 100%; height: auto;">

2. Klik tombol <img src="/images/super-admin/unit/u24.png" alt="Buat Surat Jalan" style="display: inline; width: auto; height: 1.5em; vertical-align: middle; margin: 0;">, lalu akan tampil halaman berikut
    <img src="/images/super-admin/unit/u25.png" alt="Formulir pembuatan surat jalan" style="display: block; max-width: 100%; height: auto;">

3. Upload file dalam bentuk .xlsx atau .xls

4. Selanjutnya akan masuk ke proses pratinjau seperti pada gambar berikut
    <img src="/images/super-admin/unit/u30.png" alt="Formulir pembuatan surat jalan" style="display: block; max-width: 100%; height: auto;">

5. Lanjut dengan klik tombol <img src="/images/super-admin/unit/u26.png" alt="Buat Surat Jalan" style="display: inline; width: auto; height: 1.5em; vertical-align: middle; margin: 0;">. Lalu akan muncul pop up konfirmasi seperti berikut
   <img src="/images/super-admin/unit/u28.png" alt="Formulir pembuatan surat jalan" style="display: block; max-width: 100%; height: auto;">

6. Centang kotak **Langsung aktifkan versi baru** untuk mengaktifkan versi ini

7. Klik tombol <img src="/images/super-admin/unit/u27.png" alt="Buat Surat Jalan" style="display: inline; width: auto; height: 1.5em; vertical-align: middle; margin: 0;">

BOM dan formula set telah berhasil diimpor
