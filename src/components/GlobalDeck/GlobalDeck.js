import React, {Component} from 'react'
import './GlobalDeck.css'
import Card from '../Card/Card'
import AddCard from '../AddCard/AddCard'
import fire from '../../fire'

class GlobalDeck extends Component {
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

  removeItem(cardId) {
    const cardRef = fire.database().ref(`/cards/${cardId}`);
    cardRef.remove();
  }

  render() {
    return (
      <section className='display-card'>
        <ul className="deckWrapper">
          {this.state.cards.map((card) => {
            return (
              <section className="cardHolder">
                <li key={card.id}>
                  <Card title={card.title} game={card.game} type={card.type} image={card.image} attkName={card.attkName} flavorText={card.flavorText} />
                </li>
                <li>
                  <button onClick={() => this.removeItem(card.id)}>Remove Item</button>
                </li>
              </section>
            )
          })}
          <AddCard />
        </ul>
      </section>
    )
  }
}

export default GlobalDeck;
