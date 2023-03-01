import useToDoStore from 'data/store';

import styles from '../Task.module.scss';
import { CheckboxProps } from './types';



export const TaskCheckbox = ({ id, checked }: CheckboxProps) => {
  const [setReadyTask, removeReadyTask] = useToDoStore((state) => [
    state.setReadyTask,
    state.removeReadyTask,
  ]);

  const handleClick = (ev: React.MouseEvent) => {
    ev.stopPropagation();
    if (checked) {
      removeReadyTask(id, !checked);
    } else {
      setReadyTask(id, !checked);
    }
  };

  return (
    <div className={styles.taskCheckboxWrapper}>
      <input
        type="checkbox"
        className={checked ? styles.taskChecked : styles.taskNotChecked}
        onClick={handleClick}
      />
    </div>
  );
};
