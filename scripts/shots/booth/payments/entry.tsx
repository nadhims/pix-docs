// Payments tutorials: mounts one booth page, picked by location.hash: #hardware (the operator menu's Hardware API page).
import '../fake-api'
import '@renderer/global.css'
import { createRoot } from 'react-dom/client'
import { useSettingsStore } from '@renderer/store/settings-store'
import { useAuthStore } from '@renderer/store/auth-store'
import { ApiSettingsPage } from '@renderer/pages/admin/ApiSettingsPage'

// A made-up booth: never a real customer's name.
useAuthStore.setState({ boothId: '7f3c9a2e-5b1d-4c8e-9a70-2d6e1f4b8c33', boothName: 'Sunny Side Mall Kiosk 1', organizationId: 'b41c7e90-2f6a-4d13-8e55-9c0a7d3e1f26' } as never)
const pages: Record<string, () => JSX.Element> = {
  hardware: () => <ApiSettingsPage />
}
const Page = pages[location.hash.slice(1)] ?? pages.hardware
useSettingsStore.getState().loadSettings().finally(() => {
  createRoot(document.getElementById('root')!).render(<Page />)
  ;(window as unknown as { __mounted: boolean }).__mounted = true
})
