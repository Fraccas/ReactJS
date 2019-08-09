import React, {Component} from 'react';

import MovieCard from './components/MovieCard';

class App extends Component { 
    constructor(props) {
        super(props);

        this.state = {films: null};
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
        .then(res => res.json())
        .then(obj => {
            this.setState({ films: obj })
            console.log(this.state.films)
        }).catch(e => console.log(e))  
    }


    render() {
        return (
            <>
                <h1 className="bg-primary text-white p-2 text-center">Welcome to MovieDB</h1>
                <div className="card-holder w-100 p-3"> 
                {this.DisplayFilms()}
                </div>
            </>
        );
    }

    DisplayFilms() {
        if (this.state.films) {
            return (
                this.state.films.map((value, index) => {
                    console.log(value.id);
                    return <MovieCard key={value.id} movie={value}></MovieCard>
                })
            );
        } else {
            return (
                <div>No films to display!</div>
            );
        }
    }
}


export default App;