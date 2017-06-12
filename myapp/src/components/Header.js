import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
      	<div className="text-header">This it the header</div>
      	<div className="info-logo">I</div>
      </div>
    );
  }
}

export default Header;