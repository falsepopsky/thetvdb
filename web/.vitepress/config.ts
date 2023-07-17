import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'en-US',
  title: '@untidy/thetvdb',
  description: 'fully-typed client for accessing the TheTVDB API',
  head: [['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }]],
  cleanUrls: true,
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
        text: 'Guide',
        collapsed: false,
        items: [
          {
            text: 'Getting Started',
            link: '/guide/getting-started',
          },
          { text: 'Supported Endpoints', link: '/guide/supported-endpoints' },
          { text: 'FAQ', link: '/guide/faq' },
        ],
      },
      {
        text: 'API',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/api/index' },
          { text: 'TheTVDB', link: '/api/thetvdb' },
          { text: 'TheTVDBExtended', link: '/api/thetvdb-extended' },
        ],
      },
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/falsepopsky/thetvdb' }],
    search: {
      provider: 'local',
    },
  },
});
