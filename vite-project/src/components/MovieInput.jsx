import { useState } from "react";
import { addMovie } from "../movieSlice";
import { useDispatch } from "react-redux";

const MovieInput = () => {
  const [newMovie, setNewMovie] = useState("");
  const dispatch = useDispatch();

  const handleAddMovie = () => {
    if (!newMovie) return;
    dispatch(addMovie(newMovie));
    setNewMovie("");
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={newMovie}
          onChange={(e) => setNewMovie(e.target.value)}
        />
        <button onClick={handleAddMovie}>Add Movie</button>
      </div>
    </>
  );
};

export default MovieInput;
