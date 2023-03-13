import React, { ReactNode } from 'react';
import * as S from './Col.style';

export interface ColProps {
  c1?: boolean;
  c2?: boolean;
  c3?: boolean;
  c4?: boolean;
  c5?: boolean;
  c6?: boolean;
  c7?: boolean;
  c8?: boolean;
  c9?: boolean;
  c10?: boolean;
  c11?: boolean;
  c12?: boolean;
  auto?: boolean;
  children?: ReactNode;
}

export const Col = ({ children, ...props }: ColProps) => {
  return <S.Col {...props}>{children}</S.Col>;
};

Col.C1 = (props: ColProps) => <Col {...props} c1 />;
Col.C2 = (props: ColProps) => <Col {...props} c2 />;
Col.C3 = (props: ColProps) => <Col {...props} c3 />;
Col.C4 = (props: ColProps) => <Col {...props} c4 />;
Col.C5 = (props: ColProps) => <Col {...props} c5 />;
Col.C6 = (props: ColProps) => <Col {...props} c6 />;
Col.C7 = (props: ColProps) => <Col {...props} c7 />;
Col.C8 = (props: ColProps) => <Col {...props} c8 />;
Col.C9 = (props: ColProps) => <Col {...props} c9 />;
Col.C10 = (props: ColProps) => <Col {...props} c10 />;
Col.C11 = (props: ColProps) => <Col {...props} c11 />;
Col.C12 = (props: ColProps) => <Col {...props} c12 />;
Col.Auto = (props: ColProps) => <Col {...props} auto />;
