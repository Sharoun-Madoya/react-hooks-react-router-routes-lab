import React from "react";
import { actors } from "../data";

function Actors() {
  const actorsList = actors.map((actor) =>(
  <div key={actor.name}>
  <h2>Name: {actor.name}</h2>
  <p>Movies</p>
  <ul>
    {actor.movies.map((movie)=>(
    <li key={movie}>{movie}</li>
  ))}
  </ul>
  </div> ));


  return ( <div>
    {/*{code here}*/}
    <h1>Actors Page</h1>
    {actorsList}
    </div>);
}

export default Actors;
