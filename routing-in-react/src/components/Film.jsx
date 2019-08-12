import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Card from './Card';

class Films extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            film: null
        };
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films/" + this.state.id)
        .then(res => res.json())
        .then(obj => {
            this.setState({ film: obj});
        }).catch(e => console.log(e)) 
    }

    render() {
        return (
            <div className='bg-dark'>
                <div className="card-holder w-100 px-3 py-1"> 
                    <Card movie={this.state.film}></Card>
                </div> 
                <Link className="btn btn-primary btn-block btn-lg p-3 w-95" to="/people">View People</Link>    
            </div> 
        );
    }

    DisplayElements() {
        if (this.state.films) {
            return (
                this.state.films.map((value, index) => {
                    return <Card key={value.id} movie={value}></Card>
                })
            );
        } else {
            return (
                <div>No data to display!</div>
            );
        }
    }
}

export default Films;