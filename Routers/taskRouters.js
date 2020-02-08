const express = require('express');
const Task = require('../models/taskModels');

const router = express.Router();



router.get('/', async ( req,res ) => {
  try {
   const task = await Task.getProject();
    res.status(200).json(task);
  } catch(err) {
    res.status(500).json({ message: "Could not get projects!"});
  }
});

router.post('/', async ( req,res ) => {
  const body = req.body;

  try {
    const task = await Task.addProject(body);
    res.status(200).json(task);
  } catch(err) {
    res.status(500).json({ message: "could not add to projects!"});
  }
});

module.exports = router;
