import { useCallback, useState } from 'react';
import { TbFilePlus } from 'react-icons/tb';

import styles from './InputAddTask.module.scss';

type InputPlusProps = {
  addNewTask: (title: string) => void;
};

const InputAddTask = ({ addNewTask }: InputPlusProps) => {
  const [inputValue, setInputValue] = useState('');

  const addTask = useCallback(() => {
    if (inputValue.length) {
      addNewTask(inputValue);
      setInputValue('');
    }
  }, [inputValue]);

  return (
    <div className={styles.input}>
      <input
        type="text"
        className={styles.inputValue}
        value={inputValue}
        onChange={(ev) => setInputValue(ev.target.value)}
        onKeyDown={(ev) => {
          if (ev.key === 'Enter') {
            addTask();
          }
        }}
        placeholder="Type here"
      />
      <button
        className={styles.inputButton}
        aria-label="add task"
        title="add task"
        onClick={addTask}
      >
        <TbFilePlus className={styles.inputIcon} />
      </button>
    </div>
  );
};

export default InputAddTask;
