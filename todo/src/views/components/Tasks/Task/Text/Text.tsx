import { MouseEventHandler } from 'react';
import { TaskCheckbox } from '../ButtonsTask';
import styles from '../Task.module.scss';

type TextProps = {
  text: string;
  id: string;
};

export const Text = ({ text, id }: TextProps) => {
  
  const handleClick = () => {
  };
  return (
    <div
      className={styles.taskText}
      onClick={handleClick}
    >
      <TaskCheckbox id={id} />
      {text}
    </div>
  );
};
