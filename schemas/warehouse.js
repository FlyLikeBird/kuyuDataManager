
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = new mongoose.Schema({
    address:String,
    createtime:String,
    stores:[   
        {
            productId:{type:Schema.Types.ObjectId, ref:'Product'},
            inventory:Number
        }
    ]
});


