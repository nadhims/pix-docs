---
sidebar_position: 20
title: Sambungkan Kamera
description: Sambungkan kamera Canon, Sony, Nikon atau Fujifilm, webcam atau kamera virtual ke booth lewat USB, jadikan kamera utama booth, dan beresin "Camera Disconnected" sebelum pelanggan datang.
tags: [tutorials, camera, canon, sony, nikon, fujifilm, webcam, hardware]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Sambungkan Kamera

Di tutorial ini kamu cek dulu apakah kameramu jalan di Pixture, siapin setelan di body kamera, colok ke komputer booth, terus jadikan kamera utama booth, biar kamera nyambung sendiri tiap kali booth restart. Siapkan waktu sekitar 15 menit, dengan kamera, kabel USB dan komputer booth di depan kamu.

"Kamera gak kedeteksi" dan "Camera Disconnected" adalah masalah yang paling sering dikirim operator baru. Hampir semuanya datang dari empat penyebab: body kamera yang memang gak bisa dikontrol lewat USB, aplikasi bawaan merek kamera yang masih megang kamera, mode USB yang salah di kamera, atau booth milih kamera lain dari yang kamu mau. Tutorial ini ngecek keempatnya satu per satu.

## Kapan Dipakai {#when-to-use-it}

- **Booth pertama kamu.** Kamu baru beli kamera, atau mau pakai kamera yang sudah ada, dan butuh live view tampil di layar booth.
- **Body baru atau pengganti untuk sewa event.** Kerjakan di rumah sehari sebelumnya, jangan di venue.
- **Booth self-service di mall** yang nampilin "Camera Disconnected" ke pelanggan. Langkah 4 dan 5 nemuin penyebabnya.
- **Webcam atau capture card** untuk photobox pop-up yang hemat, demo, atau cadangan kalau kamera utama rusak.

Gak perlu kalau kamera sudah tampil di booth dan **STATUS** sudah **Connected** dan **Active**. Langsung lanjut ke [Pasang Flash dan Lampu](./flash-and-lighting.md).

## Sebelum Mulai {#before-you-start}

- Paket apa saja: kamera jalan sama di Pix Starter, Pix Pro dan Event Pass.
- Komputer booth (Mac atau Windows) yang sudah terpasang aplikasi Pixture Photobooth dan sudah di-pairing ke booth. Lihat [Bikin Booth dari Nol](./set-up-a-booth.md).
- Kamera, baterai penuh atau adaptor listrik, dan kabel USB yang bisa kirim data. Ada kabel murah yang cuma bisa ngecas, padahal bentuknya sama persis.
- PIN menu, kalau booth-nya pakai PIN. Lihat [Kunci Booth dan Pakai Menu Operator](./operator-menu.md).

## Persiapan {#prepare}

### Cek kameramu didukung {#check-your-camera-is-supported}

Booth ngontrol kamera lewat software remote control resmi dari tiap merek. Kalau mereknya gak nyediain remote control untuk body tertentu, booth gak bisa ngendaliin body itu, apa pun kabel atau setelannya.

| Merek | Bisa | Gak bisa |
|---|---|---|
| **Canon** | Hampir semua DSLR EOS mulai 40D dan 1000D, seri EOS R, EOS M50, M50 Mark II, M200, M6 Mark II | EOS M lama (M, M2, M3, M5, M6, M10, M100) |
| **Sony** | A7 IV/V, A7C/C II/CR, A7R IV sampai VI, A7S III, A9 II/III, A1/A1 II, A6700, ZV-E10 II, ZV-E1, seri FX | A6400, A6600, A7 III dan ZV-E10 generasi pertama |
| **Nikon** | Cuma mirrorless Z: Z9, Z8, Z6III, Z7II, Z6II, Z7, Z6, Z5II, Z5, Zf, ZR, Z50II, Z50, Z30, Zfc | Semua DSLR seri D |
| **Fujifilm** | X-H2S, X-H2, X-T5, X-S20, X-M5, GFX100 II, GFX100S II, GFX100RF, X-T3, X-T4, X-Pro3, X-S10 (firmware 2.00 atau lebih baru), GFX 50S, GFX 50R, GFX100, GFX100S, GFX50S II | Body lainnya |

