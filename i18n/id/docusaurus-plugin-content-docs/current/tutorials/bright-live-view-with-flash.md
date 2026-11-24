---
sidebar_position: 5
title: Live View Tetap Terang Saat Pakai Flash
description: Pakai flash atau studio strobe di booth dan tetap kasih pelanggan live view yang terang. Setelan kamera untuk flash, modelling light atau switch preview exposure kamera per merek, plus EXTERNAL FLASH untuk DSLR Canon.
tags: [tutorials, camera, flash, lighting, live view]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Live View Tetap Terang Saat Pakai Flash

Di tutorial ini kamu atur kamera untuk flash, bikin live view terang lagi biar pelanggan bisa lihat dirinya sendiri, dan pastikan flash nyala di setiap foto. Siapkan waktu sekitar 20 menit dengan kamera dan flash ada di depan kamu.

Foto pakai flash butuh ISO rendah dan shutter cepat. Dengan setelan itu, adegan kelihatan gelap sampai flash nyala, dan banyak kamera nampilin kegelapan itu di live view. Akibatnya pelanggan berpose di depan layar hitam atau buram, padahal fotonya sendiri hasilnya bagus.

## Kapan Dipakai

- **Kamu pakai speedlite atau studio strobe di booth** dan layar booth nampilin preview yang gelap.
- **Booth dengan tampilan studio atau acara pernikahan** yang butuh flash supaya fotonya tajam dan bersih, tapi pelanggan tetap butuh preview yang jelas untuk berpose.
- **DSLR Canon dengan trigger wireless** yang flash-nya nyala kalau kamu motret manual, tapi gak pernah nyala dari booth.

Gak perlu kalau pakai lampu continuous (panel LED, ring light, softbox): live view sudah nampilin foto persis seperti hasilnya. Webcam gak bisa nyalain flash, jadi pakai lampu continuous kalau pakai webcam.

## Sebelum Mulai

- Body kamera yang tersambung lewat USB: Canon, Sony, Nikon atau Fujifilm. Lihat [Kamera yang Didukung](../reference/supported-cameras.md).
- Flash: pop-up flash bawaan kamera, speedlite di hot shoe, atau studio strobe dengan trigger wireless.
- Pixture Photobooth 1.2.37 atau lebih baru untuk **EXTERNAL FLASH** (DSLR Canon).
- PIN menu, kalau booth-nya pakai PIN. Lihat [Kunci Booth dan Pakai Menu Operator](./operator-menu.md).

## Persiapan

- **Kamera di mode M** (manual), biar setelan dari booth gak berubah.
- **Fokus sekali, terus ubah lensa ke MF.** Booth mencet shutter tanpa fokus ulang, jadi fokuskan ke tempat pelanggan berdiri dan kunci.
- **Flash di power manual**, bukan TTL, biar setiap foto hasilnya sama. Mulai dari sekitar setengah power dan sesuaikan setelah tes.
- **Ketahui flash sync speed kamera kamu.** Angkanya ada di manual kamera, biasanya 1/125 sampai 1/200. Shutter yang lebih cepat dari itu bikin pita gelap melintang di foto.

## Langkah 1: Cek flash nyala dari kamera

1. Nyalain live view kamera (tombol **LV** di DSLR Canon).
2. Pencet tombol shutter pakai tangan.

Kalau flash-nya nyala, flash juga bakal nyala dari booth, soalnya booth mencet shutter dengan cara yang sama. Kalau flash cuma nyala saat live view mati, dan kameranya DSLR Canon, Langkah 4 yang jadi solusinya.

<!-- SHOT-NEEDED: hardware: camera back with live view on and the LV button, flash on the hot shoe -->

## Langkah 2: Atur kamera untuk flash di booth

1. Buka menu operator dan tap **Camera Settings**.
2. Ubah **ISO** ke 100 atau 200.
3. Ubah **SHUTTER** ke sync speed atau lebih lambat, misalnya **1/125**.
4. Ubah **APERTURE** ke f/5.6 sampai f/8, biar satu grup tetap tajam.
5. Ubah **WHITE BALANCE** ke **Flash**.
6. Tap **Save Camera Settings**.

![Camera Settings dengan ISO, SHUTTER, APERTURE, WHITE BALANCE dan Save Camera Settings ditandai](/img/docs/steps/tutorials-bright-live-view-with-flash--camera-exposure.webp)

Live view sekarang kelihatan gelap. Itu memang wajar, kok: langkah berikutnya bikin terang lagi.

## Langkah 3: Bikin live view terang

Pilih salah satu dari dua cara ini.

**Modelling light.** Nyalain lampu modelling bawaan strobe, atau tambahin lampu continuous kecil yang diarahkan ke tempat pelanggan berdiri. Preview jadi terang dan flash tetap jadi sumber cahaya utamanya. Cara ini jalan di semua kamera.

**Atau matiin preview exposure kamera.** Dengan begitu kamera nampilin live view yang terang apa pun setelannya. Cari setelannya di menu kamera itu sendiri:

<Tabs groupId="camera-brand">
<TabItem value="canon" label="Canon">

- **DSLR** (misalnya EOS 90D): di shooting menu, ubah **Expo. simulation** ke **Disable**. Canon: "The image is displayed at standard brightness, so it is easy to see." (gambar tampil dengan kecerahan standar, jadi gampang dilihat).
- **Mirrorless EOS R yang lebih baru** (misalnya EOS R7, R10): di shooting menu, ubah **Display simulation** ke **Disable**.

<!-- SHOT-NEEDED: hardware: Canon menu with Expo. simulation set to Disable -->

