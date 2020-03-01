const router = require('express').Router();
let Plant = require('../models/plant.model');

router.route('/').get((req, res) => {
    Plant.find()
        .then(plants => res.json(plants))
        .catch(err => res.status(400).json('Error: ' + err));
});

// make route with add, make variables for database. 
// All fields  below are required, regardless of the model. 
router.route('/add').post((req, res) => {
        const xLong = Number(req.body.xLong);
        const yLat = Number(req.body.yLat);
        const streetTreeId = Number(req.body.streetTreeId);
        const species = req.body.species;
        const DBH = Number(req.body.DBH);
        const siteDeveloped = req.body.siteDeveloped;
        const siteSize = req.body.siteSize;  
        const notes = req.body.notes; 
        const address = req.body.address;
        const neighborhood = req.body.neighborhood;
        const scientific = req.body.scientific;
        const family = req.body.family;
        const genus = req.body.genus;
        const common = req.body.common;
        functionalType = req.body. functionalType;
        const size = req.body.size;
        const edible = req.body.edible;
        const native = req.body.native;
        const bloomPeriod = req.body.bloomPeriod;
        const fruitBegin = req.body.fruitBegin;
        const fruitEnd = req.body.fruitEnd;

        const newPlant = new Plant({
            xLong,
            yLat, 
            streetTreeId, 
            species, 
            DBH,
            siteDeveloped,
            siteSize,
            notes, 
            address, 
            neighborhood, 
            scientific, 
            family, 
            genus, 
            common,
            functionalType, 
            size, 
            edible, 
            native, 
            bloomPeriod,
            fruitBegin,
            fruitEnd
        });

        newPlant.save()
            .then(() => res.json('Plant Added!'))
            .catch( err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    // find id by getting the parameters from the url
    Plant.findById(req.params.id)
    .then(plant => res.json(plant))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    // same as above, but delete item found in parameter
    Plant.findByIdAndDelete(req.params.id)
    .then(() => res.json('Plant deleted.'))
    .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/update/:id').post((req, res) => {
    Plant.findById(req.params.id)
    .then( plant => {
        plant.xLong = Number(req.body.xLong);
        plant.yLat = Number(req.body.yLat);
        plant.streetTreeId = Number(req.body.streetTreeId);
        plant.species = req.body.species;
        plant.DBH = Number(req.body.DBH);
        plant.siteDeveloped = req.body.siteDeveloped;
        plant.siteSize = req.body.siteSize; 
        plant.notes = req.body.notes; 
        plant.address = req.body.address;
        plant.neighborhood = req.body.neighborhood;
        plant.scientific = req.body.scientific;
        plant.family = req.body.family;
        plant.genus = req.body.genus;
        plant.common = req.body.common;
        functionalType = req.body. functionalType;
        plant.size = req.body.size;
        plant.edible = req.body.edible;
        plant.native = req.body.native;
        plant.bloomPeriod = req.body.bloomPeriod;
        plant.fruitBegin = req.body.fruitBegin;
        plant.fruitEnd = req.body.fruitEnd;

        plant.save()
        .then(() => res.json('Plant updated.'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;


module.exports = router;