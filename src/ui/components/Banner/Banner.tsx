import { memo } from 'react';
import { Button, Flex, Icon } from '@/atoms';
import { Logo } from '../Logo/Logo';
import * as S from './Banner.style';
import { t } from '@/i18n';

export const Banner = memo(() => {
  return (
    <S.Banner>
      <S.Top>
        {/* <Flex.Row align-center justify-space-between w-full h-full pl-2 pr-2>
          <Button >
            <Icon.Menu orange mr-1 />
          </Button>
          <Logo />
          <Button orange>
            <Icon.User orange mr-1 /> {t('enter')}
          </Button>
        </Flex.Row> */}
      </S.Top>
    </S.Banner>
  );
});
