import { Overlay } from '@atoms';
import React from 'react';
import { createPortal } from 'react-dom';
import {
  Context as ModalContext,
  Provider as ModalProvider,
} from './context/ModalContext';
import { Modal } from './Modal';
import { useModal } from './hooks/useModal';

export const ModalGlobal = () => {
  const { modalContent, showModal, showOverlay } = useModal();
  if (!showModal) {
    return null;
  }

  const content = createPortal(modalContent, document.body);
  return showOverlay ? <Overlay visible>{content}</Overlay> : content;
};

export { Modal, ModalContext, ModalProvider, useModal };
