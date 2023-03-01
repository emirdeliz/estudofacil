import styled from 'styled-components';
import { fullHorizontalAbsolute, fullVerticalAbsolute } from '@/theme';
import { OverlayProps } from './Overlay';

export const Overlay = styled.div<OverlayProps>`
  ${fullVerticalAbsolute};
  ${fullHorizontalAbsolute};
  z-index: ${({ theme, zIndex }) => zIndex || theme.zIndex.ZI1};
  opacity: ${({ theme }) => theme.opacity.Overlay};
  background-color: ${({ theme }) => theme.color.Black};
`;
