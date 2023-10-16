import { type ReactNode } from 'react';
import { type VariantProps } from 'tailwind-variants';

import { type IconProps } from '../icon/index.js';

import { styles } from './input-field.styles.js';

export type Composition = Record<'before' | 'after', string | null>;

export type Sizes = 'small' | 'medium' | 'large' | 'xlarge';

export type InputFieldContextType = {
  ariaDescribedByValue: string;
  id: string;
  size: Sizes;
};

export type InputFieldProps = {
  /**
   * After element
   */
  after?: ReactNode | { element?: ReactNode; icon?: (props: Omit<IconProps, 'icon'>) => JSX.Element; inset?: boolean };
  /**
   * Before element
   */
  before?: ReactNode | { element?: ReactNode; icon?: (props: Omit<IconProps, 'icon'>) => JSX.Element; inset?: boolean };
  /**
   * Children
   */
  children?: ReactNode;
  /**
   * Error message text
   */
  errorMessage?: string | string[];
  /**
   * Visually hide label
   */
  hideLabel?: boolean;
  /**
   * Hint text
   */
  hint?: ReactNode;
  /**
   * Define an id for internal elements
   */
  instanceId?: string;
  /**
   * Label text
   */
  label?: string;
  /**
   * Size for Before/After/Input child components
   */
  size?: Sizes;
  /**
   * Supporting text
   */
  supportingText?: ReactNode;
  /**
   * Tag to render
   */
  // TODO: maybe we could limit the tags to be only fieldset or div?
  tag?: keyof JSX.IntrinsicElements;
} & Omit<VariantProps<typeof styles>, 'before' | 'after'>;