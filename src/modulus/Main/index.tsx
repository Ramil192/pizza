import qs from 'qs';
import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Pagination } from '../../components';
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux';
import {
  changePages,
  selectPagination,
} from '../../store/reducers/PaginationSlice';
import { changeSort, selectSort } from '../../store/reducers/SortSlice';
import { pizzasApi } from '../../store/service/servicePizzas';
import { ISortShort } from '../../types/sorts';
import Pizzas from '../Pizzas';
import Sorts from '../Sorts';
import { useSortPizzas } from '../hooks/useSortPizzas';

const Main: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { currentPage, limit } = useAppSelector(selectPagination);

  const { sortName, sortCategoryId, sortTo, sortToId } =
    useAppSelector(selectSort);

  const { data, isLoading, isError } = pizzasApi.useFetchAllPizzaQuery({
    limit: limit,
    page: currentPage,
  });

  const filteredItems = useSortPizzas({
    sortCategoryId,
    sortName,
    sortToId,
    sortTo,
    pizzas: data?.pizzasApi,
  });

  useEffect(() => {
    if (window.location.search) {
      const pars: any = qs.parse(window.location.search.substring(1));
      dispatch(changeSort(pars as ISortShort));
    }
  }, []);

  useEffect(() => {
    if (data?.totalCount)
      dispatch(changePages(Math.ceil(data?.totalCount / limit)));
  }, [data?.totalCount]);

  useEffect(() => {
    const queryString = qs.stringify(
      {
        sortName: sortName ? sortName : undefined,
        sortCategoryId: sortCategoryId !== 0 ? sortCategoryId : undefined,
        sortToId: sortToId !== 0 ? sortToId : undefined,
        currentPage,
      },
      { charset: 'utf-8', encode: false }
    );
    navigate(`?${queryString}`);
  }, [currentPage, sortCategoryId, sortName, sortToId]);

  return (
    <>
      <Sorts />
      <Pizzas
        pizzasApi={filteredItems}
        isLoading={isLoading}
        isError={isError}
      />
      <Pagination />
    </>
  );
};

export default Main;
