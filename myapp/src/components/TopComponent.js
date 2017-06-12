import React, { Component } from 'react';
import logo from '../logo.svg';
import './TopComponent.css';

class TopComponent extends Component {
  render() {
    return (
      <div className="TopComponent">
      	<img className="TopComponent-Logo" src={logo}/>
      	<div className="TopComponent-midText">Top text</div>
      	<div className="TopComponent-BottomText">* bottom text</div>
      </div>
    );
  }
}
export default TopComponent;