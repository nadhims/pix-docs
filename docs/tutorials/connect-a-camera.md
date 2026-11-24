---
sidebar_position: 20
title: Connect a Camera
description: Connect a Canon, Sony, Nikon or Fujifilm camera, a webcam or a virtual camera to the booth over USB, pick it as the booth's camera, and fix "Camera Disconnected" before customers arrive.
tags: [tutorials, camera, canon, sony, nikon, fujifilm, webcam, hardware]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Connect a Camera

In this tutorial you will check that your camera works with Pixture, set it up on the camera body, plug it into the booth computer and make it the booth's default camera, so it comes back on its own after every restart. Allow about 15 minutes with the camera, its USB cable and the booth computer in front of you.

"Camera not detected" and "Camera Disconnected" are the most common problems new operators send us. Almost every one comes from four causes: a camera body that cannot be controlled over USB, the maker's own app holding the camera, the wrong USB mode on the camera, or the booth picking a different camera than the one you meant. This tutorial checks each of them in order.

## When to Use It

- **Your first booth.** You bought a camera, or want to use the one you have, and need the live view on the booth screen.
- **A new or replacement body for an event rental.** Run through it at home the day before, not at the venue.
- **A self-service mall booth** that shows "Camera Disconnected" to customers. Steps 4 and 5 find the cause.
- **A webcam or capture card** for a low-cost pop-up box, a demo, or a backup when the main camera fails.

Not needed when the camera already shows on the booth and **STATUS** reads **Connected** and **Active**: then go straight to [Set Up Flash and Lighting](./flash-and-lighting.md).

## Before You Start

- Any plan: cameras work the same on Pix Starter, Pix Pro and an Event Pass.
- A booth computer (Mac or Windows) with the Pixture Photobooth app installed and paired to a booth. See [Set Up a Booth From Scratch](./set-up-a-booth.md).
- The camera, a charged battery or a mains adapter, and a USB cable that carries data. Some cheap cables only charge, and they look identical.
- The menu PIN, if the booth has one. See [Lock the Booth and Use the Operator Menu](./operator-menu.md).

## Prepare

### Check your camera is supported

The booth controls the camera through each maker's own remote-control software. If the maker does not offer remote control for a body, the booth cannot drive it, whatever the cable or setting.

| Brand | Works | Does not work |
|---|---|---|
| **Canon** | Almost every EOS DSLR from the 40D and 1000D on, the EOS R line, EOS M50, M50 Mark II, M200, M6 Mark II | The older EOS M bodies (M, M2, M3, M5, M6, M10, M100) |
| **Sony** | A7 IV/V, A7C/C II/CR, A7R IV to VI, A7S III, A9 II/III, A1/A1 II, A6700, ZV-E10 II, ZV-E1, FX series | A6400, A6600, A7 III and the first ZV-E10 |
| **Nikon** | Z mirrorless only: Z9, Z8, Z6III, Z7II, Z6II, Z7, Z6, Z5II, Z5, Zf, ZR, Z50II, Z50, Z30, Zfc | Every D-series DSLR |
| **Fujifilm** | X-H2S, X-H2, X-T5, X-S20, X-M5, GFX100 II, GFX100S II, GFX100RF, X-T3, X-T4, X-Pro3, X-S10 (firmware 2.00 or newer), GFX 50S, GFX 50R, GFX100, GFX100S, GFX50S II | Other bodies |

