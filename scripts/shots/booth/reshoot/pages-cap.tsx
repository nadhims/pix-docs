// Capture screens from the server's default Pix Design Capture layout (UiLayoutValidation.cs "Capture" and
// UiProjectLayoutFactory.AddPoolBlocksToCapture at API 6046ce87): the per-shot Review (Advanced, as new projects seed it),
// the Studio Capture page, and the Capture page with two camera angles. Drawn sample shots, no real person.
import { LayoutContainer } from '@renderer/layout/LayoutContainer'
import { BackgroundRenderer } from '@renderer/layout/BackgroundRenderer'
import { BlockRenderer } from '@renderer/layout/BlockRenderer'
import { ReviewSubPageView } from '@renderer/pages/CapturePage'
import { ShotAnglePicker } from '@renderer/components/ShotAnglePicker'
import { useSessionStore } from '@renderer/store/session-store'
import { useCaptureStateStore } from '@renderer/store/capture-state-store'
import { useLayoutStore } from '@renderer/store/layout-store'
import { useNavigationStore } from '@renderer/store/navigation-store'
import { useCameraStore } from '@renderer/store/camera-store'
import { useAngleStore } from '@renderer/store/angle-store'
import { useSettingsStore } from '@renderer/store/settings-store'
import { useAuthStore } from '@renderer/store/auth-store'

const W = 1920, H = 1080, SANS = 'Inter, ui-sans-serif, system-ui, -apple-system, sans-serif', ACCENT = '#D97756'
const PILL_W = 240, PILL_H = 81, PILL_X = W - 33 - PILL_W, PILL_Y = H - 30 - PILL_H
const blk = (id: string, type: string, x: number, y: number, width: number, height: number, extra: Record<string, unknown> = {}) =>
  ({ id, type, x, y, width, height, z: 5, isVisible: true, isEnabled: true, ...extra })
const pill = (id: string, type: string, text: string, x: number, primary: boolean, action?: string) =>
  blk(id, type, x, PILL_Y, PILL_W, PILL_H, { z: 10, text, action, style: primary
    ? { variant: 'primary', bgColor: ACCENT, textColor: '#FFFFFF', fontFamily: SANS, fontSize: 28, fontWeight: 700, cornerRadius: 40, preset: 'gradient' }
    : { variant: 'secondary', bgColor: '#FFFFFF0F', textColor: '#FFFFFF', fontFamily: SANS, fontSize: 24, fontWeight: 600, cornerRadius: 40,
        borderStyle: 'solid', borderThickness: 1, borderColor: '#FFFFFF24', preset: 'default' } })
const timerPill = (type: string) => blk(type, type, W - 60 - 178, 30, 178, 62,
  { z: 10, pill: { on: true }, style: { fontSize: 28, fontWeight: 700, textColor: '#FFFFFF', bgEnabled: false } })

const photo = blk('reviewPhoto', 'reviewPhoto', 72 + (1218 - 72 - 1100) / 2, (940 - 619) / 2, 1100, 619)
const REVIEW = [
  photo,
  blk('composedPreview', 'composedPreview', 1290, photo.y, 560, 619),
  pill('btnRetake', 'retakeButton', 'Retake', PILL_X - 24 - PILL_W, false, 'capture.retake'),
  pill('btnNext', 'nextButton', 'Next', PILL_X, true, 'capture.next'),
  blk('photoCounter', 'photoCounter', photo.x + 550 - 110, photo.y - 40 - 48, 220, 48, { z: 10, style: {
    fontFamily: SANS, fontSize: 24, fontWeight: 600, textColor: '#F5F0E8', bgEnabled: true, bgColor: '#FFFFFF0F', cornerRadius: 24,
    borderStyle: 'solid', borderThickness: 1, borderColor: '#FFFFFF24' } }),
  timerPill('sessionTimer')
]
const LIVE = blk('liveview', 'liveview', 0, 0, W, H, { z: 1 })
const CARDS = blk('previewCards', 'previewCards', (W - 866) / 2, H - 36 - 135, 866, 135, { z: 10, style: { cornerRadius: 0 },
  previewCards: { orientation: 'horizontal', cardSize: 135, ratio: '3:2', spacing: 18, showNumbers: true, ringColor: ACCENT, ringWidth: 4,
    emptyColor: '#181514B8', numberColor: '#F5F0E8' } })
