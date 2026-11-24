---
sidebar_position: 3
title: Jalankan Sesi Newspaper
description: Ubah booth portrait jadi booth koran, di mana pelanggan lihat dirinya live di halaman depan, geser untuk milih koran, bayar, foto, dan bawa pulang cetakan koran mereka sendiri.
tags: [tutorials, newspaper, pix-design, ui-editor, templates]
---

# Jalankan Sesi Newspaper

Di tutorial ini kamu bikin template koran, bikin desain layar Newspaper, pasang di booth portrait, dan jalankan satu sesi. Hasilnya, orang yang lewat bisa lihat dirinya live di halaman depan koran kamu, geser untuk milih koran, bayar, foto, lalu dapat cetakan koran mereka sendiri. Siapkan waktu sekitar 45 menit, sebagian besar untuk artwork-nya.

## Kapan Dipakai {#when-to-use-it}

- **Booth self-service di mall atau museum.** Halaman depan yang live itu daya tariknya: orang berhenti begitu lihat wajahnya sendiri di koran.
- **Booth kiosk yang dipasang di brand activation atau launching.** Korannya bawa headline brand dan tanggalnya, dan tiap pelanggan pulang bawa suvenir cetak.
- **Booth kiosk yang dipasang di pesta wedding atau ulang tahun.** "Edisi spesial" dengan cerita pasangan atau headline ulang tahun, selama booth-nya jalan sebagai kiosk dan bukan sebagai event Pixture.

Newspaper adalah mode booth untuk booth kiosk, dengan template khusus. Mode ini gak jalan di dalam event Pixture: untuk event, pakai [Jalankan Event](./run-an-event.md) dengan mode Photo dan template bergaya koran.

## Sebelum Mulai {#before-you-start}

- **Pix Pro.** Nyimpan template dan UI project butuh Pix Pro.
- **Pixture Photobooth 1.2.19 atau lebih baru.** Booth yang lebih lama jalanin desainnya sebagai photobooth biasa.
- **Layar portrait.** Layar Newspaper cuma portrait (1080×1920).
- **Printer yang bisa nyetak ukuran kertas yang kamu desain.** A3 adalah ukuran yang disarankan untuk template koran, tapi ukuran apa pun bisa.

## Persiapan {#prepare}

- **Desain artwork sebagai PNG dengan lubang foto transparan.** Taruh nama koran, headline, tanggal dan kolom-kolom teks di artwork-nya. Booth cuma nambahin foto, gak ada kolom teks yang diisi di booth.
- **Slot 1 adalah kamera live.** Di layar Start kamera tampil di slot foto pertama, jadi jadikan slot 1 foto besar di halaman depan. Slot tambahan difoto satu per satu setelahnya.
- **Bikin dua atau tiga koran.** Pelanggan geser di antara koran-koran itu di layar Start, dan pilihan bikin lebih banyak orang berhenti.
- **Bikin wajahnya besar.** Halaman koran isinya kebanyakan teks; foto halaman depan minimal sepertiga halaman kebaca jelas dari seberang lorong.

## Langkah 1: Bikin template koran {#step-1-make-a-newspaper-template}

1. Buka **Pix Design > Template Editor** dan klik **New Project**.
2. Di **Media Type**, pilih **Newspaper** ("Newspaper booths"). Petunjuknya bilang "Shows only on Newspaper booths. A3 recommended, any size works." dan **A3** langsung terpilih.
3. Ganti **Print Size** kalau printer kamu butuh ukuran lain.
4. Upload PNG kamu di **Template PNG** dan klik **Create Project**.

![Create Template Project dengan Newspaper, A3, Template PNG dan Create Project ditandai](/img/docs/steps/tutorials-newspaper-session--create-template.webp)

Lalu tandai slot fotonya di template editor dan simpan, sama seperti template lain. Lihat [Design a Print Template](./design-a-print-template.md).

**Artwork-nya sudah jadi template?** Buka, lalu ubah **Media Type** jadi **Newspaper** di panel kanan editor.

![Template editor dengan dropdown Media Type ditandai](/img/docs/steps/tutorials-newspaper-session--media-type.webp)

Template Newspaper cuma tampil di booth Newspaper, dan booth Newspaper cuma nawarin template Newspaper.

## Langkah 2: Bikin UI project Newspaper {#step-2-create-a-newspaper-ui-project}

