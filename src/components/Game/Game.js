import React, { Component } from 'react'
import './Game.css'
import Header from '../Header/Header'
import Form from '../Form/Form'
import CardsContainer from '../CardsContainer/CardsContainer'

class Game extends Component {

  gameSettings

  render() {
    return (
      <div className="gameContainer">
        <Header title="Gatekeepers Card Creator" user="Username"/>
        <div className="contentContainer">
          <CardsContainer />
          <Form />
        </div>
      </div>
    );
  }
}

export default Game;
