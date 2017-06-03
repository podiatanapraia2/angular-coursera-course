(function () {
'use strict';

angular.module('MenuApp')
.controller('ListDishesController', ListDishesController);


ListDishesController.$inject = ['dishList'];
function ListDishesController(dishList) {
  var ctrl = this;
  ctrl.dishList = dishList;
}

})();
