---
sidebar_position: 3
title: Run a Newspaper Session
description: Turn a portrait booth into a newspaper booth where customers see themselves live on the front page, swipe between your newspapers, pay and shoot, and take home their own newspaper print.
tags: [tutorials, newspaper, pix-design, ui-editor, templates]
---

# Run a Newspaper Session

In this tutorial you will make newspaper templates, build a Newspaper screen design, put it on a portrait booth and run a session. At the end, customers walking past see themselves live on your front page, swipe to pick a newspaper, pay, shoot and get their own newspaper print. Allow about 45 minutes, most of it for the artwork.

## When to Use It

- **A self-service booth in a mall or a museum.** The live front page is the hook: people stop when they see their own face on a newspaper.
- **A kiosk booth placed at a brand activation or a launch.** The newspaper carries the brand's headline and the date, and every customer walks away with a printed souvenir.
- **A kiosk booth placed at a wedding or a birthday party.** A "special edition" with the couple's story or the birthday headline, as long as the booth runs as a kiosk and not as a Pixture event.

Newspaper is a booth mode for a kiosk booth, with its own templates. It does not run inside a Pixture event: for an event, use [Run an Event](./run-an-event.md) with the Photo mode and a newspaper-style template.

## Before You Start

- **Pix Pro.** Saving templates and UI projects needs Pix Pro.
- **Pixture Photobooth 1.2.19 or newer.** An older booth runs the design as a normal photobooth.
- **A portrait screen.** Newspaper screens are portrait only (1080×1920).
- **A printer that takes the paper size you design for.** A3 is the recommended size for newspaper templates; any size works.

## Prepare

- **Design the artwork as a PNG with see-through photo holes.** Put the masthead, the headline, the date and the columns of text in the artwork. The booth adds only the photos; there are no text fields to fill in at the booth.
- **Slot 1 is the live camera.** On the Start screen the camera shows in the first photo slot, so make slot 1 the big front-page photo. Extra slots are shot one after the other.
- **Make two or three newspapers.** Customers swipe between them on the Start screen, and a choice gets more people to stop.
- **Keep the faces big.** A newspaper page is mostly text; a front-page photo of at least a third of the page reads well from across a corridor.

## Step 1: Make a newspaper template

1. Go to **Pix Design > Template Editor** and click **New Project**.
2. Under **Media Type**, pick **Newspaper** ("Newspaper booths"). The hint reads "Shows only on Newspaper booths. A3 recommended, any size works." and **A3** is picked for you.
3. Change the **Print Size** if your printer needs another one.
4. Upload your PNG under **Template PNG** and click **Create Project**.

![Create Template Project with Newspaper, A3, Template PNG and Create Project marked](/img/docs/steps/tutorials-newspaper-session--create-template.webp)

Then mark the photo slots in the template editor and save, as for any template. See [Design a Print Template](./design-a-print-template.md).

**Already have the artwork as a template?** Open it and set **Media Type** to **Newspaper** in the editor's right rail.

![Template editor with the Media Type dropdown marked](/img/docs/steps/tutorials-newspaper-session--media-type.webp)

A Newspaper template only ever shows on Newspaper booths, and a Newspaper booth only offers Newspaper templates.

## Step 2: Create a Newspaper UI project

1. Go to **Pix Design > UI Editor**, click **New Project** and type a **Project Name**.
2. Under **Modes**, tick **Newspaper** ("Guests see themselves in the newspaper, pay, then shoot."). It cannot be combined with other modes, and it sets the **Orientation** to **Portrait**.
3. Click **Create Project**.

![New UI Project modal with Project Name, the Portrait orientation, the Newspaper tile and Create Project marked](/img/docs/steps/tutorials-newspaper-session--new-project.webp)

The booth draws the Start and Capture screens itself, with your newspapers in the middle and the logo from **Pix Design > Brand** in the band at the top. The editor shows a preview of them. You design the Payment, Filter, Adjust and Sharing screens as in any project. Click **Save**.

## Step 3: Put it on the booth

1. Open **Booths**, open the booth, then the **UI Project** tab.
2. Pick your project under **Newspaper mode** and click **Save**. The tab reads "Booth mode: Newspaper".

<!-- SHOT-NEEDED: dashboard: booth UI Project tab with the dropdown on Newspaper mode, Save, and the "Booth mode: Newspaper" line -->

If the tab says "No Newspaper templates yet", go back to Step 1: the booth needs at least one template with **Media Type** set to **Newspaper**. If it says "Update this booth to app 1.2.19 or newer to run Newspaper mode", update the booth app.

## Step 4: Run a test session

1. On the booth, the Start screen shows your newspaper with the live camera in the front-page photo. Swipe left or right to see your other newspapers.
2. Tap **Start**.
3. Pay, if the booth charges. After payment the chosen newspaper shows again: swipe to change it, then tap **Use this one**. If nobody taps, the booth goes on with the newspaper on screen.
4. Tap the screen (or **Capture**). A countdown runs over the photo slot, then **Retake** and **Next** show. Each photo fills its slot and the camera moves to the next one.
5. The session goes on to the Adjust and Filter screens when your design has them on, then Sharing with the print and the QR code.

<!-- SHOT-NEEDED: booth: the Newspaper Start screen in portrait with the live camera in the front-page photo, the dots and Start -->

## Check It Worked

- The Start screen shows a newspaper with the live camera in slot 1, not the usual Start screen.
- Swiping changes the newspaper, and the dots under it follow.
- The print is the newspaper with the customer's photos in it.
- Your other booths do not offer the Newspaper templates.

## Tips

- **Put the booth where people walk past.** The live front page works like a mirror; customers decide to stop within a few steps.
- **Change the headline for each event or season** by uploading a new PNG with **Re-upload** in the template editor, then check the slots still sit on the photo holes.
- **A cash or coin booth** that starts on F13 only: a tap then only swipes between newspapers, and the Start button is hidden. Customers pay first, then the session starts.

## Troubleshooting

| Problem | Why | Fix |
|---|---|---|
| The booth shows a normal Start screen | The project is not on the booth, or the app is older than 1.2.19 | Pick the project on the booth's **UI Project** tab and update the app |
| "No newspaper templates yet" on the booth | No template has **Media Type** set to **Newspaper** | Set it in the template editor and save |
| The live camera is in the wrong place | Slot 1 is not the front-page photo | Reorder the slots in the template editor so the big photo is slot 1 |
| A tap does not start a session | The Start Screen's session triggers leave out **Touch Screen** | Tick **Touch Screen**, or start with your coin or card system |
| Swiping does nothing | The booth has only one Newspaper template | Add a second newspaper |

## Related

- [Design a Print Template](./design-a-print-template.md)
- [Customise the Booth Screens](./customise-kiosk-screens.md)
- [UI Editor](../dashboard/pix-design/ui-editor.md)
- [Creating Templates](../dashboard/pix-design/creating-templates.md)
