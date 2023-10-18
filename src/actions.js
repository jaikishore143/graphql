import { createAsyncThunk } from '@reduxjs/toolkit';
import { client } from './apollo'; 
import { gql } from '@apollo/client';

export const fetchCountries = createAsyncThunk('country/fetchCountries', async () => {
  try {
    const response = await client.query({
      query: gql`
      {
        launchesPast(limit: 100) {
          id
          mission_name
        }
      }
    `,
    });
    console.log(response.data.launchesPast)
    return response.data.launchesPast; 
  } catch (error) {
    throw error;
  }
});
