import { Banner, Card } from '@templates';
import { Flex, Image } from '@atoms';
import { HomeAcropolis } from './components/HomeAcropolis/HomeAcropolis';
import { HomeCards, HomeSubjects } from './components';

const HomePage = () => {
  return (
    <Flex.Col wFull hFull>
      <Banner />
      <Image src="/astronauta.png" alt="Astronauta" />
      <HomeCards />
      <HomeAcropolis />
      <HomeSubjects />
    </Flex.Col>
  );
};

export default HomePage;
