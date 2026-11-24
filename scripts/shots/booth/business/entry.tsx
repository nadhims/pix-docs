// Booth screens for the Running the Business tutorials, picked by location.hash: #eventpass
import '../fake-api'
import '@renderer/global.css'
import { createRoot } from 'react-dom/client'
import { useSettingsStore } from '@renderer/store/settings-store'
import { useAuthStore } from '@renderer/store/auth-store'
import { EventStartLicence } from '@renderer/components/EventStartLicence'

// A made-up booth and event: never a real customer's name.
useAuthStore.setState({ boothId: '7f3c9a2e-5b1d-4c8e-9a70-2d6e1f4b8c33', boothName: 'Golden Hour Booth 2', organizationId: 'b41c7e90-2f6a-4d13-8e55-9c0a7d3e1f26', deviceId: 'c0ffee00-1111-4222-8333-444455556666' } as never)
const pages: Record<string, () => JSX.Element> = {
  eventpass: () => <EventStartLicence licence={{ eventId: 'e1', eventName: 'Rina & Dimas Wedding', state: 'waiting' as never, poolPasses: 3 }} onClose={() => {}} />
}
const Page = pages[location.hash.slice(1)] ?? pages.eventpass
useSettingsStore.getState().loadSettings().finally(() => {
  createRoot(document.getElementById('root')!).render(<Page />)
  ;(window as unknown as { __mounted: boolean }).__mounted = true
})
