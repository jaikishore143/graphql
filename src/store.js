// store.js
import { configureStore } from '@reduxjs/toolkit';
import countryReducer from './slice';

const store = configureStore({
  reducer: {
    country: countryReducer,
  },
});

export default store;
