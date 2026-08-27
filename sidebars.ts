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
        'desktop-app/admin-panel',
        'desktop-app/software-updates',
        'desktop-app/troubleshooting',
      ],
    },
    {
      type: 'category',
      label: 'iOS Dashboard',
      link: {type: 'doc', id: 'ios-dashboard/overview'},
      items: [
        'ios-dashboard/dashboard-home',
        'ios-dashboard/booth-management',
        {
          type: 'category',
          label: 'Pix Studio',
          link: {type: 'doc', id: 'ios-dashboard/pix-studio/overview'},
          items: [
            'ios-dashboard/pix-studio/creating-templates',
            'ios-dashboard/pix-studio/folders-and-collections',
            'ios-dashboard/pix-studio/assigning-templates',
          ],
        },
        'ios-dashboard/gallery',
        'ios-dashboard/transactions',
        'ios-dashboard/billing',
        'ios-dashboard/vouchers',
        'ios-dashboard/device-management',
        'ios-dashboard/booth-pricing',
        'ios-dashboard/settings',
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
