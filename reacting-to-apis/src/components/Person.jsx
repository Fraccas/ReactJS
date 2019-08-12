import React from 'react';

const Person = (props) => {
    let link='https://ghibliapi.herokuapp.com/people/' + props.person.id;
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
            
            <a href={link} className="btn btn-primary btn-lg my-1" role="button" rel="noopener noreferrer" target="_blank">More Info</a>
        </div>
    );
}

export default Person;
