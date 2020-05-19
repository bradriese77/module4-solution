(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['$stateParams', 'MenuDataService','items'];
function ItemsController($stateParams, MenuDataService,items) {
console.log("Items Controller");
console.log($stateParams.categoryId);
  var itemsList = this;
  console.log(items.data[$stateParams.categoryId].short_name);
  //var Categories=
   MenuDataService.getItemsForCategory(items.data[$stateParams.categoryId].short_name).then(function(rest) {

    itemsList.items =rest.data.menu_items;
    console.log(itemsList.items);
console.log(itemsList.items[0]);
  });//$stateParams.categoryId);
}

})();
