const mongoose = require('mongoose'), Schema = mongoose.Schema;
const Company = require('../model/company.model.js');
var ProductSchema = mongoose.Schema;

var ProductSchemaRef = new ProductSchema({
    _id:Number,
    pname:String,
    price:Number,
    description:String,
    image:String,
    company: {type:Schema.Types.ObjectId, ref : 'Company'}
});

var ProductModel = mongoose.model("Product",ProductSchemaRef);

module.exports = ProductModel;
