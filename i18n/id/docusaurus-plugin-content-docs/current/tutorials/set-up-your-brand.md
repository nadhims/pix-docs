---
sidebar_position: 2.5
title: Atur Brand Kamu
description: Masukkan logo, warna, gaya tombol dan font kamu sekali di Pix Design > Brand, biar layar event, desain booth dan halaman tamu langsung pakai tampilan kamu, bukan tampilan Pixture.
tags: [tutorials, pix-design, brand, white label]
---

# Atur Brand Kamu

Di tutorial ini kamu atur tampilan bisnis kamu sekali di **Pix Design > Brand**: logo, tiga warna, gaya tombol dan dua font. Setelah itu, layar event baru, desain layar booth dan halaman yang dibuka pelanggan di HP langsung pakai tampilan kamu. Di Pix Pro Yearly kamu juga bisa matikan footer Powered by Pixture. Siapkan waktu sekitar 10 menit.

## Kapan Dipakai {#when-to-use-it}

- **Sewa photobooth untuk event:** setiap event yang kamu pegang bawa logo dan warna kamu, jadi tamu ingat siapa yang punya booth-nya, dan klien berikutnya bisa nemuin kamu.
- **Booth self-service di mall:** toko voucher dan halaman foto yang dibuka pelanggan dari QR code kelihatan seperti toko kamu, bukan layanan generik.
- **Studio dengan banyak booth:** atur brand sekali, dan setiap cabang, setiap UI project baru dan setiap event mulai dari situ. Gak ada yang perlu nyalin kode hex satu-satu.
- **White label untuk agensi (Pix Pro Yearly):** sembunyikan footer Powered by Pixture biar halaman tamu cuma nampilin bisnis kamu.

Untuk satu klien dengan tampilan sendiri (pasangan pengantin, sponsor), biarkan brand kamu jadi default dan ubah event atau UI project itu saja. Lihat [Desain Layar Start Event](./event-start-screen.md) dan [Atur Tampilan Layar Booth](./customise-kiosk-screens.md).

## Sebelum Mulai {#before-you-start}

- **Paket:** Pix Pro atau free trial untuk menyimpan brand kamu. Di Pix Starter kamu bisa nyobain halamannya, tapi menyimpan membuka jendela "Pix Pro keeps your work". Selama brand kamu belum dipakai, halamannya bertuliskan "Turns on with Pix Pro or an Event Pass."
- **Matikan footer Pixture** butuh Pix Pro Yearly yang lagi aktif.
- **Akses:** kamu butuh hak untuk mengubah setelan akun (pemilik akun punya hak ini).

## Persiapan {#prepare}

