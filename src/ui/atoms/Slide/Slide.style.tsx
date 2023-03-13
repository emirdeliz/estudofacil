import styled from 'styled-components';

export const Slide = styled.div`
  display: flex;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
`;

interface ItemProps {
  current: boolean;
}

export const Item = styled.div<ItemProps>`
  min-width: 100%;
  transition: all 0.5s ease-in;

  ${({ current }) =>
    !current
      ? `
    max-height: 0px;
    overflow: hidden;
    display: none;
  `
      : `
    max-height: 1000px;
  `}
`;
