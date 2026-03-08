import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Pix Docs',
  tagline: 'Documentation for Pix Photobooth',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://docs.pixapp.id',
  baseUrl: '/',

  organizationName: 'nadhims',
  projectName: 'pix-docs',

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
      onBrokenMarkdownImages: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'id'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      id: {
        label: 'Bahasa Indonesia',
      },
    },
  },

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['en'],
        indexBlog: false,
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/nadhims/pix-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/pix-social-card.png',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Pix Docs',
      logo: {
        alt: 'Pix Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://pixapp.id',
          label: 'pixapp.id',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/getting-started/overview',
            },
            {
              label: 'Desktop App',
              to: '/docs/desktop-app/overview',
            },
            {
              label: 'iOS Dashboard',
              to: '/docs/ios-dashboard/overview',
            },
          ],
        },
        {
          title: 'Product',
          items: [
            {
              label: 'Pix Website',
              href: 'https://pixapp.id',
            },
            {
              label: 'Download',
              href: 'https://pixapp.id/download',
            },
            {
              label: 'Pricing',
              to: '/docs/pricing/plans',
            },
          ],
        },
        {
          title: 'Support',
          items: [
            {
              label: 'Troubleshooting',
              to: '/docs/desktop-app/troubleshooting',
            },
            {
              label: 'System Requirements',
              to: '/docs/reference/system-requirements',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Pix. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
