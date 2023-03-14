import { Flex, Icon, IconOptions, Title } from '@/atoms';
import { ReactNode } from 'react';
import * as S from './Card.style';

export interface CardProps extends IconOptions {
  title: ReactNode;
  subTitle: ReactNode;
}

export const Card = ({ title, subTitle, ...props }: CardProps) => {
  return (
    <S.Card>
      <Flex.Col alignCenter mt3>
        <Icon {...props} orange />
        <Title center mt3 black semibold>
          {title}
        </Title>
        <Title center mt3 lh3>
          {subTitle}
        </Title>
      </Flex.Col>
    </S.Card>
  );
};
