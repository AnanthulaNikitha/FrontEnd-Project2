/**
 * 
 */
app.factory('UserService',function($http)
{
    var userService={}

    userservice.registerUser=function(user)
    {
        return $http.post("http:localhost:8081/backend_project2/registration",user)
    }
return userService;
})