---
sidebar_position: 1
title: Jalankan Sesi Studio Mode
description: Siapkan booth Studio di mana pelanggan bebas foto selama waktu tertentu, terus milih sendiri foto mana yang masuk ke cetakan, lalu jalankan sesi pertama kamu.
tags: [tutorials, studio-mode, pix-design, ui-editor]
---

# Jalankan Sesi Studio Mode

Di tutorial ini kamu bikin desain layar Studio di Pix Design, atur berapa lama pelanggan boleh foto dan berapa foto maksimalnya, pasang desainnya di booth, terus jalankan satu sesi dari awal sampai cetak. Siapkan waktu sekitar 30 menit.

Di sesi foto biasa, booth ngambil satu foto untuk setiap slot di template. Di Studio mode, pelanggan bebas foto sebanyak yang mereka mau dalam batas waktu, simpan atau buang tiap foto, lalu pilih foto mana yang masuk ke slot mana. Semua foto yang mereka simpan masuk ke halaman share, bukan cuma yang tercetak.

## Kapan Dipakai {#when-to-use-it}

- **Self photo studio di mall.** Pelanggan bayar untuk 5 atau 10 menit, pose sepuasnya, terus pilih foto terbaik. Format ini sudah familiar buat pelanggan self photo studio.
- **Pojok foto dengan crew di event.** Fotografer pakai remote shutter untuk motret tiap grup, lalu tamu sendiri yang milih foto untuk cetakannya.
- **Pasangan, keluarga dan teman yang pengin bisa milih.** Mereka ambil 20 foto dan cetak 4 yang paling bagus.

Kurang cocok untuk booth pesta yang ramai dan antre: foto bebas makan waktu lebih lama per grup. Di situ pakai Photo mode biasa, yang ngambil satu foto per slot.

## Sebelum Mulai {#before-you-start}

- **Pix Pro.** Kamu bisa nyobain UI Editor di Pix Starter, tapi nyimpan project butuh Pix Pro.
- **Pixture Photobooth 1.1.98 atau lebih baru** di booth. Booth yang lebih lama tetap jalanin sesi foto biasa sampai di-update.
- **Template cetak yang sudah di-assign ke booth.** Jumlah slot fotonya jadi jumlah foto paling sedikit yang harus dimiliki pelanggan. Lihat [Design a Print Template](./design-a-print-template.md).
- Opsional: remote shutter, foot switch atau presenter clicker yang dicolok ke komputer booth.

## Persiapan {#prepare}

- **Tentukan lama sesi dari paket kamu.** Paket 5 menit butuh **Session length** 300 detik. Pelanggan juga butuh waktu untuk ngecek tiap foto, jadi sesi yang terlalu pendek bakal terasa buru-buru.
- **Pilih template dengan 2 sampai 4 slot.** Slot yang sedikit bikin proses milih cepat. Dengan 8 slot, pelanggan lebih lama di layar Assign photos daripada fotonya.
- **Tentukan siapa yang mencet shutter.** Pelanggan sendirian tinggal tap layar. Fotografer pakai remote clicker, atau tombol shutter kamera Canon.
- **Cek Output Settings booth.** Nyalakan **Singles Upload** di **Booths > booth > Settings > Output Settings** dan klik **Save Output Settings**. Kalau gak, pelanggan gak dapat semua foto yang mereka simpan.

## Langkah 1: Bikin UI project Studio {#step-1-create-a-studio-ui-project}

1. Buka **Pix Design > UI Editor**, klik **New Project** dan ketik **Project Name**.
2. Pilih **Orientation**: **Landscape** (1920×1080) atau **Portrait** (1080×1920), sesuai layar booth.
3. Di **Modes**, centang **Studio** ("Free shots, then pick the best for the layout."). Hapus centang **Photo** untuk booth khusus Studio, atau biarkan supaya pelanggan bisa milih Photo atau Studio di layar Start (ini butuh Pixture Photobooth 1.2.4 atau lebih baru).
4. Klik **Create Project**. Editor terbuka dengan tab **Assign photos** setelah **Review**.

