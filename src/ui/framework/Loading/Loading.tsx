import React, { memo } from 'react';
import { ThemeConsumer } from 'styled-components';
import { Overlay } from '../Overlay/Overlay';
import {
  Context as LoadingContext,
  Provider as LoadingProvider,
} from './context/LoadingContext';
import { useLoading } from './hooks/useLoading';
import * as S from './Loading.style';

export interface LoadingProps {
  circle?: boolean;
  center?: boolean;
  global?: boolean;
}

export const LoadingBase = memo(({ circle, global, center }: LoadingProps) => {
  const { hasLoadingActive } = useLoading();
  return (
    <S.Container center={center || global}>
      {circle && (
        <S.SvgCircle>
          <S.Circle />
          <S.Circle increase />
        </S.SvgCircle>
      )}
      {global && hasLoadingActive && (
        <>
          <ThemeConsumer>
            {(theme) => <Overlay visible zIndex={theme.zIndex.ZI1} />}
          </ThemeConsumer>
          <S.Blink>
            <S.SvgFull>
              <S.RectFull />
              <S.PathFull />
            </S.SvgFull>
          </S.Blink>
        </>
      )}
    </S.Container>
  );
});

export const Loading = (props: LoadingProps) => <LoadingBase {...props} />;
Loading.Global = (props: LoadingProps) => <Loading {...props} global />;
Loading.Circle = (props: LoadingProps) => <Loading {...props} circle />;

export { LoadingContext, LoadingProvider, useLoading };
