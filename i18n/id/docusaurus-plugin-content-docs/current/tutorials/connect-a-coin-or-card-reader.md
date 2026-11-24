---
sidebar_position: 12
title: Terima Bayaran Kartu, Koin dan Tunai
description: Terima uang di booth tanpa QR code, pakai card reader Stripe Terminal, coin atau bill acceptor, reader Nayax atau terminal DuitNow Transpire QR di board CASH-Interface2, bridge kamu sendiri lewat Hardware API lokal, atau tunai di kasir yang diubah jadi kode voucher.
tags: [tutorials, payments, hardware, coin, cash, nayax, cash-interface2, stripe-terminal, duitnow, transpire-qr, malaysia]
---

# Terima Bayaran Kartu, Koin dan Tunai

QR code lewat payment gateway adalah cara default booth dibayar. Tutorial ini ngebahas cara lain uang masuk: card reader Stripe Terminal, coin atau bill acceptor, card reader Nayax, Ingenico atau ePort atau terminal DuitNow Transpire QR di board CASH-Interface2, bridge kamu sendiri lewat Hardware API lokal di booth, dan uang tunai yang diterima orang di kasir. Semua setup berakhir sama: sesi foto tercatat sebagai dibayar di **Transactions**, lengkap dengan nominalnya, bukan sebagai sesi gratis.

Siapkan sekitar 30 menit untuk setup keystroke setelah hardware tersambung, lebih lama kalau kamu bikin bridge.

## Kapan Dipakai {#when-to-use-it}

- **Booth self-service yang pelanggannya banyak bawa uang tunai atau kartu, bukan aplikasi bank.** Coin atau bill acceptor, atau card reader, bikin mereka bisa bayar di booth tanpa crew.
- **Booth mall di luar Indonesia.** Reader Stripe Terminal bikin pelanggan bisa tap atau masukkan kartu, tanpa aplikasi.
- **Booth di Malaysia.** Terminal QR DuitNow di sebelah booth bikin pelanggan bisa bayar pakai aplikasi bank Malaysia apa pun.
- **Studio atau kafe dengan kasir.** Kasir terima tunai dan kasih kode voucher; penjualannya tetap masuk ke **Transactions**.

Pelanggan yang bayar pakai aplikasi di HP sudah bisa pakai QR code dari gateway kamu, tanpa hardware tambahan: lihat [Terima Pembayaran di Booth](./accept-payments.md). Photobox pop-up yang dirakit di lokasi jarang cocok pakai kotak koin; kode voucher dan QR sudah cukup di sana.

## Sebelum Mulai {#before-you-start}

- **Pix Pro di komputer booth.** Di Pix Starter, booth melewati layar Payment, jadi gak ada yang bisa ditagih.
- **Pixture Photobooth 1.1.87 atau lebih baru**, supaya pembayaran hardware tercatat sebagai pendapatan.
- **Tab Pricing booth sudah diatur:** **Payment on this booth** nyala dan ada **Session price** (lihat [Booth Pricing](../dashboard/booth-pricing.md)). Sistem tunai yang memulai sesi mencatatnya di harga ini.
- **Hardware tersambung ke komputer booth dan diatur di sisinya sendiri:** nilai koin, harga, output pulsa atau keystroke. Board CASH-Interface2 butuh catu daya 12 V sendiri; selalu cabut dulu sebelum menyambungkan acceptor.
- **Gateway Stripe** kalau kamu pakai reader Stripe Terminal; lihat [Bikin Payment Gateway](./create-a-payment-gateway.md).

## Persiapan {#prepare}

- **Baca manual pembuat hardware dulu.** Nilai koin, channel uang kertas, panjang pulsa dan harga diatur di hardware atau software-nya sendiri, gak pernah di Pixture.
- **Pilih nilai pulsa yang membagi habis setiap harga.** Booth ngitung pulsa atau keystroke, bukan uang. Dengan pulsa Rp5.000, Rp25.000 dan Rp30.000 sama-sama pas; dengan pulsa Rp10.000, Rp25.000 gak bisa dibayar pas.
- **Matikan listrik sebelum nyambung kabel.** Cabut catu daya 12 V board CASH-Interface2 sebelum menyambung atau memindah acceptor atau reader.
- **Siapkan koin, uang kertas atau kartu untuk tes**, dan harga kecil untuk percobaan pertama.

## Langkah 1: Pilih Setup Kamu {#step-1-pick-your-setup}

