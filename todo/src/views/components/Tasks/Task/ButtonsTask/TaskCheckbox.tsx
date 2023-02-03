import { useState } from 'react';
import styles from '../Task.module.scss';

export const TaskCheckbox = () => {
  const [cheked, setChecked] = useState(false);
  return (
    <div className={styles.taskCheckboxWrapper}>
      <input
        type="checkbox"
        className={cheked ? styles.taskChecked: ''}
        onClick={() => setChecked(!cheked)}
      />
    </div>
  );
};
