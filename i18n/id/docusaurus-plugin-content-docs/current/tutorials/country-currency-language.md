---
sidebar_position: 67
title: Atur Negara, Mata Uang dan Bahasa
description: Atur zona waktu dan mata uang akun kamu, kasih booth di negara lain mata uang dan jam sendiri, dan pilih bahasa dashboard serta bahasa layar booth yang dilihat tamu.
tags: [tutorials, settings, currency, timezone, language]
---

# Atur Negara, Mata Uang dan Bahasa

Di tutorial ini kamu atur zona waktu dan mata uang utama akun kamu, pilih bahasa yang dilihat tamu di booth, ganti bahasa dashboard kamu antara English dan Bahasa Indonesia, dan kasih satu booth mata uang serta zona waktunya sendiri. Pixture gak punya satu setelan "negara": empat setelan inilah yang bikin akun kamu pas dengan negara kamu. Siapkan waktu sekitar 5 menit.

## Kapan Dipakai {#when-to-use-it}

- **Tepat setelah daftar.** Pixture sudah ngisiin zona waktu dan mata uang buat kamu. Cek keduanya sebelum pasang harga apa pun: harga diketik dalam mata uang itu, dan laporan ngitung hari pakai zona waktu itu.
- **Booth di negara lain.** Akun kamu di Indonesia (IDR) dan kamu naruh booth self-service di mall Kuala Lumpur. Kasih booth itu MYR dan zona waktu Malaysia, booth lain tetap IDR.
- **Crew atau tamu orang Indonesia.** Set bahasa booth ke Bahasa Indonesia biar tulisan yang dibaca tamu di booth pakai bahasa Indonesia, dan biarkan setiap anggota tim milih bahasa dashboard-nya sendiri.

Jangan ganti mata uang utama untuk "mengonversi" harga kamu: Pixture gak pernah mengonversi angka. Kalau mau mindahin seluruh bisnis ke mata uang lain, siap-siap ketik ulang harganya (lihat peringatan di Langkah 2).

## Sebelum Mulai {#before-you-start}

- Paket apa saja: setelan ini jalan di Pix Starter dan Pix Pro.
- Untuk nyimpen setelan akun, role kamu butuh **Manage settings** (pemilik dan admin punya). Untuk mata uang dan zona waktu booth, **Manage booths**. Siapa pun bisa ganti bahasa dashboard-nya sendiri.
- Untuk narik bayaran dalam mata uang lain, payment gateway yang bisa menagih mata uang itu. Midtrans dan DOKU cuma IDR, Stripe bisa kebanyakan mata uang. Lihat [Bikin Payment Gateway](./create-a-payment-gateway.md).

## Langkah 1: Cek zona waktu {#step-1-check-the-time-zone}

1. Di dashboard, klik **Settings** di sidebar.
2. Klik **Preferences**. Kartu **Localization** berisi semua setelan di tutorial ini.
3. Di **Timezone**, pilih zona kamu, misalnya **Asia/Jakarta**.
4. Klik **Save**. Halamannya bilang "Timezone updated successfully."

![Settings > Preferences dengan Settings, Preferences, daftar Timezone dan tombol Save-nya ditandai](/img/docs/steps/tutorials-country-currency-language--timezone.webp)

Semua tanggal di dashboard tampil dalam zona waktu ini, dan Day, Week serta Month di laporan kamu mulai dan selesai mengikuti jamnya. Booth dapat zona waktu ini di sync berikutnya dan nampilin jam sesuai zona itu.

## Langkah 2: Atur mata uang utama {#step-2-set-the-default-currency}

1. Di **Default currency**, pilih mata uang berdasarkan kodenya, misalnya **IDR · Indonesian Rupiah** atau **USD · US Dollar**.
2. Klik **Save**. Kalau kamu ganti mata uang yang sudah ada, baca popup-nya ("Prices are never converted automatically.") dan klik **OK** untuk lanjut.

