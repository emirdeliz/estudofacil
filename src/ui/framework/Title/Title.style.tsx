import styled from 'styled-components';
import {
  getFontWeight,
  getThemeColor,
  getThemeDisplay,
  getThemeFontSize,
  getThemeLineHeight,
  getThemeMarginOnly,
} from '@/theme';
import { TitleProps } from './Title';

export const Title = styled.span<TitleProps>`
  ${({
    capitalize,
    uppercase,
    bold,
    ellipsis,
    'cursor-pointer': cursorPointer,
    'no-wrap': noWrap,
    theme,
    error,
    ...props
  }) => {
    const margin = getThemeMarginOnly({ ...props, theme });
    return `
			vertical-align: middle;
			font-size: ${getThemeFontSize({ theme, ...props })};
			font-weight: ${getFontWeight(props)};
			text-transform: ${capitalize ? 'capitalize' : uppercase ? 'uppercase' : 'none'};
			cursor: ${cursorPointer ? 'pointer' : 'auto'};
			white-space: ${noWrap ? 'nowrap' : 'initial'};
      line-height: ${getThemeLineHeight({ theme, ...props })};
			color: ${error ? theme.color.Red : getThemeColor({ theme, ...props })};
			${margin};
		`;
  }}
  ${({ center, justify }) =>
    center || justify
      ? `
    width: 100%;
    text-align: ${center ? 'center' : 'justify'};
  `
      : ''}
  ${({ ellipsis }) =>
    ellipsis
      ? `
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: calc(100%);
  `
      : ''};
  display: ${(props) => getThemeDisplay(props)};
`;
