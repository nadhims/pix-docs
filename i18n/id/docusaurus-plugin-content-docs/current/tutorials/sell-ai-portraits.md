---
sidebar_position: 10
title: Jual Potret AI dari Share Page (Beta)
description: Biarkan pelanggan beli potret AI dari foto booth mereka lewat share page, digital atau dicetak di booth, dengan menyiapkan kredit, preset dan harga.
tags: [tutorials, pix-ai, beta, share-page, payments]
---

# Jual Potret AI dari Share Page (Beta)

Di tutorial ini kamu beli kredit Pix AI, pasang preset AI di booth, atur harga potret dan bikin penjualan pertama dari share page pelanggan. Butuh sekitar 20 menit.

:::info Beta
Pix AI, toko potret AI dan kredit AI cuma terbuka untuk akun beta. Kalau kamu gak lihat kartu **Pix AI** (dengan badge **Beta**) di **Pix Design**, minta Pixture menyalakannya untuk akun kamu lewat tombol **Help**.
:::

## Kapan Dipakai {#when-to-use-it}

- **Booth self-service di mall.** Pelanggan sudah scan QR share untuk ambil fotonya. Banner di halaman itu menjual produk kedua tanpa kerja tambahan di booth.
- **Studio bertema atau pop-up musiman.** Tawarkan look yang cocok dengan musimnya (kartu liburan, poster film) sebagai tambahan dari strip biasa.
- **Event dengan sponsor.** Potret AI yang dicetak dan diambil di booth jadi kenang-kenangan yang bikin tamu ngobrolin.

Potretnya dijual setelah sesi, di HP pelanggan. Ini nambah pendapatan per sesi, bukan pengganti harga sesi kamu.

### Yang Dilihat Pelanggan {#what-the-customer-sees}

1. Setelah sesi foto, pelanggan buka share page dan lihat banner di atas foto mereka: "One shot, a new look".
2. Banner membuka halaman toko. Pelanggan pilih satu foto dan satu look, tap **Generate**, pilih digital atau digital + cetak kalau booth menawarkan cetak, lalu bayar lewat payment gateway kamu (QRIS di Indonesia, kartu di tempat lain).
3. Potret dibuat, biasanya dalam semenit, dan muncul di share page di bawah "Your AI portrait is ready".
4. Kalau pakai cetak, pelanggan juga dapat kode ambil 7 karakter. Mereka mulai sesi di booth dan ketik kode itu di kotak voucher di layar **Payment**. Booth nampilin "Printing your portrait. Take it from the tray.", nyetak potretnya lalu balik ke layar Start. Setiap kode cuma bisa nyetak sekali.

## Sebelum Mulai {#before-you-start}

- **Akun beta** dengan Pix AI nyala.
- **Pix Pro di komputer booth**, dengan **Singles Upload** nyala di **Booths > [booth] > Settings > Output Settings**. Toko bekerja dari foto single pelanggan.
- **Payment gateway yang tersambung dan Active**, yang bisa narik mata uang booth (**Settings > Payment Gateway**).
- **Pixture Photobooth 1.1.110 atau lebih baru** di booth kalau kamu mau menawarkan cetak.

## Persiapan {#prepare}

- **Hitung harga potret dari modalnya.** Setiap potret pakai 1 kredit. Cek biaya per gambar di halaman kredit, lalu pasang harga yang masih ninggalin untung jelas, misalnya Rp 25.000 digital dan Rp 40.000 dengan cetak.
- **Pilih dua sampai empat look**, jangan dua puluh. Daftar pendek lebih laku di layar HP, dan setiap look harus cocok dengan orang yang pakai booth itu.
- **Tes setiap look di foto contoh** sebelum dijual (Langkah 2): wajah, kacamata dan foto rombongan hasilnya beda-beda per look.

## Langkah 1: Beli Kredit AI {#step-1-buy-ai-credits}

1. Buka **Computers** dan klik **Manage credits** di kartu **Pix AI credits**. Halamannya nampilin **Credits left**, **Cost per image** dan **How you pay**.

   ![Halaman Pix AI credits dengan Credits left, Buy more, cost per image, How you pay dan paket kredit](/img/docs/steps/tutorials-sell-ai-portraits--licenses-ai-credits.webp)

2. Klik **Buy more** lalu pilih paket kredit, atau pilih paket bulanan yang kreditnya di-reset tiap bulan. Paket kredit gak pernah kedaluwarsa, dan semua booth di akun kamu pakai bareng.

## Langkah 2: Pasang Preset di Booth {#step-2-put-presets-on-the-booth}

1. Buka **Pix Design > Pix AI**. Halamannya punya **Saved presets**, tombol **Browse catalogue**, panel **Test a preset** dan **Recent generations**.

   ![Halaman Pix AI (Beta) sebelum ada preset tersimpan: No presets yet dengan Browse catalogue, dan panel Test a preset](/img/docs/steps/tutorials-sell-ai-portraits--pix-design-ai.webp)

2. Klik **Browse catalogue**, centang look yang mau kamu jual lalu klik **Add**.

   ![Modal Browse AI presets dengan kartu preset yang bisa dicentang dan Add](/img/docs/steps/tutorials-sell-ai-portraits--pix-design-ai-browse-modal.webp)