![Modal New UI Project dengan Project Name, Orientation, tile Studio dan Create Project ditandai](/img/docs/steps/tutorials-studio-mode--new-project.webp)

## Langkah 2: Atur waktu dan batas foto {#step-2-set-the-time-and-the-photo-limit}

1. Buka tab **Capture**.
2. Di panel kanan, di bagian **Studio session**, isi **Session length** dalam detik. 0 artinya tanpa batas waktu.
3. Isi **Max photos**. 0 artinya tanpa batas, dan 40 adalah jumlah paling banyak yang bisa ditampung satu sesi.
4. Di **Camera trigger**, pilih **Trigger**: **Tap to start** (pelanggan tap live view), **Shutter button** (tombol di layar) atau **Camera shutter** (tombol shutter kamera sendiri yang ngambil foto, tanpa hitung mundur; ini butuh kamera Canon).

![Tab Capture di UI Editor dengan Session length, Max photos dan Trigger kamera ditandai](/img/docs/steps/tutorials-studio-mode--ui-editor-studio-session.webp)

Waktunya mulai jalan begitu layar Capture terbuka. Pelanggan gak pernah bisa selesai dengan foto lebih sedikit dari jumlah slot template: **Max photos** yang lebih kecil dinaikkan ke jumlah slot di booth, dan kalau waktunya habis sebelum itu, booth tetap lanjut foto sampai semua slot bisa terisi.

Sekalian atur blok-blok di halaman Capture. Halaman Capture Studio pakai kartu **Last Shot** (pelanggan tap untuk lihat semua foto sejauh ini dan **Remove** yang gak mereka mau), **Photo Counter**, **Session Timer** dan **Done Button**. Tombol Done baru muncul kalau foto pelanggan sudah cukup untuk semua slot.

## Langkah 3: Desain layar Assign photos {#step-3-design-the-assign-photos-screen}

1. Buka tab **Assign photos**. Isinya blok **Template Slots** (cetakan dengan slot-slotnya) dan blok **Photo Pool** (foto-foto pelanggan).
2. Klik salah satu blok untuk ngatur warna dan badge nomornya di panel kanan.
3. Klik **Save**.

![UI Editor di tab Assign photos dengan tab, blok Template Slots di Layers dan Save ditandai](/img/docs/steps/tutorials-studio-mode--assign-photos.webp)

## Langkah 4: Pasang desainnya di booth {#step-4-put-the-design-on-the-booth}

1. Buka **Booths**, buka booth-nya, lalu tab **UI Project**. Di dropdown, pilih project kamu di bawah **Studio mode** (atau di bawah **Several modes** kalau kamu tetap pakai Photo).
2. Klik **Save**. Tab-nya sekarang bertuliskan "Booth mode: Studio". Kalau aplikasi booth lebih lama dari 1.1.98, tab juga nampilin peringatan untuk update.

![Tab UI Project booth dengan dropdown project dan Save ditandai](/img/docs/steps/tutorials-studio-mode--booth-ui-project-tab.webp)

3. Untuk masang desain yang sama di beberapa booth sekaligus, klik **Assign to booths** di kartu project di **Pix Design > UI Editor**.

![Daftar UI Projects dengan Assign to booths ditandai di kartu project](/img/docs/steps/tutorials-studio-mode--pix-design-ui-projects.webp)

Booth ngambil desain baru saat lagi idle berikutnya, biasanya dalam hitungan detik.

## Langkah 5: Foto di sesi uji coba {#step-5-shoot-a-test-session}

1. Di booth, mulai sesi dan bayar (booth gratis langsung lewat pembayaran), lalu pilih template.
2. Di layar Capture, tap (atau pencet remote) untuk tiap foto. Setelah tiap foto, fotonya tampil dengan **Next** (simpan) dan **Retake** (buang dan foto ulang). Tiap foto yang kamu simpan masuk ke kartu di pojok; tap kartunya untuk lihat semua foto sesi ini dan hapus salah satunya.
3. Terus foto sampai waktunya habis, **Max photos** tercapai, atau kamu tap **Done**.

![Layar Capture Studio dengan kartu foto terakhir, jumlah foto, timer dan Done ditandai](/img/docs/steps/tutorials-studio-mode--studio-capture.webp)

