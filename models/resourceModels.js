const db = require('../data/db-config');

module.exports = {
      getResource,
      addResource
};

function getResource() {
      return db('resource');
};

function addResource(body) {
      return db('resource').insert(body);
};