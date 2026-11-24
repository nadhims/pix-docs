---
sidebar_position: 9
title: Biarkan Pelanggan Kirim Foto ke Email
description: Kasih pelanggan tombol Email di sebelah Scan QR di booth, biar mereka kirim foto ke inbox sendiri. Lengkap dengan yang kamu butuhkan, cara nampilin tombolnya, isi email-nya dan batas-batas yang perlu kamu tahu.
tags: [tutorials, sharing, email, pix-pro]
---

# Biarkan Pelanggan Kirim Foto ke Email

Di tutorial ini kamu pastikan booth nampilin tombol **Email** di layar sharing, nyobain sendiri seperti pelanggan, terus cek email yang masuk. Siapkan waktu sekitar 10 menit.

**Email my photos** ada di sebelah **Scan QR**. Pelanggan ngetik alamat email pakai keyboard booth dan tap **Send**. Booth yang ngirim, dan email berisi tombol **See my photos** sampai ke inbox mereka. Gak ada yang perlu dinyalakan: booth Pix Pro dengan aplikasi versi baru otomatis nampilin tombol ini.

## Kapan Dipakai {#when-to-use-it}

- **Booth self-service di mall.** Ada pelanggan yang gak bisa atau gak mau scan QR: HP-nya jadul, kameranya retak, atau kuotanya habis. Lewat email, foto tetap sampai.
- **Event dengan sinyal HP jelek.** Di ballroom basement, HP tamu bisa jadi gak dapat sinyal data, tapi booth yang ngirim email lewat koneksinya sendiri. Fotonya sudah nunggu di inbox waktu tamu sampai rumah.
- **Wedding atau acara keluarga.** Satu tamu bisa kirim foto yang sama ke maksimal 3 alamat dalam satu sesi, misalnya ke email sendiri dan email orang tuanya.
- **Event kantor.** Tamu sering mau fotonya masuk ke email kantor biar gampang diteruskan ke rekan kerja.

Bukan untuk ngumpulin daftar email milik kamu: kotak centang di bawah alamat itu newsletter Pixture, bukan punya kamu. Untuk ngumpulin pelanggan yang setuju dihubungi untuk promosi, pakai consent prompt di [Marketing Studio](./marketing-studio.md).

## Sebelum Mulai {#before-you-start}

- **Pix Pro di komputer booth.** Event Pass juga dihitung. Komputer yang pakai Pix Starter gak nampilin tombolnya.
- **Pixture Photobooth 1.2.31 atau lebih baru** di komputer Mac atau Windows. Lihat [Software Updates](../desktop-app/software-updates.md).
- **Scan QR nyala** di layar sharing. Tombol Email cuma muncul di sebelahnya.
- **Internet di booth**, paling gak sesekali. Booth bisa nyimpan permintaan saat offline dan ngirimnya begitu online lagi.

## Langkah 1: Tampilkan tombol Email di layar Sharing {#step-1-show-the-email-button-on-your-sharing-screen}

Tempat tombolnya muncul:

- **Di event:** di layar Share event, di sebelah **Scan QR**. Gak perlu diatur.
- **Di sesi video:** di layar yang nampilin QR code video-nya.
- **Di booth dengan desain layar sendiri:** di baris **Share buttons** di halaman Sharing.

Halaman Sharing yang cuma pakai blok **QR Code**, tanpa baris **Share buttons**, gak punya tempat untuk tombol ini. Untuk nambahin barisnya:

1. Buka **Pix Design > UI Editor** dan buka UI project booth tersebut.
2. Buka tab **Sharing**.
3. Dari bar blok di bawah kanvas, tambahkan **Share buttons (QR, AirDrop, Print)**.
4. Di setelan bloknya, biarkan **Scan QR** tercentang. Centang **Show the QR code** kalau kamu mau QR-nya langsung tampil di layar, tanpa perlu tap dulu.
5. Klik **Save**. Booth yang pakai project ini ngambil desain barunya di sela-sela sesi.

<!-- SHOT-NEEDED: dashboard: UI Editor on the Sharing tab with a Share buttons block selected and its Scan QR and Show the QR code settings -->

Lihat [Atur Layar Booth](./customise-kiosk-screens.md) untuk cara kerja di UI Editor.

## Langkah 2: Coba sebagai pelanggan {#step-2-try-it-as-a-customer}

Jalankan satu sesi di booth sampai selesai, terus:

1. Di layar sharing, tap **Email**.

   ![Baris Share buttons di booth dengan tombol Email ditandai, di antara Scan QR dan Extra print](/img/docs/steps/tutorials-email-my-photos--share-buttons.webp)

