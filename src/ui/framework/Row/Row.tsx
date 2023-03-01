import { ESThemeMarginProps, ESThemePaddingProps } from '@/theme';
import React, { memo, ReactNode } from 'react';
import { Flex } from '../Flex/Flex';
import * as S from './Row.style';

export interface RowProps extends ESThemeMarginProps, ESThemePaddingProps {
  children: ReactNode;
}

export const Row = memo(({ children, ...props }: RowProps) => {
  return (
    <S.Row {...props}>
      <Flex.Row align-initial w-full wrap>
        {children}
      </Flex.Row>
    </S.Row>
  );
});
