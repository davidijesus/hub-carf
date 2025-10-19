import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Hub CARF',
  tagline: 'Documentação oficial',
  favicon: 'img/favicon.ico',

  // GitHub Pages
  url: 'https://davidijesus.github.io',
  baseUrl: '/hub-carf/',
  organizationName: 'davidijesus',
  projectName: 'hub-carf',
  trailingSlash: false,

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          editUrl: 'https://github.com/davidijesus/hub-carf/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/davidijesus/hub-carf/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Hub CARF',
      logo: { alt: 'Logo', src: 'img/logo.svg' },
      items: [
        { to: '/docs/intro', label: 'Docs', position: 'left' },
        { to: '/blog', label: 'Blog', position: 'left' },
        { href: 'https://github.com/davidijesus/hub-carf', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `© ${new Date().getFullYear()} Hub CARF.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
