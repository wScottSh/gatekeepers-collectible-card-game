import React, {Component} from 'react'
import Card from '../Card/Card'
import fire from '../../fire'

class CardCreator extends Component {
  constructor() {
    super()
    this.state = {
      cards: []
    }
  }

  componentDidMount() {
    const cardsRef = fire.database().ref('cards');
    cardsRef.on('value', (snapshot) => {
      console.log(snapshot.val());
      let cards = snapshot.val();
      let newState = [];
      for (let card in cards) {
        newState.push({
          id: card,
          title: cards[card].title,
          game: cards[card].game,
          type: cards[card].type,
          image: cards[card].image,
          attkName: cards[card].attkName,
          flavorText: cards[card].flavorText
        });
      }
      this.setState({
        cards: newState
      });
    });
  }

  render() {
    return (
      <div>
        <Card title={this.state.title}
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
