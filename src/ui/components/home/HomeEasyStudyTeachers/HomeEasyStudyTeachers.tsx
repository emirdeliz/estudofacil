import { memo } from 'react';
import { Flex } from '@atoms';
import { t } from '@i18n';
import HomeSectionTitle from '../HomeSectionTitle/HomeSectionTitle';
import HomeSectionSubTitle from '../HomeSectionSubTitle/HomeSectionSubTitle';
import * as S from './HomeEasyStudyTeachers.style';

const HomeEasyStudyTeachers = memo(() => {
  return (
    <S.HomeEasyStudyTeachers>
      <Flex mb3 pl5 pr5 pt5 pb5>
        <HomeSectionTitle>
          {t('home-page-easy-study-teachers')}
        </HomeSectionTitle>
        <HomeSectionSubTitle>
          {t('home-page-our-teachers-have-been-selected')}
        </HomeSectionSubTitle>
      </Flex>
    </S.HomeEasyStudyTeachers>
  );
});

export default HomeEasyStudyTeachers;