- **Logo:** PNG atau SVG, maksimal 2 MB, dengan background transparan. Logo di kotak putih polos kelihatan kayak stiker di layar booth yang gelap.
- **Versi terang logo** (opsional). Layar booth sering gelap. Kalau logo kamu gelap, siapkan versi putih atau terang, atau biarkan halaman ini bikinin versi putihnya.
- **Tiga warna kamu dalam kode hex** (misalnya #D97756): **Accent** untuk tombol, **Dark** untuk background dan teks gelap, **Light** untuk teks dan lingkaran ikon. Pilih Accent yang gak terlalu pucat: warna ini harus bisa dibaca dengan teks putih di atasnya.
- **Font** (opsional): file .woff2, .woff, .ttf atau .otf kamu sendiri, maksimal 4 MB per file. Pastikan lisensi font kamu boleh dipakai di layar dan web.

## Langkah 1: Buka halaman Brand {#step-1-open-the-brand-page}

1. Di sidebar, klik **Pix Design**.
2. Klik **Brand**.

![Halaman Pix Design dengan Pix Design di sidebar dan kartu Brand ditandai](/img/docs/steps/tutorials-set-up-your-brand--hub.webp)

## Langkah 2: Atur logo, warna, tombol dan font {#step-2-set-your-logo-colours-buttons-and-fonts}

Setiap perubahan tersimpan sendiri: bagian atas halaman nampilin "Saving", terus "Saved".

1. **Logo:** klik **Add your logo** dan pilih file kamu. Logonya tampil dua kali, **On light** dan **On dark**. Kalau susah dilihat di latar gelap, klik **Make a white version**, atau **Upload a light version** untuk pakai versi kamu sendiri. **Change logo** dan **Remove logo** untuk ganti atau hapus nanti.
2. **Brand palette:** atur **Accent** (tombol dan sorotan), **Dark** (background dan teks gelap) dan **Light** (teks dan lingkaran ikon) pakai color picker atau ketik kode hex-nya. Tombol reset di samping warna mengembalikan warna Pixture.
3. **Buttons:** pilih **Gradient** (kilau lembut) atau **Flat**.
4. **Fonts:** pilih font **Heading** (judul dan hitung mundur) dan font **Body** (tombol dan sisanya), atau klik **Upload a font**.
5. **Preview:** pindah-pindah antara **Start screen**, **Capture**, **Share** dan **Guest page** untuk ngecek brand kamu di masing-masing.

![Halaman Brand dengan Logo, Brand palette, Buttons, Fonts dan tab preview ditandai](/img/docs/steps/tutorials-set-up-your-brand--brand-page.webp)

Halaman ini ngasih peringatan kalau ada pilihan yang bakal susah dibaca, misalnya "This logo has a solid background. A transparent PNG looks cleaner." atau "Accent is very light. Share icons and guest page buttons are hard to read." Beresin peringatannya sebelum lanjut: tamu kamu bakal lihat masalah yang sama.

## Langkah 3: Matikan footer Pixture (Pix Pro Yearly) {#step-3-switch-off-the-pixture-footer-pix-pro-yearly}

Halaman dan email yang diterima pelanggan kamu diakhiri footer **Powered by Pixture**. Di Pix Pro Yearly kamu bisa menyembunyikannya, dan nama bisnis kamu tampil di sana.

1. Di halaman Brand, cari **Pixture footer**.
2. Matikan **Show on guest pages**. Preview **Guest page** nampilin nama bisnis kamu di footer.

<!-- SHOT-NEEDED: dashboard: Pix Design > Brand on a Pix Pro Yearly account, the Pixture footer card with the Show on guest pages switch, marked -->

Di paket lain, switch-nya tetap nyala dan terkunci, dengan "Yearly plan." dan link **Go yearly** ke halaman Computers. Kalau akun kamu gak lagi punya Pix Pro Yearly, footernya muncul lagi sendiri; pilihan kamu tetap tersimpan, jadi footernya sembunyi lagi begitu kamu balik ke paket tahunan.

## Cek Hasilnya {#check-it-worked}

- Halaman Brand bertuliskan "Used as the default for your events, microsites and UI projects."
- Buka event yang belum kamu atur tampilannya dan klik **Edit appearance**: layar start-nya pakai warna kamu.
- Buka UI project di UI Editor: warna yang gak pernah kamu ubah manual sekarang tampil dalam warna brand kamu, dan logo kamu sudah ada di halamannya.
- Scan QR code setelah sesi tes: halaman tamu pakai warna kamu, dan kalau footer dimatikan, nama bisnis kamu tampil di bagian bawah.

## Tips {#tips}

- **Brand kamu itu default, bukan kunci.** Event atau UI project yang kamu atur manual tetap pakai pilihannya sendiri. Warna yang kamu atur manual dan kebetulan sama dengan warna default Pixture bisa ikut berubah mengikuti brand, jadi cek lagi desain yang kamu atur manual setelah ganti brand.
- **Accent yang terlalu terang adalah kesalahan paling sering.** Teks putih di tombol pucat gak kebaca di layar venue yang terang. Tes preview Start screen dari seberang ruangan.
- **Ganti warna brand di tengah musim** mengubah setiap event dan UI project yang mengikuti brand. Ganti di sela-sela event, jangan pas event lagi jalan.

## Kalau Ada Masalah {#troubleshooting}

| Masalah | Kenapa | Solusinya |
|---|---|---|
| Halamannya bertuliskan "Turns on with Pix Pro or an Event Pass." | Akun belum punya Pix Pro, trial atau Event Pass yang jalan | Klik **Get Pix Pro**, atau mulai free trial |
| Menyimpan membuka jendela "Pix Pro keeps your work" | Akunnya di Pix Starter | Mulai free trial atau beli Pix Pro |
| "You can't change the Brand." | Role tim kamu gak boleh mengubah setelan akun | Minta pemilik akun atau admin untuk mengubahnya |
| "Logos can be up to 2 MB." / "Use a PNG or SVG logo." | Filenya terlalu besar, atau bukan PNG atau SVG | Export PNG yang lebih kecil, atau simpan sebagai SVG |
| Logo hilang di layar booth yang gelap | Logonya gelap dan gak ada versi terang | Klik **Make a white version**, atau **Upload a light version** |
| **Show on guest pages** terkunci dengan "Yearly plan." | Akunnya gak di Pix Pro Yearly | Klik **Go yearly**, atau biarkan footernya |
| Satu event masih pakai warna lain | Event itu diatur manual | Buka pakai **Edit appearance** dan pilih **Your brand** di **Colours** |

## Terkait {#related}

- [Referensi Brand](../dashboard/pix-design/brand.md)
- [Branding Booth Kamu](../guides/branding-your-booth.md)
- [Desain Layar Start Event](./event-start-screen.md)
- [Atur Tampilan Layar Booth](./customise-kiosk-screens.md)
- [Microsite (Halaman Share)](../dashboard/pix-design/microsite.md)
