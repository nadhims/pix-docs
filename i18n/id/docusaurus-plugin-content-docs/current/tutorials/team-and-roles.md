---
sidebar_position: 66
title: Tambah Tim dan Atur Role
description: Undang crew, partner dan manajer ke dashboard Pixture kamu, kasih masing-masing role yang cuma nampilin yang mereka butuhkan, dan batasi role ke booth tertentu.
tags: [tutorials, team, members, roles, permissions]
---

# Tambah Tim dan Atur Role

Di tutorial ini kamu pilih atau bikin role, batasi role itu ke booth yang dipegang seseorang, undang orangnya lewat email, terus ubah, suspend atau keluarkan dia nanti. Hasilnya, setiap orang di tim kamu login pakai email sendiri dan cuma lihat apa yang diizinkan role-nya. Siapkan waktu sekitar 10 menit.

## Kapan Dipakai {#when-to-use-it}

- **Usaha sewa photobooth untuk event, dengan crew.** Kepala crew kamu butuh Events, Gallery dan Health saat hari-H, tapi gak perlu lihat omzet atau tagihan kamu. Kasih dia role tanpa kartu uang.
- **Booth self-service di mall, bareng partner venue.** Manajer venue pengin lihat performa booth-nya. Role lihat-saja yang dibatasi ke satu booth itu cuma nampilin angka booth tersebut, gak ada booth kamu yang lain.
- **Studio dengan banyak booth.** Setiap manajer cabang dapat role yang dibatasi ke booth cabangnya. Kamu dan partner bisnis kamu tetap pegang semuanya.
- **Akuntan atau investor.** Role yang cuma punya **View finance** dan **View transactions** bikin mereka bisa ngecek pembukuan tanpa nyentuh booth.

Crew yang cuma jaga di booth gak perlu akun dashboard sama sekali: kasih aja PIN menu booth-nya (lihat [Kunci Booth dan Pakai Menu Operator](./operator-menu.md)).

## Sebelum Mulai {#before-you-start}

- Paket apa saja: member dan role jalan di Pix Starter dan Pix Pro.
- Kamu pemilik akun, atau role kamu punya **Manage users**. Tanpa itu kamu tetap bisa buka Settings > Members, tapi gak ada **+ Invite** atau **Manage Roles**.
- Alamat email setiap orang. Mereka gak perlu punya akun Pixture dulu.

## Persiapan {#prepare}

Setiap akun mulai dengan lima role. Baca dulu sebelum bikin sendiri, sering salah satunya sudah pas.

| Role | Deskripsi di layar | Cocok untuk |
|---|---|---|
| **Owner** | Full access to all features. One per organization. | Kamu. Terkunci: gak bisa diedit, dihapus atau dikasih ke orang lain |
| **Admin** | Full access except billing management. | Partner bisnis atau general manager |
| **Editor** | Manage templates, gallery, and view booths. | Desainer yang bikin template dan layar |
| **Operator** | Operate booths and view data. | Kepala crew atau manajer cabang |
| **Viewer** | View-only access to dashboard data. | Partner venue atau investor yang cuma lihat |

Kelimanya mencakup **All booths**. Untuk membatasi seseorang ke booth tertentu, bikin salinan atau role kamu sendiri (Langkah 3).

Role tersusun dari permission yang dikelompokkan mengikuti sidebar: **Dashboard**, **Booths**, **Transactions**, **Vouchers**, **Marketing Studio**, **Gallery**, **Health**, **Billing**, **Pix Design**, **Users**, **Settings**, **Reports**, **Finance** dan **Events**. Kebanyakan grup punya permission **View** (membuka halamannya) dan **Manage** (mengubah isinya). Halaman Roles nampilin semuanya di **Permission Reference**.

## Langkah 1: Buka Members {#step-1-open-members}

1. Di dashboard, klik **Settings** di sidebar.
2. Klik **Members**. Tabelnya nampilin semua orang di akun ini, lengkap dengan **Role**, **Booth Access**, **Status** dan tanggal **Last Active**.
3. Klik **Manage Roles** untuk lihat daftar role.

![Settings > Members dengan Settings, Members dan Manage Roles ditandai](/img/docs/steps/tutorials-team-and-roles--members.webp)

## Langkah 2: Pilih role atau mulai dari preset {#step-2-pick-a-role-or-start-one-from-a-preset}

