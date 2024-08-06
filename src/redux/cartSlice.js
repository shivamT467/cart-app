import { createSlice } from '@reduxjs/toolkit';

export const cartDataSlice = createSlice({
  name: 'cart app',
  initialState: {
    data: [],
  },
  reducers: {
    cartData: (state, action) => {
      const itemExist = state.data.find(
        (item) => item.id === action.payload.id
      );
      if (!itemExist) {
        state.data.push({ ...action.payload, qty: 1 });
      }
    },
    increaseQuantity: (state, action) => {
      state.data[action.payload].qty++;
    },
    decreaseQuantity: (state, action) => {
      if (state.data[action.payload].qty > 1) {
        state.data[action.payload].qty--;
      } else {
        state.data.splice(action.payload, 1);
      }
    },
    removeCart: (state, action) => {
      state.data.splice(action.payload, 1);
    },
    wishListData: (state, action) => {
      state.data.push({ ...action.payload, qty: 1 });
    },
  },
});

export const {
  cartData,
  increaseQuantity,
  decreaseQuantity,
  removeCart,
  wishListData,
} = cartDataSlice.actions;
export default cartDataSlice.reducer;
