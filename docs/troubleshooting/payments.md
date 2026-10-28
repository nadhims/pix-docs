---
sidebar_position: 6
title: Payment Problems
description: "Fixes for payment problems at the booth: a voucher or payment screen at a free booth, a live test charge \"declined by the provider\", the Payment screen never appearing, an empty QR tile, \"merchant not found\" on the customer's phone, a customer charged with no photo or charged twice, coins or card readers not counted, and a refused voucher code."
tags: [troubleshooting, payments, vouchers]
---

# Payment Problems

Start here when customers cannot pay, pay but the booth does not react, or the booth asks for payment when it should not. Problems are ordered by how often operators report them. Gateway setup is on [Payment Gateway Reference](../guides/payment-gateway-setup.md).

### A voucher or payment screen shows at a free booth

**On screen:** The Payment screen or the voucher box at every start.

**Also described as:** "voucher code masih muncul setiap mau foto", "payment screen at a free event".

**Check first:** The booth's UI project, **Payment Screen** tab, **Voucher** under **Payment Methods**.

**Fix:** The Voucher method keeps the Payment screen on even at price 0. Follow [A voucher or payment screen shows at a free booth](./templates-and-screens.md#a-voucher-or-payment-screen-shows-at-a-free-booth).

**Still stuck:** Send support the booth name and its UI project name.

### The test charge works in sandbox but is declined live

**On screen:** "Couldn't create a test charge: Payment was declined by the provider. Please try again."

**Also described as:** "test charge gagal di production", "declined by the provider", "live payment doesn't work".

**Check first:** **Settings > Payment Gateway**: the keys on the gateway card, and **Sandbox Mode**.

**Fix:**
1. The provider refused the request, which points at the account or the keys rather than the booth.
2. Live keys go with **Sandbox Mode** off, and sandbox keys with it on. **Edit** the gateway and make them match.
3. General tip: the provider must have approved your live account and turned on QR payments for it. Check that in the provider's own dashboard.
4. Run **Test** again after any change.

**Still stuck:** Send support the gateway name and the time of the test. Never send your keys.

### The Payment screen never appears

**On screen:** No error. Sessions start straight away, free.

**Also described as:** "halaman pembayaran tidak muncul", "booth is free but should charge".

**Check first:** The operator menu checklist: **Session price** "No price set, so sessions run free." or **Payments** "No payment gateway is connected, so paid sessions cannot charge." And the menu badge: **Watermarked** means Pix Starter or Pix Pro ended.

**Fix:**
1. Turn on **Payment on this booth** under **Booths > booth > Configure > Pricing** and set a session price.
2. In the booth's UI project, the **Payment Screen** must have **Enabled in session flow** ticked.
3. A watermarked computer always skips Payment. Put Pix Pro or an Event Pass on it. See [Pairing and Pix Pro Problems](./pairing-and-licence.md).
4. On an event, the event's **Pay Per Session** switch decides.

**Still stuck:** Send support the booth name.

### The QR tile stays empty

**On screen:** The Payment screen's QR area is blank while the timer runs.

**Also described as:** "QR tidak muncul", "QRIS kosong".

**Check first:** The booth's internet. The QR image comes through Pixture.

**Fix:**
1. Fix the booth's internet.
2. Then check the gateway under **Settings > Payment Gateway** and run **Test**.

**Still stuck:** Send support the booth name and the time.

### The customer's wallet says "merchant not found" {#the-guests-wallet-says-merchant-not-found}

**On screen:** On the customer's phone: "merchant not found" (or "merchant tidak ditemukan").

**Also described as:** "merchant tidak ditemukan", "QRIS tidak bisa discan".

**Check first:** This is the customer's phone, not the booth's connection.

**Fix:**
1. The wallet could not resolve the QR: poor mobile data, or a QR that expired after the payment timeout.
2. Ask the customer to try again on a fresh QR, or use a voucher.

**Still stuck:** If every customer gets it, send support the gateway name and the time.

### A customer paid but got no photo, or was charged twice {#a-guest-paid-but-got-no-photo-or-was-charged-twice}

**On screen:** Anything. The customer shows a payment on their phone.

**Also described as:** "sudah bayar tapi tidak bisa foto", "saldo terpotong dua kali", "charged twice".

**Check first:** **Transactions**, filtered to the booth and the time.

**Fix:**
1. **Contact support now.**
2. If the booth was offline at that moment, the payment may arrive late: **Sync with payment gateway** on Transactions pulls missing payments for a date range.

**Still stuck:** Send support the booth name, the time, the amount and the gateway's transaction reference.

### Coins or the card reader are not counted

**On screen:** The coin or card popup does not move on after the customer pays. A Nayax reader shows "Cash only".

**Also described as:** "koin tidak terbaca", "card reader not working".

**Check first:** Operator menu, **Hardware API**.

**Fix:**
1. Coins not counted: turn on **Enable keyboard coin input** and set **Coin key** to what the acceptor sends.
2. A cash system's sessions record as free: turn on **Treat F13 as the cash system's paid signal**.
3. Nayax "Cash only": the reader's inhibit is active. Check the Nayax portal and that the CASH-Interface2 software is running.

**Still stuck:** See [Hardware Payments](../desktop-app/hardware-payments.md), then send support the device model.

### A voucher code is refused

**On screen:** The voucher box does not accept the code.

**Also described as:** "kode voucher tidak bisa", "voucher invalid".

**Check first:** The code's length and its remaining uses on the **Vouchers** page.

**Fix:**
1. Codes are 6, 7 or 8 characters. Check for a typo.
2. A code that is used up must be refilled or replaced on the Vouchers page.

**Still stuck:** See [Vouchers](../dashboard/vouchers.md).

## Related

- [Payment Gateway Reference](../guides/payment-gateway-setup.md)
- [Payment](../desktop-app/session-flow/payment.md)
- [Hardware Payments](../desktop-app/hardware-payments.md)
- [Troubleshooting](../desktop-app/troubleshooting.md)
