import React, {Component} from 'react'
import './Form.css'
import fire from '../../fire'

class Form extends Component {
  constructor() {
    super();
    this.state = {
      currentItem: '',
      username: ''
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
    const itemsRef = fire.database().ref('items');
    const item = {
      title: this.state.currentItem,
      user: this.state.username
    }
    itemsRef.push(item);
    this.setState({
      currentItem: '',
      username: ''
    });
  }

  render() {
    return (
      <section className="inputContainer">
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="username" placeholder="What's your name?" onChange={this.handleChange} value={this.state.username} />
          <input type="text" name="currentItem" placeholder="What are you bringing?" onChange={this.handleChange} value={this.state.currentItem} />
          <button>Create Card</button>
        </form>
      </section>
    )
  }
}

export default Form;
