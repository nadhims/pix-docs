---
sidebar_position: 25
title: Booth Tetap Jalan Saat Offline
description: Siapin booth untuk venue yang internetnya jelek atau gak ada, tahu apa saja yang tetap jalan saat offline (sesi, cetak, link QR, kode pembayaran dan voucher), dan pastikan semua foto ter-upload sebelum ada yang reset komputer.
tags: [tutorials, offline, uploads, internet, payments]
---

# Booth Tetap Jalan Saat Offline

Di tutorial ini kamu siapin booth untuk venue yang internetnya lemah atau gak ada, jalanin sesi selama internet putus, pantau foto yang nunggu di-upload, lalu kirim begitu internet balik. Siapkan waktu 10 menit sebelum event dan 5 menit sesudahnya.

Booth ini dibuat untuk internet venue: setiap foto disimpan di komputer booth dulu, baru di-upload belakangan. Satu-satunya cara foto bisa hilang adalah komputer itu di-reset atau dihapus sebelum fotonya ter-upload. Pernah ada operator yang ngalamin persis begitu: PC-nya di-reset padahal foto seharian masih nunggu, dan foto-foto itu hilang. Langkah 4 mastiin ini gak kejadian di kamu.

## Kapan Dipakai {#when-to-use-it}

- **Sewa event di gedung nikahan, pantai atau outdoor** yang Wi-Fi-nya lemah, penuh, atau gak ada.
- **Booth self-service di mall** yang internetnya putus sejam pas Sabtu lagi ramai.
- **Photobox pop-up pakai hotspot HP** yang kadang nyambung kadang gak.
- **Sebelum reset, install ulang, ganti atau pindahin komputer booth:** cek dulu gak ada yang masih nunggu di-upload.

Ini bukan pengganti internet kalau kamu jual sesi dengan pembayaran QR: pelanggan bayar pakai HP mereka sendiri (Langkah 2), jadi sedikit lebih lama.

## Sebelum Mulai {#before-you-start}

- Paket apa saja. Komputer Pix Pro tetap Pix Pro saat offline; lihat [Pix Pro on the Booth](../desktop-app/licence-on-the-booth.md) untuk apa yang terjadi kalau paketnya habis pas lagi offline.
- Booth yang sudah pernah online minimal sekali sejak di-setup, jadi layar, template, PIN menu dan kunci kode pembayaran sudah tersimpan di komputer.
- PIN menu, kalau booth-nya pakai PIN.

## Persiapan {#prepare}

- **Buka booth dalam keadaan online sebelum berangkat ke venue,** dan jalankan satu sesi tes. Itu nge-download desain layar, template dan setelan terbaru.
- **Ubah desain, template dan harga sebelum berangkat,** bukan di venue. Booth yang offline jalan pakai apa yang terakhir di-download.
- **Bawa koneksi cadangan:** hotspot HP atau router 4G. Koneksi lemah beberapa menit setelah event pun cukup untuk upload foto.
- **Cek sisa ruang disk.** Foto yang nunggu disimpan di komputer. Booth yang offline berhari-hari butuh ruang untuk itu.

## Langkah 1: Cek booth sudah up to date {#step-1-check-the-booth-is-up-to-date}

1. Buka menu operator (tap sudut kanan atas dua kali).
2. Lihat bar di atas: **Internet: Online**, dan **Uploads: up to date**.
3. Tap **Start Booth**.

Kalau **Uploads** nampilin angka yang nunggu, tunggu sampai **up to date** sebelum dicabut dan dibawa jalan.

## Langkah 2: Jalankan sesi saat offline {#step-2-run-sessions-offline}

Saat internet putus, booth tetap jalan:

- **Foto, filter dan cetak** jalan di komputer booth seperti biasa.
- **QR code tetap muncul** di layar Sharing. Kalau fotonya belum ter-upload, layar ngasih tahu pelanggan bahwa koneksi lagi gak ada dan fotonya bakal muncul di link itu begitu booth nyambung lagi. Link-nya jalan begitu booth selesai upload, jadi minta pelanggan nyimpen foto QR-nya.
- **Pembayaran QR butuh internet.** Di booth yang pakai pembayaran, layar Payment berubah jadi **No internet at this booth** dengan QR code. Pelanggan scan pakai HP sendiri, bayar di HP pakai kuota mereka, lalu ketik kode dari HP-nya ke booth lewat **Enter Code**. Booth ngecek kodenya sendiri.
- **Kode voucher** dari voucher shop online atau kasir pusat (6, 7 atau 8 karakter) dicek di booth sendiri, jadi tetap jalan saat offline.
- **Coin acceptor dan note acceptor** ngobrol langsung dengan booth dan tetap jalan. Card reader butuh koneksinya sendiri ke bank.
- **PIN menu** jalan dengan PIN terakhir yang di-download booth.

![No internet at this booth dengan QR pembayaran dan Enter Code ditandai](/img/docs/steps/tutorials-keep-running-offline--offline-payment.webp)

