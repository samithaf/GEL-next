import { type Meta, StoryFn, type StoryObj } from '@storybook/react';

import { VisuallyHidden } from './visually-hidden.component.js';

const meta: Meta<typeof VisuallyHidden> = {
  title: 'Example/VisuallyHidden',
  component: VisuallyHidden,
  tags: ['autodocs'],
  decorators: [(Story: StoryFn) => <Story />],
  parameters: {
    layout: 'center',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * > Default usage example
 *
 * Note: The examples below the following headings are visibility hidden.
 * Best you inspect what is being rendered using your browser’s DevTools.
 */
export const DefaultStory: Story = {
  args: {
    children: 'Only screen reader can read this',
  },
};