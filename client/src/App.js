import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passwords: [],
      comments: []
    }
  }

  componentDidMount() {
     this.getPasswords();
     this.getComments();
  }

   getPasswords = () => {
    // Get the passwords and store them in state
    fetch('/api/passwords')
      .then(res => res.json())
      .then(passwords => this.setState({ passwords }));
  }

   getComments = () => {
    // Get the passwords and store them in state
    fetch('/api/comments')
      .then(res => res.json())
      .then(comments => this.setState({ comments }));
  }

  render() {
      const { comments } = this.state;

    return (
     <div className="App">


        {comments.length ? (
          <div>
            <h1>Comments.</h1>
            <ul className="comments">
            
              {comments.map((comment, index) =>
                <li key={index}>
                  {comment}
                </li>
              )}
            </ul>
          </div>
        ) : (
          <div>
            <h1>No comments :(</h1>
          </div>
        )}
      </div>
    );
  }
}

export default App;
