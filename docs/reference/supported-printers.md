---
sidebar_position: 3
title: Supported Printers
description: Photo printers tested with the Pix Desktop App, including dye-sublimation and common inkjet alternatives, print sizes and setup tips.
tags: [reference, printers, hardware, printing]
---

# Supported Printers

:::info Prices
Indonesian street prices below are approximate as of August 2026 and drift over time.
:::

Prints go through the operating system's standard print driver, so any printer with a working driver should work. Dye-sublimation printers (DNP, HiTi, Mitsubishi, Kodak) are the fastest and most durable option and are what most professional photobooth operators use. Epson's minilab and consumer inkjet printers are also common, especially for budget setups in Indonesia. The sections below cover both.

## Which printer should you buy?

| Tier | Model | Approx. price (IDR) | Why |
|---|---|---|---|
| **Budget (inkjet)** | Epson EcoTank L805 / L810 / L8050 | ~5 to 5.2 juta | Lowest upfront and per-print cost (refillable ink tanks, roughly Rp 75 to Rp 390 per 4R print). Slower than dye-sub (~12 to 25 s per print) and prints need drying time before handling. |
| **Budget (dye-sub)** | Canon Selphy CP1500 | ~2.7 to 3.0 juta | Cheapest dye-sub. Prints dry instantly and resist smudging and fading, but 4x6" only and lower paper capacity than the bigger units. |
| **Mid** | Kodak Photo Printer 305 | ~7.2 to 8.5 juta | Dye-sub, 4x6" and 6x8", ~11 to 15 s per print. A DNP/HiTi/Mitsubishi alternative at a lower price. |
| **Mid-high** | HiTi P525L | ~19 to 21.5 juta | Dual-deck option, dye-sub, a real step up from entry units without DNP's premium pricing. |
| **Minilab (higher volume)** | Epson SureLab SL-D530 | ~15 juta | Not dye-sub: Epson's lab-grade inkjet, ~14 s per 4x6 print. Sold specifically as a photobooth printer in Indonesia. |
| **Premium (dye-sub)** | DNP DS-RX1 | ~20 to 29 juta | The dye-sub industry standard: fastest, most reliable, handles high-traffic locations consistently. |

These are approximate, point-in-time market prices. Treat them as a starting reference, not a quote, and check current prices with a retailer before buying.

## Tested dye-sublimation printers

Dye-sub prints emerge dry in seconds with a protective overcoat, so they resist fading, smudging and water far better than inkjet.

| Manufacturer | Model | Max print size | Notes |
|---|---|---|---|
| DNP | DS-RX1 | 6x8" | Industry standard, fast and reliable |
| DNP | DS620 | 6x8" | Compact, popular for high-traffic locations |
| HiTi | P525L | 6x8" | Good value, dual-deck option |
| Mitsubishi | CP-D90DW | 6x8" | High speed, double-sided capable |
| Kodak | Photo Printer 305 | 6x8" | ~11 to 15 s per 4x6 print, lower cost than DNP/HiTi/Mitsubishi |
| Kodak | Photo Printer 605 | 6x8" | Higher roll capacity than the 305; Windows driver only, no confirmed Mac driver |
| Canon | Selphy CP1500 | 4x6" | Portable, good for low-traffic or pop-up locations |

:::tip
The DNP DS-RX1 and DS620 are the most popular choices among photobooth operators. On the kiosk, set **ORIENTATION** to **Landscape** for dye-sub printers.
:::

## Inkjet alternatives

### Epson SureLab (minilab printers)

Epson SureLab (SL-D530, D700, D1070 and similar) is a professional dry minilab system: a lab-grade inkjet, not dye-sublimation, despite sometimes being labelled dye-sub by retailers. The SL-D530 is sold specifically as a photobooth printer in Indonesia and prints a 4x6" in roughly 14 seconds. Larger models (D700, D1070) step up to higher volume and wider media (up to 8") at a higher price. It uses a standard OS print driver like any other printer here.

### Epson EcoTank (consumer photo printers)

