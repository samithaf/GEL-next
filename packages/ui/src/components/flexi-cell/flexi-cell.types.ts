import { type HTMLAttributes, type ReactNode } from 'react';

import { BadgeProps } from '../index.js';

type BaseFlexiCellProps = {
  /**
   * Renders an element on the right
   */
  after?: ReactNode;
  /**
   * Renders an element on the left
   */
  before?: ReactNode;
  /**
   * the middle content of FlexiCell
   */
  children?: ReactNode;
  /**
   * Wraps body with an 'a' tag for dual action styled component
   * - Requires href to be provided
   * - Tag prop should not be used when using this prop
   */
  dualAction?: boolean;
  /**
   * href in case it is an "a" tag or dualAction
   */
  href?: string;
  /**
   * The native tag that flexicell will be rendered
   */
  tag?: keyof JSX.IntrinsicElements;
  /**
   * Renders badge in top right corner based on provided string
   */
  topBadge?: (props: BadgeProps) => JSX.Element;
  /**
   * Adds an arrow on top right
   */
  withArrow?: boolean;
  /**
   * Adds a border radius and a border
   */
  withBorder?: boolean;
} & HTMLAttributes<HTMLOrSVGElement>;

type FlexiCellAsLinkProps = {
  /**
   * The href for the link
   */
  href: string;
  /**
   * The native tag that the circle will be rendered as
   */
  tag: 'a';
};

type DualActionFlexiCellProps = {
  /**
   * The native tag that the circle will be rendered as
   */
  dualAction: true;
  /**
   * The href for the link
   */
  href: string;
};

type FlexiCellAsAllOtherTagsProps<Tag> = {
  href?: never;
  tag?: Tag;
};

export type FlexiCellProps<
  Tag extends keyof Omit<JSX.IntrinsicElements, 'a'> = keyof Omit<JSX.IntrinsicElements, 'a'>,
> = (FlexiCellAsLinkProps | DualActionFlexiCellProps | FlexiCellAsAllOtherTagsProps<Tag>) &
  BaseFlexiCellProps &
  HTMLAttributes<Element>;
