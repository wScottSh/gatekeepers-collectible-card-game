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
      <section className='display-card'>
        <div className="wrapper">
          <ul>
            {this.state.cards.map((card) => {
              return (
                <li key={card.id}>
                  <Card title={card.title}
                        game={card.game}
                        type={card.type}
                        image={card.image}
                        attkName={card.attkName}
                        flavorText={card.flavorText} />
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    )
  }
}

export default CardCreator;
