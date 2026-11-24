---
sidebar_position: 2
title: Make the Booth Start by Itself After a Power Cut
description: Set up a Mac or Windows booth computer so it powers on when electricity returns, signs in without a password, never sleeps, does not restart for updates mid-day, and opens the Pixture Photobooth app by itself.
tags: [tutorials, booth, mac, windows, power, auto start, unattended]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Make the Booth Start by Itself After a Power Cut

In this tutorial you will set up the booth computer so that, when the power comes back after a cut, it switches itself on, signs in, opens the Pixture Photobooth app and goes straight to the Start screen, with nobody touching it. Allow about 20 minutes, plus a restart or two.

Four things have to be true for that to happen, and each one is a different setting:

1. The computer **powers on** when electricity returns (a setting in the computer itself).
2. It **signs in** without anyone typing a password.
3. It **does not sleep** and **does not restart for updates** during the day.
4. The Pixture Photobooth app **opens at sign-in**. This one is on by default.

## When to Use It

- **A self-service booth in a mall or a venue** where nobody is there when the building switches the power back on in the morning.
- **A venue that cuts the power at night** or switches the booth's socket off with the lights.
- **A pop-up box on a timer plug** that should come to life at opening time.
- **Any booth on shaky electricity**, so a short cut does not end your day.

Not needed for an event rental where you switch the booth on yourself, though the sleep and update steps still help there.

## Before You Start

- Access to the booth computer with an administrator account.
- For Windows: the computer's maker (Dell, HP, Lenovo, ASUS, a mini PC brand) so you know which key opens its setup screen.
- Pixture Photobooth installed and paired. See [Set Up a Booth From Scratch](./set-up-a-booth.md).

## Prepare

- **Use a computer account only for the booth.** Automatic sign-in skips the password, so anyone who switches the computer on is signed in. Do not use the account that holds your email or banking.
- **A Mac with FileVault cannot sign in by itself.** FileVault encrypts the disk and asks for a password every time the Mac starts, so after a power cut the Mac waits at the password screen. Apple also turns off automatic login while FileVault is on. For an unattended booth, turn FileVault off in **System Settings > Privacy & Security > FileVault**, and keep the Mac where it cannot be carried away.
- **MacBooks do not have the power-failure setting.** It is on desktop Macs (Mac mini, iMac, Mac Studio). A MacBook on its charger keeps running on its battery through a short cut, but it will not switch itself back on after the battery runs out.

## Step 1: Make the computer power on when electricity returns

<Tabs groupId="os">
<TabItem value="mac" label="Mac">

1. Open **System Settings** and click **Energy** (on macOS 13 and 14: **Energy Saver**).
2. Turn on **Start up automatically after a power failure**.

On a 2024 or newer Mac mini or iMac, or a 2025 or newer Mac Studio, with macOS 26.5 or later, the setting is a menu called **Start up when power is connected**: choose **After power failure**. **Always** also works, and switches the Mac on whenever power is connected.

<!-- SHOT-NEEDED: mac: System Settings > Energy with Start up automatically after a power failure -->

</TabItem>
<TabItem value="windows" label="Windows">

This setting lives in the computer's own setup screen (the BIOS or UEFI), not in Windows.

1. Restart the computer and press the setup key as soon as the maker's logo appears.
2. Find the power-loss setting (table below) and set it to **Power On**.
3. Save and exit (usually **F10**).

| Maker | Setup key | Where | Setting |
|---|---|---|---|
| Dell | F2 | Power Management | **AC Recovery** > Power On |
| HP | F10 | Advanced > Boot Options | **After Power Loss** > Power on |
| Lenovo ThinkCentre (older) | F1 | Power | **After Power Loss** > Power On |
| Lenovo ThinkCentre (newer, e.g. M70q Gen 3) | F1 | Power | **Automatic Power On** |
| ASUS motherboard | Delete | Advanced Mode > Advanced > APM Configuration | **Restore AC Power Loss** > Power On |
| Intel NUC | F2 | Power > Secondary Power Settings | **After Power Failure** > Power On |

Another brand, or a mini PC? Look under **Power**, **Advanced** or **Chipset** for a setting with "AC Power Loss", "After Power Failure" or "AC Back" in its name, and set it to on. The maker's manual names it.

<!-- SHOT-NEEDED: windows: BIOS power menu with the power-loss setting on Power On -->

</TabItem>
</Tabs>

## Step 2: Sign in without a password

<Tabs groupId="os">
<TabItem value="mac" label="Mac">

1. Open **System Settings > Users & Groups**.
2. Set **Automatically log in as** to the booth's account and type its password once.

