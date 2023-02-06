import { useModalContext } from '../../../data/context';

import styles from './Modal.module.scss';
import { ModalTask } from './ModalText';

const Modal = () => {
  const { modal, setModal } = useModalContext();
  const { open, text } = modal;

  const handleClick = () => {
    setModal({
      ...modal,
      open: false,
      text: '',
    });
  };
  return (
    <>
      {open && (
        <>
          <ModalTask text={text} />
          <div
            className={styles.overlay}
            onClick={handleClick}
          />
        </>
      )}
    </>
  );
};

export default Modal;
