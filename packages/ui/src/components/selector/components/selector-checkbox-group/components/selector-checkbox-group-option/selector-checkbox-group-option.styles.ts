import { tv } from 'tailwind-variants';

export const styles = tv(
  {
    slots: {
      base: 'group/checkbox-option cursor-pointer',
      icon: 'transition-transform',
    },
    variants: {
      checkIcon: {
        arrow: {
          icon: 'text-primary group-hover/checkbox-option:translate-x-1',
        },
        checkbox: {},
      },
      isSelected: {
        true: {
          base: 'border-[3px] border-hero',
        },
        false: {},
      },
      isFocusVisible: {
        true: {
          base: 'focus-outline',
        },
        false: {},
      },
      isDisabled: {
        true: {
          base: 'opacity-50',
        },
        false: {},
      },
    },
    compoundVariants: [
      {
        checkIcon: 'checkbox',
        isSelected: false,
        className: {
          icon: 'opacity-0',
        },
      },
      {
        checkIcon: 'checkbox',
        isSelected: true,
        className: {
          icon: 'opacity-100',
        },
      },
    ],
  },
  { responsiveVariants: ['xsl', 'sm', 'md', 'lg', 'xl'] },
);
