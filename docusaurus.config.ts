import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Pix Docs by Pixture',
  tagline: 'Documentation for the Pix photobooth platform',
  favicon: 'img/favicon.ico',
  headTags: [
    {tagName: 'link', attributes: {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/img/favicon-32.png'}},
    {tagName: 'link', attributes: {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/img/favicon-16.png'}},
    {tagName: 'link', attributes: {rel: 'apple-touch-icon', sizes: '180x180', href: '/img/apple-touch-icon.png'}},
  ],

  future: {
    v4: true,
  },

  url: 'https://docs.pixture.io',
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

  plugins: [
    [
      'docusaurus-plugin-llms',
      {
        generateLLMsTxt: true,
        generateLLMsFullTxt: true,
        generateMarkdownFiles: true,
        excludeImports: true,
        removeDuplicateHeadings: true,
        title: 'Pixture Docs',
        description:
          'How to run a photo booth business on Pixture: the Pix Desktop App on the booth computer, the web dashboard, Pix Design, payments, events, plans and troubleshooting.',
        rootContent:
          'Pixture is photo booth software. The Pix Desktop App runs the booth (camera, printer, payment, sharing) and the web dashboard at https://pixture.io manages booths, designs, prices, payments and reports. Plans: Pix Starter (free, one computer, watermarked) and Pix Pro (Day Pass, monthly or yearly, per computer). Each page below is also available as plain markdown by adding .md to its URL.',
        includeOrder: [
          'intro.md',
          'getting-started/**',
          'tutorials/**',
          'dashboard/**',
          'desktop-app/**',
          'guides/**',
          'pricing/**',
          'reference/**',
        ],
        includeUnmatchedLast: true,
      },
    ],
  ],

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
    image: 'img/pixture-social-card.png',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      style: 'dark',
      logo: {
        alt: 'Pix',
        src: 'img/pix-logo-light.png',
        srcDark: 'img/pix-logo-dark.png',
        href: '/',
        style: {height: '28px'},
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          to: '/docs/tutorials/overview',
          label: 'Tutorials',
          position: 'left',
        },
        {
          to: '/releases',
          label: 'Release notes',
          position: 'left',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://pixture.io',
          label: 'Go to Pixture',
          position: 'right',
          className: 'navbar-site-link',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: ' ',
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
