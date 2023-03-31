import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';

interface ModalContextContent {
  showModal: boolean;
  showOverlay: boolean;
  modalContent: ReactNode;
  setModalContent: Dispatch<SetStateAction<ReactNode>>;
  setShowOverlay: Dispatch<SetStateAction<boolean>>;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

export const Context = createContext<ModalContextContent>({
  showModal: false,
  showOverlay: true,
  modalContent: <></>,
  setModalContent: () => '',
  setShowModal: () => '',
  setShowOverlay: () => '',
});

interface ModalProviderProps {
  children: ReactNode;
}

export const Provider = ({ children }: ModalProviderProps) => {
  const [modalContent, setModalContent] = useState<ReactNode>();
  const [showOverlay, setShowOverlay] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <Context.Provider
      value={{
        showModal,
        modalContent,
        showOverlay,
        setModalContent,
        setShowOverlay,
        setShowModal,
      }}
    >
      {children}
    </Context.Provider>
  );
};
