import { TaskCheckbox, TaskEdit, TaskRemove } from './ButtonsTask';
import { Text } from './Text';

import styles from './Task.module.scss';

type TaskProps = {
  id: string;
  title: string;
  onEdit: (id: string, title: string) => void;
  onRemove: (id: string) => void;
};

const Task = ({ id, title, onEdit, onRemove }: TaskProps) => {
  return (
    <div className={styles.task}>
      <TaskCheckbox />
      <Text text={title} />
      <TaskEdit />
      <TaskRemove />
    </div>
  );
};

export default Task;
