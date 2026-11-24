---
sidebar_position: 11
title: Biarkan Pelanggan Desain Frame Sendiri (Frame Lab)
description: Nyalakan Frame Lab, bagikan link pelanggan, dan ikuti pelanggan dari mendesain frame di HP sampai bayar, dapat voucher dan memakainya di booth.
tags: [tutorials, frame-lab, marketing-studio, vouchers]
---

# Biarkan Pelanggan Desain Frame Sendiri (Frame Lab)

Di tutorial ini kamu nyalakan Frame Lab untuk satu booth, atur harganya, bagikan link pelanggan, lalu ikuti pelanggan dari mendesain frame di HP sampai bayar, dapat kode voucher dan memakainya di booth. Siapkan sekitar 20 menit. Frame Lab butuh Pix Pro di komputer booth.

Frame Lab adalah halaman yang dibuka pelanggan di HP. Mereka bikin frame di studio kecil (tata letak, latar, stiker, teks dan gambar tangan) atau upload PNG siap cetak, bayar, lalu dapat kode voucher sekali pakai. Di booth mereka ketik kodenya di layar Payment, booth memuat frame mereka sebagai satu-satunya template, dan sesinya dicetak dan dibagikan dengan desain mereka sendiri.

## Kapan Dipakai {#when-to-use-it}

- **Booth self-service dekat sekolah, kampus atau kantor.** Geng teman, satu kelas atau satu tim mau strip dengan nama dan warna mereka sendiri. Mereka desain di jalan dan bayar sebelum sampai.
- **Ulang tahun, pernikahan kecil dan acara komunitas di booth mall.** Tuan rumah desain satu frame dan bagikan, jadi setiap tamu yang mampir nyetak dengan desain yang sama.
- **Brand dan usaha kecil.** Toko atau kafe upload PNG jadi dengan logonya dan pakai booth kamu untuk promosi, tanpa kamu harus desain apa-apa.
- **Pemasukan tambahan di hari sepi.** Frame custom laku dengan harga lebih tinggi dari sesi biasa.

Bukan untuk event penuh di mana kamu yang desain template untuk klien: bikin sendiri di **Pix Design** dan pasang ke booth (lihat [Desain Template Cetak](./design-a-print-template.md)).

## Sebelum Mulai {#before-you-start}

- Pix Pro di komputer booth. Di Pix Starter, switch-nya terkunci dengan badge **Pix Pro**.
- Payment gateway yang tersambung dan **Active** di **Settings > Payment Gateway**. Frame Lab menagih pelanggan lewat pembayaran QR dari gateway kamu (QRIS di Indonesia), dan gateway harus bisa narik mata uang booth. Dengan Stripe, QR-nya membuka halaman bayar Stripe tempat pelanggan bayar pakai kartu atau wallet di HP. Lihat [Terima Pembayaran di Booth](./accept-payments.md).
- Minimal satu template cetak terpasang di booth. Frame pelanggan dibuat dengan ukuran cetak template itu.
- Harga sesi di booth dan **Payment on this booth** nyala. Voucher dipakai di layar Payment booth, jadi booth yang jalan gratis gak bisa nerima voucher ini.

## Persiapan {#prepare}

- **Pasang template dengan ukuran cetak yang kamu mau buat pelanggan.** Booth strip 2x6 dapat frame 2x6; booth 4x6 dapat 4x6. Frame pelanggan selalu ngikutin ukuran template yang terpasang di booth.
- **Kasih tahu pelanggan yang upload desain sendiri cara bikinnya**, di papan info atau postingan media sosial kamu:
  - **PNG** dengan ukuran cetak booth (drop zone nampilin ukurannya), maksimal 15 MB.
  - Area foto bisa **transparan** (dihapus, jadi PNG tembus pandang di situ) atau diisi **satu warna solid yang mencolok** yang gak dipakai di bagian lain desain, misalnya hijau terang. Warna solid bisa diubah jadi area foto cukup dengan sekali tap **Pick color** dan **Same color**.
  - Kasih jarak sedikit antara teks atau logo dan area foto, supaya foto gak pernah menutupinya.
