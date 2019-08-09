

import React from 'react';

const Person = (props) => {
    return (
        <div className="person">
            <div className="person-name">
                {props.name}
            </div>
            <div className="person-age">
                {props.age}
            </div>
            <div className="person-gender">
                {props.gender}
            </div>
            <div className="person-repsonse">
                {props.response}
            </div>
        </div>
    );
}

export default Person;

// person's name, age, gender, and a link to that particular person's JSON 