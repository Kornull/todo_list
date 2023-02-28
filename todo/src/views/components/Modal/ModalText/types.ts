import { ChangeEvent } from 'react';

export type ModalTypes = {
  title: string;
  isEdit: boolean;
};

export enum MODAL_VALUE {
  CHANGE = 'Change task:',
  TASK = 'Your task:',
  PLACEHOLDER = 'Replace task...',
  ENTER = 'Enter',
}

export type ModalTextAreaTypes = {
  text: string;
  handleChange: (ev: ChangeEvent<HTMLTextAreaElement>) => void;
  addTask: () => void;
};