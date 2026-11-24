---
sidebar_position: 7
title: Biarkan Pelanggan Cek dan Foto Ulang
description: Atur berapa lama pelanggan lihat tiap foto, boleh foto ulang atau gak, dan boleh geser, zoom, mirror dan tukar foto sebelum dicetak, di booth maupun di event.
tags: [tutorials, review, retake, adjust, pix-design, events]
---

# Biarkan Pelanggan Cek dan Foto Ulang

Di tutorial ini kamu atur layar yang dilihat pelanggan setelah tiap foto, pilih apakah layarnya lanjut sendiri, tentukan boleh foto ulang atau gak, dan nyalakan atau matikan layar "Adjust your photos". Kamu atur untuk booth (di Pix Design) dan untuk event (di halaman event). Siapkan waktu sekitar 15 menit.

Setelah tiap foto, booth nampilin fotonya dengan **Retake** dan **Next**. Di layar itu pelanggan juga bisa benerin crop-nya: zoom, geser foto di dalam slot, dan mirror. Setelah foto terakhir, **Adjust your photos** nampilin seluruh cetakan, di mana mereka bisa geser, zoom dan tukar foto sekali lagi.

## Kapan Dipakai {#when-to-use-it}

- **Booth self-service di mall.** Retake dan adjust foto nyelamatin kamu dari komplain mata merem dan kepala kepotong, tanpa crew yang jaga.
- **Event ramai dengan antrean.** Waktu review pendek dan Retake dimatikan bikin tiap grup cukup semenit. Tamu tetap sempat lihat tiap foto sekilas.
- **Booth premium atau wedding.** Biarkan Retake dan Adjust your photos nyala, dengan review lebih lama, supaya tiap cetakan jadi persis seperti yang tamu mau.
- **Booth yang dipegang fotografer.** Matikan auto-advance supaya fotografer yang nentuin kapan lanjut.

Di sesi Studio, Retake jalan agak beda: pelanggan simpan atau buang tiap foto, lalu milih fotonya. Lihat [Jalankan Sesi Studio Mode](./studio-mode.md).

## Sebelum Mulai {#before-you-start}

- **Untuk booth:** UI project dari Pix Design yang sudah dipasang di booth. Nyimpan project butuh **Pix Pro**.
- **Untuk event:** event dengan mode Photo, Notes atau Mingle. Setiap komputer di event butuh Pix Pro atau **Event Pass**.
- **Pixture Photobooth 1.2.6 atau lebih baru** untuk layar Adjust your photos.

## Persiapan {#prepare}

- **Pilih waktu review yang pas dengan antrean.** 10 detik cukup untuk lihat ada yang merem atau gak. Kalau antreannya panjang, 5 detik. Kalau auto-advance dimatikan, booth nunggu tap, cocok untuk booth yang dijaga crew tapi bisa macet di booth tanpa crew.
- **Putuskan soal Retake sebelum hari H.** Retake tanpa batas di booth self-service bisa bikin antrean lambat. Mematikan Retake bikin lama tiap sesi sama.

## Langkah 1: Atur review di booth {#step-1-set-the-review-on-a-booth}

1. Di **Pix Design > UI Editor**, buka project booth-nya dan klik tab **Review**.
2. Di panel kanan, di **Review Settings**, biarkan **Auto-advance after review** nyala dan atur **Duration**-nya (3 sampai 60 detik, default 15). Tombol Next menghitung mundur, contohnya "Next (8s)", dan booth nyimpan fotonya begitu sampai nol. Kalau dimatikan, pelanggan harus tap **Next** atau **Retake**.
3. Matikan **Retake button** untuk menghilangkan Retake dari review (Next pindah ke tengah). Matikan **Photo counter** untuk menyembunyikan baris "Photo 2 of 4".
4. Klik **Save**.

![Tab bar UI Editor dengan tab Review ditandai](/img/docs/steps/tutorials-review-and-retake--review-tab.webp)

<!-- SHOT-NEEDED: dashboard: UI Editor Review tab right rail with Review Settings (Advanced mode, Retake button, Photo counter, Auto-advance after review, Duration) marked -->

Kalau **Session Time** di halaman Capture habis, Retake hilang sendiri, jadi pelanggan gak bisa nahan booth selamanya.

## Langkah 2: Desain layar Review sendiri (opsional) {#step-2-design-your-own-review-screen-optional}

Booth punya layout review bawaan. Untuk naruh semuanya sendiri:

1. Di tab **Review**, nyalakan **Advanced mode** di **Review Settings**.
2. Tab-nya jadi kanvas dengan blok **Review Photo**, tombol **Retake** dan **Next**, dan **Photo Counter**, di posisi yang sama dengan layout bawaan. Geser, tambah teks dan gambar, atau kasih background sendiri.
3. Kalau pelanggan boleh foto ulang, sisakan minimal satu elemen dengan action Retake. Tombol atau click area baru di halaman ini selalu mulai sebagai Next.
4. Klik **Save**.

## Langkah 3: Nyalakan Adjust your photos di booth {#step-3-turn-on-adjust-your-photos-on-a-booth}

