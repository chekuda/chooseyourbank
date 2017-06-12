import React, { Component } from 'react';
import logo from '../images/logos/barclays.svg';
import './Home.css';
import Header from '../components/Header.js';
import TopComponent from '../components/TopComponent.js';
import Footer from '../components/Footer.js';

class Home extends Component {
  render() {
    return (
      <div className="Home">
       <Header/>
       <TopComponent/>
       <Footer/>
      </div>
    );
  }
}

export default Home;