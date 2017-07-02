angular.module('LoginForm',['ngMaterial','ngAnimate','ngAria','ngMessages'])
		.controller('login', function($scope){
			$scope.credentials  = {
				login: '',
				password: ''
			}; 
			
			$scope.login = function (credentials) {
				alert(credentials.login);
                /*var encodedString = 'username=' +
                    encodeURIComponent(this.inputData.username) +
                    '&password=' +
                    encodeURIComponent(this.inputData.password);*/
 
                /*$http({
                    method: 'POST',
                    url: 'userauth.php',
                    data: encodedString,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                })
                
                .success(function(data) {
                        //console.log(data);
                        if ( data.trim() === 'correct') {
                            window.location.href = 'welcome.php';
                        } else {
                            $scope.errorMsg = "Username and password do not match.";
                        }
                })    
				*/        
            }
		});