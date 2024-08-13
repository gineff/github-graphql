import { createSlice } from '@reduxjs/toolkit';
import { AppState } from './types';

const initialState: AppState = {
  query: '',
  repositoriesPerPage: 10,
  totalRepositories: 0,
  pageInfo: {},
  pageCursor: {},
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    search: (state, action) => {
      state.query = action.payload || null;
    },
    changePageInfo: (state, action) => {
      state.pageInfo = action.payload;
    },
    nextPage: (state) => {
      state.pageCursor = { endCursor: state.pageInfo?.endCursor };
    },
    previousPage: (state) => {
      state.pageCursor = { startCursor: state.pageInfo?.startCursor };
    },
  },
});

export const { search, nextPage, previousPage, changePageInfo } =
  appSlice.actions;

export default appSlice.reducer;
