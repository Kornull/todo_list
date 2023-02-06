import { ModalTypes } from './types';

import styles from '../Modal.module.scss';

export const ModalTask = ({ text }: ModalTypes) => {
  return (
    <div className={styles.modal}>
      <h3 className={styles.modalTitle}>Your task:</h3>
      <div className={styles.modalText}>{text}</div>
    </div>
  );
};
