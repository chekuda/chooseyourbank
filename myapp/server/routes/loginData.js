const express = require('express');
const path = require('path');
const router = express.Router();

router.post('/', function(req, res, next) {
	console.log(req.body)
	res.send(JSON.stringify( {success: true} ));
});

module.exports = router;