## Langkah 3: Pantau foto yang nunggu di-upload {#step-3-watch-the-photos-waiting-to-upload}

1. Di menu operator, bar atas nampilin **Uploads** dengan jumlah yang nunggu selama foto masih nunggu internet.
2. Tap **Admin Panel**. Di **Uploads**, tiap baris adalah satu sesi dengan statusnya: **Uploaded**, **Uploading**, **Waiting** atau **Failed**. Tap salah satu status untuk nampilin sesi itu saja, dan **Today**, **Yesterday**, **Last 7 days** atau **All** untuk milih harinya.
3. Begitu internet balik, booth ngirim sendiri. Mau kirim sekarang juga? Tap **Upload now**.

![Admin Settings dengan Uploads, jumlah Waiting dan Upload now ditandai](/img/docs/steps/tutorials-keep-running-offline--uploads.webp)

Gangguan jaringan gak pernah ngabisin jatah percobaan sebuah sesi: booth terus nyoba sampai internet balik. Sesi baru jadi **Failed** kalau Pixture berkali-kali nolak upload-nya. Tap **Retry failed** untuk nyoba lagi.

## Langkah 4: Cek sebelum reset, install ulang atau ganti komputer {#step-4-check-before-a-reset-reinstall-or-new-computer}

Foto yang nunggu cuma ada di komputer itu. Sebelum ada yang reset Windows, install ulang aplikasi, logout booth atau ganti komputer:

1. Sambungkan booth ke internet.
2. Buka **Admin Panel** dan pilih **All** di **Uploads**.
3. Pastikan **Waiting**, **Uploading** dan **Failed** semuanya 0, dan judulnya bilang "All uploaded". Kalau belum, tap **Upload now** (atau **Retry failed**) dan tunggu.
4. Baru setelah itu reset atau ganti komputernya.

## Cek Hasilnya {#check-it-worked}

- Setelah internet balik, menu operator nampilin **Internet: Online** dan **Uploads: up to date**.
- **Admin Panel > Uploads** nampilin sesi hari itu sebagai **Uploaded**.
- Sesinya ada di **Gallery** dashboard, dan link QR pelanggan sudah nampilin fotonya.

## Tips {#tips}

- **Booth gratis tetap gratis saat offline.** Mulai booth 1.2.51, booth yang sesinya gratis tetap melewati layar Payment saat offline, sama seperti saat online. Harga yang kamu pasang selama booth offline baru berlaku begitu booth online lagi.
- **Jangan pernah tap Clear failed buat "beres-beres".** Itu ngehapus foto-foto itu dari komputer selamanya, padahal belum pernah ter-upload. Coba **Retry failed** dulu.
- **Clean storage cuma aman untuk foto yang sudah ter-upload.** Ini ngehapus file foto yang disimpan di komputer; foto yang masih nunggu tetap disimpan, tapi **Print again** gak bisa dipakai lagi untuk sesi yang dibersihkan.
- **Booth bikin ruang sendiri** saat sisa disk di bawah 1 GB, dengan ngehapus file yang sudah ter-upload duluan, dan ngasih peringatan di menu dengan **Free Up Space** saat di bawah 3 GB.
- **Dashboard nampilin booth Offline** setelah lama gak ada kabar. Itu wajar saat internet putus; fotonya masuk begitu booth nyambung lagi.
- **Pasang tulisan kecil di dekat booth** kalau internet venue-nya jelek: foto muncul di link QR begitu booth online lagi.

## Kalau Ada Masalah {#troubleshooting}

| Masalah | Kenapa | Solusinya |
|---|---|---|
| **Uploads** masih "waiting" padahal internet sudah balik | Booth belum nyoba ulang | Tap **Upload now** di **Admin Panel** |
| Sesi nampilin **Failed** | Pixture berkali-kali nolak upload-nya | Tap **Retry failed**; kalau gagal lagi, kirim log booth ke support sebelum ngapa-ngapain |
| Layar Payment nampilin "Offline payment isn't set up on this booth yet." | Booth belum pernah online sejak di-setup, jadi belum punya kunci kode pembayaran | Sambungkan booth sekali, lalu coba lagi |
| Link QR pelanggan belum ada fotonya | Sesinya belum ter-upload | Online-kan booth dan tap **Upload now**; link-nya terisi sendiri |
| Foto hilang setelah komputer di-reset | Fotonya belum ter-upload sebelum reset | Langsung hubungi support dan jangan sentuh komputer itu lagi. Lihat [Photos are missing after the computer was reset](../troubleshooting/uploads-and-sharing.md#photos-are-missing-after-the-computer-was-reset) |
| Booth nampilin desain atau harga lama | Booth offline dan jalan pakai yang terakhir di-download | Online-kan; booth update sendiri |

## Terkait {#related}

- [Offline Mode](../desktop-app/offline-mode.md)
- [Kunci Booth dan Pakai Menu Operator](./operator-menu.md)
- [Masalah Upload dan Sharing](../troubleshooting/uploads-and-sharing.md)
- [Pix Pro on the Booth](../desktop-app/licence-on-the-booth.md)
