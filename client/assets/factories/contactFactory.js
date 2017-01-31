console.log('in the factory')
myApp.factory('contactFactory', ['$http', function($http){
var factory = {}


factory.adduser = function(user, callback){
  $http.post('/create', user).then(function(returned_data){
    callback(returned_data.data);
  })
}

factory.loginAdmin = function(user, callback){
  console.log('login Mentory Factory')
  $http.post('/login', user).then(function(returned_data){
    callback(returned_data.data);
  })
}

factory.addmessage = function(message, callback){
  $http.post('/addmessage', message).then(function(returned_data){
    callback(returned_data.data);
    console.log(returned_data.data);
    console.log('in add message factory')
  })
}

factory.getMessages = function(callback){
  $http.get('/gettinem').then(function(returned_data){
    callback(returned_data.data);
    console.log(returned_data)
    console.log('in getting message factory')
  })
}



return factory;
}]);
