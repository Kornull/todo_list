import { useState } from 'react';
import Modal from '../../../Modal';
import { TaskCheckbox } from '../ButtonsTask';
import styles from '../Task.module.scss';

type TextProps = {
  text: string;
  id: string;
  checked: boolean;
};

export const Text = ({ text, id, checked }: TextProps) => {
  const handleClick = () => {
  };
  return (
    <>
      <div
        className={styles.taskText}
        onClick={handleClick}
      >
        <TaskCheckbox
          id={id}
          checked={checked}
        />
        {text}
      </div>
    </>
  );
};
