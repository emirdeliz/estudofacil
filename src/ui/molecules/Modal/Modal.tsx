import { Button, Fade, Flex, Link, Overlay } from '@atoms';
import { ZIndex } from '@theme';
import { t } from '@i18n';
import React, { ReactNode, useEffect } from 'react';
import {
  Context as ModalContext,
  Provider as ModalProvider,
} from './context/ModalContext';
import { useModal } from './hooks/useModal';
import * as S from './Modal.style';

export interface ModalProps {
  children?: ReactNode;
  visible?: boolean;
  confirm?: boolean;
  confirmButtonLabel?: ReactNode;
  overlay?: boolean;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
  transparent?: boolean;
  ignorePadding?: boolean;
  ignoreRadius?: boolean;
  headerLeftIcon?: ReactNode;
  zIndex?: ZIndex;
  enableButton?: boolean;
  onClose?: () => void;
  onConfirm?: () => void;
}

export const Modal = ({
  children,
  confirm,
  confirmButtonLabel = t('confirm'),
  transparent,
  headerLeftIcon,
  enableButton = true,
  onClose,
  onConfirm,
  ...props
}: ModalProps) => {
  const { setModalContent } = useModal();
  useEffect(() => {
    setModalContent(
      <S.Modal {...props} transparent={transparent}>
        <Fade>
          <S.Content {...props} confirm={confirm}>
            {headerLeftIcon && (
              <S.HeaderLeftIcon>{headerLeftIcon}</S.HeaderLeftIcon>
            )}
            {onClose && (
              <S.Close>
                <Link.Icon
                  xs
                  close
                  black={!transparent}
                  white={transparent}
                  data-testid="icon-close-modal"
                  onClick={onClose}
                />
              </S.Close>
            )}
            {children}
          </S.Content>
          {confirm && (
            <S.ButtonContainer>
              <Flex alignCenter>
                <Button nm onClick={onConfirm} clickable={enableButton}>
                  {confirmButtonLabel}
                </Button>
              </Flex>
            </S.ButtonContainer>
          )}
        </Fade>
      </S.Modal>,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <></>;
};

Modal.Overlay = (props: ModalProps) => <Modal {...props} overlay />;

Modal.Confirm = (props: ModalProps) => <Modal {...props} confirm />;

export { ModalContext, ModalProvider, useModal };
