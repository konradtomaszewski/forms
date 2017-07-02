	var app = angular.module('myApp', ['ngRoute', 'ngMaterial', 'ngMessages', 'ngStorage', 'ngAnimate','ngAria', 'angular-md5']);
	
		app.config(['$routeProvider',
				function($routeProvider) {
					$routeProvider
						.when('/', {
							title: 'Strona główna',
							templateUrl: 'application/views/start.html',
							controller: ''
						})
						.when('/logout', {
							title: 'Logowanie',
							templateUrl: 'application/views/logout.html',
							controller: ''
						})
						.when('/Home', {
							title: 'Strona główna',
							templateUrl: 'application/views/start.html',
							controller: ''
						})
						.when('/Forms', {
							title: 'Forms',
							templateUrl: 'application/views/forms/forms.html',
							controller: 'DemoCtrl'
						})
						.when('/showCharInfo/:personName', {
							title: 'Szczegóły rekordu',
							templateUrl: 'charInfo.html',
							controller: 'people'
						})
						.when('/Error',{
							title: 'Błąd 404',
							templateUrl: 'application/views/404.html',
							controller: ''
						})
						.otherwise({
							redirectTo: '/Error'
						})
				}
		]);
		
		app.config(['$mdThemingProvider',
				function($mdThemingProvider) {
					$mdThemingProvider
						.theme('default')
						.primaryPalette('indigo');
				}
		]);
		
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