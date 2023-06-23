import { FC } from 'react';

import { Error, Pizza, PizzaSkeleton } from '../../components';
import { IPizza } from '../../types/pizzas';
import style from './Pizzas.module.scss';

interface IPizzas {
  pizzasApi?: IPizza[];
  isLoading: boolean;
  isError: boolean;
}

const Pizzas: FC<IPizzas> = ({ pizzasApi, isError, isLoading }) => {
  const emptyArr = Array.from({ length: 4 }, () => null);

  return (
    <div className={style.wrapper}>
      <h2 className={style.title}>Все пиццы</h2>

      <div className={style.content}>
        {isLoading && emptyArr.map((_, index) => <PizzaSkeleton key={index} />)}
        {isError && <Error />}
        {pizzasApi &&
          pizzasApi.map((pizza, index) => <Pizza {...pizza} key={index} />)}
      </div>
    </div>
  );
};

export default Pizzas;
