import { FC } from 'react';
import { Link } from 'react-router-dom';
import style from './Empty.module.scss';
import EmptySvg from './EmptySvg';

const Empty: FC = () => {
  return (
    <div className={style.wrapper}>
      <h2 className={style.title}>Корзина пустая 😕</h2>
      <p className={style.text}>
        Вероятней всего, вы не заказывали ещё пиццу.
        <br /> Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <EmptySvg />
      <Link to={'/'} className={style.link}>
        Вернуться назад
      </Link>
    </div>
  );
};

export default Empty;
