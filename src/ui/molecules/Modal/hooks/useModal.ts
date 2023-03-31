import { ModalContext } from '@molecules';
import { ReactNode, useContext, useState } from 'react';

export const useModal = () => {
  const {
    modalContent,
    showOverlay,
    showModal,
    setModalContent,
    setShowModal,
    setShowOverlay,
  } = useContext(ModalContext);
  return {
    modalContent,
    showOverlay,
    showModal,
    setModalContent,
    setShowModal,
    setShowOverlay,
  };
};
