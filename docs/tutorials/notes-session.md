---
sidebar_position: 2
title: Run a Notes Session
description: Let customers and guests write, draw and type a note on their photos, at a self-service booth or at an event. Choose whether the note gets its own button or comes after Photo, whether it prints, which design it is written on and which fonts it can be typed in.
tags: [tutorials, notes, pix-design, events, photo-session]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Run a Notes Session

In this tutorial you will set up Notes, where people write, draw or type a message on their photos before they share them. You will decide whether Notes is its own button or a step after Photo, whether the note prints, which design it is written on and which fonts people can type with, then run a test session. Allow about 20 minutes.

Notes works in two places, set up in two places:

- **On a self-service booth (Kiosk):** in the booth's screen design, in **Pix Design > UI Editor**.
- **At an event:** on the event page, in **Events**.

The steps below show both, side by side in tabs.

## When to Use It

- **A wedding guest book.** Guests take their photo, then write a wish for the couple. Pick **After Photo, not printed**: the guest's print stays clean and the couple gets every note on the event album.
- **A birthday or a corporate party.** People love seeing their own handwriting on the print. Pick **Notes button, printed** or **After Photo, printed**.
- **A mall booth for couples and friends.** Notes as a second button next to Photo gives customers something extra to choose, and you can price it on its own.
- **A brand activation that collects messages.** Use **Notes button, not printed** so nobody waits for a print, and every note lands on the share page.

Not worth it when the queue is long and every second counts, for example a busy mall Saturday: writing a note adds a minute or two per session. Turn on a short note time, or leave Notes out on those days.

## Before You Start

- **A plan that runs the booth on Pix Pro.** On a Kiosk, saving a screen design in Pix Design needs Pix Pro. At an event, every computer needs Pix Pro or an Event Pass.
- **Pixture Photobooth on the booth computer:**
  - 1.2.39 or newer to type on the note (an older booth shows the pens only).
  - 1.2.45 or newer for a **Notes template** on a Kiosk (Step 3).
  - 1.2.48 or newer for **Move drawing** and **Turn text**.
- **At least one print template** on the booth or the event: Notes takes the photos first, like Photo.
- A **touchscreen**. People write with a finger, so a mouse makes a poor Notes booth.

## Prepare

- **Leave room for the note.** On a Kiosk the note is written on the print template itself, in its **Note area**. Plan a blank space in the design for it, about a third of the print, in a light colour so dark pens show up. Without a Note area, people write over the whole print, photos included.
- **Or make a separate note design.** A template that is only for the note (a card, lined paper, a postcard) gives people more room and keeps the photo strip clean. On an event this is the **Note template**; on a Kiosk it is a template switched to **Notes template**.
- **Fonts.** Four come built in: Caveat, Inter, Pacifico and Bebas Neue. To use your own, have a WOFF2, WOFF, TTF or OTF file ready, up to 4 MB. Pick fonts that are easy to read in a few words: one handwriting font and one plain font is usually enough.

## Step 1: Turn Notes on

<Tabs groupId="where">
<TabItem value="kiosk" label="Kiosk">

1. Go to **Pix Design > UI Editor** and click **New Project**. Give it a **Project Name**.
2. Tick **Notes** under **Modes**. Keep **Photo** (or **Studio**) ticked as well if you want customers to choose, or if you want the note to come after the photos.
3. Click **Create Project**.

![New UI Project with Project Name, the Notes tile and Create Project marked](/img/docs/steps/tutorials-notes-session--new-ui-project-notes.webp)

For a design you already use, open it in the UI Editor and, on the **Start Screen** tab, click **Edit modes** under **Modes**.

</TabItem>
<TabItem value="event" label="Event">

1. Open **Events** and the event, then the **Setup** tab.
2. Under **Booth mode**, click **Edit modes**.
3. Tick **Notes**. Keep **Photo** ticked if you want the note to come after the photos (next step).

