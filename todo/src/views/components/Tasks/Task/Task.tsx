import { Reorder } from 'framer-motion';

import { variants } from '../../../../constants';
import { TaskType } from '../../../../data/store/useToDoStore';

import { TaskEdit, TaskRemove } from './ButtonsTask';
import { Text } from './Text';

import styles from './Task.module.scss';

type TaskProps = {
  id: string;
  title: string;
  checked: boolean;
  onRemove: (id: string) => void;
  task: TaskType;
};

const Task = ({ id, title, onRemove, task, checked }: TaskProps) => {
  return (
    <Reorder.Item
      as="div"
      value={task}
      whileDrag={{
        scale: 1.05,
        pointerEvents: 'none',
      }}
      {...variants}
      className={styles.task}
      id={id}
    >
      <Text
        text={title}
        id={id}
        checked={checked}
      />
      <TaskEdit
        id={id}
        title={title}
      />
      <TaskRemove
        remove={onRemove}
        id={id}
      />
    </Reorder.Item>
  );
};

export default Task;
