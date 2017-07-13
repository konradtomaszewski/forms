 app.controller('userDetails', function ($scope, $rootScope, $mdDialog) {
		$rootScope.user_id = sessionStorage.user_id;
		$scope.username_letter = sessionStorage.username_letter;
		$scope.username = sessionStorage.username;
		$scope.email = sessionStorage.email;
		//$scope.sidenav_bg = sessionStorage.sidenav_bg;
		//default
		if(!$rootScope.sidenav_bg_style){
			$rootScope.sidenav_bg_style = sessionStorage.sidenav_bg;
			$rootScope.sidenav_color_style = '#FFF';
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
		
		function DialogController($scope, $rootScope, $mdDialog, $http) {
			$scope.user_id = sessionStorage.id;
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
				$scope.user_id = sessionStorage.id;
				$rootScope.sidenav_bg_style = image_bg;
				$rootScope.sidenav_color_style = font_color;

				$http({
                    method: 'POST',
                    url: 'application/models/user_details/change_sidenav_bg.php',
                    data: 'sidenav_bg='+image_bg+'&user_id='+$rootScope.user_id,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                })
				sessionStorage.setItem('sidenav_bg', image_bg);

			};
		  }
 });