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
