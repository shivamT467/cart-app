import { createSlice } from '@reduxjs/toolkit';

export const wishListSlice = createSlice({
  name: 'wish list slice',
  initialState: {
    data: [],
  },
  reducers: {
    wishListData: (state, action) => {
      const index = state.data.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index < 0) {
        state.data.push(action.payload);
      }
    },
    removeData: (state, action) => {
      state.data.splice(action.payload, 1);
    },
  },
});

export const { wishListData, removeData } = wishListSlice.actions;
export default wishListSlice.reducer;
