import { FC } from 'react';
import style from './NotFound.module.scss';

const NotFound: FC = () => {
  return (
    <div className={style.wrapper}>
      <b className={style.clue}>
        {' '}
        😕 <br />
        Ничего не найдено
      </b>
      <p>К сожалени данная страница отсутствует в нашем интернет-магазине</p>
    </div>
  );
};

export default NotFound;
