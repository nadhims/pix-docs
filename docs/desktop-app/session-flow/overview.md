---
sidebar_position: 1
title: Photo Session Flow Overview
description: The nine screens a guest can see during a photo session on the Pix Desktop App, which ones are optional, and where each is switched on.
tags: [desktop-app, photo-session, flow]
---

# Photo Session Flow Overview

A photo session is the guest's whole journey through the booth, from the Start screen to the QR code and print. This page lists every screen in the order the booth shows them, says which ones are optional, and points to where each is switched on or designed. The screens themselves are designed in the Pix Design UI Editor; the booth only draws what the design says.

## The Screens in Order

1. **Home (Start screen).** The idle screen with your branding. A tap anywhere, a start button, a remote key or a coin system starts the session. See [Home Screen](./home-screen.md).

2. **Tutorial.** Optional. A short how-it-works screen with Next and Skip. Turn it on with the **Enabled in session flow** checkbox on the tutorial page in the UI Editor.

3. **Payment.** Shown when **Payment on this booth** is on under Booth Pricing. It is skipped when the booth confirms the session is free, and always skipped on a Pix Starter (watermarked) computer. Sub-steps: QR/QRIS, Voucher, Coin, Card, Payment Success. See [Payment](./payment.md).

4. **Template Selection.** The guest picks a print design from the templates assigned to the booth. While an event pins Video or 360 Slow-mo, this screen is replaced by Video Capture followed by Video Done, and Done returns to Home. See [Template Selection](./template-selection.md) and [Event Video Modes](../event-video-modes.md).

5. **Capture.** The countdown and the shots, one per slot in the chosen template. Each shot is followed by a per-shot Review, and that is where the guest scales, mirrors or moves a photo. See [Capture Modes](./capture-modes.md) and [Review and Adjust](./review-and-adjust.md).

6. **Pool Assignment.** Studio sessions only. The guest takes a pool of shots first and then drops their favourites into the template slots. See [Studio Sessions](../studio-sessions.md).

7. **AI.** Only on accounts with Pix AI (available to beta accounts). The guest picks an AI style for a portrait.

8. **Filter.** Optional. A strip of filter previews; the chosen look goes onto the print, the GIF and the live photo. Turn it on with **Enabled in session flow** on the Filter page. See [Filters](./filters.md).

9. **Sharing.** The QR code to the share page, the print, the GIF and live photo previews, and extra prints. **Done** or the page timer returns the booth to Home. See [Sharing](./sharing.md).

There is no separate "Thank you" screen and no separate "Adjust" screen. Sharing is the last screen, and adjusting happens on Review.

## Where Each Screen Is Configured

| Screen | Switched on by | Designed in |
|---|---|---|
| Home | Always on | UI Editor, **Start Screen** tab |
| Tutorial | **Enabled in session flow** on the page | UI Editor, **Custom Screen** tab |
| Payment | **Payment on this booth** (Booth Pricing) | UI Editor, **Payment Screen** tab and its sub-screens |
| Template Selection | Always on for photo sessions | UI Editor, **Templates** tab |
| Capture and Review | Always on | UI Editor, **Capture** and **Review** tabs |
| Pool Assignment | Studio mode UI project | UI Editor, **Assign photos** tab |
| Filter | **Enabled in session flow** on the page | UI Editor, **Filter** tab |
| Sharing | Always on | UI Editor, **Sharing** tab |

Page settings such as the Capture **Session Time**, the Payment **Timeout** values, the Review **Advanced mode** and each page's idle timer sit in the right-hand rail of the UI Editor, under the page background. Nothing about the flow is set on the booth itself; the booth's own pages cover only camera, printer, hardware payments and the upload queue. See [UI Editor](../../dashboard/pix-design/ui-editor.md).

## Idle Timers

Every page has an idle timer in its page settings so a guest who walks away does not leave the booth stuck. On the Payment screen the defaults are 120 seconds back to Start, 60 seconds from a sub-step back to the payment methods, and a 3 second dwell on Payment Success. On Sharing the page timer returns to Home. Right after any screen change the booth ignores taps for a moment, so a guest tapping quickly cannot skip through a page by accident.

## Related

- [Home Screen](./home-screen.md)
- [UI Editor](../../dashboard/pix-design/ui-editor.md)
- [Studio Sessions](../studio-sessions.md)
- [Event Video Modes](../event-video-modes.md)