Halaman **Manage Roles** nampilin setiap role dengan **Permissions**, **Booth Scope** dan **Members**-nya.

1. **Create from Preset** bikin salinan **Admin**, **Editor**, **Operator** atau **Viewer** yang bisa kamu ubah. Pilih satu dan klik **Create**. Kalau namanya sudah dipakai, salinannya dapat nomor, misalnya "Viewer 2".
2. **Create Role** mulai dari role kosong (langkah berikutnya).
3. **Edit** di sebuah role mengubah nama, permission dan booth-nya. Perubahannya berlaku untuk semua orang yang pakai role itu.

![Halaman Manage Roles dengan Create from Preset, Create Role dan Edit di baris Admin ditandai](/img/docs/steps/tutorials-team-and-roles--roles.webp)

Role preset di halaman itu sudah bisa langsung dipakai. Bikin salinan kalau kamu mau ngubah salah satunya tapi tetap nyimpen yang asli.

## Langkah 3: Bikin role untuk booth tertentu saja {#step-3-make-a-role-for-some-booths-only}

1. Klik **Create Role** dan ketik **Role Name**, misalnya "Manajer Grand Mall". **Description (optional)** membantu kamu ingat role ini buat apa.
2. Di **Permissions**, centang apa yang boleh dilihat dan dikerjakan orang itu. Untuk partner venue: **View dashboard**, **Revenue and metric cards**, **View booths** dan **View transactions**.
3. Di **Booth Access**, hapus centang **All booths**, terus centang booth yang boleh dibuka role ini.
4. Klik **Create Role**.

![Create Role dengan Role Name, daftar Permissions, All booths di Booth Access dan Create Role ditandai](/img/docs/steps/tutorials-team-and-roles--create-role.webp)

Role yang dibatasi ke booth tertentu cuma lihat booth itu di Dashboard, Booths, Transactions, Gallery dan Health, dan cuma bisa pairing booth itu. Finance tetap untuk seluruh organisasi bagi role yang bisa membukanya, soalnya itu pembukuan seluruh bisnis.

## Langkah 4: Undang orangnya {#step-4-invite-the-person}

1. Balik ke **Settings > Members**, klik **+ Invite**.
2. Ketik **Email Address**-nya.
3. Pilih **Role**.
4. Klik **Send Invitation**. Halamannya bilang "Invitation sent to" diikuti email-nya.

![Invite Team Member dengan + Invite, Email Address, Role dan Send Invitation ditandai](/img/docs/steps/tutorials-team-and-roles--invite.webp)

Undangannya muncul di tab **Pending** lengkap dengan role, siapa yang mengundang dan kapan. Undangan berlaku 7 hari. **Resend** ngirim ulang dengan tambahan 7 hari, **Revoke** membatalkannya.

## Langkah 5: Yang dilakukan orang yang diundang {#step-5-what-the-invited-person-does}

1. Mereka buka email-nya dan klik **Accept Invitation**.
2. Halamannya bertuliskan "Join" dan nama organisasi kamu, plus role mereka.
   - **Baru di Pixture:** mereka isi **Display Name** dan **Password** (minimal 8 karakter, dengan huruf besar, huruf kecil, angka dan karakter khusus), ketik ulang, terus klik **Accept Invitation**.
   - **Sudah punya akun Pixture** dengan email itu: mereka klik **Join Organization**.
3. Mereka masuk ke dashboard kamu, di halaman pertama yang diizinkan role-nya.

<!-- SHOT-NEEDED: dashboard: the Accept Invitation page (Join <organization>, Display Name, Password, Accept Invitation) for a made-up invitee -->

Orang yang tergabung di lebih dari satu organisasi pindah antar-organisasi lewat pemilih organisasi di bagian atas sidebar.

## Langkah 6: Ubah, suspend atau keluarkan member {#step-6-change-suspend-or-remove-a-member}

Di **Settings > Members**, buka menu di ujung baris orang itu:

1. **Change Role** memilih role lain, terus klik **Update Role**.
2. **Suspend** memblokir akses mereka ke akun ini. Barisnya nampilin **Suspended**. **Reactivate** membuka aksesnya lagi dengan role yang sama.
3. **Remove** mengeluarkan mereka dari akun untuk seterusnya. Kalau mau kerja bareng lagi, undang ulang.

