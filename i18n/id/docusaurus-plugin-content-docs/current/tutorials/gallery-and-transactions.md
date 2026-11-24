---
sidebar_position: 12
title: Cari Foto atau Pembayaran
description: Cari foto satu pelanggan dan kirim ulang link-nya, download banyak foto sekaligus, cari satu pembayaran, cek ke payment gateway kamu, dan export sebulan untuk pembukuan.
tags: [tutorials, gallery, transactions, photos, payments, export]
---

# Cari Foto atau Pembayaran

Di tutorial ini kamu cari foto di **Gallery** dan kirim ulang link-nya ke pelanggan, download sekumpulan foto jadi satu zip, terus cari pembayaran di **Transactions**, cek ke payment gateway kamu, dan export sebulan ke spreadsheet. Siapkan waktu sekitar 15 menit.

## Kapan Dipakai {#when-to-use-it}

- **Booth self-service di mall.** Pelanggan chat kamu: "Aku sudah bayar tapi QR-nya hilang." Cari sesinya pakai booth dan jam, buka, terus kirim link-nya.
- **Sewa photobooth untuk event.** Setelah pernikahan, filter Gallery ke event-nya dan download semua foto untuk pengantin, atau export pemasukan event untuk klien.
- **Studio dengan banyak booth.** Di akhir bulan, export Transactions ke Excel untuk bagian pembukuan dan bandingkan totalnya dengan laporan payment gateway kamu.
- **Booth apa saja yang pakai pembayaran QR.** Pelanggan bilang sudah bayar tapi booth gak mulai. Cari barisnya, cek pakai **Validate**, terus refund atau mulai sesi dengan fakta yang lengkap.

Untuk total dan tren, bukan satu item, pakai [Baca Dashboard Kamu](./read-your-dashboard.md).

## Sebelum Mulai {#before-you-start}

- Paket apa saja: Gallery dan Transactions jalan di Pix Starter dan Pix Pro.
- Role kamu menentukan apa yang kamu lihat: anggota tim cuma lihat booth mereka, dan cuma role yang bisa mengelola gallery yang lihat **Select** dan hapus. **Sync with payment gateway** butuh akses ke semua booth.
- Foto disimpan **60 hari** setelah sesi. Yang mau kamu simpan lebih lama, download sebelum itu.

## Langkah 1: Persempit Gallery {#step-1-narrow-the-gallery}

1. Klik **Gallery** di sidebar. Ketik nama booth atau template di **Search booth, template...** lalu tekan Enter.
2. Pilih satu booth di **All Booths** (di Pixture Event menunya **All Events**, untuk milih satu event).
3. Pilih **All**, **Day**, **Week** atau **Month**.
4. Klik tanggalnya untuk milih periode atau rentang sendiri.
5. **Select** mulai milih foto (Langkah 3).

![Bar atas Gallery dengan pencarian, All Booths, All Day Week Month, tanggal dan Select ditandai](/img/docs/steps/tutorials-gallery-and-transactions--gallery-filters.webp)

Foto terbaru tampil duluan, masing-masing dengan booth dan jamnya. Pencarian cuma nyocokin nama booth dan template, jadi cara tercepat ketemu foto satu pelanggan itu booth plus **Day** plus jam yang dia sebut.

## Langkah 2: Kirim ulang atau download satu foto {#step-2-send-one-photo-again-or-download-it}

1. Klik fotonya: halaman share pelanggan terbuka di tab baru, halaman yang sama dengan yang dibuka QR code mereka. Salin alamatnya dari browser dan kirim ke pelanggan lewat WhatsApp atau email.
2. Arahkan kursor ke foto dan klik **Download** untuk nyimpan file cetak ukuran penuh ke komputer kamu.
3. Ikon kamera kecil di bawah foto, **Camera settings**, nampilin setelan kamera untuk foto ini. Berguna kalau foto satu booth lebih gelap dari booth lain.
4. Arahkan kursor dan klik **Delete** untuk ngehapus foto dari Gallery dan dari halaman share pelanggan.

