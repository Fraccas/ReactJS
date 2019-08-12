
import React from 'react';

const Movie = (props) => {
    return (
        <div className="movie card-body bg-lightgrey m-2 rounded-5">
            <div className="movie-name card-title">
                <h1>{props.movie.title}</h1>
            </div>
            <div className="movie-description card-text">
                {props.movie.description}
            </div>
            <div className="movie-director m-2 p-3 btn-primary text-center center rounded-5">
                Director: {props.movie.director}
            </div>
        </div>
    );
}


export default Movie;
