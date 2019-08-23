'use strict';

// eslint-disable-next-line no-unused-vars
const api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/smiti';

  function getItems() {
    return fetch(`${BASE_URL}/items`);
  }

  return {
    getItems
  };
})();