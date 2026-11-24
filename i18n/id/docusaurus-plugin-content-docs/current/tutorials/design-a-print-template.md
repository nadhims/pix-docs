---
sidebar_position: 2
title: Bikin Template Cetak
description: Siapkan PNG seukuran cetakan dengan kotak foto yang rapi, jadikan template di Pix Design, bikin kotaknya tembus pandang pakai Remove BG sekali klik, cek slot foto dan pasang template ke booth kamu.
tags: [tutorials, pix-design, templates, print]
---

# Bikin Template Cetak

Di tutorial ini kamu siapkan PNG template di aplikasi desain kamu, jadikan template project di Pix Design, cek slot foto yang ditemukan editor, terus pasang templatenya ke booth. Kamu juga belajar satu trik yang paling hemat waktu: kotak foto hijau mencolok yang bisa dibersihkan **Remove BG** dalam sekali klik. Siapkan waktu sekitar 20 menit, ditambah waktu desain kamu.

## Kapan Dipakai {#when-to-use-it}

- **Sewa photobooth untuk event:** klien nikahan atau acara kantor mau nama, tanggal atau logonya ada di setiap cetakan. Bikin satu template per event, terus pasang ke booth yang kamu bawa.
- **Booth self-service di mall:** tampilan musiman (Natal, Lebaran, Valentine) bikin pelanggan balik lagi. Siapkan template musim berikutnya sebelum musimnya mulai.
- **Studio dengan banyak booth:** pakai satu template andalan per ukuran kertas di semua booth, biar pelanggan dapat tampilan yang sama di cabang mana pun.
- **Photobox pop-up:** sponsor brand bayar booth-nya dan mau artwork mereka ada di strip. Bikin template dari artwork yang mereka kirim.

Yang kamu butuhkan desain layar booth (tombol dan background yang di-tap pelanggan), bukan cetakan? Lihat [Atur Tampilan Layar Booth](./customise-kiosk-screens.md).

## Sebelum Mulai {#before-you-start}

