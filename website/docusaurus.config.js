// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'BBjGridExWidget',
  tagline: 'A Feature-rich grid component for BBj Based on HTML and JavaScript',
  url: 'https://bbj-plugins.github.io',
  baseUrl: '/BBjGridExWidget/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'BBj-Plugins', // Usually your GitHub org/user name.
  projectName: 'BBjGridExWidget', // Usually your repo name.
  deploymentBranch: 'website',
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/BBj-Plugins/BBjGridExWidget/tree/dev/website',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/BBj-Plugins/BBjGridExWidget/tree/dev/website',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'BBjGridExWidget',
        logo: {
          alt: 'BBjGridExWidget Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'introduction/overview',
            position: 'left',
            label: 'Documentation',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/BBj-Plugins/BBjGridExWidget/issues',
            label: 'Report Issue',
            position: 'right',
          },
          {
            href: 'https://bbj-plugins.github.io/BBjGridExWidget/javadoc/',
            label: 'Javadocs',
            position: 'right',
          },
          {
            href: 'https://github.com/BBj-Plugins/BBjGridExWidget',
            position: 'right',
            className: "header-github-link",
          },
        ],
      },
      footer: {
        // style: 'dark',
        links: [
          {
            title: 'Learn',
            items: [
              {
                label: 'Introduction',
                to: '/docs/introduction/overview',
              },
              {
                label: 'Getting started',
                to: '/docs/introduction/getting-started',
              },           
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Github Issues & Feature Requests',
                href: 'https://github.com/BBj-Plugins/BBjGridExWidget/issues',
              },
              {
                label: 'BBj Developers',
                href: 'https://groups.google.com/u/1/g/bbj-developer?hl=en',
              },
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/bbj',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Change Log',
                href: 'https://github.com/BBj-Plugins/BBjGridExWidget/blob/dev/CHANGELOG.md',
              },
              {
                label: 'License',
                href: 'https://github.com/BBj-Plugins/BBjGridExWidget/blob/dev/LICENSE',
              },              
            ],
          },
        ],
        copyright: `<br>Copyright BASIS International Ltd © ${new Date().getFullYear()} BBjGridExWidget.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['bbj'],
      },
    }),

  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      },
    ],
  ],
};

module.exports = config;
