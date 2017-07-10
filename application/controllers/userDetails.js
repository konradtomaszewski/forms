 app.controller('userDetails', function ($scope, $mdDialog) {
		$scope.user_id = sessionStorage.id;
		$scope.username_letter = sessionStorage.username_letter;
		$scope.username = sessionStorage.username;
		$scope.email = sessionStorage.email;
		
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
		
		function DialogController($scope, $mdDialog) {
			$scope.hide = function() {
			  $mdDialog.hide();
			};

			$scope.cancel = function() {
			  $mdDialog.cancel();
			};

			$scope.answer = function(answer) {
			  $mdDialog.hide(answer);
			};
		  }
 });