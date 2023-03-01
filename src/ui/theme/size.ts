import { capitalizeFirstLetter } from '@/utils';
import { DefaultTheme } from 'styled-components';

export enum ESThemeSize {
  'Sz-0' = '10px',
  'Sz-1' = '12px',
  'Sz-2' = '14px',
  'Sz-3' = '16px',
  'Sz-4' = '20px',
  'Sz-5' = '28px',
  'Sz-6' = '56px',
}

export interface ESThemeSizeDefinition {
  'Sz-0'?: string;
  'Sz-1'?: string;
  'Sz-2'?: string;
  'Sz-3'?: string;
  'Sz-4'?: string;
  'Sz-5'?: string;
  'Sz-6'?: string;
}

export interface ESThemeSizeProps {
  'Sz-0'?: boolean;
  'Sz-1'?: boolean;
  'Sz-2'?: boolean;
  'Sz-3'?: boolean;
  'Sz-4'?: boolean;
  'Sz-5'?: boolean;
  'Sz-6'?: boolean;
}

export const getThemeSize = ({
  theme,
  ...props
}: ESThemeSizeProps & {
  theme: DefaultTheme;
}) => {
  const key = Object.keys(props).find((p) => {
    const pCapitalize = capitalizeFirstLetter(p);
    return (
      !!props[p as keyof ESThemeSizeProps] &&
      !!theme.size[pCapitalize as keyof ESThemeSizeProps]
    );
  });
  const keyCapitalize = capitalizeFirstLetter(key);
  return key
    ? theme.size[keyCapitalize as keyof ESThemeSizeProps]
    : theme.size['Sz-3'];
};
