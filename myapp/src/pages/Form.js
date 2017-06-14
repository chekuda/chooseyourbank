import React, { Component } from 'react';
import xhr from 'xhr';
import './Form.css';
import Header from '../components/Header';
import TopComponent from '../components/TopComponent';
import Footer from '../components/Footer';

class Form extends Component {
	componentWillMount(){
    this.getBankInfo();
	}

  getBankInfo () {
    this.setState({ bank: {} });

    xhr.get('http://localhost:7000/publishbankinfo', (err, res) => {
      if (err) {
        new Error('BankEnd error');
      }
      let currentBank = JSON.parse(res.body).filter((bank) => {
          return bank.displayName === this.props.params['bankId']
        });

      this.setState({ bank: currentBank[0] })
    });
  }


	sendLoginDetails() {
    const loginDataToSend = {
      personalId: (document.getElementById('personalId') || {}).value,
      password: (document.getElementById('Password') || {}).value,
      snumber: (document.getElementById('Snumber') || {}).value
    }

    if(loginDataToSend.personalId && loginDataToSend.password && loginDataToSend.snumber){
        xhr.post('http://localhost:7000/logindata', {json: loginDataToSend },(err, res) => {
          if (err) {
            new Error('BankEnd error');
          }
          console.log(res.body);
        });
    }
    else{
      alert('Information missed');
    }
  }

  render() {
    console.log(this.props.params['bankId']);
    return (
      <div className="Form">
        <Header inputText="Enter your credentials"/>
        <TopComponent subText="We guarantee a simple, secure, transparent way to connect to yourbank account and keep your data secured." mainText="Your security is important."/>
        <div className="topText">
          <div className="bankname">{this.state.bank.displayName}</div>
          <p>Insert your bank account credentials:</p>
        </div>
        <div className="loginForm">
       	  <form>
            <input type="text" id="personalId" required placeholder="Personal ID"/>
            <input type="text" id="Password" required placeholder="Password"/>
            <input type="text" id="Snumber" required placeholder="Security Number"/>
            <div className="submitButton" onClick={this.sendLoginDetails}>Next</div>
          </form>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Form;