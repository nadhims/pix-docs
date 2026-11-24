---
sidebar_position: 11
title: Let Customers Design Their Own Frame (Frame Lab)
description: Switch on Frame Lab, share the customer link, and follow a customer from designing a frame on their phone to paying, receiving a voucher and using it at the booth.
tags: [tutorials, frame-lab, marketing-studio, vouchers]
---

# Let Customers Design Their Own Frame (Frame Lab)

In this tutorial you will switch on Frame Lab for a booth, set its price, share the customer link, and follow a customer all the way from designing a frame on their phone to paying, receiving a voucher code and using it at the booth. Allow about 20 minutes. Frame Lab needs Pix Pro on the booth computer.

Frame Lab is a page customers open on their phone. They build a frame in a small studio (layout, background, stickers, text and drawing) or upload a print-ready PNG, pay for it, and get a single-use voucher code. At the booth they type the code on the Payment screen, the booth loads their frame as the only template, and the session prints and shares on their own design.

## When to Use It

- **A self-service booth near schools, campuses or offices.** Groups of friends, classes and teams want a strip with their own name and colours. They design it on the bus and pay before they arrive.
- **Birthdays, small weddings and community events at a mall booth.** The host designs one frame and shares it, so every guest who comes by prints on the same design.
- **Brands and small businesses.** A shop or a café uploads its own finished PNG with its logo and uses your booth for a promotion, without you designing anything.
- **Extra income on quiet days.** A custom frame sells at a higher price than a standard session.

Not for a full event where you design the template for the client: make it yourself in **Pix Design** and assign it to the booth (see [Design a Print Template](./design-a-print-template.md)).

## Before You Start

- Pix Pro on the booth computer. On Pix Starter the switch is locked with a **Pix Pro** badge.
- A payment gateway connected and **Active** under **Settings > Payment Gateway**. Frame Lab charges the customer by QR code payment through your gateway (QRIS in Indonesia), and the gateway must charge in the booth's currency. With Stripe, the QR opens a Stripe payment page where the customer pays by card or wallet on their phone. See [Accept Payments at the Booth](./accept-payments.md).
- At least one print template assigned to the booth. The customer's frame is built at that template's print size.
- A session price on the booth and **Payment on this booth** switched on. The voucher is redeemed on the booth's Payment screen, so a booth that runs free sessions cannot accept it.

## Prepare

- **Assign the template whose print size you want customers to design for.** A 2x6 strip booth gets 2x6 frames; a 4x6 booth gets 4x6. The customer's frame always takes the size of the booth's assigned template.
- **Tell customers who upload their own design how to make it**, on your sign or social post:
  - A **PNG** at the booth's print size (the drop zone shows it), up to 15 MB.
  - The photo areas either **see-through** (deleted, so the PNG is transparent there) or filled with **one solid, loud colour** that appears nowhere else in the design, such as pure green. A solid colour can be turned into photo spots with one tap of **Pick color** and **Same color**.
  - Keep text and logos a little away from the photo areas, so the photo never covers them.
- **Prepare a few textures and stickers** in your brand style for the studio (Step 2): they make home-made frames look like yours.
- **Price it above a normal session**, since the customer gets a frame of their own: for example Rp 50.000 where a normal session is Rp 35.000.

## Step 1: Switch Frame Lab On and Set the Price

1. Open **Marketing Studio** and click the **Frame Lab** tab.
2. Pick the booth in the **Booth** picker at the top.
3. Turn on the **Frame Lab** switch in the "Per this booth" card.
4. Enter the **Price** customers pay per frame, in the booth's currency.
5. Leave **Canvas (px)** as it is. The customer's frame takes its size from the booth's assigned template; this value is only used when the booth has no template.
6. Set **Voucher expiry** in hours (1 to 168). The clock starts when the customer pays.
7. Click **Save changes**. To copy the same settings to every booth, click **Apply to all booths**.

![Marketing Studio Frame Lab tab: booth picker, the Frame Lab switch, Price, Canvas and Voucher expiry](/img/docs/steps/tutorials-frame-lab--marketing-frame-lab.webp)

The switch refuses to turn on until the booth has a template ("Assign at least one active template to this booth before enabling Frame Lab."). The same settings also live on the booth page: click the **Frame Lab** cell in the booth's property grid.

## Step 2: Add Textures and Graphics for the Studio (Optional)

Under **Studio assets** in the same tab, choose **Texture** or **Graphic** and click **Upload asset** (PNG, JPG or WebP, up to 5 MB, up to 60 assets per account). Textures appear as background patterns in the customer studio; graphics appear as stickers the customer can place, resize and rotate. They are shared by every booth. They do not affect customers who upload their own finished PNG.

## Step 3: Share the Customer Link

1. Still on the Frame Lab tab, scroll to **Guest upload page**. It is one shared page, the same for every booth. The link is in the form `pixture.io/m/your-organisation?booth=…`; the end of it only names the booth you picked, so the page knows that booth's print format.
2. Click **Open link** to test it on your own phone, or print the QR and put it on the booth.

