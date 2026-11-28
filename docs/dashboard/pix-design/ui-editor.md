---
sidebar_position: 5
title: UI Editor
description: Design every booth screen in a UI project, from the Start Screen to Sharing, pick the project's modes, set the session behaviour that goes with each page, and put the design on your booths.
tags: [dashboard, pix-design, ui-editor, booth]
---

# UI Editor

The **UI Editor** is where you design what customers see on the booth. A design is a **UI project**: every screen of the photo session, the blocks on each screen (buttons, text, live view, template cards, QR code) and the page settings that drive the booth, such as what starts a session and how long it lasts. Each booth runs one UI project, and events can pin their own. By the end of this page you will know the editor's layout, what each page does on the booth, and how to save and assign a project.

## The UI Projects List

**Pix Design > UI Editor** opens the UI Projects list. Every account starts with one project, Default Layout.

![UI Projects list showing a Client projects folder with three project cards, Manage UI Project and New Project](/img/docs/pix-design-ui-projects.webp)

- **New Project** creates a project (on Pix Starter the button reads **Upgrade to Create**).
- **Manage UI Project** lists booths and jumps to a booth's UI Project tab.
- **New Folder** in the left column groups projects, for example by client or venue. Tick cards, or **Select All**, then **Move to** files them; **All Projects** always shows everything.
- The card menu offers **Duplicate**, **Rename**, **Assign to booths**, **Add frame template to this project** (attaches a print template to the project) and **Delete**.

On Pix Starter a banner explains that you can try the UI editor freely, but saving a project needs Pix Pro.

## Creating a Project

1. Click **New Project**.

   ![New UI Project modal with Project Name, Orientation and the mode tiles](/img/docs/pix-design-new-ui-project-modal.webp)

2. Enter a **Project Name**.
3. Choose the **Orientation**: **Landscape** (1920 x 1080) or **Portrait** (1080 x 1920). Match the booth's screen.
4. Tick one or more **Modes**. They set the pages the project has and the flow the booth runs:

   | Mode | On the tile | Flow on the booth |
   |---|---|---|
   | **Photo** | "Pick a layout, take the shots, get a print." | Start > Pay > Template > Shoot per slot > Filter > Share |
   | **Studio** | "Free shots, then pick the best for the layout." | Start > Pay > Template > Timed shoot > Pick photos > Filter > Share |
   | **Decor** | "Guests decorate their print." | Start > Pay > Template > Shoot > Filter > Draw > Share |
   | **Simple** | "No layout. Guests pick black and white or colour." | Start > Pay > B&W or colour > Shoot > Share |
   | **Newspaper** | "Guests see themselves in the newspaper, pay, then shoot." | Start > Pay > Newspaper > Shoot > Share |

   The modal reads "Pick one or more. Photo, Studio and Decor can change later in the editor; Simple and Newspaper can't be combined." Photo is the classic booth: one photo per template slot. Studio lets the customer take free shots for a set time, then place the ones they like into the template; it needs Pixture Photobooth 1.1.98 or newer (see [Studio sessions](../../desktop-app/studio-sessions.md)). Decor lets the customer draw on the print. Simple is a colour choice and a shot. Newspaper puts the customer's photo into a newspaper page: it is portrait only, so ticking it sets the project to portrait. It uses the templates whose **Media Type** is **Newspaper** (see [Creating Templates](./creating-templates.md)) and needs Pixture Photobooth 1.2.19 or newer; an older booth runs it as a normal photobooth.

   With two or more modes ticked, the Start Screen gets a **Mode buttons** block: one button per mode, and the customer's tap picks the mode and starts the session. A choice of modes needs Pixture Photobooth 1.2.4 or newer.

5. Pick the **Look**:

   - **Light** (ticked by default): "Bright, clean, studio style." A white, Korean self photo studio look: a title made of letter tiles ("photobooth"), black pill buttons and a studio-paper backdrop on the capture screens.
   - **Classic**: "Today's look."

   If you pick only Newspaper, the Look switches to Classic and Light is switched off with the line "Light isn't ready for this mode yet". Light works for landscape and portrait, and for Photo, Studio, Simple and several modes together. Decor on Light runs after Photo or Studio.

   <!-- SHOT-NEEDED: dashboard: New UI Project modal with the Look choice, Light and Classic -->

