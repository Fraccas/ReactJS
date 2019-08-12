import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Card from './Card';

class People extends Component {
    constructor(props) {
        super(props);

        this.state = {
            people: null
        };
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/people")
        .then(res => res.json())
        .then(obj => {
            this.setState({ people: obj});
        }).catch(e => console.log(e)) 
    }

    render() {
        return (
            <div className='bg-dark'>
                <div className="card-holder w-100 px-3 py-1"> 
                    {this.DisplayElements()}
                </div> 
                <Link className="btn btn-primary btn-block btn-lg p-3 w-95" to="/films">View Films</Link>    
            </div> 
        );
    }

    DisplayElements() {
        if (this.state.people) {
            return (
                this.state.people.map((value, index) => {
                    return <Card key={value.id} person={value}></Card>
                })
            );
        } else {
            return (
                <div>No data to display!</div>
            );
        }
    }
}

export default People;