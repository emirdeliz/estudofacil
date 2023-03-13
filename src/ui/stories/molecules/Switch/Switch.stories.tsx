import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Switch, SwitchProps } from '@/molecules';

export default {
  title: 'Components/Molecules/Switch',
  component: Switch,
} as Meta;

const Template: Story<SwitchProps> = (args) => <Switch {...args} />;

export const SwitchSimple = Template.bind({});
SwitchSimple.args = {};
