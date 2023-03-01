import { Flex, Icon, IconPropsBaseProps, Title } from '@/framework';
import { ReactNode } from 'react';
import * as S from './Card.style';

export interface CardProps extends IconPropsBaseProps { 
  title: ReactNode;
  subTitle: ReactNode;
}

export const Card = ({ title, subTitle, ...props }: CardProps) => {
  return (
    <S.Card>
      <Flex.Col align-center>
        <Icon {...props} orange Sz-5/>
        <Title.Fs4 fw-4 center mt-3 black>{title}</Title.Fs4>
        <Title.Fs3 fw-1 center mt-3 lh-3>{subTitle}</Title.Fs3>
      </Flex.Col>
    </S.Card>
  );
};
