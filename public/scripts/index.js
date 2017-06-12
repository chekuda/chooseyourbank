import BankConsumer from './BankConsumer';

const firstFuntion = () => {
	const bankConsumer = new BankConsumer('image','barclays');
	console.log(bankConsumer.getBankLogo());
}

window.onload = () => {
	firstFuntion();
}