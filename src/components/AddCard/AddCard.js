import React, { Component } from 'react'
import './AddCard.css'
import plus from '../../images/add-square-button.png'

class AddCard extends Component {
  render() {
    return (
      <div className="addWrapper">
        <img src={plus} alt="Add Card" />
      </div>
    )
  }
}

export default AddCard
