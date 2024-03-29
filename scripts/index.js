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
  .then(res => res.json())
  .then(jsonRes => {
    jsonRes.forEach(item => store.addItem(item));
    shoppingList.render();
  });

// api.createItem('Grapes') 
//   .then(res => res.json()) 
//   .then((newItem) => { 
//     store.addItem(newItem); 
//     shoppingList.render(); 
// }); 

api.getItems()
  .then(res => res.json())
  .then((items) => {
    const item = items[0];
    return api.updateItem(item.id, { name: 'foobar' });
  })
  .then(res => res.json())
  .then(() => console.log('updated!'));

