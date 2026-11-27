---
sidebar_position: 50
title: Jalankan Event
description: Bikin event, pairing komputer yang jalanin event itu, mulai Event Pass di hari H, kasih tamu mode, template dan layar pembuka kamu, bagikan album ke klien, terus lihat berapa hasil event-nya.
tags: [tutorials, events, album, event-pass]
---

# Jalankan Event

Di tutorial ini kamu bikin event lewat wizard, pairing komputer yang jalanin event itu, mulai Event Pass di tiap komputer pas hari H, atur mode, output, template dan layar pembuka, bagikan album online ke klien, terus catat bayaran klien supaya kamu lihat profit event-nya. Kerjaan di dashboard sekitar 15 menit; setelah itu event jalan sendiri di tanggalnya.

## Kapan Dipakai {#when-to-use-it}

- **Nikahan, ulang tahun atau acara kantor yang nyewa booth kamu.** Klien bayar fee ke kamu, tamu pakai booth gratis, dan klien dapat satu link album berisi semua foto.
- **Aktivasi brand atau acara sekolah yang tamunya bayar.** Nyalakan **Pay Per Session**, dan tamu bayar per sesi foto dengan harga dan gateway khusus event itu.
- **Dua booth atau lebih di satu venue.** Semua komputer yang di-pairing ke event nampilin layar pembuka, mode dan template yang sama, dan semua foto masuk ke satu album.
- **Booth self-service yang biasanya di mall, dibooking sehari.** Pairing ke event; selama event jalan, booth pakai tampilan event, terus balik ke setelan hariannya setelah selesai.

Bukan untuk booth yang tiap hari jalan di satu tempat buat pelanggan walk-in: itu booth Kiosk dengan harga dan template sendiri. Lihat [Bikin Booth dari Nol](./set-up-a-booth.md).

## Sebelum Mulai {#before-you-start}

- **Lisensi untuk tiap komputer di event**: Pix Pro, atau **Event Pass**: 24 jam Pix Pro di satu komputer seharga Rp 85.000 ($5), mulai dihitung saat kamu pakai di booth, bukan saat dibeli. Beli pass duluan di halaman **Computers** (**Buy Event Passes**), atau dari halaman event waktu pairing.
- **Template untuk event**, punya kamu sendiri di Pix Design atau salah satu template pack gratis dari Pixture (kalau pack-nya tersedia).
- **Payment gateway yang sudah tersambung** (**Settings > Payment Gateway**), cuma kalau tamu bayar per sesi foto.
- **Pixture Photobooth 1.2.1 atau lebih baru** di tiap komputer (1.2.2 atau lebih baru untuk harga per mode, 1.2.29 atau lebih baru untuk Photographer dengan template, atau untuk Mingle, dan 1.2.57 atau lebih baru untuk tampilan Light event, Event Decor dengan stiker, dan konfirmasi foto AI). Booth di bawah 1.2.57 otomatis balik ke Darkroom supaya event live gak pernah terganggu.

## Persiapan {#prepare}

- **Hitung pass-nya.** Satu Event Pass untuk satu komputer selama 24 jam. Dua booth di nikahan sehari butuh dua pass; satu booth di pameran dua hari butuh dua pass (atau satu pass plus extend). Beli sehari sebelumnya, biar gak ada yang bayar lewat HP di venue.
- **Tanya klien mau dapat apa.** Cetak, GIF, Live photo atau foto mentah (Singles) itu **Output** event-nya. Sepakati sebelum hari H, biar setup-nya sekali jadi.
- **Catat fee-nya.** Tulis berapa klien bayar ke kamu. Kamu masukkan ke event nanti (Langkah 9) dan muncul di Finance.
- **Bawa info Wi-Fi venue.** Event Pass mulai secara online, dan foto ke-upload ke album sambil jalan.

## Langkah 1: Bikin Event {#step-1-create-the-event}

1. Buka **Events** dan klik **+ Create Event**. Wizard terbuka di **Details**.

   ![Halaman Events dengan satu kartu event yang sedang berjalan dan tombol + Create Event](/img/docs/steps/tutorials-run-an-event--events-list.webp)

