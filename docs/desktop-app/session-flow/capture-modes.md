---
sidebar_position: 5
title: Capture Modes
description: How the booth takes the photos, what can trigger a shot, the Session Time countdown, the Preview Cards block, and the outputs a session produces.
tags: [desktop-app, photo-session, capture, gif, live-photo, composite]
---

# Capture Modes

The Capture screen is where the photos are taken: a countdown, a shot for each slot in the chosen template, and a quick review after each one. This page explains what triggers a shot, how the countdown and the Session Time work, what the Preview Cards block shows, and which outputs the booth makes from the session. Capture settings are page settings on the **Capture** tab of the UI Editor, not on the booth.

## The Countdown

When a shot is triggered, the booth counts down on the live view and fires the camera. The countdown length and how it looks are set on the Capture page in the UI Editor. If the camera is still starting, the booth waits on "Camera is warming up" rather than firing blind; after 30 seconds without a camera it shows "Camera not responding / Returning to home..." and ends the session. If no frame arrives within 15 seconds of a shot, the guest sees "Hmm, the camera didn't respond — let's try again" and the booth retries that slot.

## What Triggers a Shot

The **Camera trigger** dropdown on the Capture page (also on the Live View block panel) decides how the first shot starts:

- **Tap**: the guest taps the screen. The default for a photobooth.
- **Shutter button**: an on-screen shutter button in your design.
- **Camera shutter**: the physical shutter button on a Canon body, for a photographer-run booth.
- **Auto**: every slot starts on its own. Photobooth mode only.

**Tap once, the booth runs the rest.** On a multi-slot template only the first shot waits for the trigger; slots 2 onwards start their own countdown after each review, unless you turn that off in the trigger panel. A remote plugged into the booth (Space, S, Page Up, Page Down or F13) also takes a shot when the matching key trigger is on.

## Session Time

The Capture page has a **Session Time** setting: a countdown for the whole session that starts at the first shot, with or without a timer on screen. When it runs out the booth does what the setting says, for instance moving on with the photos it has. Add a **Session Timer** block if you want the guest to see it; the block only displays the time, always as MM:SS, and never changes the limit. When the time reaches zero the Retake button disappears from Review.

## Preview Cards

The **Preview Cards** block (version 1.1.114 or newer) shows one square card per template slot, numbered while empty and filled as each shot lands, with the current slot ringed. It scrolls when a design has many slots. Guests can see at a glance how many shots are left.

## Per-shot Review

After each shot the booth shows the photo with **Next** and **Retake**. This is also where the guest scales, mirrors or moves the photo within its slot. See [Review and Adjust](./review-and-adjust.md).

## What a Session Produces

One session makes up to four outputs. Which ones are made is set per booth under **Booths > booth > Settings > Output Settings**:

| Output | Switch | What it is |
|---|---|---|
| Composite | **Print Output** (print) and always shared | The photos laid into the template, printed and shared |
| Singles | **Singles Upload** | Each shot as its own photo on the share page |
| GIF | **GIF Upload** | An animation that cycles through the shots, with the event's GIF overlay when one is set |
| Live photo | **Live Photo Upload** | A short clip built from the live view around each shot, laid into the template |

The number of shots is the template's slot count. The chosen filter is applied to the composite, the GIF and the live photo alike, and any per-photo adjust (zoom, pan, mirror) carries into all of them, so every output matches the print.

## Camera Frame Ratio

The **Live View** and **Review Photo** blocks have a **Camera Frame** ratio option (16:9, 9:16, 4:3, 3:4, 3:2, 2:3 or 1:1). Pick the ratio that matches your camera and the block fits the whole camera frame inside itself without cropping. Leave it unset and the block fills itself edge to edge with a 16:9 centre crop, as older designs did.

## Recorded Motion

**RECORDED MOTION (EXPERIMENTAL)** on the booth's Camera Settings page builds the live photo from a recording of the live view, including hand sign effects. With it off, which is the default, live photos are still made from the live view frames around each shot, just without the effects. See [Camera Settings](../camera-setup/camera-settings.md).

## Related

- [Review and Adjust](./review-and-adjust.md)
- [Camera Settings](../camera-setup/camera-settings.md)
- [UI Editor](../../dashboard/pix-design/ui-editor.md)
- [Studio Sessions](../studio-sessions.md)
