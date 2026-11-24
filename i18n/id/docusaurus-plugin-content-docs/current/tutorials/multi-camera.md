---
sidebar_position: 21
title: Pakai Dua Kamera atau Lebih
description: Pasang dua sampai enam kamera di satu booth Kiosk, kasih nama tiap angle di dashboard, pasangkan kamera ke tiap angle di booth, dan biarkan pelanggan milih kamera sebelum setiap foto.
tags: [tutorials, camera, multi camera, kiosk, pix pro, hardware]
---

# Pakai Dua Kamera atau Lebih

Di tutorial ini kamu nambah kamera kedua di booth Kiosk, misalnya satu sejajar mata dan satu dari atas, kasih nama angle-nya di dashboard, terus kasih tahu booth kamera mana yang megang angle mana. Pelanggan lalu milih angle sebelum setiap foto. Siapkan waktu sekitar 20 menit setelah kedua kamera terpasang dan tercolok.

## Kapan Dipakai {#when-to-use-it}

- **Booth self-service di mall atau self photo studio** yang mau nawarin foto "high angle" atau "full body" selain close-up biasa, biar pelanggan balik lagi untuk nyobain angle lain.
- **Studio multi-booth** dengan satu set besar: kamera lebar untuk rombongan dan kamera rapat untuk pasangan, di komputer yang sama.
- **Photobox pop-up dengan webcam di atas** di samping DSLR utama, untuk foto top-down yang seru.

Bukan untuk event: Multi camera cuma jalan di booth Kiosk. Kalau kamu cuma mau kamera diputar atau di-zoom, satu kamera dengan **CAMERA ROTATION** atau **DIGITAL ZOOM** sudah cukup.

## Sebelum Mulai {#before-you-start}

- **Pix Pro** di komputer booth. Di Pix Starter, kartu di dashboard bertuliskan "Put Pix Pro on this booth's computer to use camera angles."
- Booth **Kiosk** di komputer Mac atau Windows dengan Pixture Photobooth **1.2.41 atau lebih baru**. Gak bisa di HP atau tablet.
- Dua kamera atau lebih, masing-masing sudah jalan sendiri-sendiri. Campuran body kamera, webcam dan capture card apa pun bisa; satu booth cuma bisa pakai satu Nikon. Sambungkan tiap kamera dulu lewat [Sambungkan Kamera](./connect-a-camera.md).
- PIN menu, kalau booth-nya pakai PIN.

## Persiapan {#prepare}

- **Satu port USB per kamera, langsung di komputer.** Jangan pakai hub. Setiap kamera butuh sambungan yang stabil.
- **Semua kamera pakai listrik** dan auto power off dimatikan. Booth membangunkan kamera saat pelanggan memilihnya; kamera yang tidur atau berhenti di pesan baterai gak bisa dibangunin.
- **Dua body dengan model yang sama?** Namanya sama di daftar. Kasih label di tiap kabel dan port-nya, biar angle-nya gak ketuker setelah ada yang nyabut kabel.
- **Gambar untuk pelanggan (opsional):** foto kecil per angle (PNG, JPG atau WebP, maksimal 5 MB) yang nunjukin hasil angle itu. Tanpa gambar, kartunya nampilin huruf angle-nya (A, B, C).

## Langkah 1: Nyalakan Multi camera di dashboard {#step-1-switch-on-multi-camera-in-the-dashboard}

1. Klik **Booths** di sidebar dan buka booth-nya.
2. Buka tab **Settings**.
3. Di kartu **Multi camera** ("Guests pick a camera before every shot."), nyalakan switch-nya. Dua kamera muncul: **Cam A** dan **Cam B**.
4. Ganti namanya jadi yang dibaca pelanggan, misalnya "Front" dan "High angle". Klik kotak gambar di satu baris untuk nambah gambarnya. Pakai **+ Add camera** untuk nambah (maksimal 6), panah untuk ngatur urutan, dan switch di tiap baris untuk nyembunyiin sementara.
5. Klik **Save**. Kartu ini butuh minimal dua kamera yang nyala; kalau kurang, muncul "Add at least two cameras."

![Tab Settings booth dengan Booths, tab Settings, switch Multi camera dan Save ditandai](/img/docs/steps/tutorials-multi-camera--dashboard-switch.webp)

Kamera pertama di daftar jadi kamera utama booth: kamera yang nyala di layar Home dan di awal setiap sesi. Kalau nanti switch utama dimatikan, daftarnya tetap tersimpan.

## Langkah 2: Pasangkan kamera ke tiap angle di booth {#step-2-give-each-angle-its-camera-on-the-booth}