![Kartu foto di Gallery saat kursor di atasnya, dengan foto, Download, Camera settings dan Delete ditandai](/img/docs/steps/tutorials-gallery-and-transactions--photo-card.webp)

:::caution Delete itu final buat kamu
Foto yang dihapus langsung hilang, dan "This photo will be permanently removed after 30 days." Gak ada tombol restore. Kalau salah hapus, hubungi support Pixture dalam 30 hari itu dengan nama booth dan kira-kira kapan fotonya diambil.
:::

## Langkah 3: Download banyak foto sekaligus {#step-3-download-many-photos-at-once}

1. Filter dulu (Langkah 1), terus klik **Select**.
2. Centang foto, atau klik **Select All** untuk semua yang ada di filter saat ini. Di mode Select, klik di mana saja pada foto akan mencentangnya.
3. Klik **Download Selected** untuk dapat satu zip, atau **Delete Selected** untuk ngehapusnya.

![Gallery di mode Select dengan tiga foto tercentang dan Select All serta Download Selected ditandai](/img/docs/steps/dashboard-gallery--gallery-select.webp)

Zip-nya berisi satu folder per sesi, diberi nama tanggal, jam dan kode share, dengan semua file sesi itu: hasil cetak (atau video), GIF, foto satuan dan seterusnya. Foto yang lebih dari 60 hari sudah gak punya file dan gak ikut masuk. Untuk semua foto satu event sekaligus, **Download all** di halaman event lebih cepat.

## Langkah 4: Cari pembayaran {#step-4-find-a-payment}

1. Klik **Transactions** di sidebar. Cari nama booth atau template.
2. Pilih satu booth di **All Booths**.
3. Pilih **Day**, **Week** atau **Month**.
4. Klik tanggalnya untuk milih tanggal mulai dan selesai sendiri.

![Bar atas Transactions dengan pencarian, All Booths, Day Week Month dan tanggal ditandai](/img/docs/steps/tutorials-gallery-and-transactions--tx-filters.webp)

Di **Pixture Event** halaman ini namanya **Event sales** dan cuma nampilin uang event. Kalau booth kamu jualan pakai lebih dari satu mata uang, pilih di pil **Showing**: total gak pernah dikonversi atau dijumlahkan.

## Langkah 5: Baca total dan barisnya {#step-5-read-the-totals-and-the-row}

1. **Total Revenue**: semua pembayaran sukses di periode itu, dari sesi, Frame Lab dan penjualan tanpa sesi seperti voucher online. Angkanya sama dengan Dashboard untuk periode yang sama.
2. **Payment Success**: berapa percobaan bayar yang berhasil ("622 paid / 27 failed"). Kalau tiba-tiba turun, cek gateway atau internet venue.
3. **Payment** di tiap baris: **Success**, **Pending**, **Failed**, **Refunded**, **Voucher**, atau **Staff** (dimulai pakai PIN booth, bukan penjualan).
4. **Type**: Promo, Ticket, Package, Bonus, Frame Lab, Imported, atau **Orphan Payment** (gateway sudah konfirmasi pembayaran tapi gak ada sesi foto yang ngambilnya, sering karena pelanggan bayar lalu pergi).

![Transactions dengan Total Revenue, Payment Success serta kolom Payment dan Type ditandai](/img/docs/steps/tutorials-gallery-and-transactions--tx-read.webp)

Baris dari event punya label event, jadi pemasukan satu klien gampang dicari.

## Langkah 6: Cek pembayaran dan export sebulan {#step-6-check-a-payment-and-export-the-month}

