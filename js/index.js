var app = angular.module('myApp', ['ngMaterial', 'ngMessages']);

app.config(function($mdIconProvider) {
    $mdIconProvider
      //.iconSet("call", 'img/communication-icons.svg', 24)
      .iconSet("social", 'img/social-icons.svg', 24)
      .iconSet("label_outline", 'img/label_outline.svg', 24);
  })
