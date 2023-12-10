import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

export default defineConfig({
  integrations: [
    tailwind({ applyBaseStyles: false }),
    starlight({
      title: '@untidy/thetvdb',
      description: 'Client library for TheTVDB API in Node.js',
      favicon: '/favicon.ico',
      logo: {
        src: './src/assets/favicon.png',
        replacesTitle: true,
      },
      defaultLocale: 'root',
      social: {
        github: 'https://github.com/falsepopsky/thetvdb',
      },
      sidebar: [
        {
          label: 'Guides',
          items: [
            { label: 'Getting Started', link: '/guides/getting-started/' },
            { label: 'FAQ', link: '/guides/faq/' },
            { label: 'Supported Endpoints', link: '/guides/supported-endpoints/' },
          ],
        },
        {
          label: 'API',
          items: [
            {
              label: 'Artwork',
              collapsed: true,
              badge: {
                text: '/artwork/*',
              },
              autogenerate: {
                directory: '/api/artwork/',
              },
            },
            {
              label: 'Awards',
              collapsed: true,
              badge: {
                text: '/awards/*',
              },
              autogenerate: {
                directory: '/api/awards/',
              },
            },
            {
              label: 'Characters',
              collapsed: true,
              badge: {
                text: '/characters/*',
              },
              autogenerate: {
                directory: '/api/characters/',
              },
            },
            {
              label: 'Companies',
              collapsed: true,
              badge: {
                text: '/companies/*',
              },
              autogenerate: {
                directory: '/api/companies/',
              },
            },
            {
              label: 'Content',
              collapsed: true,
              badge: {
                text: '/content/*',
              },
              autogenerate: {
                directory: '/api/content/',
              },
            },
            {
              label: 'Countries',
              collapsed: true,
              badge: {
                text: '/countries/*',
              },
              autogenerate: {
                directory: '/api/countries/',
              },
            },
            {
              label: 'People',
              collapsed: true,
              badge: {
                text: '/people/*',
              },
              autogenerate: {
                directory: '/api/people/',
              },
            },
          ],
        },
      ],
      customCss: ['./src/tailwind.css'],
    }),
  ],
});
