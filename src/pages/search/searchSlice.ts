import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getSearchList, SearchLists, SearchParams } from 'src/api/searchList';

export type STATUS = 'idle' | 'loading' | 'succeeded' | 'failed';

const initialState: {
  initValue: string;
  dataList: SearchLists;
  status: STATUS;
  error: any;
} = {
  initValue: '',
  dataList: [],
  status: 'idle',
  error: null,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    onSearchChange: (state, { payload }) => {
      state.initValue = payload;
    },
    getLists: (state, action) => {
      console.log(state, action);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchLists.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchLists.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Add any fetched posts to the array
        state.dataList = action.payload.product_trends;
      })
      .addCase(fetchLists.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const fetchLists = createAsyncThunk(
  'search/fetchLists',
  async (params: SearchParams) => {
    console.log(params);
    const response = await getSearchList(params);
    console.log(response);
    return response.data;
  }
);

export const { onSearchChange } = searchSlice.actions;

export default searchSlice.reducer;
