---
sidebar_position: 51
title: Jalankan Antrean (Queue Line)
description: Biarkan pelanggan ambil nomor antrean di HP lalu jalan-jalan dulu, terus panggil mereka balik ke booth lewat layar TV, suara dan getar di HP mereka.
tags: [tutorials, queue, multi-booth, pix-pro, kiosk]
---

# Jalankan Antrean (Queue Line)

Di tutorial ini kamu nyalain antrean (queue line) untuk booth kamu, pasang queue display di TV, cetak poster ber-QR, dan jalankan antrean dari staff page. Hasilnya, pelanggan ambil nomor di HP, jalan-jalan dulu, dan balik waktu TV, suara dan HP mereka memanggil. Siapkan waktu sekitar 20 menit, plus waktu pasang TV.

## Kapan Dipakai {#when-to-use-it}

- **Booth self-service di mall yang ramai.** Sabtu sore ada dua puluh orang berdiri di depan booth, dan separuhnya nyerah. Dengan antrean, mereka ambil nomor, keliling mall, dan balik waktu dipanggil.
- **Studio multi-booth.** Tiap booth punya antrean sendiri (A1, A2 untuk Booth A; B1, B2 untuk Booth B), jadi pelanggan yang nunggu booth besar gak ketahan di belakang orang yang nunggu booth kecil.
- **Pop-up dengan kasir.** Pelanggan bayar sekali di kasir, dapat kode dan nomor, dan booth memanggil mereka sesuai urutan.

Bukan untuk event yang tamunya pakai booth gratis: komputer event gak pernah ikut antrean. Untuk booth yang sepi, biarkan antrean **Off**: antrean nambah satu langkah untuk tiap pelanggan.

## Sebelum Mulai {#before-you-start}

- **Pix Pro.** Antrean adalah fitur Pix Pro, dan tiap booth yang ikut antrean butuh komputernya di Pix Pro. Booth di Pix Starter dilewati antrean.
- **Grup Multi-Booth** berisi booth kamu. Satu grup boleh berisi satu booth saja. Lihat [Atur Grup Multi-Booth](./multi-booth-group.md).
- **Pixture Photobooth 1.2.37 atau lebih baru** di tiap booth. Booth versi lama mengabaikan antrean.
- **Layar Payment nyala** di desain layar tiap booth. Pelanggan mengetik kodenya di sana, jadi booth yang layar Payment-nya mati dilewati antrean. Cek di **Pix Design > UI Editor**.
- **Cara jual nomor**: shop di Website atau online shop kamu, atau Central cashier (Langkah 6). Pelanggan butuh kode yang sudah dibayar untuk masuk antrean.
- **Internet di tiap booth** selama antrean nyala. Booth yang kehilangan internet nampilin "Booth reconnecting" dan menunggu.
- **TV atau monitor dengan browser** untuk queue display, idealnya ada speaker untuk suaranya.

## Persiapan {#prepare}

- **Taruh TV di tempat orang menunggu,** bukan di dalam area booth. Pelanggan ngelirik dari meja kafe atau toko sebelah; nomornya harus kebaca dari sekitar 5 meter.
- **Tempel poster di sebelah tiap booth dan di pintu masuk.** QR-nya membuka halaman tempat pelanggan pilih booth dan ambil nomor.
- **Rencanakan huruf booth.** Tiap booth dapat satu huruf, A sampai Z tanpa I dan O (di TV mirip 1 dan 0). Tempel huruf yang sama di booth-nya, biar pelanggan gampang nemu "Booth B".
- **Booth dengan coin atau note acceptor yang memulai sesi** (**F13 paid signal** di halaman **Hardware API** booth) dilewati antrean, soalnya uangnya sudah masuk sebelum booth sempat minta nomor. Pakai antrean di booth yang terima bayar di layar atau pakai kode.

## Langkah 1: Nyalakan Antrean {#step-1-turn-the-line-on}

