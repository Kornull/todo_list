import useToDoStore from 'data/store';
import { useModalContext } from 'data/context';

import { ModalTask } from './ModalText';

import styles from './Modal.module.scss';

const Modal = () => {
  const [updateTask] = useToDoStore((state) => [state.updateTask]);
  const { modal, setModal } = useModalContext();
  const { open, text, edit, id } = modal;

  const handleClick = () => {
    if (edit && text.length) updateTask(id, text);

    setModal({
      open: false,
      edit: false,
      text: '',
      id: '',
    });
  };

  return (
    <>
      {open && (
        <>
          <ModalTask
            title={text}
            isEdit={edit}
          />
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
