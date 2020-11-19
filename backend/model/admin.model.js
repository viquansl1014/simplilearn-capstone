var mongoose = require("mongoose");

var AdminSchema = mongoose.Schema;

var AdminSchemaRef = new AdminSchema({
    _id:Number,
    uname:String,
    password:String
});

var AdminModel = mongoose.model("admin",AdminSchemaRef);

module.exports = AdminModel;