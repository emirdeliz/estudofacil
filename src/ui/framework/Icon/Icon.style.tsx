import {
  ESThemeSizeProps,
  getThemeColor,
  getThemeMarginOnly,
  getThemePaddingOnly,
} from '@/theme';
import { capitalizeFirstLetter } from '@/utils';
import styled, { DefaultTheme } from 'styled-components';

export enum ESThemeIconSize {
  'Sz-0' = '10px',
  'Sz-1' = '12px',
  'Sz-2' = '14px',
  'Sz-3' = '16px',
  'Sz-4' = '20px',
  'Sz-5' = '28px',
  'Sz-6' = '56px',
}

const getThemeSize = ({
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
    ? ESThemeIconSize[keyCapitalize as keyof ESThemeSizeProps]
    : ESThemeIconSize['Sz-3'];
};

export const Icon = styled.div`
  ${({ theme, ...props }) => {
    const fill = getThemeColor({ theme, ...props });
    const size = getThemeSize({ theme, ...props });
    return `
      svg {
        width: ${size};
        height: ${size};
        display: block;

        path {
          fill: ${fill};
        }
      }
    `;
  }}
  ${(props) => {
    const margin = getThemeMarginOnly(props);
    const padding = getThemePaddingOnly(props);
    return `
			${margin}
			${padding}
		`;
  }}
`;
