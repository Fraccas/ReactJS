import React, {Component} from 'react';
import Card from './components/Card';

class App extends Component { 
    constructor(props) {
        super(props);

        this.state = {
            films: null, 
            showFilms: false,
            people: null,
            showPeople: false
        };
    }

    LoadFilms() {
        fetch("https://ghibliapi.herokuapp.com/films")
        .then(res => res.json())
        .then(obj => {
            this.setState({ films: obj, showFilms: true });
            this.setState({showPeople: false});
        }).catch(e => console.log(e))  
    }

    LoadPeople() {
        fetch("https://ghibliapi.herokuapp.com/people")
        .then(res => res.json())
        .then(obj => {
            this.setState({ people: obj, showPeople: true });
            this.setState({showFilms: false});
        }).catch(e => console.log(e))  
    }

    ToHome() {
        this.setState({showFilms: false, showPeople: false});
    }

    render() {
        if (this.state.showFilms || this.state.showPeople) {
            return (
                <>
                    <div className="bg-dark">
                        <h1 className="bg-primary text-white text-center m-0">Welcome to MovieDB</h1>
                        <div className="card-holder w-100 px-3"> 
                        {this.DisplayElements()}
                        <button onClick={() => { this.ToHome() }} id="homeB" type="button" className="btn btn-primary btn-block btn-lg p-3">Back to Home</button>
                    </div>
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <div className="bgi"></div>
                    <button onClick={() => { this.LoadFilms() }} id="filmB" type="button" className="btn btn-primary btn-lg btn-block m-3">Load Films</button>
                    <button onClick={() => { this.LoadPeople() }} id="peopleB" type="button" className="btn btn-dark btn-lg btn-block m-3">Load People</button>
                </>
              );
        }
    }

    DisplayElements() {
        if (this.state.films && this.state.showFilms) {
            return (
                this.state.films.map((value, index) => {
                    return <Card key={value.id} movie={value}></Card>
                })
            );
        } else if (this.state.people && this.state.showPeople) {
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


export default App;