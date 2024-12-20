import { useDispatch, useSelector } from "react-redux";
import { removeMovie } from "../movieSlice";

const MovieList = () => {
  const movies = useSelector((state) => state.movies.movies);
  const dispatch = useDispatch();
  const handleRemoveMovie = (id) => {
    dispatch(removeMovie(id));
  };

  return (
    <div>
      <h1>movie list</h1>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
          <button onClick={() => handleRemoveMovie(movie.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
