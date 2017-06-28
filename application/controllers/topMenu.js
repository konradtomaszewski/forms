  app.controller('PanelGroupsCtrl', PanelGroupsCtrl);
  app.controller('PanelMenuCtrl', PanelMenuCtrl);

 function PanelGroupsCtrl($mdPanel,$scope,$location, $timeout, $mdSidenav) {
    this.settings = {
		name: ['Menu'],
		items: ['Home','Forms']
	};
	this.user = [
		{
			icon: 'settings_b.svg',
			menu: 'Ustawienia'
		},
		{
			icon: 'logout.svg',
			menu: 'Wyloguj'
		}
		
	];
	//$scope.toggleLeft = toggleLeft('left');
	 
	this.toggleRight = function() {
        $mdSidenav('right').toggle();
    };
  }

  function PanelMenuCtrl(mdPanelRef, $location,) {
    this.closeMenu = function() {
      mdPanelRef && mdPanelRef.close();
    };
  }