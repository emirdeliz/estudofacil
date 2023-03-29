import { Banner, Card } from '@templates';
import { Flex, Row, Col } from '@atoms';
import Image from 'next/image';
import { t } from '@i18n';
import AstronautStyle from './HomePage.style';

const HomePage = () => {
  return (
    <Flex.Col wFull hFull>
      <Banner />
      <AstronautStyle>
        <Image src="/astronauta.png" alt="Astronauta" fill />
      </AstronautStyle>
      <Row>
        <Col.C4 mobilel="12">
          <Card
            desktop
            title={t('home-page-learn-to-learn')}
            subTitle={t('home-page-promote-autonomy')}
          />
        </Col.C4>
        <Col.C4 mobilel="12">
          <Card
            users
            title={t('home-page-everyone-partnership')}
            subTitle={t('home-page-all-work')}
            user-group
          />
        </Col.C4>
        <Col.C4 mobilel="12">
          <Card
            gamepad
            title={t('home-page-learning-is-fun')}
            subTitle={t('home-offer-resources-and-games')}
          />
        </Col.C4>
      </Row>
    </Flex.Col>
  );
};

export default HomePage;
