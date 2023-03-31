import { memo, useState } from 'react';
import { Flex, Hr, Icon, Link, Title } from '@atoms';
import { Logo } from '../Logo/Logo';
import * as S from './Banner.style';
import { t } from '@i18n';
import { Form, FormGroup, InputForm, Modal, useModal } from '@molecules';
import { InputFormLabel } from '@organisms';

export const Banner = () => {
  const { setShowModal } = useModal();
  return (
    <S.Banner>
      <S.Top>
        <Flex.Row alignCenter justifySpaceAround wFull hFull pl2 pr2>
          <Link>
            <Icon.Menu orange sm />
          </Link>
          <Logo />
          <Link>
            <Icon.User orange sm /> {t('enter')}
          </Link>
          <Link onClick={() => setShowModal(true)}>
            <Icon.CartArrowDown orange sm /> {t('purchase')}
          </Link>
        </Flex.Row>
      </S.Top>
      <Modal.Confirm
        maxWidth="500px"
        maxHeight="400px"
        overlay
        onClose={() => setShowModal(false)}
      >
        <Title semibold>{t('new-register')}</Title>
        <Form>
          <InputForm value="AAA" onChange={() => {}}>
            {t('name')}
          </InputForm>
          <InputForm value="BBB" onChange={() => {}}>
            {t('email')}
          </InputForm>
          <InputForm value="CCC" onChange={() => {}} password>
            {t('password')}
          </InputForm>
        </Form>
      </Modal.Confirm>
    </S.Banner>
  );
};
