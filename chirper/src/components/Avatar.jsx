import React from 'react';

const Avatar = (props) => {
    return (
        <img className="Avatar"
        width="42"
        //src= {props.user.avatarUrl}
        src = "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png"
        alt = {props.user.name}
        />
    );
}

export default Avatar;