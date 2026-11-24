// Booth screens for the Events and Self-Service tutorials, picked by location.hash:
// #evpass (Use an Event Pass for today?), #queue-get (Scan to get a number), #queue-call (A3, come to this booth), #consent
import '../fake-api'
import '@renderer/global.css'
import { createRoot } from 'react-dom/client'
import { useSettingsStore } from '@renderer/store/settings-store'
import { useAuthStore } from '@renderer/store/auth-store'
import { useQueueStore } from '@renderer/store/queue-store'
import { EventStartLicence } from '@renderer/components/EventStartLicence'
import { QueueOverlay } from '@renderer/components/QueueOverlay'
import { ConsentModal } from '@renderer/components/ConsentModal'

// A made-up booth and event: never a real customer's name.
useAuthStore.setState({
  boothId: '7f3c9a2e-5b1d-4c8e-9a70-2d6e1f4b8c33', boothName: 'Sunny Side Mall Kiosk 1',
  organizationId: 'b41c7e90-2f6a-4d13-8e55-9c0a7d3e1f26', deviceId: 'd2c4e6f8-1a3b-4c5d-8e9f-0a1b2c3d4e5f', deviceMode: 'kiosk'
} as never)

const call = { ticketId: 't-a3', number: 'A3', expiresUtc: new Date(Date.now() + 120000).toISOString(), sessionsLeft: 1 }
const queue = (calling: typeof call | null) =>
  useQueueStore.setState({
    mode: 'hybrid',
    state: { mode: 'hybrid', open: true, waiting: 4, calling, gated: true, opensAtLocal: null, joinUrl: 'https://pixture.io/q/SUNNY1/join?b=A' }
  } as never)

// A plain start-screen stand-in behind the queue overlay (the real one is the operator's own design).
const Stage = ({ children }: { children: JSX.Element }) => (
  <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden', background: 'linear-gradient(160deg,#F5E6DA,#E9B9A0)' }}>
    {children}
  </div>
)

const pages: Record<string, () => JSX.Element> = {
  evpass: () => (
    <EventStartLicence licence={{ eventId: 'e1', eventName: 'Garden Wedding', state: 'waiting', poolPasses: 3 } as never} onClose={() => {}} />
  ),
  'queue-get': () => { queue(null); return <Stage><QueueOverlay /></Stage> },
  'queue-call': () => { queue(call); return <Stage><QueueOverlay /></Stage> },
  consent: () => <ConsentModal boothName="Sunny Side Booths" language="en" onAllow={() => {}} onDecline={() => {}} />
}
const Page = pages[location.hash.slice(1)] ?? pages.consent
useSettingsStore.getState().loadSettings().finally(() => {
  createRoot(document.getElementById('root')!).render(<Page />)
  ;(window as unknown as { __mounted: boolean }).__mounted = true
})
