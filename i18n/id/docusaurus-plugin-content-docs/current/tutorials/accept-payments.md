---
sidebar_position: 6
title: Terima Pembayaran di Booth
description: Sambungkan payment gateway, atur harga sesi foto di satu booth, pilih apa yang ditawarkan layar Payment, dan terima pembayaran QR atau kartu pertama di booth.
tags: [tutorials, payments, pricing, payment-gateway]
---

# Terima Pembayaran di Booth

Di tutorial ini kamu sambungkan payment gateway, atur harga sesi foto di satu booth, pilih apa yang ditawarkan layar Payment booth, jalankan sesi berbayar pertama, lalu temukan uangnya di **Transactions**. Butuh sekitar 20 menit, plus waktu gateway kamu menyetujui akun merchant.

## Kapan Dipakai {#when-to-use-it}

- **Booth self-service di mall, kafe atau lobi bioskop.** Setiap pelanggan bayar di booth pakai QR code (atau kartu), tanpa ada orang di kasir.
- **Studio multi-booth.** Setiap booth nampilin harganya sendiri; satu gateway nerima uang dari semuanya.
- **Photobox pop-up di bazar akhir pekan.** Pelanggan bayar pakai HP di stand, jadi kamu gak perlu repot kembalian.
- **Event di mana klien jualan sesi** (misalnya sponsor yang jual cetakan kenang-kenangan). Nyalakan pembayaran cuma untuk event itu.

Bukan untuk sewa event yang dibayar flat oleh klien: matikan pembayaran dan tamu gak pernah lihat layar Payment (lihat [Jalankan Event](./run-an-event.md)).

## Sebelum Mulai {#before-you-start}

- **Pix Pro di komputer booth.** Komputer Pix Starter ada watermark-nya dan gak pernah nampilin layar Payment, jadi gak pernah narik bayaran.
- **Akun merchant di gateway yang didukung** beserta key-nya. Lihat [Bikin Payment Gateway](./create-a-payment-gateway.md) untuk penyedia yang cocok di negara kamu.
- **Booth sudah di-pairing dan online**, dengan minimal satu template terpasang.
- Akses owner atau admin di dashboard Pixture.

:::caution
Pembayaran langsung dari pelanggan ke akun gateway kamu sendiri. Pixture gak pernah megang uang kamu, jadi key yang salah artinya tagihan yang kelihatan normal di dashboard tapi uangnya gak pernah cair. Langkah 2 nangkap masalah itu.
:::

## Langkah 1: Sambungkan Gateway {#step-1-connect-a-gateway}

Belum punya akun merchant, atau bingung letak setiap key di dashboard penyedia? [Bikin Payment Gateway](./create-a-payment-gateway.md) ngebahas itu duluan; balik ke sini setelah kartu gateway muncul di halaman Settings kamu.

1. Buka **Settings > Payment Gateway** dan klik **Add Payment Gateway**.
2. Pilih penyedia: **DOKU**, **Midtrans** atau **Xendit** untuk QRIS di Indonesia, **Razorpay** di India, **Kashier** di Mesir, **HitPay** di Malaysia dan Singapura, **Stripe** untuk pembayaran kartu di tempat lain.

   ![Modal Add Payment Gateway, langkah 1, Choose your payment provider: Midtrans, Xendit, DOKU, Stripe, Razorpay (India), Kashier (Egypt), HitPay (Malaysia, Singapore)](/img/docs/steps/tutorials-accept-payments--settings-gateway-providers.webp)