| Kamu punya | Setup | Yang dilakukan pelanggan |
|---|---|---|
| Akun Stripe dan reader Stripe Terminal | **A: Stripe Terminal** | Tap atau masukkan kartu di reader booth |
| Coin atau bill acceptor, atau reader Nayax, Ingenico atau ePort, di board CASH-Interface2, dengan satu harga tetap | **B1: Start-gate** (disarankan) | Bayar di reader dulu; booth mulai sendiri dan gak pernah nampilin harga |
| Hardware yang sama, tapi kamu jual paket dan mau nominalnya tampil di layar | **B2: Bayar di layar Payment** | Pilih paket di booth, lalu bayar di reader; reader yang konfirmasi |
| Kotak koin dengan adaptor keyboard USB, atau CASH-Interface2 yang ngetik satu tombol per koin | **B3: Koin lewat keystroke** | Masukkan koin sambil booth ngitung di layar |
| Booth di Malaysia yang harus nerima QR DuitNow di booth | **B4: Terminal QR DuitNow** (Transpire QR), lalu B1 atau B3 | Scan QR di terminal pakai aplikasi bank atau e-wallet Malaysia |
| PLC, bridge box atau terminal yang bisa memanggil URL | **C: Hardware API lokal** | Tergantung bridge kamu |
| Orang di kasir yang terima tunai | **D: Kode voucher** | Bayar ke kasir, dapat kode, ketik di kotak Voucher |

Setup mana yang cocok untuk bisnis kamu dibahas di [Setup Pembayaran per Model Bisnis](./payment-setups-by-use-case.md).

## Langkah 2: Nyalakan Metode Pembayaran {#step-2-turn-on-the-payment-methods}

Semua setup kecuali start-gate lewat layar Payment booth, dan apa yang ditawarkan layar itu diatur di UI Editor.

1. Buka **Pix Design > UI Editor**, buka project booth dan klik tab **Payment Screen**.
2. Di **Payment Methods**, nyalakan metode yang diterima booth: **QR Pay** (gateway), **Debit/Credit Card** (card reader: nampilin popup tap-to-pay sampai reader konfirmasi), **Coin Acceptor** (nampilin popup masukkan koin sampai cukup) dan **Voucher**. Metode terakhir yang nyala gak bisa dimatikan.
3. **Advanced mode** mengubah popup itu jadi layar penuh yang kamu desain sendiri, dengan halaman **Payment Success**. Biarkan mati untuk pakai popup bawaan.
4. **Enabled in session flow** di Payment Page Settings adalah switch yang dimatikan setup start-gate. Klik **Save**.

![UI Editor di Payment Screen dengan Advanced mode, switch QR Pay, Debit/Credit Card, Coin Acceptor dan Voucher, serta Enabled in session flow](/img/docs/steps/tutorials-connect-a-coin-or-card-reader--pix-design-ui-editor-payment.webp)

## Langkah 3: Sambungkan Hardware {#step-3-connect-the-hardware}

Ikuti satu setup dari Langkah 1 yang cocok dengan hardware kamu.

### Setup A: Card Reader Stripe Terminal {#setup-a-a-stripe-terminal-card-reader}

Pelanggan tap atau masukkan kartu di reader di booth. Pembayarannya lewat akun Stripe kamu, gateway yang sama yang biasanya nampilin QR Stripe. Stripe jalan di seluruh dunia, jadi ini pilihan kartu di luar Indonesia.

1. Sambungkan Stripe seperti di [Bikin Payment Gateway](./create-a-payment-gateway.md) dan jalankan tes pembayaran.
2. Daftarkan reader di Stripe Dashboard di **Terminal** dan sambungkan ke Wi-Fi booth.

   <!-- SHOT-NEEDED: hardware: a Stripe Terminal reader mounted beside a booth screen, cable-free, on the booth's Wi-Fi -->
3. Di kartu gateway Stripe di **Settings > Payment Gateway**, buka **Card readers (Stripe Terminal)** dan pilih reader di dropdown booth. Tulisannya **No reader (QR payment)** sampai kamu pilih.
4. Di UI Editor, nyalakan **Debit/Credit Card** di Payment Methods lalu **Save**.
5. Mulai sesi di booth, tap metode kartu, dan tap kartu di reader. Booth lanjut ke template begitu Stripe konfirmasi.

Paket jalan dengan setup ini: reader menarik nominal apa pun yang dipilih pelanggan di layar.

