import React, { Component } from 'react';
import companyLogo from '../images/companyLogo.png'
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
      	<div className="Footer-Signature"><p><img className="companyLogo" src={companyLogo}/> Your data is secured by TrueLayer</p></div>
      	<div className="Footer-termPolicy"><p>Terms of use | Privacy Policy</p></div>
      </div>
    );
  }
}

export default Footer;