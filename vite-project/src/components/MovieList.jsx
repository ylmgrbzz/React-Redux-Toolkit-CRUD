import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeMovie } from "../movieSlice";
import UpdateMovies from "./UpdateMovies";

const MovieList = () => {
  const movies = useSelector((state) => state.movies.movies);
  const dispatch = useDispatch();

  const [movieToUpdate, setMovieToUpdate] = useState(null);

  const handleRemoveMovie = (id) => {
    dispatch(removeMovie(id));
  };

  const handleUpdateMovie = (movie) => {
    setMovieToUpdate(movie); // Update modalini aç
  };

  return (
    <div>
      <h1>Movie List</h1>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
          <button onClick={() => handleRemoveMovie(movie.id)}>Remove</button>
          <button onClick={() => handleUpdateMovie(movie)}>Update</button>
        </div>
      ))}

      {movieToUpdate && (
        <UpdateMovies
          movie={movieToUpdate}
          onClose={() => setMovieToUpdate(null)}
        />
      )}
    </div>
  );
};

export default MovieList;
