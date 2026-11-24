// Mounts one booth page, picked by location.hash: #admin #camera #menu #pin
import './fake-api'
import '@renderer/global.css'
import { createRoot } from 'react-dom/client'
import { useSettingsStore } from '@renderer/store/settings-store'
import { useAuthStore } from '@renderer/store/auth-store'
import { AdminPanelPage } from '@renderer/pages/admin/AdminPanelPage'
import { CameraSettingsPage } from '@renderer/pages/admin/CameraSettingsPage'
import { MenuPage } from '@renderer/pages/MenuPage'
import { PinModal } from '@renderer/components/PinModal'
import { useCameraStore } from '@renderer/store/camera-store'

// A made-up booth: never a real customer's name.
useAuthStore.setState({ boothId: '7f3c9a2e-5b1d-4c8e-9a70-2d6e1f4b8c33', boothName: 'Sunny Side Mall Kiosk 1', organizationId: 'b41c7e90-2f6a-4d13-8e55-9c0a7d3e1f26' } as never)
// A made-up Canon on the cable, so Camera Settings shows its Canon controls (EXTERNAL FLASH among them).
const opt = (labels: string[]) => labels.map((label, value) => ({ value, label }))
const prop = (id: string, label: string, labels: string[], at: number) => ({ id, label, value: at, valueLabel: labels[at], readonly: false, options: opt(labels) })
{
  useCameraStore.setState({
    cameras: [{ id: 'Canon EOS 250D', name: 'Canon EOS 250D', cameraType: 'canon', connected: true, uid: 'canon-250d-1' }],
    connectedCamera: 'Canon EOS 250D', connectedCameraUid: 'canon-250d-1', connectedCameraType: 'canon', isLiveView: true, bridgeStatus: 'connected',
    properties: [
      prop('iso', 'ISO', ['100', '200', '400', '800', '1600'], 0),
      prop('shutterSpeed', 'Shutter', ['1/60', '1/125', '1/160', '1/200'], 1),
      prop('aperture', 'Aperture', ['f/4', 'f/5.6', 'f/8', 'f/11'], 2),
      prop('whiteBalance', 'White balance', ['Auto', 'Daylight', 'Flash', 'Custom'], 2)
    ]
  } as never)
}
const pages: Record<string, () => JSX.Element> = {
  admin: () => <AdminPanelPage />,
  camera: () => <CameraSettingsPage />,
  menu: () => <MenuPage />,
  pin: () => <PinModal maxDigits={8} growDots verifyPin={async () => true} onVerified={() => {}} onCancel={() => {}} />
}
const Page = pages[location.hash.slice(1)] ?? pages.admin
useSettingsStore.getState().loadSettings().finally(() => {
  createRoot(document.getElementById('root')!).render(<Page />)
  ;(window as unknown as { __mounted: boolean }).__mounted = true
})
