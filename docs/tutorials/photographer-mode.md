---
sidebar_position: 5
title: Shoot as a Roaming Photographer
description: Turn on Photographer mode for an event, pick the print template and the computers that shoot, then shoot each group with your camera's own shutter while the booth fills the template, saves the group and shows its QR.
tags: [tutorials, events, photographer, roaming, camera]
---

# Shoot as a Roaming Photographer

In this tutorial you will set up an event so a photographer shoots each group with a real camera, while the booth computer lays every photo into your print template, saves the group as one session and shows the guests their QR code and print. Allow about 15 minutes in the dashboard and 10 minutes at the booth.

In **Photographer** mode nobody stands in front of a screen. The photographer looks through the camera and presses its own shutter. The booth computer shows the template large, lights the slot that the next photo goes into, and after the last slot it composes the print. Every group gets its own print and QR, and the session is free for the guests.

## When to Use It

- **A wedding or a gala with a photographer on your team.** The photographer gathers each table or family group in front of the backdrop, shoots three photos, and the group walks away with a strip and a QR.
- **A corporate event that wants a "real" photographer look.** A camera in the photographer's hands gives framing and angles a self-service booth cannot.
- **An event booth with a photographer corner.** One computer runs Photographer for the photographer while the other computers run the start screen for guests at the same event.

Not for guests who want to take their own photos: use Photo or Studio on the start screen. If you want to carry the booth itself to the guests and let them see the live view, use [Mingle](./mingle-mode.md).

## Before You Start

- **An event**, and a computer paired to it with **Pix Pro** or an **Event Pass**. Every computer at an event needs one. See [Run an Event](./run-an-event.md).
- **Pixture Photobooth 1.2.29 or newer** on the computer. An older one does not shoot the Photographer template.
- **A camera body on USB**: Canon, Sony, Nikon or Fujifilm. The camera stays connected to the booth computer by its cable. A webcam works too (see Step 4), but this mode is made for a real camera.
- **A print template** with at least one photo slot. A three-slot strip is a good start.
- A printer, if you want each group's print on the spot.

## Prepare

- **Pick the template with the photographer in mind.** Every slot is one press of the shutter. Three or four slots keep a group moving; eight slots make guests wait.
- **Match the slot shape to how the photographer holds the camera.** The check screen shows each photo cropped the way its slot crops it. Landscape slots suit a camera held level; tall slots suit a camera turned on its side.
- **Use a long, good USB cable** and tape it down where people walk. The camera has to stay connected for the whole event.
- **Set the camera up for flash** if you use one, and focus once. See [Get a Bright Live View with Flash](./bright-live-view-with-flash.md) for the camera settings.

## Step 1: Turn on Photographer for the event

1. In the dashboard, open **Events** and open your event. Go to the **Setup** tab.
2. On the **Booth mode** card, click **Edit modes**.
3. Tick **Photographer** ("A photographer shoots each group; every group gets its print and QR.") and click **Save**.

![The event Setup tab with Edit modes marked on the Booth mode card](/img/docs/steps/tutorials-photographer-mode--edit-modes.webp)

![Edit modes popup with Photographer ticked and Save marked](/img/docs/steps/tutorials-photographer-mode--modes-popup.webp)

A **Photographer** card joins the Booth mode card, and a **Photographer** tab opens under it. The tab shows a "!" until it has what it needs.

## Step 2: Set up the Photographer tab

1. Click the **Photographer** card to open its tab.
2. **QR time**: how long each group's print and QR show before the photographer shoots again. Pick **Skip**, **5 s**, **8 s** (the default), **10 s**, **15 s**, **20 s** or **30 s**. **Skip** goes straight back to shooting.
3. **Auto print**: turn it on to print each group as soon as it is saved. It is off until you turn it on.
4. **Template**: pick the one print template every group gets. The list shows this event's print templates that have a photo slot. With none there, click **+ Manage Templates** and add one to the event.
5. **Photographer computers**: tick the computers the photographer shoots with. This list shows only when the event also has modes for guests, such as Photo. When Photographer is the only mode, the tab says "Photographer is this event's only mode, so every computer shoots."

![The Photographer card and its tab with QR time, Auto print, Template and Photographer computers marked](/img/docs/steps/tutorials-photographer-mode--photographer-tab.webp)

Every change saves by itself. The "!" on the tab tells you what is missing: "Pick the template", or "Pick which computers shoot" when guest modes are on and no computer is ticked. A Photographer computer carries a **Photographer** badge in the **Computers** card.

