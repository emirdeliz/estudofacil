import 'styled-components';
import { ESThemeColorDefinition } from 'theme/color';
import { ESThemeDisplayDefinition } from 'theme/display';
import { ESThemeFontSizeDefinition } from 'theme/font-size';
import { ESThemeSizeDefinition } from 'theme/size';
import { ESThemeLineHeightDefinition } from 'theme/lineHeight';
import { ESThemeOpacityDefinition } from 'theme/opacity';
import { ESThemeRadiusDefinition } from 'theme/radius';
import { ESThemeZIndexDefinition } from 'theme/zIndex';
import { ESThemeMarginDefinition } from 'ui/theme/margin';
import { ESThemePaddingDefinition } from 'ui/theme/padding';
import { ESThemeSpaceDefinition } from 'ui/theme/space';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: ESThemeColorDefinition;
    fontSize: ESThemeFontSizeDefinition;
    fontWeight: ESThemeFontWeightDefinition;
    radius: ESThemeRadiusDefinition;
    opacity: ESThemeOpacityDefinition;
    display: ESThemeDisplayDefinition;
    lineHeight: ESThemeLineHeightDefinition;
    zIndex: ESThemeZIndexDefinition;
    margin: ESThemeMarginDefinition;
    padding: ESThemePaddingDefinition;
    space: ESThemeSpaceDefinition;
    size: ESThemeSizeDefinition;
  }
}