1. Buka **Pix Design > UI Editor**, klik **New Project** dan ketik **Project Name**.
2. Di **Modes**, centang **Newspaper** ("Guests see themselves in the newspaper, pay, then shoot."). Mode ini gak bisa digabung dengan mode lain, dan otomatis ngubah **Orientation** jadi **Portrait**.
3. Klik **Create Project**.

![Modal New UI Project dengan Project Name, tile Newspaper dan Create Project ditandai](/img/docs/steps/tutorials-newspaper-session--new-project.webp)

Booth menggambar layar Start dan Capture sendiri, dengan koran kamu di tengah dan logo dari **Pix Design > Brand** di band atas. Editor nampilin preview-nya. Layar Payment, Filter, Adjust dan Sharing kamu desain seperti project biasa. Klik **Save**.

## Langkah 3: Pasang di booth {#step-3-put-it-on-the-booth}

1. Buka **Booths**, buka booth-nya, lalu tab **UI Project**.
2. Pilih project kamu di bawah **Newspaper mode** dan klik **Save**. Tab-nya bertuliskan "Booth mode: Newspaper".

<!-- SHOT-NEEDED: dashboard: booth UI Project tab with the dropdown on Newspaper mode, Save, and the "Booth mode: Newspaper" line -->

Kalau tab-nya bilang "No Newspaper templates yet", balik ke Langkah 1: booth butuh minimal satu template dengan **Media Type** **Newspaper**. Kalau bilang "Update this booth to app 1.2.19 or newer to run Newspaper mode", update aplikasi booth.

## Langkah 4: Jalankan sesi uji coba {#step-4-run-a-test-session}

1. Di booth, layar Start nampilin koran kamu dengan kamera live di foto halaman depan. Geser ke kiri atau kanan untuk lihat koran lainnya.
2. Tap **Start**.
3. Bayar, kalau booth-nya berbayar. Setelah bayar, koran yang dipilih tampil lagi: geser untuk ganti, lalu tap **Use this one**. Kalau gak ada yang tap, booth lanjut dengan koran yang lagi tampil.
4. Tap layar (atau **Capture**). Hitung mundur jalan di atas slot foto, lalu muncul **Retake** dan **Next**. Tiap foto ngisi slotnya dan kamera pindah ke slot berikutnya.
5. Sesi lanjut ke layar Adjust dan Filter kalau desain kamu nyalakan, lalu Sharing dengan cetakan dan QR code.

<!-- SHOT-NEEDED: booth: the Newspaper Start screen in portrait with the live camera in the front-page photo, the dots and Start -->

## Cek Hasilnya {#check-it-worked}

- Layar Start nampilin koran dengan kamera live di slot 1, bukan layar Start biasa.
- Geser ganti korannya, dan titik-titik di bawahnya ikut berpindah.
- Cetakannya adalah koran dengan foto pelanggan di dalamnya.
- Booth kamu yang lain gak nawarin template Newspaper.

## Tips {#tips}

- **Taruh booth di jalur orang lewat.** Halaman depan yang live kerjanya kayak cermin: orang mutusin berhenti dalam beberapa langkah.
- **Ganti headline tiap event atau musim** dengan upload PNG baru lewat **Re-upload** di template editor, lalu cek slotnya masih pas di lubang foto.
- **Booth koin atau uang tunai** yang mulai cuma dari F13: tap cuma buat geser koran, dan tombol Start disembunyikan. Pelanggan bayar dulu, baru sesinya mulai.

## Kalau Ada Masalah {#troubleshooting}

| Masalah | Kenapa | Solusinya |
|---|---|---|
| Booth nampilin layar Start biasa | Project belum dipasang di booth, atau aplikasinya lebih lama dari 1.2.19 | Pilih project di tab **UI Project** booth dan update aplikasinya |
| "No newspaper templates yet" di booth | Belum ada template dengan **Media Type** **Newspaper** | Ubah di template editor dan simpan |
| Kamera live ada di tempat yang salah | Slot 1 bukan foto halaman depan | Urutkan ulang slot di template editor supaya foto besar jadi slot 1 |
| Tap gak memulai sesi | Session trigger di Start Screen gak termasuk **Touch Screen** | Centang **Touch Screen**, atau mulai dari sistem koin atau kartu kamu |
| Geser gak ngapa-ngapain | Booth cuma punya satu template Newspaper | Tambah koran kedua |

## Terkait {#related}

- [Design a Print Template](./design-a-print-template.md)
- [Customise the Booth Screens](./customise-kiosk-screens.md)
- [UI Editor](../dashboard/pix-design/ui-editor.md)
- [Creating Templates](../dashboard/pix-design/creating-templates.md)