1. **Validate** (ikon kaca pembesar di **Actions**, di baris paid, pending dan failed) nanya ke gateway kamu soal pembayaran ini dan nampilin **Ours** di samping **Gateway**, dengan "Amount mismatch" atau "Status mismatch" kalau beda.
2. **Sync with payment gateway** membuka **Gateway Sync**: pilih **Start Date** dan **End Date**, terus klik **Run Sync**. Pembayaran yang dikonfirmasi gateway tapi terlewat oleh booth (misalnya saat internet venue putus di tengah pembayaran) ditambahkan.
3. **Export Excel** mendownload daftar yang sudah difilter jadi file .xlsx.

![Transactions dengan kolom Actions, Sync with payment gateway dan Export Excel ditandai](/img/docs/steps/tutorials-gallery-and-transactions--tx-tools.webp)

Pixture gak punya tombol refund: refund lewat dashboard payment gateway kamu sendiri.

## Cek Hasilnya {#check-it-worked}

- Jalankan sesi tes: sesinya muncul paling depan di Gallery, dan kalau diklik membuka halaman share yang sama dengan QR code di booth.
- Zip dari **Download Selected** terbuka dengan satu folder per sesi.
- File **Export Excel** berisi baris yang sama dengan halaman untuk filter yang sama.

## Tips {#tips}

- **Tanya booth dan jamnya.** "Grand Mall, sekitar jam 4 sore Sabtu" nemuin foto dalam hitungan detik. Nama pelanggan gak bisa, soalnya Gallery gak nyimpan nama pelanggan.
- **Rekonsiliasi tiap minggu, bukan tiap bulan.** Bandingkan minggu yang sama di Transactions dan laporan gateway. Ada pembayaran di gateway tapi gak ada di Transactions? Jalankan **Sync with payment gateway** untuk hari itu sebelum nganggep pembayarannya hilang.
- **Orphan Payment = ada yang bayar tapi gak dapat apa-apa.** Cek pakai **Validate**, terus refund di gateway atau undang pelanggan balik untuk sesi.
- **Hapus sesi gladi bersih.** Sesi tes ikut dihitung di Dashboard. Filter ke booth dan harinya, **Select All**, **Delete Selected**.
- **Backup sebelum hari ke-60.** Untuk klien yang mau foto event-nya disimpan lama, download zip-nya di minggu-minggu pertama.

## Kalau Ada Masalah {#troubleshooting}

| Masalah | Kenapa | Solusinya |
|---|---|---|
| Kotak foto bertuliskan **Expired** | Umurnya lebih dari 60 hari dan file-nya sudah dihapus | Gak bisa dikembalikan. Lain kali download lebih awal |
| Pencarian gak nemu apa-apa | Pencarian cuma nyocokin nama booth dan template, bukan pelanggan atau kode | Kosongkan pencarian dan filter pakai booth dan hari |
| Gak ada tombol **Select** | Role kamu gak bisa mengelola gallery | Minta pemilik akun ngubah role kamu |
| Sesi pelanggan yang sudah bayar gak ada di Transactions | Internet booth putus saat pembayaran | **Sync with payment gateway** untuk hari itu |
| Gak ada ikon **Sync with payment gateway** | Role kamu cuma mencakup sebagian booth | Minta tolong orang yang punya akses ke semua booth |
| Uang event gak ada di daftar | Kamu di Pixture Kiosk, yang gak menghitung penjualan event | Pindah ke Pixture Event (**Event sales**) atau Overview |
| Total beda dengan gateway | Pembayaran uji coba (sandbox) gak pernah dihitung, dan tiap penjualan masuk ke hari uangnya settle | Bandingkan pembayaran live berdasarkan tanggal settlement |

## Terkait {#related}

- [Gallery](../dashboard/gallery.md)
- [Transactions](../dashboard/transactions.md)
- [Baca Dashboard Kamu](./read-your-dashboard.md)
- [Bikin Payment Gateway](./create-a-payment-gateway.md)
- [Bagi Omzet dan Profit dengan Partner](./share-revenue-and-profit.md)
