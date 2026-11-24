---
sidebar_position: 52
title: Atur Grup Multi-Booth
description: Kelompokkan booth di satu venue supaya template, desain layar dan harganya sama, jual sesi dari satu kasir, dan jalankan satu antrean.
tags: [tutorials, multi-booth, cashier, kiosk, management]
---

# Atur Grup Multi-Booth

Di tutorial ini kamu mengelompokkan booth di satu venue jadi Multi-Booth, kasih satu set template, satu desain layar dan satu daftar harga, pilih apakah pelanggan bayar di tiap booth atau di kasir pusat (central cashier), lalu pairing komputer ke tiap booth. Siapkan sekitar 20 menit untuk dashboard, plus beberapa menit per komputer di venue.

## Kapan Dipakai {#when-to-use-it}

- **Studio multi-booth.** Empat booth di satu toko sebaiknya tampil dan berharga sama. Atur sekali untuk grup, bukan empat kali.
- **Mall dengan kasir.** Pelanggan bayar paket di satu kasir (mungkin plus gantungan kunci atau magnet), dapat kode, dan pakai di booth mana saja yang kosong.
- **Antrean.** Antrean ada di dalam grup Multi-Booth, jadi kamu butuh grup bahkan untuk satu booth yang ramai. Lihat [Jalankan Antrean (Queue Line)](./queue-line.md).
- **Banyak booth di satu kota.** Kelompokkan booth per venue, dan pakai **Region** untuk memfilter dashboard per area.

Gak perlu untuk satu booth yang tampilan dan harganya sendiri dan gak pakai antrean: booth tunggal jalan sendiri.

## Sebelum Mulai {#before-you-start}

- **Satu komputer per booth.** Satu booth di-pairing ke satu komputer, dan satu komputer ke satu booth.
- **Lisensi per komputer.** Pix Pro dihitung per komputer: Pix Starter cuma jalan di satu komputer, jadi grup dua booth atau lebih butuh Pix Pro atau Event Pass di tiap komputer tambahan. Lihat [Paket & Harga](../pricing/plans.md).
- **Pixture Photobooth 1.1.102 atau lebih baru** di booth kalau kamu jual kode di kasir pusat.
- **Template dan desain layar** sudah siap di Pix Design, dan payment gateway di **Settings > Payment Gateway** kalau pelanggan bayar di layar atau online.

## Persiapan {#prepare}

- **Kasih nama sesuai posisi.** Pixture menamai booth sesuai nama grup ("City Walk Studio 1", "City Walk Studio 2"). Ganti nama sesuai tempatnya ("Hall A kiri") kalau crew perlu membedakannya, dan tempel namanya di tiap booth.
- **Tentukan cara pelanggan bayar** sebelum atur harga: **Pay at the booth** (tiap booth nampilin layar Payment sendiri) atau **Central cashier** (satu kasir jual kode yang jalan di semua booth).
- **Untuk kasir pusat, daftar produkmu**: harganya, berapa sesi foto yang didapat, dan barang yang diserahkan di kasir (magnet, gantungan kunci).
- **Labeli komputernya** sebelum dibawa ke venue, biar komputer yang benar ter-pairing ke booth yang benar.

## Langkah 1: Bikin Grupnya {#step-1-create-the-group}

1. Buka **Booths** dan klik **+ New Booth**.
2. Pindah ke tab **Multi-Booth**.
3. Ketik **Name** grup (nama venue, misalnya "City Walk Studio").
4. Atur **How many photo booths?** (1 sampai 20). Tiap booth dinamai otomatis.
5. Klik **Create**.

![Jendela Create Booth dengan + New Booth, tab Multi-Booth, Name, How many photo booths? dan Create ditandai](/img/docs/steps/tutorials-multi-booth-group--create-multibooth.webp)

Booth baru mulai di Pix Starter; komputernya kamu upgrade di **Computers**. Untuk memasukkan booth yang sudah ada ke grup, buka grupnya dan klik **+ Add booths**, lalu centang booth-nya. **Rename** mengganti nama grup.

## Langkah 2: Kenali Isi Grup {#step-2-find-your-way-around-the-group}

