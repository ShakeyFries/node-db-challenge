const express = require('express');
const Resource = require('../models/taskModels');

const router = express.Router();

router.get('/', async ( req,res ) => {
      try {
       const resource = await Resource.getProject();
        res.status(200).json(resource);
      } catch(err) {
        res.status(500).json({ message: "Could not get projects!"});
      }
    });
    
    router.post('/', async ( req,res ) => {
      const body = req.body;
    
      try {
        const resource = await Resource.addProject(body);
        res.status(200).json(resource);
      } catch(err) {
        res.status(500).json({ message: "could not add to projects!"});
      }
    });
    
    module.exports = router;