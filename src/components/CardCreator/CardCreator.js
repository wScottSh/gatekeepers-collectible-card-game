import React, {Component} from 'react'
import Card from '../Card/Card'
import fire from '../../fire'

class CardCreator extends Component {
  render() {
    return (
      <div>
        <h1>Card Creator</h1>
      {console.log(fire.database().ref('cards').orderByKey().limitToLast(100))}
        <Card title="Samus Aran"
              game="Super Metroid"
              type="Metroidvania"
              image="https://img00.deviantart.net/0eb9/i/2008/101/c/4/samus_aran_final_by_cliford417.jpg"
              attkName="Screw Attack"
              flavorText="The Screw Attack is an advanced movement system that allows Samus to emit energy waves from points on her armor while she somersaults into the air, turning her into a rotating energy blade of destruction."/>
      </div>
    )
  }
}

export default CardCreator;