Buka grup dari daftar Booths. Ada enam tab:

1. **Photo Booths**: daftar booth, status, paket dan harga sesinya. **Configure** membuka satu booth; panah di sebelahnya berisi **Pairing code**, **Apply pricing to all booths** dan **Remove from group**.
2. **Templates**: satu set template untuk semua booth.
3. **UI Project**: satu desain layar untuk semua booth.
4. **Queue**: antrean dan queue display (Pix Pro).
5. **Cashier**: cara pelanggan bayar, harga, dan apa yang dijual kasir pusat.
6. **Settings**: nama grup dan **Delete Multi-Booth**.

![Halaman grup Multi-Booth dengan tab Photo Booths, Templates, UI Project, Queue, Cashier dan Settings](/img/docs/steps/guides-multi-booth-setup--booth-group.webp)

## Langkah 3: Samakan Template dan Desain di Semua Booth {#step-3-give-every-booth-the-same-templates-and-design}

1. Di **Templates**, klik **Manage Templates**, centang template-nya dan simpan. Setelah disimpan, semua booth dapat set ini persis; template yang tadinya cuma ada di sebagian booth ikut diganti.
2. Di **UI Project**, pilih desain layar di daftar dan klik **Save for all booths**. Biarkan default untuk pakai layar standar Pixture.

![Tab UI Project Multi-Booth dengan pilihan desain dan Save for all booths ditandai](/img/docs/steps/tutorials-multi-booth-group--group-ui-project.webp)

## Langkah 4: Pilih Cara Pelanggan Bayar {#step-4-choose-how-customers-pay}

1. Buka **Cashier**. Di **How guests pay**, pilih salah satu lalu klik **Save**:
   - **Pay at the booth**: "Guests pay on the kiosk with the package pricing below."
   - **Central cashier**: "Sell custom products at the counter and online; codes work at every booth here."
2. **Dengan Pay at the booth**, atur **Pricing** di bawahnya (**Price & packages**, **Time**, **Extra prints**, **Tax & fees**) dan klik **Save changes**. Menyimpan di sini menulis harga yang sama ke semua booth di grup. Kalau harga booth-booth tadinya beda, muncul peringatan "Booths currently have different pricing" plus booth mana yang jadi sumber nilainya. Kalau mau menyalin harga satu booth ke yang lain, pakai **Apply pricing to all booths** di panah booth itu di **Photo Booths**.
3. **Dengan Central cashier**, klik **Add product** dan isi **Name**, **Description**, **Price** dan **Photo** (opsional). Di **Booth sessions** pilih **Single** (1 sesi), **Double** (2), **Group** (4) atau **No booth sessions** untuk merchandise saja, tambahkan **Extra sessions** kalau mau, dan isi **Items handed over at the counter**. Simpan.
4. Di **Sell sessions online** (atau **Sell products online** kalau pakai kasir pusat), **Copy** link-nya atau cetak QR-nya. Pelanggan membukanya, bayar, dan dapat kode.

![Tab Cashier dengan Central cashier dipilih, dua produk di tabel Products dan Add product ditandai](/img/docs/steps/tutorials-multi-booth-group--group-cashier.webp)

Tiap penjualan kasir pusat ngasih kode 8 karakter (tampil sebagai empat karakter, tanda strip, dan empat lagi) yang jalan di booth mana saja di grup. Booth membuka layar Payment langsung di langkah kode. Kode berlaku sampai akhir hari setelah penjualan, menurut jam lokal booth (zona waktu booth itu sendiri, atau zona waktu akun kamu kalau booth belum punya), di booth dengan Pixture Photobooth 1.2.53 atau lebih baru. Booth yang lebih lama berhenti di akhir hari itu menurut waktu UTC. Email dan daftar **Tickets** nampilin hari terakhir kode bisa dipakai, sebagai "Valid until".

## Langkah 5: Pairing Satu Komputer per Booth {#step-5-pair-one-computer-per-booth}

1. Di **Photo Booths**, buka panah booth dan pilih **Pairing code** (atau **Configure**, lalu tab **Computer**).
2. Klik **Generate code** dan ketik kodenya di aplikasi Pixture Photobooth di komputer booth itu.
3. Ulangi untuk tiap booth. Status tiap baris berubah dari **Not paired** begitu komputernya masuk.

