---
sidebar_position: 4
title: Jalankan Sesi Video dan 360
description: Ubah booth di sebuah event jadi booth video atau booth 360/Slow-mo. Atur durasi klip, timeline slow motion, overlay, intro dan outro, soundtrack, simpan klip aslinya, dan ubah semuanya langsung di booth saat event.
tags: [tutorials, events, video, slow-mo, 360]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Jalankan Sesi Video dan 360

Di tutorial ini kamu nambahin **Video** dan **360/Slow-mo** ke sebuah event, ngatur klip yang didapat tamu, lalu nyobain di booth. Tamu merekam klip pendek, bukan foto, dan dapat videonya di HP lewat QR code. Siapkan waktu sekitar 30 menit, ditambah waktu bikin intro, outro atau overlay kalau kamu mau pakai.

- **Video**: klip pendek dengan suara, misalnya buat video buku tamu. Tamu ngomong ke kamera.
- **360/Slow-mo**: rekaman pendek yang diputar lambat (dan kalau mau, maju lalu mundur), dengan musik kamu di bawahnya.

Keduanya **mode event**: jalan di komputer yang di-pairing ke sebuah event. Booth di luar event motret foto.

## Kapan Dipakai {#when-to-use-it}

- **Video buku tamu pernikahan.** Tamu merekam pesan 10 sampai 15 detik buat pengantin. Video ikut merekam suara, jadi pengantin dengar setiap ucapan.
- **Launching, gala atau event olahraga.** 360/Slow-mo mengubah lompatan, kibasan rambut atau confetti jadi klip slow motion yang langsung diposting orang.
- **Aktivasi brand.** Taruh logo brand di setiap klip pakai overlay, dan bumper-nya sebelum dan sesudah klip pakai intro dan outro.
- **Sewa event dengan satu kamera.** Tawarkan Photo dan Video berdampingan: tamu milih di start screen, dan masing-masing bisa punya harga sendiri.

Kapan gak dipakai: booth self-service di mall (Kiosk) gak bisa jalanin Video atau 360/Slow-mo; booth itu motret foto. Kalau mau kenang-kenangan bergerak dari sesi foto, output **Live photo** dan **GIF** sudah ngasih animasi pendek ke setiap tamu.

## Sebelum Mulai {#before-you-start}

- **Sebuah event**, dengan setiap komputer di **Pix Pro** atau **Event Pass**. Lihat [Jalankan Event](./run-an-event.md).
- **Pixture Photobooth** di setiap komputer. Video merekam suara tamu mulai 1.2.13. Daftar overlay yang dibagi bergiliran per tamu butuh 1.2.12 atau lebih baru.
- **Kamera dengan live view yang bersih.** Klip direkam dari live view kamera, jadi kualitasnya sama dengan live view, bukan resolusi penuh sensor foto.
- **Buat Video: mikrofon** yang jadi input default komputer. Mikrofon USB atau clip-on di dekat tamu jauh lebih jernih daripada mikrofon bawaan komputer. Tanpa mikrofon, videonya tanpa suara.
- **Buat 360/Slow-mo: soundtrack** (MP3, M4A, AAC atau WAV, maksimal 15 MB), kalau mau pakai musik. 360/Slow-mo gak merekam suara.

## Persiapan {#prepare}

- **Kasih cahaya seperti buat video, bukan foto.** Flash gak membantu klip. Pakai lampu kontinu: panel LED, ring light atau softbox.
- **Orientasi.** Tentukan dari sekarang klipnya **Landscape 16:9** atau **Portrait 9:16**. Portrait cocok buat klip yang diposting ke story; landscape cocok buat layar di venue. Bikin overlay dengan bentuk yang sama.
- **Klip intro dan outro.** MP4 atau MOV, maksimal 30 MB masing-masing, bentuknya sama dengan klip. Bikin pendek (2 sampai 3 detik): klip ini ditambahkan ke setiap video tamu.
- **Overlay.** PNG dengan bagian transparan buat still frame (nama, tanggal, logo), atau efek bergerak buatan kamu sendiri. Lihat [Tambah Overlay GIF dan Video](./gif-and-video-overlays.md).
- **Ruang buat 360/Slow-mo.** Slow motion nunjukin gerakan, jadi tamu butuh ruang buat bergerak: lompat, berputar, melempar. Kosongkan lantai di depan kamera.

