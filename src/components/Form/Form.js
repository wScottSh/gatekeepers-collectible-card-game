import React, {Component} from 'react'
import './Form.css'

class Form extends Component {
  constructor() {
    super();
    this.state = {
      currentItem: '',
      username: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
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
