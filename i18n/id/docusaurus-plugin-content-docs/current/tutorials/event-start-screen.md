---
sidebar_position: 2.8
title: Desain Layar Start Event
description: Atur layar pertama yang dilihat tamu di event kamu (background, nama, logo, warna dan tombol mode), atur hitung mundur dan timer-nya, dan preview layar penuh sebelum booth mulai jalan.
tags: [tutorials, events, start screen, appearance]
---

# Desain Layar Start Event

Di tutorial ini kamu desain layar start sebuah event: layar yang dilihat tamu waktu mereka mendekat ke booth. Yang kamu atur di sini juga mengatur gaya semua layar tamu lainnya di event itu, dari kamera sampai Share. Kamu juga atur hitung mundur, timer sesi dan langkah-langkah yang dilewati tamu. Siapkan waktu sekitar 15 menit.

## Kapan Dipakai {#when-to-use-it}

- **Nikahan atau pesta pribadi:** nama pasangan, tanggal dan foto mereka sebagai background, dengan warna undangan mereka.
- **Event kantor atau aktivasi brand:** logo klien, warna brand mereka dan satu baris pendek seperti nama kampanyenya.
- **Event dengan antrean:** background **Live view** bikin orang yang lagi antre bisa lihat dirinya di layar, yang narik lebih banyak orang ke booth.
- **Beberapa mode di satu event:** Photo, Video dan 360/Slow-mo sebagai tombol bulat, biar tamu milih yang mereka mau di layar pertama.

Layar ini milik satu event. Untuk booth yang jalan sendiri tiap hari (booth Kiosk), desain layarnya di UI Editor: lihat [Atur Tampilan Layar Booth](./customise-kiosk-screens.md).

## Sebelum Mulai {#before-you-start}

- **Event** yang sudah dibuat di **Events**, dengan mode yang sudah dipilih. Lihat [Jalankan Event](./run-an-event.md).
- **Paket:** layar start bisa kamu desain di paket apa saja. Untuk menjalankan event, setiap komputer butuh Pix Pro atau Event Pass.
- **Aplikasi booth:** Pixture Photobooth 1.2.57 atau lebih baru nampilin tampilan bawaan **Light** (kertas studio cerah, font Outfit, foto bersudut tajam), Event Decor dengan stiker, dan konfirmasi foto AI. Booth di bawah 1.2.57 otomatis balik ke Darkroom supaya event yang sedang jalan gak pernah terganggu. Booth 1.2.44 atau lebih baru nampilin look Darkroom, background Gradient, start **Templates** dan gembok di dalam timer. Halaman event menyebut booth mana yang perlu di-update.
- **Template** di event kalau kamu nawarin **Photo**, **Studio** atau **Decor**: tombol mode itu tetap tersembunyi sampai event punya template.

## Persiapan {#prepare}

- **Foto atau video background:** foto JPG, PNG atau WebP, atau video MP4 atau WebM, sesuai bentuk layar booth (landscape atau portrait). Pilih yang punya area tenang untuk nama. Kamu bisa menggelapkan dan nge-blur-nya di editor, jadi foto yang ramai pun tetap bisa.
- **Kata-katanya:** pembuka pendek ("Wedding of", "Welcome to"), judul (nama atau nama event) dan baris tanggal. Baris pendek kebaca dari seberang ruangan.
- **Logo:** PNG, SVG atau WebP dengan background transparan.
- **Font** (opsional): file WOFF2, WOFF, TTF atau OTF, maksimal 4 MB per file.
- **Brand kamu:** kalau kamu sudah atur [Brand kamu](./set-up-your-brand.md), event Light baru otomatis pakai logo Brand kamu (tampil di layar Start dan Sharing saja), warna aksen, dan tinta gelap, dan **Your brand** jadi salah satu tema.

## Langkah 1: Buka tab Setup event {#step-1-open-the-events-setup-tab}

1. Di sidebar, klik **Events** dan buka event kamu.
2. Buka tab **Setup**.

![Halaman event dengan Events di sidebar dan tab Setup ditandai](/img/docs/steps/tutorials-event-start-screen--event-setup-tab.webp)

## Langkah 2: Buka editornya {#step-2-open-the-editor}

Masih di tab **Setup**, nomornya lanjut dari Step 1 (sama dengan tanda di gambar). Di kartu **Booth mode**:

