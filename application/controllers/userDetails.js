 app.controller('userDetails', function ($scope) {
		$scope.user_id = sessionStorage.id;
		$scope.username_letter = sessionStorage.username_letter;
		$scope.username = sessionStorage.username;
		$scope.email = sessionStorage.email;
 });