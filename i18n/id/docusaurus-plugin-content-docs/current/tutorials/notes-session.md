---
sidebar_position: 2
title: Jalankan Sesi Decor
description: Biarkan pelanggan dan tamu mendekorasi cetakan mereka dengan gambar, teks, dan stiker, di booth self-service atau di event. Pilih apakah Decor punya tombol sendiri atau muncul setelah Photo, apakah ikut dicetak, desain apa yang dipakai, dan font apa yang bisa dipakai.
tags: [tutorials, decor, pix-design, events, photo-session]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Jalankan Sesi Decor

Di tutorial ini kamu nyalain Decor: orang bisa mendekorasi cetakan mereka dengan gambar, teks, dan stiker sebelum dibagikan. Kamu tentukan Decor jadi tombol sendiri atau langkah setelah Photo, ikut dicetak atau gak, desain apa yang dipakai, dan font apa yang bisa dipakai buat mengetik, terus coba satu sesi. Siapkan waktu sekitar 20 menit.

Decor jalan di dua tempat, dan diatur di dua tempat juga:

- **Di booth self-service (Kiosk):** di desain layar booth, lewat **Pix Design > UI Editor**.
- **Di event:** di halaman event, lewat **Events**.

Langkah di bawah nunjukin keduanya, berdampingan di tab.

## Light dan Classic {#light-and-classic}