3. Buka tab **Appearance**. Tab ini nampilin layar start yang sekarang dengan "Make it yours: your names, a photo and your colours."
4. Klik **Edit appearance**.

![Kartu Booth mode dengan tab Appearance dan Edit appearance ditandai](/img/docs/steps/tutorials-event-start-screen--edit-appearance.webp)

Editornya nampilin preview langsung dari booth, dengan switch **Landscape** dan **Portrait**, plus deretan grup setelan: **Modes**, **Background**, **Text**, **Logo**, **Gallery & lock**, **Colours**, **Countdown**, **Timer** dan **Steps**. Klik satu bagian di preview, misalnya judul atau logo, untuk membuka setelannya.

![Editor Edit appearance dengan live preview, tombol Landscape dan Portrait, deretan pengaturan dan Save ditandai](/img/docs/steps/tutorials-event-start-screen--editor.webp)

## Langkah 3: Atur background dan kata-katanya {#step-3-set-the-background-and-the-words}

1. Di **Background**, pilih jenisnya: **Photo or video** (upload file kamu), **Colour**, **Gradient** (cahaya lembut dari warna **Top** ke warna **Bottom**) atau **Live view** (tamu lihat dirinya di belakang tombol, kayak cermin).
2. Dengan foto, video atau live view, atur **Darken** (0 sampai 80%) sampai tulisannya gampang dibaca, dan **Blur** (0 sampai 100%) untuk melembutkan gambarnya.
3. Di **Text**, isi **Subtitle**, **Title** dan **Date**. Setiap baris punya switch, font, ukuran (60% sampai 200%) dan warnanya sendiri. Biarkan warnanya di **Auto** biar tetap kebaca di background kamu. **Use event date** mengisi tanggalnya otomatis.
4. Di **Logo**, upload logo kamu, pilih **Position** (**Above**, **Instead** dari judul, **Corner**, **Bottom**, atau **Free** untuk ditarik ke mana saja) dan **Size** (60 sampai 320 px).

## Langkah 4: Atur warna dan tombol mode {#step-4-set-the-colours-and-the-mode-buttons}

Event baru mulai dengan tampilan **Light**. Event yang sudah ada tetap di **Darkroom** sampai kamu tap **Switch to Light** di **Edit appearance** (satu klik, dan kamu bisa balik ke **Darkroom** kapan saja).

1. Di **Colours**, pilih tema: **Light**, **Your brand** (kalau brand kamu sudah diatur), **Pixture**, **Forest**, **Ink blue**, **Plum**, **Cream** atau **Darkroom**. Atau atur sendiri **Primary**, **Secondary**, **Background** dan **Mode circles**. Tombol utama bisa **Gradient** atau **Flat**.
2. Di **Modes**, pilih apa yang ditampilkan **Start shows**: **Mode buttons** (satu tombol bulat per mode) atau **Templates** (tamu lihat template event dengan foto contoh dan tap **Start**).
3. Atur **Button style** (**Illustration**, **Mono** atau **Icon**) dan apakah **Button names** tampil di bawah tombolnya. Klik gambar sebuah mode untuk pakai gambar kamu sendiri.
4. Di **Gallery & lock**, pilih apakah tamu dapat **Gallery button** untuk membuka lagi foto event ini, dan di mana **Lock button** berada (tombol ini membuka menu operator di balik PIN). **During a session**, gemboknya ada **In the timer** atau **In its corner**.

Untuk menambah atau menghapus mode, pakai **Edit modes** di halaman event (**Change modes on the event page** di editor mengarah ke sana). **Photographer** dan **Mingle** gak pernah tampil sebagai tombol: komputer dengan mode itu melewati layar start. Di event Light, **Event Decor** nyala dari awal dan jalan setelah Filter di mode **Photo** maupun **Studio** (lihat [Jalankan Sesi Decor](./notes-session.md)).

## Langkah 5: Atur hitung mundur, timer dan langkah-langkahnya {#step-5-set-the-countdown-the-timers-and-the-steps}

