// Booth pages for the Notes and Video/360 tutorials (fork B). Self-contained: `setups[page]` sets the made-up state
// a page needs (run after loadSettings, before mounting); `pages[page]` renders it.
import { useSettingsStore } from '@renderer/store/settings-store'
import { useSessionStore } from '@renderer/store/session-store'
import { useScratchStore } from '@renderer/store/scratch-store'
import { parseEventStart } from '@shared/event-start'
import { CaptureSettingsPage } from '@renderer/pages/admin/CaptureSettingsPage'
import { EventNoteScreen } from '@renderer/event-ui/EventNoteScreen'
import { LayoutContainer } from '@renderer/layout/LayoutContainer'

const setCapture = (extra: Record<string, unknown>): void => {
  const s = useSettingsStore.getState().settings as unknown as Record<string, unknown>
  useSettingsStore.setState({ settings: { ...s, capture: { ...(s.capture as object), ...extra } } } as never)
}

// A made-up event: never a real customer's name.
const EVENT = { eventId: 'e2b7c4d1-9a3f-4e6b-8c21-5f0d7a9b3e44', eventName: 'Golden Hour Garden Party' }

// A pen line in note pixels (a soft wave), for a note that already has some drawing on it.
const wave = (y: number, color: string) => ({
  color, eraser: false, brush: 'pen' as const,
  points: Array.from({ length: 40 }, (_, i) => ({ x: 260 + i * 46, y: y + Math.sin(i / 3) * 60, w: 14 }))
})

export const setups: Record<string, () => void> = {
  'b-capture-settings': () => setCapture({ ...EVENT, captureMode: 'video' }),
  'b-note': () => {
    setCapture({
      ...EVENT, captureMode: 'photo',
      eventStart: parseEventStart({ modes: ['photobooth', 'scratch'], startScreen: { title: 'Golden Hour Garden Party' }, timers: { noteSeconds: 90 } })
    })
    useSessionStore.setState({ sessionMode: 'scratch', templateLayout: { blocks: [] }, templateCanvasWidth: 2400, templateCanvasHeight: 1600 } as never)
    // The note after the guest drew a line and typed a text; the text is picked, so its Remove and Turn buttons show.
    setTimeout(() => useScratchStore.setState({
      strokes: [wave(1150, '#E5484D'), { id: 1, text: 'Happy anniversary!', x: 1200, y: 600, size: 170, color: '#F5C400', font: 'Caveat', angle: -0.12 }],
      text: true, selected: 1, font: 'Caveat'
    } as never), 300)
  }
}

export const pages: Record<string, () => JSX.Element> = {
  'b-capture-settings': () => <CaptureSettingsPage />,
  'b-note': () => <LayoutContainer><EventNoteScreen /></LayoutContainer>
}
