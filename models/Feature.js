const  mongoose = require('mongoose');
const featureSchema = require('../schemas/features');

module.exports = mongoose.model('Feature',featureSchema);