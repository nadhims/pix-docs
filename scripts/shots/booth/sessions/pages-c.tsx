// Booth pages for the Photographer tutorial: the Photographer screen with a DSLR (no live view, the template large,
// "Photo 2 of 3", Start over) and its Check it (Retake / Use photo). A made-up wedding strip and a made-up photo, no people.
import { useRef } from 'react'
import { useSettingsStore } from '@renderer/store/settings-store'
import { LayoutContainer } from '@renderer/layout/LayoutContainer'
import { RoamingScreen } from '@renderer/event-ui/RoamingScreen'
import shot from './c-shot.jpg'
import strip from './c-strip.svg'

const slots = [40, 460, 880].map((y, index) => ({ index, x: 40, y, width: 520, height: 380 }))
const template = { id: 9101, name: 'Rina & Dimas Strip', canvasWidth: 600, canvasHeight: 1800, imageUrl: strip, slotsJson: JSON.stringify(slots), photoSlots: slots, layoutJson: null }
const roaming = { shareSeconds: 8, autoPrint: true, overlayUrl: null, reviewSeconds: -1, template }

const bytes = (dataUrl: string): ArrayBuffer => Uint8Array.from(atob(dataUrl.slice(dataUrl.indexOf(',') + 1)), (c) => c.charCodeAt(0)).buffer

// One photo already kept (the draft on disk), so the screen reads "Photo 2 of 3" with slot 1 filled; `checkIt` also
// sends a camera-shutter photo, so Check it opens on it.
function photographer(checkIt: boolean): () => void {
  return () => {
    const api = (window as unknown as { api: Record<string, unknown> }).api
    const draft = (): unknown => ({ eventId: String(useSettingsStore.getState().settings.capture.eventId), templateId: String(template.id), paths: ['/draft/1.jpg'] })
    const over: Record<string, unknown> = {
      dataCache: { read: async () => draft(), write: async () => undefined },
      offlineQueue: { readComposite: async () => shot, onItemStatusChanged: () => () => {}, saveFile: async () => ({ filePath: '/draft/2.jpg' }) },
      onCameraExternalCapture: (cb: (p: { buffer: ArrayBuffer }) => void) => {
        if (checkIt) setTimeout(() => cb({ buffer: bytes(shot) }), 400)
        return () => {}
      }
    }
    ;(window as unknown as { api: unknown }).api = new Proxy(api, { get: (t, p) => (typeof p === 'string' && p in over ? over[p] : (t as Record<string | symbol, unknown>)[p]) })
  }
}

function Photographer(): JSX.Element {
  const shootRef = useRef<(() => void) | null>(null)
  return (
    <LayoutContainer>
      <div style={{ position: 'absolute', inset: 0, background: '#181514' }} />
      <RoamingScreen roaming={roaming as never} start={null} cameraMode="dslr" liveView={null} active cameraReady canShoot={() => true}
        shootRef={shootRef} onWake={() => {}} onLock={() => {}} />
    </LayoutContainer>
  )
}

export const pages: Record<string, () => JSX.Element> = { 'c-photographer': Photographer, 'c-check-it': Photographer }
export const setups: Record<string, () => void> = { 'c-photographer': photographer(false), 'c-check-it': photographer(true) }
