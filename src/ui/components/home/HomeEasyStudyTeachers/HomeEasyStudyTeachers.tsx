import { memo } from 'react';
import { Flex } from '@atoms';
import { t } from '@i18n';
import { SectionTitle, SectionSubTitle } from '@templates';
import * as S from './HomeEasyStudyTeachers.style';

const HomeEasyStudyTeachers = memo(() => {
  return (
    <S.HomeEasyStudyTeachers>
      <Flex mb3 pl5 pr5 pt5 pb5>
        <SectionTitle>{t('home-page-easy-study-teachers')}</SectionTitle>
        <SectionSubTitle>
          {t('home-page-our-teachers-have-been-selected')}
        </SectionSubTitle>
      </Flex>
    </S.HomeEasyStudyTeachers>
  );
});

export default HomeEasyStudyTeachers;
