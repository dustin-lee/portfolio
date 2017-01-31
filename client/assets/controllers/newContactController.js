console.log('in contatcontroller')
myApp.controller('newContactController', ['contactFactory', '$location', '$routeParams', newContactController]);

function newContactController(contactFactory, $location, $routeParams){
  var _this = this;

  this.adduser = function(){
    contactFactory.adduser(this.user, function(data){
      console.log("passed")
      if(data.hasOwnProperty('errors')){
        this.regErrors = data.errors
      } else {
        console.log(data)
        $location.path('/daleeadminlogin');
      }
    })
  }

  this.loginAdmin = function(){
    contactFactory.loginAdmin(this.user, function(data){
      if(data.hasOwnProperty('errors')){
        console.log('we got errors for login')
        _this.loginErrors = data.errors
        console.log(this.loginErrors)
        } else {
          console.log('passing to factory login')
          $location.path('/showcontacts');
        }
      })
    }
}
