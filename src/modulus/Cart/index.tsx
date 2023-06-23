import { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CartSvg from '../../assets/CartSvg';
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux';
import { clearCarts, selectCart } from '../../store/reducers/CartSlice';
import BackSvg from './BackSvg';
import style from './Cart.module.scss';
import Carts from './Carts';
import Empty from './Empty';
import TrashSvg from './TrashSvg';

const Cart: FC = () => {
  const { totalCount, totalPrise, carts } = useAppSelector(selectCart);

  const dispatch = useAppDispatch();

  useEffect(() => {
    localStorage.setItem(
      'cartReducer',
      JSON.stringify({ totalCount, totalPrise, carts })
    );
  });

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        {totalCount === 0 && <Empty />}
        {totalCount !== 0 && (
          <>
            <div className={style.top}>
              <div className={style.title}>
                <CartSvg />
                <h2>Корзина</h2>
              </div>
              <div className={style.clearCart}>
                <TrashSvg />
                <button
                  onClick={() => {
                    dispatch(clearCarts());
                  }}
                >
                  Очистить корзину
                </button>
              </div>
            </div>
            <Carts />
            <div className={style.sum}>
              <p className={style.sumAll}>
                Всего пицц:{' '}
                <span className={style.sumAllBold}>{`${totalCount} шт.`}</span>{' '}
              </p>
              <p>
                Сумма заказа:{' '}
                <span className={style.sumAllPrise}>{`${totalPrise} ₽`}</span>
              </p>
            </div>
            <div className={style.controls}>
              <Link className={style.back} to="/">
                <BackSvg />
                Вернуться назад
              </Link>
              <button className={style.buy}>Оплатить сейчас</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
