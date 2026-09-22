---
title: Release Notes
description: What changed in recent versions of the Pix Desktop App.
---

# Pix Desktop App Release Notes

The Pix Desktop App updates itself in the background and asks to restart when the booth is idle. See [Software Updates](/docs/desktop-app/software-updates). The version a booth is running is shown at the bottom of its operator menu and on the dashboard's Health page.

## 1.1.115 (22 September 2026)

- Apple Silicon Macs run live photos, filters and GIFs natively again. The app now bundles its own arm64 video tools, so Rosetta is no longer needed. Encoding had failed on Apple Silicon without Rosetta since 1.1.111.
- The live photo tile on the Sharing screen stops waiting if encoding fails, instead of spinning.

## 1.1.114 (21 September 2026)

- New **Preview Cards** block for the Capture screen in Pix Design: one square card per template slot, numbered while empty, filled as each shot lands, with the current slot ringed. The row scrolls when a template has many slots.

## 1.1.113 (21 September 2026)

- Live photos compose and encode much faster on the Sharing screen. They had taken 30 to 60 seconds.

## 1.1.112 (21 September 2026)

- The event's GIF overlay is now drawn on session GIFs.
- Tap-to-start works on the first launch after installing.

## 1.1.111 (20 September 2026)

- Bad venue internet no longer loses photos. Network failures retry on a short schedule (up to every 5 minutes) and never count toward the upload give-up limit.
- AI generation runs as a job and the kiosk checks on it for up to 5 minutes, so a slow generation no longer times out. Available to beta accounts.

## 1.1.110 (19 September 2026)

- **AI portrait pickup**: a guest who bought an AI portrait print on their phone gets a 7-character pickup code. Typed into the voucher box on the Payment screen, the booth prints the portrait, shows "Printing your portrait. Take it from the tray." and returns to the start screen. Available to beta accounts.

## 1.1.109 (15 September 2026)

- Before skipping the Payment screen for a free session, the kiosk confirms the price with a fresh check (up to 1.5 seconds), so a booth that was just switched to paid does not give away a session.

## 1.1.107 and 1.1.108 (15 September 2026)

- Stills from a vertically mounted Canon are no longer sideways.
- The crop guide follows the actual camera frame for portrait-mounted cameras.

## 1.1.106 (14 September 2026)

- Every ISO currency displays the way the dashboard shows it, for example MX$150.50 or KWD 1.250. Needed for booths priced in a currency other than rupiah or dollars.
- The tax label follows the currency (IVA for MXN and CLP).
- Coin payments settle correctly on currencies with fractional units.

## 1.1.105 (10 September 2026)

- When Pix Pro, a Day Pass or the free trial ends on a computer, the popup names what ended and offers **Manage devices**, a QR code to your Licenses page on pixture.io. Guests see "Please call the operator."

## 1.1.104 (9 September 2026)

- **Pix Pro per computer.** Pix Starter accounts run watermarked with printing on. On a Pix Pro account, a computer beyond the devices you own is blocked: it refuses to start sessions and shows a notice.
- New **Use a pass on this device** button and a licence badge in the operator menu. The start screen only informs; actions sit behind the PIN.
- Notices on the idle screen 60 and 15 minutes before a Day Pass or trial ends, and a banner when a payment fails.
- Output never downgrades in the middle of a session. If the computer is offline when Pix Pro ends, it turns watermarked rather than blocked.
- **Try it without an account** on the login screen runs the kiosk with built-in frames and screens, watermarked, without cloud sharing.

## 1.1.103 (5 September 2026)

- The operator menu shows a banner when the computer's clock is more than 2 minutes off, since a wrong clock breaks payments and licence checks.

## 1.1.102 (5 September 2026)

- **Multi-Booth group codes**: 8-character codes bought at a central cashier work at any booth in the group. The voucher box accepts 6 to 8 characters, and Central Cashier booths open the Payment screen straight on the code step.
- Event video mode reaches the booth, with the event's intro, outro and soundtrack added to the guest's video, portrait recording, the overlay designed in the dashboard, and a **Keep original clip** option that saves the untouched recording next to the app's videos.
- Template cards on the kiosk use the thumbnail rendered by Pix Design.

## 1.1.101 (28 August 2026)

- Vouchers bought in the online session shop carry the package (Single, Double, Group and additional sessions) in a 7-character code. Older 6-character codes still work and grant one Single session.

## 1.1.100 (28 August 2026)

- New **CAMERA ROTATION** setting (0, 90, 180 or 270) under Camera Settings for cameras mounted sideways or upside down.
- Studio mode: every shot from the pool is shared as a single, and pool shots get live photos.

## 1.1.99 (28 August 2026)

- Studio mode: **Done** appears only once the template's minimum number of shots is reached, and the last-shot card opens a session gallery where a shot can be removed.
- The built-in buttons on the Review screen size to their blocks, and the Retake button and photo counter can be switched off in Pix Design.

## 1.1.98 (28 August 2026)

- **Studio mode.** The guest takes free shots, then assigns them to the template's slots on the Assign photos screen. The shoot ends on time, on a shot count or when the guest taps Done, with a cap of 40 shots. Each shot gets a Next or Retake review.
- A remote shutter (clicker, foot switch or F13 key) takes the shot in Studio mode.

## 1.1.97 (27 August 2026)

- The package picker on the payment screen now uses its full width, so booths with a single package no longer get a cramped "Additional sessions" row.

## 1.1.96 (27 August 2026)

- **Print format**: the payment screen shows the number of pieces guests take home when Booth Pricing is set to 2 inch cut or triple strip. What is printed does not change.
- The total line on the payment screen now counts prints correctly for multi-session purchases.

## 1.1.95 (25 August 2026)

- **Tax and fees** from Booth Pricing are shown on the payment screen as separate lines, with the subtotal sent to the payment gateway.
- The QR payment popup can be branded from the UI Editor, and the print mockup follows the print format, up to 12 prints.
- Operator settings pages use a consistent slider control.

## 1.1.94 (24 August 2026)

- Live photos are ready in about a second on the Sharing screen instead of about eight.
- Live Photos now carry the guest's chosen filter, as the composite and GIF already did.
- Live Photos match the mirror orientation of the prints on webcam booths.
- Template cards on the kiosk draw the card shadow set in Pix Design.

## Earlier

Older versions are listed in the dashboard's Health page per booth. If a booth is more than a few versions behind, leave it on the start screen with internet for a few minutes and it will update itself.
