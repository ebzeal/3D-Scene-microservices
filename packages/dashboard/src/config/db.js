import { DataStore } from 'notarealdb';

const store = new DataStore('../data');

module.exports = {
  dashboard: store.collection('dashboard')
};
