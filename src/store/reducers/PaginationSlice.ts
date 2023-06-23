import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IPagination } from '../../types/pagination';
import { RootState } from '../store';

const initialState: IPagination = {
  currentPage: 1,
  pages: 1,
  limit: 8,
};

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    incrementPage(state) {
      if (state.currentPage < state.pages)
        state.currentPage = state.currentPage + 1;
    },

    decrementPage(state) {
      if (state.currentPage > 1) state.currentPage = state.currentPage - 1;
    },

    changePages(state, action: PayloadAction<number>) {
      state.pages = action.payload;
    },

    changeCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
});

export const selectPagination = (state: RootState) => state.paginationReducer;

export const { incrementPage, decrementPage, changePages, changeCurrentPage } =
  paginationSlice.actions;

export default paginationSlice.reducer;
