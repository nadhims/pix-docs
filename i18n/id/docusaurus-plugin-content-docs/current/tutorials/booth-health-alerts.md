---
sidebar_position: 11
title: Pantau Kondisi Booth dan Dapat Notifikasi
description: Lihat booth mana yang online dan normal, kasih jam buka ke tiap booth biar malam tutup gak dihitung gangguan, dapat notifikasi di iPhone, dan catat, kasih catatan dan selesaikan insiden bareng tim.
tags: [tutorials, health, monitoring, alerts, incidents, opening hours]
---

# Pantau Kondisi Booth dan Dapat Notifikasi

Di tutorial ini kamu baca halaman **Health**, buka satu booth untuk lihat apa yang dilaporkannya, kasih jam buka ke booth kamu, nyalain notifikasi di iPhone, terus catat, kasih catatan dan tutup insiden. Di akhir, kamu tahu dalam hitungan menit kalau ada booth yang berhenti jalan, tanpa harus berdiri di sebelahnya. Siapkan waktu sekitar 20 menit.

## Kapan Dipakai {#when-to-use-it}

- **Booth self-service di mall.** Gak ada yang jagain. Jam buka plus notifikasi ngasih tahu kamu kalau booth telat buka, mati di siang hari, atau kehabisan kertas, sebelum pihak venue nelepon.
- **Studio dengan banyak booth.** Sepuluh booth di lima tempat: **Live** naruh booth yang bermasalah paling atas, dan **History** nunjukin venue mana yang paling banyak kehilangan jam selama dua bulan.
- **Sewa photobooth untuk event.** Sebelum tamu datang, buka **Event health** dan pastikan semua booth event online dengan kamera dan printer siap.
- **Photobox pop-up.** Laporkan hal yang gak bisa dilihat booth (pembayaran yang gagal masuk, listrik padam, komplain pelanggan) biar kamu punya catatan saat ngobrol dengan venue.

Health nampilin apa yang dilaporkan booth. Health gak benerin kamera atau printer: untuk itu, lihat [Troubleshooting](../desktop-app/troubleshooting.md).

## Sebelum Mulai {#before-you-start}

- Paket apa saja: Health jalan di Pix Starter dan Pix Pro.
- Booth yang sudah di-pairing dan jalanin aplikasi Pixture Photobooth. Error printer butuh aplikasi 1.2.41 atau lebih baru, penghitung kertas butuh 1.2.44 atau lebih baru.
- Untuk ngubah jam buka, role kamu harus bisa mengelola booth dan mencakup semua booth di akun. Siapa pun yang bisa buka Health bisa baca semuanya dan melaporkan insiden.
- Untuk notifikasi: iPhone dengan aplikasi Pixture Manager yang sudah login ke akun kamu. Lihat [Kelola Akun dari iPhone](./iphone-app.md).

## Persiapan {#prepare}

- **Kasih nama tiap booth sesuai tempatnya** ("Grand Mall L2", "Bandara T3 Gate 5"). Health, notifikasi dan daftar insiden semuanya nampilin nama booth, dan "Booth 3" gak ngasih info apa-apa jam 7 pagi.
- **Catat jam buka asli tiap venue**, termasuk hari yang bukanya lebih siang. Kamu atur sekali per pola ("Mall hours", "Evenings"), bukan sekali per booth.
- **Kenali roll kertas kamu.** Hitungan kertas mulai dari ukuran roll yang kamu pilih, misalnya 400 cetakan untuk roll DNP 4x6.

## Langkah 1: Baca daftar Live {#step-1-read-the-live-list}

1. Klik **Health** di sidebar. **Live** nampilin semua booth, yang bermasalah duluan: Offline, lalu Critical, Warning, Healthy, dan Closed paling akhir. Klik pil status untuk nampilin booth dengan status itu saja.
2. **Now** bilang apa yang dilaporkan booth dalam bahasa sederhana: "Printer · Paper Jam", "Camera · Disconnected", "Did not open today", atau "All good".
3. **Hours today** nampilin jam buka booth dan kapan dia online ("Online at 09:58", "Not online yet"), setelah booth punya jam buka (Langkah 3).
4. **Last 14 days** itu satu kotak per hari: hijau buka seharian, kuning telat buka atau gangguan singkat, merah kehilangan satu jam atau lebih.
5. **Last seen** itu kapan komputer terakhir lapor masuk.

