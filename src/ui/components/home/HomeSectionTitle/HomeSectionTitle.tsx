import { Title } from '@atoms';
import { ReactNode } from 'react';

interface HomeSectionTitleProps {
  children: ReactNode;
}

const HomeSectionTitle = ({ children }: HomeSectionTitleProps) => {
  return (
    <Title mb3 fs6 lh6 semibold>
      {children}
    </Title>
  );
};

export default HomeSectionTitle;
