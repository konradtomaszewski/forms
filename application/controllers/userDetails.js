 app.controller('userDetails', function ($scope) {
		$scope.username = sessionStorage.username;
		$scope.email = sessionStorage.email;
 });