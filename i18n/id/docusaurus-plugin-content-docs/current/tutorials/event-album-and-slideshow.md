---
sidebar_position: 10
title: Bagikan Album dan Slideshow Event
description: Bagikan album publik event ke klien dan tamu, pasang di website klien, download semua cetakan sekaligus, dan putar slideshow album secara live di TV venue.
tags: [tutorials, events, album, slideshow, sharing]
---

# Bagikan Album dan Slideshow Event

Di tutorial ini kamu bagikan album publik sebuah event, pasang album itu di website, download semua cetakan dalam satu file, dan bikin slideshow yang muterin foto event di layar venue selama acara masih jalan. Siapkan waktu sekitar 15 menit, plus beberapa menit di venue untuk nyiapin layarnya.

Setiap event punya satu album online berisi semua hasil booth-nya. Tamu buka album itu di HP untuk nyari foto mereka, dan klien tetap pegang link-nya setelah acara selesai. Slideshow-nya adalah album yang sama, layar penuh, dan foto baru masuk sendiri.

## Kapan Dipakai {#when-to-use-it}

- **Wedding.** Kirim link album ke pengantin malam itu juga, dan putar slideshow di TV venue selama resepsi supaya tamu lihat foto-foto baru bermunculan.
- **Event korporat atau peluncuran produk.** Pasang album di halaman event klien, dan tampilkan slideshow dengan warna brand plus QR ke album di layar dekat panggung.
- **Festival atau acara sekolah.** Tamu yang kehilangan QR code tetap bisa nemu fotonya di album, diurutkan berdasarkan waktu.
- **Setelah event sewaan apa pun.** **Download all** ngasih kamu semua cetakan dalam satu zip untuk diserahkan ke klien.

Album ini khusus event. Booth self-service di luar event gak punya album: tiap pelanggan dapat halaman share sendiri. Lihat [Atur Halaman Share](./share-page.md).

## Sebelum Mulai {#before-you-start}

- **Sebuah event** dengan komputer yang sudah di-pairing. Lihat [Jalankan Event](./run-an-event.md).
- Akses ke event di dashboard (pemilik akun punya akses ini).
- **Untuk slideshow**: TV atau monitor di venue dengan komputer atau browser smart TV, dan koneksi internet di layar itu.
- Paket apa pun yang menjalankan event: setiap komputer di event jalan dengan **Pix Pro** atau **Event Pass**.

## Persiapan {#prepare}

- **Sepakati dengan klien siapa yang boleh lihat album.** Siapa pun yang punya link bisa membukanya. Untuk acara privat, bagikan link cuma ke klien, atau matikan sharing setelah acara.
- **Atur tampilan halaman share dulu.** Halaman album ngambil warna dan font dari halaman share kamu di **Pix Design > Microsite**, dan nampilin logo kamu. Lihat [Atur Halaman Share](./share-page.md).
- **Untuk slideshow, cek bentuk layarnya.** TV yang dipasang miring (portrait) tapi dikirimi gambar lebar dari komputer butuh setelan **TV on side** di Langkah 4.
- **Pakai komputer yang gak tidur** untuk layar slideshow, dan colokkan ke listrik.

## Langkah 1: Nyalakan Link Sharing dan copy link album {#step-1-turn-on-link-sharing-and-copy-the-album-link}

1. Di dashboard, buka **Events** dan buka event kamu.
2. Kartu **Link Sharing** nampilin **ON** dengan switch-nya. Switch ini nyala di setiap event baru. Matikan kalau album mau dibikin privat.
3. Klik **Copy** di sebelah link album, atau tombol panah untuk membuka album. Link-nya berbentuk `pixture.io/album/` diikuti kode untuk event ini.

![Halaman event dengan switch Link Sharing, link album dengan Copy, serta Download all, Embed dan Slideshow ditandai](/img/docs/steps/tutorials-event-album-and-slideshow--link-sharing.webp)

Kirim link-nya ke klien, atau jadikan QR code untuk kartu di meja. Selama **Link Sharing** mati, link album dan slideshow membuka halaman "not found"; nyalakan lagi dan link yang sama berfungsi lagi.