- **Project Light** (tampilan bawaan project baru). Decor selalu jadi langkah setelah Photo atau Studio, bukan tombol sendiri. Kamu nyalain atau matiin lewat **Enabled in session flow** di halaman Decor, lalu pilih **Decor goes**: **On the print** atau **Soft file only**. Halaman tamu punya tiga tab: **Draw**, **Aa**, dan **Stickers**, dengan 24 stiker yang bisa digeser, diputar, dan diubah ukurannya. Langkah 1 dan 2 di bawah diganti bagian singkat [Decor di project Light](#decor-on-a-light-project).
- **Project Classic** tetap punya empat pilihan tombol Decor di Langkah 2, dengan palet tunggal seperti sebelumnya. Tidak ada stiker.

## Kapan Dipakai {#when-to-use-it}

- **Buku tamu pernikahan.** Tamu foto dulu, terus menulis ucapan buat pengantin. Pilih **After Photo, not printed**: cetakan tamu tetap bersih, dan pengantin dapat semua pesan di album event.
- **Ulang tahun atau acara kantor.** Orang senang lihat tulisan tangannya sendiri di cetakan. Pilih **Decor button, printed** atau **After Photo, printed**.
- **Booth mall buat pasangan dan teman.** Decor sebagai tombol kedua di samping Photo ngasih pelanggan pilihan tambahan, dan harganya bisa kamu atur sendiri.
- **Aktivasi brand yang ngumpulin pesan.** Pakai **Decor button, not printed** supaya gak ada yang nunggu cetakan, dan setiap pesan masuk ke halaman share.

Kurang cocok kalau antrean panjang dan setiap detik berharga, misalnya Sabtu ramai di mall: menulis pesan nambah satu sampai dua menit per sesi. Pasang waktu pesan yang pendek, atau matikan Decor di hari-hari itu.

## Sebelum Mulai {#before-you-start}

- **Booth yang jalan di Pix Pro.** Di Kiosk, menyimpan desain layar di Pix Design butuh Pix Pro. Di event, setiap komputer butuh Pix Pro atau Event Pass.
- **Pixture Photobooth di komputer booth:**
  - 1.2.39 atau lebih baru buat mengetik di pesan (booth yang lebih lama cuma nampilin pena).
  - 1.2.45 atau lebih baru buat **Decor template** di Kiosk (Langkah 3).
  - 1.2.48 atau lebih baru buat **Move drawing** dan **Turn text**.
- **Minimal satu template cetak** di booth atau event: Decor ngambil foto dulu, sama seperti Photo.
- **Layar sentuh.** Orang menulis pakai jari, jadi booth Decor pakai mouse itu gak enak.

## Persiapan {#prepare}

- **Sisakan ruang buat pesan.** Di Kiosk, pesan ditulis langsung di template cetak, di **Decor area**-nya. Rencanakan ruang kosong di desain, sekitar sepertiga cetakan, warnanya terang supaya pena gelap kelihatan. Tanpa Decor area, orang menulis di seluruh cetakan, termasuk di atas foto.
- **Atau bikin desain khusus pesan.** Template yang cuma buat pesan (kartu, kertas bergaris, kartu pos) ngasih ruang lebih luas dan bikin photo strip tetap bersih. Di event namanya **Decor template**; di Kiosk, template yang dinyalakan **Decor template**.
- **Font.** Ada empat bawaan: Caveat, Inter, Pacifico dan Bebas Neue. Kalau mau pakai font sendiri, siapkan file WOFF2, WOFF, TTF atau OTF, maksimal 4 MB. Pilih font yang gampang dibaca dalam beberapa kata: satu font tulisan tangan dan satu font polos biasanya sudah cukup.

## Decor di project Light {#decor-on-a-light-project}

Lewati Langkah 1 dan 2 kalau project kamu Light.

1. Buka **Pix Design > UI Editor** dan project Light kamu. Project harus punya **Photo** atau **Studio** di modenya. Decor tidak dicentang sebagai mode.
2. Buka tab halaman **Decor**.
3. Centang **Enabled in session flow**. Kalau mati, tamu langsung dari Filter ke Sharing.
4. Di **Decor goes**, pilih **On the print** (dekorasi ada di cetakan dan di soft file) atau **Soft file only** (cetakan tetap bersih, soft file ada dekorasinya).
5. Pilih **Decor template** seperti di Langkah 3 kalau mau dekorasinya di desain sendiri. Lalu **Save**.

Di booth, tamu mendekorasi lewat tiga tab. **Draw** punya pena, 15 warna, ukuran, dan penghapus. **Aa** nambah teks dengan 8 font. **Stickers** punya 24 stiker: ketuk buat nambah, seret buat geser, pakai handle kanan atas buat memutar dan handle kanan bawah buat mengubah ukuran, atau pakai dua jari. Stiker yang keluar dari tepi cetakan terpotong di tepi. Apa pun yang ditambah tetap ada waktu ganti tab.

## Langkah 1: Nyalakan Decor (Classic) {#step-1-turn-notes-on}

<Tabs groupId="where">
<TabItem value="kiosk" label="Kiosk">

1. Buka **Pix Design > UI Editor** dan klik **New Project**. Isi **Project Name**.
2. Centang **Decor** di **Modes**. Biarkan **Photo** (atau **Studio**) tetap tercentang kalau kamu mau pelanggan memilih, atau kalau pesannya mau muncul setelah foto.
3. Klik **Create Project**.

![New UI Project dengan Project Name, tile Decor dan Create Project ditandai](/img/docs/steps/tutorials-notes-session--new-ui-project-notes.webp)

Buat desain yang sudah kamu pakai, buka di UI Editor, terus di tab **Start Screen** klik **Edit modes** di bawah **Modes**.

</TabItem>
<TabItem value="event" label="Event">

1. Buka **Events** dan event-nya, lalu tab **Setup**.
2. Di **Booth mode**, klik **Edit modes**.
3. Centang **Decor**. Biarkan **Photo** tercentang kalau pesannya mau muncul setelah foto (langkah berikutnya).

![Booth mode sebuah event dengan Edit modes ditandai](/img/docs/steps/tutorials-notes-session--event-edit-modes.webp)

Kamu juga bisa centang **Decor** di **Modes** waktu bikin event.

</TabItem>
</Tabs>

## Langkah 2: Pilih cara Decor jalan dan dicetak (Classic) {#step-2-choose-how-notes-runs-and-prints}

Begitu **Decor** dicentang, empat pilihan muncul di bawahnya, sama di Kiosk (**Decor**) dan di event (**Decor**):

| Pilihan | Yang dilihat orang | Yang dicetak |
|---|---|---|
| **Decor button, printed** (bawaan) | Tombol **Decor** di start screen, di samping mode lain | Cetakannya ada dekorasinya |
| **Decor button, not printed** | Tombol **Decor** di start screen | Gak ada yang dicetak. Dekorasinya jadi soft file di halaman share mereka |
| **After Photo, printed** | Gak ada tombol Decor. Setelah sesi Photo, mereka mendekorasi cetakannya | Cetakannya ada dekorasinya |
| **After Photo, not printed** | Gak ada tombol Decor. Setelah sesi Photo, mereka mendekorasi cetakannya | Cetakannya tanpa dekorasi. Soft file-nya ada dekorasinya |

1. Pilih yang cocok dengan event atau booth kamu.
2. Klik **Save** (di **Edit modes**) atau **Create Project** (desain baru).

Kedua pilihan **After Photo** butuh **Photo** tercentang di event, atau **Photo** atau **Studio** di Kiosk. Sebelum itu, pilihannya abu-abu dengan tulisan "Tick Photo above to use this." Di desain Kiosk yang pakai Studio, namanya nyebut Studio, bukan Photo.

:::tip Pilih yang mana
**After Photo, not printed** itu buku tamu pernikahan klasik: satu antrean, satu sesi, cetakan bersih buat tamu, dan semua ucapan buat pengantin. **Decor button, printed** pas buat pesta yang serunya justru di tulisan tangan di cetakan.
:::

![Popup Edit modes dengan Decor dicentang, empat pilihan Decor dan Save ditandai](/img/docs/steps/tutorials-notes-session--modes-popup.webp)

## Langkah 3: Pilih desain tempat dekorasi dipakai {#step-3-pick-the-design-the-note-is-written-on}

<Tabs groupId="where">
<TabItem value="kiosk" label="Kiosk">

Bawaannya, pesan ditulis di cetakan itu sendiri:

1. Buka **Pix Design > Template Editor** dan buka template yang dicetak booth.
2. Di **Decor area**, klik **+ Add decor area**. Geser dan ubah ukuran kotaknya di atas ruang kosong yang sudah kamu siapkan. Satu per template.
3. Simpan template-nya.

Kalau pesannya mau punya desain sendiri (Pixture Photobooth 1.2.45 atau lebih baru):

1. Bikin template khusus pesan, misalnya kartu dengan slot foto di atas dan ruang kosong di bawahnya, lalu tambahkan **Decor area**.
2. Di template editor, nyalakan **Decor template**. Booth bakal pakai template ini buat pesan, sebagai gambar terpisah, dan gak pernah nawarin template ini sebagai layout foto.
3. Pasang ke booth seperti template biasa: **Booths >** booth-nya **> Templates**. Di sana template ini punya badge **Decor**.

Booth pakai Decor template pertama di tab **Templates**-nya, dan cuma kalau desain layarnya punya Decor.

![Sidebar template editor dengan Decor area (+ Add decor area), tombol Decor template dan Save ditandai](/img/docs/steps/tutorials-notes-session--template-editor-note-area.webp)

</TabItem>
<TabItem value="event" label="Event">

1. Di tab **Setup** event, klik kartu **Decor** (atau tab **Decor**).
2. Di **Decor template**, pilih desain. **Default** itu "A lined page with their photo on top." Template kamu yang mana pun juga bisa dipilih. Pilihannya langsung tersimpan.

Di event, pesan selalu jadi gambar sendiri. Dengan pilihan yang dicetak dari Langkah 2, gambar pesan itulah yang dicetak.

![Kartu Decor dan tab-nya dengan Decor template dan baris Text fonts ditandai](/img/docs/steps/tutorials-notes-session--event-notes-tab.webp)

</TabItem>
</Tabs>

## Langkah 4: Pilih font buat mengetik {#step-4-choose-the-fonts-people-can-type-with}

Maksimal 8 font, minimal satu. Font pertama yang menyala jadi font awal setiap teks baru.

<Tabs groupId="where">
<TabItem value="kiosk" label="Kiosk">

1. Di UI Editor, buka tab **Decor** dan klik blok **Decor Palette**.
2. Di **Text fonts**, klik font buat nyalain atau matiin.
3. Buat nambah font sendiri, klik **＋ Upload font…** dan pilih file-nya. Font itu ditambahkan dan langsung menyala.
4. Sekalian cek setelan **Palette**: **Colors** (warna pena, dalam kode hex), **Min size** dan **Max size** pena, **Show colour disc** dan **Stabilizer** (merapikan garis yang goyang, 0 = mati).
5. Klik **Save**.

</TabItem>
<TabItem value="event" label="Event">

1. Di tab **Decor**, cari **Text fonts** dan klik **Change**.
2. Centang font yang kamu mau, bawaan atau di **Your fonts**.
3. Buat nambah font sendiri, klik **+ Upload font**.
4. Klik **Save**.

Font yang kamu upload dan simpan juga tersedia buat event kamu yang lain.

</TabItem>
</Tabs>

## Langkah 5: Atur waktu dekorasi {#step-5-set-the-note-time}

Orang butuh waktu buat mikir pesannya. Terlalu pendek, mereka buru-buru; terlalu lama, antrean macet.

<Tabs groupId="where">
<TabItem value="kiosk" label="Kiosk">

Atur page timer di tab **Decor** UI Editor, dan pastikan halamannya punya tombol atau click area dengan action **Done (continue to Sharing)**, supaya orang bisa selesai lebih cepat. Simpan project-nya.

</TabItem>
<TabItem value="event" label="Event">

Buka **Edit appearance**, lalu **Timer**, dan pilih **Decor time** dari 30 detik sampai 3 menit. Bawaannya 90 detik. Lihat [Desain Start Screen Event](./event-start-screen.md).

</TabItem>
</Tabs>

Di Kiosk, pasang desainnya ke booth kalau sudah selesai: **Booths >** booth-nya **> UI Project**, pilih di grup **Decor** atau **Several modes**, lalu klik **Save**.

## Langkah 6: Dekorasi di booth {#step-6-write-a-note-at-the-booth}

Jalankan sesi seperti pelanggan: pilih **Decor** (atau **Photo**, kalau pakai pilihan After Photo), ambil foto, lewati Adjust dan filter, dan layar pesan terbuka.

1. **Text (Aa)**: tap, lalu tap di bagian pesan tempat teksnya mau ditaruh. Keyboard layar booth terbuka. Ketik maksimal 80 karakter dalam maksimal 3 baris. Geser teks buat memindahkan, tap lagi buat mengedit, dan tap **×**-nya buat menghapus.
2. **Baris font** di atas pesan: tap font buat mengganti font teks yang dipilih. Warna dan slider ukuran juga berlaku buat teks.
3. **Turn text** (1.2.48): geser pegangan bulat di bawah teks yang dipilih buat memutarnya. Kalau sudah hampir datar atau tegak, teksnya langsung lurus.
4. **Move drawing** (1.2.48, ikon empat panah): geser di atas pesan buat memindahkan seluruh gambar, pena dan teks sekaligus, misalnya kalau tulisannya kepepet di pinggir.
5. **Stickers** (Light, 1.2.56): buka tab **Stickers** dan ketuk stiker buat menambahnya. Seret buat menggeser. Handle kanan atas memutar, handle kanan bawah mengubah ukuran, dan tanda silang menghapusnya.
6. **Done**: di event tulisannya **Skip** selama pesannya masih kosong. Kalau gak ada yang ditulis, sesi lanjut tanpa pesan. Kalau waktunya habis, booth lanjut sendiri.

![Layar pesan dengan Text tool, baris font, Turn text, Move drawing dan Done ditandai](/img/docs/steps/tutorials-notes-session--write-a-note.webp)

Penanya ada **Pen**, **Marker**, **Pencil** dan **Highlighter**, di samping **Eraser**, dengan **Undo** dan **Redo** di bawahnya. Eraser cuma menghapus gambar: teks dihapus pakai **×**-nya sendiri.

## Cek Hasilnya {#check-it-worked}

- Start screen nampilin tombol **Decor** (pilihan Decor button), atau gak ada (pilihan After Photo), dan layar Decor muncul setelah filter.
- Decor pakai desain yang kamu pilih di Langkah 3, dan baris font nampilin font kamu.
- Halaman share ada dekorasinya: di cetakan, atau sebagai file **Decor** sendiri di samping cetakan. **Download All** ikut menyertakannya.
- Yang dicetak sesuai pilihan di Langkah 2. Dengan **Decor button, not printed**, gak ada yang dicetak sama sekali.
- Di event, album punya tampilan **Decor** begitu ada dekorasi yang tersimpan.

## Tips {#tips}

- **Ajak menulis lewat desain, bukan cuma di layar.** Satu kalimat pendek di start screen atau template ("Tulis ucapan buat Rina dan Dimas!") bikin jauh lebih banyak pesan yang ditulis.
- **Pena gelap di kertas terang.** Bikin Decor area berwarna terang, dan taruh warna gelap paling depan di **Colors**: warna pertama itulah yang dipakai di awal.
- **Dua font sudah cukup.** Satu font tulisan tangan dan satu font tebal polos. Delapan font malah bikin orang lama milih.
- **Buat buku tamu, gak usah cetak tambahan.** **After Photo, not printed** bikin pemakaian kertas sama dengan event Photo biasa, dan pengantin dapat semua pesan di album.
- **Garisnya goyang?** Naikkan **Stabilizer** di Decor Palette (Kiosk). Pena bakal merapikan setiap goresan.
- **Coba pakai jari beneran** di layar booth. Pesan yang gampang ditulis pakai mouse bisa ribet di layar sentuh 15 inci.

## Kalau Ada Masalah {#troubleshooting}

| Masalah | Kenapa | Solusinya |
|---|---|---|
| Gak ada **Aa** di layar pesan | Aplikasi booth lebih lama dari 1.2.39 | Update booth. Lihat [Software Updates](../desktop-app/software-updates.md) |
| Gak ada **Move drawing** atau **Turn text** | Aplikasi booth lebih lama dari 1.2.48, atau blok Decor Palette terlalu kecil buat semua alat | Update booth, atau besarkan blok **Decor Palette** di UI Editor |
| Pilihan **After Photo** abu-abu | Photo (atau Studio, di Kiosk) belum dicentang | Centang **Photo** di popup yang sama, lalu pilih |
| Gak ada tombol Decor di start screen | Pilihan **After Photo** yang aktif: pesannya muncul setelah Photo | Pilih **Decor button** kalau mau tombol sendiri |
| Orang menulis di atas foto mereka | Template Kiosk gak punya **Decor area** | Tambahkan pakai **+ Add decor area**, atau pakai **Decor template** |
| Kiosk gak pakai Decor template | Aplikasi booth lebih lama dari 1.2.45, template-nya gak ada di tab **Templates** booth, atau desain booth gak punya Decor | Update booth, pasang template-nya, dan cek desainnya mencentang **Decor** |
| Gak ada yang dicetak setelah sesi Decor | Pilihan **Decor button, not printed** yang aktif | Pilihan itu memang gak pernah mencetak. Pilih yang dicetak |
| Font sendiri gak muncul | File-nya terlalu besar atau bukan file font | Pakai WOFF2, WOFF, TTF atau OTF, maksimal 4 MB |

## Terkait {#related}

- [UI Editor: Decor](../dashboard/pix-design/ui-editor.md#decor)
- [Events: Decor](../dashboard/events.md#decor)
- [Desain Template Cetak](./design-a-print-template.md)
- [Atur Layar Booth](./customise-kiosk-screens.md)
- [Jalankan Event](./run-an-event.md)
- [Atur Halaman Share](./share-page.md)
