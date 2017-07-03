 app.controller('logout', function ($window, $scope, $sessionStorage) {
	 
	 $scope.del = function(){
		sessionStorage.removeItem('user_auth');
		sessionStorage.removeItem('username');
		sessionStorage.clear();
		$window.location.reload();
	 }
 });