- **Siapkan beberapa tekstur dan stiker** dengan gaya brand kamu untuk studio (Langkah 2): frame buatan pelanggan jadi tetap kelihatan khas kamu.
- **Pasang harga di atas sesi biasa**, karena pelanggan dapat frame milik mereka sendiri: misalnya Rp 50.000 kalau sesi biasa Rp 35.000.

## Langkah 1: Nyalakan Frame Lab dan Atur Harganya {#step-1-switch-frame-lab-on-and-set-the-price}

1. Buka **Marketing Studio** dan klik tab **Frame Lab**.
2. Pilih booth di pilihan **Booth** di atas.
3. Nyalakan switch **Frame Lab** di kartu "Per this booth".
4. Isi **Price** yang dibayar pelanggan per frame, dalam mata uang booth.
5. Biarkan **Canvas (px)** apa adanya. Frame pelanggan ngambil ukuran dari template yang terpasang di booth; nilai ini cuma dipakai kalau booth belum punya template.
6. Atur **Voucher expiry** dalam jam (1 sampai 168). Hitungannya mulai waktu pelanggan bayar.
7. Klik **Save changes**. Untuk menyalin setelan yang sama ke semua booth, klik **Apply to all booths**.

![Tab Frame Lab di Marketing Studio: pilihan booth, switch Frame Lab, Price, Canvas dan Voucher expiry](/img/docs/steps/tutorials-frame-lab--marketing-frame-lab.webp)

Switch-nya nolak nyala sebelum booth punya template ("Assign at least one active template to this booth before enabling Frame Lab."). Setelan yang sama juga ada di halaman booth: klik sel **Frame Lab** di grid properti booth.

## Langkah 2: Tambah Tekstur dan Grafis untuk Studio (Opsional) {#step-2-add-textures-and-graphics-for-the-studio-optional}

Di **Studio assets** di tab yang sama, pilih **Texture** atau **Graphic** lalu klik **Upload asset** (PNG, JPG atau WebP, maksimal 5 MB, maksimal 60 aset per akun). Tekstur muncul sebagai pola latar di studio pelanggan; grafis muncul sebagai stiker yang bisa ditaruh, diubah ukurannya dan diputar. Aset ini dipakai bareng semua booth, dan gak berpengaruh ke pelanggan yang upload PNG jadi sendiri.

## Langkah 3: Bagikan Link Pelanggan {#step-3-share-the-customer-link}

1. Masih di tab Frame Lab, scroll ke **Guest upload page**. QR code dan link-nya membuka Frame Lab untuk booth yang kamu pilih, dengan bentuk `pixture.io/m/your-organisation?booth=…`.
2. Klik **Open link** untuk tes di HP kamu sendiri, atau cetak QR-nya dan taruh di booth.

![Halaman Frame Lab booth dengan link pelanggan, Download QR dan kartu konfigurasi](/img/docs/booth-frame-lab.webp)

Halaman Frame Lab milik booth punya link yang sama dengan **Download QR**. Pelanggan juga nemu link **Frame Lab** di share page setiap sesi foto dari booth itu selama Frame Lab nyala.

## Langkah 4: Yang Dilakukan Pelanggan, Bikin Frame di Studio {#step-4-what-the-customer-does-building-a-frame-in-the-studio}

Halamannya dibuka dengan **Make your own frame** dan tombol **Start Crafting**. Tap tombol itu nanya **How do you want to start?** dengan dua pilihan: **Create new** (studio) atau **Upload your own** (PNG jadi, dibahas di Langkah 5).

<div className="phone-row">
  <figure><img src="/img/docs/framelab-guest-landing.webp" alt="Halaman pembuka Frame Lab di HP: Make your own frame, Start Crafting" /><figcaption>Halaman pembuka untuk booth, dengan pilihan bahasa di kanan atas.</figcaption></figure>
  <figure><img src="/img/docs/framelab-guest-choose.webp" alt="How do you want to start: Create new atau Upload your own" /><figcaption>Start Crafting nanya pelanggan mau mulai dari mana.</figcaption></figure>
