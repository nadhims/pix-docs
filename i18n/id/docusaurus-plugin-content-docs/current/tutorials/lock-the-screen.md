---
sidebar_position: 3
title: Kunci Layar ke Booth
description: Cegah taskbar, notifikasi, widget dan swipe dari tepi layar muncul di atas booth di layar sentuh Windows, dan jauhkan notifikasi, hot corner dan screen saver di Mac.
tags: [tutorials, booth, kiosk, touchscreen, windows, mac]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Kunci Layar ke Booth

Di tutorial ini kamu cegah komputer nampilin apa pun di atas booth: taskbar saat pelanggan swipe ke atas, panel notifikasi, widget, pop-up dan screen saver. Siapkan waktu sekitar 15 menit, ditambah satu kali restart di Windows.

Aplikasi Pixture Photobooth sudah jalan dalam layar penuh dan tetap di atas jendela lain setelah komputer di-pairing. Yang gak bisa diblokir aplikasi tergantung sistemnya:

- **Di Mac**, kiosk mode aplikasi nyembunyiin Dock dan menu bar, dan matiin perpindahan antar-aplikasi. Yang tersisa tinggal notifikasi, hot corner dan screen saver.
- **Di Windows**, aplikasi tampil layar penuh, tapi Windows tetap merespons swipe dari tepi layar di layar sentuh: swipe ke atas nampilin taskbar, dari kanan notification centre, dari kiri widget. Nyembunyiin taskbar saja gak cukup, soalnya swipe tetap bisa munculin lagi.

## Kapan Dipakai {#when-to-use-it}

- **Booth layar sentuh yang dipakai pelanggan sendiri**: kiosk di mall, studio self-service, box pop-up.
- **Booth yang layarnya dipakai anak-anak.** Mereka swipe ke mana-mana.
- **Booth mana pun yang pernah nampilin pop-up di atas layar Start**: banner "Windows needs to update", pesan dari aplikasi chat, peringatan baterai lemah dari mouse wireless.

Gak perlu di booth tanpa layar sentuh yang keyboard-nya cuma kamu yang pegang, tapi langkah notifikasinya tetap berguna.

## Sebelum Mulai {#before-you-start}

- Akun administrator di komputer booth.
- Di Windows, edisinya: **Settings > System > About** nampilin Windows 11 Home, Pro atau edisi lain. Langkah 1 tergantung edisi ini.
- Pixture Photobooth sudah terpasang dan di-pairing. Lihat [Bikin Booth dari Nol](./set-up-a-booth.md).

## Langkah 1: Matiin swipe dari tepi layar {#step-1-turn-off-edge-swipes}

<Tabs groupId="os">
<TabItem value="windows" label="Windows">

**Di Windows 11, semua edisi** (ini menghentikan swipe dari tepi kiri dan kanan, bukan swipe ke atas dari bawah):

1. Buka **Settings > Bluetooth & devices > Touch**.
2. Matiin **Three and four-finger touch gestures**.
3. Buka **Touch screen edge gestures** dan matiin **Swipe from the left edge of the screen** dan **Swipe from the right edge of the screen**.

<!-- SHOT-NEEDED: windows: Settings > Bluetooth & devices > Touch with the gesture switches -->

**Di Windows Pro, Enterprise atau Education (Windows 10 1607 atau lebih baru dan Windows 11)**, pakai juga kebijakan kiosk dari Microsoft, yang memblokir semua swipe dari tepi layar:

1. Tekan **Windows + R**, ketik `gpedit.msc` dan tekan Enter.
2. Buka **Computer Configuration > Administrative Templates > Windows Components > Edge UI**.
3. Buka **Allow edge swipe**, pilih **Disabled**, dan klik **OK**.
4. Restart komputer.

Microsoft: kalau kebijakan ini dimatikan, "users won't be able to invoke any system UI by swiping in from any screen edge" (pengguna gak bisa munculin UI sistem apa pun dengan swipe dari tepi layar mana pun).

**Di Windows Home**, Microsoft gak nyediain setelan yang menghentikan swipe ke atas dari bawah, dan Windows 10 Home juga gak punya switch gestur sentuh. Untuk booth layar sentuh yang dipakai pelanggan sendiri, pakai Windows Pro (di Windows 11, upgrade di **Settings > System > Activation**).

<!-- SHOT-NEEDED: windows: Group Policy Editor with Allow edge swipe set to Disabled -->

</TabItem>
<TabItem value="mac" label="Mac">

Gak ada yang perlu dilakukan: macOS gak punya swipe dari tepi layar sentuh, dan kiosk mode aplikasi booth tetap nyembunyiin Dock dan menu bar.

</TabItem>
</Tabs>

## Langkah 2: Sembunyikan taskbar atau Dock {#step-2-hide-the-taskbar-or-dock}

<Tabs groupId="os">
<TabItem value="windows" label="Windows">

1. Klik kanan taskbar dan klik **Taskbar settings**.
2. Di **Taskbar behaviors**, nyalain **Automatically hide the taskbar**. Di Windows 10, switch-nya **Automatically hide the taskbar in desktop mode** (dan **in tablet mode**).

Dengan ini taskbar gak menghalangi kalau suatu saat aplikasi booth tertutup. Di layar sentuh, Langkah 1 yang mencegah swipe munculin taskbar lagi.

