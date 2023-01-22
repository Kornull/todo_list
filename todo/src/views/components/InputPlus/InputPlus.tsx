import { useCallback, useState } from 'react';
import styles from './InputPlus.module.scss';

type InputPlusProps = {
  addNewTask: (title: string) => void;
};

const InputPlus = ({ addNewTask }: InputPlusProps) => {
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
      />
    </div>
  );
};

export default InputPlus;
