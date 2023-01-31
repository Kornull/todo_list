import useToDoStore, { TaskType } from '../../../data/store/useToDoStore';
import Task from './Task';

import styles from './Tasks.module.scss';

const Tasks = () => {
  const [tasks, createTask, updateTask, removeTask] = useToDoStore((state) => [
    state.tasks,
    state.createTask,
    state.updateTask,
    state.removeTask,
  ]);

  return (
    <div className={styles.tasks}>
      {tasks.map((task: TaskType) => (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          onEdit={updateTask}
          onRemove={removeTask}
        />
      ))}
    </div>
  );
};

export default Tasks;