---
sidebar_position: 2
title: Template Editor
description: Create a print template from a PNG with transparent photo windows, choose its print size and media type, and send it to your booths.
tags: [dashboard, pix-design, templates, printing]
---

# Template Editor

A print template is the layout a guest's photos land in: the 4x6" print, the 2x6" strip, the sticker sheet. In Pix Design you build one from a single PNG. Wherever the PNG is transparent, the editor places a photo slot; everything opaque (frames, logos, text) prints on top of the photos. By the end of this page you will have a template project saved and assigned to at least one booth.

## Before You Start

- A PNG of your design at the print size you want (see [Preparing the PNG](#preparing-the-png)). The file can be up to 15 MB.
- Pix Pro on your account. On Pix Starter the editor opens and you can try everything, but creating a new project needs Pix Pro; see [Pix Design Overview](./overview.md).

## The Template Projects List

**Pix Design > Template Editor** opens the Template Projects list.

![Template Projects list with folders, filters, the two ready-made templates with booth counts, Manage Template and, on Pix Starter, Upgrade to Create](/img/docs/pix-design-templates.webp)

- The folder column on the left starts with **All Projects**; **New Folder** adds your own. See [Folders and Categories](./folders-and-collections.md).
- The **Category**, **Paper Size** and **Media Type** filters and the search box narrow the grid.
- Each card carries a booth count badge, such as "20 booths", so you can see where a design is in use. The card menu offers **Rename**, **Assign to booths** and **Delete**.
- **Manage Template** lists your booths and jumps to a booth's Templates tab.
- **New Project** starts a template. On Pix Starter the header reads **2 / 2** and the button reads **Upgrade to Create**, as in the screenshot above; the two ready-made templates, Classic Black and Classic White, come with every account.

## Preparing the PNG

Pixture prints at 600 DPI, so the PNG should match the print size in pixels:

| Print size | Pixels | Typical use |
|---|---|---|
| 2x6" | 1200 x 3600 | Classic photo strip |
| 4x6" | 2400 x 3600 | Standard print, the default |
| 6x8" | 3600 x 4800 | Large print |
| A4, A3 | Shown on the size card | Poster-size prints |
| Custom | **Set pixels** | Anything else |

Three rules make a PNG work as a template:

1. **Transparent areas become photo slots.** Cut a fully transparent window wherever a photo should appear. One window is one slot, and the booth takes one photo per slot, in slot order.
2. **Keep everything else opaque.** Frames, logos and text print over the photos.
3. **Match the size.** A file at another size is auto-resized to fit the chosen print size, so keep the same aspect ratio to avoid stretching.

## Creating a Template Project

1. Click **New Project**. The **Create Template Project** modal opens.

   ![Create Template Project modal with Print Size, Media Type and Template PNG](/img/docs/pix-design-create-template-modal.webp)

2. Pick a **Print Size** card: **2x6"**, **4x6"**, **6x8"**, **A4**, **A3** or **Custom** (**Set pixels**).
3. Pick a **Media Type** card. This tells the booth what the printed sheet becomes for the guest:
   - **Normal** (Photo paper): one print per sheet.
   - **2" Cut** (4R paper): a 4x6" sheet the printer cuts into two 2x6" strips, so the guest gets two strips.
   - **Perforated** (Tear-off strips): perforated media the guest tears apart.
   - **Triple Strip** (3-strip media): a sheet that becomes three strips.
   - **Sticker** (Adhesive media): sticker paper.
   - **Custom** (**Set name**): any other stock, named by you.
4. Drop your PNG on the **Template PNG** zone or click it to browse.
5. Click **Create Project**. The button enables once a size and a file are chosen.

## The Editor

The project opens in the editor. If no PNG is loaded yet, the canvas reads "Drop PNG here or click to browse. Target: 2400 × 3600 px (4×6 at 600 DPI), images will be auto-resized to fit." The target follows the print size you chose.

![Template editor before a PNG is uploaded showing the drop zone and the 2400 x 3600 px target](/img/docs/pix-design-template-editor.webp)

- The toolbar has **Undo**, **Redo**, zoom, **Preview** (the layout with sample photos), **Re-upload** (swap the PNG and keep the project) and **Save**.
- The side panel lists **Photo Slots (n)**, detected from the transparent areas. Use **Add slot manually** for a slot the detection missed, or for a slot over an opaque area.
- **Add QR code** places a QR block on the print. The booth fills it with the guest's share link, so a printed strip leads back to the digital copies.
- **Media Type** can be changed here as well.

On the first **Save** the editor asks you to **Name Your Template** and offers **Assign to booths** right away. You can also assign later; see [Assigning Templates](./assigning-templates.md).

## Tips

- **Slot order is capture order.** Slot 1 gets the first photo. Check the numbering under **Photo Slots** before you save.
- **Prints per sheet is a pricing setting.** With 2" Cut or Triple Strip media, set **Print format** on the booth's [Pricing](../booth-pricing.md) tab so the kiosk shows the guest the right number of prints. It changes what is shown, not what is printed.
- **Many PNGs at once?** **Settings > Data > Import Templates** takes a ZIP of up to 50 PNGs at one print size.
- **Categories** on templates become buttons on the kiosk's Templates screen. See [Folders and Categories](./folders-and-collections.md).

:::tip
The kiosk shows each template card using the thumbnail rendered by this editor, so what you see in **Preview** is what guests pick from.
:::

## Related

- [Assigning Templates](./assigning-templates.md)
- [Folders and Categories](./folders-and-collections.md)
- [Booth Pricing](../booth-pricing.md)
- [Design a print template](../../tutorials/design-a-print-template.md)
