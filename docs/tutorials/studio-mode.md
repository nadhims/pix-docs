---
sidebar_position: 1
title: Run a Studio Mode Session
description: Set up a Studio booth where customers shoot freely for a set time, then pick which shots go into the print, and run your first timed session.
tags: [tutorials, studio-mode, pix-design, ui-editor]
---

# Run a Studio Mode Session

In this tutorial you will make a Studio screen design in Pix Design, set how long customers can shoot and how many photos they can take, put the design on a booth and run a session from start to print. Allow about 30 minutes.

In a normal photo session the booth takes one photo for each slot of the template. In Studio mode customers take as many shots as they like within a time limit, keep or drop each one, then choose which shot goes into which slot. Every shot they keep reaches their share page, not only the ones in the print.

## When to Use It

- **A self photo studio in a mall.** Customers pay for 5 or 10 minutes, pose as long as they want and pick their best shots. This is the format customers know from self photo studios.
- **A staffed corner at an event.** A photographer with a remote shutter shoots each group, then the guests pick the photos for their print.
- **Couples, families and friends who want choice.** They take 20 shots and print the 4 they like.

Not the right fit for a busy party booth with a queue: free shooting takes longer per group. Use the normal Photo mode there, where the booth takes one shot per slot.

## Before You Start

- **Pix Pro.** You can try the UI Editor on Pix Starter, but saving a project needs Pix Pro.
- **Pixture Photobooth 1.1.98 or newer** on the booth. An older booth runs the normal photo session until it updates.
- **A print template assigned to the booth.** Its number of photo slots is the fewest shots a customer can end with. See [Design a Print Template](./design-a-print-template.md).
- Optional: a remote shutter, foot switch or presenter clicker plugged into the booth computer.

## Prepare

- **Pick the session length from your package.** A 5-minute package needs a **Session length** of 300 seconds. Customers also spend time checking each shot, so a very short session feels rushed.
- **Pick a template with 2 to 4 slots.** A small number of slots keeps the choosing quick. With 8 slots, customers spend more time on the Assign photos screen than shooting.
- **Plan who presses the shutter.** Customers on their own tap the screen. A photographer uses a remote clicker, or a Canon camera's own shutter button.
- **Check the booth's Output Settings.** Turn on **Singles Upload** under **Booths > booth > Settings > Output Settings** and click **Save Output Settings**, or customers do not get every shot they kept.

## Step 1: Create a Studio UI project

1. Go to **Pix Design > UI Editor**, click **New Project** and type a **Project Name**.
2. Choose the **Orientation**: **Landscape** (1920×1080) or **Portrait** (1080×1920), to match the booth's screen.
3. Under **Modes**, tick **Studio** ("Free shots, then pick the best for the layout."). Untick **Photo** for a Studio-only booth, or keep it so customers choose between Photo and Studio on the Start screen (this needs Pixture Photobooth 1.2.4 or newer).
4. Click **Create Project**. The editor opens with an **Assign photos** tab after **Review**.

![New UI Project modal with Project Name, Orientation, the Studio tile and Create Project marked](/img/docs/steps/tutorials-studio-mode--new-project.webp)

## Step 2: Set the time and the photo limit

