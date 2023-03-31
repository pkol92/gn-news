import { configureStore } from '@reduxjs/toolkit';
import panelViewReducer from '../slices/panelViewSlice';

export const store = configureStore({
  reducer: {
    panelView: panelViewReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
