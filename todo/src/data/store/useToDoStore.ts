import { create } from 'zustand';

import { generateId } from '../helper';

type Task = {
  id: string;
  title: string;
  createAt: number;
};

type ToDo = {
  tasks: Task[];
  createTask: (title: string) => void;
  updateTask: (id: string, title: string) => void;
  removeTask: (id: string) => void;
};

const useToDoStore = create<ToDo>((set, get) => ({
  tasks: [],
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
}));

export default useToDoStore;
