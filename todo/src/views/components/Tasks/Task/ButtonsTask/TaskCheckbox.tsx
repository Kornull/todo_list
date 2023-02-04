import { MouseEventHandler, useEffect, useState } from 'react';
import useToDoStore from '../../../../../data/store';

import styles from '../Task.module.scss';

type CheckboxProps = {
  id: string;
};

export const TaskCheckbox = ({ id }: CheckboxProps) => {
  const [setReadyTask, removeReadyTask] = useToDoStore((state) => [
    state.setReadyTask,
    state.removeReadyTask,
  ]);
  const [cheked, setChecked] = useState(false);

  const handleClick = (ev: React.MouseEvent) => {
    ev.stopPropagation();
    setChecked(!cheked);
  };

  useEffect(() => {
    if (cheked) {
      setReadyTask(id, cheked);
    } else {
      removeReadyTask(id, cheked);
    }
  }, [cheked]);

  return (
    <div className={styles.taskCheckboxWrapper}>
      <input
        type="checkbox"
        className={cheked ? styles.taskChecked : ''}
        onClick={handleClick}
      />
    </div>
  );
};
