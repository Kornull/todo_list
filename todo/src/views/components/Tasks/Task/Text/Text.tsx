import styles from '../Task.module.scss';

type TextProps = {
  text: string;
};

export const Text = ({ text }: TextProps) => {
  return <div className={styles.taskText}>{text}</div>;
};
