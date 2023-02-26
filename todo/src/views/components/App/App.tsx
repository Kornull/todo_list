import useToDoStore from '../../../data/store/useToDoStore';
import InputAddTask from '../InputAddTask';
import Modal from '../Modal';
import Tasks from '../Tasks';

import { ModalInfo, ContextModal, InitialState } from '../../../data/context';

import styles from './App.module.scss';
import { useState } from 'react';

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
