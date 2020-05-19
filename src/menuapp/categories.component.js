(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/menuapp/templates/categories.template.html',
  bindings: {
   items: '<'
 }.component('items', {
   templateUrl: 'src/menuapp/templates/items.template.html',
   bindings: {
     items: '<'
   }
});



})();
