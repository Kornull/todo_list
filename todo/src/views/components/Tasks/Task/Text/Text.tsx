import { TaskCheckbox } from '../ButtonsTask';
import { useModalContext } from '../../../../../data/context';

import styles from '../Task.module.scss';

type TextProps = {
  text: string;
  id: string;
  checked: boolean;
};

export const Text = ({ text, id, checked }: TextProps) => {
  const { modal, setModal } = useModalContext();

  const handleClick = () => {
    setModal({
      ...modal,
      open: true,
      text,
    });
  };

  return (
    <>
      <div
        className={styles.taskText}
        onClick={handleClick}
      >
        <TaskCheckbox
          id={id}
          checked={checked}
        />
        {text.trim().length > 24 ? `${text.substring(0, 24)}...` : text}
      </div>
    </>
  );
};
