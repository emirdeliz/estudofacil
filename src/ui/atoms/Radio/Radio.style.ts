import { centerAbsolute } from '@/theme';
import styled from 'styled-components';

interface RadioProps {
  checked?: boolean;
  clickable?: boolean;
}

const RADIO_WIDTH = '20px';

export const Radio = styled.div<RadioProps>`
  position: relative;
  width: ${RADIO_WIDTH};
  padding: ${({ theme }) => theme.padding.Sm};
  border: solid 1px ${({ theme }) => theme.colors.DarkGreen};
  border-radius: ${({ theme }) => theme.radius.Nm};
  ${({ theme, clickable }) => `
    opacity: ${clickable !== false ? 1 : theme.opacity.Disable};
    cursor: ${clickable !== false ? 'pointer' : 'not-allowed'};
  `};

  &:before {
    content: '  ';
    transition: opacity 0.3s linear;
    ${centerAbsolute};
    padding: ${({ theme }) => theme.padding.Xs};
    background-color: ${({ theme }) => theme.colors.DarkGreen};
    border-radius: ${({ theme }) => theme.radius.Nm};
    opacity: ${({ checked }) => (checked ? 1 : 0)};
  }
`;
