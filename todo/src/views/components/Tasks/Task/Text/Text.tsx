import { TaskCheckbox } from '../ButtonsTask';
import styles from '../Task.module.scss';

type TextProps = {
  text: string;
  id: string;
};

export const Text = ({ text, id }: TextProps) => {
  return (
    <div className={styles.taskText}>
      <TaskCheckbox id={id} />
      {text}
    </div>
  );
};
