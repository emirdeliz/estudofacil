import { buildMargin, buildPadding } from '@theme';
import styled from 'styled-components';

export const Row = styled.div`
  width: 100%;
  ${buildMargin()}
  ${buildPadding()}
`;
