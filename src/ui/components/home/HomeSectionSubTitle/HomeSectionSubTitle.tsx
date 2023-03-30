import { Title } from '@atoms';
import { ReactNode } from 'react';

interface HomeSectionSubTitleProps {
  children: ReactNode;
}

const HomeSectionSubTitle = ({ children }: HomeSectionSubTitleProps) => {
  return (
    <Title fs2 mb3>
      {children}
    </Title>
  );
};

export default HomeSectionSubTitle;
