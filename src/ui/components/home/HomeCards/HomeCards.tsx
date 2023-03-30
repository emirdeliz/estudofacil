import { memo } from 'react';
import { Col, Row } from '@atoms';
import { Card } from '@templates';
import { t } from '@i18n';

const HomeCards = memo(() => {
  return (
    <Row mt7 mb7>
      <Col.C4 mobilel="12">
        <Card.Icon
          desktop
          title={t('home-page-learn-to-learn')}
          subTitle={t('home-page-promote-autonomy')}
        />
      </Col.C4>
      <Col.C4 mobilel="12">
        <Card.Icon
          users
          title={t('home-page-everyone-partnership')}
          subTitle={t('home-page-all-work')}
          user-group
        />
      </Col.C4>
      <Col.C4 mobilel="12">
        <Card.Icon
          gamepad
          title={t('home-page-learning-is-fun')}
          subTitle={t('home-page-offer-resources-and-games')}
        />
      </Col.C4>
    </Row>
  );
});

export default HomeCards;
