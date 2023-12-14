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
            { label: 'Supported Endpoints', link: '/guides/supported-endpoints/' },
            { label: 'FAQ', link: '/guides/faq/' },
          ],
        },
        {
          label: 'API',
          items: [
            {
              label: 'Introduction',
              link: '/api/',
            },
            {
              label: 'Artwork',
              collapsed: true,
              badge: {
                text: 'artwork/*',
              },
              autogenerate: {
                directory: '/api/artwork/',
              },
            },
            {
              label: 'Awards',
              collapsed: true,
              badge: {
                text: 'awards/*',
              },
              autogenerate: {
                directory: '/api/awards/',
              },
            },
            {
              label: 'Characters',
              collapsed: true,
              badge: {
                text: 'characters/*',
              },
              items: [
                {
                  label: 'characterById',
                  link: '/api/characterbyid',
                },
              ],
            },
            {
              label: 'Companies',
              collapsed: true,
              badge: {
                text: 'companies/*',
              },
              autogenerate: {
                directory: '/api/companies/',
              },
            },
            {
              label: 'Content',
              collapsed: true,
              badge: {
                text: 'content/*',
              },
              items: [
                {
                  label: 'contentRatings',
                  link: '/api/contentratings',
                },
              ],
            },
            {
              label: 'Countries',
              collapsed: true,
              badge: {
                text: 'countries/*',
              },
              autogenerate: {
                directory: '/api/countries/',
              },
            },
            {
              label: 'Entities',
              collapsed: true,
              badge: {
                text: 'entities/*',
              },
              items: [
                {
                  label: 'entities',
                  link: '/api/entities',
                },
              ],
            },
            {
              label: 'Episodes',
              collapsed: true,
              badge: {
                text: 'episodes/*',
              },
              autogenerate: {
                directory: '/api/episodes/',
              },
            },
            {
              label: 'Genders',
              collapsed: true,
              badge: {
                text: 'genders/*',
              },
              items: [
                {
                  label: 'genders',
                  link: '/api/genders',
                },
              ],
            },
            {
              label: 'Genres',
              collapsed: true,
              badge: {
                text: 'genres/*',
              },
              autogenerate: {
                directory: '/api/genres/',
              },
            },
            {
              label: 'Inspiration',
              collapsed: true,
              badge: {
                text: 'inspiration/*',
              },
              items: [
                {
                  label: 'inspirationTypes',
                  link: '/api/inspirationtypes',
                },
              ],
            },
            {
              label: 'Languages',
              collapsed: true,
              badge: {
                text: 'languages/*',
              },
              items: [
                {
                  label: 'languages',
                  link: '/api/languages',
                },
              ],
            },
            {
              label: 'People',
              collapsed: true,
              badge: {
                text: 'people/*',
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
