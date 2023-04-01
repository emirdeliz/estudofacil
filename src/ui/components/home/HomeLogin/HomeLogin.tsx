import { memo } from 'react';
import { Flex, Title } from '@atoms';
import { t } from '@i18n';
import { Form, InputForm, Modal, useModal } from '@molecules';

const HomeLogin = memo(() => {
  const { setShowModal } = useModal();
  return (
    <Modal.Confirm
      maxWidth="500px"
      maxHeight="400px"
      overlay
      onClose={() => setShowModal(false)}
    >
      <Title semibold>{t('login')}</Title>
      <Form>
        <InputForm value="BBB" onChange={() => {}}>
          {t('email')}
        </InputForm>
        <InputForm value="CCC" onChange={() => {}} password>
          {t('password')}
        </InputForm>
      </Form>
    </Modal.Confirm>
  );
});

export default HomeLogin;
