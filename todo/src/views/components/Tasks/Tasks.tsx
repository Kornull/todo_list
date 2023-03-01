import useToDoStore, { TaskType } from 'data/store/useToDoStore';
import { Reorder, AnimatePresence } from 'framer-motion';

import Task from './Task';

import styles from './Tasks.module.scss';

const Tasks = () => {
  const [tasks, removeTask, setTasks] = useToDoStore((state) => [
    state.tasks,
    state.removeTask,
    state.setTasks,
  ]);

  return (
    <Reorder.Group
      as="div"
      axis="y"
      values={tasks}
      className={styles.tasks}
      onReorder={setTasks}
    >
      <AnimatePresence>
        {tasks.map((task: TaskType) => (
          <Task
            key={task.id}
            id={task.id}
            title={task.title}
            checked={task.checked}
            onRemove={removeTask}
            task={task}
          />
        ))}
      </AnimatePresence>
    </Reorder.Group>
  );
};

export default Tasks;
