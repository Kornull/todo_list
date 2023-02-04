import { create } from 'zustand';

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

const useToDoStore = create<ToDo>((set, get) => ({
  tasks: [
    {
      id: 'assssssss',
      title: 'HUUUUUUU',
      createAt: 452145215,
      checked: false,
    },
  ],
  createTask: (title) => {
    const { tasks } = get();
    console.log(tasks);
    const newTask = {
      id: generateId(),
      title,
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
}));

export default useToDoStore;