## Langkah 1: Tambahkan Video atau 360/Slow-mo ke event {#step-1-add-video-or-360slow-mo-to-the-event}

1. Buka **Events** dan event-nya, lalu tab **Setup**.
2. Di **Booth mode**, klik **Edit modes**.
3. Centang **Video**, **360/Slow-mo**, atau keduanya. Biarkan **Photo** tercentang kalau tamu juga boleh foto: setiap mode yang dicentang jadi tombol di start screen.
4. Klik **Save**.

![Booth mode sebuah event dengan Edit modes ditandai](/img/docs/steps/tutorials-video-and-360-sessions--event-edit-modes.webp)

Kamu juga bisa centang mode ini di **Modes** waktu bikin event. Setiap mode lalu punya kartu sendiri di **Booth mode**: klik kartunya buat buka tab-nya.

:::info Event lama
Event yang dibuat sebelum ada start screen cuma punya satu booth mode, diganti lewat **Change**. Di sana **Video** bisa dipilih, sedangkan **360/Slow-mo** bertanda **Soon**. Bikin event baru buat pakai 360/Slow-mo.
:::

## Langkah 2: Atur tab Video {#step-2-set-up-the-video-tab}

Klik kartu **Video**. Perubahan langsung tersimpan.

1. **Countdown**: 0 sampai 10 detik sebelum rekaman mulai (bawaannya 5).
2. **Video length**: 3 sampai 30 detik (bawaannya 10). 10 sampai 15 detik sudah cukup buat pesan; lebih lama, tamu malah kehabisan kata-kata.
3. **Quality** (2 sampai 8 mbps) dan **Size** (**Rectangle 720p** atau **Rectangle 1080p**). Makin tinggi, file makin besar dan upload makin lambat di Wi-Fi venue.
4. **Orientation**: **Landscape 16:9** atau **Portrait 9:16**.
5. **Display text before recording**: kalimat yang dibaca tamu sebelum mulai (bawaannya "Get Ready"). Pakai buat ngasih tahu apa yang harus diucapkan, misalnya "Ucapan buat Rina dan Dimas!".
6. **Mirror captured videos**: membalik preview dan video yang disimpan, seperti selfie.
7. **Keep original clip**: juga menyimpan video tanpa overlay di komputer booth (bawaannya nyala). Lihat Tips.
8. **Overlays**: **Add overlay** buat menaruh frame atau efek di atas klip.
9. **Intro & outro**: taruh **Intro video** dan **Outro video** (MP4 atau MOV, maksimal 30 MB).

![Tab Video event dengan tiap pengaturan dari Countdown sampai Intro & outro ditandai](/img/docs/steps/tutorials-video-and-360-sessions--video-tab.webp)

Dengan dua overlay atau lebih, setiap tamu dapat overlay berikutnya secara bergiliran. Lihat [Tambah Overlay GIF dan Video](./gif-and-video-overlays.md).

## Langkah 3: Atur tab 360/Slow-mo {#step-3-set-up-the-360slow-mo-tab}

Klik kartu **360/Slow-mo**.

1. **General**: **Countdown**, **Quality**, **Size**, **Orientation** dan **Display text before recording**, sama seperti Video.
2. **Timeline**: pilih **Preset**. Setiap preset itu deretan kecepatan: orang berjalan berarti lambat, orang berlari berarti cepat. Yang pertama satu klip lambat; sisanya campuran cepat dan lambat.
3. **Reverse**: "Plays the video forward then backward". Durasinya jadi dua kali lipat dan bikin loop 360 yang khas.
4. **Clips**: klik sebuah klip buat ngubah **recording duration**-nya (0,5 sampai 10 detik) dan **speed**-nya (lebih lambat sampai lebih cepat). **＋** nambah klip; ikon tempat sampah menghapus klip yang dipilih.
5. **Soundtrack**: taruh MP3, M4A, AAC atau WAV, maksimal 15 MB. "Music the booth plays under each 360 clip."
6. **Overlays** dan **Intro & outro**, sama seperti Video.

