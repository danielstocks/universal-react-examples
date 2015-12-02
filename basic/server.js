import express from 'express';
import React from 'react';
import morgan from 'morgan';
import ReactDOMServer from 'react-dom/server';
import HelloMessage from './hello-message';

var app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname);
app.use(express.static('./'));
app.use(morgan('dev'));

var content = ReactDOMServer.renderToString(
  React.createFactory(HelloMessage)({
    name: "John"
  })
);

app.get('/', function (req, res) {
  res.render('index', { content: content });
});

var server = app.listen(3000, function () {
  console.log('Running...');
});
