import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

const Movie = (props) => {
    let path = "/films/" + props.movie.id;
    return (
        <div className="movie card-body bg-lightgrey m-2 rounded-5">
            <div className="movie-name card-title">
                <h1>{props.movie.title}</h1>
            </div>
            <div className="movie-description card-text">
                {props.movie.description}
            </div>
            <div className="movie-director cart-text">
                <h2>Directed by {props.movie.director}</h2>
            </div>
            {showLink()}
            
        </div>
    );

    // show Movie or back to Films
    function showLink() {
        if (!window.location.href.includes(path)) { // don't show link if we are already on the page
            return (
                <Link className="btn btn-primary btn-lg p-2 text-center center rounded-5" to={path}>
                    View More
                </Link>
            );
        } else {
            return (
                <Link className="btn btn-primary btn-lg p-2 text-center center rounded-5" to="/films">
                    Back to Films
                </Link>
            );
        }
    }
}


export default Movie;
