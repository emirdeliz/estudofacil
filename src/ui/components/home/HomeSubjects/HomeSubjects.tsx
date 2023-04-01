import { Col, Flex, Image, Row, Title } from '@atoms';
import { t } from '@i18n';
import { SectionTitle, SectionSubTitle } from '@templates';
import * as S from './HomeSubjects.style';

interface SubjectProps {
  imageUrl: string;
  children: string;
}

const Subject = ({ imageUrl, children }: SubjectProps) => {
  return (
    <Col.C2 mr3 mb3 tablet="12">
      <S.HomeSubjectsImage>
        <Image alt={children} src={imageUrl} />
      </S.HomeSubjectsImage>
      <Title>{children}</Title>
    </Col.C2>
  );
};

const HomeSubjects = () => {
  return (
    <Flex mt5 mb3 pl5 pr5 pt5 pb5>
      <SectionTitle>{t('subjects')}</SectionTitle>
      <SectionSubTitle>{t('home-page-here-you-found')}</SectionSubTitle>
      <Row>
        <Subject imageUrl="/sciences.png">{`${t(
          'sciences',
        )} – 6º Ano`}</Subject>
        <Subject imageUrl="/geography.png">{`${t(
          'geography',
        )} – 6º Ano`}</Subject>
        <Subject imageUrl="/portuguese-language.png">
          {`${t('portuguese-language')} – 6º Ano`}
        </Subject>
        <Subject imageUrl="/english-language.png">{`${t(
          'english-language',
        )} – 6º Ano`}</Subject>
      </Row>
    </Flex>
  );
};

export default HomeSubjects;
