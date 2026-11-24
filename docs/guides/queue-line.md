---
sidebar_position: 3
title: Queue Line
description: Let customers take a number on their phone and be called to your booth by a screen and a voice. Set up the line, pick a mode, give each booth a letter, and run it from the staff page.
tags: [guides, queue, multi-booth, pix-pro]
---

# Queue Line

A queue line lets customers get a number on their phone, walk away, and come back when the display calls them. Each booth has its own line, so a customer waiting for Booth A is not stuck behind someone waiting for Booth B. At the end you have a line running on your booths, a display on a TV, and a phone ticket for every customer.

The queue line is a **Pix Pro** feature. It lives inside a **Multi-Booth** group, and every booth in the group needs the Pixture Photobooth **1.2.37** or newer.

## Set it up

Turn the line on in your group's **Queue** tab (**Off**, **Hybrid** or **Online only**), check each booth's letter (A to Z without I and O; numbers count per booth, per day), set opening hours if you want them, then put the display on a TV and the poster next to the booths. The step-by-step, with what to prepare and what goes wrong, is in [Run a Queue Line](../tutorials/queue-line.md).

Booths that skip the line are listed in warnings at the top of the Queue tab: an app older than 1.2.37, a computer on Pix Starter, or a booth whose Payment screen is off.

## How customers get a number

A customer gets a number in one of three ways. In each case they pick the booth they want.

1. **Buy in your Website shop.** The booth chosen at checkout is the booth whose line they join.
2. **Central Cashier.** A sale at the counter, or online, gives a number too. See [Multi-Booth Setup](./multi-booth-setup.md#step-3-choose-how-guests-pay).
3. **Already have a code.** On the join page, the customer taps **Already have a code?**, types the code, and gets a number for it. Customers reach the join page from the QR on the display, the poster or the booth.

A code works at every booth in the group, even when its number belongs to one booth's line.

:::note Central Cashier codes expire
A Central Cashier code expires at the end of the day after it is bought (UTC time). Sell codes for use the same day.
:::

## What the customer sees

After getting a number, the customer's phone shows a live ticket page. It has their number, the booth, how many people are ahead and a rough wait. They should keep the page open: it buzzes and chimes when they are called.

When their number is called:

- The ticket page shows **It's your turn** and the booth to go to.
- They have **2 minutes** to reach the booth.
- At the booth, they enter their code to check in.

If they miss it, the ticket says **You missed your turn**. They tap **I'm here, put me back** once to return to the line, right after the next person. They keep their code. A second miss sends them to the back.

A ticket for several sessions works as one ticket: the customer plays all their sessions back to back when called.

## What the booth does

With the line on, the booth shows the line. A free booth calls the next number in its own line. In **Hybrid**, a booth with nobody waiting works as usual, so walk-ups can pay at the booth. In **Online only**, the booth starts only for a called number. A customer who types a code when it is not their turn sees a message with their place in line.

## Run the line from the staff page

Open **Staff page** on the Queue tab. Each booth has a card with its line. For each ticket you can:

- **Call** a number to a free booth early. The line calls the next number on its own whenever a booth frees up.
- **Skip** a number. The customer sees that they missed their turn.
- **Put back** a missed number into the line.
- **Move to** another booth. The ticket keeps its number and its place in time. A12 moved to Booth B is still A12.
- **Close line** or **Open line** for the whole group, for example during a break.
- **Sell at the counter** to sell a session to a customer standing in front of you. It uses your Central Cashier products and prices, and the customer gets a number.

## Limits

- The queue line needs Pix Pro and Pixture Photobooth 1.2.37 or newer. An older booth is listed in the Queue tab warning.
- Central Cashier codes expire at the end of the day after purchase (UTC time).
- A booth without a letter never calls a number. It shows as not in line.
- Letters run A to Z without I and O. A group with more booths than letters cannot give every booth a line.

## FAQ

**Why is the display silent?**
Browsers block sound until someone taps the page. Tap the screen once, or tap the **Tap for sound** pill. On a TV that nobody is next to, start Chrome with `--autoplay-policy=no-user-gesture-required` so sound works without a tap. See [Queue Display](../dashboard/pix-design/queue-display.md#sound).

**What happens if a customer misses their call?**
After 2 minutes the booth moves on to the next number. The customer's ticket says **You missed your turn**, and they tap **I'm here, put me back** once to return to the line. They never lose a paid session.

**Can I move a ticket to another booth?**
Yes. On the **Staff page**, open the ticket's menu and choose **Move to**. The ticket keeps its number and its place in time.

**What if the line closes with people still waiting?**
They keep their place and are first when the line opens again.

## Related

- [Queue Display](../dashboard/pix-design/queue-display.md)
- [Multi-Booth Setup](./multi-booth-setup.md)
- [Booth Management](../dashboard/booth-management.md)
- [Plans & Pricing](../pricing/plans.md)
