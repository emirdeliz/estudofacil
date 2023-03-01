import { DefaultTheme } from 'styled-components';
import { ESThemeColorDark } from './color';
import { ESThemeDisplay } from './display';
import { ESThemeFontSize } from './font-size';
import { ESThemeSize } from './size';
import { ESThemeFontWeight } from './font-weight';
import { ESThemeLineHeight } from './line-height';
import { ESThemeOpacity } from './opacity';
import { ESThemeRadius } from './radius';
import { ESThemeSpace } from './space';
import { ESThemeZIndex } from './z-index';

export const ESTheme = {
  color: ESThemeColorDark,
  fontSize: ESThemeFontSize,
  fontWeight: ESThemeFontWeight,
  radius: ESThemeRadius,
  opacity: ESThemeOpacity,
  lineHeight: ESThemeLineHeight,
  display: ESThemeDisplay,
  zIndex: ESThemeZIndex,
  margin: ESThemeSpace,
  padding: ESThemeSpace,
  space: ESThemeSpace,
  size: ESThemeSize,
} as DefaultTheme;

export {
  ESThemeFontSize,
  ESThemeFontWeight,
  ESThemeRadius,
  ESThemeOpacity,
  ESThemeLineHeight,
  ESThemeDisplay,
  ESThemeZIndex,
  ESThemeSize,
};

export * from './color';
export * from './display';
export * from './font-size';
export * from './font-weight';
export * from './line-height';
export * from './mixins';
export * from './opacity';
export * from './radius';
export * from './theme';
export * from './z-index';
export * from './margin';
export * from './padding';
export * from './size';