**Sebelum beli reader.** Stripe jual reader-nya di Stripe Dashboard di **Terminal > Shop**, dan model yang bisa dipesan tergantung negara akun Stripe kamu. Reader cuma narik mata uang akun itu sendiri: akun Stripe Malaysia narik MYR, akun Amerika narik USD. Booth dengan harga di mata uang lain dapat "Card reader payment could not be started", bukan layar tap, jadi samakan mata uang booth dengan akun.

**Yang dilihat pelanggan.**

- **Kartu disetujui:** sesaat setelah tap, booth lanjut dan sesi mulai.
- **Kartu ditolak:** reader nampilin penolakan dan booth tetap nunggu. Untuk coba lagi, pelanggan batalkan lalu pilih metode kartu lagi, yang ngirim tagihan baru ke reader.
- **Pelanggan batal:** membatalkan pembayaran di booth membersihkan layar tap di reader dan membatalkan tagihannya, jadi gak ada yang bisa masuk belakangan.

:::caution Biarkan booth jalan sampai pembayaran terkonfirmasi
Booth mengonfirmasi pembayaran kartu dengan nanya ke Stripe selama layar payment-nya terbuka. Kalau booth ditutup, restart atau mati listrik tepat setelah tap, Stripe tetap menyimpan tagihannya tapi gak ada sesi yang tercatat. Cari pembayarannya di Stripe Dashboard di **Payments** lalu refund, atau kasih pelanggan kode voucher.
:::

### Setup B: Sistem Tunai CASH-Interface2 {#setup-b-a-cash-interface2-cash-system}

Kit CASH-Interface2 (CI2) adalah board plus software keystroke-nya. Board-nya nerima coin validator (NRI G13, RM5, EMP800 dan yang pin-nya kompatibel), note validator (NV9, NV10) dan, lewat input PULSE atau adaptor PULSE, reader non-tunai seperti Nayax ONYX, VPOS Touch dan AMIT 3, Ingenico dan ePort. Koin, uang kertas dan card reader bisa nyala bersamaan.

Software-nya gak bisa memanggil URL. Dia menekan hotkey ke jendela yang judulnya cocok dengan "receiver name"-nya. Aplikasi Pixture Photobooth mengganti judul jendelanya per layar: `Pix - START` di layar Start dan `Pix - PAYMENT` di layar Payment, jadi sistem tunai selalu tahu booth lagi di mana.

<!-- SHOT-NEEDED: hardware: a CASH-Interface2 board wired to a coin acceptor and a Nayax reader on its PULSE input, with the 12 V supply unplugged -->

Ketiga setup CI2 pakai halaman **Hardware API** di booth: buka menu operator (tap sudut kanan atas dua kali dalam 3 detik dan masukkan PIN kalau ada), lalu **Hardware API**. Bagian **CASH-Interface2 keystroke edition** di sana nampilin tabel setup yang sama dengan di bawah, jadi kamu bisa salin nilainya sambil berdiri di booth.

#### Setup B1: Start-gate (disarankan)

Pelanggan bayar ke sistem tunai dulu. Begitu kredit mencapai harga, sistem menekan **F13** dan sesi mulai. Booth gak pernah nampilin harga, dan sesi tercatat dibayar sesuai harga sesi booth.

| Di mana | Setelan | Nilai |
|---|---|---|
| Software CI2 | Receiver name | `Pix - START` |
| | Hotkey | `F13` |
| | Costs | Harga sesi kamu |
| Portal Nayax | Interface | PULSE |
| | Credit per pulse | Sama dengan harga sesi |
| | Pulses per vend | 1 |
| Board CI2 | Channel value | Sama dengan credit per pulse |
| Pix Design | Payment screen | **Off** |
| | Session trigger | **F13 only** |
| Halaman Hardware API | Treat F13 as the cash system's paid signal | **On** |

1. Di software CI2, atur receiver name ke `Pix - START`, hotkey ke **F13**, dan costs ke harga sesi kamu. Untuk koin dan uang kertas, cuma itu; channel value di board sudah membawa nilai tiap koin.
2. Untuk reader Nayax, login ke portal Nayax, buka **Operations > Machines**, pilih reader-nya dan atur atribut **Pulse/ccTalk**: **Credit per Pulse** ke harga sesi kamu, **Number of Pulses per Vend** ke 1, **Pulse Inhibit** ke "03 - Inhibit Enabled and Active on logic 1", serta **Pulse Line Welcome Message** dan **Pulse Title** ke tulisan yang mau ditampilkan reader (misalnya harga dan "1 Photo"). Simpan, kirim **Update Queue** dari Actions, lalu reboot reader supaya setelannya berlaku. Atur channel value board CI2 ke credit per pulse yang sama.
3. Di UI Editor, buka project booth. Di tab **Payment Screen**, matikan **Enabled in session flow**. Di tab **Start Screen**, di **Session Trigger**, centang **F13** saja dan hapus centang **Touch Screen**, tombol-tombol dan **Start Button**, supaya gak ada yang bisa mulai sesi tanpa bayar. **Save**.

