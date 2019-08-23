'use strict';

// eslint-disable-next-line no-unused-vars
const api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/smiti';

  function getItems() {
    return fetch(`${BASE_URL}/items`);
  }

  function createItem(name) {
    let newItem = JSON.stringify({name});
    return fetch(`${BASE_URL}/items`,
      {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: newItem
      });
  }

  return {
    getItems,
    createItem
  };
})();