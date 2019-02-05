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
      <Wrapper>
        <Nav
          title="Game of Thrones Clicky Game"
          score={this.state.currentScore}
          topScore={this.state.topScore}
          rightWrong={this.state.rightWrong}
        />

        <Title>
          Try to click on each character, but don't hit any duplicates, or the game of thrones is lost
        </Title>
    );
  }
}

export default App;
