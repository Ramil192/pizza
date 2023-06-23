import React, { FC } from 'react';
import style from './CustomInput.module.scss';

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {}

const CustomInput: FC<IInput> = ({ ...props }) => {
  return <input className={style.input} {...props} />;
};

export default CustomInput;
