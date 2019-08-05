import React, {Component} from 'react';

// const App = (props) => {
//     return <h1>Hello, {props.name}!</h1>;
// } 

class App extends Component { 
    constructor(props) {
        super(props);

        this.state = {
            name: 'Fraccas',
            hasLoaded: false
        };
    }
    
    handleInputChange = name => this.setState({name});


    handleClick = loaded => {
        this.setState({
            hasLoaded: loaded
        });
    }

    componentDidMount = () => {
        this.setState({
            hasLoaded: true
        });
    }

    render() {
        if (this.state.hasLoaded) {
            return (
                <React.Fragment>
                    <h1>{this.props.msg} {this.state.name}!</h1>
                    <input
                        value={this.state.name}
                        placeholder={'enter name'}
                        onChange={(event) => this.handleInputChange(event.target.value)}
                    /><br></br>
                    <button onClick={(event) => this.handleClick(false)}>
                        CheckLoaded
                    </button>
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <h1>Loading...</h1>
                    <button onClick={(event) => this.handleClick(true)}>
                        CheckLoaded
                    </button>
                </React.Fragment>
            );
        }
    }
}

export default App;