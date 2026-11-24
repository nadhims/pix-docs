---
sidebar_position: 2
title: Bikin Booth Nyala Sendiri Setelah Listrik Padam
description: Atur komputer booth Mac atau Windows biar nyala sendiri saat listrik balik, login tanpa password, gak pernah sleep, gak restart untuk update di tengah hari, dan buka aplikasi Pixture Photobooth sendiri.
tags: [tutorials, booth, mac, windows, power, auto start, unattended]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Bikin Booth Nyala Sendiri Setelah Listrik Padam

Di tutorial ini kamu atur komputer booth biar, saat listrik balik setelah padam, komputer nyala sendiri, login, buka aplikasi Pixture Photobooth dan langsung masuk ke layar Start, tanpa ada yang nyentuh. Siapkan waktu sekitar 20 menit, ditambah satu atau dua kali restart.

Ada empat hal yang harus beres, dan masing-masing setelannya beda:

1. Komputer **nyala** saat listrik balik (setelan di komputernya sendiri).
2. Komputer **login** tanpa ada yang ngetik password.
3. Komputer **gak sleep** dan **gak restart untuk update** selama jam buka.
4. Aplikasi Pixture Photobooth **terbuka saat login**. Yang ini sudah nyala dari awal.

## Kapan Dipakai {#when-to-use-it}

- **Booth self-service di mall atau venue**, yang gak dijaga siapa-siapa saat gedung nyalain listrik lagi di pagi hari.
- **Venue yang matiin listrik di malam hari**, atau ikut matiin colokan booth bareng lampu.
- **Box pop-up di colokan timer** yang harus hidup pas jam buka.
- **Booth mana pun dengan listrik yang gak stabil**, biar padam sebentar gak bikin hari kamu selesai.

Gak perlu untuk sewa event yang booth-nya kamu nyalain sendiri, tapi langkah sleep dan update tetap berguna di sana.

## Sebelum Mulai {#before-you-start}

- Akses ke komputer booth dengan akun administrator.
- Untuk Windows: merek komputernya (Dell, HP, Lenovo, ASUS, merek mini PC), biar kamu tahu tombol mana yang membuka layar setup-nya.
- Pixture Photobooth sudah terpasang dan di-pairing. Lihat [Bikin Booth dari Nol](./set-up-a-booth.md).

## Persiapan {#prepare}

- **Pakai akun komputer khusus untuk booth.** Login otomatis melewati password, jadi siapa pun yang nyalain komputer langsung masuk. Jangan pakai akun yang nyimpen email atau rekening bank kamu.
- **Mac dengan FileVault gak bisa login sendiri.** FileVault mengenkripsi disk dan minta password setiap kali Mac nyala, jadi setelah listrik padam Mac nunggu di layar password. Apple juga matiin login otomatis selama FileVault nyala. Pilihannya ada dua. Matiin FileVault di **System Settings > Privacy & Security > FileVault**, biar Mac nyala sendiri. Risikonya, siapa pun yang bawa kabur Mac itu bisa baca isi disk-nya, termasuk foto, jadi taruh Mac di tempat yang gak bisa dibawa pergi. Atau biarkan FileVault nyala, dan harus ada orang yang ngetik password setiap habis listrik padam.
- **MacBook gak punya setelan power failure.** Setelan ini ada di Mac desktop (Mac mini, iMac, Mac Studio, Mac Pro). MacBook yang dicolok charger tetap jalan pakai baterai saat listrik padam sebentar. MacBook dengan Apple silicon di macOS 15 atau lebih baru nyala sendiri saat kamu sambungkan ke listrik.

## Langkah 1: Bikin komputer nyala saat listrik balik {#step-1-make-the-computer-power-on-when-electricity-returns}

<Tabs groupId="os">
<TabItem value="mac" label="Mac">

1. Buka **System Settings** dan klik **Energy** (di macOS 13 dan 14: **Energy Saver**).
2. Nyalain **Start up automatically after a power failure**.

