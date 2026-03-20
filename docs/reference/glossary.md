---
sidebar_position: 4
title: Glossary
description: Definitions of key terms used throughout the Pix documentation and application.
tags: [reference, glossary, terminology]
---

# Glossary

Key terms used in Pix, explained for photobooth operators.

### Booth

A single photobooth setup registered in your Pix account. Each booth has its own device, templates, and session history. The Starter plan includes one booth; paid plans support unlimited booths.

### Booth Health

A monitoring system that tracks seven health signals for each booth: connectivity, camera status, printer status, upload queue, network latency, memory usage, and CPU temperature. Each signal reports a severity level (healthy, warning, or critical). Available on paid plans.

### Composite

The final image generated after a session. A composite combines the guest's captured photos with the template layout, backgrounds, and branding into a single shareable image.

### Day Pass

A 24-hour access pass that unlocks all Business features for a single day. Activates immediately upon purchase.

### Dead Letter

A queued upload or task that has failed repeatedly and been moved aside so it doesn't block other operations. Dead-lettered items appear in diagnostics and can be retried manually.

### GIF Mode

A capture mode that takes a rapid burst of frames and assembles them into an animated GIF. Guests get a short looping animation instead of a static photo. One of the four soft file types.

### License

A per-booth plan assignment that determines which features the booth can access. Licenses can be transferred between booths from the dashboard — the source booth reverts to the free Starter plan and the target booth receives the paid plan.

### Live Photo

A capture mode that records a short video clip alongside the photo capture. The output is a brief MP4 video file that guests can share, adding motion to the booth experience. One of the four soft file types.

### Microsite

A branded, mobile-friendly web page where guests view and download their photos after a session. Each session generates a unique microsite URL shared via QR code. Microsites display composites, GIFs, live photos, and singles, and carry your organization's branding and logo.

### Offline Resilience

The ability of the Pix Desktop App to continue operating without internet. Sessions, composites, and prints work uninterrupted. An auto-sync upload queue stores files locally and uploads them when connectivity returns. Cryptographic offline grants (RS256-signed tokens) allow the app to verify its license locally during extended outages.

### Photo Filter

A color grading effect applied to photos after capture. Pix includes 14 built-in filters (warm vintage, cool blue, black & white, and more). Operators can also upload custom .CUBE LUT files for precise color grading. Guests browse a scrollable preview strip and choose a filter before sharing.

### Pix Studio

The template editor inside the Pix dashboard where you design and customize templates. Available on Day Pass and Business plans.

### Session

One guest interaction from start to finish — selecting a template, capturing photos, applying a filter (optional), and sharing or printing the result. Sessions are tracked for analytics and billing.

### Soft Files

The digital output files from a session. Pix supports four soft file types: composites (PNG), animated GIFs, live photos (MP4), and singles (individual JPEGs). All are delivered through the same microsite sharing flow.

### Template

A visual layout that defines how photos are arranged in the final output. Templates include background images, photo slot positions, and overlay graphics. You can upload .PNG templates with transparent regions (photo slots are auto-detected) or create templates from scratch in Pix Studio.

### UI Editor

A drag-and-drop canvas editor for designing the kiosk interface. Operators can customize six screens (Home, Tutorial, Payment, Template Selection, Capture, Sharing) with buttons, images, text, and backgrounds. Uses a draft-and-publish workflow with one-click rollback.

### Voucher

A code that guests can enter at the booth to start a session without paying. Operators create vouchers in the dashboard to offer complimentary sessions — useful for VIP guests, sponsors, or promotional events.

### Payment Gateway

An integration that lets you accept payments from guests directly at the booth. Pix supports Xendit, DOKU, and Midtrans as payment providers. Configure your gateway in the dashboard under booth settings.
