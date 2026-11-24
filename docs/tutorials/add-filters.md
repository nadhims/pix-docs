---
sidebar_position: 2.6
title: Add Filters to Your Booth
description: Choose which of the 14 built-in colour filters each booth offers, add your own looks as .cube files, and keep the Filter screen short and on-brand.
tags: [tutorials, pix-design, filters, lut, booth]
---

# Add Filters to Your Booth

In this tutorial you will pick the colour filters a booth offers on its Filter screen, upload your own look as a .cube file, and check it before customers see it. Allow about 15 minutes.

A filter is a colour grade the customer picks after the photos are taken. It changes everything they take home: the print, the GIF and the live photo get the same look.

## When to Use It

- **Event rental:** a wedding with a warm, film look. Upload one custom filter in the couple's style and offer only that one and a black and white, so guests choose in a second.
- **Self-service mall booth:** a short list of popular looks (for example **B&W Classic**, **Warm Vintage**, **Soft Pastel**) keeps the Filter screen quick, so the next customer is not left waiting.
- **Multi-booth studio:** your signature grade as a custom filter on every branch, so prints look the same everywhere.
- **Pop-up box for a brand:** one filter that matches the brand's colours, and no other choices.

Want no filter step at all? Turn the Filter screen off instead: **Enabled in session flow** on the Filter page of your UI project, or **Choose a filter** under **Steps** in an event's **Edit appearance**. Photos then go out as taken.

## Before You Start

- **Plan:** the 14 built-in filters work on every plan. Uploading your own filter needs Pix Pro or the free trial (on Pix Starter, **Upload** opens the "Pix Pro keeps your work" window).
- **Access:** you need the right to manage templates (the account owner has it).
- **A booth** with a Filter screen in its flow, to test.

## Prepare

The built-in filters are **Warm Vintage**, **Cool Blue**, **B&W Classic**, **Sunset Glow**, **Film Noir**, **Soft Pastel**, **Golden Hour**, **Moody Teal**, **Sepia Tone**, **High Contrast**, **Faded Film**, **Rose Tint**, **Arctic** and **Cinematic**.

For a look of your own, you need a **.cube** file: a 3D colour lookup table (LUT), the colour-grading format most photo and video tools export. The upload window suggests Affinity Photo, Lightroom or DaVinci Resolve. What Pixture accepts:

- **A 3D .cube file** with a `LUT_3D_SIZE` line between 2 and 256. One-dimensional LUTs are not supported.
- **Up to 50 MB** per file, and **up to 50** custom filters per account.

Know-how for a filter that works at a booth:

- **Grade on a photo from your own booth.** Take a test photo with the booth's camera and lights, build the look on that photo, then export the LUT. A look made on a sunset landscape rarely suits faces under a flash.
- **Protect skin tones.** Customers judge a filter by how their face looks. Strong teal or orange grades that look great on a landscape can make skin look ill.
- **Keep it gentle.** A LUT is a fixed colour change: it cannot adjust itself to a darker or brighter photo. A moderate look survives a cloudy day and a bright venue.
- **Smaller is faster.** A bigger grid gives a smoother grade but a bigger file, and every booth downloads it. Stay well under the 50 MB limit.
- **Name it for customers.** The **Filter Name** is the label under the card on the booth. "Film" or "Warm" reads better than "Wedding_v3_final".

## Step 1: Open Photo Filters

1. In the sidebar, click **Pix Design**.
2. Click **Photo Filters**.

![Pix Design page with Pix Design in the sidebar and the Photo Filters card marked](/img/docs/steps/tutorials-add-filters--hub.webp)

The page shows a sample photo and every filter under **Built-in Filters** and **Custom Filters**. Click a filter card to see it on the sample photo; **Original** shows the photo without a filter.

## Step 2: Upload your own filter

1. Click **+ Upload Filter**.
2. Type a **Filter Name**, for example "Warm Film".
3. Under **.cube File**, choose your file.
4. Click **Upload**. The page says the filter was uploaded, and it appears under **Custom Filters**.

![Photo Filters with Upload Filter, Filter Name, .cube File and Upload marked](/img/docs/steps/tutorials-add-filters--upload-filter.webp)

Click your new filter's card and compare the sample photo with the same look in your editing app. If the colours do not match (for example skin turns blue), delete the filter with **Delete Filter** and do not put it on a booth.

## Step 3: Choose the filters a booth offers

A booth with no filters chosen offers every filter on the account, built-in and custom. To offer a short list:

1. In the sidebar, click **Booths** and open the booth.
2. Open the **Filters** tab. **Booth Filters** shows what the booth offers now.
3. Click **Manage Filters**.

![Booth page with Booths, the Filters tab and Manage Filters marked](/img/docs/steps/tutorials-add-filters--booth-filters-tab.webp)

In the **Manage Filters** window:

1. Click the filters this booth should offer, so they are ticked, and click the others to untick them. **Select all** ticks everything; the **All** / **Assigned** / **Not Assigned** and **All Types** / **Built-in** / **Custom** menus and the search box narrow the list.
2. Click **Save Filter Assignments**.

![Manage Filters window with a filter card and Save Filter Assignments marked](/img/docs/steps/tutorials-add-filters--manage-filters.webp)

Repeat for each booth. Every booth can have its own list.

## Check It Worked

- The booth's **Filters** tab lists only the filters you ticked, with the count next to **Booth Filters**.
- On the booth, run a test session: the Filter screen shows your list, in the card grid of the booth's design.
- Print the photo with your custom filter and look at it in daylight. Check the GIF and the live photo from the QR code too: they carry the same look.

## Tips

- **Two or three filters is plenty.** Every extra card is one more decision for a customer with a queue behind them.
- **New filters do not join a booth with a list.** Once a booth has filters chosen, a filter you upload later is not added to it. Open **Manage Filters** and tick it.
- **One look per client.** For an event client, upload their filter with the client's name, assign it for the event, and untick it afterwards. Delete old ones to stay under 50.
- **Black and white is a safe second choice.** **B&W Classic** or **Film Noir** flatters almost every face and every light.

## Troubleshooting

| Problem | Why | Fix |
|---|---|---|
| "Only .cube files are accepted." | The file is not a .cube (for example .3dl, .xmp or a preset) | Export the look as a .cube LUT from your editing app |
| "File size must be 50 MB or less." | The LUT grid is very large | Export with a smaller grid size |
| "Maximum of 50 custom filters per organization." | The account already has 50 custom filters | Delete filters you no longer use, then upload |
| The preview shows no change, or the card shows an error mark | The file has no `LUT_3D_SIZE` line or a broken data table (for example a 1D LUT) | Export a 3D LUT again and upload the new file |
| The preview colours differ from your editing app | The file does not come out the way your app shows it | Delete the filter and do not assign it; contact Pixture support with the .cube file |
| A new custom filter never appears on a booth | The booth has a chosen list, and the new filter is not on it | **Booths** > booth > **Filters** > **Manage Filters**, tick it, **Save Filter Assignments** |
| The booth skips the Filter screen | The Filter screen is off in the booth's design or the event | Turn on **Enabled in session flow** on the Filter page (UI Editor), or **Choose a filter** in the event's **Steps** |

## Related

- [Photo Filters and Overlays reference](../dashboard/pix-design/filters-and-overlays.md)
- [Filters on the booth](../desktop-app/session-flow/filters.md)
- [Customise the Booth Screens](./customise-kiosk-screens.md)
- [Add GIF and Video Overlays](./gif-and-video-overlays.md)