Consumer EcoTank printers (L805, L810, L8050 and similar) with 4R (4x6") paper are a common budget setup. Refillable ink tanks make the per-print cost very low (roughly Rp 75 to Rp 390 per 4x6 print). Trade-offs versus dye-sub or SureLab: slower per print (roughly 12 to 25 seconds), and prints need a short drying time since wet inkjet output can smudge. For low-to-moderate traffic where upfront cost matters most, this is a real, working option. Tell guests to handle fresh prints carefully.

## Newspaper photobooth printing

Some operators run a "newspaper photobooth": the guest's photo is composited into a mock vintage newspaper front page instead of a standard photo layout. This is a different hardware category.

**Paper size:** A4 is standard; A3 is a common step-up for a bigger result, well beyond the 6x8" ceiling of the dye-sub printers above.

**Printer type:** dye-sublimation does not scale to A4 or A3 at accessible pricing. Use an A3+ inkjet printer instead. A commonly used option in Indonesia:

| Model | Max size | Approx. price (IDR) | Notes |
|---|---|---|---|
| Epson EcoTank L18050 | A3+ | ~8.6 to 9.2 juta | 6-colour dye-based ink tank, borderless A3 photo printing |

Print speed is much slower at this size: Epson's own spec lists about 65 seconds for a full A4 print against about 27 seconds for a standard 4R. Set guest expectations accordingly.

**Paper type:** skip glossy photo paper; it looks wrong for the format. In order of preference: HVS 70 to 100 gsm plain paper (cheapest, closest to a real newspaper), book paper (smoother, slightly more polished), matte photo paper (premium option for weddings and corporate events).

## Supported print sizes

Print size is set per template in Pix Design when you create the template project. The available sizes depend on your printer and loaded media.

| Size | Common use |
|---|---|
| **4x6"** | Standard photo print, works with all listed printers |
| **2x6" strip** | Photo strip layout, printed as a 2-inch cut of a 4x6" sheet |
| **6x8"** | Larger format on 6x8"-capable dye-subs |
| **A-sizes** | Newspaper photobooth format; needs an A3+ inkjet, not the dye-sub printers above |

On the kiosk, choose the loaded paper under **Printer Settings > MEDIA SIZE (LOADED PAPER)** and set **ORIENTATION** to match. Booth Pricing's **Print format** (Standard, 2 inch cut, Triple strip) only changes how many pieces the Payment screen says a sheet becomes; print counts in Booth Pricing are always sheets.

## Setup tips

**Install the manufacturer's print driver** before connecting the printer:

- DNP: [dnpphoto.com](https://www.dnpphoto.com)
- HiTi: [hiti.com](https://www.hiti.com)
- Mitsubishi: [mitsubishielectric.com](https://www.mitsubishielectric.com)
- Canon: [canon.com](https://www.canon.com)
- Epson: [epson.co.id](https://www.epson.co.id)
- Kodak: [kodakmoments.com](https://business.kodakmoments.com)

**Select it on the kiosk.** Open the operator menu, tap **Printer Settings**, pick the printer under **PRINTER DEVICE**, set **MEDIA SIZE (LOADED PAPER)** and **ORIENTATION**, and press the test print button. Guest printing is disabled until a printer is selected. **COPIES PER SESSION** and **PRINT ALIGNMENT** (scale and offsets) are on the same page.

**Test before opening to guests.** Print a sample composite to confirm colours, alignment and paper feed. Dye-sub printers need a short warm-up, so the first print may take longer. With an inkjet, print a couple of test photos and let them dry fully to check for smudging.

**If a print fails**, the kiosk retries up to 3 times, 5 seconds apart. If it still fails, the guest sees a print issue notice and the photo is saved; reprint it from the operator menu under **Admin Panel > PRINT HISTORY**.

**Avoid laser printers** for photo prints; they are not designed for photo output. Inkjet is a different story: dye-sub is faster and more durable, but a well-chosen Epson SureLab or EcoTank is a working option for budget setups. Plan for slower prints and a short drying time.

**Media capacity planning:** a standard 4x6 media kit for the DNP DS-RX1 prints around 700 photos. For high-traffic locations with a dye-sub printer, keep a spare media kit on hand. For EcoTank printers, ink bottles are sold separately from paper; budget for both when estimating cost per print.

## Related

- [Printer Setup](../desktop-app/printer-setup.md)
- [Sharing One Printer Between Booths](../guides/shared-printer.md)
- [Booth Pricing](../dashboard/booth-pricing.md)