A computer is either a Photographer computer or a Mingle computer, never both. Ticking it on one tab takes it off the other.

## Step 3: Open the event on the booth computer

1. Start Pixture Photobooth on the computer you ticked, with the camera on and connected.
2. Launch the event as you do for any event. See [Run an Event](./run-an-event.md).

A Photographer computer skips the start screen. It opens straight into shooting, with the template in the middle of the screen.

## Step 4: Shoot the first group

1. The chip at the top reads "Photo 1 of 3" (for a three-slot template). The slot for the next photo is coloured and numbered.
2. Look through the camera and press its shutter. There is no countdown: the photo is taken when you press.
3. When the group has some photos and you want to begin again, tap **Start over**. It clears this group's photos.

![The Photographer screen with the Photo 2 of 3 chip, the template with slot 2 lit and Start over marked](/img/docs/steps/tutorials-photographer-mode--shoot.webp)

With a real camera the booth shows no live view. You frame through the camera's viewfinder, which also keeps the camera cool and its battery going. With a webcam the screen shows the live view, an on-screen shutter and a small template in the corner instead.

## Step 5: Check each photo

After every shot, the check screen shows the photo cropped exactly as its slot will show it. It has no timer and waits for you.

1. **Retake** drops the photo. Nothing is saved, and the same slot is shot again.
2. **Use photo** keeps it and moves on to the next slot.

![The check screen with Retake and Use photo marked](/img/docs/steps/tutorials-photographer-mode--check-it.webp)

You do not have to touch the screen. Pressing the camera's shutter on the check screen counts as **Use photo**, and the new photo goes into the next slot. A photographer who is happy with each shot can simply keep shooting.

## Step 6: Hand over the print and QR

1. After the last slot, the chip reads "Saving" while the booth composes the group into the template.
2. The share screen shows the print for the **QR time** you picked. Guests tap **Scan QR** and scan the code to get their photos. With **Auto print** on, the print is already on its way.
3. Tap **Complete**, or press the camera's shutter, to go back to shooting early.

![The share screen after a Photographer group with Scan QR and Complete marked](/img/docs/steps/tutorials-photographer-mode--group-share.webp)

Each group is saved as one session, free for the guests: no payment screen, no price. If your event shows a **Print** button on its share screen (**Output** tab > **Show a Print button on Share**), guests can print extra copies there, up to the event's **Max prints per session**.

## Check It Worked

- The Photographer computer opens on the template with "Photo 1 of 3", not on the start screen.
- The camera's shutter takes a photo, and the check screen shows it cropped to its slot.
- After the last slot, the share screen shows the composed print with **Scan QR**, and the group appears in the event's **Album** tab as one session.

## Tips

- **Shoot at the photographer's pace.** Photos taken while a group is saving or on the share screen are not lost: they become the next group's first photos, each with its own check screen.
- **A restart does not lose a group.** Every photo you keep is saved on the computer first. After an app restart the group comes back at the next slot.
- **Big camera files are fine.** The booth saves each photo at most 3600 pixels on its long side, enough for a 4x6 print, so uploads stay quick.
- **Use Skip for a busy line.** With **QR time** on **Skip**, the photographer never waits; give guests the album link instead. See [Share an Event Album and Slideshow](./event-album-and-slideshow.md).
- **A clicker or foot switch** that starts sessions on the booth also takes the photo in Photographer mode. See [Use a Button Box](./use-a-button-box.md).

## Troubleshooting

| Problem | Why | Fix |
|---|---|---|
| The computer shows the start screen, not the template | It is not a Photographer computer | On the **Photographer** tab, tick it under **Photographer computers** |
| The Photographer tab says "Pick the template" | No print template with a photo slot is on the event | Click **+ Manage Templates**, add a print template, then pick it |
| Pressing the shutter does nothing on the screen | The camera is off, asleep or the cable is loose | Wake the camera, check the USB cable, and wait for the booth to see the camera again |
| Each photo is its own session with its own QR | The computer runs an app older than 1.2.29, or no template reached it | Update Pixture Photobooth, and check a template is picked on the **Photographer** tab |
| "Couldn't save the photos" | The group could not be composed and saved | Tap **Try again**. The photos stay on the computer until the group saves |
| Guests are asked to pay | The computer is running a guest mode, not Photographer | Tick it under **Photographer computers**; Photographer sessions are always free |

## Related

- [Run an Event](./run-an-event.md)
- [Take the Booth to the Guests](./mingle-mode.md)
- [Share an Event Album and Slideshow](./event-album-and-slideshow.md)
- [Events](../dashboard/events.md)
