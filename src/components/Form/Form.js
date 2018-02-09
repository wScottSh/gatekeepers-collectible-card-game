import React, {Component} from 'react'
import './Form.css'
import fire from '../../fire'
import Card from '../Card/Card'

class Form extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Character Name',
      game: 'Game Name',
      type: 'Game Genre',
      image: 'http://static.pokemonpets.com/images/monsters-images-800-800/4211-Unown-K.png',
      attkName: 'Character\'s Attack',
      flavorText: 'Short description of the attack.'
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const cardsRef = fire.database().ref('cards');
    const card = {
      title: this.state.title,
      game: this.state.game,
      type: this.state.type,
      image: this.state.image,
      attkName: this.state.attkName,
      flavorText: this.state.flavorText
    }
    cardsRef.push(card);
    this.setState({
      title: '',
      game: '',
      type: '',
      image: '',
      attkName: '',
      flavorText: ''
    });
  }

  render() {
    return (
      <section className='innerModal'>
        <Card title={this.state.title}
          game={this.state.game}
          type={this.state.type}
          image={this.state.image}
          attkName={this.state.attkName}
          flavorText={this.state.flavorText} />
        <section className="inputContainer">
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="title" placeholder="Character Name" onChange={this.handleChange} value={this.state.title} />
            <input type="text" name="game" placeholder="Game Name" onChange={this.handleChange} value={this.state.game} />
            <input type="text" name="type" placeholder="Game Genre" onChange={this.handleChange} value={this.state.type} />
            <input type="text" name="image" placeholder="Image URL" onChange={this.handleChange} value={this.state.image} />
            <input type="text" name="attkName" placeholder="Attack Name" onChange={this.handleChange} value={this.state.attkName} />
            <input type="text" name="flavorText" placeholder="Short Card Description" onChange={this.handleChange} value={this.state.flavorText} />
          <button onClick={() => this.closeModal} >Submit Card</button>
          </form>
        </section>
      </section>
    )
  }
}

export default Form;