The full Canon list is on [Supported Cameras](../reference/supported-cameras.md#supported-canon-models). A body in the right-hand column can still run a booth as a webcam through an HDMI capture card (the webcam tab in Step 1), with lower photo quality.

### Get the hardware right

- **Power the camera from the mains** (the maker's AC adapter or dummy battery). A battery does not last a day of live view, and a flat battery looks exactly like a missing camera.
- **Turn off the camera's auto power off**, so it stays awake between customers.
- **Plug straight into a USB port on the computer**, not a hub or a keyboard. Canon says a hub "may prevent EOS Utility and your camera from communicating normally", and the same goes for the booth.
- **Turn the camera's Wi-Fi off.** Canon: with Wi-Fi enabled, "connecting the camera to a computer will not be possible".

## Step 1: Set up the camera body

Do this before plugging the cable in.

<Tabs groupId="camera-brand">
<TabItem value="canon" label="Canon">

1. Set the mode dial to **M**, **Av** or **Tv**. The booth can only change exposure in these modes.
2. Turn Wi-Fi off in the camera's wireless settings.
3. Focus on where customers will stand, then switch the lens to **MF**. The booth fires the shutter without refocusing.

<!-- SHOT-NEEDED: hardware: Canon mode dial on M and the lens AF/MF switch on MF -->

</TabItem>
<TabItem value="sony" label="Sony">

1. Update the camera to Sony's latest firmware. Older firmware may not connect.
2. Set the USB mode to **PC Remote**. On most bodies: **MENU > Setup > USB > USB Connection Mode > PC Remote**. Do not use **USB Streaming**: then the camera only sends video and the booth sees it as a webcam.
3. Set the mode dial to **M**, **A** or **S**.
4. On Windows only, install Sony's driver once. It comes with the app: Step 3 shows where.

<!-- SHOT-NEEDED: hardware: Sony USB Connection Mode menu set to PC Remote -->

</TabItem>
<TabItem value="nikon" label="Nikon Z">

1. Set the mode dial (or photo mode) to **M**, **A** or **S**.
2. Close Nikon's own apps on the computer: NX Tether, Camera Control Pro 2 and Nikon Transfer 2.
3. The computer needs Windows 11 (64-bit) or macOS 13 or newer for a Nikon. No driver is needed.

<!-- SHOT-NEEDED: hardware: Nikon Z mode dial on M -->

</TabItem>
<TabItem value="fujifilm" label="Fujifilm">

1. Set the connection mode to **USB TETHER SHOOTING AUTO** ("PC SHOOT AUTO" on older bodies). On the X-T5: **MENU/OK > NETWORK/USB SETTING > CONNECTION MODE > USB TETHER SHOOTING AUTO**. Fujifilm: the camera enters tethered shooting when the computer is on, and works normally again when unplugged.
2. Set the image format to **JPEG** (Fine), or JPEG + RAW. HEIF photos cannot be used by the booth.
3. On the older bodies (X-T3, X-T4, X-Pro3, X-S10 and the first GFX bodies) the camera's own buttons are locked while the booth holds it. Change settings from the booth, or unplug first.

<!-- SHOT-NEEDED: hardware: Fujifilm CONNECTION MODE menu set to USB TETHER SHOOTING AUTO -->

</TabItem>
<TabItem value="webcam" label="Webcam">

Any camera the computer itself lists works: a laptop's built-in camera, a USB webcam, an HDMI capture card that shows up as a camera, or a virtual camera such as OBS Virtual Camera.

1. Plug the webcam or capture card in. For a capture card, turn the camera's on-screen info off so it does not show in the photos.
2. On a Mac, allow Pixture Photobooth under **System Settings > Privacy & Security > Camera** when macOS asks.

Webcam photos are frames from the video, so large prints look softer than with a camera body. A webcam cannot fire a flash.

</TabItem>
</Tabs>

## Step 2: Close the maker's app and plug the camera in

Only one program can control a camera over USB. If EOS Utility, Lightroom, Imaging Edge, X Acquire, NX Tether or a video-call app has the camera, the booth cannot get it.

<Tabs groupId="os">
<TabItem value="mac" label="Mac">

1. Quit EOS Utility and every other camera app: click its window and press Command-Q. Closing the window is not enough.
2. Stop it opening by itself: **System Settings > General > Login Items & Extensions** (**Login Items** before macOS 15), select EOS Utility and click the minus (-) button.
3. Plug the camera into a port on the Mac and turn it on.

</TabItem>
<TabItem value="windows" label="Windows">

1. Quit EOS Utility from its icon next to the clock (click the ^ arrow to see hidden icons), and close every other camera app.
2. Stop it opening by itself: **Settings > Apps > Startup**, switch off every EOS Utility entry.
3. Close any AutoPlay or "Import photos" window that pops up when the camera is plugged in.
4. Plug the camera into a port on the back of the PC and turn it on.

<!-- SHOT-NEEDED: windows: Settings > Apps > Startup with the EOS Utility switch marked -->

</TabItem>
</Tabs>

EOS Utility comes back every time a Canon is plugged in until it is told not to. If it keeps opening, follow [EOS Utility or another program is holding a Canon](../troubleshooting/camera.md#eos-utility-or-another-program-is-holding-a-canon).

## Step 3: Pick the camera on the booth

1. Open the operator menu (tap the top-right corner twice) and tap **Camera Settings**.
2. Under **CAMERA DEVICE**, pick your camera from the list. **Auto-detect** takes the first camera it finds, which can be the laptop's built-in camera instead of your DSLR.
3. Tap **Set as Default**. The list now shows "(default)" next to it, and the booth opens the same camera after every restart.
4. Check **STATUS**: **Camera** reads **Connected** and **Live View** reads **Active**. The live view shows on the left.

![Camera Settings with CAMERA DEVICE, Set as Default, and the Camera and Live View status rows marked](/img/docs/steps/tutorials-connect-a-camera--camera-device.webp)

**Sony on Windows:** if the Sony is not in the list, tap **Show Diagnostics**, then **Install Sony Driver**, approve the Windows prompt, and unplug and replug the camera. The button changes to **Sony Driver Installed**. Once per computer.

With a camera body, **CAMERA SETTINGS** below shows ISO, aperture, shutter speed and white balance. The page reminds you to set the mode dial if they do nothing. Set them in [Set Up Flash and Lighting](./flash-and-lighting.md).

## Step 4: Take a test photo

1. Tap the round shutter button under the live view. The photo shows over the preview; tap it to close.
2. Tap **Back to Menu**, then **Start Booth**, and run one full session to the print.

## Step 5: Turn it off and on again

The camera will be turned off, unplugged or go to sleep at some point. Make sure the booth recovers:

1. Turn the camera off, wait 10 seconds and turn it on again.
2. Within a few seconds the live view comes back by itself. On the Home screen, "⚠ Camera Disconnected" shows only while the camera is away.

## Check It Worked

- **Camera Settings > STATUS**: **Camera** reads **Connected**, **Camera Name** is your camera, **Live View** is **Active**.
- The operator menu's checklist shows **Camera** with "connected" next to your camera's name.
- After restarting the computer, the booth opens the same camera without you choosing it.

## Tips

- **Before a reset or reinstall, note the camera model and settings.** Camera settings live on the booth computer, not in the dashboard.
- **Label the cable.** A USB cable that once failed will fail again in the middle of an event. Keep a spare, tested one in the kit.
- **Keep the USB run short.** Long or extended cables are a common cause of drop-outs during the day. If the camera must sit far from the computer, use an active (powered) USB extension.
- **Windows PCs:** in the power plan, turn off **USB selective suspend**, so Windows does not cut power to an idle camera.
- **Camera mounted sideways for a portrait booth?** Set **CAMERA ROTATION** under **CAPTURE** on the same page.
- **Send us the log when asking for help:** **Camera Settings > Show Diagnostics > Copy Today's Logs**, then paste it in the chat.

## Troubleshooting

| Problem | Why | Fix |
|---|---|---|
| The camera never appears in **CAMERA DEVICE** | The body is not supported (A6400, first ZV-E10, a Nikon D-series and others) | Check the table in Prepare. Use a supported body, or an HDMI capture card as a webcam |
| A Canon does not appear, or **Error** shows `DEVICE_BUSY` or `COMM_PORT_IS_IN_USE` | EOS Utility or another app holds the camera | Quit it and stop it opening by itself (Step 2) |
| The camera appears but **Live View** stays **Inactive** | Camera Wi-Fi is on, or the camera fell asleep | Turn Wi-Fi off, turn auto power off off, and turn the camera off and on |
| A Sony shows up as a webcam | The camera is in **USB Streaming** mode | Set the USB mode to **PC Remote** |
| A Sony is missing on Windows only | The Sony driver is not installed | **Show Diagnostics > Install Sony Driver**, then replug |
| A Fujifilm is not found, or the **Error** names the USB connection mode | The connection mode is not tether shooting | Set **USB TETHER SHOOTING AUTO** (or **PC SHOOT AUTO**) |
| The booth shows the laptop's own camera instead of the DSLR | **Auto-detect** took the first camera on the list | Pick the DSLR under **CAMERA DEVICE** and tap **Set as Default** |
| The webcam is plugged in but the booth uses another camera | The webcam was never picked as the booth's camera | Pick the webcam under **CAMERA DEVICE** and tap **Set as Default** |
| The exposure lists do nothing | The mode dial is on Auto or a scene mode | Set **M**, **Av** or **Tv** (Canon), or **M**, **A** or **S** |
| "Camera Disconnected" comes back during the day | Flat battery, sleeping camera, hub or loose cable | Mains power, auto power off off, a direct port and a good cable |

More cases, with the exact on-screen messages: [Camera Problems](../troubleshooting/camera.md).

## Related

- [Supported Cameras](../reference/supported-cameras.md)
- [Camera Settings](../desktop-app/camera-setup/camera-settings.md)
- [Set Up Flash and Lighting](./flash-and-lighting.md)
- [Use Two or More Cameras](./multi-camera.md)
- [Camera Problems](../troubleshooting/camera.md)