![An event's Booth mode with Edit modes marked](/img/docs/steps/tutorials-notes-session--event-edit-modes.webp)

You can also tick **Notes** in **Modes** when you create the event.

</TabItem>
</Tabs>

## Step 2: Choose how Notes runs and prints

As soon as **Notes** is ticked, four choices appear under it, the same on a Kiosk (**Note booth**) and at an event (**Notes**):

| Choice | What people see | What prints |
|---|---|---|
| **Notes button, printed** (the default) | A **Notes** button on the start screen, next to the other modes | The print has the note |
| **Notes button, not printed** | A **Notes** button on the start screen | Nothing prints. They get the note as a soft file on their share page |
| **After Photo, printed** | No Notes button. After the Photo session, they write a note | The print has the note |
| **After Photo, not printed** | No Notes button. After the Photo session, they write a note | The print has no note. The soft file has it |

1. Pick the one that fits your event or booth.
2. Click **Save** (in **Edit modes**) or **Create Project** (a new design).

Both **After Photo** choices need **Photo** ticked, at an event, or **Photo** or **Studio**, on a Kiosk. Until then they are greyed out with "Tick Photo above to use this." On a Kiosk design with Studio, their names say Studio instead of Photo.

:::tip Which one to pick
**After Photo, not printed** is the classic wedding guest book: one queue, one session, a clean print for the guest and every message for the couple. **Notes button, printed** suits a party where the handwriting is the fun of the print.
:::

<!-- SHOT-NEEDED: dashboard: the Edit modes popup with Notes ticked and the four Notes choices (Notes button, printed / not printed, After Photo, printed / not printed) -->

## Step 3: Pick the design the note is written on

<Tabs groupId="where">
<TabItem value="kiosk" label="Kiosk">

By default the note is written on the print itself:

1. Go to **Pix Design > Template Editor** and open the template the booth prints.
2. Under **Note area**, click **+ Add note area**. Drag and resize the box over the blank space you planned. One per template.
3. Save the template.

To give the note its own design instead (Pixture Photobooth 1.2.45 or newer):

1. Make a template for the note, for example a card with a photo slot at the top and a blank area under it, and add a **Note area** to it.
2. In the template editor, turn on **Notes template**. The booth then uses it for the note, as a separate picture, and never offers it as a photo layout.
3. Assign it to the booth like any template: **Booths >** the booth **> Templates**. It shows a **Notes** badge there.

The booth uses the first Notes template on its **Templates** tab, and only when its screen design has Notes.

<!-- SHOT-NEEDED: dashboard: the template editor sidebar with Note area (+ Add note area) and the Notes template switch -->

</TabItem>
<TabItem value="event" label="Event">

1. On the event's **Setup** tab, click the **Notes** card (or the **Notes** tab).
2. Under **Note template**, pick a design. **Default** is "A lined page with their photo on top." Any of your templates can be picked instead. The choice saves at once.

The note is always its own picture at an event. With a printed choice from Step 2, that note picture is what prints.

<!-- SHOT-NEEDED: dashboard: the event Notes tab with Note template (Default and a template) and the Text fonts row with Change -->

</TabItem>
</Tabs>

## Step 4: Choose the fonts people can type with

Up to 8 fonts, at least one. The first one turned on is the font a new text starts in.

<Tabs groupId="where">
<TabItem value="kiosk" label="Kiosk">

1. In the UI Editor, open the **Notes** tab and click the **Note Palette** block.
2. Under **Text fonts**, click a font to turn it on or off.
3. To add your own, click **＋ Upload font…** and pick the file. It is added and turned on.
4. While you are here, check the **Palette** settings: **Colors** (the pen colours, as hex codes), **Min size** and **Max size** of the pen, **Show colour disc** and **Stabilizer** (smooths shaky lines, 0 is off).
5. Click **Save**.

</TabItem>
<TabItem value="event" label="Event">

1. On the **Notes** tab, find **Text fonts** and click **Change**.
2. Tick the fonts you want, built in or under **Your fonts**.
3. To add your own, click **+ Upload font**.
4. Click **Save**.

A font you upload and save is kept for your other events too.

</TabItem>
</Tabs>

## Step 5: Set the note time

People need time to think of a message. Too short and they rush; too long and the queue stalls.

<Tabs groupId="where">
<TabItem value="kiosk" label="Kiosk">

Set the page timer on the **Notes** tab of the UI Editor, and make sure the page has a button or click area whose action is **Done (continue to Sharing)**, so people can finish early. Save the project.

</TabItem>
<TabItem value="event" label="Event">

Open **Edit appearance**, then **Timer**, and choose a **Note time** from 30 seconds to 3 minutes. 90 seconds is the default. See [Design an Event Start Screen](./event-start-screen.md).

</TabItem>
</Tabs>

On a Kiosk, assign the design to the booth when you are done: **Booths >** the booth **> UI Project**, pick it under **Notes** or **Several modes**, and click **Save**.

## Step 6: Write a note at the booth

Run a session as a customer would: choose **Notes** (or **Photo**, with an After Photo choice), take the photos, pass Adjust and the filter, and the note screen opens.

1. **Text (Aa)**: tap it, then tap the note where the text should go. The booth's on-screen keyboard opens. Type up to 80 characters on up to 3 lines. Drag a text to move it, tap it again to edit it, and tap its **×** to remove it.
2. **The font row** at the top of the note: tap a font to change the picked text. The colours and the size slider work on text too.
3. **Turn text** (1.2.48): drag the round handle under the picked text to turn it. Close to level or upright, it snaps straight.
4. **Move drawing** (1.2.48, the four arrows): drag on the note to slide the whole drawing, pens and texts together, for example when it ended up too close to the edge.
5. **Done**: at an event this reads **Skip** until something is on the note. With nothing written, the session goes on without a note. When the time runs out, the booth goes on by itself.

![The note screen with the Text tool, the font row, Turn text, Move drawing and Done marked](/img/docs/steps/tutorials-notes-session--write-a-note.webp)

The pens are **Pen**, **Marker**, **Pencil** and **Highlighter**, next to the **Eraser**, with **Undo** and **Redo** under them. The eraser only takes away drawing: texts are removed with their own **×**.

## Check It Worked

- The start screen shows a **Notes** button (Notes button choices), or none (After Photo choices), and the note screen comes after the filter.
- The note uses the design you chose in Step 3, and the font row shows your fonts.
- The share page has the note: on the print, or as its own **Note** file next to the print. **Download All** includes it.
- What prints matches the choice from Step 2. With **Notes button, not printed**, nothing prints at all.
- At an event, the album has a **Notes** view once a note is saved.

## Tips

- **Put a pen in the booth design, not only on screen.** A short line on the start screen or the template ("Leave a wish for Rina and Dimas!") gets far more notes written.
- **Dark pens on light paper.** Keep the Note area light and put dark colours first in **Colors**: the first colour is the one people start with.
- **Two fonts are enough.** A handwriting font and a bold plain one. Eight fonts slow people down.
- **For a guest book, print nothing extra.** **After Photo, not printed** keeps the paper count the same as a Photo event, and the couple gets every note on the album.
- **A shaky line?** Raise **Stabilizer** on the Note Palette (Kiosk). The pens then smooth each stroke.
- **Test with a real finger** on the booth's screen. A note that is easy with a mouse can be fiddly on a 15-inch touchscreen.

## Troubleshooting

| Problem | Why | Fix |
|---|---|---|
| There is no **Aa** on the note screen | The booth runs an app older than 1.2.39 | Update the booth. See [Software Updates](../desktop-app/software-updates.md) |
| No **Move drawing** or **Turn text** | The booth runs an app older than 1.2.48, or the Note Palette block is too small for every tool | Update the booth, or make the **Note Palette** block bigger in the UI Editor |
| The **After Photo** choices are greyed out | Photo (or Studio, on a Kiosk) is not ticked | Tick **Photo** in the same popup, then pick the choice |
| There is no Notes button on the start screen | An **After Photo** choice is picked: the note comes after Photo instead | Pick a **Notes button** choice if you want its own button |
| People write over their photos | The Kiosk template has no **Note area** | Add one with **+ Add note area**, or use a **Notes template** |
| The Kiosk ignores the Notes template | The booth runs an app older than 1.2.45, the template is not on the booth's **Templates** tab, or the booth's design has no Notes | Update the booth, assign the template, and check the design has **Notes** ticked |
| Nothing prints after a Notes session | **Notes button, not printed** is picked | That choice never prints. Pick a printed choice |
| Your own font does not show | The file is too big or not a font file | Use WOFF2, WOFF, TTF or OTF, up to 4 MB |

## Related

- [UI Editor: Notes](../dashboard/pix-design/ui-editor.md#notes-notes-only)
- [Events: Notes](../dashboard/events.md#notes)
- [Design a Print Template](./design-a-print-template.md)
- [Customise the Booth Screens](./customise-kiosk-screens.md)
- [Run an Event](./run-an-event.md)
- [Set Up the Share Page](./share-page.md)
