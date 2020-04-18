const express = require('express');
const path = require('path');
const router = express.Router();
const Product = require('../models/Product');
const util = require('./util');

const { responseClient } = util;

router.get('/getAllTvs',function(req,res){
    var { pageNum } = req.query;
    var skip = (pageNum - 1) < 0 ? 0 : (pageNum - 1) * 10;
    var limit = 10;
    var data = {
        total:0,
        products:[]
    };
    Product.count({})
        .then(count=>{
            data.total = count;
            Product.find({})
                .skip(skip)
                .limit(limit)
                .then(products=>{
                    data.products = products;
                    responseClient(res, 200, 1, 'ok', data);
                })
        })
})

module.exports = router;