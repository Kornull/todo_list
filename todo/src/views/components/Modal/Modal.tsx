import { useModalContext } from '../../../data/context';

import styles from './Modal.module.scss';

const Modal = () => {
  const { modal } = useModalContext();
  const { open, text } = modal;
  return (
    <>
      {open && (
        <div className={styles.overlay}>
          <div className={styles.modal}>{modal.text}</div>
        </div>
      )}
    </>
  );
};

export default Modal;
