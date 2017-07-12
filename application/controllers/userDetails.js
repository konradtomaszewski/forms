 app.controller('userDetails', function ($scope, $rootScope, $mdDialog) {
		$scope.user_id = sessionStorage.id;
		$scope.username_letter = sessionStorage.username_letter;
		$scope.username = sessionStorage.username;
		$scope.email = sessionStorage.email;
		//$scope.sidenav_bg = sessionStorage.sidenav_bg;
		
		if(!$rootScope.background) $rootScope.background = 'assets/img/1.jpg';

		

		
		$scope.showAdvanced = function(ev) {
			$mdDialog.show({
				controller: DialogController,
				templateUrl: 'application/views/user_settings/background_sidenav.html',
				parent: angular.element(document.body),
				targetEvent: ev,
				clickOutsideToClose:true,
				fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
			})
			.then(function(answer) {
				$scope.status = 'You said the information was "' + answer + '".';
			}, function() {
				$scope.status = 'You cancelled the dialog.';
			});
		};
		
		function DialogController($scope, $rootScope, $mdDialog) {
			$scope.hide = function() {
			  $mdDialog.hide();
			};

			$scope.cancel = function() {
			  $mdDialog.cancel();
			};

			$scope.answer = function(answer) {
			  $mdDialog.hide(answer);
			};
			
			 
  
			$scope.change_bground = function (image_bg) {
				//$registry.reset();
				$rootScope.background = 'assets/img/'+image_bg;
				//$rootScope.background = $registry.get('sidenav_bg2');
			};
		  }
 });