//index.js
const bodyParser = require('body-parser');
const express = require('express');
const config = require('./config/config.js');
const profile = require('./controllers/profiles.js');

require('./config/database.js')(config);


const app = express();
module.exports = app;

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.setHeader('access-control-allow-origin', '*');
  res.setHeader('access-control-allow-methods', 'POST, PUT, GET, DELETE');
  res.setHeader('access-control-allow-headers', 'x-parse-application-id, x-parse-rest-api-key, Content-Type, Accept');

  //res.setHeader('Content-Type', 'application/json');
  next();
});

app.post('/profiles', function(req, res){
  //post new profiles into database. expects body with title, author, date, and body
  profile.create(req, res)
})

app.put('/profiles/:id', function(req, res){
  //the put will include the profile id in the request.params
  profile.update(req, res)
})

app.get('/profiles', function(req, res){
  //retrieves profiles from database
  profile.get(req, res)
})

app.delete('/profiles/:id', function(req, res){
  //the delete will include the profile id in the request.params
  profile.delete(req, res)
})

app.get('*', function(req, res){
  //catch for a endpoint i dont support
  console.log("NOT FOUND");
  res.status(404)
})

app.listen('8000', function(){
  //which port i listen to
  console.log('listening on port 8000');
})