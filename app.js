const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const port = 7000;
const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/build'));

app.get('/', (req,res,next)=>{
	res.sendFile(__dirname + '/index.html');
});

app.listen(port, (err) => {
	if(err) console.log(err);
	console.log('Listening on port '+ port);
})