(function(){
  'use strict';

  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController (ShoppingListCheckOffService){
    this.itemList = ShoppingListCheckOffService.buyItemList();
    this.getOffItem = function (itemIndex) {
       ShoppingListCheckOffService.removeBuyItem(itemIndex);
    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController (ShoppingListCheckOffService){
    this.itemList = ShoppingListCheckOffService.alreadyBoughtItemList();
    this.cancelItem = function (itemIndex) {
       ShoppingListCheckOffService.removeBoughtItem(itemIndex);
    };
  }

  function ShoppingListCheckOffService (){
    var buyingItemList = [
                { name: 'Icecream', quantity: 50 },
                { name: 'Coffee', quantity: 5 },
                { name: 'Sandwich', quantity: 15 },
                { name: 'Honey', quantity: 2 },
                { name: 'Salad', quantity: 100 }
            ];
   this.buyItemList = function() {
      return buyingItemList;
   };

   var boughtItemList = [];

   this.alreadyBoughtItemList = function() {
      return boughtItemList;
   };

   this.removeBuyItem = function (itemIndex) {
            boughtItemList.push(buyingItemList.splice(itemIndex, 1)[0]);
   };

   this.removeBoughtItem = function (itemIndex) {
            buyingItemList.push(boughtItemList.splice(itemIndex, 1)[0]);
   };

  }

})();
