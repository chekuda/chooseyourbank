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
        <Header/>
        <TopComponent/>
        <div className="listBanks">
       	  {this.state.banks.map((bank, index) => {
       		  return <div className="bankLogo" key={`bank-${index}`}>
       		  	<a href='#'><img key={`bank-${index}`} src={bank.logoURL}/></a></div>
       	  })}
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Home;