import React from 'react';
import { Meta, Story } from '@storybook/react';
import { LoaderComponent, LoaderComponentProps } from '@/molecules';
import { IconProps } from '@/atoms';

export default {
  title: 'Components/Molecules/LoaderComponent',
  component: LoaderComponent,
} as Meta;

const Template: Story<LoaderComponentProps<IconProps>> = (args) => (
  <LoaderComponent<IconProps> {...args} />
);

export const LoaderComponentSimple = Template.bind({});
LoaderComponentSimple.args = {
  children: async () => ({
    default: (await import('../../../atoms/Icon/Icon')).Icon,
  }),
  props: {
    white: true,
  },
};