![Tab 360/Slow-mo event dengan General, Timeline (Preset, Reverse, Clips), Soundtrack, Overlays dan Intro & outro ditandai](/img/docs/steps/tutorials-video-and-360-sessions--slowmo-tab.webp)

:::tip Bikin klip akhirnya pendek
Rekaman 4 detik di setengah kecepatan sudah jadi 8 detik; dengan **Reverse** jadi 16. Klip 10 sampai 20 detik ditonton sampai habis dan lebih cepat ter-upload.
:::

## Langkah 4: Cek di booth {#step-4-check-it-at-the-booth}

Menu operator booth punya halaman **Capture Settings** dengan setelan yang sama, jadi kamu bisa ngubahnya di hari H tanpa laptop.

1. Buka menu operator (tap dua kali di sudut kanan atas, lalu PIN) dan tap **Capture Settings**. Subjudulnya nyebut event yang tersinkron.
2. Pil di atas nunjukin mode mana yang diatur halaman ini: **Photo**, **Video** atau **360/Slow-mo**.
3. Ubah yang perlu di kartu **Video** (misalnya **Video length** atau **Display text before recording**) atau di kartu **360/Slow-mo** (**Preset**, **Recording duration**, **Reverse**, **Timeline**).
4. **Image overlay** > **Choose** menaruh PNG dari komputer ini di atas klipnya (PNG transparan, 1280 x 720). Ini menggantikan overlay event, cuma di komputer ini.
5. Tap **Save**. Tulisannya jadi **Saved & synced ✓**: perubahannya juga masuk ke event.

![Capture settings di booth dengan pil Video, Video length, Display text before recording, Choose dan Save ditandai](/img/docs/steps/tutorials-video-and-360-sessions--capture-settings-video.webp)

![Capture settings di booth dengan pil 360/Slow-mo, Preset, Recording duration, Reverse dan Timeline ditandai](/img/docs/steps/tutorials-video-and-360-sessions--capture-settings-360.webp)

**Mirror captured videos**, **Keep original clip**, orientasi, intro dan outro, serta daftar overlay event cuma bisa diubah di dashboard. Lihat [Kunci Booth dan Pakai Menu Operator](./operator-menu.md).

## Langkah 5: Coba satu sesi {#step-5-run-a-test-session}

1. Tap **Start Booth**. Di start screen, tap **Video** (atau **360/Slow-mo**), lalu bayar kalau event-nya berbayar.
2. Tamu membaca teks kamu dan tap **Start**. Countdown jalan, lalu booth merekam ("Recording").
3. Booth membuat klipnya ("Making your video"): overlay, kecepatan slow motion dan reverse, intro dan outro, dan soundtrack.
4. Tamu menonton hasilnya dan tap **Next** buat menyimpan, atau **Retake** buat merekam ulang.
5. Layar Share memutar video di samping **Scan QR**. Gak ada yang dicetak. **Complete** mengakhiri sesi.

Di sesi Video pertama, Mac minta izin buat pakai mikrofon. Izinkan, kalau gak, semua videonya tanpa suara.

![Layar capture video dengan Get Ready, We record for 10 seconds dan Start ditandai](/img/docs/steps/tutorials-video-and-360-sessions--video-ready.webp)

![Layar Share dengan video yang diputar di samping Scan QR dan Complete ditandai](/img/docs/steps/tutorials-video-and-360-sessions--video-share.webp)

## Cek Hasilnya {#check-it-worked}

- Start screen nampilin tombol **Video** atau **360/Slow-mo**.
- Klip diputar dengan overlay, intro dan outro kamu; klip Video ada suara tamu, klip 360/Slow-mo ada soundtrack kamu.
- Scan QR membuka halaman dengan satu tombol **Video**. Selama masih upload, halamannya bilang "Your video is still uploading. This page refreshes by itself when it's ready."
- Kalau **Keep original clip** nyala, rekaman bersihnya ada di folder `Pix Originals`, di dalam **Movies** di Mac atau **Videos** di Windows.

