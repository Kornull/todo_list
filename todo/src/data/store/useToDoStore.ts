import { create } from 'zustand';

import { generateId } from '../helper';

export type TaskType = {
  id: string;
  title: string;
  createAt: number;
};

type ToDo = {
  tasks: TaskType[];
  createTask: (title: string) => void;
  updateTask: (id: string, title: string) => void;
  removeTask: (id: string) => void;
  setTasks: (todo: TaskType[]) => void;
  setReadyTask: (id: string) => void;
};

const useToDoStore = create<ToDo>((set, get) => ({
  tasks: [
    {
      id: 'assssssss',
      title: 'HUUUUUUU',
      createAt: 452145215,
    },
  ],
  createTask: (title) => {
    const { tasks } = get();
    const newTask = {
      id: generateId(),
      title,
      createAt: Date.now(),
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
        title: task.id === id ? title : task.title,
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

  setReadyTask: (id) => {
    const { tasks } = get();
    const readyTask = tasks.filter((task) => task.id === id);
    const newTasks = tasks.filter((task) => task.id !== id);
    set({
      tasks: [...newTasks, ...readyTask],
    });
  },
}));

export default useToDoStore;
