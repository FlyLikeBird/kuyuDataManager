const mongoose = require('mongoose') 
const warehouseSchema = require('../schemas/warehouse')

module.exports = mongoose.model('Warehouse',warehouseSchema);