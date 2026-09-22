---
sidebar_position: 7
title: Run an Event
description: Create an event with its own dates, booths, prices, templates and kiosk look, share the online album with the client, and read the report when it ends.
tags: [tutorials, events, album, licences]
---

# Run an Event

In this tutorial you will create an event, put booths on it, give it its own templates and kiosk look, share the online album with your client and read the report afterwards. The dashboard work takes about 15 minutes; the event then runs itself on its dates.

## Before You Start

- **Every booth on the event needs Pix Pro on its computer or a Day Pass.** Buy passes on the **Licenses** page (Passes card, **Buy passes**) before the day.
- **Templates for the event**, either your own in Pix Design or one of Pixture's free template packs (when packs are available).
- **A payment gateway connected** (**Settings > Payment Gateway**) if guests pay per photo session at the event.
- The booths' computers installed and paired, or ready to pair on site.

## Step 1: Create the Event

1. Open **Events** and click **+ Create Event**.

   ![Events page with one ongoing event card and the + Create Event button](/img/docs/events-list.webp)

2. Fill in **Event Name**, **Client**, **Event date**, **End date** (leave it empty for a one-day event), **Start time**, **End time** and **Venue**.

   ![Create Event modal with Event Name, Client, dates, times and Venue filled](/img/docs/events-create-modal.webp)

3. Further down, tick the **Booths** for the event. Turn on **Pay Per Session** and enter the **Session price**, **Double session price**, **Group session price** and **Additional session price** if guests pay at this event; leave it off for a client-paid event. Pick a **Payment gateway** (or keep the organization default), a **Kiosk UI** and the **Templates**.

   ![Create Event modal, full form with Pay Per Session, Booths, Kiosk UI and Templates](/img/docs/events-create-modal-full.webp)

4. Finish with the create button at the bottom of the form. You can change any of these later with **Edit**.

## Step 2: Understand the Event Status

1. The event page opens with the name, dates, a status chip and a badge that reads **FREE FOR GUESTS** or **Paid sessions**. The chip says **ONGOING** from the moment you create the event; there is no Start button. If the dates are still ahead, the booths switch to the event's templates, kiosk design and prices on the first date.

   ![Event page with name, date, ONGOING chip, FREE FOR GUESTS badge, Link Sharing switch, overview cards and the Album, Setup and Report tabs](/img/docs/event-detail.webp)

2. Events run by their dates. The event ends by itself the day after its last date, and its booths follow the event dates plus one night of grace. While the event runs, each booth on it uses the event's templates, kiosk look, prices and gateway instead of its own. There are no Start or End buttons to press on the day.

## Step 3: Put Booths on the Event

1. Open the **Setup** tab. The **Booths** card lists the event's booths with their pairing state.

   ![Event Setup tab with Booths, Booth mode, Template, Kiosk UI and Gallery cards](/img/docs/event-setup.webp)

2. Click **+ Add booth**, tick the booths and click **Add to event**. A booth whose computer has no Pix Pro shows **Add devices** instead; **Create booth** makes a new one for a rented laptop.

   ![Add booths modal on an event](/img/docs/event-add-booths-modal.webp)

3. For a booth without a computer yet, click **Pair Booth** and enter the code in the Pix Desktop App on site. **Unlink** releases a computer from a booth; **Remove** takes the booth off the event.
4. Check readiness on **Licenses > Events**. Each event shows **Ready**, **No booth**, or **N without Pix Pro or a pass**. Fix the last one with **Add more devices** or **Buy passes**; a pass is then used from the booth's operator menu with **Use a pass on this device**.

   ![Licenses page, Events tab with Event, Date, Booths and Ready columns](/img/docs/licenses-events-tab.webp)

## Step 4: Choose the Booth Mode

