---
sidebar_position: 6
title: Bikin Payment Gateway
description: Buka akun merchant di DOKU, Stripe atau penyedia lain yang didukung, kumpulkan key yang diminta Pixture, sambungkan dan aktifkan gateway, jalankan tes pembayaran, lalu tambah webhook dan card reader kalau perlu.
tags: [tutorials, payments, payment-gateway, doku, stripe, qris]
---

# Bikin Payment Gateway

Payment gateway adalah layanan yang ada di antara booth kamu dan bank kamu. Dia yang nampilin QR code atau permintaan kartu, ngecek pelanggan beneran sudah bayar, ngasih tahu booth untuk buka sesi foto, lalu ngirim uangnya ke rekening bisnis kamu sehari sampai tiga hari kemudian. Pixture gak pernah megang uangnya: uang jalan dari pelanggan langsung ke akun gateway kamu sendiri, dan Pixture cuma nanya ke gateway apakah pembayarannya sudah masuk.

Di tutorial ini kamu buka akun merchant, kumpulkan key yang dibutuhkan Pixture, sambungkan dan aktifkan gateway, jalankan tes pembayaran, dan untuk Stripe, tambah webhook dan card reader kalau perlu. Bagian di Pixture makan waktu sekitar 30 menit. Verifikasi bisnis dari penyedia sendiri bisa sehari sampai dua minggu, jadi mulai dari situ dulu.

## Kapan Dipakai {#when-to-use-it}

- **Booth self-service di mall atau kafe.** Gak ada yang jagain, jadi booth harus nerima uang sendiri. Gateway inilah yang bikin layar Payment jadi QR code yang bisa dibayar pelanggan.
- **Photobox pop-up di bazar atau festival.** Pelanggan bayar pakai HP di stand, dan gateway yang sama juga jualan sesi lebih awal lewat toko online kamu.
- **Studio multi-booth.** Satu gateway melayani semua booth di studio, jadi satu akun nerima semua uang dan **Transactions** nampilin setiap penjualan.
- **Event di mana sponsor atau klien yang nerima uangnya.** Tambah gateway kedua atas nama mereka dan pilih khusus untuk event itu.

Kamu cuma sewa booth untuk event, klien bayar flat dan tamu gak bayar apa-apa? Kamu gak butuh gateway: jalankan booth gratis (lihat [Jalankan Event](./run-an-event.md)).

## Sebelum Mulai {#before-you-start}

- **Bisnis terdaftar dan rekening bank bisnis.** Gateway gak bakal nerima kamu tanpa keduanya. Di Indonesia itu artinya KBLI 74201 plus NIB lewat OSS; di Malaysia registrasi SSM; di Amerika Serikat biasanya LLC plus sales tax permit.
- **Akses owner atau admin** di dashboard Pixture.
- **Pix Pro di komputer booth** untuk tes di booth. Di Pix Starter, booth melewati layar Payment.

## Persiapan {#prepare}

- **Pilih penyedia berdasarkan negara, bukan biaya.** Penyedia harus bisa narik bayaran dalam mata uang harga booth kamu, dan pelanggan harus bisa bayar pakai aplikasi yang sudah ada di HP mereka. Tabel di Langkah 1 sudah nyocokin itu buat kamu.
- **Tentukan test atau live sebelum nyalin key.** Setiap penyedia punya key test (gak ada uang beneran) dan key live. Pisahkan keduanya di catatan, soalnya key test kelihatan normal di Pixture tapi uangnya gak pernah cair.
- **Siapkan HP kamu** dengan aplikasi bank atau e-wallet (atau kartu, untuk Stripe). Cek terakhir adalah pembayaran beneran dari kamu sendiri.

## Langkah 1: Pilih Penyedia {#step-1-pick-the-provider}

