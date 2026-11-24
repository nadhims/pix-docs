---
sidebar_position: 2
title: Jalankan Sesi Notes
description: Biarkan pelanggan dan tamu menulis, menggambar dan mengetik pesan di foto mereka, di booth self-service atau di event. Pilih apakah Notes punya tombol sendiri atau muncul setelah Photo, apakah pesannya ikut dicetak, desain apa yang ditulisi, dan font apa yang bisa dipakai.
tags: [tutorials, notes, pix-design, events, photo-session]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Jalankan Sesi Notes

Di tutorial ini kamu nyalain Notes: orang bisa menulis, menggambar atau mengetik pesan di foto mereka sebelum dibagikan. Kamu tentukan Notes jadi tombol sendiri atau langkah setelah Photo, pesannya ikut dicetak atau gak, desain apa yang ditulisi, dan font apa yang bisa dipakai buat mengetik, terus coba satu sesi. Siapkan waktu sekitar 20 menit.

Notes jalan di dua tempat, dan diatur di dua tempat juga:

- **Di booth self-service (Kiosk):** di desain layar booth, lewat **Pix Design > UI Editor**.
- **Di event:** di halaman event, lewat **Events**.

Langkah di bawah nunjukin keduanya, berdampingan di tab.

## Kapan Dipakai {#when-to-use-it}

- **Buku tamu pernikahan.** Tamu foto dulu, terus menulis ucapan buat pengantin. Pilih **After Photo, not printed**: cetakan tamu tetap bersih, dan pengantin dapat semua pesan di album event.
- **Ulang tahun atau acara kantor.** Orang senang lihat tulisan tangannya sendiri di cetakan. Pilih **Notes button, printed** atau **After Photo, printed**.
- **Booth mall buat pasangan dan teman.** Notes sebagai tombol kedua di samping Photo ngasih pelanggan pilihan tambahan, dan harganya bisa kamu atur sendiri.
- **Aktivasi brand yang ngumpulin pesan.** Pakai **Notes button, not printed** supaya gak ada yang nunggu cetakan, dan setiap pesan masuk ke halaman share.

Kurang cocok kalau antrean panjang dan setiap detik berharga, misalnya Sabtu ramai di mall: menulis pesan nambah satu sampai dua menit per sesi. Pasang waktu pesan yang pendek, atau matikan Notes di hari-hari itu.

## Sebelum Mulai {#before-you-start}

- **Booth yang jalan di Pix Pro.** Di Kiosk, menyimpan desain layar di Pix Design butuh Pix Pro. Di event, setiap komputer butuh Pix Pro atau Event Pass.
- **Pixture Photobooth di komputer booth:**
  - 1.2.39 atau lebih baru buat mengetik di pesan (booth yang lebih lama cuma nampilin pena).
  - 1.2.45 atau lebih baru buat **Notes template** di Kiosk (Langkah 3).
  - 1.2.48 atau lebih baru buat **Move drawing** dan **Turn text**.
- **Minimal satu template cetak** di booth atau event: Notes ngambil foto dulu, sama seperti Photo.
- **Layar sentuh.** Orang menulis pakai jari, jadi booth Notes pakai mouse itu gak enak.

## Persiapan {#prepare}

- **Sisakan ruang buat pesan.** Di Kiosk, pesan ditulis langsung di template cetak, di **Note area**-nya. Rencanakan ruang kosong di desain, sekitar sepertiga cetakan, warnanya terang supaya pena gelap kelihatan. Tanpa Note area, orang menulis di seluruh cetakan, termasuk di atas foto.
- **Atau bikin desain khusus pesan.** Template yang cuma buat pesan (kartu, kertas bergaris, kartu pos) ngasih ruang lebih luas dan bikin photo strip tetap bersih. Di event namanya **Note template**; di Kiosk, template yang dinyalakan **Notes template**.
- **Font.** Ada empat bawaan: Caveat, Inter, Pacifico dan Bebas Neue. Kalau mau pakai font sendiri, siapkan file WOFF2, WOFF, TTF atau OTF, maksimal 4 MB. Pilih font yang gampang dibaca dalam beberapa kata: satu font tulisan tangan dan satu font polos biasanya sudah cukup.

## Langkah 1: Nyalakan Notes {#step-1-turn-notes-on}

<Tabs groupId="where">
<TabItem value="kiosk" label="Kiosk">