Booth ngambil daftar baru saat online, paling lambat waktu balik ke layar Home.

1. Di booth, buka menu operator dan tap **Camera Settings**. Daftar **CAMERA ANGLES** sekarang muncul di atas **CAMERA DEVICE**, satu baris per kamera dari dashboard.
2. Di baris pertama (di sini **Front**), buka **Choose a camera** dan pilih kamera untuk angle itu.
3. Lakukan hal yang sama di baris lain. Kamera yang sudah dipakai di satu baris gak ditawarin di baris lain ("That camera is on another angle.").
4. Tap satu baris untuk buka kameranya di preview, terus atur zoom, rotasi dan exposure-nya. Tiap kamera nyimpen setelannya sendiri. Tap **Save Camera Settings** setelah tiap kamera.

![Camera Settings dengan baris Front dan High angle di CAMERA ANGLES dan Save Camera Settings ditandai](/img/docs/steps/tutorials-multi-camera--camera-angles.webp)

Baris bertanda **not connected** artinya kameranya kecabut atau mati. **Preflight Check** booth juga nampilin tiap angle.

## Langkah 3: Coba sesi sebagai pelanggan {#step-3-run-a-session-as-a-customer}

1. Tap **Back to Menu**, terus **Start Booth**, dan mulai sesi foto biasa.
2. Sebelum tiap foto, **Choose your angle** muncul di bawah layar capture, satu kartu per kamera. Tap satu kartu: live view pindah ke kamera itu. Lalu mulai fotonya.
3. Coba tiap angle sekali, dan cek tiap foto di layar review dan di hasil cetak.

<!-- SHOT-NEEDED: booth: Capture screen with the Choose your angle cards (needs a rendered capture page with two angles) -->

## Cek Hasilnya {#check-it-worked}

- **Camera Settings > CAMERA ANGLES** nampilin semua baris dengan kamera, dan gak ada yang **not connected**.
- **Choose your angle** muncul sebelum setiap foto, dengan nama dan gambar kamu.
- Tiap kartu mindahin live view ke kamera yang benar.

## Tips {#tips}

- **Pilihannya nempel.** Pelanggan yang gak pernah tap kartu bakal motret semua foto di kamera yang sama, jadi taruh angle terbaikmu paling atas.
- **Tiap foto nunggu pelanggan.** Dengan Multi camera nyala, foto gak countdown sendiri: pelanggan mulai tiap foto setelah milih angle. Kasih waktu sesi sedikit lebih panjang kalau desainmu pakai session timer.
- **Gak ada kamera tetap per foto.** Template gak bisa ngatur "foto 1 di Front, foto 2 di High angle": pelanggan milih setiap kali.
- **Di mana gak muncul:** booth event, sesi Video, GIF dan live photo, mode AI, Studio dan Scratch. Semuanya pakai kamera utama.
- **Terangi setiap angle.** Kamera dari atas lihat ubun-ubun dan lantai. Cek tiap angle dengan orang berdiri di posisi pelanggan.

## Kalau Ada Masalah {#troubleshooting}

| Masalah | Kenapa | Solusinya |
|---|---|---|
| Switch **Multi camera** gak ada | Komputer booth masih Pix Starter | Pasang Pix Pro di komputernya: kartunya ada link ke **Computers** |
| **CAMERA ANGLES** gak muncul di booth | Booth belum ngambil daftarnya, atau ini booth event atau HP | Biarkan booth online dan balik ke Home; cek booth-nya Kiosk di komputer |
| **Choose your angle** gak pernah muncul | Kurang dari dua angle yang punya kamera tersambung, atau bukan sesi foto biasa | Kasih kamera di tiap baris (Langkah 2), cek gak ada yang **not connected**, dan pakai sesi mode Photo |
| "That camera is not ready. Pick another." | Booth gak bisa buka kamera itu | Cek kameranya nyala dan bangun; sesi balik ke kamera sebelumnya |
| "Hmm, the camera didn't respond" setelah satu foto | Kamera tidur atau berhenti di pesan baterai | Pakai listrik dengan coupler resmi merek kamera, auto power off **Disable**, port USB langsung |
| Dua kamera model sama ketuker angle-nya | Kabelnya ketuker port | Tap tiap baris, cek preview-nya, dan colok balik kabel ke port berlabelnya |

## Terkait {#related}

- [Multi Camera](../desktop-app/camera-setup/multi-camera.md)
- [Sambungkan Kamera](./connect-a-camera.md)
- [Camera Settings](../desktop-app/camera-setup/camera-settings.md)
- [Booth Management](../dashboard/booth-management.md)
