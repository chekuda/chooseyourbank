import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
      	<div className="text-header">{this.props.inputText}</div>
      	<div className="info-logo">?</div>
      </div>
    );
  }
}

export default Header;