import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  savedMovies: [],
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovie: (state, action) => {
        const movieToAdd = action.payload;
        if (!state.savedMovies.some(movie => movie.name === movieToAdd.name)) {
          state.savedMovies.push(movieToAdd);
        }
    },
    removeMovie: (state, action) => {
      state.savedMovies = state.savedMovies.filter(movie => movie.name !== action.payload.name);
    },
  },
});

export const { addMovie, removeMovie } = movieSlice.actions;
export default movieSlice.reducer;
