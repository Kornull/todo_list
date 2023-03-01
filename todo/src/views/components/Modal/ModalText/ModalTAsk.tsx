import { ChangeEvent, useCallback, useState } from 'react';
import { BiXCircle } from 'react-icons/bi';

import { useModalContext } from 'data/context';
import useToDoStore from 'data/store';

import { ModalTypes, MODAL_VALUE } from './types';

import { ModalTextArea } from './ModalTextArea/ModalTextArea';
import styles from '../Modal.module.scss';

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
          <ModalTextArea
            text={textValue}
            handleChange={handleChange}
            addTask={addTask}
          />
        ) : (
          text
        )}
      </div>
      <button
        className={styles.modalButton}
        onClick={addTask}
      >
        <BiXCircle className={styles.modalIcon} />
      </button>
    </div>
  );
};
