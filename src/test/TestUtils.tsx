import { ReactElement, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import { LoadingProvider } from '@/framework';
import { ESThemeColorDark, ESTheme } from '@/theme';
import 'jest-styled-components';

interface ThemeTestUtilsProps {
  children: ReactNode;
}

export const ThemeTestUtils = ({ children }: ThemeTestUtilsProps) => {
  return (
    <ThemeProvider
      theme={{
        ...ESTheme,
        color: ESThemeColorDark,
      }}
    >
      <LoadingProvider>{children}</LoadingProvider>
    </ThemeProvider>
  );
};

const customRender = (ui: ReactElement, theme?: typeof ESTheme) => {
  return render(ui, { wrapper: ThemeTestUtils, ...theme });
};

export * from '@testing-library/react';
export { customRender as render };
