import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import characters from './characters.json';
import CharacterCard from './components/CharacterCard';
import Nav from './components/Nav';
import Title from './components/Title';

function moveCharacters(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

class App extends Component {

  state = {
  characters,
  currentScore: 0,
  topScore: 0,
  rightWrong: "",
  clicked: [],
};


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
