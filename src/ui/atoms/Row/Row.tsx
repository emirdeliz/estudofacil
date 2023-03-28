import React, { ReactNode } from 'react';
import { Flex } from '../Flex/Flex';
import * as S from './Row.style';

export interface RowProps {
  children: ReactNode;
}

export const Row = ({ children }: RowProps) => {
  return (
    <S.Row>
      <Flex.Row alignInitial wFull wrap>
        {children}
      </Flex.Row>
    </S.Row>
  );
};
