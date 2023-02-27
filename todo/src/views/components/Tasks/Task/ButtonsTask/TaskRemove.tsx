import { RiDeleteBinLine } from 'react-icons/ri';

import { BUTTONS_TASK, RemoveProps } from './types';

import styles from '../Task.module.scss';

export const TaskRemove = ({ remove, id }: RemoveProps) => {
  const onClick = () => {
    const res = confirm(BUTTONS_TASK.QUESTION);
    if (res) remove(id);
  };
  return (
    <button
      className={styles.taskButton}
      onClick={onClick}
      title={BUTTONS_TASK.REMOVE}
    >
      <RiDeleteBinLine className={styles.taskIcon} />
    </button>
  );
};
