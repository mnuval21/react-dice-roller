import React, { Component } from 'react';
import RollDice from './RollDice.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Dice Roller</h1>
        <RollDice />

      </div>
    );
  }
}
export default App;
