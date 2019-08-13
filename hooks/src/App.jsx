import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Comments from './components/Comments';

const App = () => {

    return (
        <Router>
            <Fragment>
                <Link className="btn btn-primary btn-lg btn-block p-4" to="/"><h1>Hooks in React</h1></Link>
                <Switch>
                    <Route exact path="/" component={Home}/>  
                    <Route path="/:id/details" component={Comments}/>
                </Switch>
            </Fragment>
        </Router>
    );
}


export default App; 