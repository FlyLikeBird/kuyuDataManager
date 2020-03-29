
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = new mongoose.Schema({
    createtime:String,
    fromUser:{ type:Schema.Types.ObjectId, ref:'User'},
    status:Boolean, // 已付款 未付款
    byProduct:{ type:Schema.Types.ObjectId, ref:'Product'},
    fromWarehouse:{ type:Schema.Types.ObjectId, ref:'Warehouse'}

});


