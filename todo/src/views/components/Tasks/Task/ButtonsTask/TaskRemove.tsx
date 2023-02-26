import { RiDeleteBinLine } from 'react-icons/ri';

import styles from '../Task.module.scss';

type RemoveProps = {
  remove: (id: string) => void;
  id: string;
};

enum REMOVE_TASK {
  QUESTION = 'Are you sure you want to delete the task?',
}

export const TaskRemove = ({ remove, id }: RemoveProps) => {
  const onClick = () => {
    const res = confirm(REMOVE_TASK.QUESTION);
    if (res) remove(id);
  };
  return (
    <button
      className={styles.taskButton}
      onClick={onClick}
    >
      <RiDeleteBinLine className={styles.taskIcon} />
    </button>
  );
};
