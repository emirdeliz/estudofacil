import styled, { css, DefaultTheme } from 'styled-components';
import { getThemeFontSize, getThemePaddingOnly } from '@/theme';
import { ButtonProps } from './Button';

const getButtonSize = (props: ButtonProps, theme: DefaultTheme) => {
  const fontSize = getThemeFontSize({ ...props, theme });
  const space = getThemePaddingOnly({ ...props, theme });
  return { fontSize, space };
};

export const Button = styled.button<ButtonProps>`
  ${({
    theme,
    rounded,
    clickable,
    'max-width': maxWidth,
    'w-full': wFull,
    transparent,
    ...props
  }) => {
    const { fontSize, space } = getButtonSize(props, theme);
    return css`
      width: 100%;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      max-width: ${maxWidth || '100%'};
      width: ${wFull ? '100%' : 'auto'};
      font-size: ${fontSize};
      font-weight: ${theme.fontWeight.Semibold};
      opacity: ${clickable ? 1 : theme.opacity.Disable};
      cursor: ${clickable ? 'pointer' : 'not-allowed'};
      ${space};
      ${transparent &&
      `
        background-color: transparent;
        border: 0;
      `}
    `;
  }}
`;
