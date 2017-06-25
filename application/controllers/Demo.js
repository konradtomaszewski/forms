app.controller('DemoCtrl', ['$scope', '$mdDialog', '$mdMedia', '$http', '$timeout', function ($scope, $mdDialog, $mdMedia, $http, $timeout) {
    $scope.status = '  ';
    var questList = this;
    questList.allsQ = [];
		
	questList.del = function(item){
		  //var index=$scope.questList.allsQ.indexOf(item)
		  //alert(item);
		 $scope.questList.allsQ.splice(item,1);
	};
	
	$scope.postData = function () {
		$http.post('application/models/forms/getForms.php', {params:questList.allsQ}).success(
			function(data){
				//$scope.response = data
				$scope.response = 'Zapisano';
				questList.allsQ = []; 
				$timeout(function () { $scope.response = ''; }, 2000);   

			})
	};

    questList.openDialog = function($event) {

		$mdDialog.show({
			controller: function ($timeout, $q, $scope, $mdDialog) {
					var questList =this;
					$scope.cancel = function($event) {
						$mdDialog.cancel();
					};
					$scope.finish = function($event) {
						$mdDialog.hide();
					};
					$scope.answer = function(answer) {
						$mdDialog.hide(answer);
					};
			},
			controllerAs: 'questList',
			templateUrl: 'application/views/forms/dialog.tmpl.html',
			parent: angular.element(document.body),
			targetEvent: $event,
			clickOutsideToClose:true,
			locals: {parent: $scope},
		})
		.then(function(answer) {
			
			date = new Date(answer.data);
			year = date.getFullYear();
			month = date.getMonth()+1;
			dt = date.getDate();
			if (dt < 10) {  dt = '0' + dt; }
			if (month < 10) {  month = '0' + month;	}
			var i = year+'-' + month + '-'+dt;

			questList.allsQ.push({
				tytul: answer.tytul,
				data: i,
				number: answer.number
			});
		});
    };
	
	questList.openDialogEdit = function($event, $item) {
		
		tytul = questList.allsQ[$item].tytul;
		data = questList.allsQ[$item].data;
		number = questList.allsQ[$item].number;
		$scope.itemInArr = $item;
		//alert($scope.itemInArr);
		$mdDialog.show({
			locals: {parent: $scope, 
					tytul: tytul,
					data: data,
					number: number,
					},
			controller: function ($timeout, $q, $scope, $mdDialog, tytul, data, number) {
					var questList =this;
					$scope.test = {
					  tytul: tytul,
					  data: data,
					  number: number					 
					};

					$scope.cancel = function($event) {
						$mdDialog.cancel();
					};
					$scope.finish = function($event) {
						$mdDialog.hide();
					};
					$scope.answer = function(answer) {
						$mdDialog.hide(answer);
					};
				
					
			},
			controllerAs: 'questList',
			templateUrl: 'application/views/forms/editdialog.tmpl.html',
			parent: angular.element(document.body),
			targetEvent: $event,
			clickOutsideToClose:true
		})
		.then(function(answer, itemInArr) {
			
			date = new Date(answer.data);
			year = date.getFullYear();
			month = date.getMonth()+1;
			dt = date.getDate();
			if (dt < 10) {  dt = '0' + dt; }
			if (month < 10) {  month = '0' + month;	}
			var i = year+'-' + month + '-'+dt;
			
			/*questList.allsQ.push({
				tytul: answer.tytul,
				data: i,
				number: answer.number
			})
			$scope.questList.allsQ.splice(itemInArr,1);*/
			var elements = {
				tytul: answer.tytul,
				data: i,
				number: answer.number
			};
			questList.allsQ.splice($scope.itemInArr,1, elements);
			questList.tytul = '';
			questList.data = '';
			questList.number = '';
		});
    };

}]);
