import styles from '../Task.module.scss';

type RemoveProps = {
  remove: (id: string) => void;
  id:string
};

export const TaskRemove = ({ remove, id }: RemoveProps) => {
  return (
    <button
      className={styles.taskRemove}
      onClick={() => remove(id)}
    />
  );
};
