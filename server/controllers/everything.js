console.log('in everything server js')
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Contact = mongoose.model('Contact');
// var Mentee = mongoose.model('Mentee');

function usersController(){
  this.create = function(req,res){
    console.log(req.body)
    User.create(req.body, function(err, result) {
      if(err) {
        console.log('There were validation errors', err);
        res.json(err);
      } else {
        console.log('successfully added the admin!');
        console.log(result);
     res.json(result);
   }
  })
};
  this.login = function(req,res){
  console.log('in serverside login')
  var errors = {errors:{
      general: 'Invalid login information'}}
  User.findOne({email:req.body.email}).exec(function(err, user){
    if (!req.body.password||!req.body.email||!user){
      console.log('there are errors')
      console.log(errors)
      res.json(errors)
    } else {
        if (user.password != req.body.password) {
          console.log(errors)
          res.json(errors)
        } else {
          console.log('allgood in da login')
          req.session.userId = user._id;
          res.status(200).send("Good");
        }
      }
    })
  };

  this.addmessage = function(req,res){
    console.log('in add message server controller everything')
    var newMessage = new Contact(req.body)
    newMessage.save( function(err, result){
      if(err){
        console.log('unable to add message');
        console.log(err)
      }
      else {
        console.log('successfully added a message!');
        res.json(result);
      }
    })
  }
  this.gettinem = function (req,res) {
    console.log('getting messages in the server everything')
    Contact.find({}, function(err, data){
      if (err){
        res.sendStatus(500)
        console.log('didnt find any');
      } else {
        console.log('found and sending messages')
        console.log('sending messages from server to client')
        res.json(data);
        console.log(data)
      }
    })
  }
  // this.getAllMentors = function(req,res){
  //   Mentor.find({}, function(err, mentors) {
  //     if(err) {
  //     console.log('none');
  //     } else {
  //       console.log("Sending mentors from server")
  //       res.json(mentors);
  // }
  // })
  // }
  // this.getAllMentees = function(req,res){
  //   Mentee.find({}, function(err, mentees) {
  //     if(err) {
  //     console.log('none');
  //     } else {
  //       console.log("Sending mentees from server")
  //       res.json(mentees);
  // }
  // })
  // }
  //
  //
  // this.loginMentor = function(req,res){
  //   var errors = {errors:{
  //     general:{
  //       message:'Invalid login information'
  //     }
  //   }}
  //   Mentor.findOne({email:req.body.email}).exec(function(err,user){
  //     if(!req.body.email||!req.body.password || !user){
  //       res.json(errors)
  //     }else{
  //       if(user.password != req.body.password){
  //         res.json(errors);
  //       }else{
  //           req.session.user = {
  //             name: user.first,
  //             _id: user._id
  //           }
  //           res.send(user);
  //       }
  //     }
  //   })
  // }

};

module.exports = new usersController();
