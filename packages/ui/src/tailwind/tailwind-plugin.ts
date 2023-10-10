import plugin from 'tailwindcss/plugin.js';
import createThemes from 'tailwindcss-themer';

import { BREAKPOINTS } from './constants/breakpoints.js';
import { COLORS, DEFAULT_BODY_TYPOGRAPHY, FONT_TYPES, SPACING } from './constants/index.js';
import { THEMES } from './themes/index.js';
import { theme as WBCTheme } from './themes/wbc.js';
import { generateDatePicker } from './utils/generate-date-picker-component.js';
import { createFontSizes, generateFontComponents, generateFormControlComponents } from './utils/index.js';

/**
 * Base Plugin responsible for default theming and adding the typography components
 */
export const WestpacUIKitBasePlugin = plugin(
  // Adding the typography components
  ({ addComponents, addUtilities, addVariant, addBase, theme }) => {
    addBase({
      html: { color: theme('colors.text.DEFAULT') },
    });
    addUtilities({
      '.focus-outline': { [`@apply ${theme('focusOutline')}`]: {} },
      '.select-caret': {
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='14' height='8' style='color: rgb(89,87,103);'><path fill='currentColor' d='M0 0l7 8 7-8z'/></svg>\")",
      },
    });
    addComponents(generateFontComponents(theme('typographySizes'), theme));
    addComponents(generateFormControlComponents(theme('formControl')));
    addComponents(generateDatePicker());
    THEMES.forEach(({ name }) => {
      addVariant(`on-theme-${name.toLowerCase()}`, [
        `[data-theme="${name.toLowerCase()}"] &`,
        `.theme-${name.toLowerCase()} &`,
      ]);
    });
  },
  {
    theme: {
      screens: BREAKPOINTS,
      fontFamily: {
        sans: DEFAULT_BODY_TYPOGRAPHY,
        brand: DEFAULT_BODY_TYPOGRAPHY,
      },
      gap: SPACING,
      spacing: SPACING,
      colors: COLORS,
      extend: {
        lineHeight: {
          tight: '1.2',
          normal: '1.4',
        },
        borderWidth: {
          5: '0.3125rem',
        },
        fontSize: createFontSizes(FONT_TYPES),
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          fadeInDown: {
            '0%': {
              opacity: '0',
              transform: 'translateY(-10vh)',
            },
            '100%': {
              opacity: '1',
              transform: 'translateY(0)',
            },
          },
        },
        animation: {
          fadeIn: 'fadeIn 0.2s ease',
          fadeInDown: 'fadeInDown 0.4s ease',
        },
        boxShadow: {
          switch: '0.1875rem 0 0.375rem 0 rgba(0,0,0,0.53)',
        },
        maxWidth: {
          xsl: BREAKPOINTS.xsl,
          sm: BREAKPOINTS.sm,
          md: BREAKPOINTS.md,
          lg: BREAKPOINTS.lg,
          container: '1320px', //1200 (lg) + 60 (paddingHorizontal) + 60 (paddingHorizontal)
        },
      },
      typographySizes: {
        1: {
          fontSize: '3.75rem',
          lineHeight: 'tight',
        },
        2: {
          fontSize: '3.375rem',
          lineHeight: 'tight',
        },
        3: {
          fontSize: '3rem',
          lineHeight: 'tight',
        },
        4: {
          fontSize: '2.625rem',
          lineHeight: 'tight',
        },
        5: {
          fontSize: '2.25rem',
          lineHeight: 'tight',
        },
        6: {
          fontSize: '1.875rem',
          lineHeight: 'tight',
        },
        7: {
          fontSize: '1.5rem',
          lineHeight: 'tight',
        },
        8: {
          fontSize: '1.125rem',
          lineHeight: 'normal',
        },
        9: {
          fontSize: '1rem',
          lineHeight: 'normal',
        },
        10: {
          fontSize: '0.875rem',
          lineHeight: 'normal',
        },
      },
      formControl: {
        base: 'no-inner-spin-button box-border w-fit appearance-none overflow-visible rounded border bg-white align-middle text-text transition placeholder:font-light placeholder:text-text-50 placeholder:opacity-100 focus:focus-outline disabled:form-control-disabled',
        disabled: 'cursor-not-allowed border-dashed bg-background text-muted',
        sizes: {
          // Some of the values are not following the spacing so we needed to use static values as following
          small: 'px-[0.5625rem] pb-[0.25rem] pt-[0.1875rem] text-sm leading-[1.3rem]',
          medium: 'typography-body-9 px-2 py-[0.3125rem] leading-6',
          large: 'px-[0.9375rem] py-[0.5rem] text-base',
          xlarge: 'px-3 pb-[0.625rem] pt-[0.5625rem] text-lg leading-[1.685rem]',
        },
      },
      button: {
        base: 'inline-flex items-center justify-center rounded leading-[1.5] transition-[background] disabled:pointer-events-none disabled:opacity-50 group-[.add-on-after]:rounded-l-none group-[.add-on-before]:rounded-r-none',
        look: {
          base: {
            primary: 'border border-primary bg-primary text-white hover:bg-primary-70 active:bg-primary-50',
            hero: 'border border-hero bg-hero text-white hover:bg-hero-70 active:bg-hero-50',
            faint: 'border border-border bg-light text-muted hover:bg-white active:bg-white',
            link: 'text-link underline',
          },
          soft: {
            primary:
              'border border-primary bg-white text-text hover:text-white hover:bg-primary-70 active:bg-primary-50',
            hero: 'border border-hero bg-hero bg-white text-text hover:text-white hover:bg-hero-70 active:bg-hero-50',
            faint: 'border border-border bg-white text-muted hover:bg-light active:bg-light',
          },
        },
      },
      focusOutline: 'outline outline-2 outline-offset-[3px] outline-focus',
    },
  },
);

/**
 * Multiple Theme plugin with all the brands variation
 */
export const WestpacUIKitThemesPlugin = createThemes({
  defaultTheme: {
    extend: {
      colors: WBCTheme.colors,
      fontFamily: {
        brand: [WBCTheme.brandFont, ...DEFAULT_BODY_TYPOGRAPHY],
      },
    },
  },
  themes: THEMES,
});