3. Di setiap preset tersimpan, pilih booth yang boleh menjualnya (atau semua booth). Cuma preset yang dipasang ke booth yang muncul di toko booth itu.
4. Coba look sebelum dijual: di **Test a preset**, tambah foto atau pakai foto contoh, pilih preset lalu klik **Generate**. Satu tes pakai 1 kredit.

## Langkah 3: Atur Harga di Booth {#step-3-set-the-price-on-the-booth}

1. Buka **Booths**, klik **Configure** di booth, lalu tab **Pricing** dan scroll ke bawah. Akun beta melihat kartu **AI portrait on the share page**.

   ![Tab Pricing booth, satu halaman penuh, dengan kartu Sell sessions online, switch Payment on this booth dan sub-tab harga](/img/docs/steps/tutorials-sell-ai-portraits--booth-pricing-full.webp)

2. Nyalakan **Sell AI portraits on the share page** dan isi **Price per portrait**.
3. Untuk jual cetak, nyalakan **Offer a print at this booth** dan isi **Digital + print price** (potret dan cetaknya sekaligus).
4. Klik **Save** di kartu itu.

<!-- SHOT-NEEDED: dashboard: the AI portrait on the share page card on a beta account's booth Pricing tab, with its switches and prices -->

## Langkah 4: Cek Gateway dan Switch Pembayaran {#step-4-check-the-gateway-and-the-payment-switch}

1. Di tab **Settings** booth, cek **Currency** dan **Active Gateway** booth. Akun butuh gateway **Active** yang bisa narik mata uang itu, kalau gak toko gak bisa nerima pembayaran.
2. Biarkan **Payment on this booth** nyala di atas tab Pricing. Kode ambil diketik di layar Payment, jadi booth dengan pembayaran mati gak bisa ngasih cetakan.

![Tab Settings booth dengan Payment Gateway dan Active Gateway, Booth Info dan Currency](/img/docs/steps/tutorials-sell-ai-portraits--booth-settings-tab.webp)

## Langkah 5: Coba sebagai Pelanggan {#step-5-try-it-as-a-customer}

1. Jalankan sesi di booth dan scan QR share pakai HP kamu. Banner-nya ada di atas foto.
2. Pilih foto dan look, tap **Generate**, bayar, lalu tunggu selama halaman bilang "Warming up" dan "Almost there". Potretnya muncul di share page kamu.
3. Kalau kamu pilih cetak, bawa kode ambil ke booth, mulai sesi, dan ketik di layar Payment. Booth nyetak potretnya dan balik ke Start.

<!-- SHOT-NEEDED: phone: a made-up customer's share page with the "One shot, a new look" banner, then the look picker -->

## Langkah 6: Lihat Penjualannya {#step-6-see-the-sales}

- **Transactions** nampilin setiap penjualan sebagai baris berlabel **AI portrait** atau **AI portrait + print**, dihitung di Total Revenue dan di export Excel. Baris ini gak terikat ke sesi foto.
- Kartu pendapatan di **Dashboard** ikut menghitungnya.
- **Pix Design > Pix AI** nampilin generation terbaru, dan kartu **Pix AI credits** di **Computers** nampilin sisa kredit.

## Cek Hasilnya {#check-it-worked}

- Share page dari sesi baru nampilin banner "One shot, a new look".
- Pembelian tes ngirim potret ke share page dan muncul di **Transactions** sebagai **AI portrait**.
- **Credits left** berkurang satu.

## Tips {#tips}

- **Pajang contoh di booth.** Cetakan before-after di sebelah QR share jual lebih banyak potret daripada banner saja.
- **Cek kredit sebelum akhir pekan yang ramai.** Kalau kredit habis, banner-nya hilang; gak ada pesan error, kamu cuma berhenti jualan.
- **Jaga booth tetap online** kalau kamu jual cetak. Pilihan cetak cuma muncul selama booth melapor dalam 12 menit terakhir.
- **Ganti look sesuai musim** dan buang yang gak ada yang beli; **Recent generations** nunjukin look mana yang dipilih orang.

## Kalau Ada Masalah {#troubleshooting}

| Masalah | Kenapa | Solusinya |
|---|---|---|
| Gak ada banner di share page | Ada yang kurang: Pix AI belum nyala untuk akun, kredit habis, gak ada preset yang dipasang ke booth itu, switch di kartu Pricing mati atau tanpa harga, gak ada gateway Active untuk mata uang booth, atau **Singles Upload** mati | Cek Langkah 1 sampai 4 untuk booth itu |
| Toko cuma nawarin digital | **Offer a print at this booth** mati, atau booth offline | Nyalakan cetak; cetak cuma ditawarkan selama booth melapor dalam 12 menit terakhir |
| Booth nolak kode ambil | Kodenya milik booth lain, sudah dipakai, atau potretnya belum siap. Booth dengan **Payment on this booth** mati gak punya kotak voucher sama sekali | Cek kode dan booth-nya; nyalakan pembayaran |
| Pelanggan sudah bayar tapi potretnya gak pernah datang | Pembuatan dicoba ulang; kalau terus gagal, gak ada kredit yang terpakai | Refund pelanggan dari dashboard gateway kamu |

## Terkait {#related}

- [Pix AI](../dashboard/pix-design/pix-ai.md)
- [Atur Harga, Paket dan Cetak Tambahan](./prices-and-packages.md)
- [Transactions](../dashboard/transactions.md)
- [Terima Pembayaran di Booth](./accept-payments.md)
