import { createContext, useContext } from 'react';

export type ModalInfo = {
  open: boolean;
  text: string;
  edit?: boolean;
};

export const InitialState: ModalInfo = {
  open: false,
  text: '',
};

export type ModalSettings = {
  modal: ModalInfo;
  setModal: (data: ModalInfo) => void;
};

export const InitialModal: ModalSettings = {
  modal: {
    open: false,
    text: '',
  },
  setModal: () => {},
};

export const ContextModal = createContext(InitialModal);
export const useModalContext = () => useContext(ContextModal);