Di Mac mini atau iMac 2024 atau lebih baru, atau Mac Studio 2025 atau lebih baru, dengan macOS 26.5 atau lebih baru, setelannya berupa menu bernama **Start up when power is connected**: pilih **After power failure**. **Always** juga bisa, dan bikin Mac nyala setiap kali listrik tersambung.

<!-- SHOT-NEEDED: mac: System Settings > Energy with Start up automatically after a power failure -->

</TabItem>
<TabItem value="windows" label="Windows">

Setelan ini ada di layar setup komputer itu sendiri (BIOS atau UEFI), bukan di Windows.

1. Restart komputer dan tekan tombol setup begitu logo merek muncul.
2. Cari setelan power-loss (lihat tabel di bawah) dan ubah ke **Power On**.
3. Simpan dan keluar (biasanya **F10**).

| Merek | Tombol setup | Lokasi | Setelan |
|---|---|---|---|
| Dell | F2 | Power Management | **AC Recovery** > Power On |
| HP | F10 | Advanced > Boot Options | **After Power Loss** > Power on |
| Lenovo ThinkCentre (lama) | F1 | Power | **After Power Loss** > Power On |
| Motherboard ASUS | Delete | Advanced Mode > Advanced > APM Configuration | **Restore AC Power Loss** > Power On |
| Intel NUC | F2 | Power > Secondary Power Settings | **After Power Failure** > Power On |

Merek lain, atau mini PC? Cek di **Power**, **Advanced** atau **Chipset**, cari setelan yang namanya mengandung "AC Power Loss", "After Power Failure" atau "AC Back", terus nyalain. Nama persisnya ada di manual dari mereknya.

<!-- SHOT-NEEDED: windows: BIOS power menu with the power-loss setting on Power On -->

</TabItem>
</Tabs>

## Langkah 2: Login tanpa password {#step-2-sign-in-without-a-password}

<Tabs groupId="os">
<TabItem value="mac" label="Mac">

1. Buka **System Settings > Users & Groups**.
2. Ubah **Automatically log in as** ke akun booth dan ketik password-nya sekali.

Kalau pilihan ini abu-abu, berarti FileVault nyala (lihat Persiapan).

<!-- SHOT-NEEDED: mac: Users & Groups with Automatically log in as (names blurred) -->

</TabItem>
<TabItem value="windows" label="Windows">

Tool resmi dari Microsoft untuk ini namanya **Autologon**, dari Microsoft Sysinternals.

1. Kalau komputer login pakai akun Microsoft dan PIN atau wajah, buka dulu **Settings > Accounts > Sign-in options** dan, di **Additional settings**, matiin **For improved security, only allow Windows Hello sign-in for Microsoft accounts on this device** (Windows 10: **Require Windows Hello sign-in for Microsoft accounts**).
2. Download Autologon dari Microsoft di learn.microsoft.com/sysinternals/downloads/autologon dan jalankan.
3. Cek nama user-nya, ketik password akun dan klik **Enable**.

Autologon nyimpen password dalam bentuk terenkripsi di komputer. Kalau mau melewati login otomatis sekali saja, tahan **Shift** saat Windows mulai.

<!-- SHOT-NEEDED: windows: Autologon window with Enable -->

</TabItem>
</Tabs>

## Langkah 3: Matiin sleep dan restart karena update {#step-3-stop-sleep-and-update-restarts}

<Tabs groupId="os">
<TabItem value="mac" label="Mac">

1. Di **System Settings > Energy**, nyalain **Prevent automatic sleeping when the display is off**.
2. Di **System Settings > Lock Screen**, ubah pilihan **Turn display off ... when inactive** ke **Never** (di MacBook: **Turn display off on power adapter when inactive**).
3. Di **System Settings > General > Software Update**, klik tombol info di sebelah **Automatic Updates** dan matiin **Install macOS updates**. Install update sendiri di hari yang gak ada pelanggan.

<!-- SHOT-NEEDED: mac: Software Update automatic updates options -->

