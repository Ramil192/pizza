import { FC } from 'react';
import style from './Spinner.module.scss';

const Spinner: FC = () => {
  return (
    <div className={style['wrapper']}>
      <div className={style['lds-spinner']}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