![Tab Live di Health dengan pil status, Now, Hours today, Last 14 days dan Last seen ditandai](/img/docs/steps/tutorials-booth-health-alerts--live.webp)

Booth lapor masuk tiap 5 menit selama jalan. Mulai booth 1.2.51, booth juga langsung lapor beberapa detik setelah kameranya dicabut, error atau nyambung lagi, jadi status kamera di Health gak pernah ketinggalan sampai hitungan menit. Booth dianggap **Online** kalau laporan terakhirnya kurang dari 12 menit lalu, dan **Offline** setelah itu. Daftarnya refresh sendiri tiap 30 detik. Versi bertanda **outdated** artinya ada aplikasi Pixture Photobooth yang lebih baru.

Di akun yang punya event, Health ngikutin workspace kamu: **Pixture Kiosk** nampilin booth self-service, **Pixture Event** nampilin **Event health** (booth event, cuma selama event-nya jalan atau belum mulai), dan **Overview** nampilin semua booth.

## Langkah 2: Buka satu booth {#step-2-open-one-booth}

Klik baris booth.

1. Masalahnya muncul paling atas lengkap dengan cara ngatasinnya: "Printer: Paper Jam. Open the printer cover and carefully remove the jammed paper."
2. Pembacaannya: koneksi, kamera, printer, kertas, penyimpanan, antrean upload, jaringan, memori dan suhu. "Not reported" artinya booth ini gak ngirim pembacaan itu.
3. Di **Printer**, setelah pasang roll baru, klik **New roll loaded**, pilih ukuran roll (atau **Custom amount**) dan klik **Start counting**. Booth ngambil info itu dalam 5 menit dan menghitung mundur dari roll penuh.
4. **History** (60 hari terakhir, satu bar per hari), **Incidents** (booth ini saja) dan **Hours** (ubah jam buka booth ini saja).

![Tab Now satu booth dengan masalah, pembacaan, New roll loaded dan tab History, Incidents dan Hours ditandai](/img/docs/steps/tutorials-booth-health-alerts--booth-view.webp)

Booth yang offline gak nampilin pembacaan: data terakhir yang dikirim bisa jadi sudah gak benar.

## Langkah 3: Kasih jam buka ke booth kamu {#step-3-give-your-booths-opening-hours}

Tanpa jam buka, tiap malam booth dimatikan dihitung gangguan. Dengan jam buka, Health tahu bedanya.

1. Di tab **Live**, klik **Opening hours**.
2. Klik **Add hours**, kasih nama ("Mall hours"), atur jam buka dan tutup tiap hari, matikan hari libur, terus klik **Save hours**. Centang **New booths start on these hours** di jam buka yang dipakai kebanyakan booth kamu.
3. Klik jumlah booth di samping jam bukanya ("142 booths") dan centang booth yang ngikutin jam itu.
4. Atur **Count as late after**: 5, 15 atau 30 menit setelah jam buka.

![Opening hours dengan tombol Opening hours, Add hours, jumlah booth dan Count as late after ditandai](/img/docs/steps/tutorials-booth-health-alerts--opening-hours.webp)

Yang berubah untuk booth yang punya jam buka:

- Mati di luar jam buka atau di hari libur: **Closed**. Gak ada insiden, gak ada notifikasi.
- Mati di dalam jam buka: **Offline**, insiden, dan notifikasi.
- Belum online sampai jam buka ditambah toleransi telat: insiden **Opened late** dan satu notifikasi "not open yet". Begitu online, harinya terbaca "Online 47 min late".

:::info Jam buka mulai besok
"Changes apply from tomorrow. Times follow your account's time zone." Hari ini gak pernah dinilai ulang. Jam tutup paling malam tengah malam. Jam buka yang lewat tengah malam dan tanggal libur khusus belum didukung. Jam buka untuk booth self-service: **Pixture Event** gak nampilin tombolnya.
:::

## Langkah 4: Nyalain notifikasi di iPhone {#step-4-turn-on-alerts-on-your-iphone}

Notifikasi Health datang sebagai push notification di aplikasi iPhone Pixture Manager, di setiap iPhone yang login ke akun. Gak ada email atau pesan WhatsApp untuk masalah booth.

