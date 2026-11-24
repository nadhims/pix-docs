---
sidebar_position: 4
title: Kunci Booth dan Pakai Menu Operator
description: Pasang PIN menu untuk semua booth atau satu booth, buka menu operator tersembunyi di booth, kenali halaman-halamannya, terus balikin booth ke pelanggan. Lengkap dengan shortcut yang paling sering dipakai crew saat event.
tags: [tutorials, booth, operator menu, pin, security]
---

# Kunci Booth dan Pakai Menu Operator

Di tutorial ini kamu kunci menu operator booth pakai PIN, buka menunya di booth, cari halaman yang kamu butuhkan selama seharian kerja, terus balikin booth ke pelanggan. Siapkan waktu sekitar 10 menit.

Menu operator adalah tempat kamu ngubah setelan kamera, printer dan capture, cetak ulang foto, upload foto yang masih antre, dan ngosongin ruang penyimpanan. Pelanggan gak pernah lihat menu ini: letaknya di balik sudut tersembunyi dan, kalau sudah kamu pasang, di balik PIN.

Menu operator ada di **komputer booth**: Mac atau PC Windows yang tersambung ke kamera dan printer, yang jalanin aplikasi Pixture Photobooth. Menu ini gak ada di dashboard Pixture di pixture.io, yang bisa kamu buka dari komputer atau HP mana pun.

## Kapan Dipakai {#when-to-use-it}

- **Booth self-service di mall atau venue.** Gak ada yang jagain booth seharian. Tanpa PIN, pelanggan iseng yang tap sudut layar dua kali bisa nyasar ke setelan kamera dan printer kamu.
- **Event dengan crew.** Crew kamu perlu ganti kertas, cetak ulang foto atau benerin kamera tanpa login dashboard kamu. Kasih mereka PIN, bukan password kamu.
- **Beberapa booth di satu tempat.** Satu PIN untuk seluruh akun gampang diingat. Kasih satu booth PIN sendiri kalau booth itu milik partner atau ada di tempat yang lebih rawan.

Pasang PIN di setiap booth di tempat umum. Satu-satunya booth yang boleh tanpa PIN adalah komputer yang cuma kamu sendiri yang pegang.

## Sebelum Mulai {#before-you-start}

- Booth yang sudah di-pairing dengan aplikasi Pixture Photobooth. Lihat [Bikin Booth dari Nol](./set-up-a-booth.md).
- Akses ke **Settings** di dashboard Pixture (pemilik akun punya akses ini).
- Paket apa saja: PIN menu jalan di Pix Starter dan Pix Pro.

## Langkah 1: Pasang PIN menu untuk semua booth kamu {#step-1-set-a-menu-pin-for-all-your-booths}

1. Di dashboard, klik **Settings** di sidebar.
2. Klik **Security**.
3. Di **Menu Access PIN**, ketik PIN 4 sampai 8 digit di **PIN Code (4-8 digits)**.
4. Ketik lagi di **Confirm PIN**.
5. Klik **Set PIN**. Kartunya sekarang bilang "Menu PIN is currently enabled".

![Settings > Security dengan Settings, Security, PIN Code, Confirm PIN dan Set PIN ditandai](/img/docs/steps/tutorials-operator-menu--settings-security-pin.webp)

Sekarang setiap booth di akun ini minta PIN tersebut. Booth yang online langsung ngecek PIN ke Pixture. Booth yang offline pakai PIN terakhir yang di-download, jadi tetap terkunci.

## Langkah 2: Kasih satu booth PIN sendiri (opsional) {#step-2-give-one-booth-its-own-pin-optional}

1. Klik **Booths** di sidebar dan buka booth-nya.
2. Buka tab **Settings**.
3. Di **Menu PIN** ("Lock the operator menu on the kiosk."), ketik 4 sampai 8 digit.
4. Klik **Set PIN**. Kalau booth sudah kena PIN (punya booth sendiri atau punya akun), tombolnya bertuliskan **Change**.