![Default currency dengan daftar mata uang dan Save ditandai](/img/docs/steps/tutorials-country-currency-language--currency.webp)

Setiap booth pakai mata uang ini, kecuali booth itu punya mata uang sendiri (Langkah 5).

:::caution Angka harga gak berubah
Ganti mata uang gak pernah mengonversi apa pun. Harga 35.000 dalam IDR jadi 35.000 dalam USD. Begitu selesai ganti, buka tab **Pricing** di setiap booth dan ketik ulang harga, paket dan nilai voucher kamu. Sesi yang sudah lewat tetap pakai mata uang saat sesi itu terjadi dan tetap kelihatan di bawah mata uang itu.
:::

Pixture menolak penggantian kalau bakal bikin sesuatu rusak, dan bilang alasannya: payment gateway kamu gak bisa menagih mata uang baru, ada event berbayar yang lagi jalan atau akan datang ("Finish or edit your events before changing the currency."), atau ada booth yang aplikasinya terlalu lama untuk mata uang baru itu.

## Langkah 3: Pilih bahasa booth {#step-3-pick-the-booth-language}

1. Di **Booth language**, pilih **English** atau **Bahasa Indonesia**.
2. Klik **Save**. Halamannya bilang "Booth language updated. Kiosks pick it up on their next sync."

![Booth language dengan daftarnya dan Save ditandai](/img/docs/steps/tutorials-country-currency-language--booth-language.webp)

Satu setelan ini berlaku untuk semua booth di akun. Yang berubah adalah tulisan bawaan aplikasi booth, misalnya pertanyaan izin pakai foto, peringatan sebelum sesi habis waktu, "Time's up. No more retakes." dan popup tempat tamu ngirim foto ke email. Tulisan yang kamu ketik sendiri di Pix Design (tombol, judul, teks izin kamu sendiri) tetap persis seperti yang kamu tulis, jadi tulis dalam bahasa yang mau dibaca tamu.

## Langkah 4: Pilih bahasa dashboard kamu {#step-4-pick-your-dashboard-language}

1. Di **Language**, klik **English** atau **Bahasa Indonesia**. Halamannya dimuat ulang dalam bahasa itu.

![Language dengan tombol English dan Bahasa Indonesia ditandai](/img/docs/steps/tutorials-country-currency-language--dashboard-language.webp)

Tombol yang sama ada di menu akun: klik inisial kamu di kanan atas, terus **Language**. Pilihannya cuma berlaku untuk kamu dan disimpan di browser ini, jadi atur lagi di komputer atau HP lain.

:::info Belum semua halaman diterjemahkan
Bahasa Indonesia mencakup sidebar, bar atas dan menu akun, halaman utama Dashboard, sebagian besar Finance, halaman login, daftar dan undangan, serta halaman utama website publik. Kebanyakan halaman lain, seperti Booths, Events, Gallery, Health, Pix Design dan sebagian besar Settings, masih berbahasa Inggris. Yang belum diterjemahkan tampil dalam bahasa Inggris.
:::

## Langkah 5: Kasih satu booth mata uang dan zona waktu sendiri {#step-5-give-one-booth-its-own-currency-and-time-zone}

1. Klik **Booths** di sidebar, buka booth-nya dan buka tab **Settings**.
2. Di **Currency**, pilih **Different for this booth** dan pilih mata uangnya.
3. Klik **Save Currency**. Halamannya bilang "Currency set to" diikuti kodenya, dan harga yang ada gak dikonversi.
4. Di **Time zone**, pilih zona booth itu sebagai ganti **Same as organization**.
5. Klik **Save Time Zone**.

![Tab Settings booth dengan Settings, Different for this booth, Save Currency, Time zone dan Save Time Zone ditandai](/img/docs/steps/tutorials-country-currency-language--booth-currency.webp)

