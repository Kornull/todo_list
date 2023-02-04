import { useEffect, useState } from 'react';
import useToDoStore from '../../../../../data/store';

import styles from '../Task.module.scss';

type CheckboxProps = {
  id: string;
};

export const TaskCheckbox = ({ id }: CheckboxProps) => {
  const [setReadyTask] = useToDoStore((state) => [state.setReadyTask]);
  const [cheked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked(!cheked);
  };

  useEffect(() => {
    if (cheked) {
      setReadyTask(id);
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
