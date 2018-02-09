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
      image: 'http://sorensenmotorsports.com/wp-content/uploads/2015/08/circle.png',
      attkName: 'Character\'s Attack',
      flavorText: 'Short description of the attack.',
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
      title: 'Character Name',
      game: 'Game Name',
      type: 'Game Genre',
      image: 'http://sorensenmotorsports.com/wp-content/uploads/2015/08/circle.png',
      attkName: 'Character\'s Attack',
      flavorText: 'Short description of the attack.'
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
          <form className="formWrapper" onSubmit={this.handleSubmit}>
            <h2>Create a new card</h2>
            <h3>Character Name</h3>
            <input type="text" name="title" placeholder="Character Name" onChange={this.handleChange} value={this.state.title} />
            <h3>Game Name</h3>
            <input type="text" name="game" placeholder="Game Name" onChange={this.handleChange} value={this.state.game} />
            <h3>Game Genre</h3>
            <input type="text" name="type" placeholder="Game Genre" onChange={this.handleChange} value={this.state.type} />
            <h3>Image URL</h3>
            <input type="text" name="image" placeholder="Image URL" onChange={this.handleChange} value={this.state.image} />
            <h3>Attack Name</h3>
            <input type="text" name="attkName" placeholder="Attack Name" onChange={this.handleChange} value={this.state.attkName} />
            <h3>Short Card Description</h3>
            <input type="text" name="flavorText" placeholder="Short Card Description" onChange={this.handleChange} value={this.state.flavorText} />

          {   (this.state.title != 'Character Name'
             && this.state.game != 'Game Name'
             && this.state.type != 'Game Genre'
             && this.state.image != 'http://sorensenmotorsports.com/wp-content/uploads/2015/08/circle.png'
             && this.state.attkName != 'Character\'s Attack'
             && this.state.flavorText != 'Short description of the attack.') &&

            <button>Submit Card</button>
          }
          </form>
        </section>

      </section>
    )
  }
}

export default Form;
