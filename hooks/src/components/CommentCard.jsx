import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

const CommentCard = (props) => {
    return (
        <div className="comment card-body bg-lightgrey m-2 rounded-5 border-bottom border-dark">
            <div className="comment-name card-title">
                <h1>{props.commentData.name}</h1>
            </div>
            <div className="comment-content card-text">
                {props.commentData.body}
            </div>
        </div>
    );
}

export default CommentCard;