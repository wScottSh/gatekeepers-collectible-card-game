import React, {Component} from 'react'
import Card from '../Card/Card'

class GlobalDeck extends Component {
  render() {
    return (
      <div>
        <h1>Global Deck</h1>
        <Card title="Doom Guy"
              game="DOOM"
              type="First Person Shooter"
              image="https://doomwiki.org/w/images/5/5c/MAP02_fist.png"
              attkName="Punch"
              flavorText="Punching is only about as effective as a pistol shot, but at least it never runs out of ammo."/>
      </div>
    )
  }
}

export default GlobalDeck;
