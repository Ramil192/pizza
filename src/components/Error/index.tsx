import { FC } from 'react';
import style from './Error.module.scss';

const Error: FC = () => {
  return (
    <div className={style.wrapper}>
      <b className={style.clue}>Произошла ошибка 😕</b>
      <br />
      <p>
        К сожалению, не удалось получить питсы. Попробуйте повторить попытку
        позже.
      </p>
    </div>
  );
};

export default Error;
