const db = require('../data/db-config');

module.exports = {
      getProject,
      getProjectsById,
      addProject
};

function getProject() {
      return db('project');
};

function getProjectsById(project_id) {
      return db('project')
          .join('task', 'project.id', 'task.project_id')
          .join('project_resource', 'project.id', 'project_resource.project_id')
          .join('resource', 'resource.id', 'project_resource.resource_id')
          .orderBy('task.id')
          .where({ 'project.id': project_id });
  };

function addProject(body) {
      return db('project').insert(body);
};