2. Isi **Event Name** dan **Client**. Buka dropdown **Modes** dan pilih satu atau lebih. Mode dikelompokkan jadi "Guests pick" (**Photo** nyala dari awal, plus **Video**, **360/Slow-mo**, **Studio** dan **Decor**) dan "Carried to guests" (**Photographer** dan **Mingle**). Buka dropdown **Output** dan pilih apa yang tamu dapat: **Prints**, **GIF**, **Live photo** atau **Singles** (foto mentah). Terus isi **Event date**, **Start Time** dan **End Time** (opsional), dan **Venue**, lalu klik **Next**.

   ![Wizard Create Event, langkah Details dengan Event Name, Client, dropdown Modes dan Output, dan Event date](/img/docs/event-create-wizard.webp)

3. **Templates**: klik **Configure** dan centang template yang bisa dipilih tamu, atau lewati dan tambahkan nanti di tab Setup. **Next**.
4. **Screens**: "You set up the start screen on the event page, after you create the event." **Next**.
5. **Payment**: nyalakan **Pay Per Session** dan isi **Session price** kalau tamu bayar di event ini, lalu nyalakan **Double session price**, **Group session price** atau **Additional session price** cuma untuk paket yang kamu jual. Biarkan mati untuk event yang dibayar klien. Pilih **Payment gateway** atau pakai default organisasi.
6. Klik **Create event**. Halaman event terbuka di tab **Setup** dengan popup **Pair a computer** sudah terbuka.

## Langkah 2: Pahami Status Event {#step-2-understand-the-event-status}

1. Halaman event nampilin nama, tanggal, chip status dan badge **Free for guests** atau **Paid sessions**. Chip-nya bertuliskan **ONGOING** sejak event dibuat; gak ada tombol Start. Kalau tanggalnya masih nanti, komputer pindah ke template, layar pembuka dan harga event di tanggal pertama.

   ![Halaman event dengan nama, tanggal, chip ONGOING, badge FREE FOR GUESTS, switch Link Sharing, kartu ringkasan dan tab Album, Setup dan Report](/img/docs/steps/tutorials-run-an-event--event-detail.webp)

2. Event selesai sendiri jam 06:00 pagi setelah tanggal terakhirnya (waktu organisasi kamu), jadi pesta yang lewat tengah malam tetap jalan. Komputer yang di-pairing pakai kode event gak pernah dihentikan oleh tanggal: komputer itu pegang event-nya sampai kamu arsipkan. Selama event jalan, tiap komputer di event pakai template, layar pembuka, harga dan gateway event, bukan punya booth-nya sendiri.

## Langkah 3: Pairing Komputer {#step-3-pair-the-computers}

1. Buka tab **Setup**. Selama belum semua langkah beres, ada progress bar di atas yang nunjukin sisanya; klik satu langkah untuk lompat ke sana.

   ![Tab Setup event dengan kartu Computers, Booth mode dengan kartu mode dan Edit modes, dan tab Appearance dengan Edit appearance](/img/docs/event-setup-computers.webp)

2. Di kartu **Computers**, klik **+ Pair a computer** (atau pakai popup yang terbuka setelah event dibuat). Kamu dapat kode 6 digit, dengan **Copy code** dan **New code**, kalau ada Event Pass atau Pix Pro cadangan: Event Pass yang belum terpakai, atau Pix Pro yang gak ada di komputer mana pun. Kalau gak ada, popup bilang "Get Pix Pro or an Event Pass first": klik **Add computer**, pilih **Event Pass** (untuk event) atau **Pix Pro** (untuk pemakaian rutin), bayar, dan dashboard bawa kamu balik ke sini dengan kodenya. **Pair later** menutup popup; baris yang menunggu lalu punya **Show code**.

   ![Popup Pair a computer dengan kode 6 digit, "This computer has an Event Pass or Pix Pro.", Copy code, New code dan Pair later](/img/docs/event-pair-popup.webp)

3. Di venue, buka aplikasi Pixture Photobooth. Di komputer baru, masukkan kodenya di layar login. Di komputer yang sudah ter-setup, buka menu operator dan tap **Pair with a code**; ini gak bikin kamu logout. Ulangi untuk tiap komputer di event.
4. Tiap komputer yang ter-pairing muncul di kartu **Computers**. **Needs Pix Pro or Event Pass** artinya belum ada Event Pass atau Pix Pro yang jalan di komputer itu; itu normal sampai hari H (langkah berikutnya).

:::tip Bawa komputer yang sudah pakai Pix Pro
Unlink dulu dari booth hariannya di dashboard. Pix Pro-nya balik ke akun kamu, event nampilin kode pairing, dan komputer itu masuk ke event pakai Pix Pro-nya sendiri.
:::

