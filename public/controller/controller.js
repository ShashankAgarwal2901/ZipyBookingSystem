var app = angular.module('MyApp' , []);

app.controller('MainController' , function($scope , $http){
	console.log("Controller is working")
	$scope.rest=[{email:'Email or Username'}];
	console.log($scope.rest); /*ANGULAR PROBLEMS*/
	$scope.loginattempt = function(){
		console.log("Button clicked")
		$http.post('/button' , $scope.email).success(function(err,data){
			if(data){
				console.log("Confirmed User");
				$scope.rest.push({password:'Password'})
			}
			else{console.log(err)}
		});}
});