import type { Meta, StoryObj } from '@storybook/react';

import { Icon, IconProps } from './icon';

const meta: Meta<IconProps> = {
   title: 'Icon',
   component: Icon,
   argTypes: {
      id: { control: 'text' },
      size: { control: 'number' },
   },
};

export default meta;
type Story = StoryObj<IconProps>;

export const Primary: Story = {
   args: {
      id: 'calendar',
      size: 24,
   },
};
