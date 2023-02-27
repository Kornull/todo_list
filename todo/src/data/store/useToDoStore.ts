import create, { State, StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';

import { generateId } from '../helper';

export type TaskType = {
  id: string;
  title: string;
  createAt: number;
  checked: boolean;
};

type ToDo = {
  tasks: TaskType[];
  createTask: (title: string) => void;
  updateTask: (id: string, title: string) => void;
  removeTask: (id: string) => void;
  setTasks: (todo: TaskType[]) => void;
  setReadyTask: (id: string, checked: boolean) => void;
  removeReadyTask: (id: string, checked: boolean) => void;
};

const isToDo = (object: any): object is ToDo => {
  return 'tasks' in object;
};

const localSrorageUpdate =
  <T extends State>(config: StateCreator<T>): StateCreator<T> =>
  (set, get, api) =>
    config(
      (nextState, ...args) => {
        if (isToDo(nextState)) {
          localStorage.setItem('userToDoTask', JSON.stringify(nextState.tasks));
        }
        set(nextState, ...args);
      },
      get,
      api
    );

const dataTasks = window.localStorage.getItem('userToDoTask')
  ? window.localStorage.getItem('userToDoTask')
  : '[]';

const useToDoStore = create<ToDo>(
  localSrorageUpdate(
    devtools((set, get) => ({
      tasks: JSON.parse(dataTasks as string),
      createTask: (title) => {
        const { tasks } = get();
        const newTask = {
          id: generateId(),
          title: title.replace(/\s+/g, ' ').trim(),
          createAt: Date.now(),
          checked: false,
        };

        set({
          tasks: [newTask].concat(tasks),
        });
      },

      updateTask: (id, title) => {
        const { tasks } = get();
        set({
          tasks: tasks.map((task) => ({
            ...task,
            title: task.id === id ? title.replace(/\s+/g, ' ').trim() : task.title,
          })),
        });
      },

      removeTask: (id) => {
        const { tasks } = get();

        set({
          tasks: tasks.filter((task) => task.id !== id),
        });
      },

      setTasks: (todo) => {
        set({
          tasks: [...todo],
        });
      },

      setReadyTask: (id, checked) => {
        const { tasks } = get();
        const readyTask = tasks.filter((task) => {
          if (task.id === id) {
            task.checked = checked;
            return task;
          }
        });
        const newTasks = tasks.filter((task) => task.id !== id);
        set({
          tasks: [...newTasks, ...readyTask],
        });
      },

      removeReadyTask: (id, checked) => {
        const { tasks } = get();
        set({
          tasks: tasks.map((task) => ({
            ...task,
            checked: task.id === id ? checked : task.checked,
          })),
        });
      },
    }))
  )
);

export default useToDoStore;
