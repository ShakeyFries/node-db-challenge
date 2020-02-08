const express = require('express');
const Project = require('../models/projectModels');

const router = express.Router();



router.get('/', async ( req,res ) => {
  try {
   const project = await Project.getProject();
    res.status(200).json(project);
  } catch(err) {
    res.status(500).json({ message: "Could not get projects!"});
  }
});

router.post('/', async ( req,res ) => {
  const body = req.body;

  try {
    const project = await Project.addProject(body);
    res.status(200).json(project);
  } catch(err) {
    res.status(500).json({ message: "could not add to projects!"});
  }
});

module.exports = router;
