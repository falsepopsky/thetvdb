import starlightPlugin from '@astrojs/starlight-tailwind';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,mdx}'],
  theme: {
    extend: {},
  },
  plugins: [starlightPlugin()],
};
