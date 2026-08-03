---
sidebar_position: 3
title: Supported Printers
description: Photo printers tested with Pix, including dye-sublimation and common Indonesian inkjet alternatives.
tags: [reference, printers, hardware, printing]
---

# Supported Printers

Prints are sent through the operating system's standard print driver, so any printer with a compatible driver should work. Dye-sublimation printers (DNP, HiTi, Mitsubishi, Kodak) are the fastest and most durable option and are what most professional photobooth operators use, but they're not the only real option -- Epson's minilab and consumer inkjet printers are also common in Indonesia, especially for budget setups. The sections below cover both.

## Which Printer Should You Buy? (Budget Tiers)

Prices are approximate Indonesian market prices and will drift over time -- always check current pricing before buying.

| Tier | Model | Approx. Price (IDR) | Why |
|---|---|---|---|
| **Budget (inkjet)** | Epson EcoTank L805 / L810 / L8050 | ~5-5.2 juta | Lowest upfront and per-print cost (refillable ink tanks, roughly Rp75-390 per 4R print). Slower than dye-sub (~12-25 sec/print) and prints need drying time before handling, but a genuinely common budget choice in Indonesia. |
| **Budget (dye-sub)** | Canon Selphy CP1500 | ~2.7-3.0 juta | Cheapest dye-sub option -- prints dry instantly and resist smudging/fading, but 4x6" only and lower page capacity than the bigger dye-sub units. |
| **Mid** | Kodak Photo Printer 305 | ~7.2-8.5 juta | Dye-sub, 4x6"/6x8", ~11-15 sec/print. A genuine DNP/HiTi/Mitsubishi alternative at a lower price point. |
| **Mid-High** | HiTi P525L | ~19-21.5 juta | Dual-deck option, dye-sub, a real step up from entry dye-sub units without reaching DNP's premium pricing. |
| **Minilab (higher volume)** | Epson SureLab SL-D530 | ~15 juta | Not dye-sub -- Epson's lab-grade piezo inkjet system, ~14 sec/4x6 print. Sold specifically as a photobooth printer in Indonesia; a real alternative to dye-sub at moderate-to-high volume. |
| **Premium (dye-sub)** | DNP DS-RX1 | ~20-29 juta | The dye-sub "industry standard" -- fastest, most reliable, handles high-traffic kiosk locations consistently. |

:::caution
These are approximate, point-in-time market prices -- treat them as a starting reference, not a quote. Always check current prices with a retailer before buying.
:::

## Tested Dye-Sublimation Printers

Dye-sub is the fastest, most durable option: prints emerge dry in seconds with a built-in protective overcoat, so they resist fading, smudging, and water damage far better than inkjet.

| Manufacturer | Model | Max Print Size | Notes |
|---|---|---|---|
| DNP | DS-RX1 | 6x8" | Industry standard, fast and reliable |
| DNP | DS620 | 6x8" | Compact, popular for high-traffic kiosk locations |
| HiTi | P525L | 6x8" | Good value, dual-deck option |
| Mitsubishi | CP-D90DW | 6x8" | High speed, double-sided capable |
| Kodak | Photo Printer 305 | 6x8" | ~11-15 sec/4x6 print, lower cost than DNP/HiTi/Mitsubishi |
| Kodak | Photo Printer 605 | 6x8" | Higher roll capacity than the 305, positioned for higher-volume use; Windows driver only, no confirmed Mac driver |
| Canon | Selphy CP1500 | 4x6" | Portable, great for low-traffic or pop-up locations |

:::tip
The DNP DS-RX1 and DS620 are the most popular choices among photobooth operators. They handle high-traffic kiosk locations reliably and produce consistent results.
:::

## Inkjet Alternatives (Common in Indonesia)

Not everyone uses dye-sub. These are legitimate, widely-used options -- just with different tradeoffs.

### Epson SureLab (Minilab Printers)

Epson SureLab (SL-D530, D700, D1070, and similar) is a professional "dry minilab" system -- a lab-grade piezoelectric inkjet, not dye-sublimation, despite sometimes being mislabeled as dye-sub by retailers. The SL-D530 is sold specifically as a photobooth printer in Indonesia and prints a 4x6" in roughly 14 seconds. Larger models (D700, D1070) step up to higher volume and wider media (up to 8"), at a correspondingly higher price. It uses a standard OS print driver like any other printer here.

