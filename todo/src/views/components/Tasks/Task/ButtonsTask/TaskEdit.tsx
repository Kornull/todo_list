import { useModalContext } from '../../../../../data/context';
import { RiEdit2Line } from 'react-icons/ri';

import styles from '../Task.module.scss';

type EditProps = {
  id: string;
  title: string;
};

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
    >
      <RiEdit2Line className={styles.taskIcon} />
    </button>
  );
};
