import React, {Component} from 'react'
import './GlobalDeck.css'
import ReactModal from 'react-modal'
import Card from '../Card/Card'
import AddCard from '../AddCard/AddCard'
import Form from '../Form/Form'
import fire from '../../fire'

class GlobalDeck extends Component {
  constructor() {
    super()
    this.state = {
      cards: [],
      showModal: false
    }

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentDidMount() {
    const cardsRef = fire.database().ref('cards');
    cardsRef.on('value', (snapshot) => {
      // console.log(snapshot.val());
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

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
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
                  <button className="deleteButton" onClick={() => this.removeItem(card.id)}>Destroy Card</button>
                </li>
              </section>
            )
          })}
          <div onClick={this.handleOpenModal} >
            <AddCard closeModal={this.handleCloseModal}/>
          </div>
          <ReactModal
            isOpen={this.state.showModal}
            contentLabel="onRequestClose Example"
            onRequestClose={this.handleCloseModal}
            className="Modal"
            overlayClassName="Overlay">
            <Form />
          {/* <button onClick={this.handleCloseModal}>Cancel</button> */}
          </ReactModal>
        </ul>
      </section>
    )
  }
}

export default GlobalDeck;
