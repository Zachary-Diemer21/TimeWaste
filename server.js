//Body-Parser Lib essentially parses any requests from the front end to the server and puts it into json format
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

app.listen('5001', () => {
	console.log("My App works WOOOO");
});

