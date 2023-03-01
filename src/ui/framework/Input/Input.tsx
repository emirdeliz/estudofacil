import React, { ChangeEvent, memo, MouseEvent } from "react";
import { FormControlProps } from "@/framework";
import { isNullOrUndefined } from '@/utils';
import * as S from "./Input.style";

export interface InputProps extends FormControlProps {
  placeholder?: string;
  prefix?: string;
  number?: boolean;
  textarea?: boolean;
  onClick?: (e: MouseEvent<HTMLInputElement|HTMLTextAreaElement>) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => void;
}

const InputNumber = ({ ...props }: InputProps) => {
  const { prefix, value, onChange } = props;
  const valueFormatted = isNullOrUndefined(value)
    ? value
    : `${prefix ?? ''}${String(value || 0)}`.replace(
        /\B(?=(\d{3})+(?!\d))/g,
        ','
      );
  // const hasError = !!((value === "" || !parseFloat(String(value) || "0")) && required);
  // required

  return (
    <S.Number
      {...props}
      value={isNullOrUndefined(value) ? '' : String(valueFormatted)}
      onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const numStr = e.target.value
          .replace(/\D/g, '')
          .replace(/\$\s?|(,*)/g, '');
        const eventAsNumber = {
          ...e,
          target: { ...e.target, value: numStr === '' ? undefined : numStr },
        } as ChangeEvent<HTMLInputElement>;
        onChange && onChange(eventAsNumber);
      }}
    />
  );
}

const InputText = (props: InputProps) => {
	const valueAsString = String(props.value || '');
  return (
    <S.Input {...props} value={valueAsString} />
  );
}

const InputTextArea = (props: InputProps) => {
  return (
    <S.TextArea {...props} value={String(props.value || '')} />
  );
}

const InputBase = memo(({
  value,
  number,
  textarea,
  required,
	onChange,
  ...props
}: InputProps) => {
  const propsInput = {
    value,
    required,
    hasError: required && !value,
    onChange: onChange || (() => {}),
    ...props,
  };
  if(number) {
    return <InputNumber {...propsInput} />;
  }
  if(textarea) {
    return <InputTextArea {...propsInput} />;
  }
  return <InputText {...propsInput} />
});

export const Input = (props: InputProps) => <InputBase {...props} />;
Input.Number = (props: InputProps) => <InputBase {...props} number />;
Input.TextArea = (props: InputProps) => <InputBase {...props} textarea />;