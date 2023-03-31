import { configureStore } from '@reduxjs/toolkit';
import panelViewReducer from '../slices/panelViewSlice';
import languageReducer from '../slices/languageSlice';

export const store = configureStore({
  reducer: {
    panelView: panelViewReducer,
    language: languageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