If the option is dimmed, FileVault is on (see Prepare).

<!-- SHOT-NEEDED: mac: Users & Groups with Automatically log in as (names blurred) -->

</TabItem>
<TabItem value="windows" label="Windows">

Microsoft's own tool for this is **Autologon**, from Microsoft Sysinternals.

1. If the computer signs in with a Microsoft account and a PIN or face, first open **Settings > Accounts > Sign-in options** and, under **Additional settings**, turn off **For improved security, only allow Windows Hello sign-in for Microsoft accounts on this device** (Windows 10: **Require Windows Hello sign-in for Microsoft accounts**).
2. Download Autologon from Microsoft at learn.microsoft.com/sysinternals/downloads/autologon and run it.
3. Check the user name, type the account's password and click **Enable**.

Autologon stores the password encrypted on the computer. To skip automatic sign-in once, hold **Shift** while Windows starts.

<!-- SHOT-NEEDED: windows: Autologon window with Enable -->

</TabItem>
</Tabs>

## Step 3: Stop sleep and update restarts

<Tabs groupId="os">
<TabItem value="mac" label="Mac">

1. In **System Settings > Energy**, turn on **Prevent automatic sleeping when the display is off**.
2. In **System Settings > Lock Screen**, set **Turn display off on power adapter when inactive** to **Never**.
3. In **System Settings > General > Software Update**, click the info button next to **Automatic Updates** and turn off **Install macOS updates**. Install updates yourself on a day without customers.

<!-- SHOT-NEEDED: mac: Software Update automatic updates options -->

</TabItem>
<TabItem value="windows" label="Windows">

1. Open **Settings > System > Power & battery > Screen, sleep, & hibernate timeouts**. Set **When plugged in, turn my screen off after** and **When plugged in, make my device sleep after** to **Never**. On Windows 10 the same choices are under **Settings > System > Power & sleep**.
2. Open **Settings > Windows Update > Advanced options > Active hours**, choose **Manually**, and cover your opening hours. Windows does not restart for updates inside active hours.
3. Before a big event, open **Settings > Windows Update** and use **Pause updates** (up to 35 days on Windows 11).

<!-- SHOT-NEEDED: windows: Power & battery screen and sleep timeouts set to Never -->

</TabItem>
</Tabs>

## Step 4: Check that the booth app opens by itself

**Start on boot** is on by default. To check it, open the operator menu, tap **Admin Panel**, and make sure **Start on boot** ("Launch automatically when computer starts") is on.

![Admin Settings on the booth with the Start on boot row marked](/img/docs/steps/tutorials-start-after-a-power-cut--start-on-boot.webp)

Once the computer is paired, the app opens straight into the booth in full screen.

## Check It Worked

1. Switch the booth off **at the wall**, not with the power button. Wait 30 seconds.
2. Switch it back on at the wall and step away.
3. Within a few minutes the computer is on, signed in, and the booth shows its Start screen, with nobody touching it.

If it stops on the way, the table below says which step to check.

## Tips

- **To stop the booth opening at startup, turn off Start on boot.** Removing the app from Windows Startup apps or macOS Login Items does not stick: the app adds itself back every time it opens.
- **A small UPS** (battery backup) carries the booth through short dips without a restart, and gives a clean shutdown on a long cut.
- **Test with the real plug.** Venues often switch a whole socket strip; make sure the booth's plug is on the circuit that comes back first.
- After a power cut, open **Admin Panel** and check **Uploads**: photos taken while the internet was down upload once the booth is back online.

## Troubleshooting

| Problem | Why | Fix |
|---|---|---|
| The computer stays off when power returns | The power-loss setting is off | Step 1: Energy on a Mac, the BIOS on Windows |
| The Mac stops at the password screen | FileVault is on, or automatic login is off | Turn off FileVault, then set **Automatically log in as** |
| **Automatically log in as** is dimmed | FileVault is on | **Privacy & Security > FileVault** > turn it off |
| Windows stops at the sign-in screen | Automatic sign-in is not set, or Windows Hello only sign-in is on | Step 2 on Windows |
| The booth app does not open after sign-in | **Start on boot** is off | Admin Panel > **Start on boot** on |
| The booth went black in the afternoon | The computer slept or turned the screen off | Step 3 |
| The computer restarted during an event | A Windows or macOS update | Active hours and Pause updates (Windows), automatic updates off (Mac) |

## Related

- [Lock the Screen to the Booth](./lock-the-screen.md)
- [Lock the Booth and Use the Operator Menu](./operator-menu.md)
- [Offline Mode](../desktop-app/offline-mode.md)
- [System Requirements](../reference/system-requirements.md)
