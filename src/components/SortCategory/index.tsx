import { FC } from 'react';
import SortButton from '../../UI/SortButton/SortButton';
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux';
import {
  changeSortCategoryID,
  selectSort,
} from '../../store/reducers/SortSlice';
import style from './SortCategory.module.scss';

const SortCategory: FC = () => {
  const { sortCategoryId, sortCategory } = useAppSelector(selectSort);

  const dispatch = useAppDispatch();
  const handlerClick = (index: number) => {
    dispatch(changeSortCategoryID(index));
  };

  return (
    <div className={style.wrapper}>
      {sortCategory.map((sortType, index) => (
        <SortButton
          data-active={index === sortCategoryId}
          onClick={() => {
            handlerClick(index);
          }}
          key={index}
        >
          {sortType}
        </SortButton>
      ))}
    </div>
  );
};

export default SortCategory;
