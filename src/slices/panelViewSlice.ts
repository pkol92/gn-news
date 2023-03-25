import { createSlice } from '@reduxjs/toolkit';

export interface panelViewState {
  view: 'card' | 'list';
}

const initialState: panelViewState = {
  view: 'card',
};

export const panelViewSlice = createSlice({
  name: 'panelView',
  initialState,
  reducers: {
    card: (state) => {
      state.view = 'card';
    },
    list: (state) => {
      state.view = 'list';
    },
  },
});

export const { card, list } = panelViewSlice.actions;

export default panelViewSlice.reducer;
