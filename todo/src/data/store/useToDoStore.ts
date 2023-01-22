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
    console.log(tasks);
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
}));

export default useToDoStore;
