import React, {Component} from 'react'
import './Card.css'

class Card extends Component {
  render() {
    return (
      <div className="cardContainer">
        <div className="cardTemplate">
          <p className="cardTitle">{this.props.title}</p>
          <p className="cardGame">{this.props.game}</p>
          <p className="cardType">{this.props.type}</p>
          <img className="cardImage" src={this.props.image} alt={this.props.title} />
          <p className="cardAttkName">{this.props.attkName}</p>
          <p className="cardFlavorText">{this.props.flavorText}</p>
        </div>
      </div>
    )
  }
}

export default Card;
