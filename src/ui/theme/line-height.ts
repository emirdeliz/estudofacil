import { capitalizeFirstLetter } from '@/utils';
import { DefaultTheme } from 'styled-components';

export enum ESThemeLineHeight {
  'Lh-0' = '12px',
  'Lh-1' = '16px',
  'Lh-2' = '20px',
  'Lh-3' = '24px',
  'Lh-4' = '32px',
  'Lh-5' = '40px',
  'Lh-6' = '48px',
}

export interface ESThemeLineHeightDefinition {
  'lh-0'?: string;
  'lh-1'?: string;
  'lh-2'?: string;
  'lh-3'?: string;
  'lh-4'?: string;
  'lh-5'?: string;
  'lh-6'?: string;
}

export interface ESThemeLineHeightProps {
  'lh-0'?: boolean;
  'lh-1'?: boolean;
  'lh-2'?: boolean;
  'lh-3'?: boolean;
  'lh-4'?: boolean;
  'lh-5'?: boolean;
  'lh-6'?: boolean;
}

export const getThemeLineHeight = ({
  theme,
  ...props
}: ESThemeLineHeightProps & {
  theme: DefaultTheme;
}) => {
  const key = Object.keys(props).find((p) => {
    const keyCapitalized = capitalizeFirstLetter(p);
    return (
      !!props[p as keyof ESThemeLineHeightProps] &&
      !!theme.lineHeight[keyCapitalized as keyof ESThemeLineHeightProps]
    );
  });

  const keyCapitalized = capitalizeFirstLetter(key);
  return key
    ? theme.lineHeight[keyCapitalized as keyof ESThemeLineHeightProps]
    : theme.lineHeight['lh-0'];
};
