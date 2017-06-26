  app.controller('PanelGroupsCtrl', PanelGroupsCtrl);
  app.controller('PanelMenuCtrl', PanelMenuCtrl);

 function PanelGroupsCtrl($mdPanel,$scope,$location) {
    this.settings = {
      name: 'settings',
      items: ['Home','Forms']
    };
	this.more = {
      name: 'settings',
      items: ['Wyloguj']
    };
	
   this.menuTemplate = '' +
        '<div class="menu-panel" md-whiteframe="4">' +
        '  <div class="menu-content">' +
        '    <div class="menu-item" ng-repeat="item in ctrl.items">' +
        '        <a class="md-button" ng-click="ctrl.closeMenu()" href="#/{{item}}">{{item}}</a>' +
        '    </div>' +
        '  </div>' +
        '</div>';

    $mdPanel.newPanelGroup('toolbar', {
      maxOpen: 2
    });

    $mdPanel.newPanelGroup('menus', {
      maxOpen: 3
    });

    this.showToolbarMenu = function($event, menu) {
      var template = this.menuTemplate;

      var position = $mdPanel.newPanelPosition()
          .relativeTo($event.srcElement)
          .addPanelPosition(
            $mdPanel.xPosition.ALIGN_START,
            $mdPanel.yPosition.BELOW
          );

      var config = {
        id: 'toolbar_' + menu.name,
        attachTo: angular.element(document.body),
        controller: PanelMenuCtrl,
        controllerAs: 'ctrl',
        template: template,
        position: position,
        panelClass: 'menu-panel-container',
        locals: {
          items: menu.items
        },
        openFrom: $event,
        focusOnOpen: true,
        zIndex: 100,
        propagateContainerEvents: true,
        groupName: ['toolbar', 'menus']
      };

      $mdPanel.open(config);
    };

  }

  function PanelMenuCtrl(mdPanelRef, $location,) {
    this.closeMenu = function() {
      mdPanelRef && mdPanelRef.close();
    };
  }