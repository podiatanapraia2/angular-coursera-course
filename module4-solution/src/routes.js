(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })


  .state('listCategories', {
    url: '/listCategories',
    templateUrl: 'src/menuapp/templates/list-categories.template.html',
    controller: 'ListCategoriesController as catCtrl',
    resolve: {
      categoryList: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('listCategories.listDishes', {
    url: '/dishes/{catShortName}',
    templateUrl: 'src/menuapp/templates/list-dishes.template.html',
    controller: "ListDishesController as dishCtrl",
    resolve: {
      dishList: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
        return MenuDataService.getItemsForCategory($stateParams.catShortName);
      }]
    }
  });

}

})();
