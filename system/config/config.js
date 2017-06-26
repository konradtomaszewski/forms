	var app = angular.module('myApp', ['ngRoute', 'ngMaterial', 'ngMessages']);
		app.config(['$routeProvider',
				function($routeProvider) {
					$routeProvider
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
						.when('/Home', {
							title: 'Strona główna',
							templateUrl: 'application/views/start.html',
							controller: ''
						})
						.otherwise({
							title: 'Strona główna',
							templateUrl: 'application/views/start.html',
							controller: ''
						})
				}
		]);
		
		app.config(['$mdThemingProvider',
				function($mdThemingProvider) {
					$mdThemingProvider.theme('default')
						.primaryPalette('indigo');
				}
		]);
		
		app.run(['$location', '$rootScope', function($location, $rootScope) {
				$rootScope.$on('$routeChangeSuccess', function (event, current, previous) {

					if (current.hasOwnProperty('$$route')) {

						$rootScope.title = current.$$route.title;
					}
				})
		}]);