1. Buka **Booths** dan buka grup Multi-Booth kamu.
2. Masuk ke tab **Queue**.
3. Di **Queue line**, tap satu mode. Langsung tersimpan.

| Mode | Yang terjadi |
|---|---|
| **Off** | Gak ada antrean. Booth jalan seperti biasa. |
| **Hybrid** | Walk-in boleh. Kalau ada yang antre, booth menunggu nomor mereka. |
| **Online only** | Semua pelanggan butuh nomor. Booth cuma mulai untuk nomor yang dipanggil. |

![Tab Queue Multi-Booth dengan antrean di Hybrid, Any time / Set hours dan kartu Booth letters](/img/docs/steps/tutorials-queue-line--queue-tab.webp)

Pilih **Hybrid** untuk kebanyakan tempat: kalau gak ada yang antre, pelanggan walk-in bayar di booth seperti biasa; begitu ada yang pegang nomor, booth menunggu mereka. Pilih **Online only** kalau ramainya sampai tiap pelanggan sebaiknya ambil nomor.

## Langkah 2: Cek Huruf Booth dan Peringatan {#step-2-check-the-booth-letters-and-warnings}

1. Begitu antrean nyala, kartu **Booth letters** nampilin tiap booth dengan hurufnya dan berapa orang yang antre ("2 in line", atau "Not in line" kalau belum punya huruf). Pixture ngasih huruf sesuai urutan nama booth.
2. Untuk ganti huruf, tap hurufnya lalu pilih yang baru di **Pick a letter**. Huruf yang dipakai booth lain berwarna abu-abu.
3. **Take out of line** mengeluarkan booth dari antrean (nomornya tetap terbawa). Booth tanpa huruf gak pernah memanggil siapa pun.
4. Baca peringatan di atas kartu. Masing-masing punya **Show**, yang nampilin daftar booth-nya:
   - "1 booth needs app 1.2.37 or newer": update booth itu.
   - "1 booth skips the line (on Starter)": pasang Pix Pro di komputernya lewat halaman **Computers**.
   - "1 booth skips the line (Payment Screen off)": nyalakan lagi layar Payment di **Pix Design > UI Editor**.

Nomor dihitung per booth, per hari: Booth A ngasih A1, A2, A3, dan tiap antrean mulai lagi dari 1 besoknya.

## Langkah 3: Atur Jam Buka (Opsional) {#step-3-set-opening-hours-optional}

1. Di sebelah mode, antrean bertuliskan **Any time**. Tap **Set hours**.
2. Pilih **Opens** dan **Closes**, lalu tap **Save**.
3. **Clear** balik ke **Any time**.

Di luar jam itu booth gak memanggil siapa pun, dan halaman join bilang "Line opens at" plus jam bukanya. Pelanggan tetap bisa ambil nomor sebelum buka dan tempatnya aman; antrean memanggil mereka berurutan begitu buka. Jam tutup yang lebih awal dari jam buka bikin antrean jalan lewat tengah malam.

## Langkah 4: Pasang Queue Display di TV {#step-4-put-the-queue-display-on-a-tv}

1. Di kartu **Queue display**, tap **Design** untuk memilih layout (**Board**, **Spotlight** atau **Rows**), warna dan font. Lihat [Queue Display](../dashboard/pix-design/queue-display.md).
2. **Staff page** membuka halaman tempat crew menjalankan antrean (Langkah 7).
3. **Print poster** membuka poster A4 dengan QR dan langkah-langkahnya, dalam bahasa Inggris dan Indonesia.
4. **Open display** membuka halaman display. Buka link yang sama di browser TV, layar penuh.

![Kartu Queue display dengan Design, Staff page, Print poster dan Open display ditandai](/img/docs/steps/tutorials-queue-line--queue-display-card.webp)

Display memanggil tiap nomor dengan suara dan bunyi chime. Browser bikin halaman diam sampai ada yang tap, jadi tap layarnya sekali, atau tap tombol **Tap for sound**. Untuk TV yang gak pernah disentuh, jalankan Chrome dengan `--autoplay-policy=no-user-gesture-required`. Saat antrean sepi, display nampilin cara ambil nomor dan QR-nya.

