import React from 'react';
import Avatar from './Avatar';

const UserInfo = (props) => {
    return (
        <div className="UserInfo">
            <Avatar user={props.user}/>
            <div className="UserInfo-name">
                {props.user.name}<hr></hr>
            </div>
        </div>
    );
}

export default UserInfo;