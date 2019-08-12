import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

const Person = (props) => {
    console.log('here');
    let path = "/people/" + props.person.id;
    return (
        <div className="person card-body bg-lightgrey m-2 rounded-5">
            <div className="person-name card-title">
                <h1>{props.person.name}</h1>
            </div>
            <div className="person-age card-text">
                {props.person.age}
            </div>
            <div className="person-gender card-text">
                {props.person.gender}
            </div>
        
            {showLink()}
        </div>
    );

        // show Person or back to People
        function showLink() {
            if (!window.location.href.includes(path)) { // don't show link if we are already on the page
                return (
                    <Link className="btn btn-primary btn-lg p-2 text-center center rounded-5" to={path}>
                        View More
                    </Link>
                );
            } else {
                return (
                    <Link className="btn btn-primary btn-lg p-2 text-center center rounded-5" to="/people">
                        Back to People
                    </Link>
                );
            }
        }
}

export default Person;
