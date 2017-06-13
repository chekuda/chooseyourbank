import React, { Component } from 'react';
import logo from '../images/fakelogo.png';
import './TopComponent.css';

class TopComponent extends Component {
  render() {
    return (
      <div className="TopComponent">
      	<img className="TopComponent-Logo" src={logo}/>
      	<div className="TopComponent-midText">{this.props.mainText}</div>
      	<div className="TopComponent-BottomText">{this.props.subText}</div>
      </div>
    );
  }
}
export default TopComponent;