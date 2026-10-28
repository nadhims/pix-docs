---
sidebar_position: 6
title: Review and Adjust
description: The per-shot Review screen, how customers scale, mirror and move a photo within its slot, the Adjust your photos screen, and the Advanced review mode in Pix Design.
tags: [desktop-app, photo-session, review, adjust]
---

# Review and Adjust

After every shot the booth shows the photo and asks the customer to keep it or take it again, and the customer can fix how the photo sits in its slot right there. After the last shot, Photo and Notes sessions can also show an **Adjust your photos** screen with every photo at once (Pixture Photobooth 1.2.6 or newer). This page explains the Review controls, the per-photo adjust, the Adjust screen, auto-advance, and how to design the Review screen yourself with Advanced mode.

## Next or Retake

The Review screen shows the shot just taken with two controls:

- **Next** keeps the photo and moves to the next slot (or on to the next screen after the last slot).
- **Retake** drops the photo and starts the countdown for the same slot again.

A **Photo Counter** shows which shot this is, for example "2 of 4". Both the Retake button and the counter can be hidden in the Review settings in Pix Design; a design that hides Retake gives customers a faster, no-decisions session. When the Session Time reaches zero, Retake disappears on its own.

## Adjusting a Photo

Customers can fix a crop on the spot instead of retaking:

1. Tap the photo. A coral ring shows it is selected.
2. Drag the **scale** pill that appears under the photo to zoom in or out.
3. Tap **Mirror** to flip the photos. Mirror flips every photo of the session, the way the print shows them.
4. Drag the photo to move the crop. A mirrored photo moves with the finger, not against it.
5. Tap **Next** to keep the adjustment.

The zoom, position and mirror are stored per slot and carried into every output: the print, the GIF and the live photo all show the photo exactly as adjusted. Tapping the checkerboard background deselects the photo.

## Adjust Your Photos

After the last shot of a Photo or Notes session, the booth shows "Adjust your photos": the template with all the customer's photos in it. The customer can:

- Drag a photo to move it, and pinch to zoom.
- Drag one photo onto another to swap them.
- Tap **Mirror** to flip every photo.
- Tap **Next** to go on to the filter. With no tap, the booth moves on by itself after 60 seconds.

A short finger animation shows each move the first time. Studio sessions skip this screen; their customers arrange photos on Assign photos.

The screen is the **Adjust** page of the UI project in Pix Design. It is on by default in new projects. A project your booths already run keeps it off until you turn on **Enabled in session flow** on the Adjust tab and save. Event Photo and Notes sessions always show the event's own version of it. See [UI Editor](../../dashboard/pix-design/ui-editor.md).

## Auto-advance

Review does not wait forever. With auto-advance on, a countdown runs (15 seconds by default) and the Next button shows the time left, for example "Next (15s)"; when it reaches zero the booth keeps the photo and moves on, exactly as if the customer had tapped Next. With auto-advance off the customer must tap Next or Retake. Both are set under **Review Settings** (**Auto-advance after review** and **Duration**) in the UI Editor.

## Designing the Review Screen

By default the booth draws a fixed Review layout that matches the Capture page background. To design it yourself:

1. Open the UI project in the Pix Design UI Editor and go to the **Review** tab.
2. In the right rail, under **Review Settings**, turn on **Advanced mode**.
3. The tab becomes a real canvas. Place a **Review Photo** block (with a **Camera Frame** ratio so the shot fits without cropping), a **Retake Button**, a **Next Button** and a **Photo Counter**. You can add text, images and click areas whose action is Next or Retake. A new button or click area on this page starts as **Next**: keep at least one element set to **Retake**, or customers cannot take a photo again.
4. Give the page its own background if you want one; it inherits the Capture background until you change it.
5. Click **Save**.

The first time you turn Advanced mode on, the editor seeds the photo, Retake, Next and counter blocks where the fixed layout puts them, so you start from something that already works. Turning it off returns to the fixed layout. See [UI Editor](../../dashboard/pix-design/ui-editor.md).

## In Studio Sessions

Review works the same way in a Studio pool session: Next keeps the shot in the pool, Retake drops it. The scale, mirror and drag adjust of a placed photo then happens on the Assign photos screen. See [Studio Sessions](../studio-sessions.md).

## Related

- [Capture Modes](./capture-modes.md)
- [Filters](./filters.md)
- [UI Editor](../../dashboard/pix-design/ui-editor.md)
- [Studio Sessions](../studio-sessions.md)
