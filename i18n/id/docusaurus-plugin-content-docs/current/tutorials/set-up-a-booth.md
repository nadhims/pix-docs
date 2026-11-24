---
sidebar_position: 1
title: Bikin Booth dari Nol
description: Bikin booth di dashboard Pixture, pasang template, desain layar, filter dan harga, pairing komputer booth, terus coba satu sesi foto.
tags: [tutorials, booths, setup, pairing]
---

# Bikin Booth dari Nol

Di tutorial ini kamu bikin booth di dashboard Pixture, pasang template print, pilih desain layar dan filter booth, atur harga atau bikin sesi foto gratis, cek output, pairing komputer booth, terus coba satu sesi. Siapkan waktu sekitar 30 menit, ditambah waktu install aplikasi Pixture Photobooth.

## Kapan Dipakai {#when-to-use-it}

- **Booth pertama kamu.** Mulai dari sini setelah bikin akun Pixture.
- **Tempat baru atau klien baru.** Kiosk di mall, ruang studio kedua, atau venue partner masing-masing dapat booth sendiri, lengkap dengan harga, template dan desain layarnya sendiri.
- **Booth yang pindah tempat.** Susun ulang setelannya untuk venue baru, jangan salin setelan lama satu per satu.

Kalau kamu cuma mau nambah komputer kedua di Pix Pro, ini bukan halamannya: lihat [Tambah Komputer Kedua atau Pindahkan Pix Pro](./add-or-move-a-computer.md). Untuk event sekali jalan, lihat [Jalankan Event](./run-an-event.md).

## Sebelum Mulai {#before-you-start}

- Akun Pixture, dengan dashboard terbuka di pixture.io.
- [Aplikasi Pixture Photobooth](../getting-started/download-desktop-app.md) sudah terpasang di komputer booth, dengan kamera dan printer tersambung.
- Di Pix Starter, kamu bisa pairing satu komputer, dan setiap foto, cetakan dan GIF kena watermark Pixture. Pix Pro ngilangin watermark itu dan membuka pembayaran di booth. Lihat [Paket & Harga](../pricing/plans.md).

## Langkah 1: Bikin booth-nya {#step-1-create-the-booth}

1. Di sidebar, klik **Booths**, terus **+ New Booth**.
2. Di tab **Single booth**, ketik **Booth Name** yang jelas nunjukin lokasi atau fungsi booth, dan isi **Location** kalau mau.
3. Klik **Create**.

![Modal Create Booth di tab Single booth dengan Booth Name dan Location sudah diisi](/img/docs/steps/tutorials-set-up-a-booth--booths-create-modal.webp)

Booth baru muncul di daftar dengan tanda strip di bawah **DEVICE** dan **PLAN**, soalnya belum ada komputer yang di-pairing. Klik **Configure** untuk membukanya. Saat pertama dibuka, muncul popup "Pair your booth first" dengan tombol **Generate pairing code**. Klik **Maybe later** dulu. Kamu pairing komputernya di Langkah 7, setelah booth siap dipakai pelanggan.

## Langkah 2: Pasang template print {#step-2-assign-print-templates}

1. Buka tab **Templates** dan klik **Manage Templates**.

![Tab Templates booth dengan kartu Assigned Templates dan tombol Manage Templates](/img/docs/steps/tutorials-set-up-a-booth--booth-templates-tab.webp)

2. Centang setiap template yang mau ditawarkan di booth ini. Filter **Assigned / Not Assigned**, **All Categories**, **All Sizes** dan **All Media** bantu mempersempit daftarnya.
3. Klik **Save Templates**.

![Modal Manage Templates berisi daftar template dengan ukuran dan jenis media, plus tombol Save Templates](/img/docs/steps/tutorials-set-up-a-booth--booth-manage-templates-modal.webp)

Akun baru langsung dapat dua template 4x6 siap pakai, Classic Black dan Classic White. Di Pix Starter, cuma dua template ini yang bisa kamu pakai. Di Pix Pro kamu bisa desain template sebanyak yang kamu mau di Pix Design (lihat [Desain Template Print](./design-a-print-template.md)). Pasang minimal satu template, soalnya kalau gak ada, pelanggan gak punya pilihan apa-apa.

## Langkah 3: Pilih desain layar booth {#step-3-choose-the-booths-screen-design}

1. Buka tab **UI Project**.
2. Pilih desain dari dropdown. Pilihannya dikelompokkan jadi **Several modes**, **Photobooth mode**, **Studio mode**, **Simple mode**, **Newspaper mode** dan **Notes**, dan tab ini nunjukin **Booth mode** yang dihasilkan.
3. Klik **Save**.

![Tab UI Project booth dengan dropdown project terbuka di grup Several modes, Photobooth mode, Studio mode dan Notes, plus tombol Save](/img/docs/steps/tutorials-set-up-a-booth--booth-ui-project-tab.webp)