## Langkah 4: Mulai Event Pass di Hari H {#step-4-start-the-event-pass-on-the-day}

Di tanggal event, tiap komputer yang ter-pairing tanpa Pix Pro nampilin popup di layar pembuka sebelum tamu pertama datang.

1. Baca judulnya: **Use an Event Pass for today?** Popup ini nyebut nama event, bilang pass jalan 24 jam (sampai jam yang sama besok) dan berapa Event Pass yang tersisa di akun kamu.
2. Tap **Use Event Pass**. Kalau kamu pasang PIN menu, booth minta PIN dulu, jadi tamu gak bisa ngabisin pass. Hitungan 24 jam mulai sekarang. Kalau ada Pix Pro cadangan di akun, popup juga nawarin **Use Pix Pro**.

![Popup Use an Event Pass for today? di booth dengan judul dan Use Event Pass ditandai](/img/docs/steps/tutorials-run-an-event--use-event-pass.webp)

Kalau gak ada pass yang belum terpakai, popup bertuliskan **No Event Passes left**: tap **Buy Event Passes**, scan QR-nya pakai HP dan bayar, lalu tap **Recheck**. **Not now** menutup popup, tapi booth gak mulai sesi sampai punya Event Pass atau Pix Pro.

Di dashboard, baris komputer itu sekarang nampilin **Event Pass** dengan hitung mundur.

## Langkah 5: Mode, Output dan Layar Pembuka {#step-5-modes-output-and-start-screen}

1. Di **Booth mode**, mode event tampil sebagai kartu. **Edit modes** nyalain atau matiin mode; semua komputer di event menawarkannya, dan tiap booth ngambil perubahan di layar Start berikutnya.
2. Di tab **Appearance**, klik **Edit appearance** untuk mendesain layar pembuka: background, teks, logo, warna, hitung mundur dan timer sesi. Event baru mulai dengan tampilan **Light** (kertas studio cerah, font Outfit, foto bersudut tajam) dan otomatis pakai logo Brand kamu (di layar Start dan Sharing saja), warna aksen, dan tinta gelap. Event yang sudah ada tetap di **Darkroom** sampai kamu tap **Switch to Light** (satu klik, bisa balik ke **Darkroom** kapan saja). **Save**, lalu **Try it full screen** untuk nyobain sebagai tamu. Lihat [Desain Layar Pembuka Event](./event-start-screen.md).
3. Di event Light baru, **Event Decor** menyala dari awal dan jalan setelah Filter di mode **Photo** maupun **Studio** (24 stiker, 15 warna pena plus roda warna, dan 8 font). Di tab **Setup** event, pilih **Decorate** (**The print** atau **Its own template**) dan **Decor goes** (**On the print** atau **Soft file only**). Dengan **AI** di event Light, tamu mengonfirmasi **"Keep this photo?"** sebelum AI mulai membuat gambar, jadi foto ulang gak pernah memakai kredit AI tambahan.
4. Tab **Output** nampilin apa yang tamu dapat. **Change** membuka empat pilihan dengan gambar dan penjelasan singkat; centang yang kamu mau dan **Save**. Kalau **Prints** dicentang, jendela yang sama mengatur **Auto print**, **Max prints per session** dan **Show a Print button on Share**. Semua komputer di event ngikutin.
5. Di event yang dibuat sebelum ada layar pembuka, tab Setup nampilin kotak **Booth mode**, **Output** dan **Appearance**, masing-masing dengan **Change**: satu booth mode untuk seluruh event, dan desain layar yang dibuat untuknya.

   ![Pemilih booth mode dengan grup Photo dan Video](/img/docs/event-booth-mode-picker.webp)

6. Dengan **Video**, tab **Video** berisi setelan video: **Countdown**, **Video length**, **Quality**, **Size**, **Display text before recording**, **Mirror captured videos**, **Keep original clip**, **Overlay** (atau orientasi kalau gak ada overlay) dan **Intro video** serta **Outro video** opsional. Semua tersimpan otomatis. Lihat [Mode Video Event](../desktop-app/event-video-modes.md).

## Langkah 6: Pasang Template {#step-6-assign-templates}

1. Di mode foto, tab **Template** bertuliskan "Assign at least 1 template. Until you do, guests at this event have nothing to pick." Klik **Add templates** (atau **+ Manage Templates**) untuk mencentang template dari project Pix Design kamu; tombol **Browse template packs** di popup membuka pack gratis Pixture (kalau tersedia): tiap pack bawa layout cetak, overlay GIF dan tampilan booth yang serasi.

   ![Modal Manage Templates di event](/img/docs/steps/tutorials-run-an-event--event-manage-templates-modal.webp)

