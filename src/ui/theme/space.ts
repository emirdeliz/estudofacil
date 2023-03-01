import { capitalizeFirstLetter } from '@/utils';
import { DefaultTheme } from 'styled-components';
import { KeyValue } from 'types/common';

export enum ESThemeSpace {
  'Sp-0' = '0px',
  'Sp-1' = '4px',
  'Sp-2' = '8px',
  'Sp-3' = '16px',
  'Sp-4' = '24px',
  'Sp-5' = '32px',
  'Sp-6' = '44px',
}

export interface ESThemeSpaceDefinition {
  'Sp-0'?: string;
  'Sp-1'?: string;
  'Sp-2'?: string;
  'Sp-3'?: string;
  'Sp-4'?: string;
  'Sp-5'?: string;
  'Sp-6'?: string;
}

export interface ESThemeSpaceProps {
  'sp-0'?: boolean;
  'sp-1'?: boolean;
  'sp-2'?: boolean;
  'sp-3'?: boolean;
  'sp-4'?: boolean;
  'sp-5'?: boolean;
  'sp-6'?: boolean;
}

export interface ESThemeSpaceGetProps {
  'sp-t-0'?: boolean;
  'sp-t-1'?: boolean;
  'sp-t-2'?: boolean;
  'sp-t-3'?: boolean;
  'sp-t-4'?: boolean;
  'sp-t-5'?: boolean;
  'sp-t-6'?: boolean;

  'sp-b-0'?: boolean;
  'sp-b-1'?: boolean;
  'sp-b-2'?: boolean;
  'sp-b-3'?: boolean;
  'sp-b-4'?: boolean;
  'sp-b-5'?: boolean;
  'sp-b-6'?: boolean;

  'sp-l-0'?: boolean;
  'sp-l-1'?: boolean;
  'sp-l-2'?: boolean;
  'sp-l-3'?: boolean;
  'sp-l-4'?: boolean;
  'sp-l-5'?: boolean;
  'sp-l-6'?: boolean;

  'sp-r-0'?: boolean;
  'sp-r-1'?: boolean;
  'sp-r-2'?: boolean;
  'sp-r-3'?: boolean;
  'sp-r-4'?: boolean;
  'sp-r-5'?: boolean;
  'sp-r-6'?: boolean;
}

export const buildSpaceProps = (props: KeyValue, spacePrefix: 'p' | 'm') => {
  const resultProps = Object.keys(props)
    .filter((key) => {
      return new RegExp(
        `${spacePrefix}t|${spacePrefix}b|${spacePrefix}l|${spacePrefix}r`,
        'g'
      ).test(key);
    })
    .reduce((result, key) => {
      const value = props[key];
      if (!value) {
        return result;
      }

      const keySuffix = key.substring(1) || '';
      result[`sp-${keySuffix}`] = value;
      return result;
    }, {} as KeyValue);
  return resultProps;
};

export const getThemeSpace = ({
  theme,
  ...props
}: ESThemeSpaceProps & {
  theme: DefaultTheme;
}) => {
  const key = Object.keys(props).find(
    (p) => !!props[p as keyof ESThemeSpaceProps]
  ) as keyof ESThemeSpaceProps;

  const keyTheme = capitalizeFirstLetter(key) as keyof ESThemeSpaceDefinition;
  return key ? theme.space[keyTheme] : undefined;
};

export const getThemeSpaceOnly = ({
  theme,
  ...props
}: ESThemeSpaceGetProps & {
  theme: DefaultTheme;
}) => {
  const left = getThemeSpace({
    'sp-0': props['sp-l-0'],
    'sp-1': props['sp-l-1'],
    'sp-2': props['sp-l-2'],
    'sp-3': props['sp-l-3'],
    'sp-4': props['sp-l-4'],
    'sp-5': props['sp-l-5'],
    'sp-6': props['sp-l-6'],
    theme,
  });

  const right = getThemeSpace({
    'sp-0': props['sp-r-0'],
    'sp-1': props['sp-r-1'],
    'sp-2': props['sp-r-2'],
    'sp-3': props['sp-r-3'],
    'sp-4': props['sp-r-4'],
    'sp-5': props['sp-r-5'],
    'sp-6': props['sp-r-6'],
    theme,
  });
  const top = getThemeSpace({
    'sp-0': props['sp-t-0'],
    'sp-1': props['sp-t-1'],
    'sp-2': props['sp-t-2'],
    'sp-3': props['sp-t-3'],
    'sp-4': props['sp-t-4'],
    'sp-5': props['sp-t-5'],
    'sp-6': props['sp-t-6'],
    theme,
  });

  const bottom = getThemeSpace({
    'sp-0': props['sp-b-0'],
    'sp-1': props['sp-b-1'],
    'sp-2': props['sp-b-2'],
    'sp-3': props['sp-b-3'],
    'sp-4': props['sp-b-4'],
    'sp-5': props['sp-b-5'],
    'sp-6': props['sp-b-6'],
    theme,
  });
  return { left, right, top, bottom };
};
