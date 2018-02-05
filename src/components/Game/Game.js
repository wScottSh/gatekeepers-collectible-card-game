import React, { Component } from 'react'
import Header from '../Header/Header'
import Form from '../Form/Form'
import CardCreator from '../CardCreator/CardCreator'

class Game extends Component {

  gameSettings 

  render() {
    return (
      <div>
        <Header title="Gatekeepers Card Creator" />
        <Form />
        <CardCreator />
      </div>
    );
  }
}

export default Game;