1. Buka **Pix Design > UI Editor** dan klik **New Project**. Isi **Project Name**.
2. Centang **Notes** di **Modes**. Biarkan **Photo** (atau **Studio**) tetap tercentang kalau kamu mau pelanggan memilih, atau kalau pesannya mau muncul setelah foto.
3. Klik **Create Project**.

![New UI Project dengan Project Name, tile Notes dan Create Project ditandai](/img/docs/steps/tutorials-notes-session--new-ui-project-notes.webp)

Buat desain yang sudah kamu pakai, buka di UI Editor, terus di tab **Start Screen** klik **Edit modes** di bawah **Modes**.

</TabItem>
<TabItem value="event" label="Event">

1. Buka **Events** dan event-nya, lalu tab **Setup**.
2. Di **Booth mode**, klik **Edit modes**.
3. Centang **Notes**. Biarkan **Photo** tercentang kalau pesannya mau muncul setelah foto (langkah berikutnya).

![Booth mode sebuah event dengan Edit modes ditandai](/img/docs/steps/tutorials-notes-session--event-edit-modes.webp)

Kamu juga bisa centang **Notes** di **Modes** waktu bikin event.

</TabItem>
</Tabs>

## Langkah 2: Pilih cara Notes jalan dan dicetak {#step-2-choose-how-notes-runs-and-prints}

Begitu **Notes** dicentang, empat pilihan muncul di bawahnya, sama di Kiosk (**Note booth**) dan di event (**Notes**):

| Pilihan | Yang dilihat orang | Yang dicetak |
|---|---|---|
| **Notes button, printed** (bawaan) | Tombol **Notes** di start screen, di samping mode lain | Cetakannya ada pesannya |
| **Notes button, not printed** | Tombol **Notes** di start screen | Gak ada yang dicetak. Pesannya jadi soft file di halaman share mereka |
| **After Photo, printed** | Gak ada tombol Notes. Setelah sesi Photo, mereka menulis pesan | Cetakannya ada pesannya |
| **After Photo, not printed** | Gak ada tombol Notes. Setelah sesi Photo, mereka menulis pesan | Cetakannya tanpa pesan. Soft file-nya ada pesannya |

1. Pilih yang cocok dengan event atau booth kamu.
2. Klik **Save** (di **Edit modes**) atau **Create Project** (desain baru).

Kedua pilihan **After Photo** butuh **Photo** tercentang di event, atau **Photo** atau **Studio** di Kiosk. Sebelum itu, pilihannya abu-abu dengan tulisan "Tick Photo above to use this." Di desain Kiosk yang pakai Studio, namanya nyebut Studio, bukan Photo.

:::tip Pilih yang mana
**After Photo, not printed** itu buku tamu pernikahan klasik: satu antrean, satu sesi, cetakan bersih buat tamu, dan semua ucapan buat pengantin. **Notes button, printed** pas buat pesta yang serunya justru di tulisan tangan di cetakan.
:::

![Popup Edit modes dengan Notes dicentang, empat pilihan Notes dan Save ditandai](/img/docs/steps/tutorials-notes-session--modes-popup.webp)

## Langkah 3: Pilih desain tempat pesan ditulis {#step-3-pick-the-design-the-note-is-written-on}

<Tabs groupId="where">
<TabItem value="kiosk" label="Kiosk">

Bawaannya, pesan ditulis di cetakan itu sendiri:

1. Buka **Pix Design > Template Editor** dan buka template yang dicetak booth.
2. Di **Note area**, klik **+ Add note area**. Geser dan ubah ukuran kotaknya di atas ruang kosong yang sudah kamu siapkan. Satu per template.
3. Simpan template-nya.

Kalau pesannya mau punya desain sendiri (Pixture Photobooth 1.2.45 atau lebih baru):

1. Bikin template khusus pesan, misalnya kartu dengan slot foto di atas dan ruang kosong di bawahnya, lalu tambahkan **Note area**.
2. Di template editor, nyalakan **Notes template**. Booth bakal pakai template ini buat pesan, sebagai gambar terpisah, dan gak pernah nawarin template ini sebagai layout foto.
3. Pasang ke booth seperti template biasa: **Booths >** booth-nya **> Templates**. Di sana template ini punya badge **Notes**.

Booth pakai Notes template pertama di tab **Templates**-nya, dan cuma kalau desain layarnya punya Notes.

