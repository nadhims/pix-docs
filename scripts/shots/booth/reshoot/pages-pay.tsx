// Payment screens: the default Pix Design Payment page (QR Pay + Use Voucher cards, as the editor seeds it) with the
// booth's own popups on top: package picker, QR with its countdown, a live promo, the voucher window, offline payment.
import { LayoutContainer } from '@renderer/layout/LayoutContainer'
import { BackgroundRenderer } from '@renderer/layout/BackgroundRenderer'
import { BlockRenderer } from '@renderer/layout/BlockRenderer'
import { PaymentFlowPopup } from '@renderer/components/payment/PaymentFlowPopup'
import { PaymentPage } from '@renderer/pages/PaymentPage'
import { usePaymentStore } from '@renderer/store/payment-store'
import { useNavigationStore } from '@renderer/store/navigation-store'
import { useLayoutStore } from '@renderer/store/layout-store'
import { useCameraStore } from '@renderer/store/camera-store'
import { useSessionStore } from '@renderer/store/session-store'
import { useTemplateStore } from '@renderer/store/template-store'
import payArt from './pay.webp'
import voucherArt from './voucher.webp'

const btn = { bgColor: '#FFFFFF', textColor: '#181514', fontSize: 32, cornerRadius: 40, fontWeight: 600, bgEnabled: true }
// ui-project-editor.js createEmptyLayout('Payment') at API 6046ce87 (mirrors the server default).
const PAYMENT = {
  canvas: { width: 1920, height: 1080 },
  background: { kind: 'solid', color: '#FFFFFF' },
  blocks: [
    { id: 'i1', type: 'image', x: 480, y: 310, width: 420, height: 420, z: 5, src: payArt, style: { cornerRadius: 24 } },
    { id: 'b1', type: 'paymentButton', x: 540, y: 690, width: 300, height: 80, z: 10, text: 'QR Pay', action: 'payment.showQris', style: btn },
    { id: 'i2', type: 'image', x: 1020, y: 310, width: 420, height: 420, z: 5, src: voucherArt, style: { cornerRadius: 24 } },
    { id: 'b2', type: 'voucherButton', x: 1080, y: 690, width: 300, height: 80, z: 10, text: 'Use Voucher', action: 'payment.showVoucher', style: btn }
  ].map((b) => ({ ...b, isVisible: true, isEnabled: true })),
  groups: []
}

// A made-up IDR booth: Single Rp 35.000, Double Rp 60.000, Group Rp 100.000 (a strip template, so the cards draw strips).
function booth(extra: Record<string, unknown> = {}): void {
  useNavigationStore.setState({ page: 'payment' } as never)
  useLayoutStore.setState({ layouts: { ...useLayoutStore.getState().layouts, Payment: PAYMENT } } as never)
  useCameraStore.setState({ hasReceivedFirstFrame: true } as never)
  useSessionStore.setState({ sessionPublicId: 'demo-session' } as never)
  useTemplateStore.setState({ templates: [{ id: 't1', name: 'Strip', printSize: '2x6', canvasWidth: 600, canvasHeight: 1800, photoSlots: [] }] } as never)
  usePaymentStore.setState({
    currency: 'IDR', boothCurrency: 'IDR', sessionBasePrice: 35000, doublePrice: 60000, groupPrice: 100000,
    amount: 35000, subtotal: 35000, paymentGatewayConfigured: true, selectedPackage: 'single', additionalPrintCount: 0,
    ...extra
  } as never)
}

const Stage = ({ children }: { children?: JSX.Element }) => (
  <LayoutContainer>
    <BackgroundRenderer background={PAYMENT.background as never} />
    {PAYMENT.blocks.map((b) => <BlockRenderer key={b.id} block={b as never} />)}
    {children}
  </LayoutContainer>
)

const hour = () => new Date(Date.now() + 2 * 3600_000 + 14 * 60_000).toISOString()
export const setups: Record<string, () => void> = {
  'pay-packages': () => booth({ state: 'price-display' }),
  'pay-qr': () => booth({ state: 'qr-display', amount: 60000, subtotal: 60000, selectedPackage: 'double', remainingSeconds: 247,
    qrisUrl: '00020101021226670016COM.EXAMPLE.DEMO0118SUNNYSIDE-DEMO-QR5204581253033605406600005802ID5920SUNNY SIDE MALL KIOSK6007JAKARTA6304ABCD' }),
  'pay-promo': () => booth({
    state: 'price-display', amount: 28000, promosKnown: true,
    livePromos: [{ id: 'p1', name: 'Weekend Deal', reward: 'percentOff', percentOff: 20, prices: { single: 28000, double: 48000, group: 80000 },
      endsAtUtc: hour(), showOnStart: true, apply: 'automatic' }]
  }),
  'pay-voucher': () => booth({ state: 'idle' }),
  'pay-offline': () => booth({ state: 'offline-static-qr', offlineVoucherUrl: 'https://pixture.io/pay/offline/demo-sunny-side' })
}

export const pages: Record<string, () => JSX.Element> = {
  'pay-packages': () => <Stage><PaymentFlowPopup isOpen onClose={() => {}} boothId="b" /></Stage>,
  'pay-qr': () => <Stage><PaymentFlowPopup isOpen onClose={() => {}} boothId="b" /></Stage>,
  'pay-promo': () => <Stage><PaymentFlowPopup isOpen onClose={() => {}} boothId="b" /></Stage>,
  // The voucher window opens from the Use Voucher button (the render script clicks it and types a code).
  'pay-voucher': () => <Stage />,
  // The real Payment page: its offline card (OfflineStaticQrOverlay) is internal to it.
  'pay-offline': () => <PaymentPage />
}