1. In the **Booth mode** card, pick **Photo** or **Video**. **360 Slow-mo** is marked **SOON** and cannot be chosen yet. The mode is set per event and shared by every booth on it; outside an event a booth always shoots photos.
2. With **Video**, extra settings appear: **Display text before recording**, a **Timeline Preset**, the clip recording duration and speed, a **Soundtrack**, an **Overlay** and a preview. The guest's video gets your intro, outro and soundtrack; it records in portrait or landscape; **Keep original clip** also saves the unedited recording on the booth. Video mode needs Pix Desktop App 1.1.102 or newer; the booth picks the mode up on its Start screen, and its operator menu's Capture settings say "Synced with event …".

## Step 5: Assign Templates and a Kiosk Look

1. The **Template** card reads "Assign at least 1 template. Until you do, guests at this event have nothing to pick." Click **Choose a template** to open Pixture's free template packs. Each pack brings its print layouts, a GIF overlay and a matching kiosk look; pick one and click **Use this pack** (when packs are available). Or click **Manage Templates** to tick templates from your own Pix Design projects.

   ![Manage Templates modal on an event](/img/docs/event-manage-templates-modal.webp)

2. In the **Kiosk UI** card, click **Manage UI Project** and choose **Booth's own UI Project** or one of your designs. **Create new UI project** jumps to Pix Design.

   ![Manage UI Project modal on an event with the kiosk designs and Create new UI project](/img/docs/event-manage-ui-modal.webp)

3. In the **Gallery** card, choose whether the booth shows a QR code to the event album, then click **Save**.

:::note
An event's template set is exclusive. While the event runs, the booth offers only the templates assigned here, not its everyday set. Assign at least one before the doors open.
:::

## Step 6: Share the Album

1. **Link Sharing** is ON from the moment the event is created. Click **Copy** next to the album link and send it to the client. Guests and the client see every photo at that link as it uploads.
2. Use the toolbar above the tabs: **Embed** gives an iframe snippet for the client's website, **Slideshow** opens a full-screen slideshow for a venue screen (only while sharing is on), **Download all** zips every photo, and **Analytics** charts sessions and prints over the day.

   ![Embed modal for the public event album](/img/docs/event-embed-modal.webp)

3. Turn **Link Sharing** OFF to make the album private again. The **Album** tab lets you filter by booth, select photos and delete any you should not keep.

## Step 7: During and After the Event

1. On **Transactions**, sessions captured during the event carry an event chip.
2. Open the **Report** tab for each booth's camera, printer, paper, memory and disk, sessions, prints and active hours, plus **Incidents during the event**.

   ![Event Report tab with per-booth health and incidents](/img/docs/event-report.webp)

3. **Edit** changes the dates, prices or gateway at any time, even while the event is live. **Delete Event** in the toolbar removes it. The day after the last date the event ends by itself, and the booths go back to their own templates, kiosk look and prices the night after.

## Check It Worked

- Start a session on one of the event's booths. The template screen shows only the event's templates and the kiosk look you picked.
- Finish the session. The **Sessions** card on the event page counts it, the photo appears on the **Album** tab and at the album link, and the row on **Transactions** shows the event chip.

## Troubleshooting

| What you see | What to check |
|---|---|
| The booth still shows its everyday templates | The booth is not on the event, or the event's dates do not include today. Check the Booths card and the dates under **Edit**. |
| Guests see nothing on the template screen | No template is assigned to the event. Add one on the **Setup** tab. |
| **Licenses > Events** says "N without Pix Pro or a pass" | Add devices or buy passes, then use the pass from the booth's operator menu. |
| The album link does not open | **Link Sharing** is OFF. Turn it on again. |
| The **Slideshow** button is missing | It appears only while **Link Sharing** is ON. |
| Video mode does not reach the booth | The booth needs Pix Desktop App 1.1.102 or newer, and it picks the mode up on its Start screen. |

## Related

- [Events](../dashboard/events.md)
- [Event video modes on the booth](../desktop-app/event-video-modes.md)
- [Device management](../dashboard/device-management.md)
- [Public links](../reference/public-links.md)