3. Isi key dari dashboard merchant gateway kamu.
   - **DOKU:** **Secret Key**, **Brand ID** (nomor `BRN-` di bawah nama bisnis kamu di DOKU Dashboard), **QRIS Client ID** (cuma angka, dari tab **QRIS Credential Settings** di DOKU), dan **Merchant Private Key (RSA 2048)**, masing-masing dengan expander **How to find this?**. Klik **Generate for me** kalau kamu belum punya. Nyalakan **Sandbox Mode** cuma selama tes dengan kredensial test DOKU.

     ![Modal Add Payment Gateway, form DOKU dengan Secret Key, Brand ID, QRIS Client ID, Merchant Private Key dan Sandbox Mode](/img/docs/steps/tutorials-accept-payments--settings-gateway-doku.webp)

   - **Stripe:** **Secret Key**. Harus diawali `sk_` atau `rk_`; Pixture ngecek key-nya waktu disimpan. Stripe gak punya switch Sandbox: key-nya sendiri yang nentuin test atau live, dan key `sk_test_` bikin tagihan yang uangnya gak pernah cair.

     ![Modal Add Payment Gateway, form Stripe dengan kolom Secret key](/img/docs/steps/tutorials-accept-payments--settings-gateway-stripe.webp)

4. Klik **Continue**, lalu **Connect Gateway**.
5. Di kartu yang baru, klik **Activate**. Gateway baru disimpan dalam keadaan mati, dan booth narik bayaran lewat gateway yang bertanda **Active**.

## Langkah 2: Jalankan Tes Pembayaran {#step-2-run-a-test-charge}

1. Di kartu gateway, klik **Test**. Jendela hasil nunjukin apakah gateway nerima tagihan kecil dan cara ngeceknya di sisi gateway.
2. Kalau gagal, klik **Edit**, tempel ulang key-nya dan tes lagi. Di Stripe, key yang ditolak biasanya hal lain yang ikut tersalin dari dashboard Stripe (API key ID atau publishable key), bukan secret key.

![Bagian Payment Gateway dengan kartu gateway tersambung serta tombol Edit dan Test](/img/docs/steps/tutorials-accept-payments--settings-gateway-card.webp)

## Langkah 3: Atur Harga di Booth {#step-3-set-prices-on-the-booth}

1. Buka **Booths**, klik **Configure** di booth, lalu tab **Pricing**. Nyalakan **Payment on this booth**. Preview di kiri nampilin layar payment booth selagi kamu edit.

   ![Tab Pricing booth, satu halaman penuh, dengan switch Payment on this booth, live preview dan Price & packages](/img/docs/steps/tutorials-accept-payments--booth-pricing-full.webp)

2. Di **Price & packages**, isi **Session price** (harus di atas 0) dan pilih **Print format** yang cocok dengan kertas kamu. Tambahkan paket **Double**, **Group** dan **Additional session** kalau kamu jual.

   ![Kartu Pricing dengan Payment on this booth nyala dan sub-tab Price & packages: Session price $8.00, Print format, Double $14.00, Group $20.00 dan Additional session price](/img/docs/steps/tutorials-accept-payments--booth-pricing-packages.webp)

3. Atur **Payment timeout** di **Time**, **Extra print price** di **Extra prints**, dan pajak atau biaya di **Tax & fees** kalau perlu, lalu klik **Save changes**.

   ![Kartu Pricing di sub-tab Tax & fees: Sales tax 10%, Charge to Guest, Fees dan + Add fee](/img/docs/steps/tutorials-accept-payments--booth-pricing-tax-fees.webp)

Semua kolom, lengkap dengan trik paket, jumlah cetak dan pajak, ada di [Atur Harga, Paket dan Cetak Tambahan](./prices-and-packages.md).

## Langkah 4: Pilih Apa yang Ditawarkan Layar Payment {#step-4-choose-what-the-payment-screen-offers}

Apa yang bisa di-tap pelanggan di layar Payment datang dari desain layar booth di UI Editor, bukan dari tab Pricing.

1. Buka **Pix Design**, buka desain layar booth di UI Editor, dan klik tab **Payment Screen**.
2. Di **Payment Methods**, biarkan **QR Pay** (gateway kamu) dan **Voucher** nyala. Nyalakan **Debit/Credit Card** cuma kalau ada card reader dan **Coin Acceptor** cuma kalau ada kotak koin atau uang kertas (lihat [Terima Bayaran Kartu, Koin dan Tunai](./connect-a-coin-or-card-reader.md)). Metode terakhir yang nyala gak bisa dimatikan.
3. Biarkan **Enabled in session flow** nyala. Kalau mati, booth melewati layar Payment.
4. Klik **Save**.

