---
sidebar_position: 63
title: Pantau Laba Rugi
description: Masukkan biaya, harga kertas, pajak dan booking fee event sekali, terus baca laba rugi tiap bulan untuk seluruh bisnis atau satu kiosk atau event, dan download sebagai PDF.
tags: [tutorials, finance, profit, costs, tax, pdf]
---

# Pantau Laba Rugi

"Omzet booth-nya kelihatan gede, tapi kok uangnya gak kerasa?" Di tutorial ini kamu masukkan pengeluaran bisnis, harga kertas, pajak dan booking fee yang dibayar klien event. Terus kamu baca laba rugi satu bulan, buka satu kiosk secara terpisah, dan download laporannya sebagai PDF. Siapkan waktu sekitar 20 menit untuk pertama kali. Setelah itu cukup beberapa menit tiap bulan untuk biaya sekali bayar yang baru.

Penjualan masuk sendiri dari booth kamu. Finance cuma butuh uang yang gak lewat booth.

## Kapan Dipakai {#when-to-use-it}

- **Kiosk self-service di mall.** Sewa tempat, gaji crew dan kertas tetap sama tiap bulan, ada pelanggan atau gak. Finance nunjukin apakah tiap kiosk nutup biayanya sendiri, dan seberapa banyak.
- **Sewa photobooth untuk event.** Klien bayar booking fee, tamu bisa bayar juga di booth, dan tiap event ada biaya crew dan transport. Masukkan fee dan biayanya di event, dan kamu lihat untung bersih tiap event.
- **Studio dengan banyak booth.** **Performance by unit** ngurutin semua kiosk dan event berdasarkan omzet, lengkap dengan untung bersih dan margin-nya, jadi booth yang lemah langsung kelihatan.
- **Pembukuan bulanan.** Download bulannya sebagai PDF untuk arsip kamu atau akuntan.

Finance adalah laporan manajemen, bukan sistem akuntansi: gak ada invoice, gak ada pencocokan rekening bank, dan PDF-nya bertuliskan "Management report, unaudited". Untuk bagi uang dengan venue, investor atau crew, lihat [Bagi Omzet dan Profit dengan Partner](./share-revenue-and-profit.md).

## Sebelum Mulai {#before-you-start}

- Paket apa saja. Profit & Loss, biaya, kertas, pajak dan booking fee jalan di Pix Starter dan Pix Pro. PDF butuh Pix Pro berbayar, bulanan atau tahunan; Event Pass atau free trial gak membukanya.
- Role kamu butuh **View finance** untuk buka Finance, dan **Manage finance** untuk nambah atau ngubah apa pun. Owner dan admin punya dua-duanya. Lihat [Tambah Tim dan Atur Role](./team-and-roles.md).
- Tagihan bulan lalu: sewa, gaji, internet, alat yang kamu beli, dan nota kertas.

## Persiapan {#prepare}

Kelompokkan biaya kamu dulu sebelum diketik. Tiap biaya masuk ke salah satu dari tiga **Cost type**:

| Cost type | Dipakai untuk | Contoh |
|---|---|---|
| **One-time** | Sesuatu yang dibayar sekali, dihitung di bulannya | Servis printer, satu set properti, crew untuk satu event |
| **Monthly** | Sesuatu yang berulang tiap bulan sampai kamu hentikan | Sewa tempat, gaji, internet, langganan Pix Pro kamu |
| **Depreciation** | Alat yang kamu pakai bertahun-tahun, dibagi rata sepanjang umurnya | Kamera Rp 18.000.000 selama 36 bulan dihitung Rp 500.000 per bulan |

Terus tentukan biaya itu milik siapa. Biaya milik satu kiosk (sewa atau internet kiosk itu) ditaruh di kiosk tersebut, biar angka kiosk-nya jujur. Biaya yang dipakai bareng seluruh bisnis (gaji kamu, akuntan) ditaruh di **Whole business**.