</div>

Di studio, pelanggan pakai alat-alat di bagian bawah layar. Tur singkat Lucy menjelaskan alat-alat itu di kali pertama; **How it works** di atas memutarnya lagi.

| Alat | Yang bisa dilakukan pelanggan |
|---|---|
| **Layout** | Pilih tata letak untuk ukuran cetak booth, tambah atau kurangi foto (**Fewer**, **More**), dan atur **Outline** foto (**Off**, **Thin**, **Medium** atau **Bold**). Tap foto di preview untuk memilihnya, lalu ubah ukuran atau bentuknya. |
| **Background** | Warna **Paper**, **Texture** (bawaan dan tekstur yang kamu upload) dan **Line** aksen, atau foto sebagai latar. |
| **Add** | **Text** (caption dan tanggal), **Graphic** (stiker bawaan dan grafis yang kamu upload) atau **Image** milik mereka sendiri. Semuanya bisa digeser, diubah ukurannya dan diputar. |
| **Draw** | Gambar tangan langsung di frame. |

<!-- SHOT-NEEDED: phone: the Frame Lab studio on a phone with the Layout, Background, Add and Draw tools, on a made-up design -->

Kalau frame-nya sudah jadi, pelanggan tap **Use →**:

1. **Your frame** nampilin desain jadinya. Pelanggan ketik email di **Email for your code** (kodenya juga dikirim ke sana) lalu tap **Yes, use this · pay**, atau **Edit** untuk balik.
2. **Scan to pay** nampilin QR code dari gateway kamu dengan nominal dan hitung mundur **Expires in**. Pelanggan bayar pakai e-wallet atau mobile banking, lalu tap **I've paid** kalau halamannya belum mendeteksi.
3. **Your voucher is ready** nampilin kode 6 karakter, **Copy code**, **Save voucher** dan tanggal serta jam **Valid until**.

<div className="phone-row">
  <figure><img src="/img/docs/framelab-voucher.webp" alt="Layar Your voucher is ready dengan kode enam karakter, Copy code, Save voucher dan Valid until" /><figcaption>Setelah bayar, pelanggan dapat kode sekali pakai.</figcaption></figure>
</div>

## Langkah 5: Yang Dilakukan Pelanggan, Upload PNG Jadi {#step-5-what-the-customer-does-uploading-a-finished-png}

Pelanggan yang sudah punya desain pilih **Upload your own**.

<div className="phone-row">
  <figure><img src="/img/docs/framelab-upload-dropzone.webp" alt="Upload your own: drop zone dengan ukuran canvas booth dan Pick a design" /><figcaption>Drop zone nampilin ukuran cetak yang dibutuhkan booth.</figcaption></figure>
  <figure><img src="/img/docs/framelab-upload-voucher.webp" alt="Your voucher is ready setelah desain di-upload, dengan kode dan Save voucher" /><figcaption>Layar voucher yang sama setelah bayar.</figcaption></figure>
</div>

1. Pelanggan tap **Pick a design** dan pilih **PNG** maksimal 15 MB dengan ukuran cetak booth. File dengan ukuran lain ditolak dengan "This booth prints" dan ukuran yang dibutuhkan.
2. **Your frame** nampilin desainnya dan menghitung area foto yang ditemukan. Area transparan otomatis jadi area foto.
3. Area foto yang dicat satu warna solid (misalnya kotak hijau) juga bisa: pelanggan tap **Pick color**, lalu tap setiap area foto (**This spot**, atau **Same color** untuk ngambil semua area warna itu sekaligus), geser slider **Exact** ke **Loose** kalau tepinya halus, lalu tap **Done**. **Undo** membatalkan tap terakhir.
4. Mereka geser area foto untuk mengatur urutan yang diisi booth, ketik email di **Email for your code**, lalu tap **Yes, use this · pay**. **Swap** memilih file lain.
5. Layar **Scan to pay** dan **Your voucher is ready** yang sama menyusul.

