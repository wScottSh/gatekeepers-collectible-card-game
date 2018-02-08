import React, {Component} from 'react'
import './Form.css'
import fire from '../../fire'

class Form extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      game: '',
      type: '',
      image: '',
      attkName: '',
      flavorText: ''
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
    const itemsRef = fire.database().ref('cards');
    const item = {
      title: this.state.title,
      game: this.state.game,
      type: this.state.type,
      image: this.state.image,
      attkName: this.state.attkName,
      flavorText: this.state.flavorText
    }
    itemsRef.push(item);
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
      <section className="inputContainer">
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="title" placeholder="What is the card's title?" onChange={this.handleChange} value={this.state.title} />
          <input type="text" name="game" placeholder="What is the card's title?" onChange={this.handleChange} value={this.state.game} />
          <input type="text" name="type" placeholder="What is the card's title?" onChange={this.handleChange} value={this.state.type} />
          <input type="text" name="image" placeholder="What is the card's title?" onChange={this.handleChange} value={this.state.image} />
          <input type="text" name="attkName" placeholder="What is the card's title?" onChange={this.handleChange} value={this.state.attkName} />
          <input type="text" name="flavorText" placeholder="What is the card's title?" onChange={this.handleChange} value={this.state.flavorText} />
          <button>Create Card</button>
        </form>
      </section>
    )
  }
}

export default Form;
