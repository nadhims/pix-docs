---
sidebar_position: 5
title: Get a Bright Live View with Flash
description: Light a booth with a flash or studio strobes and still give customers a bright live view. Camera settings for flash, a modelling light or the camera's exposure preview switch per brand, and EXTERNAL FLASH for Canon DSLRs.
tags: [tutorials, camera, flash, lighting, live view]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Get a Bright Live View with Flash

In this tutorial you will set the camera up for flash, make the live view bright again so customers can see themselves, and make sure the flash fires on every photo. Allow about 20 minutes with the camera and flash in front of you.

Flash photos need a low ISO and a fast shutter. With those settings the scene is dark until the flash fires, and many cameras show that darkness in live view. Customers then pose in front of a black or murky screen, even though the photo itself comes out fine.

## When to Use It

- **You light the booth with a speedlite or studio strobes** and the booth screen shows a dark preview.
- **A studio-look booth or a wedding** where flash gives the sharp, clean photos you want, and customers still need a clear preview to pose.
- **A Canon DSLR with a wireless trigger** where the flash fires when you shoot by hand but never from the booth.

Not needed with continuous light (LED panels, ring lights, softboxes): the live view already shows the photo as it will look. A webcam cannot fire a flash; use continuous light with a webcam.

## Before You Start

- A camera body on USB: Canon, Sony, Nikon or Fujifilm. See [Supported Cameras](../reference/supported-cameras.md).
- A flash: the camera's pop-up flash, a speedlite on the hot shoe, or studio strobes on a wireless trigger.
- Pixture Photobooth 1.2.37 or newer for **EXTERNAL FLASH** (Canon DSLRs).
- The menu PIN, if the booth has one. See [Lock the Booth and Use the Operator Menu](./operator-menu.md).

## Prepare

- **Camera in M mode** (manual), so the booth's settings stick.
- **Focus once, then switch the lens to MF.** The booth fires the shutter without refocusing, so focus on where customers stand and lock it.
- **Flash on manual power**, not TTL, so every photo comes out the same. Start around half power and adjust after a test.
- **Know your flash sync speed.** It is in the camera's manual, usually 1/125 to 1/200. A faster shutter gives a dark band across the photo.

## Step 1: Check that the flash fires from the camera

1. Turn on the camera's live view (the **LV** button on a Canon DSLR).
2. Press the shutter button by hand.

If the flash fires, it will fire from the booth too: the booth presses the shutter the same way. If it fires only with live view off, and the camera is a Canon DSLR, Step 4 fixes it.

<!-- SHOT-NEEDED: hardware: camera back with live view on and the LV button, flash on the hot shoe -->

## Step 2: Set the camera for flash on the booth

1. Open the operator menu and tap **Camera Settings**.
2. Set **ISO** to 100 or 200.
3. Set **SHUTTER** at or below the sync speed, for example **1/125**.
4. Set **APERTURE** to f/5.6 to f/8, so a group stays sharp.
5. Set **WHITE BALANCE** to **Flash**.
6. Tap **Save Camera Settings**.

![Camera Settings with ISO, SHUTTER, APERTURE, WHITE BALANCE and Save Camera Settings marked](/img/docs/steps/tutorials-bright-live-view-with-flash--camera-exposure.webp)

The live view now looks dark. That is expected: the next step brings it back.

## Step 3: Make the live view bright

Pick one of the two fixes.

**A modelling light.** Turn on the strobe's built-in modelling lamp, or add a small continuous light pointed at where customers stand. The preview brightens and the flash still does the real lighting. This works on every camera.

**Or turn off the camera's exposure preview.** The camera then shows a bright live view whatever the settings are. Find the setting in the camera's own menu:

<Tabs groupId="camera-brand">
<TabItem value="canon" label="Canon">

- **DSLRs** (for example EOS 90D): in the shooting menu, set **Expo. simulation** to **Disable**. Canon: "The image is displayed at standard brightness, so it is easy to see."
- **Newer EOS R mirrorless** (for example EOS R7, R10): in the shooting menu, set **Display simulation** to **Disable**.

<!-- SHOT-NEEDED: hardware: Canon menu with Expo. simulation set to Disable -->

</TabItem>
<TabItem value="sony" label="Sony">

