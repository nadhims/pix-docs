---
sidebar_position: 23
title: Pasang Printer
description: Install printer foto, pilih di booth dengan kertas dan orientasi yang benar, rapikan posisi cetak, potong kertas 4x6 jadi dua strip 2x6 di DNP, dan biarkan booth ngitung sisa kertas di roll.
tags: [tutorials, printer, printing, dnp, paper counter, hardware]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Pasang Printer

Di tutorial ini kamu install printer foto di komputer booth, pilih printernya di booth sesuai kertas yang terpasang, rapikan posisi cetak lewat test print, kalau mau potong tiap lembar 4x6 jadi dua strip 2x6, dan nyalakan penghitung kertas biar kamu tahu kapan roll-nya mau habis. Siapkan waktu sekitar 30 menit, plus beberapa lembar kertas untuk test print.

## Kapan Dipakai {#when-to-use-it}

- **Booth pertama kamu, atau printer baru.** Setiap printer perlu langkah ini sekali di tiap komputer.
- **Photo strip di sewa event.** DNP yang bisa motong lembar 4x6 jadi dua strip 2x6 ngasih satu strip untuk tiap tamu, dan satu lagi untuk pengantin.
- **Booth self-service di mall** yang printernya gak ada yang jagain: penghitung kertas ngasih peringatan di menu operator dan di **Health** sebelum roll habis.
- **Hasil cetak miring atau ada pinggiran putih** setelah update driver atau ganti jenis kertas.

Dua booth atau lebih tapi printernya cuma satu? Kerjakan tutorial ini di komputer tempat printer dicolok, terus lanjut ke [Pakai Satu Printer untuk Beberapa Booth](./share-a-printer.md).

## Sebelum Mulai {#before-you-start}

- Paket apa saja: cetak jalan sama di Pix Starter, Pix Pro dan Event Pass.
- Printer yang sudah bisa cetak test page dari komputer sendiri. Printer apa pun yang bisa dipakai Windows atau macOS bisa jalan; lihat [Printer yang Didukung](../reference/supported-printers.md).
- Kertas dan ribbon (dye-sub) atau tinta sudah terpasang, dan template yang dibuat untuk ukuran kertas itu. Lihat [Bikin Template Cetak](./design-a-print-template.md).
- Pixture Photobooth 1.2.44 atau lebih baru untuk penghitung kertas.
- PIN menu, kalau booth-nya pakai PIN.

## Persiapan {#prepare}

- **Dye-sub atau inkjet?** Printer dye-sublimation (DNP, HiTi, Mitsubishi, Kodak, Canon Selphy) hasilnya langsung kering dalam hitungan detik, dan ini yang dipakai kebanyakan booth. Inkjet (Epson EcoTank, SureLab) lebih murah per lembar tapi lebih lambat, dan hasilnya perlu waktu sebentar untuk kering.
- **Samakan tiga ukuran:** kertas di printer, **MEDIA SIZE** di booth, dan ukuran cetak template. Template 4x6 di kertas 6x8 bakal kecetak kecil dengan pinggiran putih.
- **Colok printer langsung ke komputer**, dengan kabel USB yang gak gampang lepas. Printer pakai listrik langsung, jangan di stop kontak yang bisa dimatikan orang.
- **Simpan kertas dan ribbon cadangan di booth.** Printer bisa habis kapan saja di tengah hari.

## Langkah 1: Install printer di komputer {#step-1-install-the-printer-on-the-computer}

1. Install driver dari merek printernya (DNP, HiTi, Epson dan lainnya) dari website resmi mereka.
2. Cetak test page dari komputer, di luar aplikasi booth.

<Tabs groupId="os">
<TabItem value="mac" label="Mac">

Buka **System Settings > Printers & Scanners**, tambah printernya kalau belum ada, pilih, lalu cetak test page dari aplikasi apa saja (misalnya foto di Preview).

</TabItem>
<TabItem value="windows" label="Windows">

Buka **Settings > Bluetooth & devices > Printers & scanners** (Windows 11) atau **Settings > Devices > Printers & scanners** (Windows 10), pilih printernya, lalu pilih **Print test page**.

<!-- SHOT-NEEDED: windows: Printers & scanners with the DNP printer selected and Print test page marked -->

</TabItem>
</Tabs>

Kalau test page gak keluar di sini, booth juga gak bakal bisa cetak. Beresin driver-nya dulu.

## Langkah 2: Pilih printer dan kertas di booth {#step-2-pick-the-printer-and-paper-on-the-booth}

1. Buka menu operator (tap sudut kanan atas dua kali) dan tap **Printer Settings**.
2. Di **PRINTER DEVICE**, pilih printermu. Baru dicolok setelah halaman dibuka? Tap **↻** untuk refresh daftarnya.
3. Di **MEDIA SIZE (LOADED PAPER)**, pilih kertas yang benar-benar terpasang. Daftarnya dari driver printer, jadi cuma ukuran yang didukung printermu yang muncul.
4. Di **ORIENTATION**, pilih **Landscape** untuk printer dye-sub kayak DNP ("Use Landscape for dye-sub printers (e.g. DNP) that feed paper with the long edge first."). Kebanyakan inkjet pakai **Portrait**.
5. Tap **Save Printer Settings**.