Hitung harga kertas kamu **per lembar**: harga satu box atau roll dibagi jumlah cetakannya. Box seharga Rp 1.600.000 yang jadi 800 cetakan artinya Rp 2.000 per lembar. Kalau ribbon tinta satu paket dengan kertasnya, pakai harga paketnya.

:::tip Depreciation atau one-time?
Kamera Rp 18.000.000 yang dicatat sebagai one-time bikin bulan itu kelihatan rugi besar, dan bulan-bulan berikutnya kelihatan lebih bagus dari aslinya. Depreciation membaginya ke bulan-bulan kamu memakainya, dan itu yang diharapkan pemberi pinjaman atau partner.
:::

## Langkah 1: Buka Finance dan pilih bulan {#step-1-open-finance-and-pick-the-month}

1. Klik **Finance** di sidebar. Halaman ini terbuka di bulan lalu, soalnya itu bulan yang kamu tutup.
2. Pilih bulan di atas, atau **All months** untuk tahun berjalan.
3. Pilih tahunnya.
4. Biarkan **View** di **All kiosks and events** untuk seluruh bisnis.

![Finance dengan menu Finance, pilihan bulan dan tahun, dan pilihan View ditandai, di atas Total revenue, Total costs, Net profit dan Owner's net](/img/docs/steps/tutorials-profit-and-loss--open-finance.webp)

## Langkah 2: Tambah biaya {#step-2-add-your-costs}

1. Buka tab **Costs**.
2. Klik **Add cost**.

![Tab Costs dengan tab Costs dan tombol Add cost ditandai, di atas tabel Fixed costs](/img/docs/steps/tutorials-profit-and-loss--costs-tab.webp)

Di dialog **Add cost**:

1. Ketik **Description**, misalnya "Sewa Mall Kota".
2. Ketik **Amount**.
3. Pilih **Cost type**. **Monthly** nanya bulan pertamanya dan, kalau perlu, **Last month**. **Depreciation** nanya **Useful life (months)** dan nampilin **Monthly charge**.
4. Di **Allocate to**, biarkan **Whole business** atau pilih satu kiosk atau satu event.
5. Klik **Save cost**.

![Dialog Add cost dengan Description, Amount, Cost type, Allocate to dan Save cost ditandai](/img/docs/steps/tutorials-profit-and-loss--add-cost.webp)

Ulangi untuk tiap biaya. Untuk tagihan Pixture kamu sendiri, klik shortcut **Pix Pro subscription** di atas dialog: namanya terisi dan biayanya jadi bulanan, kamu tinggal ketik jumlah yang kamu bayar. Shortcut ini hilang begitu sudah ada biaya dengan nama itu.

## Langkah 3: Atur harga kertas dan pajak {#step-3-set-the-paper-price-and-your-tax}

1. Di **Paper**, klik **Add paper**. Ketik **Paper name** (misalnya "DNP 4R") dan **Cost per sheet**, terus klik **Apply**. Kertas pertama kamu jadi **Default**, dipakai semua kiosk yang gak punya kertas lain.
2. Ada kiosk yang pakai kertas berbeda? Tambah kertas itu, matikan **Default paper** dan centang kiosk-nya. Tag **Default** nunjukin kertas mana yang dipakai kiosk lainnya.
3. Di **Tax**, klik **Add tax**. Ketik **Name**, **Rate (%)**, pilih **Charged on**: **Revenue** atau **Profit before tax**, dan klik **Save tax**.

![Paper dan Tax di tab Costs dengan Add paper, tag Default dan Add tax ditandai](/img/docs/steps/tutorials-profit-and-loss--paper-and-tax.webp)

Kamu gak pernah ngetik berapa lembar yang terpakai. **Paper and consumables** dihitung tiap bulan dari jumlah cetakan tiap kiosk, dikali harga kertas kiosk itu. Sesi gratis dan sesi tes ikut dihitung, soalnya kertasnya tetap terpakai.

Contoh Indonesia: PPh final 0,5% untuk UMKM adalah pajak atas **Revenue**. Pajak diambil sebelum profit dibagi, jadi bagi hasil partner diambil dari profit setelah pajak.

## Langkah 4: Tambah booking fee dan biaya event {#step-4-add-an-events-booking-fee-and-costs}

Yang dibayar klien untuk sebuah event adalah booking fee-nya. Kamu masukkan di event, bukan di tab Costs.

1. Buka event-nya di **Events**, terus tab **Report**. Kartu **Money** ada paling atas. Klik **Add booking fee** (atau **Edit** untuk ngubah), ketik **Amount** dan klik **Save**. Fee-nya dihitung di bulan tanggal event.
2. Klik **Add cost** di kartu itu untuk biaya sekali bayar event tersebut: crew, transport, biaya venue.
3. **Edit costs in Finance** membuka tab Costs untuk sisanya.

![Kartu Money sebuah event dengan link Edit booking fee, Add cost dan Edit costs in Finance ditandai](/img/docs/steps/tutorials-profit-and-loss--event-money.webp)

Kartunya nampilin fee, **Guest sales** (yang dibayar tamu di booth), biaya event dan **Net profit**-nya sepanjang event.

## Langkah 5: Baca bulannya {#step-5-read-the-month}

Tab **Profit & Loss** dibaca dari atas ke bawah seperti laporan laba rugi pada umumnya: **Revenue** (**Kiosk sales**, **Event sales** dan **Booking fees**), **Variable costs** (biaya yang naik turun ikut penjualan, seperti kertas dan bagi hasil venue), **Contribution margin**, **Fixed costs**, **Profit before tax**, **Tax** dan **Net profit**.

![Kartu Profit and loss seluruh bisnis dengan baris Kiosk sales, Event sales dan Booking fees ditandai](/img/docs/steps/tutorials-profit-and-loss--statement.webp)

Di sebelah kanan:

1. Bagian tiap partner dari net profit (kosong sampai kamu nambah partner).
2. **Retained by owner**: sisa untuk kamu.
3. Cicilan modal, kalau ada investor yang sedang dibayar balik.
4. **Owner's net**: yang kamu pegang setelah cicilan.
5. **Performance by unit**: semua kiosk dan event, omzet terbesar di atas. Klik barisnya untuk membukanya sendiri.

![Profit distribution dan Performance by unit dengan bagian partner, Retained by owner, Capital repayment, Owner's net dan satu baris kiosk ditandai](/img/docs/steps/tutorials-profit-and-loss--distribution.webp)

## Langkah 6: Lihat satu kiosk atau event {#step-6-look-at-one-kiosk-or-event}

1. Buka **View** dan pilih satu kiosk (**Choose a kiosk...** bisa dicari kalau kiosk-nya banyak), atau klik barisnya di **Performance by unit**.
2. Kartu terakhir berubah jadi **Contribution margin**: penjualan kiosk dikurangi biaya variabelnya sendiri.
3. Biaya dan partner seluruh bisnis gak ikut dihitung, dan halamannya bilang begitu.

![Finance untuk satu kiosk dengan pilihan View, kartu Contribution margin dan catatan soal partner dan biaya seluruh bisnis ditandai](/img/docs/steps/tutorials-profit-and-loss--one-kiosk.webp)

Kiosk dengan contribution margin yang sehat itu membiayai dirinya sendiri, walaupun net profit-nya kelihatan kecil setelah dipotong biaya bersama yang besar. Kiosk dengan contribution margin tipis justru rugi tiap bulan kamu buka.

## Langkah 7: Download PDF {#step-7-download-the-pdf}

1. Balikin **View** ke **All kiosks and events**. Tombolnya disembunyikan untuk satu kiosk atau event.
2. Di tab **Profit & Loss**, klik **Export PDF**. **Profit and Loss Statement** ter-download, bernomor sesuai periode: Oktober 2026 jadi PL-2026-10, dan **All months** jadi PL-2026.

![Header Finance dengan View di All kiosks and events dan tombol Export PDF ditandai](/img/docs/steps/tutorials-profit-and-loss--export-pdf.webp)

![PDF Profit and Loss Statement Oktober 2026, nomor PL-2026-10: omzet, biaya, net profit, profit distribution dan performance by unit](/img/docs/finance-pl-pdf.webp)

PDF-nya pakai logo kamu dari **Pix Design > Brand** dan ikut bahasa dashboard kamu, English atau Bahasa Indonesia. Tanpa Pix Pro berbayar, tombolnya ada tag **Pix Pro** dan membuka halaman **Computers**.

## Cek Hasilnya {#check-it-worked}

- **Total costs** di Profit & Loss cocok dengan tagihan yang kamu masukkan, plus kertas dan pajak.
- **Paper and consumables** muncul di tab Costs, bertanda **automatic**, dengan jumlah lembar yang dicetak.
- Event dengan booking fee nampilin fee itu di **Booking fees** pada bulan tanggal event.
- PDF terbuka dengan bulan yang benar di nomornya.

## Tips {#tips}

- **Tutup buku di minggu pertama.** Tambah biaya sekali bayar bulan lalu, cek harga kertas, terus download PDF-nya. Makanya Finance terbuka di bulan lalu.
- **Hentikan biaya bulanan, jangan dihapus.** Kalau kontrak venue selesai, edit sewanya dan atur **Last month**. Menghapusnya ikut ngubah semua bulan sebelumnya.
- **Omzet beda dari Dashboard sebesar booking fee.** Penjualan kiosk dan event pakai aturan yang sama dengan Dashboard; Finance menambahkan booking fee event yang tanggalnya ada di periode itu.
- **Satu mata uang sekali tampil.** Kalau booth kamu jualan dalam lebih dari satu mata uang, pil **Showing** di atas memilih mata uangnya; gak ada yang dikonversi.
- **Gak bisa lihat bulan depan.** Pilihan bulan berhenti di bulan ini. Rencanakan biaya bulan depan saat bulannya datang.

## Kalau Ada Masalah {#troubleshooting}

| Masalah | Kenapa | Solusinya |
|---|---|---|
| Profit & Loss bertuliskan "No sales in this period" | Belum ada penjualan dan biaya di bulan itu | Pilih bulan lalu, atau cek di Dashboard apakah booth sudah upload sesinya |
| **Paper and consumables** nol | Belum ada harga kertas | Tambah kertas di tab Costs (Langkah 3) |
| Biaya kertas sebuah kiosk kelihatan salah | Kiosk itu pakai kertas **Default**, bukan kertasnya sendiri | Tambah kertasnya dan centang kiosk itu, atau edit harga default |
| Booking fee sebuah event gak muncul di bulan ini | Fee dihitung di bulan tanggal event, dan kartunya bilang "Counts in" bulan itu | Pilih bulan itu, atau perbaiki tanggal event |
| Kartu Money bertuliskan "Add the event date to count this fee" | Event-nya belum punya tanggal, jadi fee-nya gak masuk bulan mana pun | Atur tanggal event |
| **Export PDF** gak ada | **View** lagi nampilin satu kiosk atau event | Pilih **All kiosks and events** |
| **Export PDF** ada tag **Pix Pro** | Akun belum punya Pix Pro berbayar (Event Pass atau trial gak dihitung) | Tambah komputer di halaman **Computers** |
| Kamu bisa lihat Finance tapi semua tombolnya gak ada | Role kamu cuma punya **View finance** | Minta owner kasih **Manage finance** |

## Terkait {#related}

- [Finance](../dashboard/finance.md)
- [Bagi Omzet dan Profit dengan Partner](./share-revenue-and-profit.md)
- [Baca Dashboard Kamu](./read-your-dashboard.md)
- [Run an Event](./run-an-event.md)
