import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      dreams: [],
      led_one: true,
      comments: []
    }

    this.onInputChange = this.onInputChange.bind(this);
    this.onInputKeyPress = this.onInputKeyPress.bind(this);
    this.addDream = this.addDream.bind(this);
    this.getDreams = this.getDreams.bind(this);
  }

  onInputChange(e) {
        this.setState({ inputText: e.target.value });
    }

  onInputKeyPress(e) {
        if (e.key === "Enter") {
            this.addItem();
        }
    }

  addDream() {
        const dreamToAdd = this.state.inputText;
        const dreams = this.state.dreams;
        this.setState({
            inputText: "",
            dreams: dreams.concat(dreamToAdd)
        });
    }

  componentDidMount() {
     // this.getComments();
     this.getDreams();
  }

// if using mongdob 

  //  getComments = () => {
  //   // Get the passwords and store them in state
  //   fetch('/api/comments')
  //     .then(res => res.json())
  //     .then(comments => this.setState({ comments }));
  // }

  getDreams = () => {
    // Get the passwords and store them in state
    fetch('/api/dreams')
      .then(res => res.json())
      .then(dreams => this.setState({ dreams }));
  }

  render() {
      const { dreams } = this.state;
      const { inputText } = this.state;

    return (
     <div className="App">
         <input type="text" className="inputclass" id="textfield1" placeholder='Enter a dream.' 
                   value={inputText} onChange={this.onInputChange} onKeyPress={this.onInputKeyPress} />
                <br />
                <br />
                <button className="button" onClick={this.addDream} >+</button>
        {dreams.length ? (
          <div>
            <h1>BSG Enigma </h1>
            <p>{this.state.dreams[0].text}</p>
            <p>{this.state.dreams[0].author}</p>
            <p>{this.state.dreams[this.state.dreams.length-1].text}</p>

          </div>
        ) : (
          <div>
            <h1>No dreams yet!(</h1>
          </div>
        )}
      </div>
    );
  }
}

export default App;
