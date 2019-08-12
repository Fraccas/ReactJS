import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Card from './Card';

class ShowPerson extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            person: null
        };
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/people/" + this.state.id)
        .then(res => res.json())
        .then(obj => {
            this.setState({ person: obj});
            console.log(this.state.person);
        }).catch(e => console.log(e)) 
    }

    render() {
        return (
            <div className='bg-dark'>
                <div className="card-holder w-100 px-3 py-1"> 
                    <Card person={this.state.person}></Card>
                </div> 
                <Link className="btn btn-primary btn-block btn-lg p-3 w-95" to="/films">View Films</Link>    
            </div> 
        );
    }
}

export default ShowPerson;