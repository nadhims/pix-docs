---
sidebar_position: 5
title: Event Mode
description: How a computer runs the events made on the dashboard's Events page, from pairing or signing in to the event list, Launch event, Start Booth, the operator menu, the license and what happens when an event is archived.
tags: [desktop-app, events]
---

# Event Mode

Pixture Photobooth runs a computer in one of two setups. A **Kiosk** is one self-service photobooth: the computer is paired to a booth from the **Booths** page and runs that booth every day. An **Event computer** runs the events you make on the dashboard's [Events](../dashboard/events.md) page: between events it waits on its own list of your events, and you launch the one you are working today.

Event mode needs Pixture Photobooth 1.2.9 or later. This page describes 1.2.15 and later; update older computers first. See [Software Updates](./software-updates.md).

| | Kiosk | Event computer |
|---|---|---|
| Set up from | A booth's pairing code on the **Booths** page, or email sign-in and a booth from the list | An event's **Pair a computer** code, or email sign-in and **Event mode** |
| Runs | Its one booth | Whichever event you launch, one at a time |
| Without a license | Watermarked, or blocked on a Pix Pro account | Does not start sessions. There is no watermarked mode |
| Prices | The booth's **Pricing** tab | The event's **Pay Per Session** setting |

An **Event Pass** is a license, not a setup: 24 hours of Pix Pro on one computer. It works on a Kiosk and on an Event computer alike. Buying one does not put a computer in Event mode.

## Putting a Computer in Event Mode

### With an Event's Pairing Code

1. On the dashboard, open the event and click **+ Pair a computer** on the **Setup** tab.
2. On the computer, enter the 6-digit code on the login screen's **Pairing Code** tab and click **Pair Device**. On a computer that is already running, open the operator menu and use **Pair with a code** instead, so its Pix Pro moves with it.

The computer goes into Event mode and opens its event list with that event selected. Pairing does not start the event; you still launch it.

### With Email Sign-in

1. On the login screen, open the **Email & Password** tab and sign in.
2. **Select a Booth** lists your free kiosk booths. Above them is the **Event mode** row: "Shows this account's events. Pick one to launch." Tap it.

The footer reads "Switching to event mode..." and the event list opens. An account with no free kiosk booth, such as one that only runs events, still gets this page when the row is offered: the **Event mode** row alone, with **Back to sign-in**.

Whether the row is offered:

| Situation | What the picker shows |
|---|---|
| You have the **Manage events** permission and this computer is not a kiosk | The **Event mode** row |
| This computer is the kiosk on an active booth, in your account or any other | The row greyed out, under a red banner: "This computer is the kiosk at [booth]. To use it for events, open the menu → Pair with a code, with a code from the Events page." |
| You do not have the **Manage events** permission | No row, only booths. With no booths either, sign-in stops at "No booths found for this account" |

If the switch is refused, the banner reads "This computer is on a kiosk booth. Unlink it first.", "This computer doesn't match its record. Pair it with a code instead." or "Couldn't switch this computer to Event mode. Please try again."

### Going Back to Kiosk

Pair the computer with a booth's code from the **Booths** page (**Pair with a code** in the operator menu), or **Logout** and pair or sign in to a booth. Pix Pro stays on the computer when you pair with a code. An Event Pass running on it is set aside for your next Event computer (see [Logout](#exit-and-logout)); it never licenses a kiosk.

## The Event List

An Event computer stays signed in between events. When it is not running one, it opens on **Events**, in a normal window.

- **The list** groups your events under **Ongoing**, **Upcoming** and **Ended**, each with a count. An event is ongoing from its first date until 06:00 the morning after its last date, in your organisation's time zone; an event with no date is always ongoing. Each row shows a small preview of the event's start screen, the date and the town, plus **Last run here** for the event this computer launched last and **Not set up** for an event with no templates. Ended events read **Ended · still launchable**: they stay on the list, and can be launched, until you archive them. "Events are created and edited on the dashboard. Archived events don't show here."
- **The card** on the right shows the selected event: its date, time and venue, a **Start screen** preview, the **Booth modes**, and the **Capture**, **Print** and **Sharing** outputs. An event with no templates says "No templates yet. Add them on the dashboard."
- **The header** shows the Internet and API status, a license pill (**No pass running**, or the same badge as the operator menu, such as **Event Pass until HH:mm** or **Pix Pro**), **Manage event**, which opens that event's page on the dashboard in your browser, and **Launch event**.

The list refreshes each time you come back to the window, so an event you just made on the dashboard appears. An empty account shows "No events yet".

## Launch an Event

1. Pick the event on the list.
2. Click **Launch event**. If your account has a **Menu Access PIN** (dashboard **Settings**), type it first.

The computer joins its own station for that event; Launch itself uses no license. Then:

- With an Event Pass or Pix Pro already running on this computer, the booth goes straight to the event's start screen, full screen.
- Otherwise the operator menu opens, so you can choose how to license it with **Start Booth**.

**Launch event** is greyed out with "Add templates on the dashboard first" for an event that has a photo mode and no templates. If the event was archived in the meantime, the list says "This event is no longer available." and reloads. A computer that has never loaded your account settings says "Connect to the internet to launch this event."

Several computers can run the same event: each one pairs or launches on its own and gets its own station.

