import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './movieSlice.js';

const store = configureStore({
  reducer: rootReducer,
});

export default store;