![Printer Settings dengan PRINTER DEVICE, MEDIA SIZE, ORIENTATION dan Save Printer Settings ditandai](/img/docs/steps/tutorials-set-up-a-printer--printer-device.webp)

Selama printer belum dipilih, **STATUS** nampilin "Guest printing is disabled until a printer is selected." dan sesi selesai tanpa cetak.

## Langkah 3: Atur jumlah cetak dan rapikan lewat test print {#step-3-set-copies-and-line-up-a-test-print}

1. Atur **COPIES PER SESSION** pakai **−** dan **+** (1 sampai 10): jumlah lembar yang dicetak tiap sesi kalau paket yang dibeli pelanggan gak punya jumlah cetak sendiri. Cetak tambahan yang dibeli pelanggan ditambahkan di atasnya.
2. Di bawah preview, pilih **Test Card (default)** atau salah satu template kamu, lalu tap **Test Print**. Test print pakai setelan yang ada di layar sekarang, sudah disimpan atau belum, dan nyetak satu lembar.
3. Lihat hasilnya. Kalau miring atau kepotong di pinggir, atur **PRINT ALIGNMENT**: **Scale** (85% sampai 115%) untuk nambah atau ngurangin margin, **Horizontal Offset** dan **Vertical Offset** (-10 mm sampai +10 mm) untuk geser posisi. Cetak lagi sampai pinggirannya pas.
4. Tap **Save Printer Settings**.

![Printer Settings di-scroll ke COPIES PER SESSION dan PRINT ALIGNMENT, dengan Test Print dan Save Printer Settings ditandai](/img/docs/steps/tutorials-set-up-a-printer--printer-alignment.webp)

Opsi driver kayak kepekatan warna atau cetak tanpa border ada di **ADVANCED SETTINGS > Open Printer Properties**.

## Langkah 4: Potong lembar 4x6 jadi strip 2x6 (DNP, opsional) {#step-4-cut-4x6-sheets-into-2x6-strips-dnp-optional}

Printer DNP yang punya cutter (DS620, DS-RX1, DS820, DS40) bisa motong tiap lembar 4x6 jadi dua strip 2x6. Nyalakan potongnya untuk seluruh printer, atau cuma untuk template yang butuh.

**Untuk seluruh printer:**

<Tabs groupId="os">
<TabItem value="mac" label="Mac">

Di **Printer Settings**, set **2-INCH CUT** ke **On** ("Cuts each 4x6 print into two 2x6 strips."). Bagian ini cuma muncul kalau driver printernya punya potong 2 inch. Perubahannya langsung berlaku dan disimpan sebagai setelan printer itu sendiri.

![Printer Settings dengan tombol Off dan On di 2-INCH CUT ditandai](/img/docs/steps/tutorials-set-up-a-printer--two-inch-cut.webp)

</TabItem>
<TabItem value="windows" label="Windows">

Tap **ADVANCED SETTINGS > Open Printer Properties** di **Printer Settings**. Printing preferences dari driver kebuka: centang **2inch cut** dan klik **OK**. Aplikasi booth balik ke layar penuh saat kamu tap lagi.

<!-- SHOT-NEEDED: windows: DNP Printing preferences with the 2inch cut option marked -->

</TabItem>
</Tabs>

**Cuma untuk template tertentu:** di dashboard, klik **Pix Design**, buka **Template Editor** dan klik **New Project**. Di **Create Template Project**, pilih Media Type **2 inch cut (4R)**, Print Size **4x6"**, upload desainnya dan klik **Create Project**. Cetakan template itu dipotong, apa pun setelan printernya, di Mac maupun Windows. Template lain tetap dicetak satu lembar utuh.

![Create Template Project dengan media type 2 inch cut (4R), ukuran 4x6 dan Create Project ditandai](/img/docs/steps/tutorials-set-up-a-printer--template-media.webp)

**Desain template-nya untuk dipotong.** Cutter membelah lembar 4x6 tepat di tengah, jadi desainnya harus berisi dua strip 2x6 yang sama persis, berdampingan. Jumlah foto yang diambil pelanggan tetap ngikutin slot foto: untuk dua strip kembar berisi 3 foto, taruh 3 slot yang sama di tiap separuh. Printer tanpa cutter nyetak lembarnya utuh.

Terakhir, di dashboard buka tab **Pricing** booth dan set **Print format** ke **2 inch cut** (2 prints per sheet), biar layar Payment ngasih tahu pelanggan mereka dapat 2 strip per cetak. Ini cuma ngubah angka yang dibaca pelanggan; cara cetaknya tetap sama.

## Langkah 5: Nyalakan penghitung kertas {#step-5-start-the-paper-counter}

