(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {

  $scope.checkFoodAmt = function () {
    var foodAr = $scope.foodString.split(",");
    var count = 0;
    for (var i = 0; i < foodAr.length; i++){
      if (foodAr[i].trim() != "") {
        count++;
      }
    }
    if (count > 3){
      $scope.foodStatus = "Too much!";
    }
    else {
      $scope.foodStatus = "Just right :)";
    }
    /*if ($scope.foodString.split(",").length > 3) {
      $scope.foodStatus = "Too much";
    }
    else {
      $scope.foodStatus = "just right";
    }*/
  };

  $scope.checkForEmpties = function () {
    $scope.emptyMsg = "";
    var hasEmpties = $scope.foodString.split(",").some(function(food){
      return food.trim() == "";
    });
    if (hasEmpties) {
      $scope.emptyMsg = "Blank items are not counted."
    }
  };

}

})();
