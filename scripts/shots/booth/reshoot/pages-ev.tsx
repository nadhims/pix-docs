// Event and Newspaper screens: a Mingle shot counting down, the Photographer group's Share, the Video ready card and its
// Share, and the Newspaper Start screen. A made-up event ("Rina & Dimas Wedding"), drawn pictures, no real person.
import { useRef } from 'react'
import { parseEventStart } from '@shared/event-start'
import { LayoutContainer } from '@renderer/layout/LayoutContainer'
import { EventCaptureScreen } from '@renderer/event-ui/EventCaptureScreen'
import { EventShareScreen } from '@renderer/event-ui/EventShareScreen'
import { VideoCapturePage } from '@renderer/pages/VideoCapturePage'
import { VideoDonePage } from '@renderer/pages/VideoDonePage'
import { NewspaperStartScreen } from '@renderer/newspaper/NewspaperStartScreen'
import { NewspaperBackground } from '@renderer/newspaper/NewspaperBand'
import { useSettingsStore } from '@renderer/store/settings-store'
import { useSessionStore } from '@renderer/store/session-store'
import { useCaptureStateStore } from '@renderer/store/capture-state-store'
import { useNavigationStore } from '@renderer/store/navigation-store'
import { useCameraStore } from '@renderer/store/camera-store'
import { useAuthStore } from '@renderer/store/auth-store'
import { useLayoutStore } from '@renderer/store/layout-store'
import { useTemplateStore } from '@renderer/store/template-store'

// --- drawn pictures ---------------------------------------------------------------------------------------------------
const TONES = [['#e7c9a9', '#c0623f'], ['#cfe0e8', '#3d6f8e'], ['#efe0b8', '#9a7b2f'], ['#e3d3ea', '#6d4d86']]
function figures(g: CanvasRenderingContext2D, w: number, h: number, i: number, x0 = 0, y0 = 0): void {
  const [bg, fg] = TONES[i % TONES.length]
  const grad = g.createLinearGradient(0, y0, 0, y0 + h); grad.addColorStop(0, bg); grad.addColorStop(1, '#ffffff')
  g.fillStyle = grad; g.fillRect(x0, y0, w, h)
  g.fillStyle = fg
  for (const f of [0.38, 0.62]) {
    const cx = x0 + w * f
    g.beginPath(); g.arc(cx, y0 + h * 0.42, Math.min(w, h) * 0.13, 0, Math.PI * 2); g.fill()
    g.beginPath(); g.ellipse(cx, y0 + h, Math.min(w, h) * 0.27, Math.min(w, h) * 0.36, 0, Math.PI, 0); g.fill()
  }
}
function shot(i: number, w = 1280, h = 853): string {
  const c = document.createElement('canvas'); c.width = w; c.height = h
  figures(c.getContext('2d')!, w, h, i)
  return c.toDataURL('image/jpeg', 0.9)
}
const blobOf = (url: string): Blob => {
  const [head, b64] = url.split(','); const bin = atob(b64); const u = new Uint8Array(bin.length)
  for (let i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i)
  return new Blob([u], { type: head.slice(5, head.indexOf(';')) })
}
const TW = 600, TH = 1800
const SLOTS = [0, 1, 2].map((i) => ({ id: i + 1, index: i, x: 40, y: 140 + i * 500, width: 520, height: 460 }))
function stripArt(filled: number): string {
  const c = document.createElement('canvas'); c.width = TW; c.height = TH
  const g = c.getContext('2d')!
  g.fillStyle = '#f4ecdf'; g.fillRect(0, 0, TW, TH)
  SLOTS.forEach((s, i) => (i < filled ? figures(g, s.width, s.height, i, s.x, s.y) : g.clearRect(s.x, s.y, s.width, s.height)))
  g.fillStyle = '#2b2522'; g.font = 'bold 50px Georgia, serif'; g.textAlign = 'center'
  g.fillText('Rina & Dimas', TW / 2, 95)
  g.font = '34px Georgia, serif'; g.fillText('Garden Wedding', TW / 2, 1700)
  return c.toDataURL('image/png')
}
/** A short made-up clip (drawn figures sliding) recorded in the page, as the Share screen's video. */
function clip(): Promise<string> {
  const c = document.createElement('canvas'); c.width = 1280; c.height = 720
  const g = c.getContext('2d')!
  let f = 0
  const tick = setInterval(() => { figures(g, 1280, 720, 0, Math.sin(f++ / 6) * 40 - 40, 0) }, 40)
  const rec = new MediaRecorder(c.captureStream(25), { mimeType: 'video/webm' })
  const parts: Blob[] = []
  rec.ondataavailable = (e) => parts.push(e.data)
  return new Promise((done) => {
    rec.onstop = () => { clearInterval(tick); done(URL.createObjectURL(new Blob(parts, { type: 'video/webm' }))) }
    rec.start(); setTimeout(() => rec.stop(), 1500)
  })
}

