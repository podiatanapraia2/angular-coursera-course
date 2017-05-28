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

// function Person() {
//   this.fullName = "Yaakov";
//   this.fav = "Cookies";
//
//   this.describe = function () {
//     console.log('this is: ', this);
//     console.log(this.fullName + " likes " + this.fav);
//   };
// }

function Person() {
  var person = this;
  person.fullName = "Yaakov";
  person.fav = "Cookies";

  person.describe = function () {
    console.log('this is: ', person);
    console.log(person.fullName + " likes " + person.fav);
  };
}

var yaakov = new Person();
yaakov.describe();

var describe = yaakov.describe;
describe();
describe.call(yaakov);


})();
