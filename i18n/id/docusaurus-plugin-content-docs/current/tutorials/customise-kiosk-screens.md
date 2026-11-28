---
sidebar_position: 3
title: Atur Tampilan Layar Booth
description: Bikin desain layar booth sendiri di UI Editor Pix Design, dari Start Screen sampai Sharing, terus pasang ke booth.
tags: [tutorials, pix-design, ui-editor, booth]
---

# Atur Tampilan Layar Booth

Di tutorial ini kamu bikin UI project di Pix Design, mendesain layar Start, Payment, Templates, Capture, Review, Filter dan Sharing, nge-preview dan menyimpan desainnya, terus memasangnya ke booth. Siapkan waktu sekitar 45 menit untuk desain pertama.

Ini untuk desain layar booth itu sendiri (booth Kiosk). Layar untuk event didesain di halaman event: lihat [Desain Layar Start Event](./event-start-screen.md).

## Kapan Dipakai {#when-to-use-it}

- **Booth self-service di mall:** pelanggan datang sendirian, jadi layarnya yang jualan. Taruh harga, template terbaik dan tombol start yang besar di Start Screen, terus layar pembayaran QR yang jelas sesudahnya.
- **Studio dengan banyak booth:** satu desain untuk semua cabang bikin tampilannya sama di mana-mana. Pakai **Duplicate** untuk cabang yang butuh sedikit perubahan.
- **Photobox pop-up untuk brand:** warna, logo sponsor dan video looping di Start Screen. Bikin salinan desain kamu yang biasa untuk setiap klien.
- **Pembayaran koin atau kartu:** Payment Screen dan sub-layar koin dan kartunya ngasih tahu pelanggan apa yang harus dilakukan dengan mesinnya.

Cuma mau warna dan logo kamu ada di mana-mana tanpa mendesain setiap layar? Atur [Brand kamu](./set-up-your-brand.md) dulu: desain baru langsung pakai warna kamu.

## Sebelum Mulai {#before-you-start}

- **Paket:** Pix Pro atau free trial. Pix Starter bisa buka UI Editor dan nyobain semuanya, tapi bikin project atau menyimpan butuh Pix Pro.
- **Orientasi layar booth kamu:** Landscape (1920 x 1080) atau Portrait (1080 x 1920). Orientasi gak bisa diubah setelah project dibuat.
- **Booth** yang sudah di-pairing dengan aplikasi Pixture Photobooth, untuk nge-tes desainnya. Lihat [Bikin Booth dari Nol](./set-up-a-booth.md).

## Persiapan {#prepare}