![UI Editor di tab Payment Screen dengan Payment Screen, switch Payment Methods, Enabled in session flow dan Save ditandai](/img/docs/steps/tutorials-accept-payments--ui-editor-payment.webp)

:::caution Satu desain, banyak booth
Satu desain layar bisa dipakai beberapa booth. **Enabled in session flow** yang mati bikin semua booth yang pakai desain itu melewati layar Payment, dan booth yang punya harga jadi ngasih sesi gratis. Kalau cuma satu booth yang harus gratis, matikan pembayaran di tab **Pricing** booth itu, atau kasih dia salinan desain sendiri.
:::

## Langkah 5: Pakai Gateway Lain di Satu Booth (Opsional) {#step-5-use-a-different-gateway-on-one-booth-optional}

1. Di tab **Settings** booth, cari **Payment Gateway** dan atur **Active Gateway** ke **Organization Default** atau gateway tertentu, lalu klik **Save**. Tab yang sama memegang **Currency** booth; gateway harus bisa narik mata uang itu.

   ![Tab Settings booth dengan Output Settings, Payment Gateway, Booth Info, Currency dan Menu PIN](/img/docs/steps/tutorials-accept-payments--booth-settings-tab.webp)

## Langkah 6: Yang Dilihat Pelanggan {#step-6-what-the-customer-sees}

1. Setelah layar Start (dan Custom Screen, kalau kamu nyalakan), booth nampilin layar **Payment** dengan harga dan, kalau kamu jual paket, pilihan paket dengan jumlah cetak, subtotal, biaya dan pajak.
2. Dengan gateway QRIS, QR code muncul dengan nominal dan hitung mundur. Pelanggan scan pakai aplikasi wallet apa pun dan bayar di HP-nya.
3. Dengan Stripe, QR-nya membuka halaman checkout Stripe di HP pelanggan, tempat mereka bayar pakai kartu.
4. Begitu gateway konfirmasi, booth otomatis lanjut ke pilihan template. (Kalau **Advanced mode** nyala dan halaman **Payment Success** sudah didesain, halaman itu tampil dulu sesuai waktu yang kamu atur.)

<!-- SHOT-NEEDED: booth: the Payment screen with the Single, Double and Group package cards and the QR code with its countdown -->

## Langkah 7: Temukan Uangnya {#step-7-find-the-money}

1. Buka **Transactions**. Setiap sesi berbayar jadi satu baris; kartu di atas nampilin Total Transactions, Total Revenue, Payment Success dan Session Completion untuk periode yang kamu pilih (Day, Week, Month atau Custom).

   ![Halaman Transactions dengan pencarian, filter booth, pilihan periode, ikon Sync with payment gateway dan Export Excel, serta empat kartu statistik](/img/docs/steps/tutorials-accept-payments--transactions.webp)

2. Kalau pembayaran sudah masuk ke gateway tapi gak ada di sini, klik ikon **Sync with payment gateway**, isi Start Date dan End Date lalu klik **Run Sync**. Pakai ikon **Export Excel** untuk akuntan kamu.

## Langkah 8: Tes Tanpa Keluar Uang {#step-8-test-without-spending-money}

1. Buka **Vouchers**, klik **+ Create**, lalu **Single Voucher**. Isi **Voucher Code**, atur **What is it?** ke **Staff pass** (sesi gratis yang bukan penjualan), lalu klik **Create Voucher**.

   ![Jendela Create voucher dengan Voucher Code, What is it? (Sold session atau Staff pass), Max Redemptions, Booth Restriction dan Expiration Date](/img/docs/steps/tutorials-accept-payments--vouchers-create-single.webp)

2. Di layar Payment booth, tap tombol voucher (**Use Voucher** di desain default) dan ketik kodenya. Sesi lanjut seperti sesi berbayar, tanpa tagihan.

Selengkapnya soal kode di [Jual dan Bagikan Voucher](./vouchers.md).

## Cek Hasilnya {#check-it-worked}

