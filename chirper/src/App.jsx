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
            text: ''
        };
    }


    render() {
        return (
            <React.Fragment>
                <div className="header-section">
                    <h1 className="bg-primary text-white">Welcome to Chirper!</h1>
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