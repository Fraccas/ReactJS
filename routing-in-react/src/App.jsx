import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Films from './components/Films';
import People from './components/People';
import Film from './components/Film';

class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Link className="btn btn-primary btn-lg btn-block p-4" to="/"><h1>Routing in React</h1></Link>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/films" component={Films}/>
                        <Route exact path="/people" component={People}/>
                        <Route path="/films/:id" component={Film}/> 
                    </Switch>
                </Fragment>
            </Router>
        );
    }
}

export default App;