![Sidebar template editor dengan Note area (+ Add note area), tombol Notes template dan Save ditandai](/img/docs/steps/tutorials-notes-session--template-editor-note-area.webp)

</TabItem>
<TabItem value="event" label="Event">

1. Di tab **Setup** event, klik kartu **Notes** (atau tab **Notes**).
2. Di **Note template**, pilih desain. **Default** itu "A lined page with their photo on top." Template kamu yang mana pun juga bisa dipilih. Pilihannya langsung tersimpan.

Di event, pesan selalu jadi gambar sendiri. Dengan pilihan yang dicetak dari Langkah 2, gambar pesan itulah yang dicetak.

![Kartu Notes dan tab-nya dengan Note template dan baris Text fonts ditandai](/img/docs/steps/tutorials-notes-session--event-notes-tab.webp)

</TabItem>
</Tabs>

## Langkah 4: Pilih font buat mengetik {#step-4-choose-the-fonts-people-can-type-with}

Maksimal 8 font, minimal satu. Font pertama yang menyala jadi font awal setiap teks baru.

<Tabs groupId="where">
<TabItem value="kiosk" label="Kiosk">

1. Di UI Editor, buka tab **Notes** dan klik blok **Note Palette**.
2. Di **Text fonts**, klik font buat nyalain atau matiin.
3. Buat nambah font sendiri, klik **＋ Upload font…** dan pilih file-nya. Font itu ditambahkan dan langsung menyala.
4. Sekalian cek setelan **Palette**: **Colors** (warna pena, dalam kode hex), **Min size** dan **Max size** pena, **Show colour disc** dan **Stabilizer** (merapikan garis yang goyang, 0 = mati).
5. Klik **Save**.

</TabItem>
<TabItem value="event" label="Event">

1. Di tab **Notes**, cari **Text fonts** dan klik **Change**.
2. Centang font yang kamu mau, bawaan atau di **Your fonts**.
3. Buat nambah font sendiri, klik **+ Upload font**.
4. Klik **Save**.

Font yang kamu upload dan simpan juga tersedia buat event kamu yang lain.

</TabItem>
</Tabs>

## Langkah 5: Atur waktu menulis {#step-5-set-the-note-time}

Orang butuh waktu buat mikir pesannya. Terlalu pendek, mereka buru-buru; terlalu lama, antrean macet.

<Tabs groupId="where">
<TabItem value="kiosk" label="Kiosk">

Atur page timer di tab **Notes** UI Editor, dan pastikan halamannya punya tombol atau click area dengan action **Done (continue to Sharing)**, supaya orang bisa selesai lebih cepat. Simpan project-nya.

</TabItem>
<TabItem value="event" label="Event">

Buka **Edit appearance**, lalu **Timer**, dan pilih **Note time** dari 30 detik sampai 3 menit. Bawaannya 90 detik. Lihat [Desain Start Screen Event](./event-start-screen.md).

</TabItem>
</Tabs>

Di Kiosk, pasang desainnya ke booth kalau sudah selesai: **Booths >** booth-nya **> UI Project**, pilih di grup **Notes** atau **Several modes**, lalu klik **Save**.

## Langkah 6: Tulis pesan di booth {#step-6-write-a-note-at-the-booth}

Jalankan sesi seperti pelanggan: pilih **Notes** (atau **Photo**, kalau pakai pilihan After Photo), ambil foto, lewati Adjust dan filter, dan layar pesan terbuka.

1. **Text (Aa)**: tap, lalu tap di bagian pesan tempat teksnya mau ditaruh. Keyboard layar booth terbuka. Ketik maksimal 80 karakter dalam maksimal 3 baris. Geser teks buat memindahkan, tap lagi buat mengedit, dan tap **×**-nya buat menghapus.
2. **Baris font** di atas pesan: tap font buat mengganti font teks yang dipilih. Warna dan slider ukuran juga berlaku buat teks.
3. **Turn text** (1.2.48): geser pegangan bulat di bawah teks yang dipilih buat memutarnya. Kalau sudah hampir datar atau tegak, teksnya langsung lurus.
4. **Move drawing** (1.2.48, ikon empat panah): geser di atas pesan buat memindahkan seluruh gambar, pena dan teks sekaligus, misalnya kalau tulisannya kepepet di pinggir.
5. **Done**: di event tulisannya **Skip** selama pesannya masih kosong. Kalau gak ada yang ditulis, sesi lanjut tanpa pesan. Kalau waktunya habis, booth lanjut sendiri.

