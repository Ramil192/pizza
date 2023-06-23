import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ICart, ICartItem } from '../../types/cart';
import { RootState } from '../store';

const initObj = { carts: [], totalCount: 0, totalPrise: 0 };

const initialState: ICart =
  localStorage.getItem('cartReducer') !== null
    ? JSON.parse(localStorage.getItem('cartReducer')!)
    : initObj;

const getIndex = (state: ICart, item: ICartItem): null | number => {
  for (const index in state.carts) {
    const cart = state.carts[index];

    if (cart.id === item.id) {
      return Number(index);
    }
  }

  return null;
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    getAllCartFromLocalStorage(state, action: PayloadAction<ICart>) {
      state.carts = action.payload.carts;
      state.totalCount = action.payload.totalCount;
      state.totalPrise = action.payload.totalPrise;
    },

    createNewCart(state, action: PayloadAction<ICartItem>) {
      const index = getIndex(state, action.payload);
      state.totalCount += 1;
      state.totalPrise += action.payload.price;

      if (index === null) {
        state.carts.push(action.payload);
      } else {
        state.carts[index].count += 1;
        state.carts[index].totalPrice += action.payload.price;
      }

      localStorage.setItem('cartReducer', JSON.stringify(state));
    },

    incrementCart(state, action: PayloadAction<number>) {
      const index = action.payload;
      state.carts[index].count += 1;
      state.carts[index].totalPrice += state.carts[index].price;

      state.totalPrise += state.carts[index].price;
      state.totalCount += 1;
    },

    decrementCart(state, action: PayloadAction<number>) {
      const index = action.payload;

      if (state.carts[index].count <= 1) return;
      state.carts[index].count -= 1;
      state.carts[index].totalPrice -= state.carts[index].price;

      state.totalPrise -= state.carts[index].price;
      state.totalCount -= 1;
    },

    clearCarts(state) {
      state.carts = [];
      state.totalCount = 0;
      state.totalPrise = 0;
    },

    clearCart(state, action: PayloadAction<number>) {
      const index = action.payload;

      state.totalCount -= state.carts[index].count;
      state.totalPrise -= state.carts[index].totalPrice;

      state.carts.splice(index, 1);
    },
  },
});

export const selectCart = (state: RootState) => state.cartReducer;

export const {
  createNewCart,
  incrementCart,
  decrementCart,
  clearCarts,
  clearCart,
  getAllCartFromLocalStorage,
} = cartSlice.actions;
export default cartSlice.reducer;
