import { TaskCheckbox, TaskEdit, TaskRemove } from './ButtonsTask';
import { Text } from './Text';

import styles from './Task.module.scss';
import { Reorder } from 'framer-motion';
import useToDoStore, { TaskType } from '../../../../data/store/useToDoStore';
import { variants } from '../../../../constants';

type TaskProps = {
  id: string;
  title: string;
  onEdit: (id: string, title: string) => void;
  onRemove: (id: string) => void;
  task: TaskType;
};

const Task = ({ id, title, onEdit, onRemove, task }: TaskProps) => {
  const [tasks, updateTask, removeTask, setTasks] = useToDoStore((state) => [
    state.tasks,
    state.updateTask,
    state.removeTask,
    state.setTasks,
  ]);

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
    >
      <Text text={title} />
      <TaskEdit />
      <TaskRemove
        remove={removeTask}
        id={id}
      />
    </Reorder.Item>
  );
};

export default Task;