</TabItem>
<TabItem value="sony" label="Sony">

- **Body yang lebih baru** (misalnya a7 IV): **MENU > Shooting > Shooting Display > Live View Display Set.**, terus ubah **Live View Display** ke **Setting Effect OFF**. Manual Sony menyebut studio flash sebagai kasus yang bikin live view jadi gelap.
- **Body lama** (misalnya a6000): **MENU > Custom Settings > Live View Display > Setting Effect OFF**.

<!-- SHOT-NEEDED: hardware: Sony menu with Live View Display set to Setting Effect OFF -->

</TabItem>
<TabItem value="nikon" label="Nikon Z">

Di **Custom Settings menu**, ubah **Apply settings to live view** ke **Off**. Nomornya beda-beda tiap model (d6 di Z30, d7 di Zfc).

<!-- SHOT-NEEDED: hardware: Nikon Z Custom Settings menu with Apply settings to live view set to Off -->

</TabItem>
<TabItem value="fujifilm" label="Fujifilm">

Di **SET UP > SCREEN SET-UP**, ubah **PREVIEW EXP./WB IN MANUAL MODE** ke **OFF**. Manual Fujifilm menyarankan **OFF** "when using a flash" (saat pakai flash).

<!-- SHOT-NEEDED: hardware: Fujifilm SCREEN SET-UP menu with PREVIEW EXP./WB IN MANUAL MODE set to OFF -->

</TabItem>
</Tabs>

Kalau preview exposure mati, live view gak lagi nunjukin seberapa terang hasil fotonya. Nilai exposure dari foto tes, bukan dari layar.

## Langkah 4: Khusus DSLR Canon: nyalain EXTERNAL FLASH

Beberapa DSLR Canon gak mau nyalain flash non-Canon atau trigger wireless selama live view jalan. Manual Canon EOS 600D bilang: "A non-Canon flash will not fire during Live View shooting." (flash non-Canon gak akan nyala saat motret dengan Live View). Booth bisa menjeda live view untuk setiap foto biar flash-nya nyala.

1. Di **Camera Settings**, scroll ke bawah ke **CAPTURE** dan nyalain **EXTERNAL FLASH**.
2. Tap **Save Camera Settings**.

![Camera Settings di-scroll ke CAPTURE dengan switch EXTERNAL FLASH dan Save Camera Settings ditandai](/img/docs/steps/tutorials-bright-live-view-with-flash--external-flash.webp)

Sekarang setiap foto butuh sekitar 0,6 detik lebih lama dan preview berkedip sekali. Biarkan mati kalau flash sudah nyala tanpa ini: kamera mirrorless Canon (seri EOS R) gak butuh setelan ini. Dengan flash non-Canon, Canon minta shutter speed 1/200 atau lebih lambat.

## Langkah 5: Coba satu sesi tes

1. Tap **Back to Menu**, terus **Start Booth**.
2. Jalankan satu sesi foto penuh, dengan seseorang berdiri di tempat pelanggan nanti berdiri.
3. Cek foto di layar review dan hasil cetaknya. Terlalu gelap: naikkan power flash atau buka aperture satu stop. Terlalu terang: turunkan power flash.

## Cek Hasilnya

- Live view cukup terang buat pelanggan lihat dirinya sendiri dan berpose.
- Flash nyala di setiap foto dalam sesi, bukan cuma di foto pertama.
- Foto dan hasil cetak exposure-nya rata, tanpa pita gelap melintang.

## Tips

- **Ada foto yang gelap dalam satu rangkaian jepretan?** Flash belum selesai ngisi ulang. Perpanjang countdown antar-jepretan di Pix Design UI Editor (saat event: **Edit appearance** event > **Countdown**), atau turunkan power flash.
- **Speedlite dengan baterai AA makin lambat di event yang panjang.** Studio strobe, atau speedlite dengan battery pack eksternal, ngisi ulang lebih cepat.
- **Satu lampu besar yang lembut** sedikit di atas tinggi mata, di depan pelanggan, sudah cukup untuk kebanyakan booth. Dua lampu di sekitar 45 derajat di tiap sisi ngasih cahaya rata untuk grup.
- Taruh jendela terang dan lampu di belakang kamera, bukan di belakang pelanggan.

## Kalau Ada Masalah

| Masalah | Kenapa | Solusinya |
|---|---|---|
| Live view hitam atau gelap banget | Kamera nampilin preview exposure untuk flash (ISO rendah, shutter cepat) | Tambah modelling light, atau matiin preview exposure (Langkah 3) |
| Flash nyala kalau motret manual tapi gak dari booth | DSLR Canon gak nyalain flash atau trigger non-Canon selama live view | Nyalain **EXTERNAL FLASH** (Langkah 4) |
| Ada pita gelap melintang di foto | Shutter lebih cepat dari flash sync speed | Ubah **SHUTTER** ke 1/125 atau 1/160 |
| Foto gelap selang-seling | Flash masih ngisi ulang | Countdown antar-jepretan lebih lama, atau power flash diturunkan |
| Orang di barisan belakang grup kurang tajam | Aperture terlalu lebar untuk kedalaman grup | Ubah **APERTURE** ke f/8 |
| Foto jadi gak fokus setelah beberapa lama | Kamera fokus ulang, atau ada yang nyentuh lensa | Fokuskan ke tempat pelanggan berdiri dan ubah lensa ke **MF** |

## Terkait

- [Pencahayaan & Flash](../desktop-app/camera-setup/lighting-and-flash.md)
- [Camera Settings](../desktop-app/camera-setup/camera-settings.md)
- [Kunci Booth dan Pakai Menu Operator](./operator-menu.md)
