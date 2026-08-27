import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      link: {type: 'doc', id: 'getting-started/overview'},
      items: [
        'getting-started/create-account',
        'getting-started/choose-plan',
        'getting-started/download-desktop-app',
        'getting-started/access-dashboard',
        'getting-started/your-first-session',
        'getting-started/video-walkthrough',
      ],
    },
    {
      type: 'category',
      label: 'Desktop App',
      link: {type: 'doc', id: 'desktop-app/overview'},
      items: [
        'desktop-app/installation',
        {
          type: 'category',
          label: 'Camera Setup',
          items: [
            'desktop-app/camera-setup/canon-eos',
            'desktop-app/camera-setup/webcam-fallback',
            'desktop-app/camera-setup/camera-settings',
          ],
        },
        'desktop-app/printer-setup',
        {
          type: 'category',
          label: 'Session Flow',
          link: {type: 'doc', id: 'desktop-app/session-flow/overview'},
          items: [
            'desktop-app/session-flow/home-screen',
            'desktop-app/session-flow/payment',
            'desktop-app/session-flow/template-selection',
            'desktop-app/session-flow/capture-modes',
            'desktop-app/session-flow/filters',
            'desktop-app/session-flow/sharing',
          ],
        },
        'desktop-app/offline-mode',
        'desktop-app/hardware-payments',
        'desktop-app/admin-panel',
        'desktop-app/software-updates',
        'desktop-app/troubleshooting',
      ],
    },
    {
      type: 'category',
      label: 'Dashboard',
      link: {type: 'doc', id: 'dashboard/overview'},
      items: [
        'dashboard/dashboard-home',
        'dashboard/events',
        'dashboard/booth-management',
        {
          type: 'category',
          label: 'Pix Design',
          link: {type: 'doc', id: 'dashboard/pix-design/overview'},
          items: [
            'dashboard/pix-design/creating-templates',
            'dashboard/pix-design/folders-and-collections',
            'dashboard/pix-design/assigning-templates',
        'dashboard/pix-design/ui-editor',
          ],
        },
        'dashboard/marketing-studio',
        'dashboard/gallery',
        'dashboard/health',
        'dashboard/transactions',
        'dashboard/billing',
        'dashboard/vouchers',
        'dashboard/device-management',
        'dashboard/booth-pricing',
        'dashboard/settings',
      ],
    },
    {
      type: 'category',
      label: 'Pricing',
      items: [
        'pricing/plans',
        'pricing/feature-comparison',
        'pricing/billing-faq',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/booth-operations-checklist',
        'guides/multi-booth-setup',
        'guides/payment-gateway-setup',
        'guides/branding-your-booth',
        'guides/shared-printer',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        'reference/system-requirements',
        'reference/supported-cameras',
        'reference/supported-printers',
        'reference/glossary',
      ],
    },
  ],
};

export default sidebars;