const STUDIO = [
  LIVE,
  blk('photoCounter', 'photoCounter', 20, 880 + 140 + 12, 187, 24, { z: 10, style: { fontFamily: SANS, fontWeight: 600, textColor: '#FFFFFF' },
    photoCounter: { format: '{current} photos' } }),
  timerPill('poolTimer'),
  blk('poolThumbnailStrip', 'poolThumbnailStrip', 20, 880, 187, 140, { z: 10 }),
  { ...pill('poolDoneButton', 'poolDoneButton', 'Done', PILL_X, true), style: { variant: 'primary', bgColor: ACCENT, textColor: '#FFFFFF',
    fontFamily: SANS, fontSize: 28, fontWeight: 700, cornerRadius: 40, preset: 'gradient' } }
]

// A drawn sample shot: a soft backdrop and simple head-and-shoulders figures (no real person).
const TONES = [['#e7c9a9', '#c0623f'], ['#cfe0e8', '#3d6f8e'], ['#efe0b8', '#9a7b2f'], ['#e3d3ea', '#6d4d86'], ['#3a4652', '#d9a47a']]
function shot(i: number, w = 1600, h = 900): string {
  const c = document.createElement('canvas'); c.width = w; c.height = h
  const g = c.getContext('2d')!
  const [bg, fg] = TONES[i % TONES.length]
  const grad = g.createLinearGradient(0, 0, 0, h); grad.addColorStop(0, bg); grad.addColorStop(1, i === 4 ? '#222a31' : '#ffffff')
  g.fillStyle = grad; g.fillRect(0, 0, w, h)
  g.fillStyle = fg
  for (const cx of [w * 0.38, w * 0.62]) {
    g.beginPath(); g.arc(cx, h * 0.42, h * 0.13, 0, Math.PI * 2); g.fill()
    g.beginPath(); g.ellipse(cx, h, h * 0.27, h * 0.36, 0, Math.PI, 0); g.fill()
  }
  return c.toDataURL('image/jpeg', 0.9)
}
const blobOf = (url: string): Blob => {
  const [head, b64] = url.split(','); const bin = atob(b64); const u = new Uint8Array(bin.length)
  for (let i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i)
  return new Blob([u], { type: head.slice(5, head.indexOf(';')) })
}
// A made-up 2x6 strip with three see-through photo holes.
const TW = 600, TH = 1800
const SLOTS = [0, 1, 2].map((i) => ({ id: i + 1, index: i, x: 40, y: 140 + i * 500, width: 520, height: 460 }))
function stripArt(): string {
  const c = document.createElement('canvas'); c.width = TW; c.height = TH
  const g = c.getContext('2d')!
  g.fillStyle = '#f4ecdf'; g.fillRect(0, 0, TW, TH)
  for (const s of SLOTS) g.clearRect(s.x, s.y, s.width, s.height)
  g.fillStyle = '#2b2522'; g.font = 'bold 56px Georgia, serif'; g.textAlign = 'center'
  g.fillText('Sunny Side', TW / 2, 95)
  g.font = '34px Georgia, serif'; g.fillText('Mall Kiosk', TW / 2, 1700)
  return c.toDataURL('image/png')
}

function capture(blocks: unknown[], capture: Record<string, unknown>, review = REVIEW): void {
  useNavigationStore.setState({ page: 'capture' } as never)
  useCameraStore.setState({ hasReceivedFirstFrame: true, isLiveView: true } as never)
  useLayoutStore.setState({ layouts: { ...useLayoutStore.getState().layouts, Capture: {
    canvas: { width: W, height: H }, background: { kind: 'solid', color: '#181514' }, blocks: [],
    pageSettings: { capture: { reviewAdvancedMode: true, autoAdvanceAfterReview: true, reviewAutoAdvanceSeconds: 15, ...capture } },
    subPages: { capture: { blocks }, review: { background: { kind: 'solid', color: '#181514' }, blocks: review } }
  } } } as never)
}
function strip(shots: number): void {
  const urls = Array.from({ length: shots }, (_, i) => shot(i))
  useSessionStore.setState({
    sessionPublicId: 'demo-session', selectedTemplateId: 'tpl-strip', selectedTemplateThumbnailUrl: stripArt(),
    templatePhotoSlots: SLOTS, templateCanvasWidth: TW, templateCanvasHeight: TH, totalSlots: 3, currentSlotIndex: Math.max(0, shots - 1),
    capturedBlobs: urls.map(blobOf), captureMode: 'composite'
  } as never)
  return void urls
}

