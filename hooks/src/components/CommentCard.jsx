import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

const CommentCard = (props) => {
    return (
        <div className="comment card-body bg-lightgrey m-2 rounded-5 border-bottom border-dark">
            <div className="comment-name card-title">
                <h3>{props.commentData.email}:</h3>
            </div>
            <div className="comment-content card-text">
                <h2>{props.commentData.body}</h2>
            </div>
        </div>
    );
}

export default CommentCard;