## Langkah 6: Taruh fotonya di slot {#step-6-place-the-photos}

Layar Assign photos terbuka dengan slot kosong pertama sudah terpilih ("Tap a photo for slot 1").

1. Tap satu foto. Foto itu ngisi slot yang terpilih, dan slot kosong berikutnya otomatis terpilih. Untuk ngisi slot lain, tap slot itu dulu. Satu foto boleh ngisi lebih dari satu slot.
2. **Take more** balik ke Capture dengan foto-foto dan sisa waktunya, selama masih ada waktu dan tempat untuk foto lagi.
3. Begitu semua slot terisi, **Next** aktif. Tap, lalu Filter dan Sharing jalan seperti sesi biasa.

![Layar Assign photos di booth dengan satu foto di pool, Take more dan Next ditandai](/img/docs/steps/tutorials-studio-mode--assign-on-booth.webp)

Setelah semua slot terisi, tap foto yang sudah ditaruh untuk zoom, **Mirror** atau **Replace**, dan geser untuk mindahin crop-nya. Desain Assign photos kamu sendiri cuma ngubah tampilannya, cara tap-nya tetap sama.

## Cek Hasilnya {#check-it-worked}

- Setelah milih template, booth nampilin live view dengan timer dan kartu Last Shot, bukan satu slot satu slot.
- **Done** muncul begitu foto sudah cukup untuk semua slot.
- Setelah selesai foto, layar Assign photos nampilin template dan semua foto yang disimpan.
- Halaman share nampilin semua foto yang disimpan sebagai single, di samping cetakannya.

## Tips {#tips}

- **Sesi yang dipegang fotografer:** isi **Session length** dengan 0 dan biarkan fotografer tap **Done** atau berhenti di **Max photos**.
- **Self-service:** **Session Timer** yang kelihatan bikin pelanggan gak kaget waktu waktunya habis.
- **Remote clicker:** di tab **Start Screen**, centang **Space, S, Page Up, Page Down Keys** (atau **F13**) di session trigger. Selama sesi Studio, tombol-tombol itu ngambil foto. Untuk kasih button box tombol Capture, Retake dan Keep sendiri, lihat [Use a Button Box](./use-a-button-box.md).
- **Di event**, Studio jalan di layar event sendiri: foto-foto berjejer di bawah, dan tamu tap tanda x bulat di foto untuk menghapusnya (tanpa konfirmasi). Lihat [Run an Event](./run-an-event.md).
- Menu operator juga bisa dibuka di layar Assign photos: tap sudut kanan atas dua kali dalam 3 detik.

## Kalau Ada Masalah {#troubleshooting}

| Masalah | Kenapa | Solusinya |
|---|---|---|
| Booth masih foto satu per slot | Project belum disimpan atau belum dipasang di booth, atau aplikasinya lebih lama dari 1.1.98 | Simpan project, pilih di tab **UI Project** booth, update aplikasi booth |
| **Done** gak pernah muncul | Foto pelanggan masih lebih sedikit dari jumlah slot template | Lanjut foto, Done muncul begitu jumlahnya sama dengan slot |
| Sesi tetap jalan padahal waktu sudah habis | Foto belum cukup untuk semua slot | Ambil foto yang kurang, sesi selesai begitu sudah cukup |
| **Take more** gak ngapa-ngapain | Waktu sudah habis, atau **Max photos** atau batas 40 foto sudah tercapai | Taruh foto yang ada dan tap **Next** |
| Remote clicker gak jalan | Tombolnya belum dicentang sebagai session trigger | Centang **Space, S, Page Up, Page Down Keys** atau **F13** di tab Start Screen dan simpan |
| Halaman share cuma ada cetakan | **Singles Upload** mati di booth itu | Nyalakan di **Settings > Output Settings** booth |

## Terkait {#related}

- [Studio Sessions](../desktop-app/studio-sessions.md)
- [Biarkan Pelanggan Cek dan Foto Ulang](./review-and-retake.md)
- [Customise the Booth Screens](./customise-kiosk-screens.md)
- [UI Editor](../dashboard/pix-design/ui-editor.md)
