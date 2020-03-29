const mongoose = require('mongoose');
const managerSchema = require('../schemas/managers');

module.exports = mongoose.model('Manager',managerSchema);