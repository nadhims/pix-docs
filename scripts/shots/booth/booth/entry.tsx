// "The Booth (hardware)" tutorials: the shared pages plus Printer Settings, the New roll popup, Admin with uploads
// waiting, and Camera Settings with Multi camera. Picked by location.hash. Everything shown is made up.
import '../fake-api'
import '@renderer/global.css'
import { createRoot } from 'react-dom/client'
import { useSettingsStore } from '@renderer/store/settings-store'
import { useAuthStore } from '@renderer/store/auth-store'
import { useCameraStore } from '@renderer/store/camera-store'
import { useAngleStore } from '@renderer/store/angle-store'
import { AdminPanelPage } from '@renderer/pages/admin/AdminPanelPage'
import { CameraSettingsPage } from '@renderer/pages/admin/CameraSettingsPage'
import { PrinterSettingsPage } from '@renderer/pages/admin/PrinterSettingsPage'
import { MenuPage } from '@renderer/pages/MenuPage'
import { NewRollModal } from '@renderer/components/PaperModals'

const hash = location.hash.slice(1)
const api = (window as unknown as { api: Record<string, Record<string, unknown>> }).api

// A made-up booth: never a real customer's name.
useAuthStore.setState({ boothId: '7f3c9a2e-5b1d-4c8e-9a70-2d6e1f4b8c33', boothName: 'Sunny Side Mall Kiosk 1', organizationId: 'b41c7e90-2f6a-4d13-8e55-9c0a7d3e1f26', isStarterTier: () => false } as never)

const opt = (labels: string[]) => labels.map((label, value) => ({ value, label }))
const prop = (id: string, label: string, labels: string[], at: number) => ({ id, label, value: at, valueLabel: labels[at], readonly: false, options: opt(labels) })
const canon = { id: 'Canon EOS 250D', name: 'Canon EOS 250D', cameraType: 'canon', connected: true, uid: 'canon-250d-1' }
const webcam = { id: 'cam-usb-1', name: 'USB Webcam', cameraType: 'webcam', connected: true, uid: 'webcam-1' }
useCameraStore.setState({
  cameras: hash === 'angles' ? [canon, webcam] : [canon],
  connectedCamera: 'Canon EOS 250D', connectedCameraUid: 'canon-250d-1', connectedCameraType: 'canon', isLiveView: true, bridgeStatus: 'connected',
  properties: [
    prop('iso', 'ISO', ['100', '200', '400', '800', '1600'], 0),
    prop('shutterSpeed', 'Shutter', ['1/60', '1/125', '1/160', '1/200'], 1),
    prop('aperture', 'Aperture', ['f/4', 'f/5.6', 'f/8', 'f/11'], 2),
    prop('whiteBalance', 'White balance', ['Auto', 'Daylight', 'Flash', 'Custom'], 2)
  ]
} as never)
if (hash === 'angles') useAngleStore.setState({ angles: [{ id: 'a-front', name: 'Front', imageUrl: null }, { id: 'a-high', name: 'High angle', imageUrl: null }] })

// Printer: a made-up DNP with a counted roll (546 of 700 left) and the Mac 2-inch cut.
const paper = { roll: { total: 700, media: '4x6', remaining: 546, at: new Date().toISOString() }, last: { total: 700, media: '4x6' }, outAt: null, remoteAt: null, printer: 'DNP_DS_RX1', driver: null, model: 'DNP DS-RX1' }
const print = api.print as Record<string, unknown>
const over = (o: Record<string, unknown>, k: string, v: unknown): void => { Object.defineProperty(o, k, { value: v }) }
// The fake api is a Proxy; wrap it so these calls answer with made-up data.
const printProxy = new Proxy(print, {
  get(t, k) {
    if (k === 'paperGet') return async () => paper
    if (k === 'getTwoInchCut') return async () => ({ supported: true, on: false })
    if (k === 'getPaperSizes') return async () => [
      { key: 'w288h432', name: '4x6', widthInches: 4, heightInches: 6, isDefault: true },
      { key: 'w432h576', name: '6x8', widthInches: 6, heightInches: 8, isDefault: false }
    ]
    return Reflect.get(t, k)
  }
})
// Admin: three sessions from today still waiting to upload (the venue line is down).
const t0 = Date.now()
const waiting = [0, 1, 2].flatMap((i) => [
  { id: `s${i}`, type: 'session-create', status: 'pending', createdUtc: new Date(t0 - (i + 1) * 9 * 60_000).toISOString(), lastError: null, correlationId: `c${i}` },
  { id: `f${i}`, type: 'composite-upload', status: 'pending', createdUtc: new Date(t0 - (i + 1) * 9 * 60_000).toISOString(), lastError: null, correlationId: `c${i}` }
])
const queue = api.offlineQueue as Record<string, unknown>
const queueProxy = new Proxy(queue, {
  get(t, k) {
    if (hash === 'offline' && k === 'getAllItems') return async () => waiting
    if (hash === 'offline' && k === 'getStatus') return async () => ({ pending: 6, processing: 0, failed: 0, deadLettered: 0, isProcessing: false, isOnline: false })
    if (hash === 'offline' && k === 'getStats') return async () => ({ pending: 6, failed: 0, completed: 0 })
    return Reflect.get(t, k)
  }
})
const rootProxy = new Proxy(api, { get: (t, k) => (k === 'print' ? printProxy : k === 'offlineQueue' ? queueProxy : Reflect.get(t, k)) })
over(window, 'api', rootProxy)

const pages: Record<string, () => JSX.Element> = {
  admin: () => <AdminPanelPage />,
  offline: () => <AdminPanelPage />,
  camera: () => <CameraSettingsPage />,
  angles: () => <CameraSettingsPage />,
  printer: () => <PrinterSettingsPage />,
  menu: () => <MenuPage />,
  newroll: () => <NewRollModal paper={paper as never} onDone={() => {}} onClose={() => {}} />
}
const Page = pages[hash] ?? pages.admin
useSettingsStore.getState().loadSettings().finally(() => {
  if (hash === 'angles') {
    const s = useSettingsStore.getState().settings
    useSettingsStore.setState({ settings: { ...s, camera: { ...s.camera, angleCameras: { 'a-front': { uid: 'canon-250d-1', cameraType: 'canon', name: 'Canon EOS 250D' }, 'a-high': { uid: 'webcam-1', cameraType: 'webcam', name: 'USB Webcam' } } } } } as never)
  }
  createRoot(document.getElementById('root')!).render(<Page />)
  ;(window as unknown as { __mounted: boolean }).__mounted = true
})
