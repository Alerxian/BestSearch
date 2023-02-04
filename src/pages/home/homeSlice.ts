import { createSlice } from '@reduxjs/toolkit';

export const homeSlice = createSlice({
  name: 'home',
  initialState: {
    value: '',
  },
  reducers: {
    onChange: (state, { payload }) => {
      state.value = payload;
    },
  },
});

export const { onChange } = homeSlice.actions;

export default homeSlice.reducer;
