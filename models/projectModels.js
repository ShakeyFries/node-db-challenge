const db = require('../data/db-config');

module.exports = {
      getProject,
      addProject
};

function getProject() {
      return db('project');
};

function addProject(body) {
      return db('project').insert(body);
};