2. Popup **Email my photos** terbuka bareng keyboard booth. Ketik alamatnya di kotak. Tombol **.com** dan **@** ada di halaman huruf.
3. Biarkan atau ubah kotak centang di bawahnya, "Send me news and offers from Pixture" (lihat Tips).
4. Tap **Send**. Tombolnya aktif begitu alamatnya kelihatan lengkap. Booth nampilin "Sent to" dengan alamat yang disamarkan setelah huruf pertama, misalnya "Sent to a•••@gmail.com", terus popup-nya tertutup.

![Popup Email my photos dengan kotak alamat, kotak centang news dan Send ditandai, di atas keyboard booth](/img/docs/steps/tutorials-email-my-photos--email-popup.webp)

Selama popup terbuka, timer layar berhenti dulu, jadi pelanggan yang ngetiknya pelan gak dilempar balik ke layar Start. Kalau gak disentuh sama sekali selama 75 detik, popup-nya tertutup sendiri.

## Langkah 3: Cek email-nya {#step-3-check-the-email}

Buka inbox yang tadi kamu pakai. Email-nya:

- Dikirim dari "*nama bisnis kamu* (via Pixture)", dengan subjek "Your photos from *nama bisnis kamu*" (atau "Foto kamu dari *nama bisnis kamu*" dalam Bahasa Indonesia).
- Nampilin logo kamu, judul "Your photos are ready" dan tombol **See my photos** yang membuka halaman share yang sama dengan QR code.
- Nyebutin sampai kapan foto tersedia: 60 hari setelah sesi.
- Pakai Bahasa Indonesia kalau bahasa pelanggan di booth itu Bahasa Indonesia, selain itu Bahasa Inggris.
- Diakhiri footer **Powered by Pixture**, atau nama bisnis kamu kalau pakai Pix Pro Yearly dan footer-nya dimatikan (lihat [Atur Halaman Share](./share-page.md)).

<!-- SHOT-NEEDED: phone: the "Your photos from Sunny Side Booths" email in a phone mail app with the See my photos button -->

## Cek Hasilnya {#check-it-worked}

- **Email** muncul di antara **Scan QR** dan tombol cetak di layar sharing.
- Setelah **Send**, booth nampilin "Sent to ..." terus balik ke layar sharing.
- Email-nya masuk dalam beberapa menit, dan **See my photos** membuka halaman share sesi itu.

## Tips {#tips}

- **Kotak centang itu newsletter Pixture**, bukan daftar kamu. Kotaknya gak tercentang untuk booth di Uni Eropa, EEA (Islandia, Liechtenstein, Norwegia), Inggris dan Swiss, dilihat dari lokasi koneksi booth atau zona waktu akun kamu, dan tercentang di tempat lain. Email yang kotaknya dicentang punya link untuk berhenti terima kabar.
- **Maksimal 3 alamat per sesi.** Kirim ke alamat yang sama dua kali tetap dihitung sekali.
- **Maksimal 500 email sehari per bisnis**, dihitung dalam 24 jam terakhir, dari semua booth kamu.
- **Cek ejaan bareng pelanggan.** Pesan "Sent to" menyamarkan alamatnya, jadi salah ketik baru ketahuan waktu email-nya gak pernah datang. Minta mereka bacain alamatnya sebelum tap **Send**.
- **Offline gak masalah.** Booth nyimpan permintaannya dan ngirim begitu internet balik. Pelanggan tetap lihat "Sent to", dan email-nya datang belakangan.

## Kalau Ada Masalah {#troubleshooting}

| Masalah | Kenapa | Solusinya |
|---|---|---|
| Gak ada tombol **Email** | Komputernya pakai Pix Starter, aplikasinya lebih lama dari 1.2.31, **Scan QR** mati, atau halaman Sharing cuma punya blok **QR Code** | Cek satu per satu: [Pix Pro di Booth](../desktop-app/licence-on-the-booth.md), update aplikasinya, centang **Scan QR**, tambahkan baris **Share buttons** (Langkah 1) |
| Tombolnya belum muncul padahal baru upgrade ke Pix Pro | Booth baru tahu paketnya saat check-in rutin ke Pixture | Tunggu beberapa menit, atau restart aplikasinya |
| "Sent to ..." tapi email gak datang | Alamatnya salah ketik, email masuk spam, booth masih offline, atau jatah 500 email sehari atau 3 alamat per sesi sudah habis | Cek folder spam, cek internet booth, kirim link share ke pelanggan lewat cara lain |
| **Send** tetap abu-abu | Alamatnya belum lengkap | Ketik alamat lengkap, dengan **@** dan akhiran seperti **.com** |
| Email-nya Bahasa Inggris untuk pelanggan Indonesia | Bahasa pelanggan di booth bukan Bahasa Indonesia | Ganti bahasa booth-nya |

## Terkait {#related}

- [Referensi Email My Photos](../desktop-app/session-flow/email-my-photos.md)
- [Atur Halaman Share](./share-page.md)
- [Sharing di booth](../desktop-app/session-flow/sharing.md)
- [Atur Layar Booth](./customise-kiosk-screens.md)
