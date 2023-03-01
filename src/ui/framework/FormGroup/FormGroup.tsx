import React, { ReactNode } from "react";
import { Flex, Title, LabelForm } from '@/framework';

export interface FormGroupProps {
  label?: string | number;
  optional?: boolean;
}

interface IFormGroupChildren extends FormGroupProps {
  children: ReactNode;
}

export const FormGroup = ({
  children,
  label,
  optional = false
}: IFormGroupChildren) => {
  return (
    <Flex>
      {label && (
        <Flex justifyCenter alignEnd>
          <LabelForm>{label}</LabelForm>
          {optional && (
            <Title.Fs1 mb1 ml1>
              optional
            </Title.Fs1>
          )}
        </Flex>
      )}
      {children}
    </Flex>
  );
};