// --- a running event ----------------------------------------------------------------------------------------------------
function event(modes: string[], mode: string, extra: Record<string, unknown> = {}): void {
  const s = useSettingsStore.getState().settings
  useSettingsStore.setState({ settings: { ...s, capture: { ...s.capture, eventId: 'ev-rina-dimas', eventStart: parseEventStart({ modes, startScreen: {} }), ...extra } } } as never)
  useAuthStore.setState({ deviceMode: 'event', boothName: 'Golden Hour Wedding Booth' } as never)
  useSessionStore.setState({ sessionMode: mode, sessionPublicId: 'demo-session', landingPageUrl: 'https://pixture.io/s/demo-session' } as never)
  useCameraStore.setState({ hasReceivedFirstFrame: true, isLiveView: true } as never)
}
function strip(shots: number, current: number): void {
  useSessionStore.setState({
    selectedTemplateId: 'tpl-strip', selectedTemplateThumbnailUrl: stripArt(0), templatePhotoSlots: SLOTS, templateCanvasWidth: TW, templateCanvasHeight: TH,
    totalSlots: 3, currentSlotIndex: current, capturedBlobs: Array.from({ length: shots }, (_, i) => blobOf(shot(i))), captureMode: 'composite'
  } as never)
}
/** Camera frames for pages that draw the raw JPEG frames themselves (Video). */
function jpegFrames(): void {
  const api = (window as unknown as { api: Record<string, unknown> }).api
  const buf = blobOf(shot(1)).arrayBuffer()
  const over: Record<string, unknown> = {
    onCameraFrame: (cb: (type: number, b: ArrayBuffer) => void) => { const t = setInterval(() => void buf.then((b) => cb(1, b.slice(0))), 150); return () => clearInterval(t) }
  }
  ;(window as unknown as { api: unknown }).api = new Proxy(api, { get: (t, p) => (typeof p === 'string' && p in over ? over[p] : (t as Record<string | symbol, unknown>)[p]) })
}

