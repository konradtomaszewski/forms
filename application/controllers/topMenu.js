  app.controller('PanelGroupsCtrl', PanelGroupsCtrl);
  app.controller('PanelMenuCtrl', PanelMenuCtrl);

 function PanelGroupsCtrl($mdPanel,$scope,$location, $timeout, $mdSidenav) {
    this.main_menu = [
		{
			icon: '',
			menu: 'Home'
		},
		{
			icon: '',
			menu: 'Forms'
		}
	];
	 this.menu1 = [
		{
			icon: '',
			menu: 'test'
		}
	];
	this.sidebar_menu = [
		{
			icon: 'settings_b.svg',
			menu: 'Ustawienia'
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