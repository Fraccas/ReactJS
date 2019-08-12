import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

class Films extends Component {

    render() {
        return (
            <div className='bg-light'>
                <h1>This is films</h1> 
                <Link className="btn btn-primary btn-lg btn-block p-3" to="/">View Home</Link>
                <Link className="btn btn-dark btn-lg btn-block p-3" to="/people">View People</Link>    
            </div> 
        );
    }
}

export default Films;