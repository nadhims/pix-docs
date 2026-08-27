---
sidebar_position: 5
title: Printer Setup
description: Configuring a printer for instant photo prints in the Pix Desktop App.
tags: [desktop-app, printer, printing, setup]
---

# Printer Setup

The Pix Desktop App supports instant photo printing so customers can walk away with a physical copy of their photos. Printers are configured in the app's settings panel.

## Auto-Discovery

When you open **Menu > Printer Settings**, the app scans for available printers on your system. Any printer installed and recognized by your operating system (macOS or Windows) will appear in the list.

This includes:

- **Dye-sublimation printers** (DNP, HiTi, Mitsubishi) -- the industry standard for photobooth printing
- **Inkjet photo printers** (Canon SELPHY, Epson)
- **Network printers** accessible from your computer

<!-- Screenshot: Printer selection dropdown in settings -->

:::tip
Dye-sublimation printers produce the best results for photobooth use. They are fast (prints in 10-15 seconds), produce smudge-proof prints, and the per-print cost is predictable.
:::

## Paper Size Configuration

After selecting a printer, choose the paper size that matches your loaded media:

The **Media size** list comes from the printer driver, so it shows exactly the sizes your printer supports. Common choices are **4x6"** (10x15 cm, the photobooth standard, also cut into two 2x6" strips), **5x7"**, and **6x8"**.

The app automatically scales the composite image to fit the selected paper size. Make sure your template dimensions in Pix Design match your paper size for pixel-perfect prints.

## Test Print

Before opening for the day, always run a test print:

1. Open the operator menu (double-tap the top-right corner) and go to **Printer Settings**.
2. Select your printer and paper size.
3. Click **Test Print**.

The app sends a sample image to verify colors, alignment, and paper feed. Adjust printer-specific settings (color density, margins) through the printer driver if needed.

:::caution
Keep spare media and ribbon on hand. Dye-sub printers can run out of media at any point during operating hours, and you cannot resume a partially used ribbon roll.
:::

## Enabling Print in the Photo Session Flow

Printing is part of the sharing step. To make it available to customers:

1. Ensure a printer is configured and selected in Settings.
2. In the Pix dashboard, enable the **Print** sharing option for your booth.

Customers will see a print button on the sharing screen alongside QR code and other options.

## Troubleshooting

If the printer does not appear in the list, verify it is installed at the OS level (**System Settings > Printers & Scanners** on macOS or **Settings > Bluetooth & devices > Printers & scanners** on Windows). See [Troubleshooting](./troubleshooting.md) for more help.