1. Open the **Capture** tab.
2. In the right rail, under **Studio session**, set **Session length** in seconds. 0 means no time limit.
3. Set **Max photos**. 0 means no limit, and 40 is the most a session can hold.
4. Under **Camera trigger**, pick the **Trigger**: **Tap to start** (customers tap the live view), **Shutter button** (an on-screen button) or **Camera shutter** (the camera's own shutter button takes the photo, with no countdown; this needs a Canon camera).

![UI Editor Capture tab with Session length, Max photos and the camera Trigger marked](/img/docs/steps/tutorials-studio-mode--ui-editor-studio-session.webp)

The time starts when the Capture screen opens. Customers can never end with fewer photos than the template has slots: a lower **Max photos** is raised to the slot count on the booth, and when the time runs out before that, the booth keeps shooting until the slots can be filled.

Arrange the Capture blocks while you are here. A Studio Capture page uses the **Last Shot** card (customers tap it to see every shot so far and **Remove** the ones they do not want), the **Photo Counter**, the **Session Timer** and the **Done Button**. Done only shows once the customer has enough photos for every slot.

## Step 3: Design the Assign photos screen

1. Open the **Assign photos** tab. It shows the **Template Slots** block (the print with its slots) and the **Photo Pool** block (the customer's shots).
2. Click either block to set its colours and the number badges in the right rail.
3. Click **Save**.

![UI Editor on the Assign photos tab with the tab, the Template Slots block in Layers and Save marked](/img/docs/steps/tutorials-studio-mode--assign-photos.webp)

## Step 4: Put the design on the booth

1. Open **Booths**, open the booth, then the **UI Project** tab. In the dropdown, pick your project under **Studio mode** (or under **Several modes** if you kept Photo too).
2. Click **Save**. The tab now reads "Booth mode: Studio". If the booth's app is older than 1.1.98, the tab also shows a warning to update it.

![Booth UI Project tab with the project dropdown and Save marked](/img/docs/steps/tutorials-studio-mode--booth-ui-project-tab.webp)

3. To put the same design on several booths at once, click **Assign to booths** on the project's card in **Pix Design > UI Editor**.

![UI Projects list with Assign to booths marked on a project card](/img/docs/steps/tutorials-studio-mode--pix-design-ui-projects.webp)

The booth picks up the design at its next idle moment, usually within seconds.

## Step 5: Shoot a test session

1. On the booth, start a session and pay (a free booth skips payment), then pick a template.
2. On the Capture screen, tap (or press the remote) for each shot. After each shot the photo shows with **Next** (keep it) and **Retake** (drop it and shoot again). Each photo you keep lands in the card in the corner; tap the card to see every photo of the session and remove one.
3. Keep shooting until the time runs out, **Max photos** is reached, or you tap **Done**.

![The Studio Capture screen with the last photo card, the photo count, the timer and Done marked](/img/docs/steps/tutorials-studio-mode--studio-capture.webp)

## Step 6: Place the photos

The Assign photos screen opens with the first empty slot picked ("Tap a photo for slot 1").

1. Tap a photo. It fills the picked slot, and the next empty slot is picked for you. To fill a different slot, tap that slot first. The same photo can fill more than one slot.
2. **Take more** goes back to Capture with the photos and the time left, while there is time and room for more.
3. When every slot is filled, **Next** turns on. Tap it; Filter and Sharing run as in any session.

![The Assign photos screen on the booth with a photo in the pool, Take more and Next marked](/img/docs/steps/tutorials-studio-mode--assign-on-booth.webp)

Once every slot is filled, tap a placed photo to zoom it, **Mirror** it or **Replace** it, and drag it to move the crop. Your own design of the Assign photos page changes the look; the taps work the same.

## Check It Worked

- After the template choice, the booth shows the live view with the timer and the Last Shot card, not one slot at a time.
- **Done** appears as soon as there are enough photos for every slot.
- After the shooting, the Assign photos screen shows the template and every shot kept.
- The share page lists every kept shot as a single, next to the print.

## Tips

- **Photographer-led sessions:** set **Session length** to 0 and let the photographer tap **Done** or stop at **Max photos**.
- **Self-service:** a visible **Session Timer** stops customers from being surprised when the time runs out.
- **Remote clicker:** on the **Start Screen** tab, tick **Space, S, Page Up, Page Down Keys** (or **F13**) under the session triggers. During a Studio session those keys take a shot. To give a button box its own Capture, Retake and Keep keys, see [Use a Button Box](./use-a-button-box.md).
- **At an event**, Studio runs on the event's own screens: the shots sit in a row along the bottom, and guests tap the round x on a photo to delete it (there is no confirm). See [Run an Event](./run-an-event.md).
- The operator menu opens on the Assign photos screen too: tap the top-right corner twice within 3 seconds.

## Troubleshooting

| Problem | Why | Fix |
|---|---|---|
| The booth still shoots one photo per slot | The project was not saved or not put on the booth, or the app is older than 1.1.98 | Save the project, pick it on the booth's **UI Project** tab, update the booth app |
| **Done** never shows | The customer has fewer photos than the template has slots | Keep shooting; Done shows at the slot count |
| The session keeps going after the time ran out | Not enough photos for every slot yet | Take the missing shots; the session ends as soon as there are enough |
| **Take more** does nothing | The time is up, or **Max photos** or the 40-shot limit is reached | Place the photos you have and tap **Next** |
| The remote clicker does nothing | Its key is not ticked as a session trigger | Tick **Space, S, Page Up, Page Down Keys** or **F13** on the Start Screen tab and save |
| The share page has only the print | **Singles Upload** is off for the booth | Turn it on under **Settings > Output Settings** on the booth |

## Related

- [Studio Sessions](../desktop-app/studio-sessions.md)
- [Let Customers Review and Retake](./review-and-retake.md)
- [Customise the Booth Screens](./customise-kiosk-screens.md)
- [UI Editor](../dashboard/pix-design/ui-editor.md)
