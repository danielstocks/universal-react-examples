import express from 'express';
import React from 'react';
import morgan from 'morgan';
import ReactDOMServer from 'react-dom/server';
import Colors from './colors';
import getColors from './model';

var app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname);
app.use(express.static('./'));
app.use(morgan('dev'));

app.get('/', function (req, res) {
  getColors("blue", function(colors) {
    var content = ReactDOMServer.renderToString(
      React.createFactory(Colors)({
        colors: colors
      })
    );
    res.render('index', {
      content: content,
      json: JSON.stringify(colors)
    });
  });
});

var server = app.listen(3000, function () {
  console.log('Running...');
});
