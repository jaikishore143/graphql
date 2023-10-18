import { createSlice } from '@reduxjs/toolkit';
import { fetchCountries } from './actions';

const initialState = {
  loading: false,
  ships: [],
  error: null,
};

const shipSlice = createSlice({
  name: 'ship',
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
        state.ships = action.payload;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default shipSlice.reducer;
