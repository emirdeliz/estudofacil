import { Col, Flex, Image, Row, Title } from '@atoms';
import { t } from '@i18n';
import { HomeSectionSubTitle } from '../HomeSectionSubTitle/HomeSectionSubTitle';
import { HomeSectionTitle } from '../HomeSectionTitle/HomeSectionTitle';
import * as S from './HomeSubjects.style';

interface SubjectProps {
  imageUrl: string;
  children: string;
}

const Subject = ({ imageUrl, children }: SubjectProps) => {
  return (
    <Col.C2 ml3 mb3>
      <S.HomeSubjectsImage>
        <Image alt={children} src={imageUrl} />
      </S.HomeSubjectsImage>
      <Title>{children}</Title>
    </Col.C2>
  );
};

export const HomeSubjects = () => {
  return (
    <Flex mt5 mb3 pl5 pr5 pt5 pb5>
      <HomeSectionTitle>{t('subjects')}</HomeSectionTitle>
      <HomeSectionSubTitle>{t('home-page-here-you-found')}</HomeSectionSubTitle>
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