- Mulai sesi di booth. Layar Payment nampilin harga kamu dan QR code.
- Bayar pakai HP kamu sendiri (atau Staff pass). Booth mengonfirmasi pembayaran dan lanjut ke template.
- Sesinya muncul sebagai baris di **Transactions**, dan pembayaran beneran muncul di dashboard gateway kamu.

## Tips {#tips}

- **Lakukan satu pembayaran kecil beneran sebelum buka.** Sekali jalan, ini membuktikan key, channel QR gateway, internet booth dan **Transactions**.
- **Biarkan Voucher nyala** di sebelah QR Pay. Pelanggan yang aplikasi wallet-nya error masih bisa beli kode di toko online kamu atau dari crew.
- **Atur Payment timeout sesuai kebutuhan pelanggan beneran.** Terlalu pendek, orang kehilangan QR waktu buka aplikasi bank; terlalu lama, pembayaran yang ditinggal bikin booth ketahan.
- **Cek mata uang gateway waktu ganti mata uang booth.** Gateway cuma bisa narik mata uang yang didukungnya.

## Kalau Ada Masalah {#troubleshooting}

| Masalah | Kenapa | Solusinya |
|---|---|---|
| Booth gak pernah nampilin layar Payment | Komputernya Pix Starter, **Payment on this booth** mati, atau **Enabled in session flow** mati di Payment Screen desainnya | Pasang Pix Pro di komputernya, nyalakan pembayaran, atau nyalakan lagi Payment Screen di UI Editor |
| Booth gratis (pembayaran mati) minta voucher atau pembayaran ke pelanggan pertama | Pixture Photobooth sebelum 1.2.21 minta voucher ke booth gratis setiap kali Payment Screen-nya punya metode Voucher, dan semua desain default punya. Booth yang lagi gak ada internet juga gak bisa ngecek bahwa dia gratis, jadi bisa nampilin layar Payment sampai koneksi balik | Update aplikasi booth dari menu operator. Untuk booth yang memang gak pernah narik bayaran, buka juga desainnya di **Pix Design > UI Editor**, klik **Payment Screen**, matikan **Enabled in session flow** lalu klik **Save** (cuma di desain yang gak dipakai booth berbayar) |
| "Enter a price, or switch payment off above." waktu menyimpan | Harga sesinya 0 | Sesi gratis itu switch di atas tab Pricing, bukan harga 0 |
| "Payment isn't available right now. Please ask the booth staff for help." | Gak ada gateway di akun yang bertanda **Active** | Klik **Activate** di kartu gateway di **Settings > Payment Gateway** |
| Tagihan Stripe sukses tapi uangnya gak cair | Key yang tersimpan `sk_test_` | Tempel key live `sk_live_`, simpan, dan jalankan tes lagi |
| Kotak QR tetap kosong selama hitung mundur | Booth gagal download gambar QR | Cek koneksi internet booth dan mulai pembayaran lagi |
| Wallet pelanggan bilang "Merchant tidak ditemukan" | Pesan itu dari wallet pelanggan: data seluler lemah, atau QR sudah kedaluwarsa (berlaku selama **Payment timeout**) | Batalkan dan mulai pembayaran baru |
| Pembayaran sudah masuk gateway tapi sesinya gak ada pendapatan | Konfirmasinya gak sampai ke Pixture | Jalankan **Sync with payment gateway** di halaman Transactions untuk tanggal itu |

## Terkait {#related}

- [Bikin Payment Gateway](./create-a-payment-gateway.md)
- [Atur Harga, Paket dan Cetak Tambahan](./prices-and-packages.md)
- [Jual dan Bagikan Voucher](./vouchers.md)
- [Setup Pembayaran per Model Bisnis](./payment-setups-by-use-case.md)
- [Terima Bayaran Kartu, Koin dan Tunai](./connect-a-coin-or-card-reader.md)
- [Booth Pricing](../dashboard/booth-pricing.md)
- [Transactions](../dashboard/transactions.md)
- [Layar Payment di booth](../desktop-app/session-flow/payment.md)