// --- a newspaper front page with a see-through photo hole (portrait) ------------------------------------------------------
const NW = 1080, NH = 1500, HOLE = { x: 90, y: 330, width: 900, height: 620 }
function newspaperArt(title: string): string {
  const c = document.createElement('canvas'); c.width = NW; c.height = NH
  const g = c.getContext('2d')!
  g.fillStyle = '#f3efe6'; g.fillRect(0, 0, NW, NH)
  g.fillStyle = '#1c1a17'; g.textAlign = 'center'
  g.font = 'bold 92px Georgia, serif'; g.fillText(title, NW / 2, 130)
  g.fillRect(60, 160, NW - 120, 6); g.fillRect(60, 260, NW - 120, 2)
  g.font = '28px Georgia, serif'; g.fillText('SATURDAY EDITION  ·  SUNNY SIDE MALL', NW / 2, 220)
  g.clearRect(HOLE.x, HOLE.y, HOLE.width, HOLE.height)
  g.font = 'bold 64px Georgia, serif'; g.fillText('Local Stars Spotted at the Mall', NW / 2, 1050)
  g.fillStyle = '#9b958a'
  for (let col = 0; col < 3; col++) for (let r = 0; r < 12; r++) g.fillRect(60 + col * 330, 1110 + r * 30, r % 5 === 4 ? 180 : 300, 12)
  return c.toDataURL('image/png')
}
function newspaper(): void {
  ;(window as unknown as { __SAMPLE: string }).__SAMPLE = shot(0)
  useAuthStore.setState({ deviceMode: 'kiosk' } as never)
  useNavigationStore.setState({ page: 'home' } as never)
  useCameraStore.setState({ hasReceivedFirstFrame: true, isLiveView: true } as never)
  const ls = useLayoutStore.getState()
  useLayoutStore.setState({
    layouts: { ...ls.layouts, Home: { canvas: { width: 1080, height: 1920 }, background: { kind: 'solid', color: '#181514' }, blocks: [] } },
    welcomeSettings: { ...ls.welcomeSettings, Home: { ...(ls.welcomeSettings.Home ?? {}), newspaper: true } }
  } as never)
  const tpl = (id: string, name: string) => ({ id, name, code: id, imageUrl: newspaperArt(name), categoryId: '', canvasWidth: NW, canvasHeight: NH,
    photoSlots: [{ id: 1, index: 0, ...HOLE }], slotsJson: JSON.stringify([{ index: 0, ...HOLE }]), layoutJson: null, allowedBoothIds: null, isNewspaper: true, mediaType: 'Newspaper' })
  useTemplateStore.setState({ templates: [tpl('np1', 'The Sunny Times'), tpl('np2', 'Mall Gazette'), tpl('np3', 'Weekend Post')], fetched: true } as never)
}

// --- pages -----------------------------------------------------------------------------------------------------------
const flow = (phase: string, countdownRemaining = 0) => {
  const noop = () => {}
  return { phase, countdownRemaining, reviewSecondsLeft: 0, error: null, lastCapturedUrl: null, liveviewReady: true, studioCompatibilityError: null,
    startCountdown: noop, shootNow: noop, retake: noop, willAutoStart: false, restart: noop, next: noop, endShoot: noop, finishPoolSession: noop,
    canvasRef: { current: null } } as never
}
function Mingle(): JSX.Element {
  const f = useRef(flow('countdown', 2))
  return <LayoutContainer><EventCaptureScreen flow={f.current} /></LayoutContainer>
}

export const setups: Record<string, () => void | Promise<void>> = {
  mingle: () => {
    event(['mingle'], 'mingle', { mingle: { shutter: true } })
    strip(1, 1)
    useNavigationStore.setState({ page: 'capture' } as never)
    useCaptureStateStore.setState({ phase: 'countdown', countdownRemaining: 2, countdownTotal: 3, sessionTimeRemaining: -1 } as never)
    ;(window as unknown as { __SAMPLE: string }).__SAMPLE = shot(2)
  },
  'pg-share': () => {
    event(['photobooth'], 'photobooth', { roaming: { shareSeconds: 8, autoPrint: true, overlayUrl: null, reviewSeconds: -1, template: null } })
  },
  'video-ready': () => {
    event(['video'], 'video', { captureMode: 'video', video: { ...useSettingsStore.getState().settings.capture.video, lengthSec: 10 } })
    useNavigationStore.setState({ page: 'video-capture' } as never)
    jpegFrames()
  },
  'video-share': async () => {
    event(['video'], 'video', { captureMode: 'video' })
    useNavigationStore.setState({ page: 'video-done' } as never)
    useSessionStore.setState({ livePhotoMp4Url: await clip() } as never)
  },
  newspaper
}

export const pages: Record<string, () => JSX.Element> = {
  mingle: Mingle,
  'pg-share': () => (
    <LayoutContainer>
      <EventShareScreen mode="photobooth" eventScreens={false} publicId="demo-group"
        gallery={{ compositePath: null, picture: stripArt(3), landingUrl: 'https://pixture.io/s/demo-group', uploaded: true }}
        canPrint showPrintButton maxPrints={2} onPrint={async () => true} onComplete={() => {}} />
    </LayoutContainer>
  ),
  'video-ready': () => <VideoCapturePage />,
  'video-share': () => <VideoDonePage />,
  newspaper: () => <LayoutContainer><NewspaperBackground /><NewspaperStartScreen onStart={() => {}} /></LayoutContainer>
}
