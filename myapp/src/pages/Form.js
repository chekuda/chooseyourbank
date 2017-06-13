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

	sendLoginDetails() {
    const personalId = (document.getElementById('personalId') || {}).value;
    const password = (document.getElementById('Password') || {}).value;
    const snumber = (document.getElementById('Snumber') || {}).value;

    if(personalId && password && snumber){
        xhr.post('http://localhost:7000/logindata', {name: 'jose'},(err, resp) => {
          if (err) {
            new Error('BankEnd error');
          }
          console.log(JSON.parse(resp.body));
        });
    }
    else{
      alert('Information missed');
    }
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
            <input type="text" id="personalId" placeholder="Personal ID"/>
            <input type="text" id="Password" placeholder="Password"/>
            <input type="text" id="Snumber" placeholder="Security Number"/>
            <div className="submitButton" onClick={this.sendLoginDetails}>Next</div>
          </form>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Form;