![Layar pesan dengan Text tool, baris font, Turn text, Move drawing dan Done ditandai](/img/docs/steps/tutorials-notes-session--write-a-note.webp)

Penanya ada **Pen**, **Marker**, **Pencil** dan **Highlighter**, di samping **Eraser**, dengan **Undo** dan **Redo** di bawahnya. Eraser cuma menghapus gambar: teks dihapus pakai **×**-nya sendiri.

## Cek Hasilnya {#check-it-worked}

- Start screen nampilin tombol **Notes** (pilihan Notes button), atau gak ada (pilihan After Photo), dan layar pesan muncul setelah filter.
- Pesan pakai desain yang kamu pilih di Langkah 3, dan baris font nampilin font kamu.
- Halaman share ada pesannya: di cetakan, atau sebagai file **Note** sendiri di samping cetakan. **Download All** ikut menyertakannya.
- Yang dicetak sesuai pilihan di Langkah 2. Dengan **Notes button, not printed**, gak ada yang dicetak sama sekali.
- Di event, album punya tampilan **Notes** begitu ada pesan yang tersimpan.

## Tips {#tips}

- **Ajak menulis lewat desain, bukan cuma di layar.** Satu kalimat pendek di start screen atau template ("Tulis ucapan buat Rina dan Dimas!") bikin jauh lebih banyak pesan yang ditulis.
- **Pena gelap di kertas terang.** Bikin Note area berwarna terang, dan taruh warna gelap paling depan di **Colors**: warna pertama itulah yang dipakai di awal.
- **Dua font sudah cukup.** Satu font tulisan tangan dan satu font tebal polos. Delapan font malah bikin orang lama milih.
- **Buat buku tamu, gak usah cetak tambahan.** **After Photo, not printed** bikin pemakaian kertas sama dengan event Photo biasa, dan pengantin dapat semua pesan di album.
- **Garisnya goyang?** Naikkan **Stabilizer** di Note Palette (Kiosk). Pena bakal merapikan setiap goresan.
- **Coba pakai jari beneran** di layar booth. Pesan yang gampang ditulis pakai mouse bisa ribet di layar sentuh 15 inci.

## Kalau Ada Masalah {#troubleshooting}

| Masalah | Kenapa | Solusinya |
|---|---|---|
| Gak ada **Aa** di layar pesan | Aplikasi booth lebih lama dari 1.2.39 | Update booth. Lihat [Software Updates](../desktop-app/software-updates.md) |
| Gak ada **Move drawing** atau **Turn text** | Aplikasi booth lebih lama dari 1.2.48, atau blok Note Palette terlalu kecil buat semua alat | Update booth, atau besarkan blok **Note Palette** di UI Editor |
| Pilihan **After Photo** abu-abu | Photo (atau Studio, di Kiosk) belum dicentang | Centang **Photo** di popup yang sama, lalu pilih |
| Gak ada tombol Notes di start screen | Pilihan **After Photo** yang aktif: pesannya muncul setelah Photo | Pilih **Notes button** kalau mau tombol sendiri |
| Orang menulis di atas foto mereka | Template Kiosk gak punya **Note area** | Tambahkan pakai **+ Add note area**, atau pakai **Notes template** |
| Kiosk gak pakai Notes template | Aplikasi booth lebih lama dari 1.2.45, template-nya gak ada di tab **Templates** booth, atau desain booth gak punya Notes | Update booth, pasang template-nya, dan cek desainnya mencentang **Notes** |
| Gak ada yang dicetak setelah sesi Notes | Pilihan **Notes button, not printed** yang aktif | Pilihan itu memang gak pernah mencetak. Pilih yang dicetak |
| Font sendiri gak muncul | File-nya terlalu besar atau bukan file font | Pakai WOFF2, WOFF, TTF atau OTF, maksimal 4 MB |

## Terkait {#related}

- [UI Editor: Notes](../dashboard/pix-design/ui-editor.md#notes-notes-only)
- [Events: Notes](../dashboard/events.md#notes)
- [Desain Template Cetak](./design-a-print-template.md)
- [Atur Layar Booth](./customise-kiosk-screens.md)
- [Jalankan Event](./run-an-event.md)
- [Atur Halaman Share](./share-page.md)
