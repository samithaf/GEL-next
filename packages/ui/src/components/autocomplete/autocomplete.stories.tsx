import { type Meta, StoryFn, type StoryObj } from '@storybook/react';
import { Key, useState } from 'react';

import { Autocomplete } from './autocomplete.component.js';

const meta: Meta<typeof Autocomplete> = {
  title: 'Components/Autocomplete',
  component: Autocomplete,
  tags: ['autodocs'],
  decorators: [
    (Story: StoryFn) => {
      /**
       * NOTE:
       * Needed to change displayName here so subcomponent shows correct name in code view
       * Could not change it on the component as Item from react-stately is used in three components
       * and one displayName would overwrite the others
       */
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      Autocomplete.Item.displayName = 'Autocomplete.Item';

      return (
        <div className="h-30 p-3">
          <Story />
        </div>
      );
    },
  ],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * > Default usage example
 */
export const Default: Story = {
  args: {
    'aria-label': 'Animals',
    children: [
      <Autocomplete.Item key="red panda">Red Panda</Autocomplete.Item>,
      <Autocomplete.Item key="cat">Cat</Autocomplete.Item>,
      <Autocomplete.Item key="dog">Dog</Autocomplete.Item>,
      <Autocomplete.Item key="aardvark">Aardvark</Autocomplete.Item>,
      <Autocomplete.Item key="kangaroo">Kangaroo</Autocomplete.Item>,
      <Autocomplete.Item key="snake">Snake</Autocomplete.Item>,
    ],
  },
};

/**
 * > Controlled usage example
 */
export const Controlled: Story = {
  args: {},
  render: () => {
    const [selectedKey, setSelectedKey] = useState<Key>();
    const handleSelectionChange = (key: Key) => {
      setSelectedKey(key);
    };
    return (
      <Autocomplete onSelectionChange={handleSelectionChange} selectedKey={selectedKey} aria-label="Animals">
        <Autocomplete.Item key="red panda">Red Panda</Autocomplete.Item>
        <Autocomplete.Item key="cat">Cat</Autocomplete.Item>
        <Autocomplete.Item key="dog">Dog</Autocomplete.Item>
        <Autocomplete.Item key="aardvark">Aardvark</Autocomplete.Item>
        <Autocomplete.Item key="kangaroo">Kangaroo</Autocomplete.Item>
        <Autocomplete.Item key="snake">Snake</Autocomplete.Item>
      </Autocomplete>
    );
  },
};

/**
 * > Disabled usage example
 */
export const Disabled: Story = {
  args: {
    isDisabled: true,
    'aria-label': 'Disable example',
    children: [
      <Autocomplete.Item key="red panda">Red Panda</Autocomplete.Item>,
      <Autocomplete.Item key="cat">Cat</Autocomplete.Item>,
      <Autocomplete.Item key="dog">Dog</Autocomplete.Item>,
      <Autocomplete.Item key="aardvark">Aardvark</Autocomplete.Item>,
      <Autocomplete.Item key="kangaroo">Kangaroo</Autocomplete.Item>,
      <Autocomplete.Item key="snake">Snake</Autocomplete.Item>,
    ],
  },
};

/**
 * > Invalid usage example
 */
export const Invalid: Story = {
  args: {
    invalid: true,
    'aria-label': 'Invalid example',
    children: [
      <Autocomplete.Item key="red panda">Red Panda</Autocomplete.Item>,
      <Autocomplete.Item key="cat">Cat</Autocomplete.Item>,
      <Autocomplete.Item key="dog">Dog</Autocomplete.Item>,
      <Autocomplete.Item key="aardvark">Aardvark</Autocomplete.Item>,
      <Autocomplete.Item key="kangaroo">Kangaroo</Autocomplete.Item>,
      <Autocomplete.Item key="snake">Snake</Autocomplete.Item>,
    ],
  },
};

/**
 * > Sizes example
 */
export const Sizes: Story = {
  args: {},
  render: () => {
    return (
      <>
        {['small', 'medium', 'large', 'xlarge'].map(size => (
          <div className="py-2" key={size}>
            <Autocomplete label={size} size={size as any} aria-label={`size ${size}`}>
              <Autocomplete.Item key="red panda">Red Panda</Autocomplete.Item>
              <Autocomplete.Item key="cat">Cat</Autocomplete.Item>
              <Autocomplete.Item key="dog">Dog</Autocomplete.Item>
              <Autocomplete.Item key="aardvark">Aardvark</Autocomplete.Item>
              <Autocomplete.Item key="kangaroo">Kangaroo</Autocomplete.Item>
              <Autocomplete.Item key="snake">Snake</Autocomplete.Item>
            </Autocomplete>
          </div>
        ))}
      </>
    );
  },
};

/**
 * > Footer example
 */
export const Footer: Story = {
  args: {},
  render: () => {
    return (
      <div className="py-2">
        <Autocomplete label="With footer" footer={<h3>Footer</h3>}>
          <Autocomplete.Item key="red panda">Red Panda</Autocomplete.Item>
          <Autocomplete.Item key="cat">Cat</Autocomplete.Item>
          <Autocomplete.Item key="dog">Dog</Autocomplete.Item>
          <Autocomplete.Item key="aardvark">Aardvark</Autocomplete.Item>
          <Autocomplete.Item key="kangaroo">Kangaroo</Autocomplete.Item>
          <Autocomplete.Item key="snake">Snake</Autocomplete.Item>
          <Autocomplete.Item key="elephant">Elephant</Autocomplete.Item>
          <Autocomplete.Item key="giraffe">Giraffe</Autocomplete.Item>
          <Autocomplete.Item key="lion">Lion</Autocomplete.Item>
          <Autocomplete.Item key="tiger">Tiger</Autocomplete.Item>
          <Autocomplete.Item key="penguin">Penguin</Autocomplete.Item>
          <Autocomplete.Item key="octopus">Octopus</Autocomplete.Item>
          <Autocomplete.Item key="cheetah">Cheetah</Autocomplete.Item>
          <Autocomplete.Item key="polar bear">Polar Bear</Autocomplete.Item>
          <Autocomplete.Item key="koala">Koala</Autocomplete.Item>
          <Autocomplete.Item key="dolphin">Dolphin</Autocomplete.Item>
          <Autocomplete.Item key="flamingo">Flamingo</Autocomplete.Item>
          <Autocomplete.Item key="elephant seal">Elephant Seal</Autocomplete.Item>
          <Autocomplete.Item key="orca">Orca</Autocomplete.Item>
        </Autocomplete>
      </div>
    );
  },
};