</TabItem>
<TabItem value="windows" label="Windows">

1. Buka **Settings > System > Power & battery > Screen, sleep, & hibernate timeouts**. Ubah **When plugged in, turn my screen off after** dan **When plugged in, make my device sleep after** ke **Never**. Di Windows 10, pilihan yang sama ada di **Settings > System > Power & sleep**.
2. Buka **Settings > Windows Update > Advanced options > Active hours**, pilih **Manually**, dan isi sesuai jam buka kamu. Windows gak restart untuk update di dalam active hours.
3. Sebelum event besar, buka **Settings > Windows Update** dan pakai **Pause updates** (sampai 35 hari di Windows 11).

<!-- SHOT-NEEDED: windows: Power & battery screen and sleep timeouts set to Never -->

</TabItem>
</Tabs>

## Langkah 4: Cek aplikasi booth terbuka sendiri {#step-4-check-that-the-booth-app-opens-by-itself}

**Start on boot** sudah nyala dari awal. Untuk ngecek, buka menu operator, tap **Admin Panel**, dan pastikan **Start on boot** ("Launch automatically when computer starts") nyala.

![Admin Settings di booth dengan baris Start on boot ditandai](/img/docs/steps/tutorials-start-after-a-power-cut--start-on-boot.webp)

Setelah komputer di-pairing, aplikasi langsung terbuka ke booth dalam layar penuh.

## Cek Hasilnya {#check-it-worked}

1. Matiin booth **dari colokan di dinding**, bukan dari tombol power. Tunggu 30 detik.
2. Nyalain lagi dari colokan dan tinggalkan.
3. Dalam beberapa menit, komputer nyala, login, dan booth nampilin layar Start, tanpa ada yang nyentuh.

Kalau prosesnya berhenti di tengah jalan, tabel di bawah nunjukin langkah mana yang perlu dicek.

## Tips {#tips}

- **Kalau mau booth gak terbuka saat komputer nyala, matiin Start on boot.** Menghapus aplikasi dari Startup apps di Windows atau Login Items di macOS gak bertahan, soalnya aplikasi nambahin dirinya lagi setiap kali dibuka.
- **UPS kecil** (baterai cadangan) bikin booth tetap jalan saat listrik turun sebentar tanpa restart, dan ngasih waktu untuk shutdown dengan rapi saat padam lama.
- **Tes pakai colokan aslinya.** Venue sering matiin satu stop kontak sekaligus, jadi pastikan colokan booth ada di jalur listrik yang nyala duluan.
- Setelah listrik padam, buka **Admin Panel** dan cek **Uploads**: foto yang diambil saat internet mati akan ter-upload begitu booth online lagi.

## Kalau Ada Masalah {#troubleshooting}

| Masalah | Kenapa | Solusinya |
|---|---|---|
| Komputer tetap mati saat listrik balik | Setelan power-loss mati | Langkah 1: Energy di Mac, BIOS di Windows |
| Mac berhenti di layar password | FileVault nyala, atau login otomatis mati | Matiin FileVault, terus atur **Automatically log in as** |
| **Automatically log in as** abu-abu | FileVault nyala | **Privacy & Security > FileVault** > matiin |
| Windows berhenti di layar sign-in | Login otomatis belum diatur, atau sign-in khusus Windows Hello nyala | Langkah 2 di Windows |
| Aplikasi booth gak terbuka setelah login | **Start on boot** mati | Admin Panel > nyalain **Start on boot** |
| Booth jadi hitam di sore hari | Komputer sleep atau matiin layar | Langkah 3 |
| Komputer restart di tengah event | Update Windows atau macOS | Active hours dan Pause updates (Windows), automatic updates dimatikan (Mac) |

## Terkait {#related}

- [Kunci Layar ke Booth](./lock-the-screen.md)
- [Kunci Booth dan Pakai Menu Operator](./operator-menu.md)
- [Mode Offline](../desktop-app/offline-mode.md)
- [Spesifikasi Sistem](../reference/system-requirements.md)
