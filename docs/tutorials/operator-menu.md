---
sidebar_position: 4
title: Lock the Booth and Use the Operator Menu
description: Set a menu PIN for every booth or one booth, open the hidden operator menu at the booth, find your way around its pages, and get back to customers. With the shortcuts staff use most during an event.
tags: [tutorials, booth, operator menu, pin, security]
---

# Lock the Booth and Use the Operator Menu

In this tutorial you will lock the booth's operator menu with a PIN, open the menu at the booth, find the pages you need during a day of work, and hand the booth back to customers. Allow about 10 minutes.

The operator menu is where you change the camera, printer and capture settings, reprint a photo, upload waiting photos and free up space. Customers never see it: it sits behind a hidden corner and, once you set one, a PIN.

## When to Use It

- **A self-service booth in a mall or a venue.** Nobody watches the booth all day. Without a PIN, a curious customer who taps the corner twice lands in your camera and printer settings.
- **An event with staff.** Your staff need to swap paper, reprint a photo or fix the camera without your dashboard login. Give them the PIN, not your password.
- **Several booths in one place.** One PIN for the whole account is easy to remember; give one booth its own PIN when it belongs to a partner or sits somewhere riskier.

Set a PIN on every booth in a public place. The only booth that can do without one is a computer only you ever touch.

## Before You Start

- A booth paired with the Pixture Photobooth app. See [Set Up a Booth From Scratch](./set-up-a-booth.md).
- Access to **Settings** in the Pixture dashboard (the account owner has it).
- Any plan: the menu PIN works on Pix Starter and Pix Pro.

## Step 1: Set a menu PIN for all your booths

1. In the dashboard, click **Settings** in the sidebar.
2. Click **Security**.
3. Under **Menu Access PIN**, type a PIN of 4 to 8 digits in **PIN Code (4-8 digits)**.
4. Type it again in **Confirm PIN**.
5. Click **Set PIN**. The card now says "Menu PIN is currently enabled".

![Settings > Security with Settings, Security, PIN Code, Confirm PIN and Set PIN marked](/img/docs/steps/tutorials-operator-menu--settings-security-pin.webp)

Every booth on the account now asks for this PIN. A booth that is online checks it with Pixture at once; a booth that is offline uses the PIN it last downloaded, so it still locks.

## Step 2: Give one booth its own PIN (optional)

1. Click **Booths** in the sidebar and open the booth.
2. Open the **Settings** tab.
3. Under **Menu PIN** ("Lock the operator menu on the kiosk."), type 4 to 8 digits.
4. Click **Set PIN**.

![Booth Settings tab with Booths, the Settings tab, the Menu PIN field and Set PIN marked](/img/docs/steps/tutorials-operator-menu--booth-settings-menu-pin.webp)

This booth now asks for its own PIN instead of the account PIN. While a booth has no PIN of its own, its **Menu PIN** card reads "PIN enabled (org-level)". Click **Disable** to go back to the account PIN.

## Step 3: Open the menu at the booth

1. On any customer screen, tap the top-right corner twice within 3 seconds. The tap area is a 120 by 120 pixel square with a faint padlock in it.
2. The **Enter Admin PIN** pad appears. Type the PIN and tap the tick. The tick works from 4 digits; an 8-digit PIN opens the menu by itself on the last digit.
3. Changed your mind? Tap **Cancel** and the customer screen comes back.

![The Enter Admin PIN pad on the booth with the title, the tick and Cancel marked](/img/docs/steps/tutorials-operator-menu--pin-pad.webp)

A wrong PIN shows "Incorrect PIN". After about 20 tries in a minute the booth refuses every PIN for a short while, so guessing does not work.

## Step 4: Find your way around the menu

The menu opens with a readiness check on the left ("Ready to start" when the camera and printer are fine) and the settings on the right.

1. **Camera Settings**: choose the camera, its exposure, zoom, rotation and flash.
2. **Printer Settings**: choose the printer, paper, orientation, copies per session and print alignment, and keep count of the paper left.
3. **Capture Settings**: whether the booth takes photos, video or slow motion, and the slow-motion speeds.
4. **Hardware API**: coin and note acceptors, card readers and other devices that talk to the booth.
5. **Admin Panel**: uploads, print history, storage and what the computer does when it starts (next step).
6. **Start Booth**: back to the customer screens.

![The operator menu with Camera Settings, Printer Settings, Capture Settings, Hardware API, Admin Panel and Start Booth marked](/img/docs/steps/tutorials-operator-menu--menu.webp)

The bar at the top shows **Internet**, **API** (Pixture's servers) and **Uploads**. Green is fine; red tells you where to look before customers arrive.

## Step 5: Use the Admin Panel

1. **Start on boot**: leave it on, so the booth opens by itself when the computer starts. See [Make the Booth Start by Itself After a Power Cut](./start-after-a-power-cut.md).
2. **Upload now**: sends photos that are still waiting, for example after the internet came back.
3. **Print history**: the photos printed on this computer. Tap **Print again** on one to reprint it.
4. **Clean storage**: deletes the photo files kept on this computer, to free up space. **Print again** no longer works for the sessions you clean, so reprint first.

![Admin Settings with Start on boot, Upload now, Print history and Clean storage marked](/img/docs/steps/tutorials-operator-menu--admin-panel.webp)

## Step 6: Hand the booth back to customers

Tap **Start Booth** in the menu (or **Back to Menu**, then **Start Booth**). The booth goes back to its Start screen. A photo session that was running when you opened the menu is not affected; settings you changed apply from the next session.

## Check It Worked

- Tap the top-right corner twice: the **Enter Admin PIN** pad appears.
- A wrong PIN shows "Incorrect PIN" and the menu stays closed.
- The right PIN opens the menu, and **Start Booth** brings back the customer screens.

## Tips

- **Fastest reprint during an event:** two taps in the corner, PIN, **Admin Panel**, **Print history**, then **Print again**. Teach it to whoever staffs the booth.
- **Move the padlock** when your design puts a button in the top-right corner: in **Pix Design**, open the booth's screen design in the UI Editor, and on the Start screen set **Lock button** to another corner (**Top left**, **Bottom right** or **Bottom left**) and its opacity.
- **Change the PIN when staff leave.** Set a new one in **Settings > Security**; online booths use it straight away.
- Avoid PINs like 1234, 0000 or the year. Customers try those first.

## Troubleshooting

| Problem | Why | Fix |
|---|---|---|
| Two taps in the corner do nothing | The taps were more than 3 seconds apart, or the padlock was moved to another corner in Pix Design | Tap twice quickly in the corner set under **Lock button** |
| The menu opens without asking for a PIN | No PIN is set for the account or for this booth | Set one in **Settings > Security** (Step 1) |
| "Incorrect PIN" with the right PIN | This booth has its own PIN (Step 2), which replaces the account PIN | Use the booth's PIN, or click **Disable** under the booth's **Menu PIN** |
| A new PIN does not work on one booth | That booth is offline and still uses the PIN it downloaded last | Use the old PIN until the booth is back online |
| Every PIN is refused for a while | Too many tries in a minute | Wait a minute and type it once, carefully |

## Related

- [Operator Menu reference](../desktop-app/admin-panel.md)
- [Make the Booth Start by Itself After a Power Cut](./start-after-a-power-cut.md)
- [Lock the Screen to the Booth](./lock-the-screen.md)
- [Settings](../dashboard/settings.md)
