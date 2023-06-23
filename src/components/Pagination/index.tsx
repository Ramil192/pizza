import { FC, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux';
import {
  changeCurrentPage,
  decrementPage,
  incrementPage,
  selectPagination,
} from '../../store/reducers/PaginationSlice';
import style from './Pagination.module.scss';

const Pagination: FC = () => {
  const { currentPage, pages } = useAppSelector(selectPagination);

  const pagesArray = useMemo(
    () => Array.from({ length: pages }, (_, index) => index + 1),
    [pages]
  );

  const dispatch = useAppDispatch();

  return (
    <ul className={style.wrapper}>
      <li
        className={style.item}
        onClick={() => {
          dispatch(decrementPage());
        }}
      >
        {'<'}
      </li>
      {pagesArray.map((page) => (
        <li
          className={style.item}
          key={page}
          data-active={page === currentPage}
          onClick={() => {
            dispatch(changeCurrentPage(page));
          }}
        >
          {page}
        </li>
      ))}

      <li
        className={style.item}
        onClick={() => {
          dispatch(incrementPage());
        }}
      >
        {'>'}
      </li>
    </ul>
  );
};

export default Pagination;
