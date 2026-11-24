---
sidebar_position: 9
title: Jual dan Bagikan Voucher
description: Bikin kode voucher yang membayar satu sesi foto di booth, sebagai tiket sesi yang kamu jual tunai atau di muka, atau sebagai staff pass untuk tes gratis dan tamu VIP, satu per satu atau sekaligus banyak.
tags: [tutorials, payments, vouchers, cash, staff]
---

# Jual dan Bagikan Voucher

Di tutorial ini kamu bikin kode voucher yang membayar satu sesi di booth: staff pass untuk tes kamu sendiri, dan satu batch tiket sesi untuk dijual tunai. Lalu kamu pakai satu kode di booth, bagikan sisanya, dan rapikan daftarnya. Butuh sekitar 15 menit.

Voucher adalah kode yang diketik pelanggan di layar Payment booth sebagai ganti bayar di situ. Pixture punya dua jenis:

- **Tiket sesi** (dibuat sebagai **Sold session**): sesi yang sudah dibayar ke kamu, di kasir atau di muka. Kasih nilai, dan nilainya tercatat sebagai pendapatan waktu dipakai.
- **Staff pass**: sesi gratis yang bukan penjualan. Untuk tes kamu, crew kamu, tamu VIP, atau komplain yang mau kamu tebus.

Diskon bukan voucher: potongan persen atau nominal itu promo, dibuat di **Marketing Studio** (lihat [Jalankan Promo](./run-a-promo.md)).

## Kapan Dipakai {#when-to-use-it}

- **Booth dengan orang di kasir.** Kasir terima tunai, kasih kode tiket, dan penjualannya tetap tercatat di **Transactions** dengan nilainya.
- **Studio multi-booth.** Jual tiket di satu kasir; pelanggan pakai di booth mana pun yang kosong.
- **Event atau aktivasi brand.** Cetak 200 kode tiket di kartu untuk dibagikan klien, masing-masing berlaku satu sesi di booth kamu.
- **Tes dan crew.** Staff pass bikin kamu atau crew bisa jalanin sesi lengkap di booth berbayar tanpa bayar ke diri sendiri.

Mau pelanggan bayar online di HP dan dapat kode sendiri? Pakai [Jual Sesi Online](./sell-sessions-online.md).

## Sebelum Mulai {#before-you-start}

- **Pix Pro di komputer booth, dengan pembayaran nyala.** Kode diketik di layar Payment, jadi booth Pix Starter, atau booth dengan **Payment on this booth** mati, gak pernah minta kode.
- **Voucher** nyala di **Payment Methods** pada **Payment Screen** desain booth di UI Editor. Di desain default sudah nyala.
- **Internet di booth.** Booth ngecek kode ini ke Pixture waktu diketik.
- Akses owner atau admin (atau role yang boleh mengelola voucher).

## Persiapan {#prepare}

- **Tentukan nilai tiket.** Pakai harga sesi booth tujuannya, biar pendapatan di **Transactions** sama dengan uang tunai di laci.
- **Kasih nama batch yang gampang dicari**: tempat dan bulan ("City Mall tunai, November"), atau klien dan event-nya.
- **Pilih tanggal berakhir.** Kode untuk satu hari atau satu event sebaiknya kedaluwarsa di akhirnya, biar kode yang ketemu berminggu-minggu kemudian gak bisa dipakai.
- **Rencanakan cara kode sampai ke orang.** Kode batch panjangnya 6 karakter; export lalu cetak di kartu, struk atau stiker.

## Langkah 1: Buka Vouchers {#step-1-open-vouchers}

1. Klik **Vouchers** di sidebar.
2. Tab-tabnya mengelompokkan kode kamu: **Session tickets**, **Staff passes**, **From promos** (kode buatan promo) dan **Batches**.
3. Klik **+ Create**.
4. **Single Voucher** bikin satu kode yang kamu ketik sendiri.
5. **Generate Batch** bikin banyak kode acak sekaligus.

