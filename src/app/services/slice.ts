import { createSlice } from '@reduxjs/toolkit';
import { AppState } from './types';

const initialState: AppState = {
  repositoryId: null,

};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    selectRepository: (state, action) => {
      state.repositoryId = action.payload || null;
    },
  },
});

export const { selectRepository } =
  appSlice.actions;

export default appSlice.reducer;
