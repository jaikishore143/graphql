// slice.js
import { createSlice } from '@reduxjs/toolkit';
import { fetchCountries } from './actions';

const initialState = {
  loading: false,
  countries: [],
  error: null,
};

const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload,"action")
        state.countries = action.payload;
        console.log(state.countries,"state")
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default countrySlice.reducer;
