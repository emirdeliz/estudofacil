import React, { memo, ReactNode } from 'react';
import {
  ESThemeMarginProps,
  ESThemeDisplayProps,
  ESThemePaddingProps,
} from '@/theme';
import * as S from './Flex.style';

export interface FlexProps
  extends ESThemePaddingProps,
    ESThemeMarginProps,
    ESThemeDisplayProps {
  children: ReactNode;
  'justify-start'?: boolean;
  'justify-end'?: boolean;
  'justify-center'?: boolean;
  'justify-space-between'?: boolean;
  'justify-space-around'?: boolean;
  'justify-initial'?: boolean;
  'align-start'?: boolean;
  'align-end'?: boolean;
  'align-center'?: boolean;
  'align-space-between'?: boolean;
  'align-space-around'?: boolean;
  'align-baseline'?: boolean;
  'align-initial'?: boolean;
  col?: boolean;
  row?: boolean;
  wrap?: boolean;
  'w-full'?: boolean;
  'h-full'?: boolean;
  role?: string;
}

const FlexBase = memo(({ wrap, ...props }: FlexProps) => {
  return (
    <S.Container {...props} flexWrap={wrap ? 1 : 0}>
      {props.children}
    </S.Container>
  );
});

export const Flex = (props: FlexProps) => <FlexBase {...props} />;

Flex.Row = (props: FlexProps) => {
  return <Flex {...props} row />;
};

Flex.Col = (props: FlexProps) => {
  return <Flex {...props} col />;
};

Flex.Center = (props: FlexProps) => {
  return <Flex {...props} justify-center align-center />;
};
