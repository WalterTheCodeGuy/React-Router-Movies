import React from 'react';
import { NavLink } from 'react-router-dom';

function SavedList(props) {
  const routeToHome = event => {
    event.preventDefault();
    props.history.push("/");
  }

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <NavLink to={`/movies/${movie.id}`} className="saved-movie">{movie.title}</NavLink>
      ))}
      <button onClick={routeToHome} className="home-button">Home</button>
    </div>
  );
}
export default SavedList;
