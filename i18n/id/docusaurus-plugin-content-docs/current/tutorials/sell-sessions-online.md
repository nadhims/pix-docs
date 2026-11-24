---
sidebar_position: 8
title: Jual Sesi Online
description: Kasih pelanggan halaman di HP untuk beli sesi foto dengan harga booth kamu, lalu dapat kode yang diterima booth, walaupun lagi offline.
tags: [tutorials, payments, vouchers, online-shop]
---

# Jual Sesi Online

Di tutorial ini kamu cari link toko online kamu, taruh QR code-nya di tempat yang bisa di-scan pelanggan, lalu pakai kode yang sudah dibeli di booth. Butuh sekitar 10 menit.

Toko online adalah halaman di HP untuk booth-booth kamu. Pelanggan pilih paket dengan harga booth, bayar lewat gateway kamu (QRIS di Indonesia, kartu dengan Stripe), dan dapat kode yang diterima booth walaupun booth lagi offline. Kodenya juga dikirim ke email mereka.

## Kapan Dipakai {#when-to-use-it}

- **Antrean panjang di booth mall.** Taruh QR di awal antrean: orang bayar sambil nunggu dan datang ke booth bawa kode, jadi booth gak pernah ketahan di layar Payment.
- **Photobox pop-up dengan internet lemah.** Kode yang dibeli online tetap jalan di booth tanpa koneksi, jadi Wi-Fi putus gak menghentikan penjualan.
- **Jualan sebelum event atau musim liburan.** Bagikan link-nya di undangan atau di media sosial kamu, atau kirim ke tuan rumah yang mau bayarin tamunya.
- **Pelanggan yang aplikasi wallet-nya error di booth.** Mereka beli di toko pakai kartu atau aplikasi lain, lalu ketik kodenya.

Jualan tunai di kasir? Pakai satu batch tiket sesi: lihat [Jual dan Bagikan Voucher](./vouchers.md).

## Sebelum Mulai {#before-you-start}

- **Pix Pro di komputer booth.** Kode diketik di layar Payment, yang gak pernah tampil di komputer Pix Starter.
- **Payment gateway yang tersambung dan Active** (**Settings > Payment Gateway**), yang bisa narik mata uang booth.
- **Harga tersimpan di tab Pricing booth**, dengan **Payment on this booth** nyala. Toko jual persis apa yang dijual booth. Lihat [Atur Harga, Paket dan Cetak Tambahan](./prices-and-packages.md).
- **Pixture Photobooth 1.1.101 atau lebih baru** di booth. Versi lama cuma bisa nerima kode untuk satu sesi, jadi toko cuma jual single untuk booth itu.

## Persiapan {#prepare}

- **Pilih link-nya.** Setiap booth punya link sendiri (pelanggan langsung masuk ke paket booth itu). Link akun di halaman Vouchers nampilin daftar booth kamu dan pelanggan pilih sendiri.
- **Cetak QR cukup besar** supaya bisa di-scan dari selangkah: sekitar 5 cm di kartu meja, lebih besar di standing banner. Tambah satu baris tulisan, misalnya "Skip antrean: bayar di sini, ketik kodenya di booth".

## Langkah 1: Cari Link dan QR Code {#step-1-find-the-link-and-qr-code}

1. Buka **Booths**, klik **Configure** di booth, lalu tab **Pricing**. Kartu **Sell sessions online** di paling atas nampilin link booth dengan **Copy**, **Open** dan QR code.

   ![Tab Pricing booth, bagian atas, dengan kartu Sell sessions online, link-nya, Copy, Open dan QR](/img/docs/steps/tutorials-sell-sessions-online--booth-pricing-tab.webp)

2. Untuk satu link ke semua booth kamu, buka **Vouchers** dan klik **Online shop link**. Link-nya tersalin; tombolnya bertuliskan **Copied!**.

   ![Halaman Vouchers setelah klik Online shop link: tombolnya bertuliskan Copied!](/img/docs/steps/tutorials-sell-sessions-online--vouchers-online-shop-link.webp)

## Langkah 2: Cek Harga yang Akan Tampil di Toko {#step-2-check-the-prices-the-shop-will-show}

1. Di sub-tab **Price & packages**, cek **Session price**, paket **Double** dan **Group**, **Additional session price**, **Print format** dan jumlah cetak. Toko nampilin pilihan yang sama dengan pilihan paket di booth.

   ![Kartu Pricing dengan Payment on this booth nyala dan sub-tab Price & packages: Session price $8.00, Print format, Double $14.00, Group $20.00 dan Additional session price](/img/docs/steps/tutorials-sell-sessions-online--booth-pricing-packages.webp)

2. Pajak dan biaya dari sub-tab **Tax & fees** juga berlaku di toko. Klik **Save changes** kalau ada yang kamu ubah.

