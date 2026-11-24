---
sidebar_position: 7
title: Atur Harga, Paket dan Cetak Tambahan
description: Atur harga sesi di satu booth, jual paket Double dan Group serta sesi tambahan, pasang harga cetak tambahan, harga per mode, dan pajak serta biaya, dengan preview yang nunjukin apa yang dilihat pelanggan.
tags: [tutorials, payments, pricing, packages, tax]
---

# Atur Harga, Paket dan Cetak Tambahan

Di tutorial ini kamu atur harga sesi booth, tambah paket untuk pasangan dan rombongan, jual cetak tambahan setelah foto, dan tambah pajak serta biaya, sementara preview nunjukin layar payment booth persis seperti yang dilihat pelanggan. Butuh sekitar 15 menit per booth.

## Kapan Dipakai {#when-to-use-it}

- **Booth self-service di mall.** Satu harga yang jelas per sesi, plus paket **Double** dan **Group** biar teman-teman yang datang bareng belanja lebih banyak sekaligus.
- **Studio multi-booth.** Setiap booth punya tab Pricing sendiri, jadi booth bertema bisa lebih mahal dari booth biasa. Grup Multi-Booth punya tab yang sama di halaman grupnya, berlaku untuk semua booth di grup.
- **Photobox pop-up di festival.** Jual **Extra prints** di layar Sharing: pelanggan yang suka hasilnya bayar cetak tambahan buat temannya, saat itu juga.
- **Bisnis yang wajib nampilin pajak.** Isi tarif dan label pajak, lalu pilih apakah pajaknya ditambahkan atau sudah termasuk di harga.

Gak perlu untuk event yang dibayar flat oleh klien: matikan **Payment on this booth** (atau jalankan booth di Event yang gratis untuk tamu) dan gak ada yang lihat harga.

## Sebelum Mulai {#before-you-start}

- **Pix Pro di komputer booth.** Di Pix Starter, booth gak pernah nampilin layar Payment, jadi harga gak dipakai.
- **Payment gateway yang tersambung dan Active**, yang bisa narik mata uang booth. Lihat [Bikin Payment Gateway](./create-a-payment-gateway.md).
- **Mata uang booth sudah diatur** di tab **Settings** sebelum kamu isi harga.
- Akses owner atau admin di dashboard.

## Persiapan {#prepare}

- **Hitung harga paket duluan.** Paket harus lebih murah per sesi daripada beli satuan, kalau gak gak ada yang milih. Contoh di Indonesia: Single Rp 35.000, Double Rp 60.000 (Rp 30.000 per sesi), Group isi 4 Rp 100.000 (Rp 25.000 per sesi).
- **Hitung cetakan sebagai lembar kertas.** Printer ngitung lembar. Satu lembar 4x6 yang dipotong jadi dua strip 2x6 itu satu lembar buat printer dan dua cetakan buat pelanggan. Atur **Print format** ke **2 inch cut** dan booth nampilin 2 cetakan per lembar; angka yang kamu ketik tetap jumlah lembar.
- **Tahu modal kertas kamu** sebelum ngasih harga **Extra prints**: satu cetakan tambahan itu satu lembar lagi, jadi harganya harus nutup kertas dan masih ada untung.
- **Pakai kotak koin atau card reader pulsa?** Setiap harga harus kelipatan nilai satu pulsa (lihat [Terima Bayaran Kartu, Koin dan Tunai](./connect-a-coin-or-card-reader.md)), dan reader harga tetap gak bisa narik paket.

## Langkah 1: Buka Tab Pricing Booth {#step-1-open-the-booths-pricing-tab}

1. Klik **Booths** di sidebar, lalu **Configure** di booth-nya.
2. Klik tab **Pricing**. Sisi kiri adalah preview langsung layar payment booth; sisi kanan berisi setelannya.

![Halaman booth dengan Booths di sidebar dan tab Pricing ditandai](/img/docs/steps/tutorials-prices-and-packages--pricing-tab.webp)

