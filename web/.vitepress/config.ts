import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'en-US',
  title: '@untidy/thetvdb',
  description: 'fully-typed client for accessing the TheTVDB API',
  head: [['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }]],
  themeConfig: {
    logo: '/favicon.png',
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      {
        text: '0.0.7',
        items: [
          {
            text: 'Changelog',
            link: 'https://github.com/falsepopsky/thetvdb/blob/main/CHANGELOG.md',
          },
          {
            text: 'Contributing',
            link: 'https://github.com/falsepopsky/thetvdb/blob/main/.github/CONTRIBUTING.md',
          },
        ],
      },
    ],
    sidebar: [
      {
        text: 'Introduction',
        collapsed: false,
        items: [
          {
            text: 'Getting Started',
            link: '/guide/getting-started',
          },
          { text: 'About', link: '/guide/about' },
          { text: 'FAQ', link: '/guide/faq' },
        ],
      },
      {
        text: 'API',
        collapsed: false,
        items: [
          { text: 'Markdown Extensions', link: '/api/markdown-examples' },
          { text: 'API Examples', link: '/api/api-examples' },
        ],
      },
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/falsepopsky/thetvdb' }],
  },
});
