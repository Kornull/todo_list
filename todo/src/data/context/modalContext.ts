import { createContext, useContext } from 'react';

export type ModalInfo = {
  open: boolean;
  text: string | null;
  task?: boolean;
  edit?: boolean;
};

export const InitialState: ModalInfo = {
  open: false,
  text: null,
};

export type ModalSettings = {
  modal: ModalInfo;
  setModal: (data: ModalInfo) => void;
};

export const InitialModal: ModalSettings = {
  modal: {
    open: false,
    text: null,
  },
  setModal: () => {},
};

export const ContextModal = createContext(InitialModal);
export const useModalContext = () => useContext(ContextModal);
