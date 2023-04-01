import { ReactNode, useMemo, useState } from 'react';
import { AppTheme, AppThemeColorDark, AppThemeColorLight } from '@theme';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';
import { Reset } from 'styled-reset';
import { Flex, LoadingProvider } from '@atoms';
import GlobalStyle from './global.style';
import './_app.css';
import { ModalGlobal, ModalProvider } from '@molecules';
import { Banner, Footer } from '@templates';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Flex.Col wFull hFull>
      <Banner />
      {children}
      <Footer />
    </Flex.Col>
  );
};

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
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ModalProvider>
        </LoadingProvider>
      </ThemeProvider>
    </main>
  );
};

export default App;