2. **Mirror** dan **GIF template** ada di sebelahnya: mirroring live view dan foto tersimpan seperti selfie, dan frame yang digambar di atas GIF. Hitung mundur sebelum tiap jepretan (1 sampai 10 detik) diatur di **Edit appearance**.

:::info
Set template event itu eksklusif. Selama event jalan, booth cuma menawarkan template yang dipasang di sini, bukan set hariannya. Pasang minimal satu sebelum pintu dibuka.
:::

## Langkah 7: Bagikan Album {#step-7-share-the-album}

1. **Link Sharing** sudah ON sejak event dibuat. Klik **Copy** di sebelah link album dan kirim ke klien. Tamu dan klien lihat semua foto di link itu begitu ke-upload, dan booth nampilin QR album di layar share-nya.
2. Pakai toolbar di atas tab: **Embed** ngasih kode iframe untuk website klien, **Slideshow** membuka slideshow layar penuh untuk layar di venue (cuma selama sharing nyala; tampilannya diatur di tab **Slideshow**), **Download all** nge-zip semua foto, dan **Analytics** nampilin grafik sesi dan cetakan sepanjang hari.

   ![Modal Embed untuk album event publik](/img/docs/steps/tutorials-run-an-event--event-embed-modal.webp)

3. Matikan **Link Sharing** untuk bikin album privat lagi. Tab **Album** bisa memfilter, memilih foto dan menghapus yang gak boleh disimpan. Selengkapnya di [Bagikan Album Event dan Slideshow](./event-album-and-slideshow.md).

## Langkah 8: Pantau Event dan Perpanjang Pass {#step-8-watch-the-event-and-extend-the-pass}

1. Pantau kartu **Computers**: tiap Event Pass nampilin sisa waktunya. Untuk nambah 24 jam dari pass yang belum terpakai, klik **Extend 24h** di baris komputer, atau di booth buka menu operator dan tap **Extend Event Pass 24h** (ada info berapa pass tersisa).
2. Kalau pass habis padahal tamu masih datang, tamu berikutnya yang mulai sesi gak bakal nyangkut: booth masang Pix Pro cadangan ke komputer, atau mulai Event Pass cadangan, dan nampilin "New Event Pass started". Ini butuh internet dan pass atau Pix Pro yang belum terpakai di akun; tanpa keduanya, booth berhenti memulai sesi.
3. Di **Transactions**, sesi yang diambil selama event punya chip event.
4. Buka tab **Report** untuk kamera, printer, sisa kertas, suhu CPU, memori, sisa storage, latensi API, monitor, sesi, cetakan, jam aktif, insiden dan unit printer di tiap komputer, plus **Incidents during the event**.

   ![Tab Report event dengan kesehatan per booth dan insiden](/img/docs/steps/tutorials-run-an-event--event-report.webp)

## Langkah 9: Catat Booking Fee dan Biaya {#step-9-record-the-booking-fee-and-costs}

Kartu **Money** di atas tab **Report** nampilin hasil event-nya.

1. Klik **Add booking fee**, ketik bayaran klien di **Amount**, dan klik **Save**. Barisnya lalu bertuliskan **Booking fee** dengan **Edit**; **Remove fee** di jendela yang sama menghapusnya.
2. Klik **Add cost** untuk biaya event (crew, transport, kertas), dengan **Description**, **Amount** dan **Month**.

![Kartu Money event dengan baris Booking fee dan Add cost ditandai, plus Guest sales, Total revenue, Total costs dan Net profit](/img/docs/steps/tutorials-run-an-event--money-card.webp)

