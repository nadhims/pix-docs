---
sidebar_position: 6
title: Studio Sessions
description: How a Studio mode photo session runs on the booth, from the timed pool of shots to assigning photos to the template and sharing every shot.
tags: [desktop-app, studio-mode, photo-session]
---

# Studio Sessions

Studio mode turns the booth into a small photo studio: instead of one shot per slot, the guest takes a pool of shots for as long as the session allows, then picks which ones go into the print. This page describes the guest's journey in a Studio session, how a session ends, how remotes and keys work, and what the guest gets at the end. Studio mode needs Pix Desktop App 1.1.98 or newer.

## What Studio Mode Is

Studio is a booth mode of a UI project. You choose it when you create the project in Pix Design (**Pix Design > UI Editor > New UI Project > Booth mode > Studio**) and assign that project to the booth on its **UI Project** tab. The dashboard shows "Booth mode: Studio" and warns if the booth's app is older than 1.1.98. The step-by-step setup is in [Studio Mode](../tutorials/studio-mode.md).

The session order is **Templates > Capture (timed pool) > Assign photos > Filter > Sharing**. Choosing the template first tells the booth how many photos the guest needs at minimum.

## The Guest's Journey

1. **Templates.** The guest picks a design as usual.
2. **Capture.** The live view shows a ring-and-disc **shutter button**, a **Last Shot** card, a **Photo Counter** ("3 of 6") and, if the design has one, the pool timer. Every press takes a shot; after each shot the per-shot Review offers **Next** (keep) and **Retake** (drop). A remote clicker or foot switch plugged into the booth takes the shot too. Tapping the **Last Shot** card opens a gallery of the whole pool with a large preview and a **Remove** button on each photo.
3. **Assign photos.** The design appears with its slots, and the pool of kept shots beside it. The guest taps a slot, then a photo. Used photos dim and show the number of the slot they sit in. Tapping a placed photo lets the guest scale, mirror and move it in the slot, or **Replace** it with another shot. **Take more** returns to Capture with the pool and the remaining time intact.
4. **Filter** and **Sharing** run as in a normal session.

## How a Session Ends

Capture ends when any of these happens first:

- The **Session length** runs out (0 means no time limit).
- The pool reaches **Max photos**.
- The guest taps **Done**.

Two rules sit on top:

- **Minimum**: the pool cannot be closed below the number of slots in the chosen design. Done only appears once that minimum is reached; before that it reads "Take N more", and the timer waits rather than ending the session short.
- **Hard cap**: no pool holds more than 40 shots, whatever Max photos says.

Session length and Max photos are page settings on the Capture page of the Studio UI project.

## Remote Shutters and Keys

The shutter button on screen is the default trigger, and the Capture page's **Camera trigger** can also be **Shutter button** or **Camera shutter** (the Canon body's own button, for a photographer-run studio). Keys follow the same session triggers as the Home screen: Space, S, Page Up and Page Down when the navigation key trigger is on, F13 when the F13 trigger is on. Keys are ignored while the pool gallery popup is open.

## What the Guest Gets

- The composed print, GIF and live photo, exactly as in a photobooth session. The live photo is built per shot, so each slot animates from its own take.
- **Every kept shot in the pool is shared as a single** on the share page, in capture order, not only the ones placed in the design. A guest who took 20 shots and printed 4 still gets all 20.

## Designing the Screens

The Capture and Assign photos pages of a Studio project are designed in the UI Editor like any other page. On Capture the shutter button's shape and centre disc, the Last Shot card, the counter and the timer are blocks you place. On Assign photos you can set the highlight colour and width of the selected slot, the ring on the selected photo, how far used photos dim, and whether the slot number badges show. See [UI Editor](../dashboard/pix-design/ui-editor.md).

:::tip
Studio suits a staffed corner at an event: a photographer with a clicker, a guest who wants choice, and a print they picked themselves.
:::

## Related

- [Studio Mode tutorial](../tutorials/studio-mode.md)
- [Review and Adjust](./session-flow/review-and-adjust.md)
- [Capture Modes](./session-flow/capture-modes.md)
- [UI Editor](../dashboard/pix-design/ui-editor.md)
