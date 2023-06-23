export interface ISort {
  sortCategory: Array<
    'Все' | 'Мясные' | 'Вегетарианская' | 'Гриль' | 'Острые' | 'Закрытые'
  >;
  sortTo: Array<'популярности' | 'по цене' | 'по алфавиту'>;
  sortCategoryId: number;
  sortToId: number;
  sortName: string;
}

export interface ISortShort {
  sortCategoryId?: number;
  sortToId?: number;
  sortName?: string;
}