export const setups: Record<string, () => void> = {
  review: () => {
    capture([LIVE, timerPill('sessionTimer'), CARDS], {})
    strip(1)
    useCaptureStateStore.setState({ phase: 'review', lastCapturedUrl: shot(0), reviewSecondsLeft: 8, sessionTimeRemaining: 152 } as never)
  },
  studio: () => {
    ;(window as unknown as { __SAMPLE: string }).__SAMPLE = shot(4, 1280, 853) // a darker backdrop: the white counter under Last Shot stays readable
    capture(STUDIO, { captureSessionModel: 'pool', poolDurationSeconds: 300, poolMaxPhotos: 0 })
    const urls = [0, 1, 2, 3, 0].map((i) => shot(i, 1200, 900))
    useSessionStore.setState({ sessionPublicId: 'demo-session', totalSlots: 3, pooledBlobs: urls.map(blobOf), pooledBlobUrls: urls,
      pooledShotIds: urls.map((_, i) => i), nextPoolShotId: urls.length } as never)
    useCaptureStateStore.setState({ phase: 'live-ready', poolSecondsRemaining: 214, sessionTimeRemaining: -1 } as never)
  },
  angles: () => {
    ;(window as unknown as { __SAMPLE: string }).__SAMPLE = shot(2, 1280, 853)
    capture([LIVE, timerPill('sessionTimer'), CARDS], {})
    strip(0)
    useSessionStore.setState({ capturedBlobs: [], currentSlotIndex: 0 } as never)
    const cams = [{ id: 'Canon EOS 250D', name: 'Canon EOS 250D', cameraType: 'canon', connected: true, uid: 'canon-a' },
      { id: 'Canon EOS M50', name: 'Canon EOS M50', cameraType: 'canon', connected: true, uid: 'canon-b' }]
    useCameraStore.setState({ cameras: cams, connectedCamera: cams[0].id, connectedCameraUid: 'canon-a', connectedCameraType: 'canon' } as never)
    const s = useSettingsStore.getState().settings
    useSettingsStore.setState({ settings: { ...s, camera: { ...s.camera, angleCameras: {
      front: { uid: 'canon-a', cameraType: 'canon', name: 'Canon EOS 250D' }, high: { uid: 'canon-b', cameraType: 'canon', name: 'Canon EOS M50' } } } } } as never)
    useAngleStore.setState({ angles: [{ id: 'front', name: 'Front', imageUrl: null }, { id: 'high', name: 'High angle', imageUrl: null }],
      selectedAngleId: 'front', failedAngleIds: [], switching: false } as never)
    useAuthStore.setState({ deviceMode: 'kiosk', captureMode: 'composite', tierCapabilities: { tierName: 'Pix Pro', isFreeTier: false } } as never)
    useCaptureStateStore.setState({ phase: 'live-ready', sessionTimeRemaining: 165 } as never)
  }
}

const layout = () => useLayoutStore.getState().layouts.Capture as never as { subPages: { capture: { blocks: never[] }, review: { blocks: never[] } } }
const CaptureBlocks = () => (
  <>
    <BackgroundRenderer background={{ kind: 'solid', color: '#181514' } as never} />
    {layout().subPages.capture.blocks.map((b: { id: string }) => <BlockRenderer key={b.id} block={b as never} />)}
  </>
)
export const pages: Record<string, () => JSX.Element> = {
  review: () => (
    <LayoutContainer>
      <CaptureBlocks />
      <ReviewSubPageView sub={layout().subPages.review as never} pageBackground={{ kind: 'solid', color: '#181514' } as never} autoAdvance />
    </LayoutContainer>
  ),
  studio: () => <LayoutContainer><CaptureBlocks /></LayoutContainer>,
  angles: () => <LayoutContainer><CaptureBlocks /><ShotAnglePicker /></LayoutContainer>
}
