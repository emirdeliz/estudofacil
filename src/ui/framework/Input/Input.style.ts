import styled, { css } from 'styled-components';

export enum InputType {
  Text = 'text',
  Number = 'number',
}

const InputBaseStyle = css`
  padding: ${({ theme }) =>
    [theme.padding['Sp-2'], theme.padding['Sp-3']].join(' ')};
  font-size: ${({ theme }) => theme.fontSize.Fs2};
  width: 100%;
  outline: none;
`;

export const Input = styled.input.attrs({ type: InputType.Text })`
  ${InputBaseStyle}
`;

export const Number = styled.input.attrs({ type: InputType.Number })``;

export const TextArea = styled.textarea`
  ${InputBaseStyle}
`;