![Halaman Vouchers dengan Vouchers di sidebar, tab-tab, + Create, Single Voucher dan Generate Batch ditandai](/img/docs/steps/tutorials-vouchers--create-menu.webp)

## Langkah 2: Bikin Staff Pass {#step-2-make-a-staff-pass}

1. Klik **+ Create > Single Voucher**, ketik **Voucher Code** yang gampang diingat (maksimal 50 karakter, misalnya STAFFTEST), dan atur **What is it?** ke **Staff pass**.

![Jendela Create voucher dengan What is it? ditandai, Staff pass terpilih](/img/docs/steps/tutorials-vouchers--create-single.webp)

Lalu atur **Max Redemptions** (1 artinya sekali pakai; 30 artinya 30 sesi, untuk satu tim crew), pilih booth di **Booth Restriction** atau biarkan **All Booths**, tambah **Expiration Date (optional)** dalam zona waktu akun kamu, lalu klik **Create Voucher**.

Staff pass gak pernah dihitung sebagai pendapatan, jadi penjualan kamu gak kelihatan lebih besar dari aslinya.

## Langkah 3: Jual Tiket Sesi dalam Batch {#step-3-sell-session-tickets-in-a-batch}

1. Klik **+ Create > Generate Batch** dan ketik **Batch Name**.
2. Atur **Number of Codes** (maksimal 1000; masing-masing kode acak 6 karakter), dan **What is it?** ke **Sold session**.
3. Isi **Value per Code**: harga yang dibayar pelanggan untuk satu sesi. Nilainya dihitung sebagai pendapatan waktu kode dipakai.
4. Biarkan **Max Redemptions per Code** di 1, pilih booth di **Booth Restriction** kalau tiketnya untuk satu booth, atur **Expiration Date (optional)**, lalu klik **Generate Codes**.

![Jendela Generate Batch dengan Number of Codes, Value per Code dan Generate Codes ditandai](/img/docs/steps/tutorials-vouchers--create-batch.webp)

Batch-nya muncul di tab **Batches**.

## Langkah 4: Bagikan Kodenya {#step-4-hand-out-the-codes}

1. Buka tab **Batches** dan klik nama batch-nya. Halamannya nampilin setiap kode dengan **Status**, **Redemptions** dan **Last Redeemed**.
2. Klik **Export CSV** untuk download kodenya, lalu cetak di kartu atau kasih file-nya ke tukang cetak.

![Halaman batch voucher dengan daftar kode dan Export CSV ditandai](/img/docs/steps/tutorials-vouchers--batch-codes.webp)

## Langkah 5: Pakai Kode di Booth {#step-5-use-a-code-at-the-booth}

1. Pelanggan mulai sesi. Di layar Payment mereka tap tombol voucher (**Use Voucher** di desain default) dan ketik kodenya.
2. Booth ngecek kode ke Pixture. Kode yang valid membayar satu sesi Single dan sesi lanjut ke template, tanpa tagihan.
3. Kode yang gak bisa dipakai nampilin alasannya: "This voucher has expired.", "This voucher has been fully redeemed.", "This voucher is not valid for this booth." atau "This voucher is no longer active."

![Jendela voucher dengan kode yang sudah diketik dan Apply Voucher ditandai](/img/docs/steps/tutorials-vouchers--voucher-entry.webp)

## Langkah 6: Rapikan Daftarnya {#step-6-keep-the-list-tidy}

- **Deactivate** bikin kode gak bisa dipakai (kartu hilang, crew yang sudah keluar); **Activate** nyalakan lagi.
- **Refill** ngasih kode yang sudah habis tambahan pemakaian lewat **Add Uses**, dan bisa atur **New Expiration Date** atau **Remove expiry date (never expires)**.
- **Delete** menghapus kode, atau seluruh batch dari tab **Batches**.
- Kode dari sebelum ada tiket sesi dan staff pass muncul di banner kuning (misalnya "2 codes to sort"). Klik **Staff pass** atau **Session ticket** sekali untuk mengelompokkan semuanya.