## Langkah 2: Atur Harga dan Paket {#step-2-set-the-price-and-the-packages}

1. **Payment on this booth**: nyala. Kalau mati, setiap sesi gratis dan booth melewati layar Payment; harga kamu tetap disimpan.
2. Buka sub-tab **Price & packages**.
3. **Session price**: harga satu sesi. Harus lebih dari 0.
4. **Print format**: **Standard** (1 cetakan per lembar), **2 inch cut** (2 cetakan per lembar) atau **Triple strip** (3 cetakan per lembar). Ini cuma ngubah jumlah cetakan yang dibaca pelanggan; proses cetaknya sendiri sama.
5. **Prints included · Single**: berapa lembar yang dicetak sesi Single, 1 sampai 20. Kosongkan untuk pakai jumlah copy default printer.
6. **Double session price**: nyalakan dan isi harga untuk 2 sesi penuh. **Prints included**-nya adalah total untuk kedua sesi, minimal 2.
7. **Group session price**: nyalakan untuk 4 sesi penuh. **Prints included**-nya minimal 4.
8. **Additional session price**: nyalakan untuk nampilin stepper **Additional sessions**, jadi pelanggan bisa nambah sesi dengan harga ini per sesi.
9. Klik **Save changes**.

![Tab Pricing dengan Payment on this booth, sub-tab Price & packages, Session price, Print format, Prints included, Double, Group, Additional session price dan Save changes ditandai](/img/docs/steps/tutorials-prices-and-packages--packages.webp)

Begitu ada paket yang nyala, catatan biru ngingetin bahwa paket butuh reader yang bisa narik nominal berubah-ubah. Itu cuma berlaku untuk kotak koin dan card reader pulsa; QR dan Stripe bisa narik nominal berapa pun.

## Langkah 3: Harga per Mode (Opsional) {#step-3-price-each-mode-optional}

Kalau desain layar Pix Design booth punya dua mode atau lebih (misalnya Photo dan AI), tabel **Price per mode** muncul di bawah paket di **Price & packages**.

1. Isi harga **Single** (dan, kalau mode itu jual, **Double** dan **Group**) untuk tiap mode. Beberapa mode cuma **Single only**.
2. Kosongkan kotak untuk pakai harga booth sendiri untuk paket itu.
3. Klik **Save changes**.

<!-- SHOT-NEEDED: dashboard: Pricing tab, Price & packages, the Price per mode grid for a booth whose design has two or more modes -->

## Langkah 4: Atur Berapa Lama Pelanggan Bisa Bayar {#step-4-set-how-long-customers-have-to-pay}

1. Buka sub-tab **Time**.
2. Atur **Payment timeout**, 30 sampai 1800 detik: berapa lama booth nunggu sesi yang belum dibayar sebelum membatalkannya. 300 detik (5 menit) cocok untuk kebanyakan pembayaran QR.

![Tab Pricing di sub-tab Time dengan Time dan Payment timeout ditandai](/img/docs/steps/tutorials-prices-and-packages--time.webp)

## Langkah 5: Jual Cetak Tambahan {#step-5-sell-extra-prints}

1. Buka sub-tab **Extra prints**.
2. Nyalakan **Extra print price (sharing screen)**.
3. Isi harga per lembar. Klik **Save changes**.

![Tab Pricing di sub-tab Extra prints dengan Extra prints, switch dan harga ditandai](/img/docs/steps/tutorials-prices-and-packages--extra-prints.webp)

Setelah foto, layar Sharing nampilin tombol **Extra prints**. Pelanggan pilih jumlahnya, bayar pakai QR lewat gateway kamu, dan printer langsung nyetak. Tombolnya cuma muncul selama ada gateway aktif dan pembayaran nyala di booth.

## Langkah 6: Tambah Pajak dan Biaya (Opsional) {#step-6-add-tax-and-fees-optional}

