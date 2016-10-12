var app = angular.module('MyApp' , []);

app.controller('MainController' ,['$scope' , '$http' , function($scope , $http ){
	console.log("Controller is working")	 /*ANGULAR PROBLEMS*/
	var checked =false;
	$scope.details={Username:''};
	/*$scope.response=[String,String];*/
	$scope.loginattempt = function(){
		console.log("Button clicked");
		$http.post('/button' , $scope.details).success(function(data ,err){
					if (data!='no such user'){
						console.log("Correct info");
						if(checked==0){
						$(".myDiv").append('<br/><p>User exists</p>').hide().fadeIn('slow');
						checked=true;
						$scope.details.Password="";}
						if (data=='Incorrect'){$(".Login").append('<br/><p>Incorrect Username or Password</p>').hide().fadeIn('slow')}
					}
					
					else if(data=='no such user'){
						console.log("New")
						$(".Login").prepend('<h4> No such User detected , Sign up ! </h4>').hide().fadeIn('slow');
						$scope.details.email="";
						$scope.details.Password="";
						$scope.details.ConfirmPassword="";
					} ;
				});}
}]);