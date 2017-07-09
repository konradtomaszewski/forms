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
					console.log(data);
                        //console.log(data);
                        if ( data.trim() === 'correct') {
							sessionStorage.setItem('user_auth', md5.createHash(username));
							sessionStorage.setItem('username', username);
							//$http({get data user logged and insert to sessionStorage})
                            window.location.href = './';
                        } else {
                            $scope.errorMsg = "Username and password do not match.";
                        }
                })            
            }
    }]);