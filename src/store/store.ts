import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/CartSlice';
import paginationReducer from './reducers/PaginationSlice';
import sortReducer from './reducers/SortSlice';
import { pizzasApi } from './service/servicePizzas';

const rootReducer = combineReducers({
  sortReducer,
  cartReducer,
  paginationReducer,
  [pizzasApi.reducerPath]: pizzasApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(pizzasApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
