import {
  ESThemeColorProps,
  ESThemeFontSizeProps,
  ESThemeMarginProps,
  ESThemePaddingProps,
  ESThemeType,
} from '@/theme';
import { memo, MouseEventHandler, ReactNode } from 'react';
import { Title } from '../Title/Title.style';
import * as S from './Button.style';

export interface ButtonProps
  extends ESThemePaddingProps,
    ESThemeMarginProps,
    ESThemeFontSizeProps,
    ESThemeColorProps,
    ESThemeType {
  children?: ReactNode;
  clickable?: boolean;
  rounded?: boolean;
  transparent?: boolean;
  outlined?: boolean;
  link?: boolean;
  title?: string;
  type?: 'submit' | 'reset' | 'button';
  'max-width'?: string;
  'w-full'?: boolean;
  'data-test-id'?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const ButtonBase = memo(
  ({
    children,
    'data-test-id': dataTestId = 'button-atom',
    type = 'button',
    clickable = true,
    onClick,
    title,
    ...props
  }: ButtonProps) => {
    return (
      <S.Button
        {...props}
        title={title}
        disabled={!clickable}
        clickable={clickable}
        data-testid={dataTestId}
        type={type}
        onClick={(e) => {
          if (clickable && onClick) {
            onClick(e);
          }
        }}
      >
        <Title flex cursor-pointer {...props}>{children}</Title>
      </S.Button>
    );
  }
);

export const Button = (props: ButtonProps) => <ButtonBase {...props} />;
Button.Outlined = (props: ButtonProps) => <Button {...props} outlined />;
Button.Rounded = (props: ButtonProps) => <Button {...props} rounded />;
Button.Transparent = (props: ButtonProps) => <Button {...props} transparent />;