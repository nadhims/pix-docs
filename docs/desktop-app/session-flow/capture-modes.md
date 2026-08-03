---
sidebar_position: 5
title: Capture Modes
description: Understanding composite, GIF, and live photo capture modes in the Pix Desktop App.
tags: [desktop-app, photo session, capture, gif, live-photo, composite]
---

# Capture Modes

The Pix Desktop App supports three capture modes, each producing a different type of [soft file](/docs/reference/glossary#soft-files). The capture mode is determined by the template the customer selects. In addition to the mode-specific output, each photo session can also generate **singles** — the individual captured photos saved as separate JPEGs.

## Composite (Multi-Shot)

The most common photobooth mode. The camera takes multiple individual photos, then combines them into a single composite image using the template layout.

**How it works:**

1. A countdown timer appears on screen (typically 3 seconds).
2. The camera fires and captures a photo.
3. Steps 1-2 repeat for each slot in the template (e.g., 4 times for a 4-up strip).
4. All photos are composited into the final layout with the template overlay.

<!-- Screenshot: Composite capture countdown screen -->

:::tip
Coach your customers with on-screen prompts like "Strike a pose!" between shots. The countdown gives them time to change positions for each frame.
:::

## GIF (Animated)

Captures a rapid sequence of frames and assembles them into an animated GIF. Great for fun, shareable content.

**How it works:**

1. A short countdown starts.
2. The camera captures a burst of frames (typically 4-8 frames over 2-3 seconds).
3. Frames are assembled into a looping GIF.

GIF captures work best with:

- Well-lit environments (consistent exposure across frames)
- Customers who move or change expressions between frames
- Simple backgrounds that keep the focus on the subject

:::info
GIF output is optimized for sharing -- file sizes are kept reasonable for QR code download and social media posting.
:::

## Live Photo (Video + Still)

Captures a short video clip alongside a high-resolution still frame. The still frame is used for the composite/print, while the video adds a dynamic element to digital sharing.

**How it works:**

1. The camera begins recording video.
2. During recording, one full-resolution still frame is captured.
3. The video clip (typically 3-5 seconds) and still frame are saved together.

This mode is ideal for:

- Kiosk locations that want both printable photos and social video content
- Adding motion to the customer gallery page

:::caution
Live photo mode requires a Canon EOS camera. It is not available with the webcam fallback due to the need for simultaneous video and still capture.
:::

## Choosing a Mode

The capture mode is set per template in Pix Design. You can offer customers a mix by assigning templates with different modes to the same booth -- for example, two composite templates and one GIF template.