- **Background seukuran layar:** 1920 x 1080 px untuk landscape, 1080 x 1920 px untuk portrait, satu untuk setiap layar yang mau kamu dandani. Bagian tengahnya jangan ramai: tombol, live view dan kartu template ada di atasnya.
- **Video looping pendek** (opsional) untuk Start Screen. Ini menarik perhatian orang yang lewat.
- **Logo kamu** dalam PNG dengan background transparan.
- **Area tap yang besar.** Pelanggan tap pakai jari, sering buru-buru. Kasih ruang untuk tombol yang gampang kena, dan kosongkan sudut kanan atas: menu operator tersembunyi terbuka di sana (bisa dipindah, lihat [Tips](#tips)).

## Langkah 1: Bikin UI project {#step-1-create-the-ui-project}

1. Klik **Pix Design** di sidebar, terus buka **UI Editor**.
2. Di **UI Projects**, klik **New Project**.

![Daftar UI Projects dengan kartu project, Manage UI Project dan New Project](/img/docs/steps/tutorials-customise-kiosk-screens--pix-design-ui-projects.webp)

3. Ketik **Project Name**, pilih **Orientation** (**Landscape** 1920×1080 atau **Portrait** 1080×1920), centang satu atau beberapa **Modes**.

![Jendela New UI Project dengan Project Name, Orientation dan pilihan mode](/img/docs/steps/tutorials-customise-kiosk-screens--pix-design-new-ui-project-modal.webp)

Setiap mode menentukan alur sesinya:

| Mode | Alur |
|---|---|
| Photo | Start, Pay, Template, Shoot per slot, Filter, Share |
| Studio | Start, Pay, Template, Timed shoot, Pick photos, Filter, Share |
| Decor | Start, Pay, Template, Shoot, Filter, Draw, Share |
| Simple | Start, Pay, B&W or colour, Shoot, Share |
| Newspaper | Start, Pay, Newspaper, Shoot, Share |

"Pick one or more. Photo, Studio and Decor can change later in the editor; Simple and Newspaper can't be combined." Dengan dua mode atau lebih, pelanggan milih salah satunya pakai **Mode buttons** di Start Screen; ini butuh Pixture Photobooth 1.2.4 atau lebih baru. Mode Studio butuh 1.1.98 atau lebih baru. Lihat [Sesi Studio](../desktop-app/studio-sessions.md).

4. Pilih **Look**: **Light** ("Bright, clean, studio style") atau **Classic** ("Today's look"). **Light** tercentang secara default. Light itu tampilan putih ala self photo studio Korea, dengan judul dari tile huruf, tombol pill hitam dan latar kertas studio. Semua bagiannya blok biasa yang bisa kamu geser, ubah ukurannya dan ganti warnanya. Kalau kamu cuma pilih Newspaper dan/atau Decor, Look pindah ke Classic dan Light dimatikan dengan tulisan "Light isn't ready for this mode yet". Terus klik **Create Project**.

<!-- SHOT-NEEDED: dashboard: New UI Project modal with the Look choice, Light and Classic -->

:::tip Kapan pilih Light
Pilih **Light** kalau mau kesan studio yang terang dan bersih, atau kalau [Brand](./set-up-your-brand.md) kamu terang dan simpel. Project Light butuh Pixture Photobooth 1.2.56 atau lebih baru supaya tile huruf dan header band tampil. Booth yang lebih lama menampilkan teks biasa dan kotak biasa. Di halaman yang terang, atur **Padlock colour** ke **Dark** supaya staf bisa lihat gembok yang samar. Project pertama akun baru otomatis Light kalau semua booth-nya pakai 1.2.56 atau lebih baru.

Dengan dua mode atau lebih, project Light menampilkan **Touch to start** di Start. Kalau diketuk, muncul popup **Pick a mode**. Untuk mengubahnya, pilih blok Mode buttons lalu ubah **Show as**. Untuk mengatur gaya popup pembayaran, PIN, consent dan lainnya di satu tempat, buka **Popups: Edit** di bawah pengaturan gembok.
:::

## Langkah 2: Kenali editornya {#step-2-find-your-way-around-the-editor}

- **Tab halaman** di bagian atas: Start Screen, Custom Screen, Payment Screen, Templates, Capture, Review, Adjust, Filter dan Sharing (project Studio nambah Assign photos, project Decor nambah Decor). Setiap tab adalah satu layar booth. Custom Screen adalah halaman tambahan opsional; masukkan ke alur pakai **Enabled in session flow**.
- **Kanvas** di tengah, dengan kontrol **Fit**, zoom dan **1:1**, **Snap** untuk perataan, undo dan redo.
- **Palet mengambang** di bawah kanvas untuk menambah blok: Text, Image, Start Button, Next Button, Live View, Template Cards, Preview Cards, QR Code, Session Timer, Filter Strip dan lainnya.
- **Panel kanan**: **PAGE BACKGROUND** paling atas (Type: **Solid Color**, **Image**, **Gradient**, atau **Video** di Start Screen), terus setelan halaman itu, terus setelan blok yang dipilih.
- **LAYERS** di bawah panel mencantumkan blok-blok di halaman.
- Header nampilin nama project dan di mana project dipakai (**Unused** atau **N booths**). **Preview** nampilin desainnya seperti di booth; **Save** menyimpannya, dan toolbar bertuliskan **Saved** kalau gak ada yang tertunda.

## Langkah 3: Desain Start Screen {#step-3-design-the-start-screen}

1. Di tab **Start Screen**, atur **PAGE BACKGROUND > Type** ke **Image** dan upload artwork kamu, atau **Video** untuk klip looping. **Solid Color** dan **Gradient** juga bisa.
2. Di **SESSION TRIGGER**, centang cara sesi dimulai: **Touch Screen** (tap di mana saja), **Start Button** (nambah blok tombol yang bisa kamu atur gayanya), **F13** (untuk sistem kas atau tombol remote) dan **Space, S, Page Up, Page Down Keys**.
3. Di **Home Page Settings**, biarkan **Enabled in session flow** nyala dan atur **Idle Timeout**, jumlah detik sebelum booth balik ke awal.

![UI Editor di Start Screen dengan Page Background, Session Trigger dan Idle Timeout ditandai](/img/docs/steps/tutorials-customise-kiosk-screens--pix-design-ui-editor-start.webp)

**CAPTURE SETTINGS > Show live view** menaruh tampilan kamera di Start Screen, biar orang yang lewat bisa lihat dirinya sendiri. Setiap halaman punya **Enabled in session flow**; kalau dimatikan, booth melewati layar itu.

## Langkah 4: Desain Payment Screen {#step-4-design-the-payment-screen}

1. Buka tab **Payment Screen**. Di project Light ada sub-tab: **Choose your print**, **How many?**, **Pay with** dan **QR Pay**. **Advanced** menambah **Voucher**, **Coin**, **Card** dan **Payment Success**. Selain layar utama dengan pembayaran QR, ada sub-layar untuk **voucher**, **coins**, **card** dan **success**. Desain yang bakal ditemui pelanggan kamu; sub-layar yang cuma punya background dihitung sudah didesain.
2. Tambahkan blok yang dibutuhkan: **Payment QR** nampilin QR code dari gateway; **Voucher Input** punya judul, subjudul dan warna tombol yang bisa diubah (judul kosong menyembunyikan barisnya), atau pakai kotak kode **Voucher Field** yang polos untuk artwork kamu sendiri; **Payment Status** nampilin posisi pembayaran.
3. Di **Timeout**, pakai atau ubah default-nya: layar balik ke awal setelah 120 detik diam (0 = gak pernah), langkah voucher, koin atau kartu balik ke pilihan metode setelah 60 detik, dan layar success tampil 3 detik (0 = tunggu tap).

![UI Editor di Payment Screen](/img/docs/steps/tutorials-customise-kiosk-screens--pix-design-ui-editor-payment.webp)

Di Light, kalau waktu **Pay with** habis, booth balik ke Start dan gak ada yang ditagih. Templates lanjut dengan frame yang disorot, Filter dengan filter yang sedang dipakai, dan Choose your photos mengisi slot kosong lalu lanjut. Gak ada timer yang jalan selama pembayaran berlangsung.

Harga tampil dalam mata uang akun kamu, misalnya Rp 35.000 atau $35.00.

**Project Light lama?** Klik **Update to the latest Light layout** di editor. Halaman dibangun ulang ke desain Light terbaru, dan warna, logo, teks dan setelan halaman kamu tetap. Gak ada yang berubah sebelum kamu klik. Tampilan baru butuh booth app 1.2.58 atau lebih baru.

Di project Light, tombol bisa menampilkan ikon: pilih tombolnya lalu buka **Properties > Icon**.

Layar success juga muncul kalau voucher menutup seluruh harga; sesi gratis melewati Payment Screen sama sekali. Popup pembayaran QR ngambil warna, font dan tombolnya dari desain ini.

## Langkah 5: Desain layar Templates {#step-5-design-the-templates-screen}

1. Buka tab **Templates** dan pilih blok **Template Cards**. Blok ini nampilin semua template yang dipasang ke booth, pakai thumbnail dari Template Editor.
2. Atur ukuran dan posisi bloknya, plus bayangan dan sudut membulat kartunya (default radius 0). Template dengan kategori dapat deretan kategori yang bisa digeser kalau jumlahnya banyak.

![UI Editor di layar Templates](/img/docs/steps/tutorials-customise-kiosk-screens--pix-design-ui-editor-templates.webp)

## Langkah 6: Desain layar Capture dan Review {#step-6-design-the-capture-and-review-screens}

1. Di tab **Capture**, taruh blok **Live View** di tempat pelanggan melihat dirinya waktu berpose, dan atur rasio frame kameranya sesuai slot template kamu. Hitung mundur setiap foto jalan di layar ini.
2. Atur **Session Time** di setelan halaman. Hitung mundurnya mulai di foto pertama; blok **Session Timer** cuma menampilkannya, selalu dalam format MM:SS.
3. Tambahkan blok **Preview Cards**: satu kartu persegi per slot template, bernomor selama kosong, terisi begitu foto masuk, dengan slot yang sedang aktif dilingkari. Blok **Photo Counter** nampilin berapa foto yang sudah diambil.

![UI Editor di layar Capture](/img/docs/steps/tutorials-customise-kiosk-screens--pix-design-ui-editor-capture.webp)

4. Di tab **Review**, taruh blok **Review Photo** plus **Retake Button** dan **Next Button**; tombol bawaannya menyesuaikan ukuran bloknya. Di **Review Settings**, nyalakan **Advanced mode** kalau pelanggan boleh mengatur setiap foto: tap satu slot di preview gabungan untuk memperbesar, menggeser dan membalik foto itu.

Di project Light, tamu juga bisa tap satu foto di strip untuk foto ulang foto itu saja. Pilih **Preview Cards** untuk mengubahnya, dan centang **Countdown inside the button** di tombol Next kalau mau tombolnya mengosong, bukan menampilkan detik. Di layar Adjust, tamu dapat tombol **Beautify** di atas Mirror.

## Langkah 7: Desain layar Filter dan Sharing {#step-7-design-the-filter-and-sharing-screens}

1. Di tab **Filter**, tambahkan blok **Filter Strip**, grid kartu filter, dan pilih rasio kartunya (16:9 sampai persegi; default persegi). Kartu filter ngambil sudut membulatnya dari strip. Tambahkan blok **Filter Preview** biar pelanggan lihat filter pilihannya di foto mereka.
2. Di tab **Sharing**, tambahkan blok **QR Code** (link ke foto pelanggan), blok **Composed Preview** (hasil cetakan) dan **Finish Button**. Kalau showcase loop mati, preview nampilin live photo begitu siap; preview GIF nampilin GIF aslinya. Kalau kamu jual cetakan tambahan, harganya diambil dari tab **Pricing > Extra prints** di booth, dan kontrol cetakan tambahan muncul di layar ini.

![UI Editor di layar Sharing](/img/docs/steps/tutorials-customise-kiosk-screens--pix-design-ui-editor-sharing.webp)

## Langkah 8: Preview, simpan dan pasang {#step-8-preview-save-and-assign}

1. Klik **Preview** untuk menelusuri layarnya seperti pelanggan, terus **Save**.
2. Pasang desainnya: di **UI Projects**, buka menu kartunya dan pilih **Assign to booths**; atau buka tab **UI Project** di booth, pilih project dari dropdown dan klik **Save**.

![Tab UI Project di booth dengan dropdown project dan tombol Save](/img/docs/steps/tutorials-customise-kiosk-screens--booth-ui-project-tab.webp)

Menu kartu juga punya **Duplicate** (mulai varian untuk klien lain), **Rename**, **Add frame template to this project** dan **Delete**.

:::caution Sistem kas butuh F13 saja
Kalau coin acceptor atau card reader memulai sesi dengan menekan F13, centang **F13** sebagai satu-satunya session trigger dan matikan Payment Screen. Trigger lain bikin pelanggan bisa mulai tanpa bayar. Lihat [Sambungkan Coin Acceptor atau Card Reader](./connect-a-coin-or-card-reader.md).
:::

## Cek Hasilnya {#check-it-worked}

- Kartu project di **UI Projects** nampilin jumlah booth, dan header editor bertuliskan **N booths**, bukan **Unused**.
- Tab **UI Project** di booth nampilin project-nya dan **Booth mode**-nya.
- Di booth, jalankan sesi tes dan telusuri setiap layar yang kamu desain.

## Tips {#tips}

- **Duplicate dulu sebelum eksperimen.** **Duplicate** di menu kartu menyalin desain yang sudah jalan, jadi tes gak pernah merusak booth yang lagi menghasilkan.
- **Pindahkan gembok tersembunyi** kalau desain kamu menaruh tombol di sudut kanan atas: di Start Screen, atur **Lock button** ke sudut lain.
- **Matikan layar yang gak kamu butuhkan.** Setiap halaman punya **Enabled in session flow**. Layar yang lebih sedikit artinya sesi lebih pendek dan lebih banyak pelanggan per jam.
- **Preview di booth, jangan cuma di browser.** Teks yang kelihatan oke di laptop bisa terlalu kecil di layar booth dari seberang ruangan. Jalankan satu sesi tes penuh setiap habis ada perubahan.
- **Sesi gratis melewati Payment Screen.** Gak perlu didesain untuk booth yang gak memungut bayaran.

## Kalau Ada Masalah {#troubleshooting}

| Masalah | Kenapa | Solusinya |
|---|---|---|
| **Save** membuka modal Pix Pro | Akunnya di Pix Starter | Mulai free trial atau beli Pix Pro |
| Satu layar gak pernah muncul di booth | **Enabled in session flow** mati untuk halaman itu; untuk Payment Screen, **Payment on this booth** mati atau komputernya di Pix Starter | Nyalakan halamannya; cek tab Pricing di booth |
| Booth masih nampilin desain lama | Project-nya belum dipasang ke booth itu | Booth > tab **UI Project**, pilih project, **Save** |
| Booth dengan project Studio masih jalanin sesi foto biasa | Aplikasi Pixture Photobooth di booth lebih lama dari 1.1.98; halaman booth-nya nampilin peringatan untuk update. Booth yang lebih lama tetap jalanin sesi foto biasa sampai di-update | Update aplikasinya dari menu operator (**Check for Updates**) |
| Pelanggan gak bisa mulai sesi | Gak ada session trigger yang dicentang dan gak ada Start Button di kanvas | Centang **Touch Screen** atau tambahkan **Start Button** |

## Terkait {#related}

- [UI Editor](../dashboard/pix-design/ui-editor.md)
- [Gambaran Alur Sesi Foto](../desktop-app/session-flow/overview.md)
- [Branding Booth Kamu](../guides/branding-your-booth.md)
- [Bikin Booth dari Nol](./set-up-a-booth.md)
- [Atur Brand Kamu](./set-up-your-brand.md)
- [Desain Layar Start Event](./event-start-screen.md)
