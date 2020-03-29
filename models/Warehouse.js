const mongoose = require('mongoose') 
const warehouseSchema = require('../schemas/warehouses')

module.exports = mongoose.model('Warehouse',warehouseSchema);