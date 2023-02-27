import { useModalContext } from '../../../../../data/context';
import { RiEdit2Line } from 'react-icons/ri';

import { BUTTONS_TASK, EditProps } from './types';

import styles from '../Task.module.scss';

export const TaskEdit = ({ id, title }: EditProps) => {
  const { setModal } = useModalContext();

  const handleClick = () => {
    setModal({
      open: true,
      text: title,
      edit: true,
      id: id,
    });
  };

  return (
    <button
      className={styles.taskButton}
      onClick={handleClick}
      title={BUTTONS_TASK.EDIT}
    >
      <RiEdit2Line className={styles.taskIcon} />
    </button>
  );
};
