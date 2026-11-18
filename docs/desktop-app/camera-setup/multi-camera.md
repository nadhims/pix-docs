---
sidebar_position: 4
title: Multi Camera
description: Put two or more cameras on one Kiosk booth and let the customer choose the camera before every photo.
tags: [desktop-app, camera, multi-camera, pix-pro]
---

# Multi Camera

By the end of this page one booth has two or more cameras, for example one in front and one high up, and the customer chooses which camera takes each photo.

## What You Need

- A **Kiosk** booth running on a computer (Mac or Windows), with the Pixture Photobooth app 1.2.41 or newer.
- **Pix Pro** on that computer.
- Two or more cameras plugged into the same computer. Any mix works: camera bodies (Canon, Sony, Fujifilm), webcams and capture cards. A booth can use only one Nikon.

One camera is awake at a time. When the customer chooses another camera, the booth switches to it before the countdown.

## Step 1: Switch It On in the Dashboard

1. Open **Booths**, pick the booth, and go to its **Settings** tab.
2. On the **Multi camera** card, turn the switch on. Two cameras appear: **Cam A** and **Cam B**.
3. Rename them to what the customer should read, such as "Front" and "High angle".
4. Optional: give each camera a **Picture** (PNG, JPG or WebP, up to 5 MB) that shows the customer what the angle looks like. A camera without a picture shows its letter (A, B, C).
5. Use **+ Add camera** for more (up to 6), the arrows to change the order, and the switch on a row to hide a camera without removing it.
6. Click **Save**. The card needs at least two cameras.

Turning the main switch off keeps your list, so you can turn it back on later.

The booth picks up the list the next time it checks its prices while online, usually when it returns to the Home screen.

## Step 2: Choose a Camera for Each Row on the Booth

1. On the booth, open the operator menu (two taps on the top-right corner) and tap **Camera Settings**.
2. Under **CAMERA ANGLES** there is one row per camera from the dashboard. On each row, open **Choose a camera** and pick the camera that should take that angle.
3. Tap a row to see its camera in the preview. Zoom, rotation and exposure are saved for each camera on its own, so set them row by row.

The first row is the booth's default camera: the one that is on at the Home screen and at the start of every session.

A row marked **not connected** means its camera is unplugged or switched off. The booth's startup check shows a line for each camera too, for example "Angle 1: Front".

### Two Cameras of the Same Model

Two bodies of the same model, such as two Canon EOS R50s, show the same name in every row. They are still two cameras: the booth tells Canon bodies apart by the USB port each one is plugged into, and a camera already on one row is not offered on another ("That camera is on another angle.").

- Tap each row and check the preview shows the right body.
- Keep each camera on its own USB port. Swapping the cables swaps the angles, so label the cables or the ports.

## What the Customer Sees

Before every photo, **Choose your angle** appears at the bottom of the capture screen with one card per camera. The customer taps a card, the live view changes to that camera, and they start the photo.

- The choice stays for the next photo, so a customer who never touches it takes every photo on the same camera.
- With Multi camera on, each photo waits for the customer to start it. Photos do not count down by themselves.
- There is no fixed camera per photo. A template cannot take photos 1 and 2 on one camera and 3 and 4 on another: the customer taps the angle before each photo.
- The cards use your [Brand](/docs/dashboard/pix-design/brand) colour and font.
- If a camera does not open, the booth says "That camera is not ready. Pick another." and goes back to the camera before.

Only cameras that have a row, a camera chosen and are connected are offered. With fewer than two, the booth shows no choice and takes the session on the camera it has.

## If a Camera Stops After One Photo

If the booth shows "Hmm, the camera didn't respond" when the customer moves to another camera, it could not wake that camera again.

1. Check the camera's own screen. A camera on a dummy battery (DC coupler) can stop on a battery message that waits for **OK**, and the booth cannot get past it. Use the camera's own battery, or the maker's own DC coupler, and test again.
2. Set the camera's auto power off to **Disable**.
3. Plug each camera straight into the computer, not a hub, and close EOS Utility or any other camera software.

## Where It Does Not Show

- Event booths, and the app on phones and tablets.
- Video, GIF and live photo sessions, AI, Studio and Scratch modes.
- A booth whose capture screen is not designed in Pix Design.

In all of these the booth uses its default camera, as before.

## Related

- [Camera Settings](./camera-settings.md)
- [Webcam Fallback](./webcam-fallback.md)
- [Booth Management](/docs/dashboard/booth-management)
