import { Flex, Image } from '@atoms';
import {
  HomeAcropolis,
  HomeCards,
  HomeEasyStudyTeachers,
  HomeSubjects,
} from '@components';

const HomePage = () => {
  return (
    <Flex.Col>
      <Image src="/flower.png" alt="Astronauta" />
      <HomeCards />
      <HomeAcropolis />
      <HomeSubjects />
      <HomeEasyStudyTeachers />
    </Flex.Col>
  );
};

export default HomePage;