Kebanyakan printer gak pernah ngasih tahu komputer berapa sisa kertasnya. Booth yang ngitungin untuk kamu.

1. Pasang roll baru.
2. Di **Printer Settings**, tap **New roll loaded** di kartu **PAPER** (atau di menu operator, **New roll** di baris **Paper**).
3. Pilih ukuran roll untuk printermu, misalnya **4x6 700 prints** di DS-RX1, atau ketik **Custom amount** (1 sampai 5.000 cetak) sesuai yang tertulis di kotaknya.
4. Tap **Start counting**.

![Kartu PAPER di Printer Settings dengan New roll loaded ditandai](/img/docs/steps/tutorials-set-up-a-printer--new-roll.webp)

![Popup New roll loaded dengan pilihan ukuran roll dan Start counting ditandai](/img/docs/steps/tutorials-set-up-a-printer--new-roll-popup.webp)

Setiap lembar yang dicetak ngurangin satu dari hitungan. Booth tetap ngitung saat offline, ingat ukuran roll untuk berikutnya, dan gak pernah nahan cetak gara-gara hitungannya. DNP di Mac dengan driver resmi DNP ngelaporin sisa kertasnya sendiri: kartunya nampilin "from printer" dan booth gak ngitung.

## Cek Hasilnya {#check-it-worked}

- Menu operator nampilin **Printer** dengan nama printermu dan **Paper** "About 546 of 700 left" (angkamu sendiri).
- Sesi tes kecetak di kertas yang benar, di tengah, tanpa pinggiran putih.
- Kalau potong nyala, tiap lembar keluar jadi dua strip 2x6.

![Menu operator dengan baris Paper ditandai](/img/docs/steps/tutorials-set-up-a-printer--menu-paper.webp)

## Tips {#tips}

- **Cetak ulang cepat saat event:** menu operator, **Admin Panel**, **Print history**, **Print again**. Kalau cetak gagal, pelanggan baca "Print issue, photo saved. Staff: reprint from Admin Panel → Print History".
- **Hitungannya salah?** Di kartu **PAPER**, tap **Fix the count** dan ketik sisa cetak yang sebenarnya.
- **Catat roll baru dari dashboard:** di **Health**, buka booth-nya dan klik **New roll loaded**. Booth ngambil info itu waktu check-in berikutnya. Praktis kalau crew di venue ganti roll dan ngabarin kamu lewat chat.
- **Paper running low** muncul saat sisa 20%, dan **Paper is probably out** di angka 0. Kalau printer sendiri ngelaporin kertas habis, menu nanya "New roll loaded?" dengan tombol **Yes** untuk ukuran roll terakhir.
- **Hitungan itu lembar.** Semua yang dihitung booth, dan semua harga cetak, dihitung per lembar kertas, walaupun lembarnya dipotong jadi strip.

## Kalau Ada Masalah {#troubleshooting}

| Masalah | Kenapa | Solusinya |
|---|---|---|
| Sesi selesai tapi gak ada yang kecetak | Printer belum dipilih, atau **Print Output** booth mati | Pilih printer (Langkah 2); cek **Booths > booth > Settings > Print Output** di dashboard |
| **STATUS** di sebelah **Printer** nampilin **Not Found** | Printer mati, kecabut, atau namanya berubah | Nyalakan, colok, tap **↻**, dan pilih lagi |
| Printer gak ada di **PRINTER DEVICE** | Driver belum terpasang | Install driver dan cetak test page dari komputer (Langkah 1) |
| Hasil cetak kecil dengan pinggiran putih | **MEDIA SIZE** atau template gak cocok dengan kertasnya | Samakan kertas, **MEDIA SIZE** dan ukuran cetak template |
| Gambar kebalik arah di kertas | **ORIENTATION** salah | **Landscape** untuk DNP dan kebanyakan dye-sub |
| Hasil cetak agak miring dari tengah | Tiap driver motong sedikit beda | **PRINT ALIGNMENT** (Langkah 3) |
| Potong 2 inch gak jalan | Printernya gak punya cutter, atau potongnya mati dan template-nya bukan media 2 inch cut | Nyalakan **2-INCH CUT** (Mac) atau **2inch cut** di driver (Windows), atau pakai media type **2 inch cut (4R)** |
| Dua strip-nya beda | Desainnya bukan dua separuh yang kembar | Ulangi strip yang sama di kedua separuh template 4x6 |
| **Paper** nampilin "Not counted yet" | Belum ada roll yang dimulai | Tap **New roll**, pilih ukuran, **Start counting** |

Kasus lain: [Masalah Printer](../troubleshooting/printer.md).

## Terkait {#related}

- [Printer Setup](../desktop-app/printer-setup.md)
- [Printer yang Didukung](../reference/supported-printers.md)
- [Pakai Satu Printer untuk Beberapa Booth](./share-a-printer.md)
- [Bikin Template Cetak](./design-a-print-template.md)
- [Booth Pricing](../dashboard/booth-pricing.md)
- [Health](../dashboard/health.md)
