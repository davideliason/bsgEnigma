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
     this.getComments();
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
            <h1>BSG Enigma </h1>
            <p>{this.state.comments[0].text}</p>
            <p>{this.state.comments[0].author}</p>

          </div>
        ) : (
          <div>
            <h1>No comments yet!(</h1>
          </div>
        )}
      </div>
    );
  }
}

export default App;
