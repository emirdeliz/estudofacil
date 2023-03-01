import { createGlobalStyle } from 'styled-components';

const BODY_MIN_WIDTH = '300px';

export const Global = createGlobalStyle`
  html, body, body > div, main {
    margin: 0;
    padding: 0;
		width: 100%;
		height: 100%;
  }

  body {
    min-width: ${BODY_MIN_WIDTH};
  }
`;