1. Buka sub-tab **Tax & fees**.
2. **Tax**: tarif dalam persen (0 sampai 100) dan label yang dilihat pelanggan di baris pajak, maksimal 20 karakter. Kosongkan tarif kalau gak ada pajak.
3. **Charge to**: **Guest** (pajak ditambahkan di atas harga), atau **Included in the prices** (barisnya tampil sebagai incl.).
4. **+ Add fee** untuk biaya layanan: nama, **Amount** atau **% of subtotal**, dan nilainya. Maksimal 5 biaya; masing-masing tampil sebagai baris sendiri, dan biaya ikut kena pajak bareng subtotal. Klik **Save changes**.

![Tab Pricing di sub-tab Tax & fees dengan Tax & fees, tarif dan label pajak, Charge to dan + Add fee ditandai](/img/docs/steps/tutorials-prices-and-packages--tax-fees.webp)

## Cek Hasilnya {#check-it-worked}

- Preview di kiri nampilin kartu paket kamu, subtotal, pajak dan biaya, serta totalnya.
- Save bar bertuliskan **All changes saved**.
- Mulai sesi di booth: layar Payment nampilin kartu dan total yang sama. Booth baca harga di awal setiap sesi, jadi pelanggan berikutnya sudah lihat perubahannya.

## Tips {#tips}

- **Tiga pilihan sudah cukup.** Single, Double dan Group, atau Single plus Additional sessions. Kartu yang kebanyakan bikin pelanggan lama mikir di booth.
- **Jadikan harga Group sebagai patokan.** Kartu Group dengan harga per sesi lebih murah bikin Double kelihatan seperti pilihan yang masuk akal.
- **Diskon itu Promo, bukan harga.** Untuk happy hour atau minggu pembukaan, biarkan harga ini dan tambah promo di **Marketing Studio > Promo** (lihat [Jalankan Promo](./run-a-promo.md)).
- **Gratis sehari?** Matikan **Payment on this booth** lalu nyalakan lagi nanti; harga kamu tetap tersimpan.
- **Harga sama di banyak booth?** Masukkan ke grup Multi-Booth dan atur sekali di tab Pricing grupnya.

## Kalau Ada Masalah {#troubleshooting}

| Masalah | Kenapa | Solusinya |
|---|---|---|
| "Enter a price, or switch payment off above." | Harga sesi 0 atau kosong | Isi harga di atas 0, atau matikan **Payment on this booth** untuk sesi gratis |
| "A price must be more than 0. Leave it empty to use the booth's price." | Ada kotak di **Price per mode** yang isinya 0 | Kosongkan kotaknya, atau isi harga beneran |
| Banner kuning bilang "This booth is in MYR but has no MYR price yet" (atau mata uang lain) dan sesi jalan gratis | Mata uang booth beda dari mata uang akun, dan harga level akun gak ikut berlaku | Isi harga di tab Pricing booth ini dalam mata uangnya sendiri |
| Booth nyetak dua kali lipat lembar dari yang diharapkan | **Prints included** diisi jumlah cetakan, bukan lembar, dengan **2 inch cut** | Isi dalam lembar (1 lembar = 2 strip) |
| Gak ada tombol **Extra prints** di layar Sharing | **Extra print price** mati, pembayaran booth mati, atau gak ada gateway aktif | Nyalakan semuanya, dan aktifkan gateway |
| Paket muncul di booth tapi kotak koin cuma narik harga single | Reader pulsa dan keystroke biasanya harga tetap | Matikan paket di booth itu, atau pakai reader yang bisa narik nominal berubah-ubah |
| "Couldn't save changes. Check your connection and try again." | Penyimpanan gak sampai ke Pixture | Cek koneksi dan klik **Retry** |

## Terkait {#related}

- [Terima Pembayaran di Booth](./accept-payments.md)
- [Jalankan Promo](./run-a-promo.md)
- [Jual Sesi Online](./sell-sessions-online.md)
- [Terima Bayaran Kartu, Koin dan Tunai](./connect-a-coin-or-card-reader.md)
- [Booth Pricing reference](../dashboard/booth-pricing.md)
