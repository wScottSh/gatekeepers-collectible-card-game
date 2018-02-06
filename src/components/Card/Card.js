import React, {Component} from 'react'
import './Card.css'

class Card extends Component {
  render() {
    return (
      <div className="cardContainer">
        <div className="cardTemplate">
          <p className="cardTitle">Samus Aran</p>
          <p className="cardGame">Super Metroid</p>
          <p className="cardType">Metroidvania</p>
          <img className="cardImage" src="https://img00.deviantart.net/0eb9/i/2008/101/c/4/samus_aran_final_by_cliford417.jpg" />
          <p className="cardAttkName">Screw Attack</p>
          <p className="cardFlavorText">The Screw Attack is an advanced movement system that allows Samus to emit energy waves from points on her armor while she somersaults into the air, turning her into a rotating energy blade of destruction.</p>
        </div>
      </div>
    )
  }
}

export default Card;
