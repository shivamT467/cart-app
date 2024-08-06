import { configureStore } from '@reduxjs/toolkit';
import apiDataReducer from './cartSlice';
import wishListData from './wishListSlice';
export default configureStore({
  reducer: {
    clickedData: apiDataReducer,
    wishListData: wishListData,
  },
});
