// ButtonGroup.stories.tsx

import React from 'react';
import { Story, Meta, } from '@storybook/react/types-6-0';
import Button,  {BaseButtonProps}  from './button';
import '../../styles/index.scss';
// import * as ButtonStories from './button.stories';


export default {
  title: 'Button 按钮',
  component: Button,
  argTypes: {
    // backgroundColor: { control: 'color' },
    onClick: { action: 'clicked' }
  },
} as Meta;

const Template: Story<BaseButtonProps> = (args) => {
return (
<>
<Button {...args}  size='sm'/>
<Button {...args}  size='md'/>
<Button {...args}  size='lg'/>
</>)
};

export const defalutButton = Template.bind({});
defalutButton.args = {
  btnType: 'danger',
  label: 'Button',
};