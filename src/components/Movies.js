import React from "react";
import { movies } from "../data";

function Movies() {
  const movieList = movies.map((movie) =>(
    <div key={movie.title}>
      <h2>Name: {movie.title}</h2>
      <p>Time: {movie.time} min.</p>
      <p>Genres:</p>
      <ul>
        {movie.genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  ))


  return <div>
    {/*{code here}*/}
    <h1>Movies Page</h1>
    {movieList}
    </div>;
}

export default Movies;