Setiap akun mulai dengan desain layar bawaan, jadi kamu bisa biarkan dulu dan balik lagi setelah bikin desain sendiri (lihat [Atur Tampilan Layar Booth](./customise-kiosk-screens.md)). Studio mode butuh Pixture Photobooth 1.1.98 atau lebih baru di komputer booth, dan project dengan beberapa mode butuh 1.2.4 atau lebih baru.

## Langkah 4: Pilih filter {#step-4-choose-filters}

1. Buka tab **Filters**. Kalau belum ada filter yang dipasang khusus, semua filter otomatis tersedia di booth, jadi langkah ini boleh kamu lewati.
2. Kalau cuma mau nawarin sebagian filter, klik **Manage Filters**, centang yang kamu mau (atau **Select all**), terus klik **Save Filter Assignments**.

![Tab Filters booth dengan daftar filter booth dan Manage Filters](/img/docs/steps/tutorials-set-up-a-booth--booth-filters-tab.webp)

Pixture punya 14 filter bawaan. Di **Pix Design > Photo Filters** kamu bisa upload file .cube sendiri, yang nanti muncul di sini di bagian **Custom**.

## Langkah 5: Atur harga, atau bikin sesi gratis {#step-5-set-the-price-or-make-sessions-free}

1. Buka tab **Pricing**.
2. Atur switch **Payment on this booth**. Kalau nyala, pelanggan bayar sesuai harga di bawahnya di booth. Kalau mati, semua sesi gratis dan harga kamu tetap tersimpan untuk nanti. Booth juga melewati layar Payment. Booth dengan aplikasi versi 1.2.20 atau lebih lama masih nampilin layar voucher kalau metode Voucher di halaman Payment nyala: update aplikasinya dari [pixture.io/download](https://pixture.io/download).
3. Di **Price & packages**, isi **Session price**. Pilih **Print format** yang cocok dengan kertas kamu (Standard, 2 inch cut atau Triple strip), dan nyalain **Double session price**, **Group session price** atau **Additional session price** kalau kamu punya paket.
4. Klik **Save changes** di save bar.

![Tab Pricing booth dengan kartu Sell sessions online, switch Payment on this booth, preview booth langsung dan form Price & packages](/img/docs/steps/tutorials-set-up-a-booth--booth-pricing-full.webp)

Untuk terima pembayaran di booth, kamu butuh payment gateway di **Settings > Payment Gateway**, atau coin acceptor atau card reader (lihat [Sambungkan Coin Acceptor atau Card Reader](./connect-a-coin-or-card-reader.md)). Di Pix Starter, booth melewati layar Payment, jadi sesi tetap gratis sampai komputernya pakai Pix Pro. Sub-tab lainnya ngatur **Payment timeout** (**Time**), **Extra print price** untuk layar sharing (**Extra prints**) dan **Tax & fees**. Lihat [Harga Booth](../dashboard/booth-pricing.md).

## Langkah 6: Cek output dan PIN operator {#step-6-check-outputs-and-the-operator-pin}

1. Buka tab **Settings**.
2. Di **Output Settings**, nyalain apa saja yang harus dihasilkan booth: **Singles Upload**, **GIF Upload**, **Live Photo Upload** dan **Print Output**. Klik **Save Output Settings**.
3. Di **Menu PIN**, isi PIN 4 sampai 8 digit dan klik **Set PIN**, biar pelanggan gak bisa buka menu operator di booth. Kalau mau satu PIN untuk semua booth, isi di **Settings > Security**: lihat [Kunci Booth dan Pakai Menu Operator](./operator-menu.md).

![Tab Settings booth dengan switch Output Settings, Payment Gateway, Booth Info, Currency dan Menu PIN](/img/docs/steps/tutorials-set-up-a-booth--booth-settings-tab.webp)

Di tab yang sama kamu juga ngatur **Active Gateway** booth (**Organization Default**, kecuali booth ini butuh gateway lain), **Region** dan **Currency**.

## Langkah 7: Pairing komputer {#step-7-pair-the-computer}

1. Buka tab **Computer** dan, di **Pairing & access**, klik **Generate code**.
2. Popup **Pair a computer** nampilin kode 6 digit yang kedaluwarsa dalam 10 menit. **Copy code** nyalin kode ke clipboard, **New code** bikin kode baru. Kalau free trial kamu belum dipakai dan gak ada Pix Pro atau Event Pass yang kosong untuk komputer ini, popup akan nawarin dulu **Start free trial** (3 hari kamu mulai dihitung saat komputer tersambung) atau **Pair without the trial**.

![Popup Pair a computer dengan kode 6 digit, hitung mundur kedaluwarsa, Copy code, New code dan Done](/img/docs/steps/tutorials-set-up-a-booth--booth-pairing-code.webp)

3. Di komputer booth, buka aplikasi Pixture Photobooth dan masukkan kodenya di layar pairing.
4. Balik ke dashboard, klik **Done**.

Kalau modal nampilin "Device limit reached" alih-alih kode, berarti semua jatah komputer di langganan kamu sudah terpakai. Lihat [Tambah Komputer Kedua atau Pindahkan Pix Pro](./add-or-move-a-computer.md).

## Langkah 8: Coba satu sesi foto {#step-8-run-a-test-photo-session}

1. Di booth, tap layar Start untuk mulai sesi.
2. Pilih template, berpose untuk setiap jepretan, pilih filter, terus lanjut ke layar Sharing.
3. Scan kode QR pakai HP kamu dan cek hasil cetaknya keluar.

:::tip Tes dengan pembayaran nyala
Kalau **Payment on this booth** nyala, matiin dulu untuk tes, atau bikin voucher di **Vouchers > + Create > Single Voucher** dengan **What is it?** diisi **Staff pass**, terus masukkan kodenya di layar Payment.
:::

## Cek Hasilnya {#check-it-worked}

- Header halaman booth nampilin **Online** dan paket komputernya: **Pix Pro until** sebuah tanggal, **Trial until** sebuah tanggal, atau Watermarked di Pix Starter.
- **Booths** nampilin komputer di bawah **DEVICE** dan paketnya di bawah **PLAN**.
- **Gallery** nampilin foto tes, dan beranda dashboard nampilin banner yang bilang booth kamu sudah live, dengan **View gallery**.
- **Health** nampilin booth sebagai Healthy, lengkap dengan sisa kertas dan waktu terakhir terlihat.

![Halaman booth yang sudah di-pairing dengan status Online, badge Pix Pro, grid properti dan bar tab](/img/docs/booth-overview.webp)

## Tips {#tips}

- **Berikutnya, siapkan komputer booth** biar booth bisa jalan sendiri saat pelanggan datang:
  - [Bikin Booth Nyala Sendiri Setelah Listrik Padam](./start-after-a-power-cut.md): komputer nyala, login dan buka booth tanpa ada orang.
  - [Kunci Layar ke Booth](./lock-the-screen.md): gak ada taskbar, notifikasi atau swipe di layar sentuh.
  - [Kunci Booth dan Pakai Menu Operator](./operator-menu.md): PIN, plus halaman-halaman yang kamu pakai selama seharian kerja.
  - [Live View Tetap Terang Saat Pakai Flash](./bright-live-view-with-flash.md): cuma kalau kamu pakai flash.
- **Atur booth di dashboard sebelum berangkat ke venue.** Template, desain layar dan harga semuanya online, jadi di venue kamu tinggal pairing komputer dan tes.
- **Kasih nama booth sesuai tempatnya**, misalnya "Sunny Side Mall Kiosk 1". Reports, Health dan statement partner pakai nama itu.
- **Simpan satu voucher tes** (staff pass) untuk ngecek booth yang pembayarannya nyala, jadi kamu gak pernah bayar sesi tes sendiri.
- **Lakukan sesi tes dengan kertas asli terpasang.** Cuma dengan cara ini kamu bisa lihat ukuran dan posisi cetakannya sudah pas.

## Kalau Ada Masalah {#troubleshooting}

| Masalah | Kenapa | Solusinya |
|---|---|---|
| Kode pairing ditolak | Kode kedaluwarsa setelah 10 menit | Klik **New code** dan masukkan kode barunya |
| Muncul "Device limit reached" alih-alih kode | Semua jatah komputer di langganan kamu aktif, atau ini komputer kedua di Pix Starter | Nonaktifkan satu komputer di halaman Computers, tambah komputer, atau pakai Event Pass. Pix Starter cuma untuk satu komputer |
| Booth tampil Offline atau Unknown | Gak ada kabar dari komputer dalam 12 menit terakhir | Cek koneksi internet komputer dan pastikan aplikasi Pixture Photobooth jalan |
| Pelanggan gak lihat template apa pun | Belum ada yang dipasang di tab Templates | Pasang minimal satu template dan klik **Save Templates** |
| Semua sesi gratis | **Payment on this booth** mati, atau komputernya di Pix Starter | Nyalain switch-nya dan sambungkan gateway. Pix Starter melewati layar Payment |
| Foto kena watermark Pixture | Komputernya di Pix Starter | Mulai free trial atau beli Pix Pro di halaman Computers |

## Terkait {#related}

- [Kelola Booth](../dashboard/booth-management.md)
- [Harga Booth](../dashboard/booth-pricing.md)
- [Sesi Foto Pertama Kamu](../getting-started/your-first-session.md)
- [Pairing Booth Pertama Kamu](../getting-started/pair-your-first-booth.md)
