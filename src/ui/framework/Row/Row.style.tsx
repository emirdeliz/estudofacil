import styled from 'styled-components';
import { getThemeMarginOnly, getThemePaddingOnly } from '@/theme';

/*
	padding-right: ${({ theme }) => theme.padding.Sp1};
  padding-left: ${({ theme }) => theme.padding.Sp1};

	${Col} {
    &:first-child {
      padding-left: 0;
    }

    &:last-child {
      padding-right: 0;
    }
  }
*/

export const Row = styled.div`
  display: flex;
  width: 100%;

  ${(props) => {
    const margin = getThemeMarginOnly(props);
    const padding = getThemePaddingOnly(props);
    return `
			${margin}
			${padding}
		`;
  }}
`;
