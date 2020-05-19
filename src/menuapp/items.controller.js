(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['$stateParams', 'MenuDataService'];
function ItemsController($stateParams, MenuDataService) {
console.log("Items Controller");
console.log($stateParams.categoryId);
  var items = this;
  //var Categories=
   MenuDataService.getItemsForCategory("C").then(function(rest) {

    items.items =rest.data.menu_items;
    console.log(items.items);

  });//$stateParams.categoryId);
}

})();