![Booth Frame Lab page with the customer link, Download QR and the configuration card](/img/docs/booth-frame-lab.webp)

The booth's own Frame Lab page has the same link with **Download QR**. Customers also find a **Frame Lab** link on the share page of any photo session from that booth while Frame Lab is on.

## Step 4: What the Customer Does, Building a Frame in the Studio

The page opens with **Make your own frame** and a **Start Crafting** button. Tapping it asks **How do you want to start?** with two choices: **Create new** (the studio) or **Upload your own** (a finished PNG, covered in Step 5).

<div className="phone-row">
  <figure><img src="/img/docs/framelab-guest-landing.webp" alt="Frame Lab landing page on a phone: Make your own frame, Start Crafting" /><figcaption>The landing page for the booth, with the language toggle top right.</figcaption></figure>
  <figure><img src="/img/docs/framelab-guest-choose.webp" alt="How do you want to start: Create new or Upload your own" /><figcaption>Start Crafting asks how the customer wants to begin.</figcaption></figure>
</div>

In the studio the customer works through the tools at the bottom of the screen. A short Lucy tour explains them the first time; **How it works** at the top replays it.

| Tool | What the customer can do |
|---|---|
| **Layout** | Pick a layout for the booth's print size, add or remove photos (**Fewer**, **More**), and set the photo **Outline** (**Off**, **Thin**, **Medium** or **Bold**). Tapping a photo on the preview selects it to resize or change its shape. |
| **Background** | The **Paper** colour, a **Texture** (built-in ones and the textures you uploaded) and an accent **Line**, or a photo as the background. |
| **Add** | **Text** (a caption and the date), a **Graphic** (built-in stickers and the graphics you uploaded) or an **Image** of their own. Each one can be dragged, resized and turned. |
| **Draw** | Draw on the frame by hand. |

<!-- SHOT-NEEDED: phone: the Frame Lab studio on a phone with the Layout, Background, Add and Draw tools, on a made-up design -->

When the frame is ready the customer taps **Use →**:

1. **Your frame** shows the finished design. The customer types an email under **Email for your code** (the code is sent there too) and taps **Yes, use this · pay**, or **Edit** to go back.
2. **Scan to pay** shows the QR code from your gateway with the amount and an **Expires in** countdown. The customer pays with their e-wallet or banking app and taps **I've paid** if the page has not noticed yet.
3. **Your voucher is ready** shows the 6-character code, **Copy code**, **Save voucher** and the **Valid until** date and time.

<div className="phone-row">
  <figure><img src="/img/docs/framelab-voucher.webp" alt="Your voucher is ready screen with the six-character code, Copy code, Save voucher and Valid until" /><figcaption>After payment the customer gets a single-use code.</figcaption></figure>
</div>

## Step 5: What the Customer Does, Uploading a Finished PNG

Customers who already have a design choose **Upload your own**.

<div className="phone-row">
  <figure><img src="/img/docs/framelab-upload-dropzone.webp" alt="Upload your own: the drop zone with the booth's canvas size and Pick a design" /><figcaption>The drop zone shows the print size the booth needs.</figcaption></figure>
  <figure><img src="/img/docs/framelab-upload-voucher.webp" alt="Your voucher is ready after an uploaded design, with the code and Save voucher" /><figcaption>The same voucher screen after payment.</figcaption></figure>
</div>

1. The customer taps **Pick a design** and chooses a **PNG** of up to 15 MB at the booth's print size. A file at another size is refused with "This booth prints" and the size it needs.
2. **Your frame** shows the design and counts the photo spots it found. See-through areas become photo spots by themselves.
3. Photo areas painted in one solid colour (a green box, for example) work too: the customer taps **Pick color**, then taps each photo spot (**This spot**, or **Same color** to take every area of that colour at once), moves the **Exact** to **Loose** slider if the edge is soft, and taps **Done**. **Undo** takes back the last tap.
4. They drag the photo spots to set the order the booth fills them in, type an email under **Email for your code**, and tap **Yes, use this · pay**. **Swap** picks another file.
5. The same **Scan to pay** and **Your voucher is ready** screens follow.

<!-- SHOT-NEEDED: phone: the Your frame screen after an upload, with the photo spot count, Pick color, Email for your code and the pay button -->

## Step 6: Redeem the Code at the Booth

1. The customer starts a session on the booth as usual.
2. On the Payment screen they tap the voucher button (**Use Voucher** in the default design) and type the 6-character code.
3. The booth checks the code with Pixture and shows "Frame Lab applied!". The session is paid for by the voucher, so the QR payment is skipped.
4. The Templates screen shows only the customer's frame, already selected; they tap next.
5. Capture, review, filters, printing and sharing run as a normal session on the customer's design.

After the Sharing screen the code is spent and the frame is removed from the booth, so the next customer never sees it.

Rules to tell your staff:

- A code works on the booth it was bought for only, once, until its **Valid until** time. The booth says "This voucher is not valid for this booth.", "This voucher has been fully redeemed." or "This voucher has expired." otherwise.
- Checking the code needs internet on the booth. Frame Lab codes are not offline codes, so a booth that has lost its connection answers "Failed to validate voucher. Please try again."
- The code must be entered with the standard single session selected. If the customer first adds extra prints or an extra session, the booth charges those extras and does not load the frame.
- A booth whose payment is switched off cannot accept the code, because its Payment screen is never shown.

## Step 7: See the Orders

![Recent Frame Lab uploads on the Marketing Studio Frame Lab tab with date, booth, voucher code, price, email and status](/img/docs/marketing-frame-lab-uploads.webp)

- **Marketing Studio > Frame Lab > Recent Frame Lab uploads** lists the last 20 orders across all booths with the date, booth, voucher code, price, email and status: **Awaiting payment**, **Paid**, **Redeemed**, **Completed** or **Expired**.
- **Transactions** shows each paid order as its own row with a **CT** badge (the export and the phone view say "Frame Lab"), and the Total Revenue subtitle separates session revenue from Frame Lab revenue. The redeemed booth session itself is recorded at zero.
- **Vouchers** lists the code with the other single-use codes of the account.

![Transactions page with Frame Lab rows and the CT badge](/img/docs/transactions-frame-lab.webp)

## Check It Worked

- Open the customer link on your phone: the landing page shows the booth's name and **Start Crafting**, not "Not available".
- Build a frame, pay, and see **Your voucher is ready** with a code.
- Type the code on the booth's Payment screen: the session continues without a QR payment and the Templates screen shows only your frame.
- The order appears under **Recent Frame Lab uploads** as **Paid**, then **Redeemed**, and as a **CT** row on **Transactions**.

## Tips

- **Online sales always go to the account's Active gateway.** A booth that picks its own gateway on its **Settings** tab still sends Frame Lab sales to the gateway marked **Active**. A venue that must receive these sales directly needs its own Pixture account. See [Create a Payment Gateway](./create-a-payment-gateway.md).
- **Put the QR where people wait,** on the booth and at the start of the queue: a frame takes a few minutes to design, so the waiting time becomes design time.
- **Show two or three example frames** made with your own textures next to the QR. People copy what they see.
- **Keep the Voucher expiry long enough** for the way people use it: 24 to 48 hours for walk-ins, up to 168 hours (7 days) when a host designs a frame before a party.
- **Check Recent Frame Lab uploads before a busy day.** A **Paid** order that is not **Redeemed** yet is a customer on the way.

## Troubleshooting

| Problem | Why | Fix |
|---|---|---|
| The customer page says "Not available" | Frame Lab is off for that booth, or its price is empty or 0 | Turn the switch on and set a price on **Marketing Studio > Frame Lab** |
| The switch will not turn on | The booth has no template, or the computer is not on Pix Pro | Assign a template on the booth's Templates tab; put Pix Pro on the computer |
| "This booth has no payment method set up yet" on the pay step | No active gateway, or the gateway cannot charge the booth's currency | Connect and activate a gateway under **Settings > Payment Gateway**; keep the booth on a currency the gateway charges |
| "This booth prints ..." when uploading | The PNG is not at the booth's print size | Export the design at the size shown on the drop zone (for example 2:3 for a 4x6 print) |
| "File must be a PNG image." or "File is too large (max 15MB)." | A JPG, or a very large file | Export as PNG and keep it under 15 MB |
| The upload finds no photo spots | The photo areas are painted, not see-through | Tap **Pick color** and tap each photo area (or **Same color**), or delete the photo areas and export as a transparent PNG |
| The booth says the code is invalid | Typing error, a different booth, expired, or already used | Check the code on **Recent Frame Lab uploads**; a code is tied to one booth and one session |
| The code is accepted but the frame does not appear | Extra prints or sessions were added before the code | Start again and enter the code with the standard session selected |

## Common Questions

### Can a booth offer my own templates and Frame Lab together?

Yes. Frame Lab does not replace your templates. A customer who types a Frame Lab code gets their own frame as the only template for that one session. Every other customer sees the templates you assigned to the booth and pays as usual. The booth needs at least one of your templates before Frame Lab can be switched on.

### Does Frame Lab work with a card reader (Stripe Terminal)?

Frame Lab is always paid online, on the customer's phone, before they reach the booth. It never uses the card reader at the booth. With Stripe as your gateway, the same Stripe account covers both: the reader takes payment for normal sessions at the booth, and Frame Lab customers pay on a Stripe payment page on their phone. You do not need a separate QR gateway. At the booth the code pays for the session, so the reader is not charged.

### Can I set a different Frame Lab price for each print format?

No. Each booth has one Frame Lab **Price**, whatever print size the customer picks. Different booths can have different prices.

## Related

- [Marketing Studio](../dashboard/marketing-studio.md)
- [Accept Payments at the Booth](./accept-payments.md)
- [Booth Pricing](../dashboard/booth-pricing.md)
- [Public Links](../reference/public-links.md)
