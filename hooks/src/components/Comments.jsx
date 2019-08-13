import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import CommentCard from './CommentCard';

const Comments = (props) => {
    const [comments, setComments] = useState([]);

    let link = `https://jsonplaceholder.typicode.com/posts/${props.match.params.id}/comments`;

    const getComments = async () => {
        // get comments on post
        let res = await fetch(link);
        let comments = await res.json();
        setComments(comments);
    }

    useEffect(() => {
        getComments();
    }, []);

    // original post  info
    let postTitle = props.location.state.title;
    let postBody = props.location.state.body;

    return (
        <div className="container bg-light text-center">
            <div className="post-container bg-dark text-light">
                <div className="post card-body m-2 rounded-5 border-bottom border-dark">
                    <div className="post-name card-title">
                        <h1>{postTitle}</h1>
                        <div className="post-content card-text">
                            {postBody}
                        </div>
                    </div>
                </div>
            </div>

            <div className="comment-container">
                <h1>Comments</h1><hr></hr>
                {comments.map(comment => (
                    showComments(comment)
                ))}
                <Link className="btn btn-primary btn-lg p-2 my-3 rounded-5" to='/'>
                    Back to Posts
                </Link>
            </div>
        </div>
    );

    function showComments(comment) {
        if (props.match.params.id == comment.postId) {
            return(<CommentCard key={comment.id} commentData={comment}></CommentCard>);
        }
    }
}

export default Comments;