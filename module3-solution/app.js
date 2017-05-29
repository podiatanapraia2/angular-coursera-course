(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.service('MenuSearchService', MenuSearchService)
.controller('NarrowItDownController', NarrowItDownController)
.directive('foundItems', FoundItemsDirective);

MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
  var service = this;

  service.getMatchedMenuItems = function(searchTerm) {
    return $http({
        url: "https://davids-restaurant.herokuapp.com/menu_items.json"
      }).then(narrowDownResult);

    function narrowDownResult(result) {
      var filteredData = [];
      var allItems = result.data.menu_items;
      for (var index in allItems) {
        var item = allItems[index];
        if (item.description.indexOf(searchTerm) !== -1) {
          filteredData.push(item);
        }
      }
      return filteredData;
    }
  }
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var controller = this;
  controller.found = [];
  controller.nothingFound = false;
  controller.searchTerm = ""
  controller.narrowItDown = function() {
    if (controller.searchTerm !== "") {
      MenuSearchService.getMatchedMenuItems(controller.searchTerm)
      .then(function (result) {
        controller.found = result;
        controller.nothingFound = (controller.found.length === 0);
      });
    }
    else {
      controller.found = [];
      controller.nothingFound = true;
    }
  }
  controller.remove = function(index) {
    controller.found.splice(index, 1);
  }
}

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      items: '<',
      removeItem: '&',
      nothingFound: '<'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'foundItems',
    bindToController: true
  }
  return ddo;
}

function FoundItemsDirectiveController() {
}

})();
