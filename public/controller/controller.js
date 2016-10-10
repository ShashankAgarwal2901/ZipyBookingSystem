var app = angular.module('MyApp' , []);

app.controller('MainController' , function($scope , $http){
	console.log("Controller is working")
	$scope.loginattempt = function(){
		console.log("Button clicked")
		$http.post('/button' , $scope.email).success(function(err,data){
			console.log(data);
		});
	}
});