- **Newer bodies** (for example a7 IV): **MENU > Shooting > Shooting Display > Live View Display Set.**, then set **Live View Display** to **Setting Effect OFF**. Sony's manual names studio flash as the case where live view goes dark.
- **Older bodies** (for example a6000): **MENU > Custom Settings > Live View Display > Setting Effect OFF**.

<!-- SHOT-NEEDED: hardware: Sony menu with Live View Display set to Setting Effect OFF -->

</TabItem>
<TabItem value="nikon" label="Nikon Z">

In the **Custom Settings menu**, set **Apply settings to live view** to **Off**. Its number differs by model (d6 on the Z30, d7 on the Zfc).

<!-- SHOT-NEEDED: hardware: Nikon Z Custom Settings menu with Apply settings to live view set to Off -->

</TabItem>
<TabItem value="fujifilm" label="Fujifilm">

In **SET UP > SCREEN SET-UP**, set **PREVIEW EXP./WB IN MANUAL MODE** to **OFF**. Fujifilm's manual recommends **OFF** "when using a flash".

<!-- SHOT-NEEDED: hardware: Fujifilm SCREEN SET-UP menu with PREVIEW EXP./WB IN MANUAL MODE set to OFF -->

</TabItem>
</Tabs>

With exposure preview off, the live view no longer shows how bright the photo will be. Judge the exposure from a test photo, not from the screen.

## Step 4: Canon DSLR only: turn on EXTERNAL FLASH

Some Canon DSLRs do not fire a non-Canon flash or a wireless trigger while live view runs. Canon's EOS 600D manual says: "A non-Canon flash will not fire during Live View shooting." The booth can pause live view for each photo so the flash fires.

1. In **Camera Settings**, scroll down to **CAPTURE** and turn on **EXTERNAL FLASH**.
2. Tap **Save Camera Settings**.

![Camera Settings scrolled to CAPTURE with the EXTERNAL FLASH switch and Save Camera Settings marked](/img/docs/steps/tutorials-bright-live-view-with-flash--external-flash.webp)

Each photo now takes about 0.6 seconds longer and the preview blinks once. Leave it off when the flash already fires: Canon mirrorless cameras (the EOS R series) do not need it. With a non-Canon flash, Canon asks for a shutter speed of 1/200 or slower.

## Step 5: Take a test session

1. Tap **Back to Menu**, then **Start Booth**.
2. Run a full photo session, with someone standing where customers will stand.
3. Check the photos on the review screen and the print. Too dark: raise the flash power or open the aperture a stop. Too bright: lower the flash power.

## Check It Worked

- The live view is bright enough for customers to see themselves and pose.
- The flash fires on every photo of the session, not only the first.
- Photos and prints are evenly exposed, with no dark band across them.

## Tips

- **Some photos in a burst come out dark?** The flash had not recharged. Lengthen the countdown between shots in the Pix Design UI Editor (at an event: the event's **Edit appearance** > **Countdown**), or lower the flash power.
- **Speedlites on AA batteries slow down over a long event.** Studio strobes, or a speedlite with an external battery pack, recharge faster.
- **One large soft light** slightly above eye level, in front of the customers, is enough for most booths. Two lights at about 45 degrees on each side give even light for groups.
- Keep bright windows and lamps behind the camera, not behind the customers.

## Troubleshooting

| Problem | Why | Fix |
|---|---|---|
| The live view is black or very dark | The camera previews the flash exposure (low ISO, fast shutter) | Add a modelling light, or turn off exposure preview (Step 3) |
| The flash fires by hand but not from the booth | Canon DSLRs do not fire a non-Canon flash or trigger during live view | Turn on **EXTERNAL FLASH** (Step 4) |
| A dark band across the photo | The shutter is faster than the flash sync speed | Set **SHUTTER** to 1/125 or 1/160 |
| Every other photo is dark | The flash is still recharging | Longer countdown between shots, or lower flash power |
| People at the back of a group are soft | The aperture is too wide for the group's depth | Set **APERTURE** to f/8 |
| The photo is out of focus after a while | The camera refocused, or someone touched the lens | Focus on where customers stand and switch the lens to **MF** |

## Related

- [Lighting & Flash](../desktop-app/camera-setup/lighting-and-flash.md)
- [Camera Settings](../desktop-app/camera-setup/camera-settings.md)
- [Lock the Booth and Use the Operator Menu](./operator-menu.md)
