---
sidebar_position: 72
title: Kunci Tablet Android Permanen
description: Pin Pixture Photobooth di tablet Android, jadikan aplikasi Home tablet supaya terbuka setelah restart, dan untuk tablet booth khusus jadikan device owner lewat adb.
tags: [tutorials, android, tablet, kiosk, lock, device-owner]
---

# Kunci Tablet Android Permanen

Di tutorial ini kamu menjaga tamu tetap di dalam aplikasi Pixture Photobooth di tablet Android. Setup biasa 2 menit. Setup khusus sekitar 15 menit dan butuh komputer, tapi kuncinya jalan tanpa konfirmasi, juga setelah restart.

## Setup Biasa: Screen Pinning dan Aplikasi Home {#normal-setup-screen-pinning-and-home-app}

1. Buka aplikasi dan mulai mode tamu, misalnya Photo Booth (Kiosk). Aplikasi mem-pin layar. Pertama kali, **Android minta konfirmasi**. Ketuk untuk konfirmasi.
2. Di aplikasi, buka **Settings** lalu pilih **Open Pixture when this tablet starts**. Android membuka pilihan aplikasi Home. Pilih **Pixture Photobooth**.
3. Supaya aplikasi mulai di mode yang benar, atur juga **Open the app in**. Lihat [Buka Aplikasi Langsung ke Satu Mode](./open-the-app-in.md).

Tamu tidak bisa keluar dari layar yang di-pin. Operator melepas pin dengan Menu PIN. Setelah restart tablet membuka aplikasi, aplikasi membuka mode, dan Android mungkin minta konfirmasi pin lagi.

## Tablet Khusus: Device Owner {#dedicated-tablet-device-owner}

Pakai ini untuk tablet yang cuma menjalankan booth. Begitu Pixture Photobooth jadi device owner, dia mengunci sendiri tanpa bertanya.

Kamu butuh:

- Komputer dengan **adb** (Android platform-tools) dan kabel USB.
- Tablet yang sudah **factory reset** dan **belum ada akun Google**. Android cuma mengizinkan ini di perangkat baru.
- Pixture Photobooth terpasang di tablet, dan USB debugging menyala.

Langkahnya:

1. Factory reset tablet. Lewati penambahan akun Google saat setup.
2. Pasang Pixture Photobooth dan nyalakan **Developer options > USB debugging**.
3. Sambungkan tablet ke komputer dan jalankan:

```
adb shell dpm set-device-owner io.pixture.photobooth/id.pixapp.pixMobile.PixDeviceAdminReceiver
```

4. Kalau muncul pesan device owner berhasil diatur, buka aplikasi. Dia mengunci tanpa konfirmasi, juga setelah restart.

Kalau perintahnya gagal, biasanya masih ada akun Google atau user lain di tablet. Factory reset lagi dan coba ulang sebelum menambah apa pun.

## Membatalkan {#undo-it}

:::warning
Device owner tidak bisa dihapus dari Settings, dan `adb shell dpm remove-active-admin io.pixture.photobooth/id.pixapp.pixMobile.PixDeviceAdminReceiver` cuma jalan untuk admin biasa, bukan device owner.
:::

Untuk mengembalikan tablet jadi biasa, **factory reset**. Semua isinya terhapus. Pikirkan ini sebelum memilih setup ini.