1. **Countdown:** jumlah detik sebelum setiap foto, 1 sampai 10. 3 detik cocok untuk kebanyakan tamu.
2. **Timer > Session time:** **Booth's own**, **No limit**, **60 s**, **90 s**, **2 min** atau **3 min**. Kalau waktunya habis, booth lanjut dengan foto yang sudah diambil.
3. **Timer > Photo review** (kalau Photo, Decor, AI atau Mingle nyala): berapa lama setiap foto tampil dengan Retake dan Next, **3 s** sampai **30 s**. Dengan **AI** di event Light (dan juga di HP serta tablet), tamu mengonfirmasi **"Keep this photo?"** sebelum AI mulai membuat gambar, jadi foto ulang gak pernah memakai kredit AI tambahan.
4. **Timer > Decor time** (kalau Decor nyala): 30 detik sampai 3 menit untuk tamu mendekorasi fotonya.
5. **Steps:** matikan **Adjust your photos**, **Choose a filter** atau **Retake** untuk sesi yang lebih singkat.

## Langkah 6: Preview dan simpan {#step-6-preview-and-save}

1. Klik **Preview** di atas untuk nyobain seluruh event dalam layar penuh dengan perubahan kamu, sudah disimpan atau belum. Tap satu sesi seperti tamu.
2. Klik **Save**. Editornya bilang "Saved. Booths update now."

Booth di event ini ngambil tampilan baru untuk sesi berikutnya: booth yang lagi nunggu di layar start langsung, booth yang lagi di tengah sesi begitu sesinya selesai. Kembali di halaman event, **Try it full screen** nampilin desain yang sudah disimpan.

## Cek Hasilnya {#check-it-worked}

- Tab **Appearance** di halaman event nampilin layar start baru kamu, dan kotak-kotak di bawahnya mencantumkan teks dan font, background, warna, logo dan tombol kamu.
- Di booth, layar start nampilin desain kamu. Kalau ada booth yang aplikasinya lama, halaman event menyebutnya, misalnya "Booth 1 runs an older Pixture Photobooth. Update it to show this start screen as designed."
- Jalankan satu sesi: hitung mundur, waktu review dan langkah-langkahnya sesuai yang kamu atur.

## Tips {#tips}

- **Live view bikin booth laku.** Orang lihat dirinya dari seberang ruangan dan jalan mendekat. Tambahkan sedikit **Darken** biar namanya tetap kebaca.
- **Satu look per klien, mulai dari brand kamu.** Atur Brand kamu sekali; setiap event baru mulai dari situ, dan kamu cukup ganti nama, foto dan mungkin warnanya.
- **Sesi lebih singkat di event yang ramai.** Matikan **Adjust your photos** dan atur **Photo review** ke 5 detik. Setiap tamu bergerak lebih cepat dan antreannya menyusut.
- **Gembok yang kalem, bukan yang hilang.** Turunkan **Opacity** **Lock button** biar gak narik perhatian, tapi biarkan di tempat yang crew kamu tahu untuk di-tap.
- **Cek portrait dan landscape.** Kalau event-nya pakai booth dengan dua bentuk layar, pindah preview-nya dan cek keduanya sebelum menyimpan.

## Kalau Ada Masalah {#troubleshooting}

| Masalah | Kenapa | Solusinya |
|---|---|---|
| Tombol Photo, Studio atau Decor gak muncul | Event belum punya template | Tambahkan template di tab **Template** event |
| Event Light tampil Darkroom di booth | Booth jalan di Pixture Photobooth lebih lama dari 1.2.57 (otomatis balik ke Darkroom supaya event live gak terganggu) | Update aplikasinya ke 1.2.57 atau lebih baru |
| Satu booth nampilin tampilan lama | Booth-nya jalan di Pixture Photobooth 1.2.43 atau lebih lama | Update aplikasinya di booth itu |
| Perubahan gak muncul di booth | Booth lagi di tengah sesi, atau desainnya belum disimpan | Klik **Save**; booth ngambil desainnya begitu sesi selesai |
| Tulisannya susah dibaca di atas foto | Background-nya terlalu terang atau ramai | Naikkan **Darken** dan **Blur**, atau atur warna teks ke **Auto** |
| "That file is too large." | File upload-nya lewat batas (font maksimal 4 MB) | Export file yang lebih kecil dan upload lagi |
| Ada mode yang gak ada di **Modes** | Mode dinyalakan dan dimatikan di halaman event | Pakai **Edit modes** di kartu **Booth mode** event |

## Terkait {#related}

- [Referensi Layar Start Event](../dashboard/event-start-screen.md)
- [Jalankan Event](./run-an-event.md)
- [Events](../dashboard/events.md)
- [Atur Brand Kamu](./set-up-your-brand.md)
- [Tambah Overlay GIF dan Video](./gif-and-video-overlays.md)