1. Install Pixture Manager dan login pakai akun Pixture kamu.
2. Izinkan notifikasi saat aplikasi minta, atau nyalakan **Push Notifications** di **Settings** aplikasi.
3. Buka **Notification Settings** dan pilih notifikasi apa saja yang masuk ke iPhone ini.

<!-- SHOT-NEEDED: phone: Pixture Manager Notification Settings screen with Push Notifications and the alert switches marked -->

Yang ngirim notifikasi:

| Notifikasi | Kapan |
|---|---|
| Booth offline | Gak lapor masuk selama 12 menit (di dalam jam buka, kalau booth punya jam buka) |
| Online lagi | Booth balik setelah offline. Booth dengan jam buka yang dinyalakan pagi hari gak ngirim apa-apa |
| Belum buka | Booth dengan jam buka belum online sampai jam buka ditambah toleransi telat |
| Error booth | Kamera, printer (kertas habis, macet, tutup terbuka, mati, error, gak terdeteksi), layar, memori, suhu, penyimpanan hampir penuh, atau jam komputer salah. Sekali per masalah baru |
| Kertas menipis | Di 20% roll dan sekali lagi saat sisa 10 cetakan, terus sekali lagi saat sampai 0 |

Notifikasi yang sama tentang hal yang sama di booth yang sama dikirim paling banyak sekali tiap 5 menit, jadi printer yang hidup-mati gak bikin HP kamu kebanjiran.

## Langkah 5: Tangani insiden {#step-5-work-through-incidents}

Setiap gangguan, telat buka, dan kegagalan kamera, printer, kertas, layar, memori atau suhu jadi insiden.

1. Klik tab **Incidents**. Angka di tab itu jumlah insiden yang masih terbuka.
2. Pilih periodenya (**Last 24 hours**, **Last 7 days**, **Last 30 days** atau **Last 60 days**), jenisnya, dan **Open** atau **Resolved**.
3. **Reported by** bertuliskan **Automatic** atau nama orang yang melaporkannya.
4. **Download CSV** nyimpan semua insiden yang cocok dengan filter, untuk dikirim ke support Pixture atau disimpan untuk venue.

![Tab Incidents di Health dengan tab, filter, Reported by dan Download CSV ditandai](/img/docs/steps/tutorials-booth-health-alerts--incidents.webp)

Klik satu baris untuk detail, catatan, dan kemungkinan penyebabnya kalau Pixture bisa menebaknya. Insiden otomatis tertutup sendiri saat booth pulih. Insiden disimpan selama 90 hari.

## Langkah 6: Laporkan yang gak bisa dilihat booth {#step-6-report-what-the-booth-cannot-see}

1. Klik **Report incident**, terus **Choose** booth-nya. (Di dalam tampilan satu booth, tab **Incidents**-nya punya tombol yang sama dengan booth yang sudah terpilih.)
2. Di **What happened**, pilih Printer error, Camera error, Payment problem, Screen disconnected, Power or internet, Customer complaint atau Other.
3. Isi **Started**.
4. Tulis **Note**: apa yang kamu lihat, siapa yang nelepon, apa yang sudah dicoba.
5. Biarkan **Still happening** nyala, atau matikan dan isi kapan **Ended**.
6. Klik **Report incident**.

![Report incident dengan Choose, What happened, Started, Note, Still happening dan Report incident ditandai](/img/docs/steps/tutorials-booth-health-alerts--report-incident.webp)

Insiden yang dilaporkan gak pernah ngirim notifikasi, dan pembacaan booth gak pernah menutupnya.

## Langkah 7: Tambah catatan dan tandai selesai {#step-7-add-notes-and-mark-it-resolved}

1. Buka satu insiden dan ketik di **Add a note**.
2. Klik **Save note**. Tiap catatan nyimpan siapa yang nulis dan kapan.
3. Klik **Mark resolved** kalau sudah beres.

![Insiden dengan Add a note, Save note dan Mark resolved ditandai](/img/docs/steps/tutorials-booth-health-alerts--notes.webp)

Catatan juga bisa dipakai di insiden otomatis, tapi cuma insiden yang dilaporkan yang punya **Mark resolved**. Laporan gak bisa diedit atau dihapus: tambahkan catatan untuk meralatnya.

