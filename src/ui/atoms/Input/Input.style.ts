import styled, { css } from 'styled-components';
import { getFontSize } from '@/theme';
import { InputProps } from './Input';

const inputBase = css`
  width: 100%;
  height: 100%;
  border: 0;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.P1};
  outline-color: ${({ theme }) => theme.colors.P2};
  border-radius: ${({ theme }) => theme.radius.Sm};
  padding: ${({ theme }) => `${theme.padding.Sm} ${theme.padding.Sm}`};
  font-size: ${(props) => getFontSize(props)};

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.N3};
    opacity: 1;
  }

  &:-ms-input-placeholder {
    color: ${({ theme }) => theme.colors.N3};
  }

  &::-ms-input-placeholder {
    color: ${({ theme }) => theme.colors.N3};
  }
`;

export const Input = styled.input.attrs(({ password }: InputProps) => ({
  type: password ? 'password' : 'text',
  autoComplete: 'off',
  role: 'textbox',
}))<InputProps>`
  ${inputBase}
`;

export const TextArea = styled.textarea.attrs({
  role: 'textbox',
})`
  resize: none;
  ${inputBase}
`;

export const Container = styled.div<InputProps>`
  display: flex;
  flex: 1;
  background-color: ${({ theme, transparent }) =>
    transparent ? 'transparent' : theme.colors.N5};
  border-radius: ${({ theme }) => theme.radius.Sm};
`;

export const IconContainer = styled.div`
  position: absolute;
  right: 8px;
  top: 50%;
  height: 90%;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(-50%);
  user-select: none;
`;

export const GroupContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const ReadOnly = styled.div`
  display: flex;
  align-items: center;
  line-height: ${({ theme }) => theme.lineHeight.Sm};
`;
