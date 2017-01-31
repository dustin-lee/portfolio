console.log('in message client controller')
myApp.controller('messageController', ['contactFactory', '$location', '$routeParams', messageController]);

function messageController(contactFactory, $location, $routeParams){
  var _this = this;

  function getMessages(){
    contactFactory.getMessages(function(data){
      _this.messages=data;
      console.log('get the messages', data)
    })
  }
  getMessages();

  this.addmessage = function(){
    console.log('in addmessage function', this.newcontact)
    contactFactory.addmessage(this.newcontact, function(data){
      console.log("passed")
      if(data.hasOwnProperty('errors')){
        console.log(data)
        console.log('this.message')
        this.messageErrors = data.errors
      } else {
        $location.path('/thankyou');
        getMessages();
      }
    })
  }

}