Kartu ini menjumlahkan **Guest sales** dari sesi berbayar dengan fee jadi **Total revenue**, dikurangi **Total costs**, dan nampilin **Net profit**. Fee dihitung di Finance pada bulan tanggal event; event tanpa tanggal nampilin "Add the event date to count this fee". Lihat [Booking Fees](../dashboard/finance.md#booking-fees).

**Edit** di atas halaman event ngubah tanggal, harga atau gateway kapan saja sampai event selesai, bahkan saat sedang live. **Delete Event** di toolbar menghapusnya. Jam 06:00 pagi setelah tanggal terakhir, event selesai sendiri. Komputer lama yang di-pairing sebelum ada Event mode dilepas saat itu; komputer Event mode tetap pegang event sampai kamu arsipkan.

## Cek Hasilnya {#check-it-worked}

- Buka booth di salah satu komputer event. Booth nampilin layar pembuka kamu dengan tombol tiap mode, dan layar template cuma nampilin template event.
- Baris komputer di kartu **Computers** nampilin **Event Pass** dengan hitung mundur (atau Pix Pro).
- Selesaikan satu sesi. Kartu **Sessions** di halaman event menghitungnya, fotonya muncul di tab **Album** dan di link album, dan barisnya di **Transactions** punya chip event.
- Setelah event, kartu **Money** nampilin booking fee dan net profit kamu.

## Tips {#tips}

- **Mulai pass di venue, bukan di rumah.** Hitungan 24 jam mulai waktu kamu tap **Use Event Pass**. Kalau dimulai malam sebelumnya, jam yang kamu butuhkan di hari H kepotong.
- **Event dua hari di satu komputer:** pakai satu pass di hari pertama, lalu **Extend 24h** menjelang habis, atau biarkan booth memulai pass cadangan sendiri di sesi berikutnya.
- **Pasang PIN menu sebelum hari H** (**Settings > Security**). Jadi cuma crew kamu yang bisa ngabisin pass atau buka menu. Lihat [Kunci Booth dan Pakai Menu Operator](./operator-menu.md).
- **Kirim link album sebelum event**, biar klien bisa taruh di undangan atau layar, dan tamu nemu fotonya malam itu juga.
- **Lakukan satu sesi tes setelah pairing** dan hapus foto tesnya dari tab **Album**, biar album klien mulai bersih.

## Kalau Ada Masalah {#troubleshooting}

| Masalah | Kenapa | Solusinya |
|---|---|---|
| **Pair a computer** bilang "Get Pix Pro or an Event Pass first" | Gak ada Event Pass yang belum terpakai dan gak ada Pix Pro yang lagi gak dipakai komputer mana pun | Klik **Add computer**, atau unlink komputer Pix Pro dari booth-nya untuk membebaskan Pix Pro-nya |
| Komputer nampilin **Needs Pix Pro or Event Pass** | Belum ada yang memulai pass di komputer itu | Di booth, tap **Use Event Pass** (atau **Use Pix Pro**); atau klik **Use Pix Pro** di barisnya kalau ada Pix Pro yang nganggur |
| Booth bilang event "needs an Event Pass or Pix Pro before it can start sessions" | Akun gak punya pass yang belum terpakai dan gak ada Pix Pro cadangan | Tap **Buy Event Passes**, bayar lewat HP dari QR-nya, lalu tap **Recheck** |
| Tamu gak bisa mulai sesi di malam hari | Pass 24 jam habis dan gak ada pass cadangan, atau booth offline | Beli pass, lalu **Extend 24h** di baris komputer atau di menu operator; cek internetnya |
| Booth masih nampilin template hariannya | Komputer gak ter-pairing ke event, atau tanggal event gak mencakup hari ini | Cek kartu **Computers** dan tanggal di **Edit** |
| Event Light tampil Darkroom di booth | Booth jalan di Pixture Photobooth lebih lama dari 1.2.57 (otomatis balik ke Darkroom supaya event live gak terganggu) | Update aplikasinya ke 1.2.57 atau lebih baru |
| Booth nampilin Photo strip, bukan tombol mode | Pixture Photobooth-nya versi lama | Update aplikasinya; halaman event nyebut nama komputernya |
| Tamu gak lihat apa-apa di layar template | Belum ada template yang dipasang ke event | Tambahkan di tab **Setup** |
| Link album gak kebuka | **Link Sharing** OFF | Nyalakan lagi |
| Perubahan mode gak sampai ke booth | Booth ngambil perubahan di layar Start | Selesaikan sesi yang sedang jalan dulu |
| Booking fee gak muncul di Finance | Event gak punya tanggal, atau bulannya masih nanti | Isi tanggal event di **Edit**; fee dihitung di bulan itu |

## Terkait {#related}

- [Events](../dashboard/events.md)
- [Pix Pro di Booth](../desktop-app/licence-on-the-booth.md)
- [Mode video event di booth](../desktop-app/event-video-modes.md)
- [Desain Layar Pembuka Event](./event-start-screen.md)
- [Bagikan Album Event dan Slideshow](./event-album-and-slideshow.md)
- [Paket & Harga](../pricing/plans.md)
- [Finance](../dashboard/finance.md)
