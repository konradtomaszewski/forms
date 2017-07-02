 app.controller('logout', function ($window, $scope, $localStorage) {
	 
	 $scope.del = function(){
		localStorage.removeItem('user_auth');
		localStorage.removeItem('username');
		localStorage.clear();
		$window.location.reload();
	 }
 });