(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunchInput = "";
  $scope.lunchCheckResult = "";
  $scope.checkLunch = function() {
    if ($scope.lunchInput === "") {
      $scope.lunchCheckResult = "Please enter data first";
      return;
    }
    var lunchItemCount = $scope.lunchInput.split(",").length;
    if (lunchItemCount < 4) {
      $scope.lunchCheckResult = "Enjoy!";
    }
    else {
      $scope.lunchCheckResult = "Too Much!";
    }
  };
}

})();
