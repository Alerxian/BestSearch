import { configureStore } from '@reduxjs/toolkit';
import homeSlice from '../pages/home/homeSlice';
import searchSlice from '../pages/search/searchSlice';

const store = configureStore({
  reducer: {
    home: homeSlice,
    search: searchSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