## The Operator Menu on an Event Computer

On the start screen, open the menu with the lock button in the screen's corner: double-tap it, or, when your account has a Menu PIN, tap it and type the PIN. The hidden corner of the [Operator Menu](./admin-panel.md) works too.

The menu card shows the event name and the computer's station, and a **Licence** line under "Ready to start" or "Before you start":

| Line | Meaning |
|---|---|
| "Pix Pro is on this computer." | Licensed by Pix Pro |
| "Event Pass runs until Sun 18 Oct, 14:32." | An Event Pass is running here |
| "That uses a free Pix Pro." | **Start Booth** will put a Pix Pro from your account on this computer |
| "That starts 1 Event Pass (2 left)." | **Start Booth** will start one of your unused Event Passes |
| "No Event Pass or Pix Pro left. Buy one before Start Booth." | Nothing to use |

The top bar has **Back to events** and **Start Booth**. The settings column has the usual Camera, Printer, Capture and Hardware API settings, the Admin Panel, **Extend Event Pass 24h (N left)**, **Pair with a code** and **Exit**. **Use an Event Pass on this computer** is a kiosk button and does not appear here.

### Start Booth

**Start Booth** takes the booth to the event's start screen, full screen. It checks the license in this order:

1. An Event Pass or Pix Pro already running here: straight to the start screen.
2. No internet: "Connect to the internet to start the booth". Nothing is used.
3. A Pix Pro in your account that is on no computer: it goes on this computer, no question asked, and the booth starts.
4. An unused Event Pass: the **Use 1 Event Pass** card shows **Active until** with the end time and how many passes are left. Its **Start Booth** starts the pass; **Not yet** closes the card. If a pass was set aside when another Event computer logged out, that one continues first, with its own end time.
5. Nothing: **No Event Pass or Pix Pro**, "Scan to buy one on your phone", with a QR code to `pixture.io/licenses`, **Check again** and **Not yet**. While the card is open the booth checks every few seconds and moves on by itself once your purchase lands.

A computer started this way comes back to the start screen after a restart or power cut, never to the menu.

### Back to Events

**Back to events** takes the computer off its station and back to the event list. The event keeps running for any other computer on it, and the license stays on this computer for the next event you launch. Without a connection it stays put: "Couldn't leave the event. Check the connection and try again."

### Exit and Logout

**Exit** opens a card with **Exit App** and **Logout**. Neither ends the event, and the booth never asks whether the event is over.

- **Exit App** closes the app. The computer stays signed in and reopens where it was: the start screen, the menu (behind the PIN) or the event list.
- **Logout** (double-tap, then the PIN if one is set) signs the computer out of Event mode and returns it to the login screen. Pix Pro goes back to your account. A running Event Pass leaves the computer but keeps its end time, and the next Event computer that uses **Start Booth** continues it.

## The License on an Event Computer

An Event computer runs on an Event Pass or Pix Pro and never watermarked. The badges, the warnings before a pass ends and the Devices page are the same as on any computer; see [Pix Pro on the Booth](./licence-on-the-booth.md).

- **When a pass runs out mid-event**, the next guest who taps start keeps the booth going: the booth puts a free Pix Pro on the computer, or else starts one of your unused Event Passes, with no question asked. When it next sits idle, a notice tells the operator, for example **New Event Pass started** with "Runs until … · 1 left". It does this only at a guest's tap, after checking that templates and the camera are ready, never on the idle screen.
- **When there is nothing to use**, or the booth is offline, the guest's tap opens the license screen instead ("Use an Event Pass for today?", **Use Pix Pro**, or "No Event Passes left" with **Buy Event Passes** and **Recheck**). Its buttons sit behind the menu PIN. See [On an Event](./licence-on-the-booth.md#on-an-event).
- **Extend Event Pass 24h (N left)** in the menu shows while an Event Pass runs on this computer and you have an unused one. It spends that pass to add 24 hours, then reads "Extended until …". **Extend 24h** on the event page does the same from the dashboard.

## When an Event Is Archived or the Computer Is Removed

An Event computer is never stopped by the event's dates: an ended event keeps running on a computer that launched it until you archive it. The server's answer always waits for the booth to be idle on the start screen; a guest mid-session finishes first.

| On the dashboard | What the Event computer does |
|---|---|
| **Archive event**, **Unlink** on the computer's row on the event page, or the event deleted | Stops taking new guests, then goes back to the event list, still signed in. **Start Booth** in the menu reads "This event was closed on the dashboard." |
| **Remove** on the computer's menu on the **Devices** page | Signs out to the login screen |

## Payment

On an Event computer guests pay as the event says. With **Pay Per Session** on, the booth asks for the event's session price, with its packages and payment gateway, in a payment popup on the start screen. With it off, every session is free. A booth's **Pricing** tab and the **Payment Screen** page of a UI project do not apply. See [Events](../dashboard/events.md) for the event's payment settings.

## Related

- [Events](../dashboard/events.md)
- [Event Start Screen](../dashboard/event-start-screen.md)
- [Pix Pro on the Booth](./licence-on-the-booth.md)
- [Operator Menu](./admin-panel.md)
- [Event Video Modes](./event-video-modes.md)
- [Device Management](../dashboard/device-management.md)