<!-- SHOT-NEEDED: phone: the Your frame screen after an upload, with the photo spot count, Pick color, Email for your code and the pay button -->

## Langkah 6: Pakai Kode di Booth {#step-6-redeem-the-code-at-the-booth}

1. Pelanggan mulai sesi di booth seperti biasa.
2. Di layar Payment mereka tap tombol voucher (**Use Voucher** di desain default) dan ketik kode 6 karakter.
3. Booth ngecek kodenya ke Pixture dan nampilin "Frame Lab applied!". Sesi dibayar oleh voucher, jadi pembayaran QR dilewati.
4. Layar Templates cuma nampilin frame milik pelanggan, sudah terpilih; mereka tinggal tap next.
5. Capture, review, filter, cetak dan sharing jalan seperti sesi biasa dengan desain pelanggan.

Setelah layar Sharing, kodenya terpakai dan frame-nya dihapus dari booth, jadi pelanggan berikutnya gak pernah lihat.

Aturan yang perlu diketahui crew:

- Kode cuma berlaku di booth tempat dibeli, sekali, sampai waktu **Valid until**. Kalau gak, booth bilang "This voucher is not valid for this booth.", "This voucher has been fully redeemed." atau "This voucher has expired."
- Ngecek kode butuh internet di booth. Kode Frame Lab bukan kode offline, jadi booth yang lagi putus koneksi menjawab "Failed to validate voucher. Please try again."
- Kode harus dimasukkan saat sesi single standar yang terpilih. Kalau pelanggan nambah cetak atau sesi tambahan dulu, booth menagih tambahan itu dan gak memuat frame-nya.
- Booth yang pembayarannya mati gak bisa nerima kode, karena layar Payment-nya gak pernah tampil.

## Langkah 7: Lihat Pesanannya {#step-7-see-the-orders}

![Recent Frame Lab uploads di tab Frame Lab Marketing Studio dengan tanggal, booth, kode voucher, harga, email dan status](/img/docs/marketing-frame-lab-uploads.webp)

- **Marketing Studio > Frame Lab > Recent Frame Lab uploads** nampilin 20 pesanan terakhir di semua booth dengan tanggal, booth, kode voucher, harga, email dan status: **Awaiting payment**, **Paid**, **Redeemed**, **Completed** atau **Expired**.
- **Transactions** nampilin setiap pesanan yang dibayar sebagai baris sendiri dengan badge **CT** (export dan tampilan HP menulis "Frame Lab"), dan subjudul Total Revenue memisahkan pendapatan sesi dari pendapatan Frame Lab. Sesi booth yang memakai kode itu sendiri tercatat nol.
- **Vouchers** nampilin kodenya bareng kode sekali pakai lain di akun.

![Halaman Transactions dengan baris Frame Lab dan badge CT](/img/docs/transactions-frame-lab.webp)

## Cek Hasilnya {#check-it-worked}

- Buka link pelanggan di HP kamu: halaman pembuka nampilin nama booth dan **Start Crafting**, bukan "Not available".
- Bikin frame, bayar, dan lihat **Your voucher is ready** dengan kodenya.
- Ketik kodenya di layar Payment booth: sesi lanjut tanpa pembayaran QR dan layar Templates cuma nampilin frame kamu.
- Pesanannya muncul di **Recent Frame Lab uploads** sebagai **Paid**, lalu **Redeemed**, dan sebagai baris **CT** di **Transactions**.

## Tips {#tips}

- **Taruh QR di tempat orang nunggu,** di booth dan di awal antrean: desain frame butuh beberapa menit, jadi waktu nunggu berubah jadi waktu desain.
- **Pajang dua atau tiga contoh frame** yang dibuat dengan tekstur kamu di sebelah QR. Orang niru apa yang mereka lihat.
- **Atur Voucher expiry cukup panjang** sesuai cara orang pakai: 24 sampai 48 jam untuk pelanggan yang lewat, sampai 168 jam (7 hari) kalau tuan rumah desain frame sebelum pesta.
- **Cek Recent Frame Lab uploads sebelum hari ramai.** Pesanan **Paid** yang belum **Redeemed** artinya ada pelanggan yang lagi di jalan.

