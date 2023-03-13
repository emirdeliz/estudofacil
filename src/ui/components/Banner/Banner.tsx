import { memo } from 'react';
import { Button, Flex, Icon } from '@/ui/framework2';
import { Logo } from '../Logo/Logo';
import * as S from './Banner.style';
import { t } from '@/ui/system/i18n';

export const Banner = memo(() => {
  return (
    <S.Banner>
      <S.Top>
        <Flex.Row align-center justify-space-between w-full h-full pl-2 pr-2>
          <Button.Transparent orange>
            <Icon.Menu orange mr-1 />
          </Button.Transparent>
          <Logo />
          <Button.Transparent orange>
            <Icon.User orange mr-1 /> {t('enter')}
          </Button.Transparent>
        </Flex.Row>
      </S.Top>
    </S.Banner>
  );
});
