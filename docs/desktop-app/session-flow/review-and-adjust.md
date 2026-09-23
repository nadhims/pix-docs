---
sidebar_position: 6
title: Review and Adjust
description: The per-shot Review screen, how guests scale, mirror and move a photo within its slot, and the Advanced review mode in Pix Design.
tags: [desktop-app, photo-session, review, adjust]
---

# Review and Adjust

After every shot the booth shows the photo and asks the guest to keep it or take it again. Since version 1.1.92 this Review screen is also where a guest adjusts how the photo sits in its slot; there is no separate Adjust screen any more. This page explains the Review controls, the per-photo adjust, adjusting from the composed preview, auto-advance, and how to design the screen yourself with Advanced mode.

## Next or Retake

The Review screen shows the shot just taken with two controls:

- **Next** keeps the photo and moves to the next slot (or on to the next screen after the last slot).
- **Retake** drops the photo and starts the countdown for the same slot again.

A **Photo Counter** shows which shot this is, for example "2 of 4". Both the Retake button and the counter can be hidden in the Review settings in Pix Design; a design that hides Retake gives guests a faster, no-decisions session. When the Session Time reaches zero, Retake disappears on its own.

## Adjusting a Photo

Guests can fix a crop on the spot instead of retaking:

1. Tap the photo. A coral ring shows it is selected.
2. Drag the **scale** pill that appears under the photo to zoom in or out.
3. Tap **Mirror** to flip that photo only. Other slots are not affected.
4. Drag the photo to move the crop. A mirrored photo moves with the finger, not against it.
5. Tap **Next** to keep the adjustment.

The zoom, position and mirror are stored per slot and carried into every output: the print, the GIF and the live photo all show the photo exactly as adjusted. Tapping the checkerboard background deselects the photo.

## Adjusting From the Composed Preview

Where the design shows the **Composed Preview** block, the photos already laid into the template, the guest can tap any slot to adjust that photo with the same scale, mirror and drag controls. This replaces the old "Adjust your photos" screen, which is gone along with drag-to-swap. If a guest wants two photos the other way round, the way to do it is Retake.

## Auto-advance

Review does not wait forever. With auto-advance on, a countdown runs (12 seconds by default) and the counter shows "Auto-advancing in Ns"; when it reaches zero the booth keeps the photo and moves on, exactly as if the guest had tapped Next. With auto-advance off the guest must tap Next or Retake. Both are set on the Capture page in the UI Editor.

## Designing the Review Screen

By default the booth draws a fixed Review layout that matches the Capture page background. To design it yourself:

1. Open the UI project in the Pix Design UI Editor and go to the **Review** tab.
2. In the right rail, under **Review Settings**, turn on **Advanced mode**.
3. The tab becomes a real canvas. Place a **Review Photo** block (with a **Camera Frame** ratio so the shot fits without cropping), a **Retake Button**, a **Next Button** and a **Photo Counter**. You can add text, images and click areas whose action is Next or Retake.
4. Give the page its own background if you want one; it inherits the Capture background until you change it.
5. Click **Save Changes**.

The first time you turn Advanced mode on, the editor seeds the photo, Retake, Next and counter blocks where the fixed layout puts them, so you start from something that already works. Turning it off returns to the fixed layout. See [UI Editor](../../dashboard/pix-design/ui-editor.md).

## In Studio Sessions

Review works the same way in a Studio pool session: Next keeps the shot in the pool, Retake drops it. The scale, mirror and drag adjust of a placed photo then happens on the Assign photos screen. See [Studio Sessions](../studio-sessions.md).

## Related

- [Capture Modes](./capture-modes.md)
- [Filters](./filters.md)
- [UI Editor](../../dashboard/pix-design/ui-editor.md)
- [Studio Sessions](../studio-sessions.md)
