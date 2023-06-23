import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ISort, ISortShort } from '../../types/sorts';
import { RootState } from '../store';

const initialState: ISort = {
  sortCategory: [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ],
  sortTo: ['популярности', 'по цене', 'по алфавиту'],
  sortCategoryId: 0,
  sortToId: 0,
  sortName: '',
};

export const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    changeSortCategoryID(state, action: PayloadAction<number>) {
      state.sortCategoryId = action.payload;
    },
    changeSortValueID(state, action: PayloadAction<number>) {
      state.sortToId = action.payload;
    },
    changeSortName(state, action: PayloadAction<string>) {
      state.sortName = action.payload;
    },
    changeSort(state, action: PayloadAction<ISortShort>) {
      state.sortName = action.payload.sortName || '';
      state.sortCategoryId = Number(action.payload.sortCategoryId) || 0;
      state.sortToId = Number(action.payload.sortToId) || 0;
    },
  },
});

export const selectSort = (state: RootState) => state.sortReducer;

export const selectSortName = (state: RootState) => state.sortReducer.sortName;

export const {
  changeSortCategoryID,
  changeSortValueID,
  changeSortName,
  changeSort,
} = sortSlice.actions;
export default sortSlice.reducer;
