// Booth pages for the Studio / Review / Newspaper tutorials (part A). Page names start with "a-".
// Everything shown is made up: a drawn strip template and drawn sample shots (no real person, no customer photo).
import { useSessionStore } from '@renderer/store/session-store'
import { useTemplateStore } from '@renderer/store/template-store'
import { useNavigationStore } from '@renderer/store/navigation-store'
import { usePoolAssignmentStore } from '@renderer/store/pool-assignment-store'
import { PoolAssignmentPage } from '@renderer/pages/PoolAssignmentPage'

// A made-up 2x6 strip: cream paper, a title, three see-through photo holes.
const W = 600, H = 1800
const SLOTS = [0, 1, 2].map((i) => ({ index: i, x: 40, y: 140 + i * 500, width: 520, height: 460 }))
function stripArt(): string {
  const c = document.createElement('canvas'); c.width = W; c.height = H
  const g = c.getContext('2d')!
  g.fillStyle = '#f4ecdf'; g.fillRect(0, 0, W, H)
  for (const s of SLOTS) g.clearRect(s.x, s.y, s.width, s.height)
  g.fillStyle = '#2b2522'; g.font = 'bold 56px Georgia, serif'; g.textAlign = 'center'
  g.fillText('Sunny Side', W / 2, 95)
  g.font = '34px Georgia, serif'; g.fillText('Studio Night', W / 2, 1700)
  return c.toDataURL('image/png')
}

// A sample shot: a soft backdrop and a simple drawn figure (head and shoulders), one colour per shot.
const TONES = [['#e7c9a9', '#c0623f'], ['#cfe0e8', '#3d6f8e'], ['#efe0b8', '#9a7b2f'], ['#e3d3ea', '#6d4d86'], ['#d6e7d3', '#4f7d4a'], ['#f0d0d0', '#a34848']]
function shot(i: number): string {
  const c = document.createElement('canvas'); c.width = 960; c.height = 720
  const g = c.getContext('2d')!
  const [bg, fg] = TONES[i % TONES.length]
  const grad = g.createLinearGradient(0, 0, 0, 720); grad.addColorStop(0, bg); grad.addColorStop(1, '#ffffff')
  g.fillStyle = grad; g.fillRect(0, 0, 960, 720)
  g.fillStyle = fg
  const cx = 300 + (i % 3) * 180
  g.beginPath(); g.arc(cx, 300, 110, 0, Math.PI * 2); g.fill()
  g.beginPath(); g.ellipse(cx, 720, 230, 220, 0, Math.PI, 0); g.fill()
  return c.toDataURL('image/jpeg', 0.9)
}
const blobOf = (url: string): Blob => {
  const [head, b64] = url.split(','); const bin = atob(b64); const u = new Uint8Array(bin.length)
  for (let i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i)
  return new Blob([u], { type: head.slice(5, head.indexOf(';')) })
}

export const setups: Record<string, () => void> = {
  'a-pool': () => {
    const urls = [0, 1, 2, 3, 4, 5].map(shot)
    useTemplateStore.setState({
      templates: [{ id: 'tpl-studio-strip', name: 'Studio Night', code: 'SN', imageUrl: stripArt(), categoryId: '', canvasWidth: W, canvasHeight: H,
        photoSlots: SLOTS.map((s) => ({ id: s.index + 1, ...s })), slotsJson: JSON.stringify(SLOTS), layoutJson: null, allowedBoothIds: null }]
    } as never)
    useSessionStore.setState({
      selectedTemplateId: 'tpl-studio-strip', totalSlots: 3,
      pooledBlobs: urls.map(blobOf), pooledBlobUrls: urls, pooledShotIds: urls.map((_, i) => i), nextPoolShotId: urls.length,
      slotAssignments: [null, null, null]
    } as never)
    usePoolAssignmentStore.setState({ selectedSlotIndex: 0 } as never)
    useNavigationStore.setState({ page: 'pool-assignment' } as never)
  }
}

export const pages: Record<string, () => JSX.Element> = {
  'a-pool': () => <PoolAssignmentPage />
}
