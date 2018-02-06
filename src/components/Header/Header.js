import React, {Component} from 'react'
import './Header.css'

class Header extends Component {
  render() {
    return (
      <header className="headerBlock">
        <h1 className="headerTitle">{this.props.title}</h1>
    </header>
    )
  }
}

export default Header;