## Langkah 2: Cek halaman album {#step-2-check-the-album-page}

Buka link-nya di HP kamu, seperti tamu membukanya.

1. Bagian atas bertuliskan "Photo album", nama event, venue dan tanggal, serta "Photos are kept for 60 days after they are taken."
2. Foto tampil dari yang terbaru, 48 per halaman, dengan **Previous** dan **Next**.
3. Ada menu untuk pindah antar jenis file di album, lengkap dengan jumlahnya: **Prints**, **Live photos**, **Notes** dan **Singles**. Menu ini cuma muncul kalau album punya lebih dari satu jenis.
4. **Newest first** atau **Oldest first** ngubah urutan, dan menu waktu (**All times**, lalu tiap jam) bantu tamu nyari fotonya berdasarkan jam foto.
5. Tap sebuah foto untuk membuka halaman share tamu itu sendiri, tempat mereka download file-nya.

<!-- SHOT-NEEDED: phone: the public album page with Photo album, the event name, the kind, order and time menus and the photo grid -->

Sebelum ada foto pertama, halamannya bertuliskan "No photos here yet. Check back soon!"

## Langkah 3: Download semua cetakan, atau pasang album di website {#step-3-download-every-print-or-embed-the-album}

**Download all**, di bar sebelah tab event, nyimpan semua cetakan event dalam satu zip yang dinamai sesuai event (misalnya `rina-dimas-wedding-photos.zip`). Isinya cuma cetakan, bukan singles, GIF atau live photo.

Untuk nampilin album di website klien:

1. Klik **Embed**.
2. Di **Embed the album** ("Paste this into any website to show the live album."), klik **Copy code**.
3. Tempel kodenya ke HTML website. Album di website nampilin semua foto yang sudah ter-upload setiap kali halamannya dibuka.

![Embed the album dengan kotak kode dan Copy code ditandai](/img/docs/steps/tutorials-event-album-and-slideshow--embed.webp)

Embed-nya nampilin halaman album publik, jadi butuh **Link Sharing** nyala.

## Langkah 4: Desain slideshow {#step-4-design-the-slideshow}

1. Di halaman event, buka tab **Setup**, lalu tab **Slideshow**. Tab itu meringkas tampilannya, misalnya "Fits the screen · Blurred photo · 6s per photo". Klik **Change**.

   ![Tab Setup event dengan tab Slideshow ditandai](/img/docs/steps/tutorials-event-album-and-slideshow--slideshow-tab.webp)

2. Jendela **Slideshow** ("How the album plays on a screen at the venue. New photos join on their own.") punya **Live preview** di kiri. Foto contoh tampil sampai album punya beberapa foto sendiri. Atur di kanan:
   - **Screen**: **Fit screen**, **16:9**, **9:16**, atau **TV on side** untuk TV yang digantung vertikal sementara komputer tetap ngirim gambar lebar.
   - **Background**: **Blurred** (fotonya sendiri, diburamkan), **Solid** (satu warna), **Glow** (cahaya dari warna aksen) atau **Image** (gambar kamu sendiri, JPG, PNG atau WebP sampai 10 MB).
   - **Text & colour**: warna **Text** dan **Accent**, atau centang **Match microsite**.
   - **Font**: **Same as the microsite**, salah satu font di daftar, atau file font kamu sendiri (WOFF2, TTF atau OTF, sampai 5 MB).
   - **Caption**: **Label** ("Photo album" sampai kamu ganti, maksimal 40 karakter; kosongkan untuk menyembunyikan), **Event name** dan **Date**, masing-masing dengan font dan warna sendiri. Baris tanggal juga nampilin venue kalau event-nya punya.
   - **Show**: jenis yang diputar, **Prints**, **Singles**, **GIF** dan **Live photo**. Awalnya cuma **Prints** yang dicentang. Setiap single jadi satu slide sendiri.
   - **Timing**: berapa lama tiap foto tampil, 3 sampai 20 detik (bawaan 6).
   - **On screen**: **Event name** dan **QR to the album**, dua-duanya nyala di awal.
3. Klik **Save slideshow**.

