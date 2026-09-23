---
sidebar_position: 8
title: Sharing
description: The last screen of a photo session, with the QR code to the share page, the print, the GIF and live photo, extra prints, the consent prompt and what each plan delivers.
tags: [desktop-app, photo-session, sharing, qr, print]
---

# Sharing

After the filter step the booth composes the final image, sends it to the printer, uploads the outputs and shows the Sharing screen. This page explains what the guest sees and gets, how extra prints and the consent prompt work, what the screen shows when the internet is down, how the watermark applies, and how the session ends.

## What the Guest Gets

- **A print.** The composite goes to the printer as soon as the screen opens. Copies follow **COPIES PER SESSION** in the booth's Printer Settings and the prints included in the package. If the printer fails after 3 attempts the guest sees "Print issue — photo saved. Staff: reprint from Admin Panel → Print History". See [Printer Setup](../printer-setup.md).
- **A QR code.** Scanning it opens the guest's own share page with everything the booth is set to make: the composite, the **singles**, the animated **GIF** and the **live photo** clip. Which outputs are made is set under **Booths > booth > Settings > Output Settings**.
- **Extra prints.** If an **Extra print price** is set under Booth Pricing, a button lets the guest buy more copies on the spot, paid the same way as the session.

## What the Screen Shows

The preview block on Sharing can run a **Showcase loop** that cycles the composite, the GIF and the live photo. With the loop off the preview shows the composite, then the live photo once it is ready. The GIF preview plays the real GIF that is uploaded, including the event's GIF overlay when one is set, and letterbox bands around a preview match the true edge colour of the design. The live photo is composed and encoded on the booth in a few seconds, so the tile fills in while the guest is still looking; if encoding fails the tile stops waiting instead of spinning.

## The Share Page

The QR leads to a branded page that you design under **Pix Design > Microsite**: colours, header, buttons, a promo banner and menu links. Guests download their files or share them on from there. The page goes live as soon as the booth has uploaded the session. On accounts with the AI portrait shop (available to beta accounts) the page also offers an AI portrait, with a pickup code the guest types into the booth for a print.

## When the Internet Is Down

Uploads run in the background and retry on their own. The QR still shows, and if nothing has uploaded after 15 seconds the screen tells the guest "No connection — your photos will appear at this link once the booth reconnects." The link is valid straight away; the photos fill in once the queue drains. See [Offline Mode](../offline-mode.md).

## The Consent Prompt

With **Marketing consent** on in Marketing Studio, the Sharing screen asks the guest "May we feature your photos?" with **Yes, I agree** and **No thanks**. Only photos with a yes are marked as consented in your Gallery; the guest gets their photos either way. The consent text is yours to edit in Marketing Studio.

## Watermark

A computer on Pix Pro, a Day Pass or the free trial delivers clean prints and files. A computer on Pix Starter, or one whose licence has run out, delivers the same prints, photos, GIFs and videos with the Pixture watermark. An unpaired booth running "Try it without an account" prints but has no QR code and no upload. See [Licence on the Booth](../licence-on-the-booth.md).

## Ending the Session

The guest taps **Done**, or the page timer set in the Sharing page settings runs out. Either way the booth returns to the Home screen and any upload still in progress carries on in the background.

## Design

The preview or showcase loop, the **QR Code** block, the print and extra prints buttons, the consent prompt and any text are arranged on the **Sharing** tab of the UI Editor. Keep the QR large and near eye level; guests scan it from arm's length while holding their print.

## Related

- [Printer Setup](../printer-setup.md)
- [Offline Mode](../offline-mode.md)
- [Booth Pricing](../../dashboard/booth-pricing.md)
- [UI Editor](../../dashboard/pix-design/ui-editor.md)
