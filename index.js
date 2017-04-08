var connect = require('connect');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var service = require('./routes/service');
var home = require('./routes/home');
var app = express();
var port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname,'client')));
app.use(bodyParser.json());

app.use('/service', service);
app.use('/', home);

  app.listen(port, ()=>{
    console.log('Logging server started on port '+port);
  });
