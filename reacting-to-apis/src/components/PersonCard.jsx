import React from 'react';
import Person from './Person';

const PersonCard = (props) => {
    return (
        <div className="person-card">
            <Person person={props.person} />
        </div>
    );
}

export default PersonCard;
