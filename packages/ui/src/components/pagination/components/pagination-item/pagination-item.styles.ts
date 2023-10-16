import { tv } from 'tailwind-variants';

export const styles = tv(
  {
    base: 'typography-body-10 block border-l border-border px-2 py-[0.5625rem] text-center text-text transition-colors',
    variants: {
      firstItem: {
        true: 'border-l-0',
        false: '',
      },
      active: {
        true: 'bg-hero text-white',
        false: 'hover:bg-light',
      },
      disabled: {
        true: 'cursor-not-allowed bg-light text-muted opacity-50',
        false: 'cursor-pointer',
      },
    },
  },
  { responsiveVariants: ['xsl', 'sm', 'md', 'lg', 'xl'] },
);