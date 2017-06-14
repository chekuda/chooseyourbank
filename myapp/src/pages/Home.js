import React, { Component } from 'react';
import xhr from 'xhr';
import './Home.css';
import Header from '../components/Header';
import TopComponent from '../components/TopComponent';
import Footer from '../components/Footer';

class Home extends Component {
	componentWillMount(){
		this.getBanksInfo();
	}

	getBanksInfo () {
		this.setState({ banks: [] });

		xhr.get('http://localhost:7000/publishbankinfo', (err, res) => {
			if (err) {
				new Error('BankEnd error');
			}

			this.setState({ banks: JSON.parse(res.body) })
		});
	}

  render() {
    return (
      <div className="Home">
        <Header inputText="Choose your Bank"/>
        <TopComponent mainText="Appname wants to access your bank data for:" subText="• Identification • Personal finance manager"/>
        <div className="listBanks">
       	  {this.state.banks.map((bank, index) => {
            let bkImage = {
              backgroundImage: 'url( '+bank.logoURL+')'
            };
       		  return <div className="bankLogo" key={`bank-${index}`}>
       		  	<a href={'/form/' + bank.displayName} style={bkImage}></a></div>
       	  })}
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Home;