		app.run(['$location', '$rootScope', '$window', '$interval', 'md5',
				function($location, $rootScope, $window, $interval, md5) {
					$rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
						if (current.hasOwnProperty('$$route')) {
							$rootScope.title = current.$$route.title;
						};
						//check auth_user
						if(localStorage.user_auth){
							if(localStorage.user_auth != md5.createHash(localStorage.username)){
								localStorage.clear();
								window.location.href="login.html";
							};
						}else window.location.href="login.html";
						$interval( function(){
							delete localStorage['user_auth'];
							// delete all the required localStorage variables after 20 min
						}, 1000*60*20);
						//delete localStorage['user_auth']; //delete now
					})
				}
		]);