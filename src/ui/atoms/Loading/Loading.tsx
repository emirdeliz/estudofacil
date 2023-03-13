import React from 'react';
import { ThemeConsumer } from 'styled-components';
import { Overlay } from '..';
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

export const Loading = ({ circle, global, center }: LoadingProps) => {
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
            {(theme) => <Overlay visible zIndex={theme.zIndex.Nm} />}
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
};

Loading.Global = (props: LoadingProps) => <Loading {...props} global />;

Loading.Circle = (props: LoadingProps) => <Loading {...props} circle />;

export { LoadingContext, LoadingProvider, useLoading };