## Langkah 3: Cetak atau Bagikan QR Code {#step-3-print-or-share-the-qr-code}

1. Simpan QR code dari kartu **Sell sessions online** dan cetak untuk booth atau awal antrean.
2. Bagikan link-nya sebelum event: di undangan, di media sosial, atau ke klien yang bayarin tamunya.

<!-- SHOT-NEEDED: hardware: a printed table card with the online shop QR code standing next to a booth -->

## Langkah 4: Yang Dilihat Pelanggan {#step-4-what-the-customer-sees}

1. Dengan link akun, halaman pertama minta mereka **Choose your photo booth**. Link booth melewati langkah itu.
2. **Choose your package** nampilin paket booth, stepper untuk sesi tambahan, jumlah cetak dan pajak atau biaya, plus totalnya.
3. Mereka ketik email di **Email for your code** lalu tap **Proceed to Pay**, kemudian bayar pakai QR lewat gateway kamu, atau pakai kartu kalau gateway-nya Stripe. **I have paid, check again** ngecek ulang pembayaran yang belum terdeteksi halaman.
4. Halaman bilang **Paid!** dan nampilin kodenya dengan **Copy code**. Kodenya juga dikirim lewat email.

<!-- SHOT-NEEDED: phone: the online shop on a phone, Choose your package, then the Paid! screen with a made-up code -->

## Langkah 5: Pakai Kode di Booth {#step-5-redeem-at-the-booth}

1. Pelanggan mulai sesi. Di layar **Payment**, mereka tap tombol voucher (**Use Voucher** di desain default) dan ketik kodenya.
2. Booth ngecek kodenya sendiri, jadi tetap jalan tanpa internet. Kodenya membawa paket yang dibeli (double, group, sesi tambahan), dan sesi lanjut ke template.
3. Kode berlaku di booth tempat kode itu dibeli.

## Cek Hasilnya {#check-it-worked}

- Klik **Open** di kartu dan beli satu sesi single pakai HP kamu sendiri.
- Ketik kodenya di kotak voucher booth. Booth nerima dan lanjut ke template.
- Pembeliannya muncul di **Transactions**, dengan nominal yang dibayar.

## Tips {#tips}

- **Penjualan online selalu masuk ke gateway Active di akun.** Booth yang milih gateway sendiri di tab **Settings** tetap ngirim penjualan online shop ke gateway yang bertanda **Active**. Venue yang harus nerima penjualan ini langsung butuh akun Pixture sendiri. Lihat [Bikin Payment Gateway](./create-a-payment-gateway.md).
- **Satu QR per booth** kalau harga booth beda-beda; link akun kalau harganya sama semua.
- **Kasih tahu crew bahwa kode itu tiketnya.** Pelanggan yang bawa kode melewati layar Payment, jadi antrean lebih cepat kalau crew mempersilakan pemegang kode maju.
- **Cek email-nya sampai** di pembelian tes kamu sendiri; email itu cadangan pelanggan kalau mereka nutup halamannya.
- **Kombinasikan dengan promo.** Promo otomatis di booth gak ngubah harga online; pakai toko untuk pre-sale harga penuh dan booth untuk promo pelanggan yang lewat.

## Kalau Ada Masalah {#troubleshooting}

| Masalah | Kenapa | Solusinya |
|---|---|---|
| Toko cuma nawarin sesi single, tanpa paket | Aplikasi booth lebih lama dari 1.1.101 | Update aplikasi booth dari menu operator |
| Link akun bilang "Nothing for sale here yet", atau ada booth yang gak ada di daftar | Cuma booth dengan harga tersimpan dan **Payment on this booth** nyala yang ditampilkan | Simpan harga di tab Pricing booth itu dan nyalakan pembayaran |
| Langkah bayar gagal dengan pesan soal gateway | Gak ada gateway yang Active, atau gateway gak bisa narik mata uang booth | Aktifkan gateway yang bisa narik mata uang booth |
| "Enter a valid email so we can send your code." | Kolom email kosong atau salah ketik | Ketik email yang aktif |
| Pelanggan sudah bayar tapi gak lihat kode | Halaman belum mendeteksi pembayarannya | Tap **I have paid, check again**, atau cek email |
| Booth nolak kodenya | Kodenya salah ketik, atau dibeli untuk booth lain | Cek kodenya (kode gak pernah pakai huruf I, L atau O) dan booth tempat kode itu dibeli |

## Terkait {#related}

- [Jual dan Bagikan Voucher](./vouchers.md)
- [Atur Harga, Paket dan Cetak Tambahan](./prices-and-packages.md)
- [Terima Pembayaran di Booth](./accept-payments.md)
- [Booth Pricing](../dashboard/booth-pricing.md)
- [Vouchers](../dashboard/vouchers.md)
- [Offline mode](../desktop-app/offline-mode.md)