Daftar lengkap Canon ada di [Kamera yang Didukung](../reference/supported-cameras.md#supported-canon-models). Body di kolom kanan tetap bisa jalanin booth sebagai webcam lewat capture card HDMI (tab Webcam di Langkah 1), tapi kualitas fotonya lebih rendah.

### Siapin hardware-nya dengan benar {#get-the-hardware-right}

- **Pakai listrik, bukan baterai** (adaptor AC atau dummy battery dari merek kamera). Baterai gak kuat seharian nyalain live view, dan baterai habis kelihatan persis kayak kamera yang hilang.
- **Matikan auto power off di kamera**, biar kamera tetap bangun di sela-sela pelanggan.
- **Colok langsung ke port USB komputer**, jangan lewat hub atau keyboard. Canon bilang hub "may prevent EOS Utility and your camera from communicating normally", dan booth juga sama.
- **Matikan Wi-Fi kamera.** Kata Canon, kalau Wi-Fi nyala, "connecting the camera to a computer will not be possible".

## Langkah 1: Siapin body kamera {#step-1-set-up-the-camera-body}

Kerjakan ini sebelum kabel dicolok.

<Tabs groupId="camera-brand">
<TabItem value="canon" label="Canon">

1. Putar mode dial ke **M**, **Av** atau **Tv**. Booth cuma bisa ngubah exposure di mode ini.
2. Matikan Wi-Fi di setelan wireless kamera.
3. Fokuskan ke tempat pelanggan berdiri, terus geser lensa ke **MF**. Booth motret tanpa fokus ulang.

<!-- SHOT-NEEDED: hardware: Canon mode dial on M and the lens AF/MF switch on MF -->

</TabItem>
<TabItem value="sony" label="Sony">

1. Update kamera ke firmware Sony terbaru. Firmware lama bisa gagal nyambung.
2. Set mode USB ke **PC Remote**. Di kebanyakan body: **MENU > Setup > USB > USB Connection Mode > PC Remote**. Jangan pakai **USB Streaming**: di mode itu kamera cuma ngirim video, jadi booth ngira itu webcam.
3. Putar mode dial ke **M**, **A** atau **S**.
4. Khusus Windows, install driver Sony sekali. Driver-nya sudah ada di aplikasi: Langkah 3 nunjukin tempatnya.

<!-- SHOT-NEEDED: hardware: Sony USB Connection Mode menu set to PC Remote -->

</TabItem>
<TabItem value="nikon" label="Nikon Z">

1. Putar mode dial (atau photo mode) ke **M**, **A** atau **S**.
2. Tutup aplikasi Nikon di komputer: NX Tether, Camera Control Pro 2 dan Nikon Transfer 2.
3. Untuk Nikon, komputer butuh Windows 11 (64-bit) atau macOS 13 ke atas. Gak perlu driver.

<!-- SHOT-NEEDED: hardware: Nikon Z mode dial on M -->

</TabItem>
<TabItem value="fujifilm" label="Fujifilm">

1. Set connection mode ke **USB TETHER SHOOTING AUTO** ("PC SHOOT AUTO" di body lama). Di X-T5: **MENU/OK > NETWORK/USB SETTING > CONNECTION MODE > USB TETHER SHOOTING AUTO**. Kata Fujifilm, kamera masuk mode tethered shooting saat komputer nyala, dan balik normal lagi saat kabel dicabut.
2. Set format foto ke **JPEG** (Fine), atau JPEG + RAW. Foto HEIF gak bisa dipakai booth.
3. Di body lama (X-T3, X-T4, X-Pro3, X-S10 dan GFX generasi awal), tombol-tombol kamera terkunci selama dipegang booth. Ubah setelan dari booth, atau cabut kabelnya dulu.

<!-- SHOT-NEEDED: hardware: Fujifilm CONNECTION MODE menu set to USB TETHER SHOOTING AUTO -->

</TabItem>
<TabItem value="webcam" label="Webcam">

Kamera apa pun yang muncul di daftar kamera komputer bisa dipakai: kamera bawaan laptop, webcam USB, capture card HDMI yang terbaca sebagai kamera, atau kamera virtual kayak OBS Virtual Camera.

1. Colok webcam atau capture card. Kalau pakai capture card, matikan info layar di kamera biar gak ikut kefoto.
2. Di Mac, izinkan Pixture Photobooth di **System Settings > Privacy & Security > Camera** saat macOS nanya.

Foto webcam itu potongan dari video, jadi cetakan besar kelihatan lebih lembek dibanding body kamera. Webcam juga gak bisa nyalain flash.

</TabItem>
</Tabs>

## Langkah 2: Tutup aplikasi bawaan kamera, terus colok kameranya {#step-2-close-the-makers-app-and-plug-the-camera-in}

Cuma satu program yang bisa ngontrol kamera lewat USB. Kalau EOS Utility, Lightroom, Imaging Edge, X Acquire, NX Tether atau aplikasi video call masih megang kamera, booth gak kebagian.

<Tabs groupId="os">
<TabItem value="mac" label="Mac">

1. Keluar dari EOS Utility dan aplikasi kamera lain: klik jendelanya, terus tekan Command-Q. Nutup jendela aja gak cukup.
2. Biar gak kebuka sendiri: **System Settings > General > Login Items & Extensions** (**Login Items** sebelum macOS 15), pilih EOS Utility dan klik tombol minus (–).
3. Colok kamera ke port di Mac dan nyalakan.

</TabItem>
<TabItem value="windows" label="Windows">

1. Keluar dari EOS Utility lewat ikonnya di dekat jam (klik panah ^ untuk lihat ikon yang tersembunyi), dan tutup aplikasi kamera lainnya.
2. Biar gak kebuka sendiri: **Settings > Apps > Startup**, matikan semua entri EOS Utility.
3. Tutup jendela AutoPlay atau "Import photos" yang muncul saat kamera dicolok.
4. Colok kamera ke port di bagian belakang PC dan nyalakan.

<!-- SHOT-NEEDED: windows: Settings > Apps > Startup with the EOS Utility switch marked -->

</TabItem>
</Tabs>

EOS Utility bakal muncul lagi tiap kali Canon dicolok, sampai kamu suruh berhenti. Kalau masih kebuka terus, ikuti [EOS Utility atau program lain megang kamera Canon](../troubleshooting/camera.md#eos-utility-or-another-program-is-holding-a-canon).

## Langkah 3: Pilih kamera di booth {#step-3-pick-the-camera-on-the-booth}

1. Buka menu operator (tap sudut kanan atas dua kali) dan tap **Camera Settings**.
2. Di **CAMERA DEVICE**, pilih kameramu dari daftar. **Auto-detect** ngambil kamera pertama yang ketemu, dan itu bisa jadi kamera bawaan laptop, bukan DSLR kamu.
3. Tap **Set as Default**. Daftarnya sekarang nampilin "(default)" di sebelahnya, dan booth buka kamera yang sama tiap kali restart.
4. Cek **STATUS**: **Camera** tertulis **Connected** dan **Live View** tertulis **Active**. Live view muncul di sebelah kiri.

![Camera Settings dengan CAMERA DEVICE, Set as Default, dan baris status Camera dan Live View ditandai](/img/docs/steps/tutorials-connect-a-camera--camera-device.webp)

**Sony di Windows:** kalau Sony gak muncul di daftar, tap **Show Diagnostics**, terus **Install Sony Driver**, setujui prompt Windows, lalu cabut dan colok lagi kameranya. Tombolnya berubah jadi **Sony Driver Installed**. Cukup sekali per komputer.

Kalau pakai body kamera, **CAMERA SETTINGS** di bawahnya nampilin ISO, aperture, shutter speed dan white balance. Halaman ini ngingetin kamu soal mode dial kalau setelannya gak ngaruh. Atur semuanya di [Pasang Flash dan Lampu](./flash-and-lighting.md).

## Langkah 4: Coba ambil foto {#step-4-take-a-test-photo}

1. Tap tombol shutter bulat di bawah live view. Fotonya muncul di atas preview; tap untuk nutup.
2. Tap **Back to Menu**, terus **Start Booth**, dan jalankan satu sesi penuh sampai cetak.

## Langkah 5: Matikan dan nyalakan lagi {#step-5-turn-it-off-and-on-again}

Suatu saat kamera pasti mati, kecabut atau tidur. Pastikan booth bisa pulih sendiri:

1. Matikan kamera, tunggu 10 detik, nyalakan lagi.
2. Dalam beberapa detik live view balik sendiri. Di layar Home, "⚠ Camera Disconnected" cuma muncul selama kamera hilang.

## Cek Hasilnya {#check-it-worked}

- **Camera Settings > STATUS**: **Camera** tertulis **Connected**, **Camera Name** sesuai kameramu, **Live View** tertulis **Active**.
- Daftar cek di menu operator nampilin **Camera** dengan nama kameramu dan "connected".
- Setelah komputer restart, booth langsung buka kamera yang sama tanpa kamu pilih lagi.

## Tips {#tips}

- **Sebelum reset atau install ulang, catat model dan setelan kamera.** Setelan kamera disimpan di komputer booth, bukan di dashboard.
- **Kasih label di kabel.** Kabel USB yang pernah bermasalah bakal bermasalah lagi di tengah event. Simpan satu kabel cadangan yang sudah dites di tas.
- **Jaga kabel USB tetap pendek.** Kabel panjang atau sambungan adalah penyebab umum kamera putus di tengah hari. Kalau kamera harus jauh dari komputer, pakai extension USB aktif (yang ada power-nya).
- **PC Windows:** di power plan, matikan **USB selective suspend**, biar Windows gak motong daya kamera yang lagi diam.
- **Kamera dipasang miring untuk booth portrait?** Atur **CAMERA ROTATION** di bagian **CAPTURE** di halaman yang sama.
- **Kirim log waktu minta bantuan:** **Camera Settings > Show Diagnostics > Copy Today's Logs**, terus tempel di chat.

## Kalau Ada Masalah {#troubleshooting}

| Masalah | Kenapa | Solusinya |
|---|---|---|
| Kamera gak pernah muncul di **CAMERA DEVICE** | Body-nya gak didukung (A6400, ZV-E10 pertama, Nikon seri D dan lainnya) | Cek tabel di Persiapan. Pakai body yang didukung, atau capture card HDMI sebagai webcam |
| Canon gak muncul, atau **Error** nampilin `DEVICE_BUSY` atau `COMM_PORT_IS_IN_USE` | EOS Utility atau aplikasi lain masih megang kamera | Tutup aplikasinya dan matikan auto-start-nya (Langkah 2) |
| Kamera muncul tapi **Live View** tetap **Inactive** | Wi-Fi kamera nyala, atau kamera tidur | Matikan Wi-Fi, matikan auto power off, terus matikan dan nyalakan kamera |
| Sony terbaca sebagai webcam | Kamera di mode **USB Streaming** | Set mode USB ke **PC Remote** |
| Sony cuma gak muncul di Windows | Driver Sony belum terpasang | **Show Diagnostics > Install Sony Driver**, terus colok ulang |
| Fujifilm gak ketemu, atau **Error** nyebut USB connection mode | Connection mode-nya bukan tether shooting | Set **USB TETHER SHOOTING AUTO** (atau **PC SHOOT AUTO**) |
| Booth nampilin kamera laptop, bukan DSLR | **Auto-detect** ngambil kamera pertama di daftar | Pilih DSLR di **CAMERA DEVICE** dan tap **Set as Default** |
| Webcam sudah dicolok tapi booth pakai kamera lain | Webcam-nya belum pernah dipilih sebagai kamera booth | Pilih webcam di **CAMERA DEVICE** dan tap **Set as Default** |
| Daftar exposure gak ngaruh apa-apa | Mode dial di Auto atau scene mode | Set **M**, **Av** atau **Tv** (Canon), atau **M**, **A** atau **S** |
| "Camera Disconnected" muncul lagi di tengah hari | Baterai habis, kamera tidur, hub atau kabel longgar | Pakai listrik, matikan auto power off, port langsung dan kabel yang bagus |

Kasus lain, lengkap dengan pesan di layar: [Masalah Kamera](../troubleshooting/camera.md).

## Terkait {#related}

- [Kamera yang Didukung](../reference/supported-cameras.md)
- [Camera Settings](../desktop-app/camera-setup/camera-settings.md)
- [Pasang Flash dan Lampu](./flash-and-lighting.md)
- [Pakai Dua Kamera atau Lebih](./multi-camera.md)
- [Masalah Kamera](../troubleshooting/camera.md)
