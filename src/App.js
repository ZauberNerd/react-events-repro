import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    events: [],
  };
  componentDidMount() {
    window.addEventListener('mousemove', event => {
      this.setState({ events: [...this.state.events, event.type] });
    }, false);
  }
  render() {
    return (
      <div className="App">
        <button onClick={(event) => console.log(event)}>click me</button>
        <div>
          {this.state.events.map(event => (
            <div>{event}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
