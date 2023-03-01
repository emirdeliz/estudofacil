import { DefaultTheme } from 'styled-components';
import {
  buildSpaceProps,
  ESThemeSpaceDefinition,
  getThemeSpaceOnly,
} from './space';

export interface ESThemePaddingDefinition extends ESThemeSpaceDefinition {}

export interface ESThemePaddingProps {
  'pt-0'?: boolean;
  'pt-1'?: boolean;
  'pt-2'?: boolean;
  'pt-3'?: boolean;
  'pt-4'?: boolean;
  'pt-5'?: boolean;
  'pt-6'?: boolean;

  'pb-0'?: boolean;
  'pb-1'?: boolean;
  'pb-2'?: boolean;
  'pb-3'?: boolean;
  'pb-4'?: boolean;
  'pb-5'?: boolean;
  'pb-6'?: boolean;

  'pl-0'?: boolean;
  'pl-1'?: boolean;
  'pl-2'?: boolean;
  'pl-3'?: boolean;
  'pl-4'?: boolean;
  'pl-5'?: boolean;
  'pl-6'?: boolean;

  'pr-0'?: boolean;
  'pr-1'?: boolean;
  'pr-2'?: boolean;
  'pr-3'?: boolean;
  'pr-4'?: boolean;
  'pr-5'?: boolean;
  'pr-6'?: boolean;
}

export const getThemePaddingOnly = (
  props: ESThemePaddingProps & {
    theme: DefaultTheme;
  }
) => {
  const spaceProps = buildSpaceProps(props, 'p');
  const { left, right, top, bottom } = getThemeSpaceOnly({
    theme: props.theme,
    ...spaceProps,
  });
  return `
		${top ? `padding-top: ${top};` : ''}
		${bottom ? `padding-bottom: ${bottom};` : ''}
		${left ? `padding-left: ${left};` : ''}
		${right ? `padding-right: ${right};` : ''}
	`;
};