6. Click **Create Project**. It opens in the editor.

### The Light Look

Every element of a Light project is a normal editor block. You can move it, resize it and recolour it, like any block you add yourself. Two blocks in the palette are new:

- **Title tiles**: big letters on square tiles. Settings:
  - **Lines**: type them split by "/", for example photo/booth.
  - **Tile size**, **Gap** and **Tilt**.
  - **Accent letters**: numbers, counted across all lines. A space counts too.
  - **Accent colour**, **Dark letters** and **Dark letter colour**.
  - The font and the colours.
- **Shape**: a plain box with a fill, rounded corners, a border and a shadow. Light projects use it for the header band on the capture screens.

<!-- SHOT-NEEDED: dashboard: UI Editor on a Light Start Screen with the Title tiles block selected and its settings open -->

**Brand** applies to Light projects too (see [Set Up Your Brand](../../tutorials/set-up-your-brand.md)):

- **Accent** goes to the orange accents.
- **Dark** goes to text, black buttons and dark tiles.
- **Light** goes to the page background, but only if you set your own.
- **Heading** font goes to titles, tiles and big numbers.
- **Body** font goes to the rest.

Removing Brand brings the Light look back. Brand also follows the Light popups: titles take the **Heading** font, text takes the **Body** font and buttons take the **Dark** colour.

A new account's first project is Light when all its booths run Pixture Photobooth 1.2.56 or newer, or when it has no booth yet.

Light projects need Pixture Photobooth 1.2.56 or newer to show the letter tiles and the header band. An older booth shows the title as plain text ("photo booth") and the band as a plain box. When an assigned booth is older, the editor shows "Needs booth app 1.2.56 or newer on: \{booth names\}".

### Update to the latest Light layout

A Light project made before this update keeps its old pages until you ask. Click **Update to the latest Light layout** in the editor and the pages are rebuilt to the newest Light design. Your colours, logo, texts and page settings stay. Nothing changes until you click it.

### Button icons

On Light projects a button can show an icon. Select the button, then open **Properties > Icon**.

- **Back arrow only**: just the arrow in a round button.
- **Arrow after the text**: the text, then an arrow.
- **Rotate before the text**: a rotate arrow, then the text. Retake uses it.

### Light timers

On a Light project these pages have a timer. None of them runs while a payment is in progress.

- **Pay with**: when it runs out, the booth goes back to the Start screen. Nothing is charged.
- **Templates**: continues with the highlighted frame.
- **Filter**: continues with the current filter.
- **Choose your photos** (Assign): fills the empty slots and continues.

Light needs booth app 1.2.58 or newer for the new look. Older booths keep the previous Light look.

## Editor Anatomy

![UI Editor on the Start Screen of a Photo and Decor project: page tabs, the canvas with the Mode buttons, Page Background, Modes with Edit modes, Session Trigger checkboxes and Home Page Settings](/img/docs/pix-design-ui-editor-start.webp)

- **Header.** The project name and where it is used ("Unused" or "N booths").
- **Page tabs.** Start Screen, Custom Screen, Payment Screen, Templates, Capture, Review, Adjust, Filter, Sharing. Studio projects add Assign photos and Decor projects add Decor. Adjust is there for Photo and Decor projects; Simple projects have no Custom Screen, Templates or Adjust.
- **Toolbar.** **Fit**, zoom and **1:1**; **Snap**; undo and redo; a "Saved" state; **Preview**; **Save**.
- **Canvas.** The screen at booth resolution. Drag a block to move it, drag its corners to resize it.
- **Block palette.** A floating bar at the bottom of the canvas adds blocks to the current page.
- **Right rail.** **Page Background** first (Type: **Solid Color**, **Image**, **Gradient**, or **Video** on the Start Screen only), then the page's own settings, then the selected block's properties.
- **Layers.** The stacking order of the page's blocks, at the bottom of the rail.

Pages have an **Enabled in session flow** checkbox in their settings: "When off, the kiosk skips this screen." This is how you drop the tutorial, run free sessions without a Payment screen, or send photos out unfiltered.

## The Pages

