const express = require('express');
const Project = require('../models/projectModels');

const router = express.Router();



router.get('/', async (req, res) => {
  try {
      const proj = await Project.getProject();
      res.status(200).json(proj);
  } catch (err) {
      res.status(500).json({ message: 'Could not retrieve projects.', err});
  };
});

router.get('/:id', async (req, res) => {
  const project_id = req.params.id;
  
  try {
      const proj = await Projects.getProjectsById(project_id);
      res.status(200).json(proj);
  } catch (err) {
      res.status(500).json({ message: 'Could not retrieve project.', err});
  };
});

router.post('/', async (req, res) => {
  const body = req.body;

  try {
      const proj = await Project.addProject(body);
      res.status(200).json(proj);
  } catch (err) {
      res.status(500).json({ message: 'Could not add project.', err});
  };
});

module.exports = router;
