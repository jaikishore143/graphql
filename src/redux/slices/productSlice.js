import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { gql } from "@apollo/client";
import client from "./apollo"; // Import your Apollo Client instance here

const initialState = {
  loading: false,
  countries: [],
  error: "",
};

export const fetchCountries = createAsyncThunk('country/fetchCountries', async (_, { rejectWithValue }) => {
  try {
    const FILMS_QUERY = gql`
      {
        launchesPast(limit: 100) {
          id
          mission_name
        }
      }
    `;
    const { data } = await client.query({
      query: FILMS_QUERY,
    });

    return data.launchesPast;
  } catch (error) {
    return rejectWithValue(error.message); // Use rejectWithValue to handle rejection
  }
});

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.loading = false;
        state.countries = action.payload;
        state.error = "";
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.loading = false;
        state.countries = [];
        state.error = action.payload;
      });
  },
});

export const selectCountries = (state) => state.counter.countries;

export default counterSlice.reducer;
