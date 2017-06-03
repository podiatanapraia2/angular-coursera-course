(function () {
'use strict';

angular.module('MenuApp')
.controller('ListCategoriesController', ListCategoriesController);


ListCategoriesController.$inject = ['categoryList'];
function ListCategoriesController(categoryList) {
  var ctrl = this;
  ctrl.categoryList = categoryList;
}

})();
