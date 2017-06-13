import React, { Component } from 'react';
import xhr from 'xhr';
import './Form.css';
import Header from '../components/Header';
import TopComponent from '../components/TopComponent';
import Footer from '../components/Footer';

class Form extends Component {
	componentWillMount(){
    this.state = {
      bankName: 'Santander'
    }
	}

	getBanksInfo () {

	}

  render() {
    return (
      <div className="Form">
        <Header inputText="Enter your credentials"/>
        <TopComponent subText="We guarantee a simple, secure, transparent way to connect to yourbank account and keep your data secured." mainText="Your security is important."/>
        <div className="topText">
          <div className="bankname">{this.state.bankName}</div>
          <p>Insert your bank account credentials:</p>
        </div>
        <div className="loginForm">
       	  <form>
            <input type="text" name="name" placeholder="Personal ID"/>
            <input type="text" name="name" placeholder="Password"/>
            <input type="text" name="name" placeholder="Security Number"/>
            <input type="submit" value="Next" className="submitButton"/>
          </form>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Form;