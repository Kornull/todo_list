import { useEffect } from 'react';
import useToDoStore from '../../data/store/useToDoStore';
import InputPlus from '../components/InputPlus';

import styles from './App.module.scss';

const App: React.FC = () => {
  const [tasks, createTask, updateTask, removeTask] = useToDoStore((state) => [
    state.tasks,
    state.createTask,
    state.updateTask,
    state.removeTask,
  ]);

  const createNewTask = (title: string) => {
    createTask(title);
  };

  return (
    <div className={styles.article}>
      <h1 className={styles.articleTitle}>To Do App</h1>
      <section className={styles.articleSection}>
        <InputPlus addNewTask={createNewTask} />
      </section>
      <section className={styles.articleSection}></section>
    </div>
  );
};

export default App;
