'use strict';
/* global shoppingList, store, Item */
// eslint-disable-next-line no-unused-vars

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});

store.items.push(Item.create('apples'));


fetch('https://thinkful-list-api.herokuapp.com/ei-student/items')
  .then(res => res.json())
  .then(data => console.log(data));

  api.getItems()
  .then(res => console.log(res));

console.log(api.BASE_URL);
