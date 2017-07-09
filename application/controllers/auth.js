var app = angular.module('myApp', ['ngMaterial','ngAnimate','ngAria','ngMessages','angular-md5']); 
	app.controller('AuthController', ['$scope','$http','md5', function($scope, $http, md5) {        
            this.postForm = function() {
                var encodedString = 'username=' +
                    encodeURIComponent(this.inputData.username) +
                    '&password=' +
                    encodeURIComponent(this.inputData.password);
				var username = this.inputData.username;

                $http({
                    method: 'POST',
                    url: 'application/models/auth/user_auth.php',
                    data: encodedString,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                })
                
                .success(function(data) {
					if ( data.trim() === 'correct') {
						//sessionStorage.setItem('user_auth', md5.createHash(username));
						$http({
							method: 'POST',
							url: 'application/models/auth/getUserDetails.php',
							data: 'username='+username,
							headers: {'Content-Type': 'application/x-www-form-urlencoded'}
						}).then(function (response) {
								sessionStorage.setItem('user_id', response.data.id);
								sessionStorage.setItem('username', response.data.username);
								sessionStorage.setItem('username_letter', response.data.username_letter);
								sessionStorage.setItem('email', response.data.email);
								sessionStorage.setItem('user_auth', md5.createHash(username));
								window.location.href = './';
						})
						
                    } 
					else {
							$scope.errorMsg = "Username and password do not match.";
                    }
                })
            }
    }]);