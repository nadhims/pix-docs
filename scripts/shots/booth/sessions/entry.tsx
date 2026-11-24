// Mounts one Photo Sessions and Sharing booth page, picked by location.hash. Pages live in pages-a/b/c/me.tsx
// (a-: Studio, b-: Notes and Video, c-: Photographer, m-: Share page and Email).
import '../fake-api'
import '@renderer/global.css'
import { createRoot } from 'react-dom/client'
import { useSettingsStore } from '@renderer/store/settings-store'
import { useAuthStore } from '@renderer/store/auth-store'
import * as a from './pages-a'
import * as b from './pages-b'
import * as c from './pages-c'
import * as me from './pages-me'

const name = location.hash.slice(1)
// A made-up booth: never a real customer's name.
useAuthStore.setState({ boothId: '7f3c9a2e-5b1d-4c8e-9a70-2d6e1f4b8c33', boothName: name.startsWith('c-') ? 'Golden Hour Wedding Booth' : 'Sunny Side Mall Kiosk 1', organizationId: 'b41c7e90-2f6a-4d13-8e55-9c0a7d3e1f26' } as never)
const pages = { ...a.pages, ...b.pages, ...c.pages, ...me.pages }
const early = { ...a.setups, ...c.setups, ...me.setups }
early[name]?.()
const Page = pages[name] ?? (() => <div>no page {name}</div>)
useSettingsStore.getState().loadSettings().finally(() => {
  b.setups[name]?.() // b's pages set settings: after loadSettings, or the loaded settings overwrite them
  createRoot(document.getElementById('root')!).render(<Page />)
  ;(window as unknown as { __mounted: boolean }).__mounted = true
})
