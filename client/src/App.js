import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      quotes: [],
      led_one: true
    }
  }

  componentDidMount() {
     // this.getComments();
     this.getQuotes();
  }

// if using mongdob 

  //  getComments = () => {
  //   // Get the passwords and store them in state
  //   fetch('/api/comments')
  //     .then(res => res.json())
  //     .then(comments => this.setState({ comments }));
  // }

   getQuotes = () => {
    // Get the passwords and store them in state
    fetch('/api/quotes')
      .then(res => res.json())
      .then(quotes => this.setState({ quotes }));
  }

  render() {
      const { quotes } = this.state;

    return (
     <div className="App">
         
        {quotes.length ? (
          <div>
            <h1>BSG Enigma </h1>
            <p>{this.state.quotes[this.state.quotes.length-1].text}</p>

          </div>
        ) : (
          <div>
            <h1>No quotes yet!(</h1>
          </div>
        )}
      </div>
    );
  }
}

export default App;