## Langkah 8: Lihat ke belakang 60 hari {#step-8-look-back-over-60-days}

1. Klik tab **History**: satu baris per booth, satu kotak per hari, hari ini di paling kanan.
2. Keterangannya: **Open all day**, **Late or short outage** (hilang kurang dari 1 jam), **Down over 1 hour**, **Closed**, **No record**.
3. Urutkan pakai **Least open first** untuk lihat booth yang paling banyak kehilangan waktu, atau pakai **Name**.
4. **Download CSV** nyimpan satu baris per booth per hari.

![Tab History di Health dengan tab History, keterangan, Least open first dan Download CSV ditandai](/img/docs/steps/tutorials-booth-health-alerts--history.webp)

Kolom paling kanan nunjukin berapa persen jam buka tiap booth benar-benar buka. Booth tanpa jam buka gak punya persentase: hijau di hari dia online dan kosong di hari lainnya.

## Cek Hasilnya {#check-it-worked}

- Tutup aplikasi Pixture Photobooth di booth uji coba saat jam bukanya. Dalam sekitar 12 menit booth jadi **Offline** merah, insiden **Offline** terbuka, dan iPhone kamu dapat notifikasi.
- Buka lagi aplikasinya: booth jadi Healthy, insidennya tertutup, dan notifikasi "online lagi" masuk.
- Booth dengan jam buka yang dimatikan malam hari nampilin **Closed** dan gak ngirim apa-apa.

## Tips {#tips}

- **Cek Live 30 menit sebelum buka dan sebelum event.** Masalah kamera, printer dan kertas kelihatan sebelum pelanggan pertama datang.
- **Tekan New roll loaded tiap ganti kertas.** Hitungannya cuma jalan dari roll penuh yang diketahui. Tanpa itu, booth gak bisa ngingetin soal kertas.
- **Pakai catatan sebagai serah terima shift.** "Printer sudah dibersihkan, sisa 280 lembar, ribbon tipis" di insiden ngasih tahu orang berikutnya apa yang sudah dikerjakan.
- **Kirim CSV, bukan screenshot,** saat tanya ke support Pixture soal booth: isinya lengkap dengan waktu dan detail.
- **Baca History sebelum perpanjang kontrak venue.** Venue yang booth-nya merah tiap Sabtu punya masalah listrik atau Wi-Fi yang layak dibahas.

## Kalau Ada Masalah {#troubleshooting}

| Masalah | Kenapa | Solusinya |
|---|---|---|
| Booth Offline tiap malam | Booth belum punya jam buka | Kasih jam buka (Langkah 3). Mati di luar jam buka jadi Closed |
| Booth aman tapi nampil Offline | Aplikasinya tertutup, komputernya sleep, atau Wi-Fi venue putus lebih dari 12 menit | Cek internet booth dan pastikan sleep mati. Lihat [Bikin Booth Nyala Sendiri Setelah Listrik Padam](./start-after-a-power-cut.md) |
| Jam buka baru gak ngaruh hari ini | Jam buka mulai sehari setelah diatur atau diubah | Tunggu sampai besok |
| Gak ada tombol **Opening hours** | Kamu di Pixture Event, atau role kamu gak mengelola semua booth | Pindah ke Pixture Kiosk, atau tanya pemilik akun |
| Kertas gak nampilin apa-apa | Booth belum ngitung roll, aplikasinya lebih lama dari 1.2.44, atau booth offline | Update aplikasinya, terus **New roll loaded** |
| Gak ada notifikasi di iPhone | Notifikasi untuk aplikasi atau untuk jenis itu mati, atau iPhone login ke akun lain | Nyalakan **Push Notifications** dan notifikasinya di **Notification Settings** |
| Insiden yang dilaporkan masih terbuka padahal booth sudah pulih | Insiden yang dilaporkan cuma bisa ditutup manual | Buka dan klik **Mark resolved** |

## Terkait {#related}

- [Health](../dashboard/health.md)
- [Baca Dashboard Kamu](./read-your-dashboard.md)
- [Kelola Akun dari iPhone](./iphone-app.md)
- [Printer Setup](../desktop-app/printer-setup.md)
- [Booth Operations Checklist](../guides/booth-operations-checklist.md)
