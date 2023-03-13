import styled from 'styled-components';
import { ColProps } from './Col';

const getColSize = ({
  c1,
  c2,
  c3,
  c4,
  c5,
  c6,
  c7,
  c8,
  c9,
  c10,
  c11,
  c12,
}: ColProps) => {
  switch (true) {
    case c1:
      return '8.333333';
    case c2:
      return '16.666667';
    case c3:
      return '25';
    case c4:
      return '33.333333';
    case c5:
      return '41.666667';
    case c6:
      return '50';
    case c7:
      return '58.333333';
    case c8:
      return '66.666667';
    case c9:
      return '75';
    case c10:
      return '83.333333';
    case c11:
      return '91.666667';
    case c12:
      return '100';
    default:
      break;
  }
};

export const Col = styled.div.attrs((props) => {
  const size = getColSize(props);
  return {
    'data-size': size,
  };
})<ColProps>`
  width: 100%;
  min-height: 1px;

  ${({ auto, ...props }) => {
    if (auto) {
      return `
        -ms-flex-preferred-size: 0;
        flex-basis: 0;
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        max-width: 100%;
      `;
    }

    const size = getColSize(props);
    return `
      flex: 0 0 ${size}%;
      max-width ${size}%;
    `;
  }}
`;