- **Paket:** Pix Pro atau free trial untuk bikin dan simpan template sendiri. Di Pix Starter kamu dapat dua template siap pakai (Classic Black dan Classic White) dan bisa nyobain semua tool di editor, tapi nyimpan template baru butuh Pix Pro (lihat [Tips](#tips)).
- **Aplikasi desain yang bisa export PNG transparan:** Photoshop, Affinity, Figma, Canva, GIMP atau sejenisnya.
- **Kertas kamu:** tahu kertas apa yang dipasang di printer (4x6, strip 2x6 dari potongan 4x6, 6x8 dan seterusnya).

## Persiapan {#prepare}

### Pilih ukurannya {#pick-the-size}

Pixture mencetak di 600 DPI. Bikin kanvas persis seukuran cetakan dalam piksel:

| Ukuran cetak | Piksel (portrait) | Biasa dipakai untuk |
|---|---|---|
| 2x6" | 1200 x 3600 | Strip foto |
| 4x6" | 2400 x 3600 | Cetakan standar |
| 5x7" | 3000 x 4200 | Cetakan lebih besar |
| 6x8" | 3600 x 4800 | Cetakan besar |
| A4 | 4960 x 7016 | Cetakan ukuran poster |

Editor juga punya 3x6", 6x9", 8x10", A5, A3, A2 dan **Custom** (kamu ketik pikselnya sendiri). PNG landscape dapat kanvas landscape dengan ukuran yang sama. PNG dengan ukuran lain bakal di-resize biar pas, jadi jaga bentuknya tetap sama, dan desain di ukuran persisnya biar cetakannya paling tajam.

### Bikin kotak foto yang gampang ditemukan {#make-the-photo-boxes-easy-to-find}

Booth mencetak PNG kamu **di atas** foto, jadi foto cuma kelihatan di bagian PNG yang tembus pandang. Ada dua cara bagus untuk nandain tempat foto:

1. **Kotak transparan penuh (paling bagus).** Potong setiap kotak foto sampai transparan 100%. Bukan putih, bukan setengah tembus. Editor langsung ngubah setiap area transparan jadi slot foto begitu kamu upload.
2. **Kotak warna mencolok.** Kalau aplikasi kamu gak bisa export transparan, atau desainnya datang dari klien sebagai JPG atau PNG polos, isi setiap kotak foto dengan satu warna mencolok yang **gak dipakai di bagian lain** desain. Hijau terang murni (#00FF00) paling ideal: gak ada kulit, logo atau teks yang pakai warna itu. Terus **Remove BG** membersihkan semua kotak sekaligus (Langkah 3).

Kenapa gak pakai kotak putih? Putih biasanya juga ada di teks, garis tepi dan logo kamu. Tool warna ini milih warna di seluruh desain, jadi kalau kamu hapus putih, teks kamu ikut bolong. Hijau yang gak dipakai di tempat lain cuma bisa kena kotak fotonya.

Untuk kedua cara:

- **Kasih tepi yang tegas di setiap kotak.** Gak ada bayangan lembut, glow atau feather yang masuk ke kotak.
- **Bikin setiap kotak minimal 200 x 200 px.** Area tembus pandang yang lebih kecil gak dijadikan slot.
- **Sisanya harus solid.** Area tembus pandang di luar kotak foto bakal tercetak sebagai kertas putih polos.
- **Sudut membulat, lingkaran dan hati bisa.** Sebuah bentuk dihitung sebagai slot selama bentuknya mengisi minimal setengah dari kotak pembatasnya sendiri. Fotonya mengisi kotak di belakang bentuk kamu.
- **Urutan itu penting.** Slot diberi nomor baris per baris, dari atas ke bawah dan dari kiri ke kanan. Slot 1 dapat foto pertama.
- **Export sebagai PNG**, maksimal 30 MB. Matikan opsi "flatten" atau background putih di jendela export aplikasi kamu. Desain yang cuma ada dalam JPG: buka dan simpan sebagai PNG dulu, soalnya **Create Template Project** cuma nerima PNG.

## Langkah 1: Buka Template Editor {#step-1-open-the-template-editor}

1. Di sidebar, klik **Pix Design**.
2. Klik **Template Editor**.

![Halaman Pix Design dengan Pix Design di sidebar dan kartu Template Editor ditandai](/img/docs/steps/tutorials-design-a-print-template--hub.webp)

3. Di **Template Projects**, klik **New Project**. Di Pix Starter tombolnya bertuliskan **Upgrade to Create** begitu kamu sudah punya dua template.

![Template Projects di Pix Starter dengan tombol Upgrade to Create ditandai, yang di Pix Pro bertuliskan New Project](/img/docs/steps/tutorials-design-a-print-template--upgrade-to-create.webp)

## Langkah 2: Bikin template project {#step-2-create-the-template-project}

Di jendela **Create Template Project**:

1. Pilih **Media Type**: lembar cetakannya jadi apa. **Photo paper** adalah pilihan normal, satu cetakan per lembar.
2. Pilih **Print Size**, misalnya **4x6"**.
3. Drop PNG kamu di **Template PNG**, atau klik untuk browse. Cuma PNG yang diterima, maksimal 30 MB.
4. Klik **Create Project**. Tombolnya tetap abu-abu sampai ukuran dan file sudah dipilih.

![Jendela Create Template Project dengan Photo paper, 4x6", area drop Template PNG dan Create Project ditandai](/img/docs/steps/tutorials-design-a-print-template--create-modal.webp)

| Media Type | Yang didapat pelanggan |
|---|---|
| **Photo paper** | Satu cetakan per lembar |
| **2 inch cut (4R)** | Lembar 4x6" yang dipotong printer jadi dua strip 2x6" |
| **Perforated** | Strip yang bisa disobek |
| **Triple strip** | Satu lembar jadi tiga strip |
| **Sticker** | Kertas stiker |
| **Newspaper** | Halaman koran, khusus booth Newspaper |
| **Custom** | Kertas lain, dengan nama yang kamu ketik |

## Langkah 3: Bersihkan kotak hijau pakai Remove BG {#step-3-clear-the-green-boxes-with-remove-bg}

Lewati langkah ini kalau PNG kamu sudah punya kotak transparan: editor langsung terbuka dengan slot yang sudah ketemu. Kalau kamu pakai kotak hijau mencolok:

1. Klik **Remove BG** di toolbar. Kursor berubah jadi pipet dan panel **Remove background** terbuka.
2. Klik di dalam satu kotak hijau. Semua yang terpilih tampil sebagai area bergaris yang bergerak.
3. Hilangkan centang **Connected area only**. Sekarang hijau yang sama terpilih di seluruh desain, jadi semua kotak kena dari satu klik itu. (Kalau dicentang, cuma kotak yang kamu klik yang terpilih.)
4. Biarkan **Tolerance** di 10, kecuali ada tepi kotak yang ketinggalan. Naikkan sedikit untuk nangkep gradasi di tepinya; turunkan kalau bagian desain kamu ikut terpilih.
5. Klik **Remove** (atau tekan Enter). Kotaknya jadi transparan, editor meng-upload artwork baru dan bilang "Found 4 new photo slots" (atau sebanyak kotak yang kamu punya).
6. Cek **Photo Slots** nampilin satu slot untuk setiap kotak.

![Template editor dengan Remove BG, satu kotak foto, Connected area only, Tolerance, Remove dan daftar Photo Slots ditandai](/img/docs/steps/tutorials-design-a-print-template--remove-bg.webp)

Kontrol lain di panel:

- **Shift**-klik menambah warna lain ke pilihan; **Alt**-klik (Option di Mac) mengeluarkan satu area. Tanda **x** di warna di bawah **Picked colours** menghapus pilihan itu saja.
- **Smooth edge** (0 sampai 3 px, default 1 px) melembutkan potongan biar gak ada garis hijau tipis di sekeliling foto.
- **Expand** (-3 sampai +3 px) membesarkan atau mengecilkan pilihan beberapa piksel.
- **Clear** mengulang pilihan dari awal; **Done** menutup tool. Satu kali **Undo** membatalkan penghapusan sekaligus slot yang ditambahkannya.

## Langkah 4: Cek dan rapikan slot foto {#step-4-check-and-adjust-the-photo-slots}

Panel samping nampilin **Photo Slots (n)**, diberi nomor sesuai urutan foto diambil.

1. Hitung slotnya, cocokkan dengan desain kamu. Kalau ada yang kurang, klik **+ Add slot manually** dan gambar slotnya. Slot yang digambar di atas artwork dapat **Cut out artwork**, yang menghapus persegi itu dari desain waktu kamu simpan.
2. Untuk merapikan slot, tarik kotak di sekelilingnya (atau tekan Cmd+A di Mac, Ctrl+A di Windows) terus pindahkan atau ubah ukurannya bareng-bareng. Slot nempel ke tengah kanvas dan ke satu sama lain.
3. Mau foto yang sama dua kali di satu strip? Pilih satu slot dan atur **Copy of** ke slot yang mau diulang. Pelanggan jadi ngambil foto lebih sedikit dari jumlah slotnya.
4. Untuk mencetak QR code yang mengarah ke soft file pelanggan, klik **+ Add QR code** dan taruh di tempatnya.
5. Klik **Preview** untuk lihat layout-nya dengan foto contoh.
6. Perlu ubah desain? Perbaiki di aplikasi desain kamu, terus klik **Re-upload**. Project-nya tetap pakai nama dan setelannya, dan slotnya dicari ulang.

## Langkah 5: Simpan, kasih nama dan pasang {#step-5-save-name-and-assign}

1. Klik **Save**.
2. Di **Name Your Template**, ketik nama yang bakal dilihat tim dan pelanggan kamu.
3. Di **Assign to booths**, centang booth yang langsung nawarin template ini, atau biarkan untuk nanti.

![Template editor dengan tombol Save ditandai](/img/docs/steps/tutorials-design-a-print-template--pix-design-template-editor.webp)

Untuk masang nanti, buka menu kartu di **Template Projects** dan pilih **Assign to booths**, atau buka tab **Templates** di booth dan klik **Manage Templates**. Lihat [Pasang Template ke Booth](../dashboard/pix-design/assigning-templates.md).

## Cek Hasilnya {#check-it-worked}

- Kartu template di **Template Projects** nampilin jumlah booth, misalnya "2 booths".
- Tab **Templates** di booth mencantumkan template tersebut.
- Di booth, template-nya muncul di layar Templates. Jalankan satu sesi tes dan cetak: semua slot terisi, gak ada garis hijau di sekeliling foto, dan ukuran cetakannya pas.

## Tips {#tips}

- **Simpan file master dengan kotak hijau.** Simpan desain dengan kotak hijau sebagai master. Untuk event berikutnya kamu cuma ganti nama dan tanggal, export, dan **Remove BG** membersihkan kotaknya lagi dalam sekali klik.
- **Cek urutan slot sebelum menyimpan.** Slot 1 dapat foto pertama. Kalau layout kamu dibaca dengan urutan lain selain baris per baris, atur ulang atau gambar ulang slotnya.
- **2 inch cut dan Triple strip:** atur **Print format** di tab [Pricing](../dashboard/booth-pricing.md) booth, biar booth nampilin jumlah cetakan yang benar ke pelanggan.
- **Category** di template jadi tombol di layar Templates booth, praktis kalau booth nawarin banyak desain. Lihat [Folder dan Kategori](../dashboard/pix-design/folders-and-collections.md).
- **Di Pix Starter:** **Upgrade to Create** dan **Save** membuka jendela "Pix Pro keeps your work" dengan **Not now**, **Start free trial** dan **Buy Pix Pro**.

## Kalau Ada Masalah {#troubleshooting}

| Masalah | Kenapa | Solusinya |
|---|---|---|
| Editor gak nemu slot sama sekali | Kotak fotonya gak transparan (kotak putih atau berwarna, atau export yang di-flatten) | Pakai **Remove BG** (Langkah 3), atau export ulang dengan transparansi dan klik **Re-upload** |
| Satu slot raksasa menutupi seluruh template | Seluruh background-nya transparan | Bikin cuma kotak fotonya yang transparan, terus upload ulang |
| **Remove BG** juga bikin bolong teks atau logo | **Connected area only** dimatikan dan warna yang kamu klik juga ada di desain | **Undo**, terus pakai warna kotak yang gak ada di tempat lain, atau biarkan **Connected area only** tercentang dan **Shift**-klik setiap kotak |
| Ada garis warna tipis di sekeliling foto | Tepi kotaknya punya gradasi warna yang lembut | **Undo**, naikkan **Tolerance** sedikit atau atur **Smooth edge** ke 2 px, terus **Remove** lagi |
| Kotak kecil gak dapat slot | Salah satu sisinya lebih kecil dari 200 px | Besarkan kotaknya, atau gambar slotnya pakai **+ Add slot manually** |
| "That spot is already transparent." | Kamu klik area yang sudah tembus pandang | Klik di kotak berwarnanya |
| Foto di cetakan kelihatan kurang tajam | PNG-nya lebih kecil dari ukuran cetak dan diperbesar | Export persis di ukuran piksel dari tabel di [Persiapan](#prepare) |
| **Create Project** tetap abu-abu | Belum pilih ukuran cetak atau file | Pilih ukuran dan drop PNG maksimal 30 MB |

## Terkait {#related}

- [Referensi Template Editor](../dashboard/pix-design/creating-templates.md)
- [Folder dan Kategori](../dashboard/pix-design/folders-and-collections.md)
- [Pasang Template ke Booth](../dashboard/pix-design/assigning-templates.md)
- [Atur Tampilan Layar Booth](./customise-kiosk-screens.md)
- [Bikin Booth dari Nol](./set-up-a-booth.md)
