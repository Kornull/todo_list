import styles from './Task.module.scss';

type TaskProps = {
  id: string;
  title: string;
  onEdit: (id: string, title: string) => void;
  onRemove: (id: string) => void;
};

const Task = ({ id, title, onEdit, onRemove }: TaskProps) => {
  return <div>{title}</div>;
};

export default Task;
