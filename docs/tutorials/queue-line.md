---
sidebar_position: 51
title: Run a Queue Line
description: Let customers take a number on their phone and walk away, then call them back to your booths with a TV screen, a voice and a buzz on their phone.
tags: [tutorials, queue, multi-booth, pix-pro, kiosk]
---

# Run a Queue Line

In this tutorial you will turn on a queue line for your booths, put the queue display on a TV, print the poster with the QR code, and run the line from the staff page. At the end, customers take a number on their phone, go shopping, and come back when the TV, a voice and their phone call them. Allow about 20 minutes, plus the time to set up the TV.

## When to Use It

- **A self-service booth in a busy mall.** On a Saturday afternoon twenty people stand in front of the booth and half of them give up. With a line, they take a number, walk around the mall and come back when called.
- **A multi-booth studio.** Each booth has its own line (A1, A2 for Booth A; B1, B2 for Booth B), so a customer waiting for the big booth is not stuck behind someone waiting for the small one.
- **A pop-up with a cashier.** Customers pay once at a counter, get a code and a number, and the booths call them in order.

Not for an event where guests use the booth for free: event computers never follow a line. For a quiet booth with no queue, leave the line **Off**: it adds a step for every customer.

## Before You Start

- **Pix Pro.** The queue line is a Pix Pro feature, and every booth that follows the line needs its computer on Pix Pro. A booth on Pix Starter skips the line.
- **A Multi-Booth group** with your booths in it. A group can hold a single booth. See [Set Up a Multi-Booth Group](./multi-booth-group.md).
- **Pixture Photobooth 1.2.37 or newer** on every booth. An older booth ignores the line.
- **The Payment screen on** in each booth's screen design. The customer types their code there, so a booth whose Payment screen is off skips the line. Check it in **Pix Design > UI Editor**.
- **A way to sell a number**: your Website shop or online shop, or a Central cashier (Step 6). Customers need a paid code to join.
- **Internet on every booth** while the line is on. A booth that loses it shows "Booth reconnecting" and waits.
- **A TV or monitor with a browser** for the queue display, ideally with speakers for the voice.

## Prepare

