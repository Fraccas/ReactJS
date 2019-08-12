import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

class Home extends Component {

    render() {
        return (
            <div className="bg-light">
                <div className="bgi"></div>
                    <div class="m-3">
                        <Link className="btn btn-primary btn-lg btn-block p-3" to="/films">View Films</Link>
                        <Link className="btn btn-dark btn-lg btn-block p-3" to="/people">View People</Link>     
                    </div>
            </div>
        );
    }
}

export default Home;