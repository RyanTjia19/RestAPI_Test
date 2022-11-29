//npm install express
//^use this on the terminal to install the proper packages

var express = require("express");
var app = express();

//Get the database which is just a .json file
const fs = require('fs');
let rawdata = fs.readFileSync('./db.json');
var data = JSON.parse(rawdata);

//routes
app.get('/', (req, res) => {
	res.send('<h1> API server </h1>');
});

app.get('/api', (req, res) => {
	var outputData = {
		word: data["test"]
	}
	res.json(outputData);
});

app.get('/api/by_word/:word', (req, res) => {
	let chosen = req.params["word"];

	var filteredData = data["test"].filter(x => x.word.includes(chosen));

	var outputData = {
		word: filteredData
	}
	res.json(outputData);
});

app.listen(3000, function() {
	console.log("Server is up at 'localhost:3000'");
})