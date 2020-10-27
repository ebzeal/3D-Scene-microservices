import { DataStore } from 'notarealdb';

const store = new DataStore('../data');

module.exports = {
  shapes: store.collection('shapes')
};