![Banner codes to sort dengan kode-kodenya serta tombol Staff pass dan Session ticket ditandai](/img/docs/steps/tutorials-vouchers--sort-codes.webp)

## Langkah 7: Jual Tiket Online (Opsional) {#step-7-sell-tickets-online-optional}

Klik **Online shop link** di atas halaman Vouchers untuk menyalin link toko online kamu. Pelanggan buka di HP, pilih booth dan paket, bayar lewat gateway kamu, dan dapat kode yang diterima booth walaupun lagi offline. Setup lengkapnya di [Jual Sesi Online](./sell-sessions-online.md).

![Halaman Vouchers dengan tombol Online shop link ditandai](/img/docs/steps/tutorials-vouchers--online-shop-link.webp)

## Cek Hasilnya {#check-it-worked}

- Kodenya muncul di tab **Session tickets** atau **Staff passes** (kode batch di **Batches**).
- Diketik di booth, kodenya memulai sesi tanpa pembayaran.
- Jumlah pemakaiannya naik, dan tiket sesi yang punya nilai muncul di **Transactions** dengan nominal itu.

## Tips {#tips}

- **Simpan satu staff pass untuk kamu sendiri** dengan banyak pemakaian dan tanpa kedaluwarsa, dibatasi ke booth tes kamu. Ini cara tercepat ngecek booth setelah ada perubahan.
- **Satu batch per tempat dan per bulan.** Daftar yang di-export jadi cocok dengan buku kas, dan batch yang kedaluwarsa gampang dihapus.
- **Batasi tiket ke satu booth** kalau harga booth beda-beda, biar tiket murah gak dipakai di booth yang mahal.
- **Isi nilai dalam mata uang booth.** Kode yang punya nilai cuma berlaku di booth dengan mata uang yang sama.
- **Hindari huruf yang mirip di kode yang kamu ketik sendiri** (I dan 1, O dan 0), biar pelanggan langsung benar ngetiknya.

## Kalau Ada Masalah {#troubleshooting}

| Masalah | Kenapa | Solusinya |
|---|---|---|
| Booth gak pernah minta kode | Booth jalan gratis (pembayaran mati atau Pix Starter), atau **Voucher** mati di Payment Screen desainnya | Nyalakan pembayaran dan nyalakan **Voucher** di **Payment Methods** di UI Editor |
| "This voucher is not valid for this booth." | Kodenya dibatasi ke booth lain (atau grup Multi-Booth lain) | Bikin kode untuk booth ini, atau untuk **All Booths** |
| "This voucher has been fully redeemed." | Sudah mencapai **Max Redemptions** | **Refill** dengan **Add Uses**, atau bikin yang baru |
| "This voucher has expired." | **Expiration Date** sudah lewat (dalam zona waktu akun kamu) | **Refill** dengan **New Expiration Date** |
| "This voucher is in IDR and cannot be used at this booth." (atau mata uang lain) | Nilai kodenya dalam mata uang yang beda dari booth | Bikin kode dengan nilai dalam mata uang booth |
| "Failed to validate voucher. Please try again." | Booth offline; kode dari halaman Vouchers dicek online | Online-kan booth lagi; untuk jualan offline pakai kode dari toko online |
| Gak ada pilihan diskon di **Create voucher** | Diskon itu promo | Bikin di **Marketing Studio > Promo** |

## Terkait {#related}

- [Jual Sesi Online](./sell-sessions-online.md)
- [Jalankan Promo](./run-a-promo.md)
- [Terima Bayaran Kartu, Koin dan Tunai](./connect-a-coin-or-card-reader.md) (Setup D, tunai di kasir)
- [Terima Pembayaran di Booth](./accept-payments.md)
- [Vouchers reference](../dashboard/vouchers.md)
