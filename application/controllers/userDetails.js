 app.controller('userDetails', function ($scope, $rootScope, $mdDialog) {
		$scope.user_id = sessionStorage.id;
		$scope.username_letter = sessionStorage.username_letter;
		$scope.username = sessionStorage.username;
		$scope.email = sessionStorage.email;
		//$scope.sidenav_bg = sessionStorage.sidenav_bg;
		
		if(!$rootScope.sidenav_bg){
			$rootScope.sidenav_bg = '1.jpg';
			$rootScope.sidenav_color = '#FFF';
		}

		

		
		$scope.showAdvanced = function(ev) {
			$mdDialog.show({
				controller: DialogController,
				templateUrl: 'application/views/user_settings/background_sidenav.html',
				parent: angular.element(document.body),
				targetEvent: ev,
				clickOutsideToClose:true,
				fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
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
			
			 
  
			$scope.change_sidenav_style = function (image_bg, font_color) {
				$rootScope.sidenav_bg = image_bg;
				$rootScope.sidenav_color = font_color;

			};
		  }
 });