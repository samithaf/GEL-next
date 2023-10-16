import { tv } from 'tailwind-variants';

export const styles = tv(
  {
    slots: {
      base: 'relative flex gap-2 bg-white p-2 transition-colors xsl:p-3',
      bodyWrapper: 'flex flex-1 flex-col',
      badge: 'absolute right-0 top-0',
    },
    variants: {
      withBorder: {
        true: {
          base: 'rounded border border-borderDark',
        },
        false: {},
      },
      isLink: {
        true: {
          base: 'hover:border-hero',
        },
        false: {},
      },
      isFocusVisible: {
        true: { base: 'focus-outline' },
      },
    },
  },
  { responsiveVariants: ['xsl', 'sm', 'md', 'lg', 'xl'] },
);