## Kalau Ada Masalah {#troubleshooting}

| Masalah | Kenapa | Solusinya |
|---|---|---|
| Halaman pelanggan bilang "Not available" | Frame Lab mati untuk booth itu, atau harganya kosong atau 0 | Nyalakan switch dan isi harga di **Marketing Studio > Frame Lab** |
| Switch-nya gak mau nyala | Booth belum punya template, atau komputernya bukan Pix Pro | Pasang template di tab Templates booth; pasang Pix Pro di komputernya |
| "This booth has no payment method set up yet" di langkah bayar | Gak ada gateway aktif, atau gateway gak bisa narik mata uang booth | Sambungkan dan aktifkan gateway di **Settings > Payment Gateway**; pakai mata uang booth yang bisa ditarik gateway |
| "This booth prints ..." waktu upload | PNG-nya gak sesuai ukuran cetak booth | Export desain dengan ukuran yang tampil di drop zone (misalnya 2:3 untuk cetak 4x6) |
| "File must be a PNG image." atau "File is too large (max 15MB)." | File JPG, atau file terlalu besar | Export sebagai PNG dan jaga di bawah 15 MB |
| Upload gak nemu area foto | Area fotonya dicat, bukan transparan | Tap **Pick color** lalu tap setiap area foto (atau **Same color**), atau hapus area foto dan export sebagai PNG transparan |
| Booth bilang kodenya gak valid | Salah ketik, booth lain, kedaluwarsa, atau sudah dipakai | Cek kodenya di **Recent Frame Lab uploads**; satu kode terikat ke satu booth dan satu sesi |
| Kode diterima tapi frame-nya gak muncul | Cetak atau sesi tambahan dipilih sebelum kodenya | Mulai lagi dan masukkan kode saat sesi standar yang terpilih |

## Pertanyaan Umum {#common-questions}

### Bisakah satu booth nawarin template saya dan Frame Lab sekaligus? {#can-a-booth-offer-my-own-templates-and-frame-lab-together}

Bisa. Frame Lab gak menggantikan template kamu. Pelanggan yang ngetik kode Frame Lab dapat frame mereka sendiri sebagai satu-satunya template untuk satu sesi itu. Pelanggan lain tetap lihat template yang kamu pasang di booth dan bayar seperti biasa. Booth butuh minimal satu template kamu sebelum Frame Lab bisa dinyalakan.

### Apakah Frame Lab jalan dengan card reader (Stripe Terminal)? {#does-frame-lab-work-with-a-card-reader-stripe-terminal}

Frame Lab selalu dibayar online, di HP pelanggan, sebelum mereka sampai di booth. Frame Lab gak pernah pakai card reader di booth. Dengan Stripe sebagai gateway, satu akun Stripe mencakup keduanya: reader nerima pembayaran sesi biasa di booth, dan pelanggan Frame Lab bayar di halaman bayar Stripe di HP mereka. Kamu gak butuh gateway QR terpisah. Di booth, kodenya yang membayar sesi, jadi reader gak ditagih.

### Bisakah saya pasang harga Frame Lab berbeda untuk tiap format cetak? {#can-i-set-a-different-frame-lab-price-for-each-print-format}

Gak bisa. Setiap booth punya satu **Price** Frame Lab, apa pun ukuran cetak yang dipilih pelanggan. Booth yang berbeda bisa punya harga berbeda.

## Terkait {#related}

- [Marketing Studio](../dashboard/marketing-studio.md)
- [Terima Pembayaran di Booth](./accept-payments.md)
- [Booth Pricing](../dashboard/booth-pricing.md)
- [Public Links](../reference/public-links.md)
