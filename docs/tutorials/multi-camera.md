---
sidebar_position: 21
title: Use Two or More Cameras
description: Put two to six cameras on one Kiosk booth, name each angle in the dashboard, give every angle its camera on the booth, and let customers choose the camera before every photo.
tags: [tutorials, camera, multi camera, kiosk, pix pro, hardware]
---

# Use Two or More Cameras

In this tutorial you will add a second camera to a Kiosk booth, for example one at eye level and one high up, name the angles in the dashboard, and tell the booth which camera takes which angle. Customers then pick the angle before every photo. Allow about 20 minutes once both cameras are mounted and plugged in.

## When to Use It

- **A self-service mall booth or self photo studio** that wants a "high angle" or "full body" shot next to the classic close-up, so customers come back to try the other angle.
- **A multi-booth studio** with one big set: a wide camera for groups and a tight one for couples, on the same computer.
- **A pop-up box with a webcam overhead** next to the main DSLR, for a fun top-down shot.

Not for events: Multi camera runs on Kiosk booths only. If you only want the camera turned or zoomed, one camera with **CAMERA ROTATION** or **DIGITAL ZOOM** does it.

## Before You Start

- **Pix Pro** on the booth's computer. On Pix Starter the dashboard card reads "Put Pix Pro on this booth's computer to use camera angles."
- A **Kiosk** booth on a Mac or Windows computer with Pixture Photobooth **1.2.41 or newer**. Not on phones or tablets.
- Two or more cameras, each working on its own. Any mix of camera bodies, webcams and capture cards works; a booth can use only one Nikon. Connect each one first with [Connect a Camera](./connect-a-camera.md).
- The menu PIN, if the booth has one.

## Prepare

- **One USB port per camera, straight on the computer.** No hub. Every camera needs its own reliable connection.
- **Mains power for every camera** and auto power off turned off. The booth wakes a camera when a customer picks it; a camera that went to sleep or stopped on a battery message cannot be woken.
- **Two bodies of the same model?** They show the same name in the list. Label each cable and the port it goes into, so the angles never swap after someone unplugs them.
- **Optional pictures for the customer:** a small photo per angle (PNG, JPG or WebP, up to 5 MB) that shows what the angle looks like. Without one, the card shows the angle's letter (A, B, C).

## Step 1: Switch on Multi camera in the dashboard

1. Click **Booths** in the sidebar and open the booth.
2. Open the **Settings** tab.
3. On the **Multi camera** card ("Guests pick a camera before every shot."), turn the switch on. Two cameras appear: **Cam A** and **Cam B**.
4. Rename each one to what customers should read, such as "Front" and "High angle". Click the picture square on a row to add its picture. Use **+ Add camera** for more (up to 6), the arrows to change the order, and the switch on a row to hide one for now.
5. Click **Save**. The card needs at least two cameras switched on: otherwise it says "Add at least two cameras."

![Booth Settings tab with Booths, the Settings tab, the Multi camera switch and Save marked](/img/docs/steps/tutorials-multi-camera--dashboard-switch.webp)

The first camera in the list is the booth's default camera: the one that is on at the Home screen and at the start of every session. Turning the main switch off later keeps your list.

## Step 2: Give each angle its camera on the booth

The booth picks up the new list when it is online, by the time it is back on the Home screen.

1. On the booth, open the operator menu and tap **Camera Settings**. A **CAMERA ANGLES** list now shows above **CAMERA DEVICE**, one row per camera from the dashboard.
2. On the first row (here **Front**), open **Choose a camera** and pick the camera for that angle.
3. Do the same on every other row. A camera already on one row is not offered on another ("That camera is on another angle.").
4. Tap a row to open its camera in the preview, then set its zoom, rotation and exposure. Each camera keeps its own settings. Tap **Save Camera Settings** after each camera.

![Camera Settings with the Front and High angle rows of CAMERA ANGLES and Save Camera Settings marked](/img/docs/steps/tutorials-multi-camera--camera-angles.webp)

A row marked **not connected** means its camera is unplugged or switched off. The booth's **Preflight Check** also lists each angle.

## Step 3: Run a session as a customer

1. Tap **Back to Menu**, then **Start Booth**, and start a normal photo session.
2. Before each photo, **Choose your angle** shows at the bottom of the capture screen, one card per camera. Tap a card: the live view switches to that camera. Then start the photo.
3. Try every angle once, and check each photo on the review screen and on the print.

![The capture screen with the Choose your angle cards Front and High angle marked](/img/docs/steps/tutorials-multi-camera--choose-angle.webp)

## Check It Worked

- **Camera Settings > CAMERA ANGLES** shows every row with a camera and none marked **not connected**.
- **Choose your angle** appears before every photo, with your names and pictures.
- Each card switches the live view to the right camera.

## Tips

- **The choice sticks.** A customer who never taps a card takes every photo on the same camera, so put your best angle first.
- **Each photo waits for the customer.** With Multi camera on, photos do not count down by themselves: the customer starts each one after choosing. Give the session a little more time if your design has a session timer.
- **No fixed camera per photo.** A template cannot say "photo 1 on Front, photo 2 on High angle": the customer chooses every time.
- **Where it does not show:** event booths, Video, GIF and live photo sessions, AI, Studio and **Decor** modes. Those use the default camera.
- **Light every angle.** A high camera sees the top of heads and the floor. Check each angle with the person standing where customers stand.

## Troubleshooting

| Problem | Why | Fix |
|---|---|---|
| The **Multi camera** switch is missing | The booth's computer is on Pix Starter | Put Pix Pro on the computer: the card links to **Computers** |
| **CAMERA ANGLES** does not show on the booth | The booth has not picked up the list, or it is an event booth or a phone | Let the booth go online and back to Home; check it is a Kiosk booth on a computer |
| **Choose your angle** never shows | Fewer than two angles have a connected camera, or it is not a normal photo session | Give every row a camera (Step 2), check none is **not connected**, and use a Photo mode session |
| "That camera is not ready. Pick another." | The booth could not open that camera | Check the camera is on and awake; the session goes back to the camera before |
| "Hmm, the camera didn't respond" after one photo | The camera slept or stopped on a battery message | Mains power with the maker's own coupler, auto power off **Disable**, direct USB port |
| Two same-model cameras swapped angles | The cables were swapped between ports | Tap each row, check the preview, and put the cables back on their labelled ports |

## Related

- [Multi Camera](../desktop-app/camera-setup/multi-camera.md)
- [Connect a Camera](./connect-a-camera.md)
- [Camera Settings](../desktop-app/camera-setup/camera-settings.md)
- [Booth Management](../dashboard/booth-management.md)
