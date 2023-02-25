import { ChangeEvent, useCallback, useState } from 'react';

import { useModalContext } from '../../../../data/context/modalContext';
import useToDoStore from '../../../../data/store/useToDoStore';

import { ModalTypes } from './types';

import styles from '../Modal.module.scss';

enum MODAL_VALUE {
  CHANGE = 'Change task:',
  TASK = 'Your task:',
  PLACEHOLDER = 'Replace task...',
  ENTER = 'Enter',
}

export const ModalTask = ({ title, isEdit }: ModalTypes) => {
  const [updateTask] = useToDoStore((state) => [state.updateTask]);
  const { modal, setModal } = useModalContext();
  const { text, id } = modal;

  const [textValue, setTextValue] = useState(title);

  const addTask = useCallback(() => {
    if (textValue.trim().length) {
      updateTask(id, textValue);
      setModal({
        text: '',
        id: '',
        edit: false,
        open: false,
      });
    }
  }, [textValue]);

  const handleChange = (ev: ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(ev.target.value);
    setModal({
      ...modal,
      text: ev.target.value,
    });
  };

  return (
    <div className={styles.modal}>
      <h3 className={styles.modalTitle}>
        {isEdit ? MODAL_VALUE.CHANGE : MODAL_VALUE.TASK}
      </h3>
      <div className={styles.modalText}>
        {isEdit ? (
          <textarea
            value={textValue}
            className={styles.modalTextArea}
            onChange={handleChange}
            onKeyDown={(ev) => {
              if (ev.key === MODAL_VALUE.ENTER) {
                addTask();
              }
            }}
            placeholder={MODAL_VALUE.PLACEHOLDER}
          />
        ) : (
          text
        )}
      </div>
    </div>
  );
};
