import React, {Component} from 'react';
import Comment from './components/Comment';

let CommentList = [
    {
        name: "Peep", 
        text: "Twitter be damned",
        date: "8/5/2019"
    },
    {
        name: "Ash",
        text: "You are so right Mayer",
        date: "8/4/2019"
    }, 
    {
        name: "Mayer",
        text: "Wow this is the best platform!",
        date: "8/4/2019"
    }
];
class App extends Component { 
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            text: '',
            lastText: '', // prevent double post
            submitted: ''
        };
    }

    // #region Event Handle Functions
    handleNameChange = name => this.setState({name});
    handleTextChange = text => this.setState({text});
    
    handleClick = (event) => { 
        this.setState({submitted: true}); // added to refresh render
        if (this.state.name.length > 1 && this.state.text.length > 1) {
            if (this.state.text !== this.state.lastText) { // double post
                let nComment = {
                    name: this.state.name,
                    text: this.state.text,
                    date: date()
                }
                CommentList.unshift(nComment);

                //prevent double post
                this.setState({lastText : this.state.text});
            } else alert("Please enter a new message!");
        } else alert("Please enter a valid name/comment!")
        
    }
    // #endregion

    render() {
        return (
            <React.Fragment>
                <h1 className="bg-primary text-white p-2">Welcome to Chirper!</h1>
                <div className="input-section bg-grey p-1 ml-2"> 
                    <input
                        id="nInput"
                        placeholder={'enter name'}
                        onChange={(event) => this.handleNameChange(event.target.value)}
                    />
                    <input
                        id="tInput"
                        placeholder={'enter comment'}
                        onChange={(event) => this.handleTextChange(event.target.value)}
                   />
                    <button onClick={(event) => this.handleClick(event)}>
                        Submit
                    </button>
                </div>

                
                <div className="comment-section">
                    {ShowComments()}
                </div>
            </React.Fragment>
        );
    }
}

let ShowComments = () => {
    let allComments = CommentList.map((c, i) => {
        return (
            <Comment
            author={{name: c.name, avatarUrl: ''}}
            text={c.text}
            date={c.date}
            key={i}
        />
        );
    });
    return allComments;
}

let date = () => {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!

    var yyyy = today.getFullYear();
    if (dd < 10) {
    dd = '0' + dd;
    } 
    if (mm < 10) {
    mm = '0' + mm;
    } 
    today = mm + '/' + dd + '/' + yyyy;
    return today;
}

export default App;