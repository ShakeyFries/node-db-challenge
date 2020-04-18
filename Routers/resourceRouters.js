const express = require('express');
const Resource = require('../models/resourceModels');

const router = express.Router();

router.get('/', async ( req,res ) => {
      try {
       const resource = await Resource.getResources();
        res.status(200).json(resource);
      } catch(err) {
        res.status(500).json({ message: "Could not get resources!"});
      }
    });

    router.get('/:id', async (req, res) => {
      const resource_id = req.params.id;
  
      try{
          const resource = await Resources.getResourcesById(resource_id);
          res.status(200).json(resource);
      } catch (err) {
          res.status(500).json({ message: 'Could not get resource!.', err});
      };
  });
    
    router.post('/', async ( req,res ) => {
      const body = req.body;
    
      try {
        const resource = await Resource.addResources(body);
        res.status(200).json(resource);
      } catch(err) {
        res.status(500).json({ message: "could not add to resources!"});
      }
    });
    
    module.exports = router;