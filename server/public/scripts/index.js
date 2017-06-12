//import BanksInfo from './banksInfo';

let banksArray = null; 

const requestBanksInfo = () => {
	const req = new XMLHttpRequest();
	req.open('GET', '/publishbankinfo');
	req.onload = function() {
    if (req.status == 200) {
    	banksArray = JSON.parse(req.response);
      printBankLogos(banksArray);
    }
    else {
      new Error(req.statusText);
    }
  };

  req.onerror = function() {
  	new Error('Network Error');
  };
	req.send();
}

const printBankLogos = (banksArray) => {
	const logoAndName = banksArray.map(bank => {
		return {
			logo: bank.logoURL,
			displayName: bank.displayName
		}
	})
	console.log(logoAndName);
}

window.onload = () => {
	requestBanksInfo();
}