import { DefaultTheme } from 'styled-components';

export enum ESThemeDisplay {
  Block = 'block',
  InlineBlock = 'inline-block',
  Inline = 'inline',
  Flex = 'flex',
  Initial = 'initial',
}

export interface ESThemeDisplayDefinition {
  Block: ESThemeDisplay.Block;
  InlineBlock: ESThemeDisplay.InlineBlock;
  Inline: ESThemeDisplay.Inline;
  Flex: ESThemeDisplay.Flex;
  Initial: ESThemeDisplay.Initial;
}

export interface ESThemeDisplayProps {
  block?: boolean;
  'inline-block'?: boolean;
  inline?: boolean;
  flex?: boolean;
  initial?: boolean;
}

export const getThemeDisplay = ({
  block,
  'inline-block': inlineBlock,
  inline,
  flex,
  initial,
  theme,
}: ESThemeDisplayProps & {
  theme: DefaultTheme;
}) => {
  switch (true) {
    case block:
      return theme.display.Block;
    case inlineBlock:
      return theme.display.InlineBlock;
    case inline:
      return theme.display.Inline;
    case flex:
      return theme.display.Flex;
    case initial:
      return theme.display.Initial;
    default:
      return theme.display.InlineBlock;
  }
};
