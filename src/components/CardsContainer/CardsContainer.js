import React, {Component} from 'react'
import './CardsContainer.css'
import CardCreator from '../CardCreator/CardCreator'
import GlobalDeck from '../GlobalDeck/GlobalDeck'

class CardsContainer extends Component {
  render() {
    return (
      <div className="cardsContainer">
        <h1>Cards Container</h1>
        <CardCreator />
        <GlobalDeck />
      </div>
    )
  }
}

export default CardsContainer;
