// A fake `window.api` (the booth app's bridge to Electron) so booth pages render in a plain browser.
// Every unknown call resolves to undefined and every `on...` listener returns an unsubscribe function,
// so pages render their idle state. Desktop has NO capabilities object (src/renderer/utils/capabilities.ts).
import { defaultSettings } from '@shared/settings-schema'

const settings = structuredClone(defaultSettings) as Record<string, unknown>
;(settings.printer as Record<string, unknown>).printerName = 'DNP_DS_RX1'

// No network from a docs render: never reach the live Pixture API (or R2). /healthz answers here so the
// menu reads 'API online'; everything else is a 404.
window.fetch = async (input: RequestInfo | URL): Promise<Response> =>
  String(input instanceof Request ? input.url : input).endsWith('/healthz') ? new Response('ok', { status: 200 }) : new Response('', { status: 404 })
const overrides: Record<string, unknown> = {
  'settings.getAll': async () => settings,
  'settings.get': async (k: string) => k.split('.').reduce<unknown>((o, p) => (o as Record<string, unknown> | undefined)?.[p], settings),
  'system.getPlatform': async () => 'darwin',
  'system.getVersion': async () => '1.2.49',
  'system.getAppVersion': async () => '1.2.49',
  'print.listPrinters': async () => [{ name: 'DNP_DS_RX1', displayName: 'DNP DS-RX1', isDefault: true, status: 0 }],
  'offlineQueue.getStats': async () => ({ pending: 0, failed: 0, completed: 0 }),
  // Made-up storage numbers for the Admin page.
  'offlineQueue.getCacheStats': async () => ({ fileCount: 42, totalSizeBytes: 380 * 1024 ** 2, availableDiskBytes: 120 * 1024 ** 3 }),
  'offlineQueue.getStatus': async () => ({ pending: 0, processing: 0, failed: 0, deadLettered: 0, isProcessing: false, isOnline: true }),
  'system.getGpuAccelerated': async () => 'auto'
}
// Live view: a real <video> fed from a sample picture (window.__SAMPLE, a data URL; a soft studio backdrop by default),
// plus a steady 'live view frame arrived' signal so pages draw it. Frame type 1 = live view (src/renderer/types/camera.ts).
let video: HTMLVideoElement | null = null
function cameraVideo(): HTMLVideoElement {
  if (video) return video
  const c = document.createElement('canvas'); c.width = 1280; c.height = 853
  const g = c.getContext('2d')!
  const draw = (img?: HTMLImageElement): void => {
    if (img) { g.drawImage(img, 0, 0, c.width, c.height); return }
    const grad = g.createLinearGradient(0, 0, 0, c.height); grad.addColorStop(0, '#e9e4dc'); grad.addColorStop(1, '#cfc6b8')
    g.fillStyle = grad; g.fillRect(0, 0, c.width, c.height)
  }
  draw()
  const sample = (window as unknown as { __SAMPLE?: string }).__SAMPLE
  if (sample) { const img = new Image(); img.onload = () => draw(img); img.src = sample }
  video = document.createElement('video'); video.muted = true; video.playsInline = true
  video.srcObject = c.captureStream(15); void video.play()
  setInterval(() => draw(sampleImg()), 200)
  return video
}
let _img: HTMLImageElement | undefined
function sampleImg(): HTMLImageElement | undefined {
  const s = (window as unknown as { __SAMPLE?: string }).__SAMPLE
  if (!s) return undefined
  if (!_img) { _img = new Image(); _img.src = s }
  return _img.complete ? _img : undefined
}
overrides['getCameraVideo'] = () => cameraVideo()
overrides['onCameraFrame'] = (cb: (type: number) => void) => { const t = setInterval(() => cb(1), 100); return () => clearInterval(t) }
const NOT_THERE = new Set(['capabilities'])

function node(path: string): unknown {
  const fn = (...args: unknown[]): unknown => {
    const o = overrides[path] as ((...a: unknown[]) => unknown) | undefined
    if (o) return o(...args)
    const last = path.split('.').pop() ?? ''
    if (/^on[A-Z]/.test(last)) return () => {}
    if (/^(getAll|list|get[A-Z][a-z]*s$|get[A-Za-z]*Sessions)/.test(last)) return Promise.resolve([])  // list-shaped calls
    return Promise.resolve(undefined)
  }
  return new Proxy(fn, {
    get(_t, prop) {
      if (typeof prop !== 'string' || prop === 'then') return undefined
      if (NOT_THERE.has(prop) && path === '') return undefined
      if (prop === 'platform' && path === '') return 'darwin'
      return node(path ? `${path}.${prop}` : prop)
    }
  })
}
;(window as unknown as { api: unknown }).api = node('')
// No camera feed here: the live view's frame callback never fires instead of crashing.
const vp = HTMLVideoElement.prototype as unknown as Record<string, unknown>
if (!vp.requestVideoFrameCallback) { vp.requestVideoFrameCallback = () => 0; vp.cancelVideoFrameCallback = () => {} }
;(window as unknown as { electron: unknown }).electron = node('')
