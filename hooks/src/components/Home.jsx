import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import PostCard from './PostCard';

const Home = () => {
    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        let res = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await res.json();
        setPosts(posts);
    }

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div className="container bg-light">
            <div className="text-center">
                {posts.map(post => (
                    <PostCard key={post.id} postData={post}></PostCard>
                ))}
            </div>
        </div>
    );
}

export default Home;