### Start Screen

The idle screen customers walk up to. Its settings:

- **Show live view** under Capture Settings puts the camera feed on the idle screen.
- **Session Trigger** checkboxes decide what starts a session: **Touch Screen**, **F13** (a coin or card system's paid signal), **Space, S, Page Up, Page Down Keys** (a clicker or foot switch) and **Start Button** (the on-screen button block).
- **Enabled in session flow**, and **Idle Timeout**: the seconds before the booth returns to this screen.
- **Lock button** settings: the corner of the hidden admin padlock and its opacity. **Padlock colour** (**Light** or **Dark**) sits next to them. Use **Dark** on light pages so staff can see the faint padlock.
- **Popups** with **Edit** opens the [Popups panel](#popups).
- **Modes** lists the project's modes. **Edit modes** opens the same mode tiles as the New Project modal: "With two or more, guests pick one on the start screen. A mode you add gets its screens; one you turn off keeps your designs." Simple projects have no Edit modes.

With several modes the **Mode buttons** block starts the session instead of a single Start Button. Its settings choose the **Pictures** on each button (**Illustration**, **Black and white** or **Icon**, or your own picture), the **Disc size**, the **Gap** and the colours.

**Show as** decides how guests pick a mode:

- **Buttons**: the round mode buttons on Start.
- **Popup after Touch to start**: Start shows **Touch to start**, and tapping it opens a **Pick a mode** popup. It needs a **Touch to start** button on the Start Screen.

A Light project with more than one mode uses the popup. Booths older than 1.2.56 show the round mode buttons instead. A paid start from a cash or coin device (F13) must pick a mode: the popup can't be cancelled.

#### Popups

The **Popups** panel gives all the booth's popups one style: payment (QR, card, cash, voucher), extra prints, email, consent, staff PIN, pick a mode, timeout, use a pass and bonus session. Open it with **Popups: Edit** under the lock settings. A live preview has a chooser, so you can look at each popup.

- **Colours**: card, text, title, subtitle, accent, price, error, and the background dim with its strength.
- **Buttons**: for the main button, the fill, text, **Gradient** on or off, corner roundness and height. For the other button, the fill, text and border.
- **Fonts**: body and titles.
- **Card**: corner roundness.
- **Drawings**: a picture for QR, Card, Cash, Voucher and Consent.
- **Text**: change the words of each popup, in English and in Indonesian. Leave a field empty to keep the booth's own text.

**Reset to Light** (Light projects) brings back the Light style. **Remove style** returns every popup to the booth's own look.

Once a project has a popup style, the Payment QR popup settings say "This project uses the Popups style" with a button to open the panel. The print mockup choice stays in the Payment QR settings.

<!-- SHOT-NEEDED: dashboard: UI Editor with the Popups panel open, the preview and its popup chooser -->

Two popup details apply to every project, Light or not. **Consent** shows **No thanks** and **Yes, I agree** as two equal buttons side by side. On the staff PIN pad, the bottom-left key is now delete (it removes one digit) instead of clear.

#### AI screens

AI projects on the Light look use four screens: **Pick a style**, **Look at the camera**, **Keep this photo?** and **Making your AI portrait**. The guest checks the photo on **Keep this photo?** before the AI portrait is made, with **Retake** and **Looks good**. A retake never costs a second AI portrait. Retake follows the project's Retake setting.

In the Start Screen settings, the **AI screens** section shows the four screens as previews. **Keep this photo? timer** sets how long the guest has to decide: 5 to 60 seconds, 10 if empty.

<!-- SHOT-NEEDED: dashboard: Start Screen settings with the AI screens section and the Keep this photo? timer -->

### Custom Screen

An optional tutorial or intro screen between Start and Payment. Turn on **Enabled in session flow** to use it.

### Payment Screen

![UI Editor on the Payment Screen](/img/docs/pix-design-ui-editor-payment.webp)

Where customers pay before choosing a template. Prices come from the booth's [Pricing](../booth-pricing.md) tab; the editor decides how the screen looks and behaves.

- On a Light project the **Payment Screen** tab has a row of sub-tabs: **Choose your print**, **How many?**, **Pay with** and **QR Pay**. **Advanced** adds **Voucher**, **Coin**, **Card** and **Payment Success**. The canvas shows a real preview of each Light page.
<!-- TODO screenshot: dashboard: UI Editor Payment Screen tab with the sub-tabs row on a Light project (replaces the old Payment Screen shot for Light) -->
- The main page shows the packages and the payment methods. Each method has its own sub-screen: **voucher**, **coins**, **card** and **success**. Turn a method on and its sub-screen tab appears; a click area wired to a method counts as turning it on.
- Payment blocks: **Payment method** (one tile per method: **QR / QRIS payment**, **Voucher code**, **Card**, **Cash** or **Staff access**; a method the booth can't take is hidden there and the tiles close up), **Payment QR** (the QR code the customer scans; its popup takes your colours, fonts and buttons), **Voucher Input** (a ready-made card with an editable title, subtitle and button), **Voucher Field** (only the code box, for your own artwork; Enter or your own button redeems) and **Payment Status**.
- **Timeout**: after 120 s idle on Payment the booth returns to Start (0 = never); on the voucher, coin or card step it returns to the methods after 60 s; the success screen dwells 3 s (0 = wait for a tap), and tapping any empty area continues.
- Every paid route ends on the success screen, including a voucher that covers the whole price. A free session skips Payment entirely.

On a Pix Starter computer the Payment screen is forced off. Turning **Payment on this booth** off on the Pricing tab skips it too, whatever payment methods the page has. Booths on app 1.2.20 or older still show a voucher screen when the Payment page has the Voucher method on: update the app from [pixture.io/download](https://pixture.io/download).

### Templates

![UI Editor on the Templates screen](/img/docs/pix-design-ui-editor-templates.webp)

The template picker. The **Template Cards** block is a grid you shape with a card scale, rows and columns, a scroll direction, and an optional scrollbar with its own width, padding and colours; dragging a corner of the block scales the cards. Category buttons above the grid come from your templates' categories (see [Folders and Categories](./folders-and-collections.md)), and each card shows the thumbnail rendered by the template editor. An **Arrow** block is a round button that picks the previous or next layout; set its **Direction** to **Previous** or **Next**. A page timer can send an undecided customer back to Start. On Light projects the timer continues with the highlighted frame instead.

### Capture

![UI Editor on the Capture screen](/img/docs/pix-design-ui-editor-capture.webp)

The shooting screen, and the page whose settings change the booth's behaviour most.

- **Live View** shows the camera. Pick a **Camera Frame** ratio (16:9, 9:16, 4:3, 3:4, 3:2, 2:3 or 1:1) and the booth fits the whole camera frame inside the block without cropping. Its text overlay can run to several lines, each with its own font, size, weight and colour.
- **Camera trigger**: **Tap** (the customer taps the screen), **Shutter button** (an on-screen button), **Camera shutter** (the photographer presses the camera's own shutter) or **Auto** (Photobooth projects only; every slot shoots on the countdown). With Tap or Shutter button the customer triggers the first photo and the booth runs the remaining slots by itself.
- The **countdown** before each shot. At an event, the event's own Countdown is used instead: on the event page, **Edit appearance** > **Countdown**.
- **Session Time**: the length of the session from the first capture, and what happens when it runs out. It runs whether or not you place a **Session Timer** block; the block only displays it. A **Photo Counter** block shows "n of N".
- **Preview Cards**: one square card per template slot, numbered while empty, filled as shots land, the current slot ringed; the row scrolls on templates with many slots.

A remote plugged into the booth follows the Start Screen's session triggers: Space, S, Page Up, Page Down or F13 take the shot. To set your own keys for Capture, Retake and Keep, see [Button keys](./button-keys.md).

### Review

After each shot the customer checks the photo with **Retake** and **Next**; with nothing tapped the booth advances by itself. Switches let you hide the Retake button and the photo counter, and Retake disappears once the session time is up.

On a Light project the guest can also tap any photo in the strip to see it big. **Retake** then replaces that photo, and **Looks good** carries on with the next empty photo. A hint, "Tap a photo to retake it", shows under the strip while a photo can be retaken. Studio projects don't have this. To set it, select the **Preview Cards** block on the Review tab: the **Tap a photo to retake it** checkbox is on by default for Light projects, and a text field next to it changes the hint.

When the review moves on by itself, the **Looks good** button can empty as the time runs out, instead of showing seconds. Select the button on the Review tab and tick **Countdown inside the button** under **Countdown**.

<!-- SHOT-NEEDED: dashboard: UI Editor on the Review tab with the Preview Cards block selected and Tap a photo to retake it ticked -->

**Review Settings > Advanced mode** turns the fixed layout into a full canvas of your own: a **Review Photo** block, Retake and Next buttons or click areas, a counter, images and text, on a background of its own.

### Adjust

"Adjust your photos": after the last shot of a Photo or Decor session, the customer sees the strip with all their photos. They drag a photo to move it, pinch to zoom, drag one photo onto another to swap them, and tap **Mirror** to flip every photo. **Next** moves on, and so does the page timer after 60 seconds. Studio sessions skip it (they arrange photos on Assign photos).

**Beautify** is a guest button above **Mirror**. It is off by default. When a guest turns it on, the booth smooths and brightens skin on every photo of the session: the print, the soft file and every preview. There is no setting for it in the editor. It is not in Studio, AI or event sessions.

<!-- SHOT-NEEDED: booth: Adjust your photos screen with the Beautify button above Mirror -->

The page is on by default in new projects. A project that booths already run keeps it off until you turn on **Enabled in session flow** on the Adjust tab and save, so their sessions don't change without you. The booth shows this screen from Pixture Photobooth 1.2.6.

### Assign photos (Studio only)

The screen where a Studio customer places pool shots into the template: a **Template Slots** block and a **Photo Pool** block that shares the Filter Strip's grid options. Highlight options set the ring on the selected slot, the outline on the selected photo, how used photos dim, and the slot-number badges. The customer taps a slot, then a photo; **Take more** returns to Capture with the pool kept. A Studio session ends on its session length, its photo limit (up to 40 shots) or **Done**, which appears once every slot can be filled.

### Filter

The **Filter Strip** block lists the booth's filters with the same grid options as Template Cards, plus a **card ratio** from 16:9 to 1:1 (square by default). The **Filter Preview** block shows the customer's photo with the chosen filter and has its own Camera Frame ratio. Which filters appear is set on the booth's Filters tab; see [Photo Filters and Overlays](./filters-and-overlays.md).

### Decor

Where the customer decorates their print: they draw, type and add stickers. The **Decor Canvas** block is the drawing area (it shows the whole print, or the template's decor area) and the **Decor Palette** block holds the tools.

**Light projects.** Decor is a step after the photos, so it is not a mode you tick. It shows only when the project has Photo or Studio. On the Decor page:

- **Enabled in session flow** is the page's on/off switch. When it is off, guests go from Filter straight to Sharing.
- **Decor goes** sets where the decor ends up: **On the print** (the default) or **Soft file only**. With **Soft file only**, the print stays clean and the decor is on the customer's soft file.
- The palette has three tabs. **Draw** has the pens, the 15 colours, the size and the eraser. **Aa** adds text, with 8 fonts. **Stickers** has 24 stickers to tap. Whatever the customer adds stays on the print when they change tab.
- A sticker is picked with a tap. Drag it to move it. Use the top-right handle to turn it and the bottom-right handle to resize it, or use two fingers. The cross removes it. A sticker that goes past the edge of the print is cut off at the edge.
- **Colors**, **Min size** and **Max size** of the pen are set in the **Decor Palette** block.

**Classic projects.** They keep the Decor button choices from **Edit modes**: **Decor button, printed**, **Decor button, not printed**, **After Photo, printed** and **After Photo, not printed**. The page keeps its single palette with the pens and the text tool, and has no stickers. It also has the **Colors**, the **Min size** and **Max size** of the pen, a **Show colour disc** switch and a **Stabilizer** that smooths customers' lines.

Both kinds have a page timer. Where the decor lands on the print is set in the template editor with **Decor area**; a template without one lets the customer decorate the whole strip. See [Template Editor](./creating-templates.md).

Stickers and the three tabs need Pixture Photobooth 1.2.56 or newer. An older booth shows the pens and the text tool only.

#### Text fonts

Customers can type as well as draw: they tap **Aa**, tap the print and type. How that looks on the booth is in [Session Flow](../../desktop-app/session-flow/overview.md).

You choose the fonts they can type with:

1. On the **Decor** tab, click the **Decor Palette** block.
2. In its settings, find **Text fonts**, under **Palette**.
3. Click a font to turn it on or off. Up to 8 can be on, and at least one stays on. The first one that is on is the font a new text starts with.
4. To use your own font, click **+ Upload font…** and pick a WOFF2, WOFF, TTF or OTF file, up to 4 MB. It is added to the list and turned on.
5. **Save** the project.

A project where you never open **Text fonts** offers four: Caveat, Inter, Pacifico and Bebas Neue. A font you upload here belongs to this UI project and can also be picked for its text blocks.

Typing needs Pixture Photobooth 1.2.39 or newer. An older booth shows the pens only.

### Sharing

![UI Editor on the Sharing screen](/img/docs/pix-design-ui-editor-sharing.webp)

The last screen: QR code, print, and back to Start.

- The composite preview has a **Showcase loop** switch. On, it loops through the session's outputs; off, it shows the composite and then the live photo once ready.
- The **QR Code** block links to the customer's share page. See [Microsite (Share Page)](./microsite.md).
- The **Share buttons (QR, AirDrop, Print)** block puts round buttons on the screen: **Scan QR** (opens a big QR code, or tick **Show the QR code** to show it right on the screen), **AirDrop or Share** (AirDrop on a Mac booth, the share sheet on a phone or tablet, left out on Windows), **Email** and **Print**, which reads **Extra print** when the page prints by itself. The **Email** switch is on by default and shows next to **Scan QR**. The Email button only shows on a Pix Pro booth, on a booth that can share soft files, when email sharing is switched on for your account, and never on a phone. Turn **Email** off to hide the button. **Free extra prints** sets how many extra prints are free per session.
- **Finish** ends the session; the page timer returns to Start if the customer walks away.
- Extra prints are sold here when **Extra print price (sharing screen)** is on in Booth Pricing; the print mockup follows the booth's print format.
- The GIF and live photo previews show the real files once encoded.

## Working With Blocks

Every block has a position and size, a corner radius (0 by default), and, where it draws text, a font, size, weight and colour. Buttons and click areas carry an action such as start, next, retake, apply voucher or finish, so you can build a screen entirely from your own artwork and invisible click areas. To change a number quickly, drag its label in the properties panel left or right.

## Preview

**Preview** runs the current page the way the booth will, with sample photos and mock payment blocks, so you can check the flow and the touch targets before saving. Test on the real screen once: targets that look fine on a laptop can be small on a 24-inch display.

## Saving and Publishing

**Save** publishes the design and the toolbar shows "Saved". Booths running the project pick up the design on their next idle refresh, usually within seconds, without a restart; a photo session in progress finishes on the old design. On Pix Starter every tool works, but **Save** needs Pix Pro (see [Pix Design Overview](./overview.md)).

## Assigning to Booths

Three places:

1. **Assign to booths** on the project's card menu: tick booths or **All booths**, then **Apply**.
2. **Booths > booth > UI Project** tab: the dropdown groups projects under **Several modes** (each with its modes after the name), **Photobooth mode**, **Studio mode**, **Simple mode**, **Newspaper mode** and **Decor**. Pick one and click **Save**. The tab warns when the booth's app is too old: Studio needs 1.1.98 or newer, and "A choice of modes on the start screen needs Pixture Photobooth 1.2.4 or newer."

   ![Booth UI Project tab with the grouped project dropdown open on Several modes, Photobooth mode, Studio mode and Decor, and Save](/img/docs/booth-ui-project-tab.webp)

3. **Events > event > Setup > Appearance > Change**: pin a UI project to the event. The list shows only projects made for the event's booth mode. While the event runs, its choice wins.

## Related

- [Customise booth screens](../../tutorials/customise-kiosk-screens.md)
- [Session flow on the booth](../../desktop-app/session-flow/overview.md)
- [Booth Pricing](../booth-pricing.md)
- [Photo Filters and Overlays](./filters-and-overlays.md)