<!-- SHOT-NEEDED: windows: Taskbar behaviors with Automatically hide the taskbar -->

</TabItem>
<TabItem value="mac" label="Mac">

Gak ada yang perlu dilakukan: aplikasi booth nyembunyiin Dock dan menu bar selama jalan.

</TabItem>
</Tabs>

## Langkah 3: Bungkam notifikasi {#step-3-silence-notifications}

<Tabs groupId="os">
<TabItem value="windows" label="Windows">

1. Buka **Settings > System > Notifications**.
2. Di **Turn on do not disturb automatically**, centang **When using an app in full-screen mode**.
3. Untuk booth yang cuma jalanin Pixture, matiin juga **Notifications** di bagian atas halaman yang sama.

Di Windows 10, setelan yang sama namanya **Focus assist** di **Settings > System**.

<!-- SHOT-NEEDED: windows: Settings > System > Notifications with do not disturb in full screen -->

</TabItem>
<TabItem value="mac" label="Mac">

1. Buka **Control Center** dan nyalain **Do Not Disturb** di bagian **Focus**.
2. Di **System Settings > Notifications**, matiin notifikasi untuk setiap aplikasi yang kamu install di Mac booth (aplikasi chat, cloud storage, utilitas printer).

<!-- SHOT-NEEDED: mac: Control Center Focus with Do Not Disturb (personal items blurred) -->

</TabItem>
</Tabs>

## Langkah 4: Matiin hot corner dan screen saver (Mac) {#step-4-turn-off-hot-corners-and-the-screen-saver-mac}

<Tabs groupId="os">
<TabItem value="mac" label="Mac">

1. Buka **System Settings > Desktop & Dock** dan klik **Hot Corners**.
2. Ubah keempat sudut ke tanda strip (tanpa aksi) dan klik **Done**. Kalau gak, mouse atau trackpad yang kedorong ke sudut bisa nyalain screen saver atau ngunci layar.
3. Matiin screen saver: di macOS 26 dan lebih baru, di **System Settings > Wallpaper > Screen Saver**, ubah **Start Screen Saver** ke **Never**. Di versi sebelumnya, setelannya **Start Screen Saver when inactive** di **System Settings > Lock Screen**.

<!-- SHOT-NEEDED: mac: Hot Corners with all four set to the dash -->

</TabItem>
<TabItem value="windows" label="Windows">

Windows gak punya hot corner. Setelan sleep dan layar ada di [Bikin Booth Nyala Sendiri Setelah Listrik Padam](./start-after-a-power-cut.md), Langkah 3.

</TabItem>
</Tabs>

## Cek Hasilnya {#check-it-worked}

1. Buka booth di layar Start.
2. Swipe dari keempat tepi layar, dan swipe ke atas dari bawah, persis kayak pelanggan.
3. Gerakkan mouse (kalau ada) ke setiap sudut dan tunggu 10 detik.
4. Gak ada apa pun selain booth yang muncul, dan gak ada notifikasi selama sesi tes.

## Tips {#tips}

- **Hapus aplikasi yang gak dibutuhkan booth.** Setiap aplikasi chat, cloud atau updater berarti satu hal lagi yang bisa muncul tiba-tiba. Komputer booth cukup jalanin Pixture Photobooth plus driver printer dan kamera.
- **Setelan sleep dan layar mati** ada di [Bikin Booth Nyala Sendiri Setelah Listrik Padam](./start-after-a-power-cut.md): layar yang mati sendiri kelihatan kayak booth rusak.
- **Perlu pakai komputernya di tengah hari?** Buka menu operator, tap **Exit**, terus **Exit App**. Lihat [Kunci Booth dan Pakai Menu Operator](./operator-menu.md).

## Kalau Ada Masalah {#troubleshooting}

| Masalah | Kenapa | Solusinya |
|---|---|---|
| Swipe ke atas nampilin taskbar | Windows merespons swipe dari tepi layar, bahkan di atas aplikasi layar penuh | Langkah 1 (gestur sentuh dimatikan, **Allow edge swipe** diubah ke Disabled di Pro) |
| `gpedit.msc` gak mau terbuka | Windows Home gak punya Group Policy Editor | Windows Home gak bisa memblokir swipe ke atas. Upgrade ke Windows Pro untuk booth layar sentuh |
| Panel notifikasi muncul dari kanan | Swipe dari tepi kanan masih nyala | Langkah 1, matiin **Swipe from the right edge of the screen** |
| Pop-up muncul di atas layar Start | Notifikasi nyala | Langkah 3 |
| Mac nampilin screen saver atau ngunci layar | Hot corner atau timer screen saver | Langkah 4 |
| Taskbar atau Dock kelihatan dan booth tampil di jendela | Aplikasi booth tertutup atau belum di-pairing | Buka Pixture Photobooth. Booth yang sudah di-pairing terbuka dalam layar penuh |

## Terkait {#related}

- [Bikin Booth Nyala Sendiri Setelah Listrik Padam](./start-after-a-power-cut.md)
- [Kunci Booth dan Pakai Menu Operator](./operator-menu.md)
- [Spesifikasi Sistem](../reference/system-requirements.md)
