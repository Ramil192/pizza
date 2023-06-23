import { FC } from 'react';
import CrossSvg from '../../../assets/CrossSvg';
import { useAppDispatch, useAppSelector } from '../../../store/hooks/redux';
import {
  clearCart,
  decrementCart,
  incrementCart,
  selectCart,
} from '../../../store/reducers/CartSlice';
import style from './Carts.module.scss';
import DecrementSvg from './DecrementSvg';
import IncrementSvg from './IncrementSvg';

const Carts: FC = () => {
  const { carts } = useAppSelector(selectCart);
  const dispatch = useAppDispatch();

  return (
    <div className={style.carts}>
      {carts.map((cart, index) => (
        <div className={style.cart} key={index}>
          <div className={style.info}>
            <img src={cart.imageUrl} alt="imagePizza" className={style.img} />
            <div className={style.texts}>
              <p className={style.name}>{cart.name}</p>
              <p
                className={style.type}
              >{`${cart.types} тесто, ${cart.size} см.`}</p>
            </div>
          </div>
          <div className={style.infoControl}>
            <div className={style.count}>
              <button
                className={style.countBtn}
                onClick={() => {
                  dispatch(incrementCart(index));
                }}
              >
                <IncrementSvg />
              </button>
              <p className={style.countText}>{cart.count}</p>
              <button
                className={style.countBtn}
                onClick={() => {
                  dispatch(decrementCart(index));
                }}
              >
                <DecrementSvg />
              </button>
            </div>
            <p className={style.prise}>{`${cart.totalPrice} ₽ `}</p>
            <button
              className={style.cartDelete}
              onClick={() => {
                dispatch(clearCart(index));
              }}
            >
              <CrossSvg />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carts;
