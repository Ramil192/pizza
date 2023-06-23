import { useMemo } from 'react';
import { IPizza } from '../../types/pizzas';

export const useSortPizzas = (dataSort: {
  pizzas: IPizza[] | undefined;
  sortName: string;
  sortCategoryId: number;
  sortTo: Array<'популярности' | 'по алфавиту' | 'по цене'>;
  sortToId: number;
}) => {
  const filteredItems = useMemo(() => {
    const { pizzas, sortCategoryId, sortName, sortToId, sortTo } = dataSort;

    const pizzasApi = pizzas !== undefined ? pizzas : [];
    const isSort = sortName || sortCategoryId !== 0;

    const withoutCategoryAll = 1;

    const queryFilteredItems = isSort
      ? pizzasApi.filter((item) => {
          if (sortCategoryId !== 0)
            return (
              item.name.toLowerCase().includes(sortName.toLowerCase()) &&
              item.category === sortCategoryId - withoutCategoryAll
            );
          else {
            return item.name.toLowerCase().includes(sortName.toLowerCase());
          }
        })
      : pizzasApi;

    if (sortTo[sortToId] === 'популярности') {
      return [...queryFilteredItems].sort((a, b) => b.rating - a.rating);
    }

    if (sortTo[sortToId] === 'по алфавиту') {
      return [...queryFilteredItems].sort();
    }

    if (sortTo[sortToId] === 'по цене') {
      return [...queryFilteredItems].sort(
        (a, b) => a.sizes[0].price - b.sizes[0].price
      );
    }
  }, [dataSort]);

  return filteredItems;
};