![Tab Settings booth dengan Booths, tab Settings, kolom Menu PIN dan Set PIN ditandai](/img/docs/steps/tutorials-operator-menu--booth-settings-menu-pin.webp)

Booth ini sekarang minta PIN-nya sendiri, bukan PIN akun. Selama booth masih pakai PIN akun, kartu **Menu PIN**-nya bertuliskan "PIN enabled (org-level)".

:::caution Disable membuka kunci booth ini
**Disable** matiin PIN menu untuk booth ini, walaupun akunnya punya PIN. Setelah itu siapa pun yang tap sudut layar dua kali bisa buka menunya. Untuk ngunci lagi, pasang PIN di booth ini.
:::

## Langkah 3: Buka menu di booth {#step-3-open-the-menu-at-the-booth}

Membuka menu bakal mengakhiri sesi foto yang lagi tampil, jadi buka di sela-sela pelanggan, jangan pernah saat ada yang lagi berpose.

1. Di layar pelanggan mana pun, tap sudut kanan atas dua kali dalam 3 detik. Area tap-nya kotak 120 x 120 piksel dengan ikon gembok samar di dalamnya.
2. Pad **Enter Admin PIN** muncul. Ketik PIN dan tap tanda centang. Tanda centang bisa dipakai mulai 4 digit. PIN 8 digit langsung membuka menu begitu digit terakhir diketik.
3. Berubah pikiran? Tap **Cancel** dan layar pelanggan muncul lagi.

![Pad Enter Admin PIN di booth dengan judul, tanda centang dan Cancel ditandai](/img/docs/steps/tutorials-operator-menu--pin-pad.webp)

PIN yang salah nampilin "Incorrect PIN". Setelah sekitar 20 percobaan dalam satu menit, booth menolak semua PIN untuk sementara, jadi nebak-nebak gak bakal berhasil.

## Langkah 4: Kenali isi menu {#step-4-find-your-way-around-the-menu}

Menu terbuka dengan cek kesiapan di kiri ("Ready to start" kalau kamera dan printer aman) dan setelan di kanan.

1. **Camera Settings**: pilih kamera, exposure, zoom, rotasi dan flash.
2. **Printer Settings**: pilih printer, kertas, orientasi, jumlah cetakan per sesi dan posisi cetak, plus pantau sisa kertas.
3. **Capture Settings**: booth ngambil foto, video atau slow motion, plus kecepatan slow motion-nya.
4. **Hardware API**: coin acceptor, note acceptor, card reader dan perangkat lain yang terhubung ke booth.
5. **Admin Panel**: upload, riwayat cetak, penyimpanan, dan apa yang dilakukan komputer saat nyala (langkah berikutnya).
6. **Start Booth**: balik ke layar pelanggan.

![Menu operator dengan Camera Settings, Printer Settings, Capture Settings, Hardware API, Admin Panel dan Start Booth ditandai](/img/docs/steps/tutorials-operator-menu--menu.webp)

Bar di atas nampilin **Internet**, **API** (server Pixture) dan **Uploads**. Hijau artinya aman. Merah nunjukin bagian mana yang perlu kamu cek sebelum pelanggan datang.

## Langkah 5: Pakai Admin Panel {#step-5-use-the-admin-panel}

1. **Start on boot**: biarkan nyala, biar booth terbuka sendiri saat komputer nyala. Lihat [Bikin Booth Nyala Sendiri Setelah Listrik Padam](./start-after-a-power-cut.md).
2. **Upload now**: ngirim foto yang masih antre, misalnya setelah internet balik.
3. **Print history**: foto yang sudah dicetak di komputer ini. Tap **Print again** di salah satunya untuk cetak ulang.
4. **Clean storage**: menghapus file foto yang tersimpan di komputer ini, biar ada ruang kosong. **Print again** gak bisa dipakai lagi untuk sesi yang kamu bersihkan, jadi cetak ulang dulu.

