  app.controller('PanelGroupsCtrl', PanelGroupsCtrl);
  app.controller('PanelMenuCtrl', PanelMenuCtrl);

 function PanelGroupsCtrl($mdPanel,$scope,$location) {
    this.settings = {
		name: ['Menu'],
		items: ['Home','Forms']
	};
	this.more = {
		name: ['User'],
		items: ['Wyloguj']
	};
  }

  function PanelMenuCtrl(mdPanelRef, $location,) {
    this.closeMenu = function() {
      mdPanelRef && mdPanelRef.close();
    };
  }