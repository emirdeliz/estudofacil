import React, { memo } from 'react';
import * as S from './ProgressBar.style';

export interface ProgressBarProps {
  duration?: number;
}

export const ProgressBar = memo((props: ProgressBarProps) => {
  return (
    <S.Container>
      <S.ProgressBar {...props} />
    </S.Container>
  );
});
