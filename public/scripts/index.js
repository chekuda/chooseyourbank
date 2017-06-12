import BanksInfo from './banksInfo';

const requestBanksInfo = () => {
	const req = new XMLHttpRequest();
	req.open('GET', '/publishbankinfo');
	req.onload = function() {
    if (req.status == 200) {
      console.log(req.response);
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

window.onload = () => {
	requestBanksInfo();
}