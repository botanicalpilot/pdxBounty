// This is going to look similar for a;; future schemas. 
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const plantSchema = new Schema({
    xLong: { type: Number, required: true },
    yLat: { type: Number, required: true },
    streetTreeID: { type: String, required: false },
    species:{ type: String, required: false },
    DBH:{ type: Number, required: false },
    condition:{ type: String, required: false },
    siteDeveloped:{ type: String, required: false },
    siteSize:{ type: String, required: false },
    notes:{ type: String, required: false },
    address:{ type: String, required: false },
    neighborhood:{ type: String, required: false },
    scientific:{ type: String, required: false },
    family:{ type: String, required: false },
    genus:{ type: String, required: false },
    common:{ type: String, required: false },
    functionalType:{ type: String, required: false },
    size:{ type: String, required: false },
    edible:{ type: String, required: false },
    native:{ type: String, required: false },
    bloomPeriod:{ type: String, required: false },
    fruitBegin:{ type: String, required: false },
    fruitEnd:{ type: String, required: false }
    }); 

const Plant = mongoose.model('Plant', plantSchema);

module.exports = Plant;