const mongoose = require('mongoose');
const productSchema = require('../schemas/products');

module.exports = mongoose.model('Product',productSchema);