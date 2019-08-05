import React from 'react';
import UserInfo from './UserInfo';

const Comment = (props) => {
    return (
        <div className="Comment bg-dark text-white p-2 border  border-primary">
            <UserInfo user={props.author} />
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {props.date}
            </div>
        </div>
    );
}

export default Comment;