## Tips {#tips}

- **Klip asli buat klien.** **Keep original clip** menyimpan setiap rekaman sebagai `Pix_<session>_original.mp4` di folder `Pix Originals` (di dalam **Movies** di Mac, **Videos** di Windows) di komputer booth, tanpa overlay, intro atau outro. Salin folder itu setelah event kalau klien mau mengedit filmnya sendiri. Cuma klip jadi yang masuk ke halaman tamu.
- **Kasih tahu tamu harus ngapain.** "Sapa pengantinnya!" atau "Tunjukkan gaya terbaikmu!" di **Display text before recording** lebih manjur daripada "Get Ready".
- **Taruh mikrofon dekat tamu.** Dekat ke tempat tamu berdiri dan jauh dari speaker. DJ yang kencang bisa menenggelamkan semua pesan.
- **Pantau upload.** File video jauh lebih besar daripada foto. Di Wi-Fi venue yang lemah, turunkan **Quality** satu tingkat atau pakai **Rectangle 720p**; klip tetap ter-upload di latar belakang dan QR langsung bisa dipakai.
- **Kasih video harga sendiri.** Di event berbayar, **Price per mode** ngasih Video dan 360/Slow-mo harga **Single only** sendiri. Lihat [Jalankan Event](./run-an-event.md).
- **Satu booth per mode di event ramai.** Tamu milih mode di setiap sesi, jadi satu komputer bisa jalanin Photo dan Video. Kalau antrean memanjang, kasih video komputer dan mikrofon sendiri.

## Kalau Ada Masalah {#troubleshooting}

| Masalah | Kenapa | Solusinya |
|---|---|---|
| Videonya gak ada suara | Gak ada mikrofon, atau komputer gak diizinkan memakainya | Colok mikrofon dan jadikan input default. Izinkan aplikasi booth memakainya (di bawah) |
| Gak ada tombol **Video** atau **360/Slow-mo** di start screen | Mode-nya gak dicentang di event, atau komputernya gak ada di event itu | Centang di **Edit modes**, dan cek komputernya di-pairing ke event ini |
| Booth Kiosk cuma motret foto | Video dan 360/Slow-mo cuma jalan di event | Pairing komputernya ke sebuah event |
| **360/Slow-mo** bertanda **Soon** | Event-nya dibuat sebelum ada start screen | Bikin event baru |
| Klipnya kurang tajam | Video direkam dari live view kamera | Pakai **Rectangle 1080p**, cahaya lebih terang, dan kamera dengan live view yang bersih |
| Setelah **Save** di booth, tombolnya bilang cuma tersimpan di sini, tanpa event yang berjalan | Komputernya gak sedang menjalankan event | Setelannya cuma berlaku di komputer ini. Ubah di halaman event |
| Semua tamu dapat overlay yang sama | Daftar overlay-nya cuma satu, atau booth pakai **Image overlay** sendiri | Tambah overlay di event, atau hapus **Image overlay** di booth |

### Izinkan mikrofon {#allow-the-microphone}

<Tabs groupId="os">
<TabItem value="mac" label="Mac">

Pilih **Apple menu > System Settings**, klik **Privacy & Security**, lalu **Microphone**, dan nyalakan tombol di samping Pixture Photobooth.

</TabItem>
<TabItem value="windows" label="Windows">

- **Windows 11:** **Start > Settings > Privacy & security > Microphone**. Nyalakan **Microphone access**, **Let apps access your microphone** dan **Let desktop apps access your microphone**.
- **Windows 10:** **Start > Settings > Privacy > Microphone**. Nyalakan akses mikrofon buat perangkat ini, **Allow apps to access your microphone** dan **Allow desktop apps to access your microphone**.

</TabItem>
</Tabs>

## Terkait {#related}

- [Event Video Modes](../desktop-app/event-video-modes.md)
- [Tambah Overlay GIF dan Video](./gif-and-video-overlays.md)
- [Jalankan Event](./run-an-event.md)
- [Desain Start Screen Event](./event-start-screen.md)
- [Kunci Booth dan Pakai Menu Operator](./operator-menu.md)