![Jendela Slideshow dengan Live preview di kiri, pengaturan di kanan dan Save slideshow ditandai](/img/docs/steps/tutorials-event-album-and-slideshow--slideshow-window.webp)

## Langkah 5: Putar slideshow di venue {#step-5-play-the-slideshow-at-the-venue}

1. Di komputer yang tersambung ke layar venue, buka halaman event dan klik **Slideshow** di bar sebelah tab event, atau **Open full screen** di jendela Slideshow. Dua-duanya membuka slideshow album di tab browser baru. Kamu juga bisa buka link album dan tambahkan `?slideshow=1` di belakangnya, praktis untuk komputer yang gak login ke Pixture.
2. Jadikan browser layar penuh. Di Google Chrome: tekan F11 di Windows, atau Control-Command-F di Mac.
3. Biarkan jalan. Setelah tiap putaran penuh, slideshow memuat ulang dan ikut nampilin foto yang diambil sejak itu.

![Slideshow yang diputar layar penuh dengan caption dan QR ke album](/img/docs/steps/tutorials-event-album-and-slideshow--slideshow-full.webp)

Klik, tap atau tombol Esc menghentikan slideshow dan nampilin grid album. Jauhkan mouse dan keyboard dari tamu, atau buka slideshow lagi kalau ada yang menghentikannya.

## Cek Hasilnya {#check-it-worked}

- Link album terbuka di HP yang gak login ke Pixture, dan nampilin foto-foto event.
- Foto baru dari booth muncul di album begitu upload-nya selesai.
- Layar venue muterin slideshow layar penuh, dengan bentuk dan warna yang kamu atur, dan foto baru masuk setelah putaran berikutnya.
- QR di pojok slideshow membuka album di HP.

## Tips {#tips}

- **Tampilkan QR di slideshow.** Tamu yang pergi tanpa scan di booth bisa scan TV-nya dan nemu foto mereka di album.
- **Pilih jenis file dengan cermat.** **Singles** bikin satu sesi jadi beberapa slide, jadi event yang ramai muternya lama; **Prints** saja bikin putarannya pendek.
- **Foto disimpan 60 hari.** Ingatkan klien untuk nyimpan yang mereka mau sebelum itu; setelahnya foto keluar dari album dan tile-nya di tab **Album** dashboard bertuliskan **Expired**. Download cetakannya pakai **Download all** kalau kamu nyimpan arsip.
- **Matikan sharing kalau klien minta.** Switch **Link Sharing** menutup album dan slideshow sekaligus, dan menyalakannya lagi bikin link yang sama berfungsi lagi.

## Kalau Ada Masalah {#troubleshooting}

| Masalah | Kenapa | Solusinya |
|---|---|---|
| Link album membuka halaman not found | **Link Sharing** mati | Nyalakan **Link Sharing** |
| Tombol **Slideshow** gak ada di bar | Tombol itu cuma muncul selama **Link Sharing** nyala | Nyalakan **Link Sharing** |
| Foto baru gak muncul di layar venue | Slideshow nambah foto setelah tiap putaran penuh, dan booth cuma upload saat online | Tunggu putaran berikutnya; cek upload di booth |
| Slideshow berhenti dan nampilin grid album | Ada yang klik, tap atau mencet Esc | Buka slideshow lagi dan jauhkan mouse dari tamu |
| Foto terlihat miring atau gepeng di TV yang digantung vertikal | Komputer masih ngirim gambar lebar | Set **Screen** ke **TV on side** |
| Live preview nampilin foto yang gak pernah diambil | Foto contoh tampil sampai album punya beberapa foto sendiri | Pakai **Open full screen** untuk lihat album yang asli |
| **Download all** bilang "No photos to download yet." | Belum ada cetakan event yang ter-upload | Tunggu booth selesai upload, lalu coba lagi |

## Terkait {#related}

- [Jalankan Event](./run-an-event.md)
- [Atur Halaman Share](./share-page.md)
- [Motret Keliling sebagai Fotografer](./photographer-mode.md)
- [Events](../dashboard/events.md)
- [Public Links](../reference/public-links.md)
