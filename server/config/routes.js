var path = require('path');
var users = require('../controllers/everything.js');
var contacts = require('../controllers/everything.js');

function loginAuthentication(req,res,next){
  if (req.session.userId){
    next();
  }else{
    res.status(401).send("User not found");
  }
}

module.exports = function(app){
  app.post('/create', users.create);
  app.post('/login', users.login);
  app.post('/addmessage', contacts.addmessage);
  app.get('/gettinem', contacts.gettinem);
};
//
// function userAuth(req,res,next){
//   if(req.session.user){
//     next();
//   }else{
//     res.sendStatus(401);
//   }
