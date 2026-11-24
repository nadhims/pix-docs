---
sidebar_position: 3
title: Lock the Screen to the Booth
description: Stop the taskbar, notifications, widgets and edge swipes from appearing over the booth on a Windows touchscreen, and keep notifications, hot corners and the screen saver away on a Mac.
tags: [tutorials, booth, kiosk, touchscreen, windows, mac]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Lock the Screen to the Booth

In this tutorial you will stop the computer itself from showing anything over the booth: the taskbar when a customer swipes up, the notification panel, widgets, pop-ups and the screen saver. Allow about 15 minutes, plus a restart on Windows.

The Pixture Photobooth app already runs in full screen and stays on top of other windows once the computer is paired. What it cannot block depends on the system:

- **On a Mac**, the app's kiosk mode hides the Dock and the menu bar and turns off switching apps. What is left is notifications, hot corners and the screen saver.
- **On Windows**, the app is full screen, but Windows still answers swipes from the screen edges on a touchscreen: a swipe up shows the taskbar, from the right the notification centre, from the left the widgets. Hiding the taskbar is not enough, because the swipe still brings it back.

## When to Use It

- **A touchscreen booth that customers use on their own**: a mall kiosk, a self-service studio, a pop-up box.
- **A booth where children use the screen.** They swipe everything.
- **Any booth that shows a pop-up over the Start screen**: a "Windows needs to update" banner, a chat app message, a low-battery warning from a wireless mouse.

Not needed on a booth without a touchscreen where only you touch the keyboard, though the notification steps still help.

## Before You Start

- An administrator account on the booth computer.
- On Windows, the edition: **Settings > System > About** shows Windows 11 Home, Pro or another edition. Step 1 depends on it.
- Pixture Photobooth installed and paired. See [Set Up a Booth From Scratch](./set-up-a-booth.md).

## Step 1: Turn off edge swipes

<Tabs groupId="os">
<TabItem value="windows" label="Windows">

**On Windows 11, all editions:**

1. Open **Settings > Bluetooth & devices > Touch**.
2. Turn off **Three and four-finger touch gestures**.
3. Open **Touch screen edge gestures** and turn off **Swipe from the left edge of the screen** and **Swipe from the right edge of the screen**.

<!-- SHOT-NEEDED: windows: Settings > Bluetooth & devices > Touch with the gesture switches -->

**On Windows Pro, Enterprise or Education (Windows 10 1607 or later and Windows 11)**, also use Microsoft's kiosk policy, which blocks every edge swipe:

1. Press **Windows + R**, type `gpedit.msc` and press Enter.
2. Go to **Computer Configuration > Administrative Templates > Windows Components > Edge UI**.
3. Open **Allow edge swipe**, choose **Disabled**, and click **OK**.
4. Restart the computer.

Microsoft: with this policy disabled, "users won't be able to invoke any system UI by swiping in from any screen edge".

<!-- SHOT-NEEDED: windows: Group Policy Editor with Allow edge swipe set to Disabled -->

</TabItem>
<TabItem value="mac" label="Mac">

Nothing to do: macOS has no touchscreen edge swipes, and the booth app's kiosk mode keeps the Dock and menu bar hidden.

</TabItem>
</Tabs>

## Step 2: Hide the taskbar or Dock

<Tabs groupId="os">
<TabItem value="windows" label="Windows">

1. Right-click the taskbar and click **Taskbar settings**.
2. Under **Taskbar behaviors**, turn on **Automatically hide the taskbar**. On Windows 10 the switch is **Automatically hide the taskbar in desktop mode** (and **in tablet mode**).

This keeps the taskbar out of the way if the booth app is ever closed. On a touchscreen, Step 1 is what stops a swipe bringing it back.

<!-- SHOT-NEEDED: windows: Taskbar behaviors with Automatically hide the taskbar -->

</TabItem>
<TabItem value="mac" label="Mac">

Nothing to do: the booth app hides the Dock and menu bar while it runs.

</TabItem>
</Tabs>

## Step 3: Silence notifications

<Tabs groupId="os">
<TabItem value="windows" label="Windows">

1. Open **Settings > System > Notifications**.
2. Under **Turn on do not disturb automatically**, tick **When using an app in full-screen mode**.
3. For a booth that only runs Pixture, also turn **Notifications** off at the top of the same page.

On Windows 10 the same setting is **Focus assist** in **Settings > System**.

<!-- SHOT-NEEDED: windows: Settings > System > Notifications with do not disturb in full screen -->

</TabItem>
<TabItem value="mac" label="Mac">

1. Open **Control Center** and turn on **Do Not Disturb** in the **Focus** section.
2. In **System Settings > Notifications**, turn off notifications for every app you installed on the booth Mac (chat apps, cloud storage, printer utilities).

<!-- SHOT-NEEDED: mac: Control Center Focus with Do Not Disturb (personal items blurred) -->

</TabItem>
</Tabs>

## Step 4: Turn off hot corners and the screen saver (Mac)

<Tabs groupId="os">
<TabItem value="mac" label="Mac">

1. Open **System Settings > Desktop & Dock** and click **Hot Corners**.
2. Set each of the four corners to the dash (no action) and click **Done**. Otherwise a mouse or trackpad pushed into a corner can start the screen saver or lock the screen.
3. Turn off the screen saver: on macOS 26 and later in **System Settings > Wallpaper > Screen Saver**, set **Start Screen Saver** to **Never**. On earlier versions it is **Start Screen Saver when inactive** in **System Settings > Lock Screen**.

<!-- SHOT-NEEDED: mac: Hot Corners with all four set to the dash -->

</TabItem>
<TabItem value="windows" label="Windows">

Windows has no hot corners. The sleep and screen settings are in [Make the Booth Start by Itself After a Power Cut](./start-after-a-power-cut.md), Step 3.

</TabItem>
</Tabs>

## Check It Worked

1. Open the booth on its Start screen.
2. Swipe in from all four edges, and swipe up from the bottom, the way a customer would.
3. Move a mouse (if one is attached) into each corner and wait 10 seconds.
4. Nothing but the booth appears, and no notification shows up during a test session.

## Tips

- **Remove apps the booth does not need.** Every chat, cloud or update app is one more thing that can pop up. A booth computer runs Pixture Photobooth and the printer and camera drivers.
- **Sleep and screen-off settings** are in [Make the Booth Start by Itself After a Power Cut](./start-after-a-power-cut.md): a screen that turns itself off looks like a broken booth.
- **Need to use the computer during the day?** Open the operator menu, tap **Exit**, then **Exit App**. See [Lock the Booth and Use the Operator Menu](./operator-menu.md).

## Troubleshooting

| Problem | Why | Fix |
|---|---|---|
| A swipe up shows the taskbar | Windows answers edge swipes even over a full-screen app | Step 1 (touch gestures off; **Allow edge swipe** Disabled on Pro) |
| `gpedit.msc` does not open | Windows Home has no Group Policy Editor | Use the touch settings in Step 1 |
| The notification panel slides in from the right | Right-edge swipe is on | Step 1, **Swipe from the right edge of the screen** off |
| A pop-up appears over the Start screen | Notifications are on | Step 3 |
| The Mac shows the screen saver or locks | A hot corner or the screen saver timer | Step 4 |
| The taskbar or Dock shows and the booth is in a window | The booth app was closed or is not paired yet | Open Pixture Photobooth; a paired booth opens in full screen |

## Related

- [Make the Booth Start by Itself After a Power Cut](./start-after-a-power-cut.md)
- [Lock the Booth and Use the Operator Menu](./operator-menu.md)
- [System Requirements](../reference/system-requirements.md)