![UI Editor di Start Screen dengan checkbox Session Trigger, termasuk F13](/img/docs/steps/tutorials-connect-a-coin-or-card-reader--pix-design-ui-editor-start.webp)

4. Di booth, buka **Hardware API** dan nyalakan **Treat F13 as the cash system's paid signal**. Halaman itu lalu nampilin **Checks for this booth**: titik hijau kalau F13 sudah jadi session trigger, dan peringatan kuning selama Touch Screen atau tombol navigasi masih nyala.

![Halaman Hardware API booth dengan switch Treat F13 as the cash system's paid signal ditandai](/img/docs/steps/tutorials-connect-a-coin-or-card-reader--hardware-f13.webp)

5. Tap **Start Booth** dan masukkan uang ke acceptor. Sesi mulai sendiri begitu harga tercapai, dan **Transactions** nampilin sesinya dengan harga sesi.

:::caution Jangan pernah tambah trigger kedua di start berbayar
F13 harus tetap jadi satu-satunya session trigger. Start Button atau Touch Screen di sebelahnya bikin pelanggan bisa mulai gratis, dan halaman Hardware API ngasih peringatan selama salah satunya nyala.
:::

#### Setup B2: Bayar di layar Payment

Pelanggan pilih paket di layar Payment booth dan bayar di reader atau kotak koin dari popup Card atau Coin. Booth menaruh nominal yang harus dibayar di judul jendelanya, sistem tunai ngitung uangnya dan menekan **F13** begitu nominal terpenuhi, lalu booth mencatat sesi sebagai dibayar sesuai nominal di layar. Ini setup untuk paket dan total berjalan di layar.

| Di mana | Setelan | Nilai |
|---|---|---|
| Software CI2 | Receiver name | `Pix - PAYMENT` |
| | Detect partial | On (judulnya juga membawa nominal) |
| | Variable price | On, supaya membaca `#amount#` dari judul |
| | Hotkey | `F13` |
| Portal Nayax | Interface | PULSE, satu harga atau menu yang dipilih pelanggan |
| Pix Design | Payment screen | **On** |
| | Payment methods | **Debit/Credit Card** dan/atau **Coin Acceptor** nyala |
| Halaman Hardware API | Treat F13 as the cash system's paid signal | **On** |

1. Di software CI2, atur receiver name ke `Pix - PAYMENT`, nyalakan **Detect partial** dan **Use variable price**, dan atur hotkey ke **F13**. Selama booth nunggu pembayaran hardware, judulnya bertuliskan `Pix - PAYMENT #<amount>#` dalam satuan terkecil mata uang, jadi harga variabel ngikutin pilihan pelanggan.
2. Di UI Editor, biarkan Payment Screen nyala dan nyalakan **Debit/Credit Card** dan/atau **Coin Acceptor**. **Save**.
3. Di booth, nyalakan **Treat F13 as the cash system's paid signal** di halaman Hardware API. Dengan layar Payment nyala, halaman itu nampilin receiver sebagai `Pix - PAYMENT` dan ngingetin kamu untuk nyalakan metode Card atau Coin.
4. Tes: mulai sesi, pilih paket, tap metode kartu atau koin lalu bayar. Popup tertutup saat F13 masuk dan booth lanjut ke template.

:::caution Paket butuh reader yang bisa narik nominal berubah-ubah
Setup pulsa dan keystroke sering cuma satu harga tetap. Booth percaya nominal yang dia tampilkan, jadi reader harga tetap plus paket bakal mencatat pendapatan lebih besar dari yang terkumpul. Pastikan dulu reader kamu bisa harga variabel; kalau harganya tetap, matikan paket dan jual harga sesi saja. Tab **Price & packages** juga bilang begitu.
:::

![Sub-tab Pricing Price & packages dengan Session price, Print format dan toggle paket](/img/docs/booth-pricing-packages.webp)

#### Setup B3: Koin lewat keystroke (tanpa F13)

Untuk kotak koin atau uang kertas dengan adaptor keyboard USB, atau CI2 yang diatur ngetik satu tombol per koin atau pulsa. Booth ngitung keystroke-nya sendiri selama popup **Insert Coins** atau **Tap to Pay** terbuka, dan pelanggan lihat totalnya naik.

1. Atur acceptor untuk ngirim satu tombol (misalnya F1) per satuan nilai; di board CI2, satu keystroke per pulsa.
2. Di UI Editor, nyalakan **Coin Acceptor** (dan **Debit/Credit Card** untuk reader satu pulsa per kredit) di Payment Methods. **Save**.
3. Di halaman Hardware API booth, di **Keyboard coin input**:
   1. Nyalakan **Enable keyboard coin input**.
   2. Klik kotak **Coin key** lalu masukkan satu koin (atau tekan tombol yang dikirim hardware).
   3. Atur **Value per keystroke** ke nilai satu keystroke dalam mata uang booth. Mata uang pecahan tetap dihitung benar.
   4. Tap **Save & Apply**.

   ![Halaman Hardware API booth, Keyboard coin input, dengan Enable keyboard coin input, Coin key, Value per keystroke dan Save & Apply ditandai](/img/docs/steps/tutorials-connect-a-coin-or-card-reader--hardware-coin.webp)

4. Mulai sesi, buka popup Coin, dan masukkan uang sampai totalnya tercapai.

Keyboard coin input dan sinyal bayar F13 gak bisa dicampur: menyalakan satu bikin yang lain jadi abu-abu, karena di start-gate sistem tunai yang ngitung.

:::caution Setiap harga harus kelipatan pulsa
Booth ngitung keystroke, bukan uang, dan selesai di keystroke pertama yang menutup harga. Dengan **Value per keystroke** Rp10.000 dan paket Rp25.000, pelanggan bayar Rp30.000 (tiga pulsa) dan booth mencatat Rp25.000. Sama juga untuk **Credit per Pulse** reader Nayax dan koin terkecil kotak koin. Pilih nilai yang membagi habis setiap harga yang kamu jual, misalnya Rp5.000 untuk Rp25.000 dan Rp30.000.
:::

:::info Uang kertas, kembalian dan cetak tambahan
Note validator kerjanya seperti coin validator; board CI2 punya colokan BILL sendiri dan channel value untuk tiap pecahan. Kembalian urusan sistem tunai: CI2 bisa ngasih kembalian dari maksimal dua hopper, dan booth gak tahu soal itu. Cetak tambahan yang dibeli di layar Sharing selalu dibayar pakai QR lewat gateway; reader atau kotak koin gak bisa dipakai untuk itu.
:::

#### Setup B4: Terminal QR DuitNow di Malaysia (Transpire QR) {#setup-b4-a-duitnow-qr-terminal-in-malaysia-transpire-qr}

DuitNow QR adalah standar QR nasional Malaysia, jadi hampir semua aplikasi bank dan e-wallet Malaysia bisa bayar. Payment gateway kamu di Pixture belum bisa nampilin QR DuitNow (Stripe di Malaysia nerima kartu, bukan DuitNow). Terminal **Transpire QR** mengisi celah itu: layar kecil di sebelah booth nampilin QR DuitNow dinamis, pelanggan scan dan bayar pakai aplikasinya sendiri, lalu terminal ngirim pulsa seperti koin, sinyal yang sama dengan reader Nayax. Di board CASH-Interface2, pulsa itu menjalankan setup B1 atau B3 di atas, jadi gak ada yang baru di Pixture.

Transpire QR (transpire.com.my) adalah perusahaan Malaysia yang bikin terminal ini untuk laundromat dan vending machine. Mereka bukan bagian dari Pixture: kamu beli terminal dan buka akun merchant di Transpire, dan uangnya cair ke kamu lewat mereka. Pixture mencatat nominal yang dihitung booth, jadi **Transactions** nampilin sesi sebagai dibayar sesuai nominal itu.

**Tanya Transpire sebelum beli.** Halaman publik mereka gak nyebutin hal-hal ini, padahal ini yang nentuin setup mana yang bisa kamu jalankan:

| Pertanyaan | Kenapa penting |
|---|---|
| Bisakah terminal narik lebih dari satu nominal (menu, atau nominal bebas), atau cuma satu harga tetap? | Harga tetap: pakai B1 dengan satu harga sesi dan paket mati. Lebih dari satu nominal: B3 bisa ngikutin paket |
| Satu pulsa nilainya berapa, dan bisa diubah? | Jadi **Credit per pulse** di bawah. Setiap harga yang kamu jual harus kelipatan pulsa |
| Model mana yang cocok untuk mesin yang cuma butuh output pulsa? | Transpire jual panel TQR-DNQR dan seri MDB untuk vending machine; photobooth butuh output pulsa |
| Harga terminal, biaya dan waktu pencairan | Transpire gak mempublikasikannya |
| Registrasi merchant | Siapkan registrasi bisnis Malaysia (SSM), seperti di penyedia pembayaran Malaysia lainnya |

**Kabel.** Terminal Transpire punya output pulsa yang terisolasi optik dengan format yang bisa diatur, dibuat untuk menggantikan sinyal coin acceptor. Sambungkan ke input PULSE board CASH-Interface2 (lewat adaptor PULSE kalau board-nya butuh), seperti menyambung reader Nayax. Cabut catu daya 12 V board sebelum menyambung apa pun.

| Di mana | Setelan | B1 start-gate (satu harga) | B3 menghitung (nominal bebas) |
|---|---|---|---|
| Terminal Transpire | Harga | Harga sesi kamu, dalam RM | Nominal yang boleh dibayar pelanggan |
| | Credit per pulse | Seluruh harga sesi (satu pulsa per sesi) | Satuan kecil yang membagi habis setiap harga, misalnya RM1 |
| Board CI2 | Channel value | Sama dengan credit per pulse | Sama dengan credit per pulse |
| Software CI2 | Receiver name | `Pix - START` | Satu keystroke per pulsa, gak butuh receiver |
| | Hotkey | `F13` | Tombol yang diketik per pulsa (misalnya F1) |
| Pix Design | Payment screen | **Off** | **On**, dengan **Debit/Credit Card** nyala |
| | Session trigger | **F13 only** | Trigger biasa kamu |
| Halaman Hardware API | Treat F13 as the cash system's paid signal | **On** | Off |
| | Keyboard coin input | Off | **On**, **Value per keystroke** = credit per pulse |

1. Atur mata uang booth ke **MYR** dan **Session price**-nya di tab Pricing (lihat [Booth Pricing](../dashboard/booth-pricing.md)).
2. Minta Transpire mengatur harga dan nilai pulsa terminal sesuai tabel. Setelan pulsa terminal ada di sisi Transpire, bukan di Pixture.
3. Ikuti **B1** di atas untuk satu harga: receiver `Pix - START`, **F13** sebagai satu-satunya session trigger, dan **Treat F13 as the cash system's paid signal** nyala.
4. Atau ikuti **B3** supaya booth yang ngitung: atur board CI2 ngetik satu tombol per pulsa, nyalakan **Debit/Credit Card** di UI Editor, dan di halaman Hardware API nyalakan **Enable keyboard coin input** dengan **Value per keystroke** sama dengan satu pulsa. Popup Tap to Pay nampilin nominal yang sudah masuk dibanding harga, dan lanjut begitu harga terpenuhi.
5. Bayar nominal kecil beneran pakai aplikasi bank Malaysia. Cek sesi mulai, **Transactions** di dashboard Pixture nampilin sesi dengan harganya, dan pembayaran yang sama muncul di laporan penjualan Transpire.

:::caution Setiap harga harus kelipatan pulsa
Booth ngitung pulsa, bukan ringgit. Dengan RM10 per pulsa dan paket RM15, pelanggan harus bayar RM20 dan booth mencatat RM15. Pilih nilai pulsa yang membagi habis setiap harga yang kamu jual, atau jual satu harga dengan B1.
:::

### Setup C: Bridge Kamu Sendiri di Hardware API Lokal {#setup-c-your-own-bridge-on-the-local-hardware-api}

Kalau hardware kamu bisa bikin request HTTP (PLC, bridge box, terminal kartu dengan webhook), booth menjalankan API kecil di komputernya.

1. Di booth, buka menu operator > **Hardware API**.
2. Nyalakan **Enable local API**. Default-nya mendengarkan di **Port** 14500; ganti kalau port itu sudah dipakai.
3. Biarkan **Allow LAN access** mati kalau bridge jalan di komputer booth itu sendiri; nyalakan kalau bridge ada di tempat lain di jaringan yang sama. Halaman itu nampilin alamat komputer ini.
4. Tap **Save & Apply**; **Access token** terisi. Baca dari layar dan masukkan ke bridge kamu. **Regenerate** bikin token baru dan membatalkan yang lama.

![Halaman Hardware API booth dengan Enable local API, Port, Allow LAN access dan Regenerate ditandai](/img/docs/steps/tutorials-connect-a-coin-or-card-reader--hardware-local-api.webp)

Setiap request harus membawa token. Halamannya nampilin endpoint-nya:

| Endpoint | Dipakai untuk |
|---|---|
| `GET /api/v1/status` | Membaca layar saat ini, status pembayaran, dan nominal yang harus dibayar beserta mata uangnya, jadi bridge ngambil harga dari booth, bukan nyimpan salinannya sendiri |
| `GET /api/v1/start` | Memulai sesi, dengan pengaman yang sama seperti tap pelanggan. Ditolak (409) kalau booth gak di layar Start |
| `GET /api/v1/payment-complete` | Menandai nominal di layar Payment sebagai dibayar. Cuma diterima selama booth nunggu pembayaran hardware; selain itu 409 |

Bridge yang umum polling `/api/v1/status`, nunggu sampai booth ada di layar Payment, menagih nominal yang terbaca di sana, lalu memanggil `/api/v1/payment-complete` begitu reader konfirmasi. Bridge start-gate menagih harga tetap dulu lalu memanggil `/api/v1/start`. Cek status sebelum terima uang: komputer yang diblokir menolak memulai sesi.

### Setup D: Tunai di Kasir, sebagai Kode Voucher {#setup-d-cash-at-the-counter-as-voucher-codes}

Untuk booth yang dijaga dan ada orang yang terima tunai, satu batch kode voucher sekali pakai mengubah setiap pembayaran jadi tiket yang dimengerti booth, dan pendapatannya tetap masuk laporan.

1. Buka **Vouchers**, klik **+ Create**, lalu **Generate Batch**.
2. Kasih batch **Batch Name** (misalnya venue dan bulan), **Number of Codes** yang kamu butuhkan (kode 6 karakter, maksimal 1000 per batch), dan atur **What is it?** ke **Sold session**: setiap kode adalah sesi yang sudah dibayar seseorang.
3. Isi **Value per Code**: harga sesi kamu. Nominal itu dicatat ke setiap sesi yang memakai kode di **Transactions**, jadi penjualan tunai dihitung sebagai pendapatan.
4. Biarkan **Max Redemptions per Code** di 1, batasi batch ke booth itu di **Booth Restriction** kalau mau, atur **Expiration Date** di akhir hari atau event, lalu klik **Generate Codes**. Batch dan kodenya muncul di tab **Batches**.

![Jendela Generate Batch dengan Batch Name, Number of Codes, What is it?, Value per Code, Max Redemptions per Code, Booth Restriction dan Expiration Date](/img/docs/steps/tutorials-connect-a-coin-or-card-reader--vouchers-create-batch.webp)

5. Kasir terima uang dan kasih satu kode. Di layar Payment booth pelanggan tap **Voucher** dan ketik kodenya; booth nerima dan lanjut.

Biarkan **QR Pay** juga nyala, supaya pelanggan yang lebih suka bayar pakai HP tetap bisa. Untuk pelanggan yang mau bayar sebelum datang, [Jual Sesi Online](./sell-sessions-online.md) melakukan hal yang sama lewat link, tanpa kasir.

## Langkah 4: Jalankan Tes Berbayar {#step-4-run-a-paid-test}

1. Pasang harga kecil untuk tes, atau pakai harga beneran dengan koin atau kartu kamu sendiri.
2. Mulai sesi di booth dan bayar pakai hardware (atau ketik kode untuk Setup D).
3. Lihat booth lanjut ke template sendiri, lalu selesaikan sesinya.

## Cek Hasilnya {#check-it-worked}

- Di dashboard, **Transactions** nampilin sesi dengan nominal yang dilaporkan hardware atau nilai kode, bukan sebagai sesi gratis, dan dihitung ke **Total Revenue**.
- Kartu **Revenue** di beranda dashboard juga ikut menghitungnya.
- Untuk reader Stripe atau terminal DuitNow, pembayaran yang sama muncul di laporan penyedia itu sendiri.

![Halaman Transactions dengan kartu Total Transactions, Total Revenue, Payment Success dan Session Completion serta baris sesi](/img/docs/steps/tutorials-connect-a-coin-or-card-reader--transactions.webp)

## Tips {#tips}

- **Tes setiap ada perubahan di sisi hardware** (harga baru, nilai pulsa baru, update firmware). Booth cuma ngitung apa yang dikirim hardware.
- **Biarkan QR Pay nyala di sebelah hardware.** Slot koin yang macet atau reader yang offline jangan sampai menghentikan pelanggan yang bisa bayar pakai HP.
- **Tempel label di booth soal apa yang diterima:** "Koin Rp1.000 dan Rp500, uang kertas sampai Rp50.000" mencegah pelanggan masukin uang yang ditolak acceptor.
- **Kosongkan kotak uang secara rutin** dan bandingkan dengan **Transactions** di hari yang sama; selisih nunjukin kerusakan hardware lebih awal.
- **Booth start-gate F13 gak nampilin harga.** Taruh harganya di stiker atau di desain layar Start.

## Kalau Ada Masalah {#troubleshooting}

| Masalah | Kenapa | Solusinya |
|---|---|---|
| Koin masuk tapi gak ada yang terjadi di layar Start (B1) | Receiver name gak cocok dengan judul jendela, atau F13 gak dicentang sebagai trigger | Pakai `Pix - START` persis; centang **F13** di Start Screen |
| Sesi mulai tanpa bayar (B1) | **Touch Screen** atau **Start Button** masih dicentang | Biarkan **F13** jadi satu-satunya session trigger |
| Popup layar Payment gak pernah tertutup (B2) | Receiver name bukan `Pix - PAYMENT`, atau Detect partial mati jadi nominal di judul gak terbaca | Atur receiver name dan nyalakan Detect partial dan Use variable price |
| Sesi berbayar tampil gratis di Transactions | **Treat F13 as the cash system's paid signal** mati, atau aplikasinya lebih lama dari 1.1.87 | Nyalakan toggle-nya; update aplikasi dari menu operator |
| Total di popup Coin naik dengan nominal yang salah (B3) | **Value per keystroke** gak cocok dengan satuan acceptor | Benarkan salah satunya |
| Toggle F13 abu-abu di halaman Hardware API | **Enable keyboard coin input** nyala | Matikan keyboard coin input; dua setup ini gak bisa dicampur |
| Reader Nayax nampilin "Cash only" | Inhibit-nya aktif: inhibit portal nyala tanpa kabel, atau software CI2 gak aktif (LED kuning board mati) | Benerin dulu di sisi Nayax; untuk tes, matikan inhibit di portal Nayax dan restart reader |
| Pelanggan sudah bayar di terminal DuitNow tapi booth gak bereaksi (B4) | Output pulsa terminal gak sampai ke board CI2, atau nilai pulsanya gak cocok dengan channel value | Cek kabel ke input PULSE, lalu bandingkan credit per pulse Transpire dengan channel value CI2 dan **Value per keystroke** |
| Booth bilang "Card reader payment could not be started" (A) | Mata uang booth beda dengan mata uang akun Stripe kamu, atau reader offline | Samakan mata uang booth dengan akun; cek reader online di **Terminal** di Stripe |
| Pelanggan sudah ditagih di reader tapi gak ada sesi tercatat (A) | Booth ditutup atau mati listrik setelah tap, sebelum dia lihat pembayarannya | Cari pembayarannya di **Payments** di Stripe, lalu refund atau kasih pelanggan kode voucher |
| Reader Stripe gak ada di dropdown | Belum terdaftar di akun Stripe ini, atau offline | Daftarkan di Terminal di Stripe dan sambungkan ke Wi-Fi |
| Bridge dapat 409 | Layarnya salah untuk panggilan itu | Polling `/api/v1/status`; panggil `/start` cuma di layar Start dan `/payment-complete` cuma selama ada pembayaran yang ditunggu |
| Request bridge ditolak | Token gak ada atau sudah lama | Salin **Access token** yang sekarang; **Regenerate** membatalkan yang lama |
| Layar Payment gak pernah muncul | **Payment on this booth** mati, atau komputernya Pix Starter | Nyalakan switch-nya; komputernya butuh Pix Pro |

## Terkait {#related}

- [Setup Pembayaran per Model Bisnis](./payment-setups-by-use-case.md)
- [Bikin Payment Gateway](./create-a-payment-gateway.md)
- [Hardware Payments](../desktop-app/hardware-payments.md)
- [Payment](../desktop-app/session-flow/payment.md)
- [Booth Pricing](../dashboard/booth-pricing.md)
- [Vouchers](../dashboard/vouchers.md)
