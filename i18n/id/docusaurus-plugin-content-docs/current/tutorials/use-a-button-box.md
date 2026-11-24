---
sidebar_position: 26
title: Pakai Button Box
description: Biarkan pelanggan motret, foto ulang dan lanjut pakai tombol fisik, clicker atau foot switch. Atur tombol Capture, Retake dan Keep sekali di dashboard, dan semua booth di akunmu ngikut.
tags: [tutorials, button box, button keys, hardware, capture]
---

# Pakai Button Box

Di tutorial ini kamu colok button box USB, clicker atau foot switch ke komputer booth, kasih tahu dashboard tombol mana yang jadi **Capture**, **Retake** dan **Keep**, lalu tes di satu sesi. Tombolnya diatur sekali untuk seluruh akun: semua desain dan semua booth pakai tombol yang sama. Siapkan waktu sekitar 15 menit.

## Kapan Dipakai {#when-to-use-it}

- **Booth self-service di mall atau self photo studio** dengan tombol arcade besar di meja: pelanggan langsung tahu harus pencet apa, dan layar sentuh tetap bersih.
- **Booth yang layarnya gak terjangkau,** kayak mirror booth yang tinggi atau layar di balik kaca: tombol berkabel atau foot switch jadi gantinya.
- **Foto rombongan di sewa event:** clicker wireless di tangan tamu, jadi gak ada yang lari-lari balik ke layar.
- **Photobox pop-up** yang button box-nya jadi bagian dari kabinet buatanmu.

Gak perlu kalau pelanggan sudah nyaman tap layar. Dan kalau kamu mau tombol shutter kamera sendiri yang motret, pakai **Trigger** **Camera shutter** di desain: dengan itu, button keys dimatikan.

## Sebelum Mulai {#before-you-start}

- Paket apa saja. Tombolnya disimpan untuk akun, terpisah dari desain.
- Komputer booth (Mac atau Windows) dengan Pixture Photobooth **1.2.49 atau lebih baru**. Gak bisa di HP atau tablet.
- Akun dashboard yang boleh ngedit desain di **Pix Design**.
- Perangkat tombolnya. Perangkat ini harus ngetik satu tombol keyboard di komputer: kebanyakan button box arcade USB, clicker presentasi dan foot switch USB bisa.

## Persiapan {#prepare}

### Pilih tombol yang gak bakal kepencet gak sengaja {#pick-keys-nobody-types-by-accident}

Booth dengerin tombol keyboard yang diketik oleh button box. Tombol yang boleh: **F1** sampai **F24**, **Space**, **Enter**, **Num Enter**, **Page Up**, **Page Down**, tombol panah, **Home**, **End**, huruf, angka dan angka numpad. Kombinasi Ctrl, Cmd dan Alt, Esc, Tab, serta tombol volume atau media gak bisa dipakai.

- **Paling bagus: F13 sampai F24.** Gak ada keyboard yang ngetik tombol ini gak sengaja, dan macOS gak memakainya. Di Mac, hindari F1 sampai F12: macOS pakai beberapa untuk Mission Control, Show Desktop dan kecerahan layar.
- **Clicker presentasi** biasanya ngetik **Page Up** dan **Page Down**: pakai satu untuk **Capture** dan satu lagi untuk **Keep**.
- **Button box atau foot switch yang bisa diprogram:** atur tombolnya pakai aplikasi dari mereknya, misalnya F13, F14 dan F15.

### Tes tombolnya dulu {#test-the-button-first}

Colok box-nya ke komputer booth, buka text editor apa saja, lalu pencet tiap tombol. Tombol yang diset ke huruf, angka atau Space bakal ngetik karakter itu. Tombol F gak ngetik apa-apa di text editor, jadi tes yang itu langsung di booth di Langkah 4. Box yang gak ngetik apa pun di semua tombol berarti gak bertindak sebagai keyboard, dan booth gak bisa memakainya.

## Langkah 1: Buka halaman Capture di UI Editor {#step-1-open-the-capture-page-in-the-ui-editor}

1. Di dashboard, klik **Pix Design**, lalu **UI Editor**.
2. Buka desain mana saja. Tombolnya sama untuk semua desain, jadi bebas yang mana.
3. Buka halaman **Capture**, lalu klik bagian kanvas yang kosong biar gak ada block yang terpilih.
4. Di panel kanan, cari **Button keys** ("All designs and booths"). Isinya tiga baris: **Capture**, **Retake** dan **Keep**.

<!-- SHOT-NEEDED: dashboard: UI Editor Capture page with the Button keys section (Capture, Retake, Keep) marked; the existing pix-design-ui-editor-capture shot predates Button keys -->

