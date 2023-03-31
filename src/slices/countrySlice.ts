import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CountryState {
  countryCode: string;
}

const initialState: CountryState = {
  countryCode: 'us',
};

export const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    pickCountry: (state, action: PayloadAction<string>) => {
      state.countryCode = action.payload;
    },
  },
});

export const { pickCountry } = countrySlice.actions;

export default countrySlice.reducer;
