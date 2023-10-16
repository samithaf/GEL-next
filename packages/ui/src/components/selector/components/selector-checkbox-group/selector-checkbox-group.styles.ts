import { tv } from 'tailwind-variants';

export const styles = tv(
  {
    base: 'flex flex-col gap-2 md:gap-3',
    variants: {},
  },
  { responsiveVariants: ['xsl', 'sm', 'md', 'lg', 'xl'] },
);