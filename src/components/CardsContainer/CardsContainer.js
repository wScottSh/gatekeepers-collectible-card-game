import React, {Component} from 'react'
import './CardsContainer.css'
import GlobalDeck from '../GlobalDeck/GlobalDeck'

class CardsContainer extends Component {
  render() {
    return (
      <div className="cardsContainer">
        <GlobalDeck />
      </div>
    )
  }
}

export default CardsContainer;
