import { useState } from 'react';

import { ModalInfo, ContextModal, InitialState } from '../../../data/context';
import useToDoStore from '../../../data/store';

import InputAddTask from '../InputAddTask';
import Modal from '../Modal';
import Tasks from '../Tasks';

import styles from './App.module.scss';

const App: React.FC = () => {
  const [tasks, createTask, updateTask, removeTask] = useToDoStore((state) => [
    state.tasks,
    state.createTask,
    state.updateTask,
    state.removeTask,
  ]);

  const [modal, setModal] = useState<ModalInfo>(InitialState);

  const createNewTask = (title: string) => {
    createTask(title);
  };

  return (
    <>
      <ContextModal.Provider value={{ modal, setModal }}>
        <div className={styles.article}>
          <h1 className={styles.articleTitle}>To Do App</h1>

          <InputAddTask addNewTask={createNewTask} />

          {!tasks.length ? (
            <p className={styles.articleText}>There is no one task!</p>
          ) : (
            <Tasks />
          )}
        </div>
        <Modal />
      </ContextModal.Provider>
    </>
  );
};

export default App;
