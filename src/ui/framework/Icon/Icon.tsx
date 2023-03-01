import { memo, useCallback, useEffect, useState } from 'react';
import { ESThemeColorProps, ESThemePaddingProps, ESThemeMarginProps } from '@/theme';
import * as S from './Icon.style';
import { ESThemeSizeProps } from 'ui/theme/size';

export interface IconPropsBaseProps { 
  user?: boolean;
  menu?: boolean;
  desktop?: boolean;
  'game-controller'?: boolean;
  'user-group'?: boolean;
}

export interface IconProps extends
  IconPropsBaseProps, ESThemePaddingProps, ESThemeMarginProps, ESThemeColorProps, ESThemeSizeProps {
}

const IconBase = memo(({ ...props }: IconProps) => {
  const [svg, setSvg] = useState<string>('');
  const getIcon = useCallback((props: IconPropsBaseProps) => {
    const keys = ['user', 'menu', 'desktop', 'game-controller', 'user-group'];
    return Object.keys(props).find((prop) => {
      return props[prop as keyof typeof props] && keys.includes(prop);
    });
  }, []);

  const initializeIcon = useCallback(async () => {
    const iconKey = getIcon(props);
    if (!iconKey) { 
      return;
    }
    const svgContent = await (await fetch(`/assets/${iconKey}.svg`)).text();
    setSvg(svgContent);
  }, [getIcon, props]);

  useEffect(() => { 
   initializeIcon();
  }, [initializeIcon]);
  return (
    <S.Icon {...props} dangerouslySetInnerHTML={{__html: svg}} />
  );
});

export const Icon = (props: IconProps) => <IconBase {...props} />;
Icon.User = (props: IconProps) => <Icon {...props} user />;
Icon.Menu = (props: IconProps) => <Icon {...props} menu />;
Icon.Desktop = (props: IconProps) => <Icon {...props} desktop />;
Icon.GameController = (props: IconProps) => <Icon {...props} game-controller />;
Icon.UserGroup = (props: IconProps) => <Icon {...props} user-group />;