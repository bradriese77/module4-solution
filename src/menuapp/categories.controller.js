(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['MenuDataService', 'items'];
function CategoriesController(MenuDataService, items) {
  console.log("CategoriesController");
  console.log(items);
  var categories = this;
  categories.items = items;
}

})();
