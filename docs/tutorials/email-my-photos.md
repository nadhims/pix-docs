---
sidebar_position: 9
title: Let Customers Email Their Photos
description: Give customers an Email button next to Scan QR on the booth, so they send their photos to their own inbox, with what you need, how to show the button, what the email looks like and the limits to know.
tags: [tutorials, sharing, email, pix-pro]
---

# Let Customers Email Their Photos

In this tutorial you will make sure your booth shows the **Email** button on its sharing screens, try it the way a customer does, and check the email that arrives. Allow about 10 minutes.

**Email my photos** sits next to **Scan QR**. The customer types their address on the booth's own keyboard and taps **Send**; the booth sends it, and an email with a **See my photos** button reaches their inbox. There is nothing to switch on: a Pix Pro booth on a recent app shows it by itself.

## When to Use It

- **A self-service booth in a mall.** Some customers cannot or will not scan a QR code: an older phone, a cracked camera, no mobile data. Email gets them their photos anyway.
- **An event with a poor phone signal.** In a basement ballroom the guest's phone may have no data, but the booth sends the email for them over its own connection. The photos are waiting in their inbox when they get home.
- **A wedding or a family event.** A guest can send the same photos to up to 3 addresses in one session, for example their own and a parent's.
- **A corporate event.** Guests often want the photos in their work inbox to forward to colleagues.

Not for building a mailing list of your own: the tick box under the address is Pixture's newsletter, not yours. To collect customers who agree to marketing, use the consent prompt in [Marketing Studio](./marketing-studio.md).

## Before You Start

- **Pix Pro on the booth's computer.** An Event Pass counts. A computer on Pix Starter does not show the button.
- **Pixture Photobooth 1.2.31 or newer** on a Mac or Windows computer. See [Software Updates](../desktop-app/software-updates.md).
- **Scan QR turned on** on the sharing screen. The Email button only shows next to it.
- **Internet at the booth** at some point. The booth can take the request offline and sends it once it is back online.

## Step 1: Show the Email button on your Sharing screen

Where the button shows:

- **At an event:** on the event's Share screen, next to **Scan QR**. Nothing to set up.
- **On a video session:** on the screen that shows the video's QR code.
- **On a booth with your own screen design:** on the Sharing page's **Share buttons** row.

A Sharing page built only from a **QR Code** block, with no **Share buttons** row, has no place for the button. To add the row:

1. Open **Pix Design > UI Editor** and open the booth's UI project.
2. Open the **Sharing** tab.
3. From the block bar at the bottom of the canvas, add **Share buttons (QR, AirDrop, Print)**.
4. In the block's settings, keep **Scan QR** ticked. Tick **Show the QR code** if you want the QR on the screen itself, with no tap first.
5. Click **Save**. Booths running the project pick it up between sessions.

![UI Editor Sharing tab with the Share buttons block added from the block bar and its Scan QR and Show the QR code settings marked](/img/docs/steps/tutorials-email-my-photos--ui-editor-share-buttons.webp)

See [Customise the Booth Screens](./customise-kiosk-screens.md) for working in the UI Editor.

## Step 2: Try it as a customer

Run a session at the booth to the end, then:

1. On the sharing screen, tap **Email**.

   ![The Share buttons row on the booth with the Email button marked, between Scan QR and Extra print](/img/docs/steps/tutorials-email-my-photos--share-buttons.webp)

2. The **Email my photos** popup opens with the booth keyboard. Type the address in the box. The **.com** and **@** keys sit on the letters page.
3. Leave or change the tick box under it, "Send me news and offers from Pixture" (see Tips).
4. Tap **Send**. It lights up once the address looks complete. The booth shows "Sent to" with the address hidden after its first letter, for example "Sent to a•••@gmail.com", and closes the popup. From booth 1.2.51, if Pixture refuses the email (for example the day's or the session's limit is reached), the booth says "We couldn't send that email. Try again or scan the QR." with a **Try again** button.

![The Email my photos popup with the address box, the news tick box and Send marked, above the booth keyboard](/img/docs/steps/tutorials-email-my-photos--email-popup.webp)

While the popup is open the screen's timers wait, so a slow typist is not sent back to the Start screen. If nobody touches it for 75 seconds it closes by itself.

## Step 3: Check the email

Open the inbox you sent to. The email:

- Comes from "*your business name* (via Pixture)", with the subject "Your photos from *your business name*".
- Shows your logo, "Your photos are ready" and a **See my photos** button that opens the same share page as the QR code.
- Says until when the photos are available: 60 days after the session.
- Is in Indonesian when the booth's customer language is Bahasa Indonesia, otherwise in English.
- Ends with the **Powered by Pixture** footer, or your business name on Pix Pro Yearly with the footer switched off (see [Set Up the Share Page](./share-page.md)).

<!-- SHOT-NEEDED: phone: the "Your photos from Sunny Side Booths" email in a phone mail app with the See my photos button -->

## Check It Worked

- **Email** shows between **Scan QR** and the print button on the sharing screen.
- After **Send** the booth shows "Sent to ..." and returns to the sharing screen.
- The email arrives within a few minutes, and **See my photos** opens the session's share page.

## Tips

- **The tick box is Pixture's newsletter**, not your list. It starts unticked for booths in the EU, the EEA (Iceland, Liechtenstein, Norway), the UK and Switzerland, judged by where the booth connects from or your account's time zone, and ticked elsewhere. An email sent with the box ticked has a link to stop the news.
- **Up to 3 addresses per session.** Sending to the same address twice counts once.
- **Up to 500 emails a day per business**, counted over the last 24 hours, across all your booths.
- **Check the spelling with the customer.** The "Sent to" message hides the address, so a typo only shows when nothing arrives. Ask them to read it back before they tap **Send**.
- **Offline is fine.** The booth keeps the request and sends it when the internet is back. The customer still sees "Sent to", and the email arrives later.

## Troubleshooting

| Problem | Why | Fix |
|---|---|---|
| No **Email** button | The computer is on Pix Starter, the app is older than 1.2.31, **Scan QR** is off, or the Sharing page has only a **QR Code** block | Check each in order: [Pix Pro on the Booth](../desktop-app/licence-on-the-booth.md), update the app, tick **Scan QR**, add the **Share buttons** row (Step 1) |
| The button is missing right after an upgrade to Pix Pro | The booth learns its plan on its regular check-in with Pixture | Wait a few minutes, or restart the app |
| "We couldn't send that email." | The day's 500 emails or the session's 3 addresses are used up, or Pixture could not be reached | Tap **Try again**, or let the customer scan the QR instead |
| "Sent to ..." but no email | The address has a typo, the email is in spam, or the booth was offline when the customer tapped **Send** (a send refused later cannot warn them) | Check the spam folder; check the booth's internet; send the customer the share link another way |
| **Send** stays grey | The address is not complete yet | Type the full address, with **@** and the ending, such as **.com** |
| The email is in English for an Indonesian customer | The booth's customer language is not Bahasa Indonesia | Change the booth's language |

## Related

- [Email My Photos reference](../desktop-app/session-flow/email-my-photos.md)
- [Set Up the Share Page](./share-page.md)
- [Sharing on the booth](../desktop-app/session-flow/sharing.md)
- [Customise the Booth Screens](./customise-kiosk-screens.md)
