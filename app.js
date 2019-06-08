const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require("mongoose");
const nunjucks = require('nunjucks');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

mongoose.connect('mongodb://localhost:27017/link-manager', { useNewUrlParser: true })
    .then(() => 'You are now connected to Mongo!')
    .catch((err) => console.error('Something went wrong', err));

const env = nunjucks.configure('views', {
    autoescape: true,
    express: app,
    watch: true
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;

app.listen(3000, () => {
    console.log("App listening on port 3000");
  });
