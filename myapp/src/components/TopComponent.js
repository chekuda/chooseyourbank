import React, { Component } from 'react';
import logo from '../images/fakelogo.png';
import './TopComponent.css';

class TopComponent extends Component {
  render() {
    return (
      <div className="TopComponent">
      	<img className="TopComponent-Logo" src={logo}/>
      	<div className="TopComponent-midText">Appname wants to acess your bak data for:</div>
      	<div className="TopComponent-BottomText">* identification * Personal finance Manager</div>
      </div>
    );
  }
}
export default TopComponent;