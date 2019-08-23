'use strict';

// eslint-disable-next-line no-unused-vars
const api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/smiti';

  const getItems = function() {
    return fetch(`${BASE_URL}/items`);

  };

  const createItem = function(name) {
    let newItem = JSON.stringify({name});
    console.log(newItem);
    return fetch(`${BASE_URL}/items`,
      {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: newItem
      });
  };

  const updateItem = function(id, updateData) {
    console.log(`${BASE_URL}/items/${id}`);
    let newData = JSON.stringify(updateData);
    return fetch(`${BASE_URL}/items/${id}`,
      {
        method: 'PATCH',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: newData
      });
  };

  const deleteItem = function(id) {
    return fetch(`${BASE_URL}/items/${id}`,
      {
        method: 'DELETE',
        headers: new Headers({'Content-Type': 'application/json'}),
      });

  };

  

  return {
    getItems,
    createItem,
    updateItem,
    deleteItem
  };
})();