import { Banner, Card } from '@/components';
import { Flex, Row, Col } from '@/framework';
import Image from 'next/image';
import { t } from '@/i18n';
import AstronautStyle from './HomePage.style';

// bta 16

const HomePage = () => {
  return (
    <Flex.Col w-full h-full>
      <Banner />
      <AstronautStyle>
        <Image
          src="/astronauta.png"
          alt="Astronauta"
          fill
        />
      </AstronautStyle>
      <Row mt-4>
        <Col.C4 tablet="4" mob-l="12">
          <Card
            title={t('home-page-learn-to-learn')}
            subTitle={t('home-page-promote-autonomy')}
            desktop
          />
        </Col.C4>
        <Col.C4 tablet="4" mob-l="12">
          <Card
            title={t('home-page-everyone-partnership')}
            subTitle={t('home-page-all-work')}
            user-group
          />
        </Col.C4>
        <Col.C4 tablet="4" mob-l="12">
          <Card
            title={t('home-page-learning-is-fun')}
            subTitle={t('home-offer-resources-and-games')}
            game-controller
          />
        </Col.C4>
      </Row>
    </Flex.Col>
  );
};

export default HomePage;