import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import AddButton from '../../UI/AddButton/AddButton';
import { createNewCart } from '../../store/reducers/CartSlice';
import { IPizza } from '../../types/pizzas';
import style from './Pizza.module.scss';
import { ICartItem } from '../../types/cart';

const Pizza: FC<IPizza> = ({ imageUrl, name, sizes, types }) => {
  const [typeActiveID, setTypeActiveID] = useState(0);
  const [sizeActiveID, setSizeActiveID] = useState(0);

  const dispatch = useDispatch();

  const addNewCart = () => {
    const newCart: ICartItem = {
      id: name + sizes[sizeActiveID].size + types[typeActiveID],
      imageUrl,
      name,
      types: types[typeActiveID],
      size: sizes[sizeActiveID].size,
      price: sizes[sizeActiveID].price,
      totalPrice: sizes[sizeActiveID].price,
      count: 1,
    };

    dispatch(createNewCart(newCart));
  };

  return (
    <div className={style.wrapper}>
      <img src={imageUrl} alt="pizza img" className={style.img} />
      <p className={style.name}>{name}</p>
      <div className={style.sorts}>
        <div className={style.types}>
          {types.map((type, index) => (
            <p
              className={style.type}
              key={index}
              data-active={typeActiveID === index}
              onClick={() => {
                setTypeActiveID((_) => index);
              }}
            >
              {type}
            </p>
          ))}
        </div>
        <div className={style.sizes}>
          {sizes.map((size, index) => (
            <p
              className={style.size}
              key={index}
              data-active={sizeActiveID === index}
              onClick={() => {
                setSizeActiveID(() => index);
              }}
            >
              {`${size.size} см.`}
            </p>
          ))}
        </div>
      </div>
      <div className={style.buy}>
        <p className={style.price}>{`от ${sizes[sizeActiveID].price} ₽`}</p>
        <AddButton onClick={addNewCart}>Добавить </AddButton>
      </div>
    </div>
  );
};

export default Pizza;
