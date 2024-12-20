import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateMovie } from "../movieSlice";

const UpdateMovies = ({ movie, onClose }) => {
  const [updatedMovie, setUpdatedMovie] = useState(movie);
  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch(updateMovie(updatedMovie));
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedMovie({ ...updatedMovie, [name]: value });
  };

  return (
    <div>
      <h2>Update Movie</h2>
      <input
        type="text"
        name="title"
        value={updatedMovie.title}
        onChange={handleChange}
        placeholder="Title"
      />
      <input
        type="text"
        name="director"
        value={updatedMovie.director}
        onChange={handleChange}
        placeholder="Director"
      />
      <input
        type="number"
        name="rating"
        value={updatedMovie.rating}
        onChange={handleChange}
        placeholder="Rating"
      />
      <button onClick={handleUpdate}>Update Movie</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default UpdateMovies;
