import { configureStore } from '@reduxjs/toolkit';
import shipReducer from './slice';

const store = configureStore({
  reducer: {
    ship: shipReducer,
  },
});

export default store;
