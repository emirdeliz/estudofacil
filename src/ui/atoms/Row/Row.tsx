import { MarginProps, PaddingProps } from '@theme';
import React, { ReactNode } from 'react';
import { Flex } from '../Flex/Flex';
import * as S from './Row.style';

export interface RowProps extends MarginProps, PaddingProps {
  children: ReactNode;
}

export const Row = ({ children, ...props }: RowProps) => {
  return (
    <S.Row {...props}>
      <Flex.Row alignInitial wFull wrap>
        {children}
      </Flex.Row>
    </S.Row>
  );
};
