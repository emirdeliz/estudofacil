import { useMemo, useState } from 'react';
import { AppTheme, AppThemeColorDark, AppThemeColorLight } from '@theme';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';
import { Reset } from 'styled-reset';
import { LoadingProvider } from '@atoms';
import GlobalStyle from './global.style';
import './_app.css';
import { ModalGlobal, ModalProvider } from '@molecules';

const App = ({ Component, pageProps }: AppProps) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const themeToggler = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = useMemo<DefaultTheme>(() => {
    return {
      ...AppTheme,
      color: isDarkMode ? AppThemeColorDark : AppThemeColorLight,
    };
  }, [isDarkMode]);

  return (
    <main>
      <Reset />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <LoadingProvider>
          <ModalProvider>
            <ModalGlobal />
            <Component {...pageProps} />
          </ModalProvider>
        </LoadingProvider>
      </ThemeProvider>
    </main>
  );
};

export default App;
