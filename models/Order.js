const mongoose = require('mongoose');
const orderSchema = require('../schemas/orders');

module.exports = mongoose.model('Order',orderSchema);