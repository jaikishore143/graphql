import { createAsyncThunk } from '@reduxjs/toolkit';
import { client } from './apollo'; 
import { gql } from '@apollo/client';
import axios from 'axios';

export const fetchCountries = createAsyncThunk('country/fetchCountries', async () => {
  try {
    const response = await axios.post(
        "https://spacex-production.up.railway.app/graphql",
        {
          query: `
          query Query {
            ships {
              image
              name
              home_port
              id
              type
              year_built
            }
          }
          `,
        }
      );
    // const response = await client.query({
    //   query: gql`
    //   {
    //     launchesPast(limit: 100) {
    //       id
    //       mission_name
    //     }
    //   }
    // `,
    // });
    return response.data.data.ships; 
  } catch (error) {
    throw error;
  }
});
