import { Reorder, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

import useToDoStore, { TaskType } from '../../../data/store/useToDoStore';
import Task from './Task';

import styles from './Tasks.module.scss';

const Tasks = () => {
  const [tasks, updateTask, removeTask, setTasks] = useToDoStore(
    (state) => [
      state.tasks,
      state.updateTask,
      state.removeTask,
      state.setTasks,
    ]
  );

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
            onEdit={updateTask}
            onRemove={removeTask}
            task={task}
          />
        ))}
      </AnimatePresence>
    </Reorder.Group>
  );
};

export default Tasks;
