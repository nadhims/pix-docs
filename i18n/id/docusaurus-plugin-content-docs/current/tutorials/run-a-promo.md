---
sidebar_position: 9
title: Jalankan Promo
description: Jalankan happy hour, minggu pembukaan atau kode promo di booth kamu, dengan potongan nominal atau persen, harga promo atau Pay 1 get 1, di hari, jam dan booth yang kamu pilih.
tags: [tutorials, payments, promo, marketing-studio, discounts]
---

# Jalankan Promo

Di tutorial ini kamu pasang promo yang otomatis nurunin harga di booth kamu pada jam sepi, atau waktu pelanggan ngetik kode, lalu lihat promonya muncul di layar Start dan Payment booth. Butuh sekitar 10 menit.

Promo gak pernah ngubah harga booth kamu: dia cuma "menumpang" di atas harga itu selama hari, jam dan booth yang kamu pilih, lalu berhenti sendiri.

## Kapan Dipakai {#when-to-use-it}

- **Booth mall yang sepi di siang hari.** **Happy Hour** potongan 30% Senin sampai Kamis, jam 13.00 sampai 16.00, ngisi jam-jam yang biasanya kosong.
- **Minggu pembukaan di lokasi baru.** **Promo price** selama dua minggu pertama bikin orang mau nyobain, dengan **Limit** biar biayanya gak lebih dari rencana.
- **Kampanye bareng partner.** Kafe atau radio bagi-bagi **satu kode** (atau banyak kode sekali pakai) dan kamu bisa lihat berapa pelanggan yang datang dari mereka.
- **Rombongan teman.** **Pay 1 get 1** ngasih sesi kedua gratis setelah sesi berbayar: dua cetakan seharga satu, dan antrean yang lebih panjang malah narik orang lain datang.

Mau ngasih sesi gratis total (tes, crew, VIP)? Pakai staff pass di [Jual dan Bagikan Voucher](./vouchers.md). Lagi jalanin event yang dibayar klien? Promo gak pernah jalan selama event.

## Sebelum Mulai {#before-you-start}

- **Pix Pro di setiap komputer booth** yang mau dipasangi promo. Promo gak pernah jalan di booth Pix Starter; halaman Promo ngasih tahu kalau ada booth kamu yang masih Starter.
- **Pixture Photobooth 1.2.30 atau lebih baru** di booth. Update dari menu operator.
- **Harga di tab Pricing booth**, dengan **Payment on this booth** nyala. Promo nurunin harga, jadi booth gratis gak punya apa-apa untuk diturunin. Lihat [Atur Harga, Paket dan Cetak Tambahan](./prices-and-packages.md).
- Payment gateway yang **Active**, untuk pelanggan yang masih bayar sebagian.

## Persiapan {#prepare}

- **Hitung uangnya duluan.** Hitung modal satu sesi (kertas, tinta, bagi hasil sewa) dan jangan promo di bawah itu kecuali memang strategi pembukaan. Contoh: sesi single Rp 35.000, potongan 30% jadi Rp 24.500.
- **Satu tujuan per promo:** ngisi jam sepi (otomatis, per jam), ngasih hadiah ke audiens partner (kode), atau naikin belanja per kunjungan (Pay 1 get 1).
- **Catat tanggal dan jamnya dalam waktu lokal booth.** Booth di Bali jalan pakai waktu Bali walaupun akun kamu diatur ke Jakarta.

## Langkah 1: Buka Promo {#step-1-open-promo}

1. Klik **Marketing Studio** di sidebar, lalu tab **Promo**.
2. Klik **+ New promo**. Editor terbuka dengan **Booth preview · Payment** di kanan yang nampilin apa yang dilihat pelanggan.

![Tab Promo di Marketing Studio dengan daftar promo dan + New promo ditandai](/img/docs/steps/tutorials-run-a-promo--promo-list.webp)

## Langkah 2: Pilih Jenis Promo {#step-2-choose-the-deal}

1. **Name**: yang dilihat pelanggan, jadi bikin singkat (misalnya Happy Hour).
2. **Promo type**:
   - **% off**: potongan persen untuk semua paket.
   - **Amount off**: potongan nominal tetap, dalam mata uang booth.
   - **Promo price**: harga **Single**, **Double** dan **Group** kamu sendiri. Kosongkan Double atau Group untuk tetap pakai harga booth.
   - **Pay 1 get 1 (free extra session)**: setelah sesi berbayar, pelanggan dapat satu sesi lagi gratis.

Kalau promonya bikin sesi jadi gratis di salah satu booth, editor ngasih peringatan "This makes the session free at" booth itu. Kecilkan potongannya, kecuali gratis memang yang kamu mau.

![Editor New promo dengan Name, Promo type dan Booth preview · Payment ditandai](/img/docs/steps/tutorials-run-a-promo--promo-editor-deal.webp)

## Langkah 3: Pilih Cara Berlakunya {#step-3-choose-how-it-applies}

1. **Method**: **Automatic** (berlaku sendiri selama aktif) atau **With a code** (cuma pelanggan yang ngetik kode yang dapat).
2. Untuk **With a code**, pilih **Codes**:
   - **One code** yang diketik semua orang (maksimal 24 karakter, misalnya JUNI30).
   - **Many single-use**: isi **How many** (maksimal 1000) dan **Prefix** kalau mau, lalu klik **Add codes**. **Copy all** menyalin daftarnya untuk partner kamu.

