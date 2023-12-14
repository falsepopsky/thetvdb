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
              badge: {
                text: 'Important',
                variant: 'caution',
              },
            },
            {
              label: 'Artwork',
              collapsed: true,
              autogenerate: {
                directory: '/api/artwork/',
              },
            },
            {
              label: 'Awards',
              collapsed: true,
              autogenerate: {
                directory: '/api/awards/',
              },
            },
            {
              label: 'Characters',
              collapsed: true,
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
              autogenerate: {
                directory: '/api/companies/',
              },
            },
            {
              label: 'Content',
              collapsed: true,
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
              autogenerate: {
                directory: '/api/countries/',
              },
            },
            {
              label: 'Entities',
              collapsed: true,
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
              autogenerate: {
                directory: '/api/episodes/',
              },
            },
            {
              label: 'Genders',
              collapsed: true,
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
              autogenerate: {
                directory: '/api/genres/',
              },
            },
            {
              label: 'Inspiration',
              collapsed: true,
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
