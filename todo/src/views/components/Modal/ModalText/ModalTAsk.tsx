import { ModalTypes } from './types';

import styles from '../Modal.module.scss';

export const ModalTask = ({ text }: ModalTypes) => {
  return <div className={styles.modal}>
    <h3>Your task:</h3>
    {text}</div>;
};
