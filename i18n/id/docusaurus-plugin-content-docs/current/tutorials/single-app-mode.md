---
sidebar_position: 71
slug: /single-app-mode
title: Kunci iPad dengan Single App Mode
description: Jaga tamu tetap di dalam Pixture Photobooth di iPad dengan Guided Access, atau bikin iPad membuka aplikasi lagi sendiri setelah restart dengan Single App Mode dan Apple Configurator di Mac.
tags: [tutorials, ipad, ios, kiosk, lock, single-app-mode]
---

# Kunci iPad dengan Single App Mode

Di tutorial ini kamu menjaga tamu tetap di dalam aplikasi Pixture Photobooth di iPad. Ada dua cara: **Guided Access** untuk pemakaian sehari-hari, dan **Single App Mode** untuk iPad yang harus balik ke booth sendiri setelah restart.

Aplikasi sendiri tidak bisa mengunci iPad. Apple cuma mengizinkannya lewat Guided Access (kamu yang mulai) atau Single App Mode (diatur dari Mac).

## Pilih yang Mana {#which-one-to-pick}

| | Guided Access | Single App Mode |
|---|---|---|
| Diatur di | iPad-nya langsung | Mac dengan Apple Configurator |
| Balik ke aplikasi setelah restart | Tidak, kamu mulai lagi | Ya |
| Menghapus iPad | Tidak | Sekali, saat iPad disupervisi |
| Pakai untuk | Kebanyakan booth | iPad yang susah kamu datangi setelah restart |

Dua-duanya bisa digabung dengan [Buka Aplikasi Langsung ke Satu Mode](./open-the-app-in.md), jadi aplikasi juga terbuka di Kiosk sendiri.

## Opsi 1: Guided Access {#option-1-guided-access}

1. Di iPad, buka **Settings > Accessibility > Guided Access** lalu nyalakan.
2. Ketuk **Passcode Settings > Set Guided Access Passcode** dan pilih passcode. Ini passcode iOS, bukan Menu PIN kamu.
3. Buka Pixture Photobooth dan tunggu sampai layar booth muncul.
4. Klik tiga kali tombol atas (atau tombol Home di iPad lama), lalu ketuk **Start**.

Untuk keluar, klik tiga kali lagi dan masukkan passcode Guided Access. Setelah restart, ulangi langkah 3 dan 4.

## Opsi 2: Single App Mode dengan Apple Configurator {#option-2-single-app-mode-with-apple-configurator}

Kamu butuh Mac dengan **Apple Configurator** (gratis di Mac App Store), kabel USB, dan Pixture Photobooth sudah terpasang di iPad.

:::warning
Untuk Single App Mode, iPad harus **disupervisi**, dan supervisi **menghapus iPad sekali**. Cadangkan dulu yang kamu butuhkan.
:::

1. Sambungkan iPad ke Mac dan buka Apple Configurator.
2. Pilih iPad lalu pilih **Prepare**. Ikuti langkahnya untuk supervisi. iPad terhapus dan restart.
3. Atur iPad lagi dan pasang Pixture Photobooth. Masuk ke akunmu.
4. Di Apple Configurator, pilih iPad, lalu **Actions > Advanced > Start Single App Mode**.
5. Pilih **Pixture Photobooth** dan konfirmasi.

Sekarang iPad cuma menampilkan aplikasi itu dan kembali ke sana setelah restart. Untuk berhenti, pakai **Actions > Advanced > Stop Single App Mode** di Apple Configurator.

Nama menu di Apple Configurator bisa berubah antar versi. Kalau ada langkah yang beda, cari "Single App Mode" di panduan Apple Configurator dari Apple.
