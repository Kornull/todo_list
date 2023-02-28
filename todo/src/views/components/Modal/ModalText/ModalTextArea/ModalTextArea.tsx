import { BiMessageSquareAdd } from 'react-icons/bi';

import { ModalTextAreaTypes, MODAL_VALUE } from '../types';

import styles from '../../Modal.module.scss';

export const ModalTextArea = ({
  text,
  handleChange,
  addTask,
}: ModalTextAreaTypes) => {
  return (
    <div className={styles.modalTextAreaBlock}>
      <textarea
        value={text}
        className={styles.modalTextArea}
        onChange={handleChange}
        onKeyDown={(ev) => {
          if (ev.key === MODAL_VALUE.ENTER) {
            addTask();
          }
        }}
        placeholder={MODAL_VALUE.PLACEHOLDER}
      />
      <button
        className={styles.modalTextAreaButton}
        onClick={addTask}
      >
        {<BiMessageSquareAdd className={styles.modalTextAreaIcon} />}
      </button>
    </div>
  );
};
