import { DefaultTheme } from 'styled-components';
import {
  buildSpaceProps,
  ESThemeSpaceDefinition,
  getThemeSpaceOnly,
} from './space';

export interface ESThemeMarginDefinition extends ESThemeSpaceDefinition {}

export interface ESThemeMarginProps {
  'mt-0'?: boolean;
  'mt-1'?: boolean;
  'mt-2'?: boolean;
  'mt-3'?: boolean;
  'mt-4'?: boolean;
  'mt-5'?: boolean;
  'mt-6'?: boolean;

  'mb-0'?: boolean;
  'mb-1'?: boolean;
  'mb-2'?: boolean;
  'mb-3'?: boolean;
  'mb-4'?: boolean;
  'mb-5'?: boolean;
  'mb-6'?: boolean;

  'ml-0'?: boolean;
  'ml-1'?: boolean;
  'ml-2'?: boolean;
  'ml-3'?: boolean;
  'ml-4'?: boolean;
  'ml-5'?: boolean;
  'ml-6'?: boolean;

  'mr-0'?: boolean;
  'mr-1'?: boolean;
  'mr-2'?: boolean;
  'mr-3'?: boolean;
  'mr-4'?: boolean;
  'mr-5'?: boolean;
  'mr-6'?: boolean;
}

export const getThemeMarginOnly = (
  props: ESThemeMarginProps & {
    theme: DefaultTheme;
  }
) => {
  const spaceProps = buildSpaceProps(props, 'm');
  const { left, right, top, bottom } = getThemeSpaceOnly({
    theme: props.theme,
    ...spaceProps,
  });
  return `
		${top ? `margin-top: ${top};` : ''}
		${bottom ? `margin-bottom: ${bottom};` : ''}
		${left ? `margin-left: ${left};` : ''}
		${right ? `margin-right: ${right};` : ''}
	`;
};
