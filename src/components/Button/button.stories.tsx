// ButtonGroup.stories.tsx

import React from 'react';
import { Story, Meta, } from '@storybook/react/types-6-0';
import Button, { BaseButtonProps } from './button';
// import * as ButtonStories from './button.stories';


export default {
  title: 'ButtonGroup',
  btnType: 'default',
  component: Button,
} as Meta;

const Template: Story<BaseButtonProps> = (args) => <Button {...args}  >wwww</Button>;

export const Pair = Template.bind({});
Pair.args = {
  btnType: 'default',
  size: 'lg',

};