import styled from 'styled-components';
import { buildMargin, buildPadding, getFontSize, getLineHeight } from '@theme';
import { MarkdownProps } from './Markdown';

export const P = styled.p<MarkdownProps>`
  font-size: ${(props) => getFontSize(props)};
  line-height: ${(props) => getLineHeight(props)};
  ${buildMargin()}
  ${buildPadding()}
`;
