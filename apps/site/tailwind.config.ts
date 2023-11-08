import { withGEL } from '@westpac/ui/tailwind';
import { type Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

import { generateFontComponents } from './src/utils/generate-font-components';

const SitePlugin = plugin(
  // Adding the typography components
  ({ addComponents, theme }) => {
    addComponents(generateFontComponents(theme('typographySizes'), theme));
  },
);

const config: Config = withGEL({
  relative: true,
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './node_modules/@westpac/ui/src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        'gel-sans': [
          'Graphik',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Helvetica',
          'Arial',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
        ],
        'gel-serif': ['Guardian', 'Times New Roman', 'Times', 'serif'],
      },
      gridTemplateColumns: {
        sidebar: '300px auto',
      },
      gridTemplateRows: {
        header: '64px auto',
      },
      colors: {
        'gel-primary': '#C80038',
        'gel-background': '#F3F5F6',
        'gel-border': '#CFD8DC',
        'gel-icon': '#1976D2',
        'gel-text': '#122935',
        'gel-link': '#1871C9',
        'gel-muted': '#575F65',
        'gel-hover': '#F9FAFB',
      },
    },
  },
  safelist: [
    // This needed to be included because of the examples
    {
      pattern: /bg-+/, // 👈  This includes bg of all colors and shades
    },
    {
      pattern: /typography-+/,
    },
    {
      pattern: /gap-+/,
    },
    'flex',
    'h-7',
    'w-12',
    'w-22',
    'items-center',
    'justify-center',
    'rounded',
    'transition-colors',
    'bg-primary-20',
    'bg-success-20',
  ],
  plugins: [SitePlugin],
});

export default config;
