---
sidebar_position: 7
title: Let Customers Review and Retake
description: Decide how long customers see each photo, whether they can retake it, and whether they can move, zoom, mirror and swap their photos before the print, on a booth and at an event.
tags: [tutorials, review, retake, adjust, pix-design, events]
---

# Let Customers Review and Retake

In this tutorial you will set up the screen customers see after every photo, choose whether it moves on by itself, decide if customers may retake, and turn the "Adjust your photos" screen on or off. You will do it for a booth (in Pix Design) and for an event (on the event page). Allow about 15 minutes.

After each shot the booth shows the photo with **Retake** and **Next**. On that screen customers can also fix the crop: zoom in, move the photo in its slot and mirror it. After the last shot, **Adjust your photos** shows the whole print, where they can move, zoom and swap photos once more.

## When to Use It

- **A self-service booth in a mall.** Retake and the photo adjust save you from complaints about closed eyes and cut-off heads, with no staff on hand.
- **A busy event with a queue.** A short review time and Retake off keep each group to a minute. Guests still get a quick look at every photo.
- **A premium or wedding booth.** Leave Retake and Adjust your photos on, with a longer review, so every print comes out the way the guests want it.
- **A photographer-run booth.** Turn auto-advance off so the photographer decides when to move on.

Retake does not apply to Studio sessions in the same way: there customers keep or drop each shot, then pick their photos. See [Run a Studio Mode Session](./studio-mode.md).

## Before You Start

- **For a booth:** a UI project from Pix Design on the booth. Saving a project needs **Pix Pro**.
- **For an event:** an event with a Photo, Notes or Mingle mode. Every computer on an event needs Pix Pro or an **Event Pass**.
- **Pixture Photobooth 1.2.6 or newer** for the Adjust your photos screen.

## Prepare

- **Choose a review time that fits the queue.** 10 seconds is enough to spot closed eyes. With a long line, 5 seconds. With auto-advance off, the booth waits for a tap, which suits a staffed booth but can stall an unattended one.
- **Decide on Retake before the day.** Unlimited retakes on a self-service booth can slow the line; turning Retake off makes every session the same length.

## Step 1: Set the review on a booth

1. In **Pix Design > UI Editor**, open the booth's project and click the **Review** tab.
2. In the right rail, under **Review Settings**, leave **Auto-advance after review** on and set its **Duration** (3 to 60 seconds, 15 by default). The Next button counts down, for example "Next (8s)", and the booth keeps the photo when it reaches zero. With it off, customers must tap **Next** or **Retake**.
3. Turn **Retake button** off to remove Retake from the review (Next moves to the centre). Turn **Photo counter** off to hide the "Photo 2 of 4" line.
4. Click **Save**.

![UI Editor tab bar with the Review tab marked](/img/docs/steps/tutorials-review-and-retake--review-tab.webp)

<!-- SHOT-NEEDED: dashboard: UI Editor Review tab right rail with Review Settings (Advanced mode, Retake button, Photo counter, Auto-advance after review, Duration) marked -->

When the Capture page's **Session Time** runs out, Retake disappears by itself, so a customer cannot keep the booth forever.

## Step 2: Design your own Review screen (optional)

The booth draws a built-in review layout. To place everything yourself:

1. On the **Review** tab, turn on **Advanced mode** under **Review Settings**.
2. The tab becomes a canvas with a **Review Photo** block, **Retake** and **Next** buttons and a **Photo Counter**, placed where the built-in layout has them. Move them, add text and images, or give the page its own background.
3. Keep at least one element whose action is Retake if customers should be able to retake. A new button or click area on this page starts as Next.
4. Click **Save**.

## Step 3: Turn on Adjust your photos on a booth

1. Click the **Adjust** tab.
2. Turn on **Enabled in session flow**. It is on by default in new projects; a project your booths already run keeps it off until you turn it on, so their sessions do not change without you.
3. Click **Save**.

![UI Editor tab bar with the Adjust tab marked](/img/docs/steps/tutorials-review-and-retake--adjust-tab.webp)

After the last shot of a Photo or Notes session, customers see the print with all their photos. They drag a photo to move it, pinch to zoom, drag one photo onto another to swap them and tap **Mirror** to flip every photo. **Next** moves on, and so does the page timer (60 seconds in a new project). Studio sessions skip this screen.

## Step 4: Set the review time at an event

1. Open **Events**, open the event, and on the **Appearance** tab click **Edit appearance**.
2. Open the **Timer** group and pick **Photo review**: **3 s**, **5 s**, **10 s**, **15 s** or **30 s**. An event where you never change it uses 10 seconds.
3. Open the **Steps** group to turn screens off:
   - **Retake**: off removes Retake from each photo's review and from Adjust your photos.
   - **Adjust your photos**: off goes straight to the next screen after the last photo.
   - **Choose a filter**: off keeps the photos as taken.
4. Click **Save**. The editor says "Saved. Booths update now."

<!-- SHOT-NEEDED: dashboard: event Edit appearance with the Timer group (Photo review) and the Steps group (Adjust your photos, Choose a filter, Retake) marked -->

Photo review shows for events with Photo, Notes or Mingle; at an event, Adjust your photos moves on by itself after 60 seconds and has a retake button on each photo while Retake is on.

## Step 5: Try it on the booth

1. Run a session with a template of at least two slots.
2. After the first shot, tap the photo. A zoom control and **Mirror** appear. Zoom in, drag the photo to move the crop, then tap **Next**.
3. On the next shot, tap **Retake** and check the countdown runs again for the same slot.
4. After the last shot, on **Adjust your photos**, drag one photo onto another to swap them, then tap **Next**.

<!-- SHOT-NEEDED: booth: the per-shot Review screen with a photo selected, the zoom control and Mirror, Retake and "Next (8s)" -->

## Check It Worked

- After each shot the photo shows with **Retake** and **Next**, and Next counts down when auto-advance is on.
- A zoom and a mirror made on Review show the same way on the print, the GIF and the live photo.
- With Retake off, the review shows only **Next**.
- Adjust your photos appears after the last shot when it is on, and not when it is off.

## Tips

- **Mirror flips every photo of the session**, not only the one on screen, so the print stays consistent.
- **Zoom before retaking.** A head cut off at the top is often fixed by zooming out or dragging, faster than a new shot.
- **Use a short review for groups.** Large groups look at the photo together and talk; a 5-second review keeps them moving.
- **Turn Retake off for timed packages** where you sell a fixed number of shots.

## Troubleshooting

| Problem | Why | Fix |
|---|---|---|
| Retake is missing | **Retake button** is off in Review Settings, Retake is off in the event's **Steps**, or the session time ran out | Turn it back on, or give the session more time |
| The booth never moves on from the review | **Auto-advance after review** is off | Turn it on and set a **Duration** |
| Adjust your photos never shows | **Enabled in session flow** is off on the Adjust tab, the booth app is older than 1.2.6, or it is a Studio session | Turn it on and save, update the booth |
| The event review time is not used | The change was not saved, or the session is not Photo, Notes or Mingle | Click **Save** in Edit appearance; other modes have no photo review |
| After Advanced mode, customers cannot retake | No element on the Review page has the Retake action | Add a Retake button or set a click area to Retake |

## Related

- [Review and Adjust](../desktop-app/session-flow/review-and-adjust.md)
- [Run a Studio Mode Session](./studio-mode.md)
- [Customise the Booth Screens](./customise-kiosk-screens.md)
- [Run an Event](./run-an-event.md)