- **Place the TV where people wait,** not inside the booth area. Customers glance at it from a café table or a shop next door; the number must be readable from about 5 metres.
- **Put the poster next to every booth and at the entrance.** Its QR code opens the page where customers pick a booth and get a number.
- **Plan the booth letters.** Each booth gets one letter, A to Z without I and O (they look like 1 and 0 on a TV). Stick the same letter on the booth itself so customers find "Booth B" easily.
- **A booth with a coin or note acceptor that starts sessions** (the **F13 paid signal** on the booth's **Hardware API** page) skips the line, because the money is already in before the booth can ask for a number. Use the line on booths that take payment on screen or by code.

## Step 1: Turn the Line On

1. Open **Booths** and open your Multi-Booth group.
2. Go to the **Queue** tab.
3. Under **Queue line**, tap a mode. It saves at once.

| Mode | What happens |
|---|---|
| **Off** | No line. Booths work as usual. |
| **Hybrid** | Walk-ins welcome. When someone is in line, the booth waits for their number. |
| **Online only** | Every customer needs a number. The booth starts only for a called number. |

![Multi-Booth Queue tab with the line on Hybrid, Any time / Set hours and the Booth letters card](/img/docs/steps/tutorials-queue-line--queue-tab.webp)

Pick **Hybrid** for most places: when nobody is waiting, a walk-up customer pays at the booth as usual; as soon as someone has a number, the booth waits for them. Pick **Online only** when the crowd is so big that every customer should take a number.

## Step 2: Check the Booth Letters and Warnings

1. With the line on, the **Booth letters** card shows each booth with its letter and how many people are in line ("2 in line", or "Not in line" without a letter). Pixture gives letters in booth-name order.
2. To change a letter, tap it and pick a new one in **Pick a letter**. Letters another booth uses are greyed out.
3. **Take out of line** removes the booth from the queue (its numbers carry over). A booth without a letter never calls anyone.
4. Read the warnings at the top of the card. Each has **Show**, which lists the booths:
   - "1 booth needs app 1.2.37 or newer": update that booth.
   - "1 booth skips the line (on Starter)": put its computer on Pix Pro on the **Computers** page.
   - "1 booth skips the line (Payment Screen off)": turn the Payment screen back on in **Pix Design > UI Editor**.

Numbers count per booth, per day: Booth A hands out A1, A2, A3, and each line starts again at 1 the next day.

## Step 3: Set Opening Hours (Optional)

1. Next to the modes, the line shows **Any time**. Tap **Set hours**.
2. Choose **Opens** and **Closes**, and tap **Save**.
3. **Clear** goes back to **Any time**.

Outside those hours the booths call nobody, and the join page says "Line opens at" the opening time. Customers can still take a number before opening and keep their place; the line calls them in order when it opens. A closing time earlier than the opening time runs the line past midnight.

## Step 4: Put the Queue Display on a TV

1. On the **Queue display** card, tap **Design** to pick the layout (**Board**, **Spotlight** or **Rows**), colours and font. See [Queue Display](../dashboard/pix-design/queue-display.md).
2. **Staff page** opens the page your staff run the line from (Step 7).
3. **Print poster** opens an A4 sign with the QR code and the steps, in English and Indonesian.
4. **Open display** opens the display page. Open the same link in the TV's browser, full screen.

![The Queue display card with Design, Staff page, Print poster and Open display marked](/img/docs/steps/tutorials-queue-line--queue-display-card.webp)

The display calls each number with a voice and a chime. Browsers keep a page silent until someone taps it, so tap the screen once, or the **Tap for sound** pill. For a TV that nobody touches, start Chrome with `--autoplay-policy=no-user-gesture-required`. When the line is idle, the display shows how to get a number and the QR code.

<!-- SHOT-NEEDED: hardware: a TV at a venue showing the queue display Board layout with A12 called -->

## Step 5: Print and Place the Poster

1. Tap **Print poster** and print it on A4.
2. Put one next to each booth and one where people walk in.

The QR on the poster, the display and the booth all lead to the same join page. There the customer taps a booth under **Pick a booth** (each shows how many are in line), then **Buy a session**, or types a code under **Already have a code?** and taps **Get my number**.

<!-- SHOT-NEEDED: phone: the join page with Pick a booth, Buy a session and Already have a code? -->

## Step 6: Decide How Customers Get a Number

A customer joins the line with a paid code, in one of three ways. Each time they pick the booth they want.

1. **Buy online.** **Buy a session** on the join page opens your shop (your Website shop, or the group's online shop). After paying, the order gets a place in line and the customer can tap **See your place in line**.
2. **Central cashier.** With **Central cashier** on the group's **Cashier** tab, a sale at the counter or online gives a code, and the customer gets a number with it. See [Set Up a Multi-Booth Group](./multi-booth-group.md).
3. **Already have a code.** A customer who bought a code earlier types it under **Already have a code?** and taps **Get my number**.

The phone then shows a live ticket: their number, the booth, how many are ahead and a rough wait. They keep that page open; it buzzes and chimes when they are called.

<!-- SHOT-NEEDED: phone: the ticket page with Your place in line, the number A3, 2 ahead, about 6 min -->

## Step 7: Run the Line from the Staff Page

1. Tap **Staff page** on the Queue tab. The top shows **Open** or **Closed**, how many are waiting and how many booths are free.
2. Each booth has a card with its letter, a chip (**Free**, **Calling**, **In session** or **Offline**) and its line. On a free booth, **Call A4** calls the next number now; the line also calls the next number by itself whenever a booth frees up.
3. Open a ticket's menu (the three dots). It shows the actions that fit that ticket: **Call now** (its booth is free), **Skip** (the customer missed it), **Put back** (a called or missed ticket goes to the back of the line) or **Move to** another booth. A moved ticket keeps its number and its place in time: A12 moved to Booth B is still A12.
4. **Close line** stops calling for the whole group, for example during a break; **Open line** starts it again. People in line keep their place.
5. **Sell at the counter** opens the shop for a customer standing in front of you; they pay and get a number.
6. **Open display** opens the TV page.

![Staff page with booth A calling A3, booth B free with Call B2, a ticket menu open and Close line, Sell at the counter and Open display marked](/img/docs/steps/tutorials-queue-line--staff-page.webp)

## Check It Worked

- With someone in line, a free booth shows the called number across the top of its start screen ("A3, come to this booth"), and the TV calls it out loud.

  ![The booth's start screen with the band A3, come to this booth marked](/img/docs/steps/tutorials-queue-line--booth-calling.webp)

- The customer types their code on the booth's Payment screen and the session starts. They have **2 minutes** to check in after the call.
- In **Online only** (or **Hybrid** with people waiting), a booth nobody is called to shows a QR code and "Scan to get a number" instead of the start button.

  ![The booth covered by a QR code with Scan to get a number marked](/img/docs/steps/tutorials-queue-line--booth-get-number.webp)

- A customer who types a code out of turn sees "Not your turn yet" with their number and how many are ahead.

## Tips

- **Start with Hybrid on a weekday** to get your staff used to the staff page, then switch to **Online only** for weekends and holidays.
- **Missed turns are friendly.** After 2 minutes the booth moves on and the ticket says **You missed your turn**. The customer taps **I'm here, put me back** once to go back in right after the next person; a second miss sends them to the back. They never lose a paid session.
- **Several sessions on one ticket** play back to back: the booth keeps the customer for their next session ("A3, your next session").
- **Shop codes stay valid while they wait.** A code bought online does not expire while its ticket is in line and the line is on.
- **Name the booths before turning the line on,** because letters follow booth-name order.
- **Tell staff not to close the browser tab of the display.** Bookmark **Open display** on the TV so it comes back after a power cut.

## Troubleshooting

| Problem | Why | Fix |
|---|---|---|
| A booth never calls anyone | It has no letter, or it skips the line (Starter, Payment screen off, F13 paid signal, older app) | Check the warnings and the **Booth letters** card on the Queue tab |
| The booth shows "Booth reconnecting" | The booth lost the internet; the line needs it | Fix the connection; the booth picks the line up again by itself |
| The booth shows "The line is closed" | Outside the opening hours, or staff tapped **Close line** | Tap **Open line** on the staff page, or change the hours |
| The TV calls numbers without sound | The browser blocks sound until someone taps the page | Tap the screen or **Tap for sound**; for an unattended TV start Chrome with `--autoplay-policy=no-user-gesture-required` |
| "That code does not work here" on the join page | The code belongs to another group or account, or it is used up or expired | Check the code; sell a new one at the counter |
| A customer says "Not your turn yet" at the booth | Someone else in that booth's line is ahead of them | Let them wait for the call, or **Call now** from the staff page |
| A customer's number was skipped | They did not check in within 2 minutes | They tap **I'm here, put me back** on their ticket, or staff use **Put back** |
| Queue settings are missing on the Queue tab | The account is on Pix Starter ("The queue line is a Pix Pro feature.") | Get Pix Pro on the **Computers** page |

## Related

- [Queue Line guide](../guides/queue-line.md)
- [Queue Display](../dashboard/pix-design/queue-display.md)
- [Set Up a Multi-Booth Group](./multi-booth-group.md)
- [Publish Your Website](./publish-your-website.md)
- [Sell Sessions Online](./sell-sessions-online.md)
