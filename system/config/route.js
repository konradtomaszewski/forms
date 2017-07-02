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