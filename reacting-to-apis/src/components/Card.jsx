import React from 'react';
import Movie from './Movie';
import Person from './Person';

const Card = (props) => {
    if (props.movie) {
        return (
            <div className="card m-1 text-center shadow bg-white rounded">
                <Movie movie={props.movie} />
            </div>
        );
    } else if (props.person) {
        return (
            <div className="card m-1 text-center shadow bg-white rounded">
                <Person person={props.person} />
            </div>
        );
    }
}

export default Card;