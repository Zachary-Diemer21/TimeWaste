//https://scotch.io/tutorials/easy-node-authentication-setup-and-local
//https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications

var express  = require('express');
var app      = express();
var port     = process.env.PORT || 5001;
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');

var configDB = require('./config/database.js');

// configuration ===============================================================
mongoose.connect(configDB.url); // connect to our database

require('./config/passport')(passport); // pass passport for configuration

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms

app.set('view engine', 'ejs'); // set up ejs for templating

// required for passport
app.use(session({ secret: 'ScorchTheWolf' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================
require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);


//Body-Parser Lib essentially parses any requests from the front end to the server and puts it into json format
// var express = require('express');
// var mongoose = require('mongoose');
// var bodyParser = require('body-parser');
// var MongoClient = require('mongodb').MongoClient
// var assert = require('assert');

// var app = express();

// // Database Connection URL
// var url = 'mongodb://localhost:27017/time-waste';

// app.get('/', (req,res) => {
// 	res.sendfile('index.html');
// });

// mongoose.connect(url)

// // Use connect method to connect to the server
// MongoClient.connect(url, (err, db) => {
//   assert.equal(null, err);
//   console.log("Connected successfully to server");

//   db.close();
// });


// app.listen('5001', () => {
// 	console.log("My App works WOOOO");
// });

