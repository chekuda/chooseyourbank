(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

//import BanksInfo from './banksInfo';

var banksArray = null;

var requestBanksInfo = function requestBanksInfo() {
	var req = new XMLHttpRequest();
	req.open('GET', '/publishbankinfo');
	req.onload = function () {
		if (req.status == 200) {
			banksArray = JSON.parse(req.response);
			printBankLogos(banksArray);
		} else {
			new Error(req.statusText);
		}
	};

	req.onerror = function () {
		new Error('Network Error');
	};
	req.send();
};

var printBankLogos = function printBankLogos(banksArray) {
	var logoAndName = banksArray.map(function (bank) {
		return {
			logo: bank.logoURL,
			displayName: bank.displayName
		};
	});
	console.log(logoAndName);
};

window.onload = function () {
	requestBanksInfo();
};

},{}]},{},[1]);
