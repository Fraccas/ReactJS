import React from 'react';
import Movie from './Movie';

const MovieCard = (props) => {
    return (
        <div className="movie-card m-auto w-85 text-center shadow bg-white rounded">
            <Movie movie={props.movie} />
        </div>
    )
}

export default MovieCard;

