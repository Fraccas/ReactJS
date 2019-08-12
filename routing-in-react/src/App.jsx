import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Films from './components/Films';
import People from './components/People';

class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/films" component={Films}/>
                        <Route path="/people" component={People}/>
                    </Switch>
                </Fragment>
            </Router>
        );
    }
}

export default App;