import { configureStore } from '@reduxjs/toolkit';
import panelViewReducer from '../slices/panelViewSlice';
import countryReducer from '../slices/countrySlice';

export const store = configureStore({
  reducer: {
    panelView: panelViewReducer,
    country: countryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
