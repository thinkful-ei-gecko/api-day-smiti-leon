'use strict';
/* global Item */
// eslint-disable-next-line no-unused-vars
const store = (function(){
  const addItem = function(name) {
    this.items.push(name);
  };

  const findById = function(id) {
    return this.items.find(item => item.id === id);
  };

  const findAndUpdate = function(id, newData){
    var findId = this.findById(id);
    Object.assign(findId, newData);
    console.log(`newData is ${newData}`);
    console.log(`obj is ${Object.keys(findId)}`);
  };

  

  const findAndDelete = function(id) {
    this.items = this.items.filter(item => item.id !== id);
  };


  const toggleCheckedFilter = function() {
    this.hideCheckedItems = !this.hideCheckedItems;
  };

  const setItemIsEditing = function(id, isEditing) {
    const item = this.findById(id);
    item.isEditing = isEditing;
  };

  const setSearchTerm = function(term) {
    this.searchTerm = term;
  };

  return {
    items: [],
    hideCheckedItems: false,
    searchTerm: '',

    addItem,
    findById,
    findAndUpdate,
    findAndDelete,
    toggleCheckedFilter,
    setSearchTerm,
    setItemIsEditing,
  };
  
}());
