import React from "react";
import { FormGroup, Input, InputProps } from "@/framework";

export interface InputFormProps extends InputProps {
  label?: string;
  optional?: boolean;
}

export const InputForm = (props: InputFormProps) => {
  const { label, optional } = props;
  return (
    <FormGroup label={label} optional={optional}>
      <Input {...props} />
    </FormGroup>
  );
};
