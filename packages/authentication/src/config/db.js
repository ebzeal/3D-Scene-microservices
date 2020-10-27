import { DataStore } from 'notarealdb';

const store = new DataStore('./src/data');

module.exports = {
  users: store.collection('users')
};
