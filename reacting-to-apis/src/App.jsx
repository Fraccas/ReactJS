import React, {Component} from 'react';

import MovieCard from './components/MovieCard';

class App extends Component { 
    constructor(props) {
        super(props);

        this.state = {
            films: null, 
            showFilms: false
        };
    }

    LoadFilms() {
        fetch("https://ghibliapi.herokuapp.com/films")
        .then(res => res.json())
        .then(obj => {
            this.setState({ films: obj });
            this.setState({showFilms: true});
        }).catch(e => console.log(e))  
    }


    render() {
        if (this.state.showFilms) {
            return (
                <>
                    <div className="bg-dark">
                        <h1 className="bg-primary text-white p-2 text-center">Welcome to MovieDB</h1>
                        <div className="card-holder w-100 p-3"> 
                        {this.DisplayFilms()}
                    </div>
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <div className="bgi">
                        
                    </div>
                    <button onClick={() => { this.LoadFilms() }} id="filmB" type="button" className="btn btn-primary btn-lg btn-block my-3">Load Films</button>
                    <button id="peopleB" type="button" className="btn btn-dark btn-lg btn-block my-3">Load People</button>
                </>
              );
        }
    }

    DisplayFilms() {
        if (this.state.films && this.state.showFilms) {
            return (
                this.state.films.map((value, index) => {
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