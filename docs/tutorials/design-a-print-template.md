---
sidebar_position: 2
title: Design a Print Template
description: Prepare a PNG at print size with clean photo boxes, turn it into a template in Pix Design, make the boxes see-through with Remove BG in one click, check the photo slots and assign the template to your booths.
tags: [tutorials, pix-design, templates, print]
---

# Design a Print Template

In this tutorial you will prepare a template PNG in your own design tool, turn it into a template project in Pix Design, check the photo slots the editor finds, and put the template on a booth. You will also learn the one trick that saves the most time: a loud green photo box that **Remove BG** clears in a single click. Allow about 20 minutes, plus your design time.

## When to Use It

- **Event rental:** a wedding or a corporate party wants its names, date or logo on every print. Make one template per event and assign it to the booths you bring.
- **Self-service mall booth:** a seasonal look (Christmas, Lebaran, Valentine's) brings back repeat customers. Prepare the next season's template before the season starts.
- **Multi-booth studio:** keep one house template per paper size and assign it to every booth, so a customer gets the same look in every branch.
- **Pop-up box:** a brand sponsor pays for the booth and wants its artwork on the strip. Build the template from the artwork they send you.

Need a booth screen design (the buttons and backgrounds customers tap), not a print? See [Customise the Booth Screens](./customise-kiosk-screens.md).

## Before You Start

- **Plan:** Pix Pro or the free trial to create and save your own templates. On Pix Starter you get two ready-made templates (Classic Black and Classic White) and can try every tool in the editor, but saving a new one needs Pix Pro (see [Tips](#tips)).
- **A design tool that exports PNG with transparency:** Photoshop, Affinity, Figma, Canva, GIMP or similar.
- **Your paper:** know what your printer loads (4x6, 2x6 strips cut from 4x6, 6x8 and so on).

## Prepare

### Pick the size

Pixture prints at 600 DPI. Make your canvas the exact pixel size of the print:

| Print size | Pixels (portrait) | Typical use |
|---|---|---|
| 2x6" | 1200 x 3600 | Photo strip |
| 4x6" | 2400 x 3600 | Standard print |
| 5x7" | 3000 x 4200 | Larger print |
| 6x8" | 3600 x 4800 | Large print |
| A4 | 4960 x 7016 | Poster-size print |

The editor also offers 3x6", 6x9", 8x10", A5, A3, A2 and **Custom** (you type the pixels). A landscape PNG gets the landscape canvas of the same size. A PNG at another size is resized to fit, so keep the same shape, and design at the exact size for the sharpest print.

### Make the photo boxes easy to find

The booth prints your PNG **on top of** the photos, so a photo only shows where the PNG is see-through. You have two good ways to mark where photos go:

1. **Fully transparent boxes (best).** Cut each photo box out at 100% transparency. Not white, not 50% see-through. The editor turns every transparent area into a photo slot as soon as you upload.
2. **Solid loud-colour boxes.** If your tool cannot export transparency, or the design comes from a client as a JPG or flat PNG, fill every photo box with one loud colour that appears **nowhere else** in the design. Pure bright green (#00FF00) is ideal: no skin, logo or text uses it. Then **Remove BG** clears all the boxes at once (Step 3).

Why not white boxes? White is usually also in your text, borders and logo. The colour tool picks a colour across the whole design, so clearing white would punch holes in your text too. A green that is used nowhere else can only ever select the photo boxes.

For either way:

- **Give each box a hard edge.** No soft shadow, glow or feathering running into the box.
- **Make each box at least 200 x 200 px.** Smaller see-through areas are not turned into slots.
- **Keep the rest of the design solid.** Any see-through area outside the photo boxes prints as plain white paper.
- **Rounded corners, circles and hearts work.** A shape counts as a slot as long as it fills at least half of its own bounding box. The photo fills the box behind your shape.
- **Order matters.** Slots are numbered row by row, top to bottom and left to right. Slot 1 gets the first photo.
- **Export as PNG**, up to 30 MB. Turn off any "flatten" or white background option in your tool's export window. A design you only have as a JPG: open it and save it as PNG first, since **Create Template Project** takes PNG only.

## Step 1: Open the Template Editor

1. In the sidebar, click **Pix Design**.
2. Click **Template Editor**.

![Pix Design page with Pix Design in the sidebar and the Template Editor card marked](/img/docs/steps/tutorials-design-a-print-template--hub.webp)

3. On **Template Projects**, click **New Project**. On Pix Starter the button reads **Upgrade to Create** once you have two templates.

![Template Projects on Pix Starter with the Upgrade to Create button marked, which reads New Project on Pix Pro](/img/docs/steps/tutorials-design-a-print-template--upgrade-to-create.webp)

## Step 2: Create the template project

In the **Create Template Project** window:

1. Pick the **Media Type**: what the printed sheet becomes. **Photo paper** is the normal one-print-per-sheet choice.
2. Pick the **Print Size**, for example **4x6"**.
3. Drop your PNG on **Template PNG**, or click it to browse. Only PNG is accepted, up to 30 MB.
4. Click **Create Project**. It stays grey until a size and a file are chosen.

![Create Template Project window with Photo paper, 4x6", the Template PNG drop zone and Create Project marked](/img/docs/steps/tutorials-design-a-print-template--create-modal.webp)

| Media Type | What the customer gets |
|---|---|
| **Photo paper** | One print per sheet |
| **2 inch cut (4R)** | A 4x6" sheet the printer cuts into two 2x6" strips |
| **Perforated** | Tear-off strips |
| **Triple strip** | A sheet that becomes three strips |
| **Sticker** | Sticker paper |
| **Newspaper** | A newspaper page for Newspaper booths only |
| **Custom** | Any other stock, with a name you type |

## Step 3: Clear the green boxes with Remove BG

Skip this step if your PNG already has transparent boxes: the editor opens with the slots found. If you used loud green boxes:

1. Click **Remove BG** in the toolbar. The cursor becomes an eyedropper and the **Remove background** panel opens.
2. Click inside one green box. Everything selected shows as a moving, striped area.
3. Untick **Connected area only**. Now the same green is selected everywhere on the design, so every box is picked from that one click. (With it ticked, only the box you clicked is picked.)
4. Leave **Tolerance** at 10 unless a box edge is left behind. Raise it a little to catch the shades at the edge; lower it if parts of your design get selected too.
5. Click **Remove** (or press Enter). The boxes turn transparent, the editor uploads the new artwork and says "Found 4 new photo slots" (or however many boxes you have).
6. Check that **Photo Slots** shows one slot for each box.

![Template editor with Remove BG, a photo box, Connected area only, Tolerance, Remove and the Photo Slots list marked](/img/docs/steps/tutorials-design-a-print-template--remove-bg.webp)

The other controls in the panel:

- **Shift**-click adds another colour to the selection; **Alt**-click (Option on a Mac) takes an area out. The **x** on a colour under **Picked colours** drops just that pick.
- **Smooth edge** (0 to 3 px, default 1 px) softens the cut so no thin green line is left around the photo.
- **Expand** (-3 to +3 px) grows or shrinks the selection by a few pixels.
- **Clear** starts the selection over; **Done** closes the tool. One **Undo** reverts a removal together with the slots it added.

## Step 4: Check and adjust the photo slots

The side panel lists **Photo Slots (n)**, numbered in the order photos are taken.

1. Count the slots against your design. If one is missing, click **+ Add slot manually** and draw it. A slot drawn over your artwork gets **Cut out artwork**, which clears that rectangle from the design when you save.
2. To line slots up, drag a box around them (or press Cmd+A on a Mac, Ctrl+A on Windows) and move or resize them together. They snap to the canvas centre and to each other.
3. Want the same photo twice on one strip? Select a slot and set **Copy of** to the slot it should repeat. The customer then takes fewer photos than there are slots.
4. To print a QR code that leads to the customer's digital copies, click **+ Add QR code** and place it.
5. Click **Preview** to see the layout with sample photos.
6. Need to change the design? Fix it in your design tool and click **Re-upload**. The project keeps its name and settings, and the slots are found again.

## Step 5: Save, name and assign

1. Click **Save**.
2. Under **Name Your Template**, type the name your team and customers will see.
3. Under **Assign to booths**, tick the booths that should offer it now, or leave it for later.

![Template editor with the Save button marked](/img/docs/steps/tutorials-design-a-print-template--pix-design-template-editor.webp)

To assign later, open the card's menu on **Template Projects** and choose **Assign to booths**, or open a booth's **Templates** tab and click **Manage Templates**. See [Assigning Templates to Booths](../dashboard/pix-design/assigning-templates.md).

## Check It Worked

- The template card on **Template Projects** shows a booth count, for example "2 booths".
- The booth's **Templates** tab lists the template.
- On the booth, the template shows on the Templates screen. Run one test session and print it: every slot is filled, no green line shows around the photos, and the print is the right size.

## Tips

- **Keep a green-box master file.** Save your design with the green boxes as the master. For the next event you change the names and date, export, and **Remove BG** clears the boxes again in one click.
- **Check slot order before saving.** Slot 1 gets the first photo. If your layout reads in a different order than row by row, rearrange or redraw the slots.
- **2 inch cut and Triple strip:** set **Print format** on the booth's [Pricing](../dashboard/booth-pricing.md) tab, so the booth shows customers the right number of prints.
- **Categories** on templates become buttons on the booth's Templates screen, handy when a booth offers many designs. See [Folders and Categories](../dashboard/pix-design/folders-and-collections.md).
- **On Pix Starter:** **Upgrade to Create** and **Save** open the "Pix Pro keeps your work" window with **Not now**, **Start free trial** and **Buy Pix Pro**.

## Troubleshooting

| Problem | Why | Fix |
|---|---|---|
| The editor finds no slots | The photo boxes are not transparent (white or coloured boxes, or a flattened export) | Use **Remove BG** (Step 3), or re-export with transparency and click **Re-upload** |
| One huge slot covers the whole template | The whole background is transparent | Make only the photo boxes transparent and re-upload |
| **Remove BG** also cut holes in my text or logo | **Connected area only** was off and the colour you clicked is also in the design | **Undo**, then use a box colour that appears nowhere else, or keep **Connected area only** ticked and **Shift**-click each box |
| A thin coloured line shows around the photos | The box edge had soft shades of the colour | **Undo**, raise **Tolerance** a little or set **Smooth edge** to 2 px, then **Remove** again |
| A small box got no slot | It is smaller than 200 px on one side | Make the box bigger, or draw the slot with **+ Add slot manually** |
| "That spot is already transparent." | You clicked an area that is already see-through | Click on the coloured box instead |
| Photos look soft on the print | The PNG was smaller than the print size and was scaled up | Export at the exact pixel size from the table under [Prepare](#prepare) |
| **Create Project** stays grey | No print size or no file chosen | Pick a size and drop a PNG up to 30 MB |

## Related

- [Template Editor reference](../dashboard/pix-design/creating-templates.md)
- [Folders and Categories](../dashboard/pix-design/folders-and-collections.md)
- [Assigning Templates to Booths](../dashboard/pix-design/assigning-templates.md)
- [Customise the Booth Screens](./customise-kiosk-screens.md)
- [Set Up a Booth From Scratch](./set-up-a-booth.md)
