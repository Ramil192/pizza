import { FC } from 'react';
import style from './AddButton.module.scss';
import AddSvg from './AddSvg';

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  children: React.ReactNode;
  extensionClass?: string;
}

const AddButton: FC<IButton> = ({ children, extensionClass, ...props }) => {
  return (
    <button className={style.button} {...props}>
      <AddSvg />
      {children}
    </button>
  );
};

export default AddButton;