<!-- SHOT-NEEDED: dashboard: Settings > Members row menu open on a made-up member, showing Change Role, Suspend and Remove -->

Baris pemilik akun gak punya menu: gak ada yang bisa ngubah, suspend atau ngeluarin pemilik, dan gak ada yang bisa ngubah, suspend atau ngeluarin dirinya sendiri.

## Cek Hasilnya {#check-it-worked}

- Orangnya muncul di **Active Members** dengan role yang kamu kasih dan status **Active**.
- Minta dia login: sidebar cuma nampilin halaman yang dibuka role-nya, dan role yang dibatasi booth cuma nampilin booth-nya di **Booths**.
- Tab **Activity** di **Settings > Members** mencatat undangan dan perubahan member serta role, lengkap dengan siapa dan kapan.

## Tips {#tips}

- **Sembunyikan uang, sisanya tetap.** Di Dashboard, kartu-kartunya ikut empat permission: **Revenue and metric cards**, **Templates Usage card**, **Latest Session card** dan **Health card**. Centang cuma kartu yang boleh dilihat. Kalau keempatnya gak dicentang, dia malah lihat semua kartu, jadi centang minimal satu kalau mau nyembunyiin omzet.
- **Event butuh View events.** Di akun yang punya event, role tanpa **View events** cuma lihat uang Pixture Kiosk dan gak dapat pemilih workspace. Lihat [Pixture Event, Pixture Kiosk dan Overview](../dashboard/views.md).
- **Tambah Admin kedua.** Kalau cuma kamu yang bisa login dan HP atau password kamu hilang, bisnisnya kekunci. Admin bisa ngerjain semuanya kecuali ngatur billing.
- **Ganti PIN menu kalau ada crew yang keluar.** Mengeluarkan member menutup dashboard buat dia, bukan booth-nya. Pasang PIN baru di **Settings > Security**.
- **Satu role per jenis kerjaan, bukan per orang.** "Manajer cabang" untuk tiga manajer lebih gampang dirawat daripada tiga role.

## Kalau Ada Masalah {#troubleshooting}

| Masalah | Kenapa | Solusinya |
|---|---|---|
| Gak ada **+ Invite** atau **Manage Roles** di Members | Role kamu punya **View users** tapi gak punya **Manage users** | Minta pemilik akun nambahin **Manage users** ke role kamu |
| "This email is already a member of this organization." | Email itu sudah terdaftar di akun ini | Cari dia di **Active Members** dan pakai **Change Role** |
| "This invitation has expired" saat dia klik link-nya | Sudah lewat 7 hari | Klik **Resend** di tab **Pending** |
| "This email already has a Pixture password. Log in with it, or use Forgot password to reset it." | Email itu punya password Pixture yang belum dikonfirmasi | Dia reset lewat **Forgot password** di halaman login, terus buka undangannya lagi |
| "You can only give access you have yourself." | Kamu bukan pemilik akun, dan role itu punya permission yang kamu gak punya | Minta pemilik yang ngasih role itu, atau hapus permission-nya |
| "You can only give access to booths you can see yourself." | Role kamu sendiri dibatasi ke booth tertentu, sementara role itu mencakup booth lain atau **All booths** | Batasi role ke booth kamu, atau minta tolong pemilik |
| "This member has access you do not have. Ask the organization owner." | Kamu coba ngubah, suspend atau ngeluarin orang yang role-nya punya akses lebih dari kamu | Minta tolong pemilik |
| "This role has no Marketing Studio switches on, which lets it open every Marketing Studio page." | Role tanpa permission Marketing Studio bisa membuka semua halaman Marketing Studio lewat alamatnya | Centang tab Marketing Studio yang memang boleh, atau minta tolong pemilik |
| Hapus role ditolak dengan "Reassign them first." | Masih ada orang yang pakai role itu | **Change Role** untuk masing-masing, baru hapus |
| Email undangan gak sampai | Masuk spam, atau alamatnya salah ketik | Cek spam. Kalau alamatnya salah, **Revoke** dan undang alamat yang benar |

## Terkait {#related}

- [Settings](../dashboard/settings.md)
- [Pixture Event, Pixture Kiosk dan Overview](../dashboard/views.md)
- [Kunci Booth dan Pakai Menu Operator](./operator-menu.md)
- [Bagi Omzet dan Profit dengan Partner](./share-revenue-and-profit.md)
