import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { InputPostalCodeForm, InputPostalCodeFormProps } from '@/organisms';
import { Modal } from '@/molecules';
import { Flex } from '@/atoms';
import { AddressModel } from 'framework/models';

export default {
  title: 'Components/Organisms/InputPostalCodeForm',
  component: InputPostalCodeForm,
} as Meta;

const Template: Story<InputPostalCodeFormProps> = (
  args: InputPostalCodeFormProps
) => {
  const [address, setAddress] = useState<AddressModel | null>();
  return (
    <Modal visible>
      <Flex mb2 mt2>
        <InputPostalCodeForm
          {...args}
          value={address?.postalCode}
          onChangeAddress={setAddress}
        />
      </Flex>
    </Modal>
  );
};

export const InputPostalCodeFormSimple = Template.bind({});
InputPostalCodeFormSimple.args = {
  children: 'CEP',
};

export const InputPostalCodeFormSemibold = Template.bind({});
InputPostalCodeFormSemibold.args = {
  ...InputPostalCodeFormSimple.args,
  fw3: true,
};

export const InputPostalCodeFormRequired = Template.bind({});
InputPostalCodeFormRequired.args = {
  ...InputPostalCodeFormSemibold.args,
  errorMsg: 'CEP inválido',
  required: true,
};
