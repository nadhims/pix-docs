// Booth screens for the 2026-11-24 re-shoot (booth 1.2.50), picked by location.hash. Pages live in pages-pay.tsx,
// pages-cap.tsx and pages-ev.tsx. Everything shown is made up: a booth called "Sunny Side Mall Kiosk 1", drawn sample shots, no real person.
import '../fake-api'
import '@renderer/global.css'
import { createRoot } from 'react-dom/client'
import { useSettingsStore } from '@renderer/store/settings-store'
import { useAuthStore } from '@renderer/store/auth-store'
import * as pay from './pages-pay'
import * as cap from './pages-cap'
import * as ev from './pages-ev'

const name = location.hash.slice(1)
useAuthStore.setState({
  boothId: '7f3c9a2e-5b1d-4c8e-9a70-2d6e1f4b8c33', boothName: 'Sunny Side Mall Kiosk 1',
  organizationId: 'b41c7e90-2f6a-4d13-8e55-9c0a7d3e1f26', deviceId: 'd2c4e6f8-1a3b-4c5d-8e9f-0a1b2c3d4e5f'
} as never)
const pages: Record<string, () => JSX.Element> = { ...pay.pages, ...cap.pages, ...ev.pages }
const setups: Record<string, () => void | Promise<void>> = { ...pay.setups, ...cap.setups, ...ev.setups }
const Page = pages[name] ?? (() => <div>no page {name}</div>)
useSettingsStore.getState().loadSettings().finally(async () => {
  await setups[name]?.() // after loadSettings, or the loaded settings overwrite what a page set
  createRoot(document.getElementById('root')!).render(<Page />)
  ;(window as unknown as { __mounted: boolean }).__mounted = true
})
