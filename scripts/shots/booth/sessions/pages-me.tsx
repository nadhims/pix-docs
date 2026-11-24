// Booth pages for the Share Page and Email My Photos tutorials: the Sharing screen's Share buttons row and the Email popup.
import { useAuthStore } from '@renderer/store/auth-store'
import { ShareButtonsBlock } from '@renderer/layout/blocks/ShareButtonsBlock'
import { GuestEmailModal } from '@renderer/components/GuestEmailModal'
import { VirtualKeyboard } from '@renderer/components/virtual-keyboard/VirtualKeyboard'

// A Pix Pro booth where Email my photos is on (as the API's heartbeat says on a live Pix Pro booth).
function proWithEmail(): void {
  useAuthStore.setState({
    guestEmail: true, guestEmailNewsTicked: true,
    tierCapabilities: { tierName: 'Pix Pro', isFreeTier: false, canUseSoftFiles: true, canEnableSoftFiles: true, softFilesWatermark: false, canUseAi: false, aiCreditBalance: 0, aiCreditsPerImage: 0 }
  } as never)
}

const dark = { width: '100vw', height: '100vh', background: '#181514', display: 'flex', alignItems: 'center', justifyContent: 'center' } as const

export const pages: Record<string, () => JSX.Element> = {
  'm-share-buttons': () => (
    <div style={dark}>
      <div style={{ width: 900, height: 260 }}>
        <ShareButtonsBlock block={{ id: 'sb', type: 'shareButtons', x: 0, y: 0, width: 900, height: 260, shareButtons: { qr: true, nearby: false, print: true, labels: true, discSize: 120 } } as never} />
      </div>
    </div>
  ),
  'm-email': () => (
    <div style={dark}>
      <GuestEmailModal publicId="demo-session" language="en" onClose={() => {}} />
      <VirtualKeyboard />
    </div>
  )
}

export const setups: Record<string, () => void> = {
  'm-share-buttons': proWithEmail,
  'm-email': proWithEmail
}