![Tab Computer booth dengan tab Computer dan Generate code ditandai](/img/docs/steps/guides-multi-booth-setup--booth-device-tab-unpaired.webp)

Di tiap komputer, cek paketnya di menu operator: harusnya Pix Pro atau Event Pass. Komputer di luar jatah paket kamu diblokir: tambah komputer di **Computers > Add computer**, atau pakai Event Pass. Lihat [Tambah Komputer Kedua atau Pindahkan Pix Pro](./add-or-move-a-computer.md).

## Langkah 6: Tambah Region Kalau Venue-nya Banyak (Opsional) {#step-6-add-regions-when-you-run-many-venues-optional}

1. Buka satu booth dan masuk ke **Settings > Booth Info**.
2. Di **Region**, klik **+ New**, beri nama di **Create Region**, lalu **Save Changes**.

Daftar Booths, Dashboard dan Health bisa difilter per region lewat **All Regions**.

## Cek Hasilnya {#check-it-worked}

- Tab **Photo Booths** nampilin semua booth dengan komputer yang sudah ter-pairing dan harga sesi yang sama.
- Semua booth nampilin desain layar dan set template yang sama di sesi berikutnya.
- Kalau pakai kasir pusat, jual satu produk tes dari link shop, ketik kodenya di booth mana saja di grup, dan sesinya mulai.

## Tips {#tips}

- **Sempurnakan satu booth dulu,** lalu salin harganya pakai **Apply pricing to all booths** dan simpan template serta desainnya untuk grup.
- **Satu booth masih bisa beda.** **Configure > Pricing** milik booth tetap bisa diubah untuk pengecualian, sampai kamu simpan lagi harga grup.
- **Jual merchandise di kasir juga.** Produk dengan **No booth sessions** dan barang seperti magnet jadi penjualan kasir biasa.
- **Satu internet per venue cukup.** Booth di satu venue boleh berbagi koneksi; tiap venue butuh koneksinya sendiri.
- **Menghapus grup gak pernah menghapus booth.** **Delete Multi-Booth** cuma memisahkan booth-nya, dan ditolak selama ada komputer booth di grup itu yang pakai Pix Pro.

## Kalau Ada Masalah {#troubleshooting}

| Masalah | Kenapa | Solusinya |
|---|---|---|
| Kode kasir ditolak di booth | Aplikasi booth lebih lama dari 1.1.102, atau kodenya dari grup lain, atau sudah kedaluwarsa | Update aplikasinya; cek kode dijual untuk grup ini dan belum kedaluwarsa |
| "Session codes from this counter need Pixture Photobooth 1.1.102 or newer" di tab Cashier | Belum ada booth di grup yang aplikasinya cukup baru | Update booth-nya; barang fisik sudah bisa dijual sekarang |
| Satu booth nampilin harga yang beda | Tab Pricing booth itu diubah setelah harga grup disimpan | Simpan lagi harga grup, atau **Apply pricing to all booths** dari booth yang benar |
| **+ Add booths** bilang "Every active booth is already in a group" | Semua booth sudah masuk grup | Keluarkan booth dari grup lainnya dulu, atau bikin booth baru |
| **Delete Multi-Booth** ditolak | Ada komputer booth di grup yang pakai Pix Pro | Unlink atau pindahkan komputer itu dulu, atau pertahankan grupnya |
| Komputer diblokir setelah pairing | Melebihi jumlah komputer yang ditanggung paket kamu | Tambah komputer di **Computers > Add computer**, atau pakai Event Pass |

## Terkait {#related}

- [Panduan Multi-Booth Setup](../guides/multi-booth-setup.md)
- [Jalankan Antrean (Queue Line)](./queue-line.md)
- [Atur Harga, Paket dan Cetak Tambahan](./prices-and-packages.md)
- [Tambah Komputer Kedua atau Pindahkan Pix Pro](./add-or-move-a-computer.md)
- [Booth Management](../dashboard/booth-management.md)