Sekarang buka tab **Pricing** booth itu dan pasang harganya dalam mata uang baru. Selama belum, booth nampilin "This booth is in" mata uang itu "but has no" harga dalam mata uang itu, dan sesinya jalan gratis.

Zona waktu booth menjalankan jamnya sendiri untuk jadwal promo dan queue line. Untuk membatalkan, pilih **Same as organization** dan simpan.

## Cek Hasilnya {#check-it-worked}

- **Settings > Preferences** nampilin zona waktu, mata uang dan bahasa booth kamu setelah halaman dimuat ulang.
- Tanggal di Dashboard dan angka hari ini cocok dengan hari di tempat kamu.
- Setelah sync berikutnya, jalankan sesi tes: pertanyaan izin dan tulisan bawaan lainnya muncul dalam bahasa booth.
- Booth dengan mata uang sendiri nampilin harga dalam mata uang itu di tab **Pricing**, dan sesinya muncul di bawah mata uang itu di laporan.

## Tips {#tips}

- **Beberapa mata uang, gak dicampur.** Begitu booth kamu jualan dalam lebih dari satu mata uang, baris tombol mata uang **Showing** muncul di atas Dashboard, Transactions, Vouchers dan Finance. Setiap mata uang punya angkanya sendiri, gak ada yang dijumlahkan atau dikonversi.
- **Harga event pakai mata uang akun.** Booth yang ada di event yang lagi jalan atau akan datang gak bisa ganti ke mata uang lain sampai event-nya selesai.
- **Label dashboard ikut bahasanya.** Dalam Bahasa Indonesia, **Settings** jadi "Pengaturan", **Transactions** jadi "Transaksi" dan **Finance** jadi "Keuangan". Dokumentasi ini pakai nama bahasa Inggrisnya.
- **Bahasa booth berlaku untuk seluruh akun.** Kalau satu booth butuh bahasa lain, tulis layar booth itu di Pix Design dalam bahasa tersebut dan kasih booth itu desain layarnya sendiri.

## Kalau Ada Masalah {#troubleshooting}

| Masalah | Kenapa | Solusinya |
|---|---|---|
| Sesi hari ini muncul di kemarin | Zona waktunya salah | Pasang **Timezone** yang benar di **Settings > Preferences** (Langkah 1) |
| Setelah ganti mata uang, harga Rp 35.000 jadi $35,000 | Angka gak pernah dikonversi | Ketik ulang harga di tab **Pricing** setiap booth |
| "Finish or edit your events before changing the currency." | Ada event berbayar yang lagi jalan atau akan datang | Tunggu sampai selesai, atau ubah setelan pembayarannya, baru ganti |
| "Your active payment gateway (...) charges ... only." atau "Stripe can't charge ..." | Gateway kamu gak bisa menagih mata uang itu | Pilih mata uang lain, atau kasih booth-nya gateway yang bisa menagihnya |
| Booth menolak mata uang sendiri dan nyebut nama event | Booth itu ada di event yang lagi jalan atau akan datang, yang harganya dalam mata uang akun | Ganti setelah event selesai |
| "This booth is in ... but has no ... price yet" | Booth ganti mata uang dan belum punya harga dalam mata uang itu | Pasang harga di tab **Pricing** booth itu |
| Booth masih nampilin tulisan bahasa Inggris | Booth belum sync sejak kamu simpan | Tunggu sync berikutnya, atau restart aplikasi Pixture Photobooth |
| Dashboard balik ke bahasa Inggris | Bahasa disimpan per browser | Pilih lagi di browser ini |
| Gak ada tombol **Save** di Preferences | Role kamu gak punya **Manage settings** | Minta tolong pemilik akun |

## Terkait {#related}

- [Settings](../dashboard/settings.md)
- [Bikin Payment Gateway](./create-a-payment-gateway.md)
- [Tambah Tim dan Atur Role](./team-and-roles.md)
- [Baca Dashboard Kamu](./read-your-dashboard.md)
