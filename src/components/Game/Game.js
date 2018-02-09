import React, { Component } from 'react'
import './Game.css'
import Header from '../Header/Header'
import CardsContainer from '../CardsContainer/CardsContainer'

class Game extends Component {

  gameSettings

  render() {
    return (
      <div className="gameContainer">
        <Header title="Gatekeepers Card Creator" user="Username"/>
        <div className="contentContainer">
          <CardsContainer />
        </div>
      </div>
    );
  }
}

export default Game;
