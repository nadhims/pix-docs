---
sidebar_position: 2.6
title: Tambah Filter ke Booth Kamu
description: Pilih filter warna mana dari 14 filter bawaan yang ditawarkan setiap booth, tambahkan look kamu sendiri sebagai file .cube, dan jaga layar Filter tetap singkat dan sesuai brand.
tags: [tutorials, pix-design, filters, lut, booth]
---

# Tambah Filter ke Booth Kamu

Di tutorial ini kamu pilih filter warna yang ditawarkan booth di layar Filter, upload look kamu sendiri sebagai file .cube, dan ngecek hasilnya sebelum pelanggan lihat. Siapkan waktu sekitar 15 menit.

Filter adalah color grading yang dipilih pelanggan setelah foto diambil. Filter mengubah semua yang mereka bawa pulang: cetakan, GIF dan live photo dapat look yang sama.

## Kapan Dipakai {#when-to-use-it}

- **Sewa photobooth untuk event:** nikahan dengan look film yang hangat. Upload satu filter custom sesuai gaya pasangannya dan tawarkan cuma itu plus satu hitam putih, biar tamu milih dalam sedetik.
- **Booth self-service di mall:** daftar pendek look yang populer (misalnya **B&W Classic**, **Warm Vintage**, **Soft Pastel**) bikin layar Filter cepat, jadi pelanggan berikutnya gak kelamaan nunggu.
- **Studio dengan banyak booth:** grading andalan kamu sebagai filter custom di semua cabang, biar cetakannya sama di mana-mana.
- **Photobox pop-up untuk brand:** satu filter yang cocok dengan warna brand-nya, tanpa pilihan lain.

Gak mau ada langkah filter sama sekali? Matikan layar Filter-nya: **Enabled in session flow** di halaman Filter UI project kamu, atau **Choose a filter** di **Steps** pada **Edit appearance** event. Foto keluar apa adanya.

## Sebelum Mulai {#before-you-start}

- **Paket:** 14 filter bawaan jalan di semua paket. Upload filter sendiri butuh Pix Pro atau free trial (di Pix Starter, **Upload** membuka jendela "Pix Pro keeps your work").
- **Akses:** kamu butuh hak untuk mengelola template (pemilik akun punya hak ini).
- **Booth** dengan layar Filter di alurnya, untuk nge-tes.

## Persiapan {#prepare}

Filter bawaannya: **Warm Vintage**, **Cool Blue**, **B&W Classic**, **Sunset Glow**, **Film Noir**, **Soft Pastel**, **Golden Hour**, **Moody Teal**, **Sepia Tone**, **High Contrast**, **Faded Film**, **Rose Tint**, **Arctic** dan **Cinematic**.

Untuk look kamu sendiri, kamu butuh file **.cube**: tabel lookup warna 3D (LUT), format color grading yang bisa di-export kebanyakan aplikasi foto dan video. Jendela upload-nya menyarankan Affinity Photo, Lightroom atau DaVinci Resolve. Yang diterima Pixture:

- **File .cube 3D** dengan baris `LUT_3D_SIZE` antara 2 dan 256. LUT satu dimensi gak didukung.
- **Maksimal 50 MB** per file, dan **maksimal 50** filter custom per akun.

Tips biar filternya cocok di booth:

- **Grading pakai foto dari booth kamu sendiri.** Ambil foto tes pakai kamera dan lampu booth, bikin look-nya di foto itu, baru export LUT-nya. Look yang dibikin di foto pemandangan sunset jarang cocok untuk wajah di bawah flash.
- **Jaga warna kulit.** Pelanggan menilai filter dari wajah mereka sendiri. Grading teal atau oranye yang kuat bisa bagus di pemandangan tapi bikin kulit kelihatan pucat atau sakit.
- **Jangan berlebihan.** LUT itu perubahan warna yang tetap: gak bisa menyesuaikan diri ke foto yang lebih gelap atau lebih terang. Look yang moderat tetap bagus di hari mendung maupun venue yang terang.
- **Lebih kecil, lebih cepat.** Grid yang lebih besar ngasih grading yang lebih halus tapi file lebih besar, dan setiap booth harus men-download-nya. Jauhi batas 50 MB.
- **Kasih nama untuk pelanggan.** **Filter Name** adalah label di bawah kartu di booth. "Film" atau "Warm" lebih enak dibaca daripada "Wedding_v3_final".

## Langkah 1: Buka Photo Filters {#step-1-open-photo-filters}

1. Di sidebar, klik **Pix Design**.
2. Klik **Photo Filters**.

![Halaman Pix Design dengan Pix Design di sidebar dan kartu Photo Filters ditandai](/img/docs/steps/tutorials-add-filters--hub.webp)

Halamannya nampilin foto contoh dan semua filter di **Built-in Filters** dan **Custom Filters**. Klik kartu filter untuk lihat hasilnya di foto contoh; **Original** nampilin foto tanpa filter.

## Langkah 2: Upload filter kamu sendiri {#step-2-upload-your-own-filter}

