import { useMemo, useState } from 'react';
import { ESTheme, ESThemeColorDark, ESThemeColorLight } from '@/theme';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';
import { Poppins } from '@next/font/google';
import { Reset } from 'styled-reset';
import { LoadingProvider } from '@/framework';
import * as S from './global.style';
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
      <S.Global />
      <ThemeProvider theme={theme}>
        <LoadingProvider>
          <Component {...pageProps} />
        </LoadingProvider>
      </ThemeProvider>
    </main>
  );
};

export default App;
