(function () {
'use strict';

angular.module('ShoppingList', [])
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController);

function ShoppingListCheckOffService() {
  var shoppingListService = this;
  shoppingListService.toBuyList = [
    {name: "eggs", quantity: 12},
    {name: "bacon", quantity: 5},
    {name: "potatoes", quantity: 8},
    {name: "onions", quantity: 3},
    {name: "syrup", quantity: 1}];

  shoppingListService.boughtList = [];

  shoppingListService.itemBought = function(index) {
    var boughtItem = shoppingListService.toBuyList[index];
    shoppingListService.toBuyList.splice(index, 1);
    shoppingListService.boughtList.push(boughtItem);
  };
}

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuyController = this;
  toBuyController.list = ShoppingListCheckOffService.toBuyList;

  toBuyController.checkOffItem = function(index) {
    ShoppingListCheckOffService.itemBought(index);
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBoughtController = this;
  alreadyBoughtController.list = ShoppingListCheckOffService.boughtList;
}

})();