1. Klik **+ Upload Filter**.
2. Ketik **Filter Name**, misalnya "Warm Film".
3. Di **.cube File**, pilih file kamu.
4. Klik **Upload**. Halamannya bilang filter sudah ter-upload, dan filternya muncul di **Custom Filters**.

![Photo Filters dengan Upload Filter, Filter Name, .cube File dan Upload ditandai](/img/docs/steps/tutorials-add-filters--upload-filter.webp)

Klik kartu filter baru kamu dan bandingkan foto contohnya dengan look yang sama di aplikasi editing kamu. Kalau warnanya gak cocok (misalnya kulit jadi biru), hapus filternya pakai **Delete Filter** dan jangan pasang ke booth.

## Langkah 3: Pilih filter yang ditawarkan booth {#step-3-choose-the-filters-a-booth-offers}

Booth yang belum dipilihkan filter nawarin semua filter di akun, bawaan maupun custom. Untuk nawarin daftar pendek:

1. Di sidebar, klik **Booths** dan buka booth-nya.
2. Buka tab **Filters**. **Booth Filters** nampilin apa yang ditawarkan booth sekarang.
3. Klik **Manage Filters**.

![Halaman booth dengan Booths, tab Filters dan Manage Filters ditandai](/img/docs/steps/tutorials-add-filters--booth-filters-tab.webp)

Di jendela **Manage Filters**:

1. Klik filter yang harus ditawarkan booth ini biar tercentang, dan klik yang lain untuk menghapus centangnya. **Select all** mencentang semuanya; menu **All** / **Assigned** / **Not Assigned** dan **All Types** / **Built-in** / **Custom** plus kotak pencarian mempersempit daftarnya.
2. Klik **Save Filter Assignments**.

![Jendela Manage Filters dengan satu kartu filter dan Save Filter Assignments ditandai](/img/docs/steps/tutorials-add-filters--manage-filters.webp)

Ulangi untuk setiap booth. Setiap booth boleh punya daftar sendiri.

## Cek Hasilnya {#check-it-worked}

- Tab **Filters** di booth cuma nampilin filter yang kamu centang, dengan jumlahnya di samping **Booth Filters**.
- Di booth, jalankan sesi tes: layar Filter nampilin daftar kamu, dalam grid kartu sesuai desain booth.
- Cetak foto dengan filter custom kamu dan lihat di cahaya siang. Cek juga GIF dan live photo dari QR code: semuanya dapat look yang sama.

## Tips {#tips}

- **Dua atau tiga filter sudah cukup.** Setiap kartu tambahan adalah satu keputusan lagi untuk pelanggan yang lagi diantre.
- **Filter baru gak otomatis masuk ke booth yang punya daftar.** Begitu booth sudah dipilihkan filter, filter yang kamu upload belakangan gak ditambahkan ke situ. Buka **Manage Filters** dan centang.
- **Satu look per klien.** Untuk klien event, upload filter mereka dengan nama kliennya, pasang selama event, terus hapus centangnya setelahnya. Hapus yang lama biar gak lewat dari 50.
- **Hitam putih itu pilihan kedua yang aman.** **B&W Classic** atau **Film Noir** cocok untuk hampir semua wajah dan cahaya.

## Kalau Ada Masalah {#troubleshooting}

| Masalah | Kenapa | Solusinya |
|---|---|---|
| "Only .cube files are accepted." | Filenya bukan .cube (misalnya .3dl, .xmp atau preset) | Export look-nya sebagai LUT .cube dari aplikasi editing kamu |
| "File size must be 50 MB or less." | Grid LUT-nya sangat besar | Export dengan ukuran grid yang lebih kecil |
| "Maximum of 50 custom filters per organization." | Akunnya sudah punya 50 filter custom | Hapus filter yang gak dipakai lagi, terus upload |
| Preview gak berubah, atau kartunya nampilin tanda error | Filenya gak punya baris `LUT_3D_SIZE` atau tabel datanya rusak (misalnya LUT 1D) | Export LUT 3D lagi dan upload file barunya |
| Warna preview beda dengan di aplikasi editing kamu | Filenya gak keluar seperti yang ditampilkan aplikasi kamu | Hapus filternya dan jangan dipasang; hubungi support Pixture dengan file .cube-nya |
| Filter custom baru gak pernah muncul di booth | Booth punya daftar pilihan, dan filter baru gak ada di situ | **Booths** > booth > **Filters** > **Manage Filters**, centang, **Save Filter Assignments** |
| Booth melewati layar Filter | Layar Filter dimatikan di desain booth atau di event | Nyalakan **Enabled in session flow** di halaman Filter (UI Editor), atau **Choose a filter** di **Steps** event |

## Terkait {#related}

- [Referensi Photo Filters dan Overlay](../dashboard/pix-design/filters-and-overlays.md)
- [Filter di booth](../desktop-app/session-flow/filters.md)
- [Atur Tampilan Layar Booth](./customise-kiosk-screens.md)
- [Tambah Overlay GIF dan Video](./gif-and-video-overlays.md)
