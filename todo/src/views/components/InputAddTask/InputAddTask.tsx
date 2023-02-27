import { useCallback, useState } from 'react';
import { TbFilePlus } from 'react-icons/tb';

import styles from './InputAddTask.module.scss';

enum INPUT_ADD_TASK {
  ADD_TASK = 'add task',
  WRITE = 'Type here...',
  ENTER = 'Enter',
}

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
          if (ev.key === INPUT_ADD_TASK.ENTER) {
            addTask();
          }
        }}
        placeholder={INPUT_ADD_TASK.WRITE}
      />
      <button
        className={styles.inputButton}
        aria-label={INPUT_ADD_TASK.ADD_TASK}
        title={INPUT_ADD_TASK.ADD_TASK}
        onClick={addTask}
      >
        <TbFilePlus className={styles.inputIcon} />
      </button>
    </div>
  );
};

export default InputAddTask;
