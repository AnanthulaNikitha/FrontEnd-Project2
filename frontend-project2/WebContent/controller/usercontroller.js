/**
 * 
 */
app.controller('UserController',function(UserService,$scope,$location)
        {
    
    $scope.register=function()
    {
        UserService.registerUser($scope.user).then (function(response)
        {
            $scope.message="Registered successfully..... Please Login...."
                $location.path=('/login')
        }, function(response)
        {
            $scope.error=response.data;
            $location.path('/registration')
        })
    
    }
    
    $scope.login=function(){
        UserService.login($scope.user),then(function(response){
            $rootScope.currentUser=response.data
            $location.path('/home')
            
        },function(response){
            $scope.error=response.data
            $location.path('/login')
        })
    }
})
