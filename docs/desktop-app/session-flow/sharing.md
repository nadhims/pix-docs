---
sidebar_position: 8
title: Sharing
description: The last screen of a photo session -- print, QR code to the customer's photos, extra prints, and what each plan delivers.
tags: [desktop-app, session-flow, sharing, qr, print]
---

# Sharing

After the filter step the kiosk composes the final image, prints it if printing is enabled, and shows the Sharing screen.

## What the Customer Gets

- **Print** -- the composite goes to the printer automatically. Copies follow Booth Pricing and the kiosk's printer settings.
- **QR code** -- scanning it opens a personal page with everything from the photo session: the composite, individual **singles**, the animated **GIF**, and the **Live Photo** (a short MP4), depending on which outputs the booth has enabled in **Booths > [booth] > Settings**.
- **Extra prints** -- if priced in Booth Pricing, a button lets the customer buy more copies on the spot, paid the same way as the photo session.

## The Microsite

The QR leads to a branded page (see [Marketing Studio > Microsite](../../dashboard/marketing-studio.md)) where customers download their files or share them on. It goes live as soon as the booth has uploaded the photo session; on slow venue Wi-Fi the page says the photos are on their way and fills in when the upload lands.

## Plans

- **Pix Pro** and **Day Pass** booths deliver clean soft files.
- **Starter** booths deliver the same soft files with a small Pix watermark.

## Screen Timeout

The Sharing screen returns to the start screen after a page timer you set in the UI Editor, and the customer can tap **Done** at any time.

## Design

Everything on this screen -- the composite preview or showcase loop, the QR block, the print button, extra-prints button, and any text -- is arranged in the [UI Editor](../../dashboard/pix-design/ui-editor.md).

:::tip Show the QR big
Customers scan from arm's length while holding their print. A large QR block near eye level gets scanned; a small one in a corner gets missed.
:::