<!-- SHOT-NEEDED: hardware: a TV at a venue showing the queue display Board layout with A12 called -->

## Langkah 5: Cetak dan Tempel Poster {#step-5-print-and-place-the-poster}

1. Tap **Print poster** dan cetak di kertas A4.
2. Tempel satu di sebelah tiap booth dan satu di tempat orang masuk.

QR di poster, display dan booth semuanya menuju halaman join yang sama. Di sana pelanggan tap satu booth di **Pick a booth** (tiap booth nampilin berapa yang antre), lalu **Buy a session**, atau ketik kode di **Already have a code?** dan tap **Get my number**.

<!-- SHOT-NEEDED: phone: the join page with Pick a booth, Buy a session and Already have a code? -->

## Langkah 6: Tentukan Cara Pelanggan Dapat Nomor {#step-6-decide-how-customers-get-a-number}

Pelanggan masuk antrean pakai kode yang sudah dibayar, lewat salah satu dari tiga cara. Tiap kali, mereka pilih booth yang mereka mau.

1. **Beli online.** **Buy a session** di halaman join membuka shop kamu (shop di Website, atau online shop grup). Setelah bayar, pesanannya dapat tempat di antrean dan pelanggan bisa tap **See your place in line**.
2. **Central cashier.** Dengan **Central cashier** di tab **Cashier** grup, penjualan di kasir atau online ngasih kode, dan pelanggan dapat nomor pakai kode itu. Lihat [Atur Grup Multi-Booth](./multi-booth-group.md).
3. **Sudah punya kode.** Pelanggan yang beli kode sebelumnya mengetiknya di **Already have a code?** dan tap **Get my number**.

HP pelanggan lalu nampilin tiket live: nomor mereka, booth-nya, berapa orang di depan dan perkiraan waktu tunggu. Halaman itu dibiarkan terbuka; HP bergetar dan berbunyi waktu mereka dipanggil.

<!-- SHOT-NEEDED: phone: the ticket page with Your place in line, the number A3, 2 ahead, about 6 min -->

## Langkah 7: Jalankan Antrean dari Staff Page {#step-7-run-the-line-from-the-staff-page}

1. Tap **Staff page** di tab Queue. Bagian atas nampilin **Open** atau **Closed**, berapa yang menunggu dan berapa booth yang kosong.
2. Tiap booth punya kartu dengan hurufnya, chip (**Free**, **Calling**, **In session** atau **Offline**) dan antreannya. Di booth yang kosong, **Call A4** memanggil nomor berikutnya sekarang; antrean juga memanggil nomor berikutnya sendiri tiap ada booth yang kosong.
3. Buka menu tiket (tiga titik). Isinya menyesuaikan tiketnya: **Call now** (booth-nya lagi kosong), **Skip** (pelanggan terlewat), **Put back** (tiket yang sudah dipanggil atau terlewat pindah ke belakang antrean) atau **Move to** booth lain. Tiket yang dipindah tetap pegang nomor dan urutan waktunya: A12 yang dipindah ke Booth B tetap A12.
4. **Close line** menghentikan panggilan untuk seluruh grup, misalnya saat istirahat; **Open line** memulainya lagi. Orang yang antre tetap pegang tempatnya.
5. **Sell at the counter** membuka shop untuk pelanggan yang berdiri di depan kamu; mereka bayar dan dapat nomor.
6. **Open display** membuka halaman TV.

![Halaman Staff dengan booth A memanggil A3, booth B bebas dengan Call B2, menu tiket terbuka serta Close line, Sell at the counter dan Open display ditandai](/img/docs/steps/tutorials-queue-line--staff-page.webp)

## Cek Hasilnya {#check-it-worked}

