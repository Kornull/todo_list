export enum BUTTONS_TASK {
  REMOVE = 'remove task',
  EDIT = 'edit task',
  QUESTION = 'Remove task?',
}

export type EditProps = {
  id: string;
  title: string;
};

export type RemoveProps = {
  remove: (id: string) => void;
  id: string;
};

export type CheckboxProps = {
  id: string;
  checked: boolean;
};