![Admin Settings dengan Start on boot, Upload now, Print history dan Clean storage ditandai](/img/docs/steps/tutorials-operator-menu--admin-panel.webp)

## Langkah 6: Balikin booth ke pelanggan {#step-6-hand-the-booth-back-to-customers}

Tap **Start Booth** di menu (atau **Back to Menu**, terus **Start Booth**). Booth balik ke layar Start, dan setelan yang kamu ubah berlaku mulai sesi berikutnya.

### Keluar dari aplikasi booth {#leave-the-booth-app}

Untuk masuk ke desktop komputer, misalnya buat install driver printer, tap **Exit** di menu, terus **Exit App**. Aplikasinya tertutup. Buka lagi dari desktop atau Dock kalau sudah selesai.

**Logout** di kartu yang sama memutus komputer dari booth (double-tap, terus masukkan PIN). Pakai ini cuma kalau komputer ini gak lagi jadi booth tersebut.

## Cek Hasilnya {#check-it-worked}

- Tap sudut kanan atas dua kali: pad **Enter Admin PIN** muncul.
- PIN yang salah nampilin "Incorrect PIN" dan menu tetap tertutup.
- PIN yang benar membuka menu, dan **Start Booth** balikin layar pelanggan.

## Tips {#tips}

- **Cara tercepat cetak ulang saat event:** dua tap di sudut, PIN, **Admin Panel**, **Print history**, terus **Print again**. Ajarin ke siapa pun yang jaga booth.
- **Pindahkan ikon gembok** kalau desain kamu naruh tombol di sudut kanan atas: di **Pix Design**, buka desain layar booth di UI Editor, terus di layar Start ubah **Lock button** ke sudut lain (**Top left**, **Bottom right** atau **Bottom left**) dan atur opacity-nya.
- **Sebelum reset, install ulang atau ganti komputer booth**, buka **Admin Panel** dan pastikan **Uploads** gak nampilin apa pun yang **Waiting** atau **Failed**. Tap **Upload now** dan tunggu. Foto yang belum ter-upload cuma ada di komputer itu.
- **Ganti PIN kalau ada crew yang keluar.** Pasang PIN baru di **Settings > Security**. Booth yang online langsung pakai PIN baru.
- Hindari PIN kayak 1234, 0000 atau angka tahun. Pelanggan nyoba itu duluan.

## Kalau Ada Masalah {#troubleshooting}

| Masalah | Kenapa | Solusinya |
|---|---|---|
| Dua tap di sudut gak ngasih respons apa-apa | Jarak dua tap lebih dari 3 detik, atau ikon gembok sudah dipindah ke sudut lain di Pix Design | Tap dua kali dengan cepat di sudut yang diatur di **Lock button** |
| Menu terbuka tanpa minta PIN di semua booth | Belum ada PIN untuk akun | Pasang di **Settings > Security** (Langkah 1) |
| "Incorrect PIN" padahal PIN-nya benar | Booth ini punya PIN sendiri (Langkah 2), yang menggantikan PIN akun | Pakai PIN booth tersebut, atau pasang PIN yang kamu mau di **Menu PIN** booth itu lewat **Change** |
| Menu terbuka tanpa PIN di satu booth, padahal akunnya punya PIN | Ada yang klik **Disable** di **Menu PIN** booth itu | Pasang PIN di tab **Settings** booth tersebut |
| PIN baru gak jalan di satu booth | Booth itu offline dan masih pakai PIN terakhir yang di-download | Pakai PIN lama sampai booth online lagi |
| Semua PIN ditolak untuk sementara | Terlalu banyak percobaan dalam satu menit | Tunggu satu menit dan ketik sekali dengan hati-hati |

## Terkait {#related}

- [Referensi Menu Operator](../desktop-app/admin-panel.md)
- [Bikin Booth Nyala Sendiri Setelah Listrik Padam](./start-after-a-power-cut.md)
- [Kunci Layar ke Booth](./lock-the-screen.md)
- [Settings](../dashboard/settings.md)
