import React, { memo, ReactNode } from 'react';
import * as S from './Title.style';
import {
  ESThemeColorProps,
  ESThemeFontSizeProps,
  ESThemeFontWeightProps,
  ESThemeLineHeightProps,
  ESThemeDisplayProps,
  ESThemeMarginProps,
} from '@/theme';

export interface TitleProps
  extends ESThemeColorProps,
    ESThemeFontSizeProps,
    ESThemeFontWeightProps,
    ESThemeLineHeightProps,
    ESThemeMarginProps,
    ESThemeDisplayProps {
  children?: string | number | ReactNode;
  capitalize?: boolean;
  bold?: boolean;
  uppercase?: boolean;
  error?: boolean;
  'cursor-pointer'?: boolean;
  'no-wrap'?: boolean;
  ellipsis?: boolean;
  center?: boolean;
  justify?: boolean;
  role?: string;
}

const TitleBase = memo((props: TitleProps) => {
  return <S.Title {...props}>{props.children}</S.Title>;
});

export const Title = (props: TitleProps) => <TitleBase {...props} />;
Title.Fs0 = (props: TitleProps) => <Title {...props} fs-0 />;
Title.Fs1 = (props: TitleProps) => <Title {...props} fs-1 />;
Title.Fs2 = (props: TitleProps) => <Title {...props} fs-2 />;
Title.Fs3 = (props: TitleProps) => <Title {...props} fs-3 />;
Title.Fs4 = (props: TitleProps) => <Title {...props} fs-4 />;
Title.Fs5 = (props: TitleProps) => <Title {...props} fs-5 />;
Title.Fs6 = (props: TitleProps) => <Title {...props} fs-6 />;
