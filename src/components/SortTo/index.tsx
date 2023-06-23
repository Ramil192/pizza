import { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux';
import { changeSortValueID, selectSort } from '../../store/reducers/SortSlice';
import style from './SortTo.module.scss';
import SortToSvg from './SortToSvg';

const SortTo: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { sortToId, sortTo } = useAppSelector(selectSort);
  const dispatch = useAppDispatch();
  return (
    <div className={style.wrapper}>
      <button
        className={style.button}
        data-rotated={isVisible}
        onClick={() => {
          setIsVisible((prev) => !prev);
        }}
      >
        <SortToSvg />
        <p className={style.text}>Сортировка по:</p>
        <p className={style.sortValue}> {sortTo[sortToId]}</p>
      </button>
      {isVisible && (
        <ul className={style.popUp}>
          {sortTo.map((sortValue, index) => (
            <li
              className={style.popUpText}
              data-active={index === sortToId}
              key={sortValue}
              onClick={() => {
                dispatch(changeSortValueID(index));
                setIsVisible((prev) => !prev);
              }}
            >
              {sortValue}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SortTo;
