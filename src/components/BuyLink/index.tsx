import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import CartSvg from '../../assets/CartSvg';
import { useAppSelector } from '../../store/hooks/redux';
import { selectCart } from '../../store/reducers/CartSlice';
import style from './BuyLink.module.scss';

const BuyLink: FC = React.memo(() => {
  const { totalCount, totalPrise } = useAppSelector(selectCart);

  return (
    <Link to="/cart">
      <button className={style.link}>
        <div className={style.price}>
          <p>{totalPrise}</p>₽
        </div>
        <div className={style.line} />
        <div className={style.count}>
          <CartSvg />
          &nbsp;
          <p>{totalCount}</p>
        </div>
      </button>
    </Link>
  );
});

export default BuyLink;
