var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
require('./models/connection');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var travelsRouter = require('./routes/travels');
var bookingsRouter = require('./routes/bookings');


var app = express();
const cors = require('cors');
app.use(cors()); 


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/travels', travelsRouter);
app.use('/bookings', bookingsRouter);


module.exports = app;