### Epson EcoTank (Consumer Photo Printers)

Consumer EcoTank printers (L805, L810, L8050, and similar) with 4R (4x6") paper are a common budget setup in Indonesia. They use standard piezoelectric inkjet with refillable ink tanks, making per-print cost very low (roughly Rp75-390 per 4x6 print). Trade-offs versus dye-sub or SureLab: slower per print (roughly 12-25 seconds), and prints need a short drying time before handling since wet inkjet output can smudge. For low-to-moderate traffic where upfront cost matters most, this is a real, working option -- just set expectations with guests about handling fresh prints carefully.

## Newspaper Photobooth Printing

Some operators run a "newspaper photobooth" -- the guest's photo gets composited into a mock vintage newspaper front page (headline, byline, event masthead) instead of a standard photo layout. This is a different hardware category from everything above.

**Paper size:** A4 is standard; A3 is a common step-up for a bigger, more dramatic result. This is well beyond the 6x8" ceiling of the dye-sub printers above.

**Printer type:** Dye-sublimation doesn't scale to A4/A3 at accessible pricing -- true A3 dye-sub isn't a practical consumer product category. Use an A3+ inkjet printer instead. A commonly used option in Indonesia:

| Model | Max Size | Approx. Price (IDR) | Notes |
|---|---|---|---|
| Epson EcoTank L18050 | A3+ | ~8.6-9.2 juta | 6-color dye-based ink tank, borderless A3 photo printing |

:::caution
Print speed is much slower at this size -- Epson's own spec lists ~65 seconds for a full A4 print (vs. ~27 sec for a standard 4R). This format isn't built for high-traffic speed; set guest expectations accordingly.
:::

**Paper type:** Skip glossy photo paper -- it looks wrong for the format. In order of preference:

1. **HVS 70-100gsm** -- plain paper, cheapest, closest to a real newspaper's texture.
2. **Book paper** -- smoother finish, a slightly more polished look.
3. **Matte photo paper** -- premium option for weddings/corporate events wanting a more finished feel.

## Supported Print Sizes

Pix supports the following print sizes. The available sizes depend on your printer and loaded media:

| Size | Common Use |
|---|---|
| **4x6"** | Standard photo print, works with all listed printers |
| **5x7"** | Slightly larger format, good for framed keepsakes |
| **2x6" strip** | Photo strip layout (2-4 photos in a vertical strip) |
| **A4 / A3** | Newspaper photobooth format -- needs an A3+ inkjet printer, not the dye-sub printers above |

:::info
Print size is configured per template in the template editor. Make sure your printer has the matching media loaded before starting a photo session.
:::

## Setup Tips

**Install the manufacturer's print driver** before connecting the printer to your computer. Each manufacturer provides drivers on their website:

- DNP: [dnpphoto.com](https://www.dnpphoto.com)
- HiTi: [hiti.com](https://www.hiti.com)
- Mitsubishi: [mitsubishielectric.com](https://www.mitsubishielectric.com)
- Canon: [canon.com](https://www.canon.com)
- Epson: [epson.co.id](https://www.epson.co.id)
- Kodak: [kodakmoments.com](https://business.kodakmoments.com)

**Test before opening to customers.** Print a sample composite from Pix to confirm colors, alignment, and paper feed are correct. Dye-sub printers need a short warm-up, so the first print may take longer. If using an inkjet option, print a couple of test photos and let them fully dry to check for smudging before relying on it for real customers.

:::caution
Avoid laser printers for standard photo prints -- they're not designed for photo output and produce noticeably lower quality results. Inkjet is a different story: dye-sub is faster and more durable, but a well-chosen inkjet printer (Epson SureLab or EcoTank) is a genuine working option, especially for budget setups -- just plan for slower prints and a short drying time. (Newspaper photobooth printing is its own case -- see the section above.)
:::

**Media capacity planning:** A standard 4x6 media kit for the DNP DS-RX1 prints around 700 photos. For high-traffic kiosk locations with a dye-sub printer, keep a spare media kit on hand. For EcoTank printers, ink bottles are sold separately from paper -- budget for both when estimating cost per print.