Pelanggan ngetik kode promo di kotak voucher yang sama di layar Payment, seperti voucher biasa. Kodenya juga muncul di halaman **Vouchers** di tab **From promos**.

## Langkah 4: Atur Kapan dan di Mana {#step-4-set-when-and-where}

1. **Days & hours**: centang harinya dan atur jam untuk masing-masing, atau **All day**. Jamnya pakai **Booth's local time**.
2. **Dates**: tanggal mulai dan selesai. Kosong artinya mulai hari ini dan gak ada akhir.
3. **Booths**: **All booths**, grup Multi-Booth, atau booth tertentu.
4. **Limit**: berapa kali pemakaian **per day** dan **in total**. Kosong artinya **No limit**.
5. **Start screen**: nyalakan **Show the promo to people walking past** untuk nampilin baris seperti "Happy Hour −30% · ends in 01:42" di layar Start booth.
6. Klik **Save promo**.

![Editor New promo dengan Days & hours, Dates, Booths, Limit, Start screen dan Save promo ditandai](/img/docs/steps/tutorials-run-a-promo--promo-editor-when.webp)

## Langkah 5: Minta Kontak Setelah Pay 1 get 1 (Opsional) {#step-5-ask-for-contacts-after-pay-1-get-1-optional}

Dengan promo Pay 1 get 1, booth bisa minta email atau nomor HP pelanggan sebelum sesi gratisnya mulai, jadi kamu bisa kirim penawaran nanti.

1. Buka **Booths**, klik **Configure** di booth, lalu tab **Pricing**.
2. Di **Ask for contact after Pay 1 get 1**, pilih **Email**, **Phone** atau **Email + phone** (atau **Don't ask**). Langsung tersimpan.

Kontaknya masuk ke **Marketing Studio > Audience**.

## Cek Hasilnya {#check-it-worked}

- Promonya muncul di daftar Promo di **Live now** (atau **Scheduled** sampai mulai).
- Dalam sekitar satu menit, layar Payment booth nampilin harga promo dengan harga lama dicoret, plus baris di layar Start kalau kamu nyalakan.
- Untuk kode: ketik di layar Payment; harganya turun dan booth bilang promonya dipakai.
- Untuk Pay 1 get 1: setelah sesi berbayar, layar Sharing bilang "You got 1 free session!" dengan tombol **Start free session**.

![Layar Payment dengan badge promo dan harga coret di kartu paket ditandai](/img/docs/steps/tutorials-run-a-promo--promo-payment.webp)

## Tips {#tips}

- **Singkat dan spesifik lebih ampuh daripada besar.** "Hari kerja 13.00 sampai 16.00, potongan 30%" ngisi jam sepi tanpa ngajarin pelanggan nunggu diskon di akhir pekan.
- **Selalu pasang Limit di promo pembukaan.** Biayanya jadi terkunci kalau promonya lebih laris dari dugaan.
- **Satu diskon per sesi.** Kalau beberapa promo otomatis jalan bareng, booth pakai yang harga Single-nya paling rendah; kode yang gak lebih murah dari promo yang jalan nampilin "Your ... price is already better." **Pay 1 get 1** tetap bisa ditambahkan di atas diskon.
- **Pause, jangan hapus** kalau promonya mau dipakai lagi bulan depan: buka menu di barisnya, klik **Pause**, lalu **Resume** nanti.
- **Lihat hasilnya** di **Marketing Studio > Performance**: **Promo uses**, **Pay 1 get 1 granted** dan **Pay 1 get 1 used**.

## Kalau Ada Masalah {#troubleshooting}

| Masalah | Kenapa | Solusinya |
|---|---|---|
| Promo gak muncul di satu booth | Booth-nya Pix Starter, ada event yang jalan di situ, di luar hari, jam atau tanggal promo, atau aplikasi booth lebih lama dari 1.2.30 | Pastikan komputer booth pakai Pix Pro, akhiri event-nya, cek jadwal dalam waktu lokal booth, update aplikasi booth |
| "Promos run on Pix Pro booths · 1 of yours is on Starter" | Salah satu booth kamu jalan di Pix Starter | Pasang Pix Pro di komputer itu, atau keluarkan booth itu dari promo |
| Kodenya ditolak | Promo di-pause atau sudah selesai, **Limit** habis, kode sekali pakai sudah terpakai, atau kodenya untuk booth lain | Cek baris promonya di halaman Promo; tambah kode atau naikkan limit |
| "Your ... price is already better." | Promo otomatis sudah ngasih harga lebih rendah | Gak perlu diapa-apain: pelanggan dapat harga yang lebih murah |
| Promo **Amount off** atau **Promo price** gak jalan di booth negara lain | Dua jenis itu diatur dalam satu mata uang dan cuma jalan di booth dengan mata uang itu | Bikin promo terpisah untuk booth tiap mata uang, atau pakai **% off** yang berlaku di mata uang apa pun |
| Gak ada sesi gratis setelah sesi berbayar dengan Pay 1 get 1 | Sesinya gak dibayar (staff pass, booth gratis), atau memang sudah sesi gratis | Pay 1 get 1 cuma muncul setelah sesi yang dibayar di booth |

## Terkait {#related}

- [Atur Harga, Paket dan Cetak Tambahan](./prices-and-packages.md)
- [Jual dan Bagikan Voucher](./vouchers.md)
- [Terima Pembayaran di Booth](./accept-payments.md)
- [Marketing Studio reference](../dashboard/marketing-studio.md)
