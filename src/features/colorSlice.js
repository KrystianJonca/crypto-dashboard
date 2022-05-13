import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 'dark',
};

export const colorSlice = createSlice({
  name: 'colorMode',
  initialState,
  reducers: {
    toggleColorMode: (state) => {
      state.value = state.value === 'dark' ? 'light' : 'dark';
    },
  },
});

export const { toggleColorMode } = colorSlice.actions;

export default colorSlice.reducer;
