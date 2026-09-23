---
sidebar_position: 2
title: Home Screen
description: The idle Start screen of the booth, everything that can start a photo session, the tutorial screen, the operator tap zone and the notices the booth shows there.
tags: [desktop-app, photo-session, home-screen, branding]
---

# Home Screen

The Home screen is what the booth shows while it waits for the next guest: your branding, a start button or "tap to start" prompt, and, when needed, a notice from the booth. This page explains what starts a photo session, what the optional Tutorial screen does, where the operator's hidden tap zone is, and which notices can appear on the idle screen.

## Designing the Screen

The Home screen is the **Start Screen** tab of the booth's UI project in the Pix Design UI Editor. Set a **Page Background** (solid colour, image, gradient or, on this page only, a video), then add your logo, text and a **Start Button** block. Save, and the booth picks the change up on its next check-in, usually within seconds, with no restart. See [UI Editor](../../dashboard/pix-design/ui-editor.md).

A large, centred start prompt works best in a kiosk; guests should understand in one glance that the screen is for them.

## What Starts a Session

A session leaves the Home screen only through one of these:

- **Touch anywhere** on the screen, when that trigger is on in the Start Screen's session triggers.
- **A Start Button block**, or any button or click area in your design whose action is to start the session. These work regardless of the touch-anywhere setting.
- **The F13 key**, when the F13 trigger is on. Coin systems press this key when the guest has paid. See [Hardware Payments](../hardware-payments.md).
- **Navigation keys** (Space, S, Page Up, Page Down), when the navigation key trigger is on. Useful for a wired remote or foot switch.
- **The local Hardware API** `/start` call from a bridge box.

The triggers are checkboxes on the Start Screen page in the UI Editor. Tap-to-start works from the very first launch after installation.

## The Tutorial Screen

If the UI project has a tutorial page with **Enabled in session flow** ticked, it appears right after Home. It is a **Custom Screen** in the UI Editor: put your instructions on it and give it a Next button. The guest taps Next or Skip to move on.

## The Operator Tap Zone

The top-right corner of every guest screen hides a 120 by 120 pixel zone with a faint lock icon. Two taps there within three seconds open the operator menu, after the **Enter Admin PIN** pad if the booth has a PIN. Guests do not see anything change if they brush past it once. See [Operator Menu](../admin-panel.md).

## Notices on the Idle Screen

The Home screen is also where the booth tells you about its licence, without letting a guest change anything:

- **60 minutes and 15 minutes before a Day Pass or the free trial ends**, a notice appears on the idle screen so you can put a new pass on the computer in time.
- **When the licence has ended**, a popup names what ended and offers a **Manage devices** QR code to the Licenses page. Guests see "Please call the operator."
- **When a card payment for Pix Pro failed**, a payment-failed banner appears.
- **When the computer is blocked** (a Pix Pro account with all its device places in use), the booth refuses to start sessions and shows a notice instead.

These prompts are information only. Every action, including **Use a pass on this device**, sits behind the operator menu and its PIN. See [Licence on the Booth](../licence-on-the-booth.md).

## Tap Guard After a Screen Change

For a moment after the Home screen appears, and after the Tutorial appears, the booth ignores starts and Next or Skip taps. This stops a guest who is tapping rapidly from sailing through Home and the Tutorial into the session by accident. It is not configurable and you will not normally notice it.

## Related

- [Photo Session Flow Overview](./overview.md)
- [UI Editor](../../dashboard/pix-design/ui-editor.md)
- [Licence on the Booth](../licence-on-the-booth.md)
- [Hardware Payments](../hardware-payments.md)
