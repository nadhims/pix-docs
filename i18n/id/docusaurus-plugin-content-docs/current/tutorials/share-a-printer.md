---
sidebar_position: 24
title: Pakai Satu Printer untuk Beberapa Booth
description: Jalankan dua booth atau lebih dengan satu printer foto lewat sharing di jaringan lokal dari komputer tempat printer dicolok, pilih printernya di tiap booth, dan jaga antrean cetak tetap lancar saat ramai.
tags: [tutorials, printer, multi-booth, network, hardware]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Pakai Satu Printer untuk Beberapa Booth

Di tutorial ini kamu share printer dari komputer tempat printer itu dicolok, tambahkan printernya di tiap komputer booth lain, lalu pilih di aplikasi booth, jadi dua booth atau lebih nyetak di satu printer. Siapkan waktu sekitar 30 menit untuk dua booth, semuanya di jaringan yang sama.

Aplikasi booth nyetak lewat sistem cetak komputer, bukan langsung ke printer. Jadi printer apa pun yang bisa dipakai komputer, bisa dipakai booth juga, termasuk printer yang dicolok di komputer lain dan di-share lewat jaringan.

## Kapan Dipakai {#when-to-use-it}

- **Studio multi-booth** dengan dua atau tiga booth dalam satu ruangan dan satu dye-sub yang cepat, yang nyetak 4x6 kira-kira 10 sampai 20 detik.
- **Event nikahan atau corporate** dengan satu booth dan satu stasiun keliling, plus satu printer di meja cetak tempat crew ngasih hasil cetak.
- **Photobox pop-up di sebelah booth utama**, biar gak perlu beli, bawa dan ngisi printer kedua.

Kurang cocok untuk dua booth self-service yang ramai dan berjauhan, atau kalau jaringannya cuma Wi-Fi yang gak stabil: kasih tiap booth printernya sendiri. Dua booth selesai bersamaan artinya satu pelanggan nunggu satu cetakan.

## Sebelum Mulai {#before-you-start}

- Paket apa saja: sharing printer dikerjakan oleh komputernya, bukan oleh Pixture.
- Printer sudah jalan di komputer tempat ia dicolok (**host**). Lihat [Pasang Printer](./set-up-a-printer.md). Host gak perlu aplikasi Pixture Photobooth: laptop nganggur pun bisa.
- Semua komputer booth dan host di jaringan lokal yang sama. Kabel (Ethernet) jauh lebih andal dari Wi-Fi.
- Akun administrator di host: Windows minta akun ini untuk ngubah sharing.
- Installer driver printer untuk tiap komputer booth.

## Persiapan {#prepare}

- **Kasih nama host yang simpel,** misalnya `PRINT-HOST`, dan nama share printer yang pendek tanpa spasi, misalnya `DNP-RX1`. Kamu bakal ngetik keduanya di booth Windows.
- **Jaga host tetap nyala:** sleep dimatikan, restart otomatis dimatikan di hari event, dan pakai listrik. Kalau host tidur, semua booth berhenti nyetak.
- **Pakai kabel kalau bisa.** Satu network switch kecil dan kabel Ethernet pendek ke tiap komputer cuma butuh dua menit, dan mencegah kebanyakan cetakan yang hilang.

## Langkah 1: Share printer dari host {#step-1-share-the-printer-from-the-host}

<Tabs groupId="os">
<TabItem value="mac" label="Mac">

1. Buka **System Settings > General > Sharing**.
2. Nyalakan **Printer Sharing**.
3. Klik tombol info di sebelahnya, pilih printernya, dan biarkan **Everyone** boleh nyetak.

Kata Apple: printer yang memang sudah ada di jaringan (printer jaringan atau AirPrint) gak perlu di-share; tiap komputer bisa langsung nambahin.

<!-- SHOT-NEEDED: mac: System Settings > General > Sharing with Printer Sharing switched on and the printer ticked -->

</TabItem>
<TabItem value="windows" label="Windows">

1. Buka **Settings > Bluetooth & devices > Printers & scanners** (Windows 10: **Settings > Devices > Printers & scanners**) dan pilih printernya.
2. Buka **Printer properties**, lalu tab **Sharing**, dan klik **Change Sharing Options** kalau kotaknya abu-abu.
3. Centang **Share this printer** dan catat **Share name**-nya.
4. Set jaringannya ke **Private**, dan pastikan network discovery serta file and printer sharing nyala untuk jaringan private. Kata Microsoft, jaringannya harus Private biar printer bisa di-share.

<!-- SHOT-NEEDED: windows: Printer properties > Sharing tab with Share this printer and the Share name marked -->

</TabItem>
</Tabs>

## Langkah 2: Tambahkan printer yang di-share di tiap komputer booth {#step-2-add-the-shared-printer-on-every-booth-computer}

1. Install **driver printer yang sama** di komputer booth. Booth baca ukuran kertas dari driver ini.
2. Tambahkan printer yang di-share:

<Tabs groupId="os">
<TabItem value="mac" label="Mac">

Buka **System Settings > Printers & Scanners**, klik **Add Printer, Scanner, or Fax**, dan pilih printer yang muncul di bawah nama host.

<!-- SHOT-NEEDED: mac: Add Printer window with the shared printer under the host's name -->

</TabItem>
<TabItem value="windows" label="Windows">

Di **Printers & scanners**, klik **Add device**. Kalau printernya gak muncul, pilih tambah manual dan ketik alamatnya, misalnya `\\PRINT-HOST\DNP-RX1`. Kalau nama host gak jalan, pakai alamat IP host, misalnya `\\192.168.1.20\DNP-RX1`.

<!-- SHOT-NEEDED: windows: Add a printer by name with the \\PRINT-HOST\DNP-RX1 path typed -->

</TabItem>
</Tabs>

3. Cetak test page dari komputer booth, di luar aplikasi booth.

## Langkah 3: Pilih printer yang di-share di aplikasi booth {#step-3-pick-the-shared-printer-in-the-booth-app}

1. Di booth, buka menu operator dan tap **Printer Settings**.
2. Di **PRINTER DEVICE**, pilih printer yang di-share. Tap **↻** kalau belum muncul.
3. Set **MEDIA SIZE (LOADED PAPER)** sesuai kertas di printer host, dan **ORIENTATION** ke **Landscape** untuk DNP.
4. Tap **Test Print**, cek hasilnya, lalu tap **Save Printer Settings**.

![Printer Settings dengan PRINTER DEVICE, MEDIA SIZE, ORIENTATION dan Save Printer Settings ditandai](/img/docs/steps/tutorials-set-up-a-printer--printer-device.webp)

Ulangi di setiap booth yang nyetak di printer ini.

## Langkah 4: Tes saat ramai {#step-4-test-a-busy-moment}

1. Mulai sesi di dua booth bersamaan dan selesaikan keduanya.
2. Dua-duanya kecetak, satu per satu, sesuai urutan masuk di host.
3. Matikan Wi-Fi atau cabut kabel host sebentar, lalu cetak lagi: booth nyoba ulang, dan cetakan yang gak sampai bisa dicetak lagi dari **Admin Panel > Print history**.

## Cek Hasilnya {#check-it-worked}

- Menu operator di tiap booth nampilin **Printer** dengan nama printer yang di-share.
- Sesi di tiap booth kecetak di printer yang di-share.
- Dua sesi bersamaan dua-duanya kecetak, satu per satu.

## Tips {#tips}

- **Atur potong 2 inch di host.** Ukuran kertas dan potong adalah setelan driver printer, jadi atur sekali di host. Kalau pakai template 2 inch cut, coba cetak satu dari tiap booth sebelum event.
- **Jangan percaya penghitung kertas di printer yang di-share.** Tiap booth cuma ngitung cetakannya sendiri, jadi angka di tiap booth kelebihan. Pantau printernya langsung, atau nyalakan penghitung di satu booth dan koreksi manual dengan **Fix the count**.
- **Biarkan jendela antrean cetak di host terbuka,** biar kertas nyangkut atau roll habis langsung kelihatan. Gak ada orang lain yang mantau host.
- **Cetak ulang dari booth yang ngambil fotonya:** **Admin Panel > Print history > Print again** di booth itu. Mulai booth 1.2.51, cetak ulang dipotong sama seperti cetakan aslinya dan keluar satu lembar.

## Kalau Ada Masalah {#troubleshooting}

| Masalah | Kenapa | Solusinya |
|---|---|---|
| Printer gak ada di daftar **PRINTER DEVICE** booth | Belum ditambahkan di komputer itu, atau driver-nya belum ada | Tambahkan di setelan printer komputer, install driver, lalu tap **↻** |
| **STATUS** di sebelah **Printer** nampilin **Not Found** | Host mati, tidur, atau sharing-nya dihapus | Bangunkan host dan cetak test page dari komputer booth |
| Windows gak nemu `\\PRINT-HOST\DNP-RX1` | Jaringannya Public, atau nama host gak terbaca | Set jaringan ke **Private** di keduanya; ketik alamat IP host |
| Ukuran cetak salah | **MEDIA SIZE** beda dengan kertas di printer host | Samakan **MEDIA SIZE (LOADED PAPER)** di semua booth |
| Cetakan telat atau hilang lewat Wi-Fi | Jaringan putus saat cetakan dikirim | Pakai Ethernet; cetak ulang dari **Admin Panel > Print history** |
| Cetak berhenti untuk semua booth | Kertas nyangkut atau roll habis di host | Beresin error di host; cetakan yang nunggu lanjut sendiri |

## Terkait {#related}

- [Pasang Printer](./set-up-a-printer.md)
- [Sharing One Printer Between Booths (panduan)](../guides/shared-printer.md)
- [Multi-Booth Setup](../guides/multi-booth-setup.md)
- [Printer yang Didukung](../reference/supported-printers.md)
