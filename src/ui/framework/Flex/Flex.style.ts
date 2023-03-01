import styled from 'styled-components';
import { getThemePaddingOnly, getThemeMarginOnly } from '@/theme';
import { FlexProps } from './Flex';

const getAlign = (
  center?: boolean,
  end?: boolean,
  spaceBetween?: boolean,
  spaceAround?: boolean,
  initial?: boolean,
  alignBaseline?: boolean
) => {
  switch (true) {
    case center:
      return 'center';
    case spaceBetween:
      return 'space-between';
    case spaceAround:
      return 'space-around';
    case end:
      return 'flex-end';
    case alignBaseline:
      return 'baseline';
    case initial:
      return 'initial';
    default:
      return 'flex-start';
  }
};

export const Container = styled.div<FlexProps & { flexWrap: number }>`
  display: flex;
  flex-wrap: ${({ flexWrap }) => (flexWrap ? 'wrap' : 'inherit')};
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};
  justify-content: ${({
    'justify-center': justifyCenter,
    'justify-end': justifyEnd,
    'justify-space-between': justifySpaceBetween,
    'justify-space-around': justifySpaceAround,
    'justify-initial': justifyInitial,
  }) => {
    return getAlign(
      justifyCenter,
      justifyEnd,
      justifySpaceBetween,
      justifySpaceAround,
      justifyInitial
    );
  }};
  align-items: ${({
    'align-center': alignCenter,
    'align-end': alignEnd,
    'align-space-between': alignSpaceBetween,
    'align-space-around': alignSpaceAround,
    'align-baseline': alignBaseline,
    'align-initial': alignInitial,
  }) => {
    return getAlign(
      alignCenter,
      alignEnd,
      alignSpaceBetween,
      alignSpaceAround,
      alignInitial,
      alignBaseline
    );
  }};
  ${(props) => {
    const margin = getThemeMarginOnly(props);
    const padding = getThemePaddingOnly(props);
    return `
			${margin}
			${padding}
		`;
  }}
  ${({ 'h-full': hFull, 'w-full': wFull }) => `
		${wFull ? 'width: 100%' : ''};
		${hFull ? 'height: 100%' : ''};
	`}
`;
