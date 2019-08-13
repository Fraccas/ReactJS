import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

const PostCard = (props) => {
    let link = `/${props.postData.id}/details`;
    return (
        <div className="post card-body bg-lightgrey m-2 rounded-5 border-bottom border-dark">
            <div className="post-name card-title">
                <h1>{props.postData.title}</h1>
            </div>
            <div className="post-content card-text">
                {props.postData.body}
            </div>
            <Link className="btn btn-primary btn-lg p-2 my-3 rounded-5" to={{pathname: link, state: {title: props.postData.title, body: props.postData.body}}}>
                View Comments
            </Link>
        </div>
    );
}

export default PostCard;