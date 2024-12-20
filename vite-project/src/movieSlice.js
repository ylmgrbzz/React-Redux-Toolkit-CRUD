import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [
    {
      id: 1,
      title: "The Shawshank Redemption",
      director: "Frank Darabont",
      rating: 9.3,
      releaseDate: "1994-10-14",
      runtime: 142,
      genre: ["Drama"],
      cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
      plot: "Two imprisoned",
    },
    {
      id: 2,
      title: "The Godfather",
      director: "Francis Ford Coppola",
      rating: 9.2,
      releaseDate: "1972-03-24",
      runtime: 175,
      genre: ["Crime", "Drama"],
      cast: ["Marlon Brando", "Al Pacino", "James Caan"],
      plot: "The aging patriarch",
    },
    {
      id: 3,
      title: "The Dark Knight",
      director: "Christopher Nolan",
      rating: 9.0,
      releaseDate: "2008-07-18",
      runtime: 152,
      genre: ["Action", "Crime", "Drama"],
      cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
      plot: "When the menace",
    },
    {
      id: 4,
      title: "12 Angry",
      director: "Sidney Lumet",
      rating: 8.9,
      releaseDate: "1957-04-10",
      runtime: 96,
      genre: ["Drama"],
      cast: ["Henry Fonda", "Lee J. Cobb", "Martin Balsam"],
      plot: "The defense and the prosecution",
    },
  ],
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      state.movies.push(action.payload);
    },
    removeMovie: (state, action) => {
      state.movies = state.movies.filter(
        (movie) => movie.id !== action.payload
      );
    },
    updateMovie: (state, action) => {
      const index = state.movies.findIndex(
        (movie) => movie.id === action.payload.id
      );
      state.movies[index] = action.payload;
    },
  },
});

export const { addMovie, removeMovie, updateMovie } = movieSlice.actions;

export default movieSlice.reducer;