| Kamu di | Pakai | Pelanggan bayar dengan |
|---|---|---|
| Indonesia | **DOKU** | QRIS dari aplikasi e-wallet atau mobile banking apa pun |
| India | **Razorpay** | QR UPI dari aplikasi UPI apa pun (Google Pay, PhonePe, Paytm, BHIM) |
| Mesir | **Kashier** | Kartu, mobile wallet atau InstaPay di halaman bayar Kashier, dibuka dari QR |
| Filipina, Thailand, Singapura | **Xendit** | QR Ph, PromptPay atau PayNow QR, dari aplikasi bank atau e-wallet lokal |
| Malaysia, Singapura | **HitPay** | DuitNow QR (MYR) atau PayNow QR (SGD). DuitNow butuh akun bisnis Malaysia yang sudah terverifikasi |
| Di luar itu | **Stripe** | Kartu di HP mereka lewat QR code, atau tap di card reader Stripe Terminal di booth |

Midtrans dan Xendit juga ada di daftar untuk merchant Indonesia yang sudah punya akun di sana. Midtrans dan DOKU cuma narik rupiah; Xendit narik IDR, PHP, THB dan SGD, HitPay MYR dan SGD, Razorpay INR dan Kashier EGP. Booth dengan harga di mata uang lain butuh Stripe. Kolom setup tiap penyedia juga ada di [Payment Gateway Reference](../guides/payment-gateway-setup.md#connecting-a-gateway).

## Langkah 2: Buka Akun Merchant {#step-2-open-the-merchant-account}

1. **DOKU:** daftar sebagai bisnis di doku.com, selesaikan verifikasi dengan dokumen bisnis, KTP pemilik dan rekening bank, lalu minta QRIS diaktifkan. Kamu mulai di sandbox dan dapat key live setelah verifikasi selesai.
2. **Stripe:** bikin akun di stripe.com dan selesaikan **Activate your account** dengan data bisnis dan rekening pencairan. Key test langsung ada; key live muncul setelah akun aktif.
3. **Penyedia lain:** daftar sebagai bisnis di situsnya dan selesaikan verifikasinya. Semuanya punya mode test yang bisa kamu pakai sambil nunggu.

Selama nunggu verifikasi, semua langkah di bawah jalan dengan key test. Ganti ke key live sebelum buka untuk pelanggan.

## Langkah 3: Kumpulkan Key {#step-3-collect-the-keys}

**DOKU** butuh empat nilai. Tiga pertama dari DOKU Dashboard; yang keempat dibuat di Pixture.

| Kolom di Pixture | Tempat nemuinnya | Bentuknya |
|---|---|---|
| **Secret Key** | DOKU Dashboard > Settings > Account > API Keys > **Active Secret Key**. Klik Reveal Key, isi OTP, salin | `SK-RG...` |
| **Brand ID** | DOKU Dashboard, kiri atas, di bawah nama bisnis kamu | `BRN-0216-1770968840103` |
| **QRIS Client ID** | DOKU Dashboard > Settings > Checkout Appearance > tab **QRIS Credential Settings** > **Client ID**. Cuma angka | `114621` |
| **Merchant Private Key (RSA 2048)** | Di form Pixture, klik **Generate for me**. Pixture bikin pasangan key di browser kamu dan nampilin public key; tempel public key itu di DOKU Dashboard > Settings > Account > API Keys > **Edit Merchant Public Key** | `-----BEGIN PRIVATE KEY-----` |

**Stripe** butuh satu nilai.

| Kolom di Pixture | Tempat nemuinnya | Bentuknya |
|---|---|---|
| **Secret Key** | Stripe Dashboard > Developers > API keys. Salin secret key-nya | `sk_live_...`, atau restricted key `rk_...` |

Stripe cuma nampilin secret key sekali. Kalau sudah hilang, klik **Create secret key** dan salin yang baru. Dua hal yang kelihatan benar tapi bukan key-nya: publishable key (`pk_...`) dan menu **Copy API key ID** yang ngasih string `mk_...`. Key `sk_test_...` bisa tersambung dan kelihatan normal di Transactions, tapi itu mode test Stripe dan uangnya gak pernah cair.

**Penyedia lain:**

| Penyedia | Kolom di Pixture | Tempat nemuinnya |
|---|---|---|
| **Midtrans** | **Server Key** | Midtrans Dashboard, Settings > Access Keys |
| **Xendit** | **Server Key** (Xendit menyebutnya secret API key) | Xendit Dashboard, Settings > API Keys |
| **Razorpay** | **Key Secret** dan **Key ID** (`rzp_live_...`) | Razorpay > Account & Settings > API Keys > Generate Key. Key Secret cuma tampil sekali. QR UPI dinyalakan atas permintaan: tanya support Razorpay |
| **Kashier** | **Secret Key**, **Payment API Key** dan **Merchant ID** (`MID-...`) | Kashier > Developers > API Integration; Merchant ID ada di bawah nama bisnis, kiri atas |
| **HitPay** | **API Key** | HitPay > Developers > API Keys |

## Langkah 4: Sambungkan Gateway di Pixture {#step-4-connect-the-gateway-in-pixture}

1. Buka **Settings > Payment Gateway** dan klik **Add Payment Gateway**.
2. Di **Choose your payment provider**, pilih penyedia dan klik **Continue**.

![Modal Add Payment Gateway, langkah 1, Choose your payment provider: Midtrans, Xendit, DOKU, Stripe, Razorpay (India), Kashier (Egypt), HitPay (Malaysia, Singapore)](/img/docs/steps/tutorials-create-a-payment-gateway--settings-gateway-providers.webp)

3. Tempel nilai dari Langkah 3. Setiap kolom punya expander **How to find this?** dengan jalur yang sama seperti tabel di atas.
   - **DOKU:** Secret Key, Brand ID, QRIS Client ID dan Merchant Private Key (klik **Generate for me**, lalu salin public key yang muncul ke DOKU Dashboard sebelum lanjut). Nyalakan **Sandbox Mode** selama pakai key sandbox, matikan dengan key live.

![Modal Add Payment Gateway, form DOKU dengan Secret Key, Brand ID, QRIS Client ID, Merchant Private Key, Generate for me dan Sandbox Mode](/img/docs/steps/tutorials-create-a-payment-gateway--settings-gateway-doku.webp)

   - **Stripe:** Secret Key. **Currency** biarkan di **Organization default** kecuali gateway ini narik mata uang yang beda dari akun kamu. Stripe dan Razorpay gak punya switch Sandbox: key-nya yang nentuin test atau live. Bagian **Webhook** biarkan dulu; gak dibutuhkan untuk nerima pembayaran.

![Modal Add Payment Gateway, form Stripe dengan kolom Secret Key, Currency dan catatan Webhook opsional](/img/docs/steps/tutorials-create-a-payment-gateway--settings-gateway-stripe.webp)

   - **Midtrans, Xendit, Kashier, HitPay:** kolom dari tabel, dan **Sandbox Mode** nyala cuma untuk key test.

4. Klik **Connect Gateway**. Pixture ngecek key Stripe ke Stripe waktu menyimpan; key yang salah atau kepotong ditolak di sini, bukan di booth.

## Langkah 5: Aktifkan {#step-5-activate-it}

Gateway baru disimpan dalam keadaan mati. Booth cuma narik bayaran lewat gateway yang bertanda **Active**.

1. Di kartu gateway yang baru, klik **Activate**. Kartunya sekarang punya badge **Active**.
2. Kalau ada dua gateway, cuma satu yang aktif: mengaktifkan satu otomatis mematikan yang lain. Booth yang milih gateway yang gak aktif itu di tab **Settings**-nya tetap narik bayaran lewat gateway itu (Langkah 9). Event gak bisa: lihat peringatan di Langkah 9.

![Bagian Payment Gateway dengan kartu gateway tersambung serta tombol Edit dan Test](/img/docs/steps/tutorials-create-a-payment-gateway--settings-gateway-card.webp)

<!-- SHOT-NEEDED: dashboard: Settings > Payment Gateway with a freshly connected, inactive gateway card showing the Activate button next to Edit and Test -->

## Langkah 6: Jalankan Tes Pembayaran {#step-6-run-the-test-charge}

1. Di kartu gateway, klik **Test**. Pixture minta gateway bikin tagihan tes kecil.
2. Jendela hasil bilang **Connection works** dan cara ngeceknya di sisi penyedia. Untuk gateway QR, scan QR-nya dengan wallet yang cocok dengan modenya: wallet test di sandbox, wallet beneran di live.
3. Kalau gagal, jendelanya bilang **Connection failed** dengan "The provider did not accept the test charge" (atau, untuk Stripe, "Stripe did not accept the key on this gateway"). Klik **Edit gateway**, tempel ulang key-nya, cek channel-nya (QRIS, atau card payments di Stripe) sudah aktif di dashboard penyedia, lalu tes lagi.

Jalankan tes lagi setiap kali ganti key atau mode, dan sekali lagi waktu pindah dari sandbox ke live.

## Langkah 7: Tambah Webhook (Opsional) {#step-7-add-the-webhook-optional}

Pembayaran tetap terkonfirmasi tanpa webhook: booth terus nanya ke gateway sampai pembayaran masuk. Webhook bikin penyedia ngirim konfirmasi sendiri, jadi nunggunya lebih cepat beberapa detik. Stripe, Razorpay dan HitPay punya webhook.

1. Di kartu gateway, cari **Webhook URL (optional)** dan klik **Copy**.
2. Di Stripe Dashboard, buka **Developers > Webhooks > Add destination**, tempel URL-nya dan pilih event `checkout.session`. (Razorpay: **Account & Settings > Webhooks**, centang `qr_code.credited` dan `qr_code.closed`, ketik secret kamu sendiri. HitPay: **Developers > Webhook Endpoints**, centang `payment_request.completed` dan `charge.created`.)
3. Salin signing secret yang ditampilkan penyedia (`whsec_...` di Stripe, secret kamu sendiri di Razorpay, **Salt** di HitPay).
4. Balik ke Pixture, klik **Edit** di kartu, tempel secret-nya di kolom webhook dan simpan.

## Langkah 8: Tambah Card Reader Stripe Terminal (Opsional) {#step-8-add-stripe-terminal-card-readers-optional}

Dengan reader Stripe Terminal di booth, pelanggan tap atau masukkan kartu, bukan scan QR. Reader-nya milik akun Stripe kamu dan dipasangkan ke booth di Pixture.

1. Daftarkan reader di Stripe Dashboard di **Terminal**, di lokasi booth, dan sambungkan ke Wi-Fi booth.
2. Di kartu gateway Stripe di Pixture, buka **Card readers (Stripe Terminal)**. Setiap booth punya dropdown bertuliskan **No reader (QR payment)** sampai kamu pilih reader.
3. Pilih reader untuk booth itu. Layar Payment-nya sekarang minta tap di reader, bukan nampilin QR. Pilih **No reader (QR payment)** untuk balik.

Selengkapnya soal reader, kotak koin dan uang tunai ada di [Terima Bayaran Kartu, Koin dan Tunai](./connect-a-coin-or-card-reader.md).

## Langkah 9: Tentukan Booth Mana yang Pakai {#step-9-decide-which-booths-use-it}

- **Semua booth:** gak perlu ngapa-ngapain. **Active Gateway** setiap booth bertuliskan **Organization Default**, yaitu gateway yang bertanda **Active**.
- **Satu booth di gateway lain** (venue atau klien yang harus nerima uang langsung): buka **Booths**, klik **Configure** di booth itu, lalu tab **Settings**. Di **Payment Gateway**, atur **Active Gateway** dan klik **Save**. Tab yang sama memegang **Currency** booth; gateway harus bisa narik mata uang itu.

![Tab Settings booth dengan Output Settings, Payment Gateway, Booth Info, Currency dan Menu PIN](/img/docs/booth-settings-tab.webp)

- **Satu event di gateway lain** (klien yang harus nerima uang event-nya langsung): pasang gateway-nya di booth event itu sendiri, seperti di atas, dan biarkan **Payment gateway** milik event kosong.

:::caution Jangan aktifkan gateway klien untuk event
Event yang milih gateway di **Payment gateway** cuma bisa narik bayaran selama gateway itu jadi gateway **Active** di akun. Kalau kamu aktifkan, gateway yang biasa kamu pakai jadi mati, dan semua booth yang pakai **Organization Default** ikut narik bayaran ke akun klien. Pasang gateway-nya di booth event aja.
:::

- **Online shop dan Frame Lab:** penjualan lewat link online shop dan di Frame Lab selalu narik bayaran ke gateway **Active** di akun, apa pun gateway yang dipilih booth di tab **Settings**. Venue yang harus nerima penjualan online-nya langsung butuh akun Pixture sendiri.

Selalu biarkan satu gateway **Active**, walaupun setiap booth milih gateway sendiri: booth ngecek ada gateway aktif sebelum nampilin tombol Pay.

Gateway cuma nentuin uangnya masuk ke mana. Harga sesi diatur per booth di tab **Pricing**; lihat [Atur Harga, Paket dan Cetak Tambahan](./prices-and-packages.md).

## Cek Hasilnya {#check-it-worked}

- Kartu gateway punya badge **Active**, dan **Test** bilang **Connection works**.
- Booth dengan **Payment on this booth** nyala nampilin QR code (atau permintaan reader) di layar Payment.
- Pembayaran dari HP kamu sendiri muncul di dashboard penyedia dan sebagai baris di **Transactions**.

## Tips {#tips}

- **Tes dengan pembayaran kecil beneran sebelum pelanggan pertama.** Turunkan harga sesi sepuluh menit, bayar pakai HP kamu, cek **Transactions** dan dashboard penyedia, lalu balikin harganya.
- **Catat key mana untuk apa.** Kebanyakan setup gagal karena key test di gateway live, atau sebaliknya.
- **Satu gateway per negara.** Kalau booth kamu ada di dua negara, sambungkan satu gateway untuk masing-masing dan pilih per booth di tab **Settings**, bareng dengan **Currency** booth.
- **Ganti key kalau ada crew yang keluar** dan pernah pegang akses dashboard penyedia. Tempel key baru dengan **Edit** lalu jalankan **Test**.

## Kalau Ada Masalah {#troubleshooting}

| Masalah | Kenapa | Solusinya |
|---|---|---|
| Booth bilang "Payment isn't available right now. Please ask the booth staff for help." | Gak ada gateway di akun yang bertanda **Active** (sudah disambung tapi belum diaktifkan), atau event milih gateway di **Payment gateway** yang bukan gateway aktif | Klik **Activate** di kartu gateway (Langkah 5); untuk event, kosongkan **Payment gateway** milik event dan pasang gateway-nya di booth event (Langkah 9) |
| "Connection failed" dengan HTTP 401 atau 403 | Ada key yang salah, atau dari mode lain | Salin ulang setiap key dari dashboard penyedia dan cocokkan **Sandbox Mode** dengan key yang kamu tempel |
| Stripe nolak key waktu disimpan | Yang ketempel publishable key (`pk_`), API key ID (`mk_`) atau key yang kepotong | Bikin secret key baru di Stripe dan tempel string `sk_live_...` lengkap |
| Tes DOKU bilang signature gak valid | Public key di DOKU Dashboard gak cocok dengan private key di Pixture | Klik **Generate for me** lagi, tempel public key baru di **Edit Merchant Public Key**, simpan di dua sisi, lalu tes |
| Pembayaran Stripe sukses tapi uangnya gak cair | Key yang tersimpan `sk_test_...` | Edit gateway, tempel key live, tes lagi |
| Booth nampilin QR padahal reader sudah dipasang | Reader offline di Stripe, atau dropdown booth masih **No reader (QR payment)** | Online-kan reader-nya, lalu pilih di dropdown |
| Pembayaran ada di dashboard penyedia tapi gak ada di Transactions | Konfirmasinya gak sampai ke Pixture | Buka **Transactions**, klik **Sync with payment gateway**, jalankan untuk tanggal itu |
| Toko online bilang mata uang booth gak bisa ditarik | Gateway narik mata uang yang beda dari booth | Pakai gateway untuk mata uang itu, atau ganti **Currency** booth |

## Terkait {#related}

- [Terima Pembayaran di Booth](./accept-payments.md)
- [Atur Harga, Paket dan Cetak Tambahan](./prices-and-packages.md)
- [Terima Bayaran Kartu, Koin dan Tunai](./connect-a-coin-or-card-reader.md)
- [Setup Pembayaran per Model Bisnis](./payment-setups-by-use-case.md)
- [Payment Gateway Reference](../guides/payment-gateway-setup.md)
- [Settings](../dashboard/settings.md)
