import React, { Component } from 'react';
import logo from '../images/logos/barclays.svg';
import './Home.css';
import Header from '../components/Header.js';
import TopComponent from '../components/TopComponent.js';

class Home extends Component {
  render() {
    return (
      <div className="Home">
       <Header/>
       <TopComponent/>
      </div>
    );
  }
}

export default Home;