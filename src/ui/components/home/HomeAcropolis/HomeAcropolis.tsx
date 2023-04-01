import { memo } from 'react';
import { t } from '@i18n';
import { Col, Image, Markdown, Row, Title } from '@atoms';
import { SectionTitle } from '@templates';
import * as S from './HomeAcropolis.style';

const HomeAcropolis = memo(() => {
  return (
    <S.HomeAcropolis>
      <Row mt5 mb3 pl5 pr5 pt5 pb5>
        <Col.C5 tablet="10">
          <SectionTitle>{t('home-page-learn-quality')}</SectionTitle>
          <Markdown fs2 mb4>
            {t('home-page-easy-study-can-be-access')}
          </Markdown>
        </Col.C5>
        <Col.C1 />
        <Col.C6 tablet="10">
          <Image src="/acropolis.png" alt="Acropolis" />
        </Col.C6>
      </Row>
    </S.HomeAcropolis>
  );
});

export default HomeAcropolis;
