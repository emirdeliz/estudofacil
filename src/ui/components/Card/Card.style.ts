import styled from 'styled-components';

const CARD_WIDTH = '550px';
const CARD_HEIGHT = '550px';

export const Card = styled.div`
  flex: 1;
  transition: all 0.3s ease-out;
  margin: ${({ theme }) => theme.margin['Sp-3']};
`;
