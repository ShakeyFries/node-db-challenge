const db = require('../data/db-config');

module.exports = {
      getProject,
      addProject
};

function getProject() {
      return db('projects');
};

function addProject(body) {
      return db('projects').insert(body);
};