## Langkah 2: Pencet tiap tombol untuk ngatur key-nya {#step-2-press-each-button-to-set-its-key}

1. Klik kolom di baris **Capture**. Kolomnya nampilin **Press your button…**
2. Pencet tombol di box-nya. Key langsung tersimpan dan muncul **Saved for all designs**.
3. Lakukan hal yang sama untuk **Retake** dan **Keep**.

Box-nya gak dicolok di komputer yang lagi kamu pakai? Klik panah kecil di sebelah kolom dan pilih key dari daftar. Klik **×** untuk ngehapus key. Tekan Esc untuk berhenti dengerin tanpa nyimpen.

Satu key cuma bisa dipakai di satu aksi. Key yang gak diizinkan nampilin "That key can't be used".

## Langkah 3: Biarkan booth ngambil setelannya {#step-3-let-the-booths-pick-it-up}

Booth yang online dapat key baru dengan sendirinya, tanpa restart. Booth yang lagi di tengah sesi ngambilnya waktu balik ke layar Home.

## Langkah 4: Tes satu sesi pakai tombol {#step-4-test-a-session-with-the-buttons}

1. Mulai sesi biasa di booth.
2. Di layar Capture, pencet **Capture**: foto diambil, sama seperti tap shutter di layar.
3. Pencet **Retake** untuk ngulang foto itu, dan **Keep** untuk nyimpen fotonya dan lanjut ke foto berikutnya, atau selesai.
4. Tahan satu tombol: tombolnya cuma jalan sekali, gak berulang-ulang.

<!-- SHOT-NEEDED: hardware: arcade button box with three buttons labelled Capture, Retake and Keep next to the booth screen -->

## Cek Hasilnya {#check-it-worked}

- Tiap tombol jalanin aksinya di layar Capture booth.
- Tombolnya jalan di semua booth di akun itu, dan di event juga.
- Nahan tombol, atau tombol murah yang mantul, gak pernah ngambil dua foto.

## Tips {#tips}

- **Kasih label di tombolnya** ("Foto", "Ulang", "Lanjut") pakai kata yang dipahami pelangganmu.
- **Retake gak ngapa-ngapain** kalau desainnya nyembunyiin tombol Retake, atau di event yang langkah Retake-nya mati. Itu memang disengaja.
- **Tombol cuma jalan di layar Capture.** Tombolnya gak mulai sesi dari layar Home: itu urusan trigger mulai di layar Start desain kamu. Kalau satu key diatur di dua tempat, yang diatur di **Button keys** yang menang di layar Capture.
- **Ada keyboard di booth?** Hindari huruf dan **Space** sebagai key tombol, biar pelanggan iseng yang ngetik gak motret.
- **Software coin atau card reader yang ngetik key** (misalnya F13 untuk sesi berbayar) jalan di layar Start dan Payment. Jangan kasih key yang sama ke tombol. Lihat [Connect a Coin or Card Reader](./connect-a-coin-or-card-reader.md).

## Kalau Ada Masalah {#troubleshooting}

| Masalah | Kenapa | Solusinya |
|---|---|---|
| Pencet tombol gak ngaruh apa-apa di booth | Aplikasi booth lebih lama dari 1.2.49, atau box-nya gak ngetik key | Update aplikasinya; tes box di text editor (Persiapan) |
| Tetap gak ngapa-ngapain, padahal sudah 1.2.49 | **Trigger** desainnya **Camera shutter** | Pakai trigger lain; dengan **Camera shutter**, booth nyerahin pemotretan ke kamera |
| "That key can't be used" | Ctrl, Cmd atau Alt ikut ditekan, atau key-nya gak ada di daftar yang diizinkan | Program box-nya ke F13 sampai F24, atau pilih key dari daftar lewat panah |
| "Two buttons can't use the same key." | Key itu sudah dipakai di baris lain | Hapus dulu di sana, atau pakai key lain |
| **Retake** gak jalan | Retake dimatikan di desain atau di event | Nyalakan tombol atau langkah Retake, atau biarkan Retake kosong |
| Di Mac, tombol malah buka Mission Control atau ngubah kecerahan | macOS pakai F-key itu | Pakai F13 ke atas |
| Key sudah diganti di dashboard, tapi satu booth masih pakai yang lama | Booth-nya offline atau lagi di tengah sesi | Online-kan dan balik ke layar Home |

## Terkait {#related}

- [Button keys](../dashboard/pix-design/button-keys.md)
- [UI Editor](../dashboard/pix-design/ui-editor.md)
- [Atur Tampilan Layar Booth](./customise-kiosk-screens.md)
- [Connect a Coin or Card Reader](./connect-a-coin-or-card-reader.md)
