import { useMemo, useState } from 'react';
import { ESTheme, ESThemeColorDark, ESThemeColorLight } from 'ui/system/theme';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';
import { Reset } from 'styled-reset';
import { LoadingProvider } from 'ui/framework2';
import GlobalStyle from './global.style';
import './_app.css';

const App = ({ Component, pageProps }: AppProps) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const themeToggler = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = useMemo<DefaultTheme>(() => {
    return {
      ...ESTheme,
      color: isDarkMode ? ESThemeColorDark : ESThemeColorLight,
    };
  }, [isDarkMode]);

  return (
    <main>
      <Reset />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <LoadingProvider>
          <Component {...pageProps} />
        </LoadingProvider>
      </ThemeProvider>
    </main>
  );
};

export default App;
