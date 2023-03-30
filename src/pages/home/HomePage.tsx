import { Banner, Footer } from '@templates';
import { Flex, Image } from '@atoms';
import {
  HomeAcropolis,
  HomeCards,
  HomeEasyStudyTeachers,
  HomeSubjects,
} from './components';

const HomePage = () => {
  return (
    <Flex.Col wFull hFull>
      <Banner />
      <Image src="/astronauta.png" alt="Astronauta" />
      <HomeCards />
      <HomeAcropolis />
      <HomeSubjects />
      <HomeEasyStudyTeachers />
      <Footer />
    </Flex.Col>
  );
};

export default HomePage;
