import useToDoStore, { TaskType } from '../../../data/store/useToDoStore';
import Task from './Task';

const Tasks = () => {
  const [tasks, createTask, updateTask, removeTask] = useToDoStore((state) => [
    state.tasks,
    state.createTask,
    state.updateTask,
    state.removeTask,
  ]);

  return (
    <div>
      {tasks.map((task: TaskType) => (
        <Task
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
