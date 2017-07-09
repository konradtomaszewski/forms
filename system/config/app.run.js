		app.run(['$location', '$rootScope', '$window', '$interval', 'md5',
				function($location, $rootScope, $window, $interval, md5) {
					$rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
						if (current.hasOwnProperty('$$route')) {
							$rootScope.title = current.$$route.title;
						};
						//check auth_user
						if(sessionStorage.user_auth){
							if(sessionStorage.user_auth != md5.createHash(sessionStorage.username)){
								sessionStorage.clear();
								window.location.href="login.html";
							};
						}
						else window.location.href="login.html";
					})
				}
		]);