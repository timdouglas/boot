import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '~/store';

type AppState = {
  loading: boolean;
};

export const initialState: AppState = {
  loading: true,
};

export const appSlice = createSlice({
  initialState,
  name: 'app',
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },
  },
});

export const {
  actions: { setLoading },
} = appSlice;

export const selectLoading = (state: RootState) => state.app.loading;

export default appSlice.reducer;