1. Klik tab **Adjust**.
2. Nyalakan **Enabled in session flow**. Di project baru ini sudah nyala. Project yang sudah dipakai booth tetap mati sampai kamu nyalakan, supaya sesi mereka gak berubah tanpa sepengetahuan kamu.
3. Klik **Save**.

![Tab bar UI Editor dengan tab Adjust ditandai](/img/docs/steps/tutorials-review-and-retake--adjust-tab.webp)

Setelah foto terakhir di sesi Photo atau Notes, pelanggan lihat cetakan dengan semua fotonya. Mereka geser foto untuk mindahin, cubit untuk zoom, seret satu foto ke foto lain untuk menukarnya, dan tap **Mirror** untuk membalik semua foto. **Next** lanjut, begitu juga timer halamannya (60 detik di project baru). Sesi Studio melewati layar ini.

## Langkah 4: Atur waktu review di event {#step-4-set-the-review-time-at-an-event}

1. Buka **Events**, buka event-nya, dan di tab **Appearance** klik **Edit appearance**.
2. Buka grup **Timer** dan pilih **Photo review**: **3 s**, **5 s**, **10 s**, **15 s** atau **30 s**. Event yang gak pernah kamu ubah pakai 10 detik.
3. Buka grup **Steps** untuk mematikan layar:
   - **Retake**: kalau mati, Retake hilang dari review tiap foto dan dari Adjust your photos.
   - **Adjust your photos**: kalau mati, setelah foto terakhir langsung ke layar berikutnya.
   - **Choose a filter**: kalau mati, foto tetap seperti aslinya.
4. Klik **Save**. Editor bilang "Saved. Booths update now."

<!-- SHOT-NEEDED: dashboard: event Edit appearance with the Timer group (Photo review) and the Steps group (Adjust your photos, Choose a filter, Retake) marked -->

Photo review muncul di event dengan Photo, Notes atau Mingle. Di event, Adjust your photos lanjut sendiri setelah 60 detik dan punya tombol foto ulang di tiap foto selama Retake nyala.

## Langkah 5: Coba di booth {#step-5-try-it-on-the-booth}

1. Jalankan sesi dengan template minimal dua slot.
2. Setelah foto pertama, tap fotonya. Kontrol zoom dan **Mirror** muncul. Zoom, geser foto untuk mindahin crop, lalu tap **Next**.
3. Di foto berikutnya, tap **Retake** dan cek hitung mundurnya jalan lagi untuk slot yang sama.
4. Setelah foto terakhir, di **Adjust your photos**, seret satu foto ke foto lain untuk menukarnya, lalu tap **Next**.

<!-- SHOT-NEEDED: booth: the per-shot Review screen with a photo selected, the zoom control and Mirror, Retake and "Next (8s)" -->

## Cek Hasilnya {#check-it-worked}

- Setelah tiap foto, fotonya tampil dengan **Retake** dan **Next**, dan Next menghitung mundur kalau auto-advance nyala.
- Zoom dan mirror yang dibuat di Review tampil sama persis di cetakan, GIF dan live photo.
- Kalau Retake mati, review cuma nampilin **Next**.
- Adjust your photos muncul setelah foto terakhir kalau nyala, dan gak muncul kalau mati.

## Tips {#tips}

- **Mirror membalik semua foto di sesi itu**, bukan cuma yang lagi tampil, supaya cetakannya konsisten.
- **Zoom dulu sebelum foto ulang.** Kepala yang kepotong di atas sering beres dengan zoom out atau digeser, lebih cepat daripada foto baru.
- **Pakai review pendek untuk grup.** Grup besar lihat fotonya bareng sambil ngobrol, review 5 detik bikin mereka tetap jalan.
- **Matikan Retake untuk paket berwaktu** di mana kamu jual jumlah foto yang pasti.

## Kalau Ada Masalah {#troubleshooting}

| Masalah | Kenapa | Solusinya |
|---|---|---|
| Retake gak ada | **Retake button** mati di Review Settings, Retake mati di **Steps** event, atau waktu sesi sudah habis | Nyalakan lagi, atau kasih waktu sesi lebih panjang |
| Booth gak pernah lanjut dari review | **Auto-advance after review** mati | Nyalakan dan atur **Duration** |
| Adjust your photos gak pernah muncul | **Enabled in session flow** mati di tab Adjust, aplikasi booth lebih lama dari 1.2.6, atau sesinya Studio | Nyalakan dan simpan, update booth |
| Waktu review event gak kepakai | Perubahannya belum disimpan, atau sesinya bukan Photo, Notes atau Mingle | Klik **Save** di Edit appearance; mode lain gak punya photo review |
| Setelah Advanced mode, pelanggan gak bisa foto ulang | Gak ada elemen di halaman Review dengan action Retake | Tambah tombol Retake atau ubah click area jadi Retake |

## Terkait {#related}

- [Review and Adjust](../desktop-app/session-flow/review-and-adjust.md)
- [Jalankan Sesi Studio Mode](./studio-mode.md)
- [Customise the Booth Screens](./customise-kiosk-screens.md)
- [Run an Event](./run-an-event.md)
