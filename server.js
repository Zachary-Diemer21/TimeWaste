//Body-Parser Lib essentially parses any requests from the front end to the server and puts it into json format
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

app.get('/', (req,res) => {
	res.sendfile('index.html');
});

var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/';

// Use connect method to connect to the server
MongoClient.connect(url, (err, db) => {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  
  db.close();
});


app.listen('5001', () => {
	console.log("My App works WOOOO");
});

