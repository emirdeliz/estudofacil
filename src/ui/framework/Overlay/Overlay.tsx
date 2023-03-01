import { ESThemeZIndex } from '@/theme';
import React, { memo, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import * as S from './Overlay.style';

export interface OverlayProps {
  children?: ReactNode;
  visible?: boolean;
  maxWidth?: string;
  maxHeight?: string;
  zIndex?: ESThemeZIndex;
  onClick?: () => void;
}

export const Overlay = memo(({ children, visible, ...props }: OverlayProps) => {
  return visible
    ? createPortal(<S.Overlay {...props}>{children}</S.Overlay>, document.body)
    : null;
});