- Kalau ada yang antre, booth yang kosong nampilin nomor yang dipanggil di bagian atas layar pembukanya ("A3, come to this booth"), dan TV memanggilnya dengan suara.

  ![Layar pembuka booth dengan pita A3, come to this booth ditandai](/img/docs/steps/tutorials-queue-line--booth-calling.webp)

- Pelanggan mengetik kodenya di layar Payment booth dan sesi mulai. Mereka punya waktu **2 menit** untuk check in setelah dipanggil.
- Di **Online only** (atau **Hybrid** saat ada yang antre), booth yang gak sedang memanggil siapa pun nampilin QR dan "Scan to get a number", bukan tombol start.

  ![Booth tertutup QR dengan Scan to get a number ditandai](/img/docs/steps/tutorials-queue-line--booth-get-number.webp)

- Pelanggan yang mengetik kode sebelum gilirannya lihat "Not your turn yet" dengan nomornya dan berapa orang di depan.

## Tips {#tips}

- **Mulai dengan Hybrid di hari kerja** supaya crew terbiasa dengan staff page, lalu ganti ke **Online only** untuk akhir pekan dan libur.
- **Terlewat itu gak masalah.** Setelah 2 menit booth lanjut dan tiketnya bertuliskan **You missed your turn**. Pelanggan tap **I'm here, put me back** sekali untuk masuk lagi tepat setelah orang berikutnya; terlewat kedua kalinya, mereka ke paling belakang. Sesi yang sudah dibayar gak pernah hilang.
- **Beberapa sesi dalam satu tiket** dimainkan berturut-turut: booth menahan pelanggan untuk sesi berikutnya ("A3, your next session").
- **Kode shop tetap berlaku selama antre.** Kode yang dibeli online gak kedaluwarsa selama tiketnya ada di antrean dan antrean nyala.
- **Beri nama booth sebelum nyalain antrean,** karena huruf mengikuti urutan nama booth.
- **Bilang ke crew jangan nutup tab browser display.** Bookmark **Open display** di TV supaya balik lagi setelah listrik mati.

## Kalau Ada Masalah {#troubleshooting}

| Masalah | Kenapa | Solusinya |
|---|---|---|
| Booth gak pernah memanggil siapa pun | Booth gak punya huruf, atau dilewati antrean (Starter, layar Payment mati, F13 paid signal, aplikasi lama) | Cek peringatan dan kartu **Booth letters** di tab Queue |
| Booth nampilin "Booth reconnecting" | Booth kehilangan internet; antrean butuh internet | Benerin koneksinya; booth nyambung lagi ke antrean sendiri |
| Booth nampilin "The line is closed" | Di luar jam buka, atau crew tap **Close line** | Tap **Open line** di staff page, atau ubah jamnya |
| TV memanggil nomor tanpa suara | Browser memblokir suara sampai halaman di-tap | Tap layar atau **Tap for sound**; untuk TV tanpa penjaga jalankan Chrome dengan `--autoplay-policy=no-user-gesture-required` |
| "That code does not work here" di halaman join | Kodenya milik grup atau akun lain, atau sudah terpakai atau kedaluwarsa | Cek kodenya; jual kode baru di kasir |
| Pelanggan dapat "Not your turn yet" di booth | Ada orang lain di antrean booth itu yang lebih dulu | Minta mereka nunggu dipanggil, atau **Call now** dari staff page |
| Nomor pelanggan terlewat | Mereka gak check in dalam 2 menit | Mereka tap **I'm here, put me back** di tiketnya, atau crew pakai **Put back** |
| Setelan antrean gak ada di tab Queue | Akun di Pix Starter ("The queue line is a Pix Pro feature.") | Ambil Pix Pro di halaman **Computers** |

## Terkait {#related}

- [Panduan Queue Line](../guides/queue-line.md)
- [Queue Display](../dashboard/pix-design/queue-display.md)
- [Atur Grup Multi-Booth](./multi-booth-group.md)
- [Publikasikan Website Kamu](./publish-your-website.md)
- [Jual Sesi Online](./sell-sessions-online.md)
